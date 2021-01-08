import {Component, OnInit, Injector} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {ApiService} from 'src/app/lib/api.service';
import {BaseComponent} from 'src/app/lib/base-component';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent extends BaseComponent implements OnInit {

  item: any;
  listCart: any;
  apiurl = environment.apiurl;
  monan: any;

  constructor(
    private fb: FormBuilder,
    private injector: Injector,
    private service: ApiService,
    private http: HttpClient) {
    super(injector);
  }

  ngOnInit(): void {
    this.listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params.id;
      this.http.get(this.apiurl + '/api/monan/get-by-id/' + id).subscribe(res => {
        this.item = res;
      });
    });
    this.refserProCategory1();
  }

  refserProCategory1()
  {
    this.monan=[];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/Monan/get-by-loai/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.monan = data;
      });
    });
  }

  addToCart(monan) {
    this._cart.addToCart(monan);
    alert('Thêm thành công!');
  }
}
