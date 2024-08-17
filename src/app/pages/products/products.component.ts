import { Component } from '@angular/core';
import { FakeApiService } from '../../services/fake-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(public fakeapi: FakeApiService){
    this.initialize()
  }

  async initialize(){
    const res = await this.fakeapi.getProducts();
  }


}
