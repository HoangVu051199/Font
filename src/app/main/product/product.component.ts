import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';
import { CartService } from 'src/app/lib/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit{

  public monans:any;
  public listCart: any;
  public item:any;

  constructor(private fb: FormBuilder, injector: Injector, private service: CartService) {
    super(injector);
  }

  ngOnInit(): void {
    //this.refserProCategory1();
   //this.refserProCategory();
    this.refserMonanList();
  }
  refserMonan1()
  {
    this.monans=[];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/Monan/get-by-id/'+id).pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
        this.monans = data;
      });
    });
  }
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
  refserMonanList(){
    this._api.get('/api/monan/get-all').subscribe(data =>{
      this.monans =data;
    });
  }
  addCart() {
    this.listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    this.listCart.push(this.item);
    localStorage.setItem('cart', JSON.stringify(this.listCart));
    alert('Thêm thành công');
}
}