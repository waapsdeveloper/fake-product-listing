import { Component } from '@angular/core';
import { FakeApiService } from '../../services/fake-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isCategoriesVisible = true;
  searchTerm: string = '';
  isOpen = false;
  list: any[] = [];
  sortOrder: string = '';  // Default sort order
  constructor(public fakeapi: FakeApiService){
    this.initialize()
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
   toggleCategories() {
    this.isCategoriesVisible = !this.isCategoriesVisible; // Toggle the visibility
  }

  async initialize(){
    await this.fakeapi.getCategories();
    this.list = await this.fakeapi.getProducts();
  }

  async productsByCategory(cat: any){

    console.log(cat)

    // URL encode the category name
    this.list = await this.fakeapi.getProductsByCategory(cat);

  }

  async setProductSort(type: string){
    this.toggleDropdown()
    // this.list = await this.fakeapi.getProducts(type);
    this.sortOrder = type;
  }

  doSearch($event: any){
    let v = $event.target.value;
    console.log(v);





  }


}
