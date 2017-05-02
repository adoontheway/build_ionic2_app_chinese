import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';
/*
  Generated class for the Connectivity provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var Connection;

@Injectable()
export class Connectivity {

  onDevice:boolean;
  constructor(public platform:Platform, public network:Network) {
    this.onDevice = this.platform.is('cordova');
  }

  isOnline():boolean{
    if( this.onDevice){
      return this.network.type !== "none";
    }else{
      return navigator.onLine;
    }
  }
  isOffline():boolean{
    if( this.onDevice){
      return this.network.type === "none";
    }else{
      return !navigator.onLine;
    }
  }
}
