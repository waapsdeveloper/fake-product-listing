import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  list: any[] = [];
  categories: any[] = [];
  constructor(public network: NetworkService) { }


  async getCategories(){

    const res = await this.network.getCategories();
    console.log(res);

    let cats = res.map( (x: any, index: number) => {
      return {
        id: index,
        name: x,
        selected: false
      }
    });

    cats.unshift({
      id: 0,
      name: 'All',
      selected: false
    })


    this.categories = cats;

  }

  getProducts(sort = ''): Promise<any[]>{

    return new Promise( async resolve => {
      let params = {
        sort,
      }

      const res = await this.network.getProducts(params);
      console.log(res);

      this.list = res;
      resolve(res)
    })


  }

  async getProductsByCategory(cat: any): Promise<any[]>{

    return new Promise( resolve => {

      if(cat.name == 'All'){
        resolve(this.list);
        return;
      }
      console.log(cat)
      const res = this.list.filter( x => x.category == cat.name);
      console.log(res);
      resolve(res);

    })


  }




}
