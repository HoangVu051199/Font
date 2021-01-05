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
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
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
        path: 'detail/:id',
        component: DetailproductComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'book',
        component: BookComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
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
    BookComponent,
    BlogComponent,
    CategoryComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(mainRoutes)],
})
export class MainModule {}

