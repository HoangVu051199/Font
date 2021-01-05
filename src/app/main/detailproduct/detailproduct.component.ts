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
      })
    });

  }

  addCart() {
    this.listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    if (this.listCart.length) {
      this.listCart.map((vl) => {
        if (vl.ma_mon == this.item.ma_mon) {
          vl.size++
        } else {
          this.listCart.push(this.item);
        }

        return vl
      })
    } else {
      this.listCart.push(this.item);
    }

    // console.log(11, this.listCart);

    localStorage.setItem('cart', JSON.stringify(this.listCart));
    alert('thành công');
  }
}
