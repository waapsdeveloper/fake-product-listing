import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  list: any[] = [];
  constructor(public network: NetworkService) { }

  async getProducts(limit = 100, offset = 0){

    let params = {
      limit,
      offset
    }

    const res = await this.network.getProducts(params);
    console.log(res);

    this.list = res;

  }



}
