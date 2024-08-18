import { Component } from '@angular/core';
import { FakeApiService } from '../../services/fake-api.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  searchTerm: string = '';
  list: any[] = [];
  sortOrder: string = '';  // Default sort order
  sortOrderAlpha: string = '';

  constructor(public fakeapi: FakeApiService, public nav: NavService){
    this.initialize()
  }

  async initialize(){
    await this.fakeapi.getCategories();
    this.list = await this.fakeapi.getProducts();
  }

  openItemDetails(item: any){
    this.nav.push(`pages/products/details/${item.id}` )
  }

  async productsByCategory(cat: any){
    this.list = await this.fakeapi.getProductsByCategory(cat);
  }

  async setProductSort(type: string){
    this.sortOrder = type;
  }

  async setProductSortAlpha(type: string){
    this.sortOrderAlpha = type;
  }


}
