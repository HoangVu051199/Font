import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseComponent} from '../../lib/base-component';
import {CartService} from '../../lib/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit{

  public monans: any;
  public monan: any;

  constructor(private fb: FormBuilder, injector: Injector, private service: CartService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserMonanList();
    this.refserProMonanList();
  }

  refserMonanList(){
    this._api.get('/api/monan/get-all').subscribe(data => {
      this.monans = data;
    });
  }
  refserProMonanList(){
    this._api.get('/api/monan/get-pro-all').subscribe(data => {
      this.monan = data;
    });
  }

  addToCart(monan) {
    this._cart.addToCart(monan);
    alert('Thêm thành công!');
  }
}
