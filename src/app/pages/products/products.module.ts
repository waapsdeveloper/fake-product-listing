import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../../pipes/sort.pipe';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { SortAlphaPipe } from '../../pipes/sort-alpha.pipe';
import { FilterCategoryComponent } from '../../components/filter-category/filter-category.component';
import { SortByAlphaComponent } from '../../components/sort-by-alpha/sort-by-alpha.component';
import { SortByPriceComponent } from '../../components/sort-by-price/sort-by-price.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FilterPipe,
    SortPipe,
    SortAlphaPipe,
    ProductItemComponent,
    FilterCategoryComponent,
    SortByAlphaComponent,
    SortByPriceComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
