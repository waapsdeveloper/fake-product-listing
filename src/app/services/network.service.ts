import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(
    public api: ApiService,
    public router: Router,
  ) { }

  // Authentication Related APIs
  getProducts(params: any){
    const str = this.serialize(params)
    return this.httpGetResponse(`products?${str}`, null)
  }


  serialize = (obj: any) => {
    const str: any[] = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        let f: string =
          encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]);
        str.push(f);
      }
    }
    return str.join('&');
  };

  // Function for POST method
  httpPostResponse(
    key: any,
    data: any,
    id = null,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'post',
      key,
      data,
      id,
      contenttype
    );
  }

  // Function for GET method
  httpGetResponse(
    key: any,
    id = null,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'get',
      key,
      {},
      id,
      contenttype
    );
  }




  httpResponse(
    type = 'get',
    key: any,
    data: any,
    id = null,
    contenttype = 'application/json'
  ): Promise<any> {
    return new Promise((resolve, reject) => {

      const url = key + (id ? '/' + id : '');
      const seq =
        type === 'get' ? this.api.get(url, {}) : this.api.post(url, data);

      seq.subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err.error);
        },
      });
    }).catch((err) => {
      if (err.status == 'Error') {
        if (err.message == 'User Not Logged In!') {
          this.router.navigate(['']);
        }
      }
    });
  }
}
