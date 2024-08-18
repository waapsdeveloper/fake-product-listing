import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../../pipes/sort.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SortAlphaPipe } from '../../pipes/sort-alpha.pipe';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { SortByAlphaComponent } from './sort-by-alpha/sort-by-alpha.component';
import { SortByPriceComponent } from './sort-by-price/sort-by-price.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FilterPipe,
    SortPipe,
    SortAlphaPipe,
    ProductItemComponent,
    StarRatingComponent,
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
