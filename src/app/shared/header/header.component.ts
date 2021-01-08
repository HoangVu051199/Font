import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../lib/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  items:any;
  total:any;
  aaaa: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.aaaa = res.length;
      console.log(res.length);
      this.items = res;
      this.total = 0;
      for(let x of this.items){
        x.money = x.quantity * x.price;
        this.total += x.quantity * x.price;
      }
    });
  }
  clearCart() {
    this._cart.clearCart();
    alert('Bạn muốn xóa sản phẩm này ra khỏi giỏ hàng');
  }
  addQty(item, quantity){
    item.quantity =  quantity;
    item.money =  Number.parseInt(item.quantity) *  item.price;
    this._cart.addQty(item);
  }
}
