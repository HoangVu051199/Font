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

  public monans: any;
  public listCart: any;
  public item: any;

  constructor(private fb: FormBuilder, injector: Injector, private service: CartService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserMonanList();
  }

  refserMonanList(){
    this._api.get('/api/monan/get-all').subscribe(data => {
      this.monans = data;
    });
  }

  addCart(monan) {

    this.listCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    if (this.listCart.length)
    {
      this.listCart.map( (vl) => {
        if (vl.ma_mon == monan.ma_mon)
          {
          vl.size ++
        }

        else {
          this.listCart.push(monan);
        }

        // vl.size * vl.price

        return vl
      })
    } else {
      this.listCart.push(monan);
    }

    localStorage.setItem('cart', JSON.stringify(this.listCart));
    alert('Thêm thành công');
  }
}
