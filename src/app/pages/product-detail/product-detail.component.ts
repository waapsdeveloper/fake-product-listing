import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { ActivatedRoute } from '@angular/router';
import { FakeApiService } from '../../services/fake-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  item: any;

  constructor(public fakeapi: FakeApiService, public nav: NavService, private activatedRoute: ActivatedRoute ){
    this.initialize()
  }

  async initialize(){
    const params = await this.activatedRoute.snapshot.params;

    if(params['id']){
      const res = await this.fakeapi.getProductByid(params['id']);
      this.item = res;
    }


  }

}
