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
  ten_loai:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProCategory1();
   //this.refserProCategory();
    this.refserLoaiList();
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
  refserLoaiList(){
    this._api.get("/api/loai/get-all").subscribe(data =>{
      this.loai=data;
    })
  }
}


