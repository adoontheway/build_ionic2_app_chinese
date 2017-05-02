import { Component } from '@angular/core';
import { ModalController, AlertController, Platform } from 'ionic-angular';
import { PhotoModel } from '../../models/photo-model';
import { SimpleAlert } from '../../providers/simple-alert';
import { Camera } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { SlideShow } from '../slide-show/slide-show';
import { Data } from '../../providers/data';

declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loaded : boolean = false;
  photoTaken : boolean = false;
  photos:PhotoModel[] = [];
  constructor(public dataService: Data,public simpleAlert:SimpleAlert,public platform:Platform,
  public modalCtrl:ModalController, public alertCtrl:AlertController, public camera:Camera,
  public file:File, public socialSharing:SocialSharing) {

  }
  ionViewDidLoad(){
    this.platform.ready().then(()=>{
      this.loadPhotos();
    });
    document.addEventListener('resume', ()=> {
      if( this.photos.length > 0){
        let today = new Date();
        if( this.photos[0].date.setHours(0,0,0,0) === today.setHours(0,0,0,0)){
          this.photoTaken = true;
        }else{
          this.photoTaken = false;
        }
      }
    }, false);
  }

  loadPhotos():void{
    this.dataService.getData().then((photos)=>{
      let savedPhotos:any = false;

      if( typeof(photos) != 'undefined'){
        savedPhotos = JSON.parse(photos);
      }

      if( savedPhotos ){
        savedPhotos.forEach(savedPhoto => {
          this.photos.push(new PhotoModel(savedPhoto.image, new Date(savedPhoto.date)));
        });
      }

      if( this.photos.length > 0){
        let today = new Date();
        if( this.photos[0].date.setHours(0,0,0,0) === today.setHours(0,0,0,0)){
          this.photoTaken = true;
        }
      }

      this.loaded = true;
    });
  }

  takePhoto():any{
    if( !this.loaded || this.photoTaken){
      return false;
    }
    if( !this.platform.is('cordova')){
      console.log('You can only take photos on a device!')
      return false;
    }

    let options = {
      quality : 100,
      destinationType : 1,
      sourceType : 1,
      encodingType : 0,
      cameraDirection : 1,
      saveToPhotoAlbum : true
    };
    this.camera.getPicture(options).then((imagePath) =>{
      let currentName = imagePath.replace(/^.*[\\\/]/,'');
      let d = new Date(),
      n = d.getTime(),
      newFileName = n+'.jpg';
      if( this.platform.is('ios')){
        this.file.moveFile(cordova.file.tempDirectory,currentName,
        cordova.file.dataDirectory, newFileName).then((success:any)=>{
          this.photoTaken = true;
          this.createPhoto(success.nativeURL);
          this.sharePhoto(success.nativeURL);
        }, (err)=>{
          console.log(err);
          let alert = this.simpleAlert.createAlert('Oops!','Something went wrong.');
          alert.present();
        });
      }else{
        this.photoTaken = true;
        this.createPhoto(imagePath);
        this.sharePhoto(imagePath);
      }
    },(err)=>{
      let alert = this.simpleAlert.createAlert('Oops!','Something went wrong.');
      alert.present();
    })
    
  }

  createPhoto(photo):void{
    let newPhoto = new PhotoModel(photo, new Date());
    this.photos.unshift(newPhoto);
    this.save();
  }

  removePhoto(photo):void{
    let today = new Date();
    if( photo.date.setHours(0,0,0,0) === today.setHours(0,0,0,0)){
      this.photoTaken =false;
    }
    let index = this.photos.indexOf(photo);
    if( index != -1){
      this.photos.splice(index, 1);
      this.save();
    }
  }

  playSlideshow():void{
    if( this.photos.length > 1){
      let modal = this.modalCtrl.create(SlideShow,{
        photos:this.photos
      });
      modal.present();
    }else{
      let alert = this.simpleAlert.createAlert('Oops!','You need at least two photos before you can play a slideshow.');
      alert.present();
    }
  }

  sharePhoto(image):void{
    let alert = this.alertCtrl.create({
      title:'Nice one!',
      message : 'You\'ve taken your photo for today, would you also like to share it?',
      buttons:[
        {
          text : 'No, Thanks.'
        },
        {
          text :'Share',
          handler: ()=>{
            this.socialSharing.share('I\'m takeing a selfie every day with #Snapaday', null, image, null)
          }
        }
      ]
    });
    alert.present();
  }

  save():void{
    this.dataService.save(this.photos);
  }
}
