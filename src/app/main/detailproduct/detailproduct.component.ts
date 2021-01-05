import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/lib/api.service';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent extends BaseComponent implements OnInit {

  item:any;

  constructor(private fb: FormBuilder, injector: Injector, private service: ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/product/get-pro-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
        this.item = res;
      }); 
    });
  }
}
