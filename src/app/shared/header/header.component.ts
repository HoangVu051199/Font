import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listCart: any;
  total: any;
  constructor() { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.listCart = JSON.parse(localStorage.getItem('cart'));
    this.listCart.map ((vl) => {
      this.total += vl.size * vl.price;
    })

  }
}
