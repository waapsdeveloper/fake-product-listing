import { Component } from '@angular/core';
import { FakeApiService } from '../../services/fake-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isCategoriesVisible = false;
  isAlphaVisible = false;
  isPriseVisible = false;
  searchTerm: string = '';
  isOpen = false;
  list: any[] = [];
  sortOrder: string = '';  // Default sort order
  sortOrderAlpha: string = '';
  constructor(public fakeapi: FakeApiService){
    this.initialize()
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
   toggleCategories() {
    this.isCategoriesVisible = !this.isCategoriesVisible; // Toggle the visibility
  }
  toggleAplha() {
    this.isAlphaVisible = !this.isAlphaVisible; // Toggle the visibility
  }
  togglePrise(){
    this.isPriseVisible = !this.isPriseVisible; // Toggle the visibility

  }

  async initialize(){
    await this.fakeapi.getCategories();
    this.list = await this.fakeapi.getProducts();
  }

  async productsByCategory(cat: any){
    console.log(cat)
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

  async productsByAlpha(order: string) {
    this.sortOrderAlpha = order;
    // Assuming you fetch and set products based on alphabetical order in the component
     // Replace with appropriate method if needed
  }
  


}
