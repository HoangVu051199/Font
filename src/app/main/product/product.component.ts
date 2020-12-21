import { Component, OnInit, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit{
  public monan:any=[];
  loai: any;
  ten_loai:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    //this.refserProCategory1();
   //this.refserProCategory();
    this.refserLoaiList();
  }
  // refserProCategory1()
  // {
  //   this.monan=[];
  //   this._route.params.subscribe(params => {
  //     let id = params['id'];
  //     this._api.get('/api/Monan/get-by-loai/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
  //       this.monan = data;
  //     });
  //   });
  // }
  // refserProCategory()
  // {
  //   this.loai=[];
  //   this._route.params.subscribe(params => {
  //     let id = params['ma_loai'];
  //     let ten_loai = params['ten_loai'];
  //     this._service.get('/api/loai/get-by-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
  //       this.loai = data;
  //       this.ten_loai = ten_loai;
  //     });
  //   });
  // }
  refserLoaiList(){
    this._api.get("/api/monan/get-all").subscribe(data =>{
      this.monan=data;
    })
  }
}