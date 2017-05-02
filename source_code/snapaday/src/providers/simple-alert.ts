import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';

/*
  Generated class for the SimpleAlert provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SimpleAlert {

  constructor(public alertCtrl: AlertController) {
    console.log('Hello SimpleAlert Provider');
  }

  createAlert(title:string, message:string):any{
    return this.alertCtrl.create({
      title:title,
      message : message,
      buttons : [
        {
          text : 'OK'
        }
      ]
    });
  }
}
