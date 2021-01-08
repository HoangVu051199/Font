import { Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {

  public monan:any=[];
  loai: any;
  p: number = 1;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserLoaiList();
    this.refserMonanList();
  }

  refserLoaiList(){
    this._api.get("/api/loai/get-all").subscribe(data =>{
      this.loai= data;
    });
  }

  refserMonanList(){
    this._api.get("/api/monan/get-all").subscribe(data =>{
      this.monan= data;
    });
  }
}


