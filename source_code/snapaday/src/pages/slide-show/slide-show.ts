import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlideShow page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slide-show',
  templateUrl: 'slide-show.html',
})
export class SlideShow {
  
  @ViewChild('imagePlayer') imagePlayer:ElementRef;

  imagePlayerInterval:any;
  photos:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.photos = this.navParams.get('photos');
  }

  ionViewDidLoad() {
    this.playPhotos();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  playPhotos(){
    let imagePlayer = this.imagePlayer.nativeElement;
    let i = 0;
    clearInterval(this.imagePlayerInterval);
    this.imagePlayerInterval = setInterval(()=>{
      if( i < this.photos.length ){
        imagePlayer.src = this.photos[i].image;
        i++;
      }else{
        clearInterval(this.imagePlayerInterval);
      }
    },500);
  }
}
