
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from '../shared/slider/slider.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'detail',
        component: DetailproductComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    DetailproductComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(mainRoutes)],
})
export class MainModule {}

