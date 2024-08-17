import { Component } from '@angular/core';
import { FakeApiService } from '../../services/fake-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  list: any[] = [];
  constructor(public fakeapi: FakeApiService){
    this.initialize()
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


}
