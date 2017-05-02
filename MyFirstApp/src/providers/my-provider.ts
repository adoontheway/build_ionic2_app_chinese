import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyProvider {
  data : any;
  constructor(public http: Http) {
    console.log('Hello MyProvider Provider');
  }
  load (){
    if(this.data){
      return Promise.resolve(this.data)
    }
    return new Promise(resolve => {
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
