import { Component } from '@angular/core';
import { MyProvider } from '../../providers/my-provider'

/**
 * Generated class for the MyComponent page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'my-component',
  templateUrl: 'my-component.html',
})
export class MyComponent {
  text:any;
  constructor(public dataService:MyProvider) {
    this.text = "Hello World!";
    this.dataService.load().then((data) => {
      console.log(data);
    })
  }

}
