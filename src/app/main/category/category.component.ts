import {Component, Injector, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {BaseComponent} from '../../lib/base-component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends BaseComponent implements OnInit {

  public monan:any=[];
  loai: any;
  ten_loai:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProCategory1();
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
      this.loai= data;
    });
  }
}
