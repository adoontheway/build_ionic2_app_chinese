import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { AnotherPage } from '../another-page/another-page'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController, platform :Platform) {
    platform.ready().then(()=>{
      console.log('Platform is ready...');
      
    })
  }
  go(event){
    console.log('button clicked')
    /*
    let myModal = this.modalCtrl.create(AnotherPage);
    myModal.onDidDismiss(data => {
      console.log(data);
    });
    myModal.present();
    */
    //this.navCtrl.setRoot(AnotherPage);
    this.navCtrl.push(AnotherPage)
  }
}
