import { Component } from '@angular/core';
import { Platform,ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Keyboard } from 'ionic-angular';
import { Settings } from '../settings/settings';
import { Data } from '../../providers/data';
import { Reddit } from '../../providers/reddit';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subredditValue:string;
  subredditControl:FormControl;
  constructor(public dataService:Data, public redditService:Reddit,
    public modalCtrl:ModalController, public platform:Platform,
    public keyboard:Keyboard, public iab:InAppBrowser) {
      this.subredditControl = new FormControl();
  }

  ionViewDidLoad(){
    this.subredditControl.valueChanges.debounceTime(1500)
      .distinctUntilChanged().subscribe(subreddit => {
        if(subreddit != '' && subreddit){
          this.redditService.subreddit = subreddit;
          this.changeSubreddit();
          this.keyboard.close();
        }
      });

    this.platform.ready().then(()=>{
      this.loadSettings();
    })
  }
  
  loadSettings():void{
    this.dataService.getData().then((settings)=>{
      if( settings && typeof(settings) != "undefined"){
        let newSettings = JSON.parse(settings);
        if( newSettings.length != 0){
          this.redditService.sort = newSettings.sort;
          this.redditService.perPage = newSettings.perPage;
          this.redditService.subreddit = newSettings.subreddit;
        }
      }
      this.changeSubreddit();
    })
  }

  showComments(post):void{
    let browser = this.iab.create('http://reddit.com'+post.data.permalnk,'_system');
  }
  openSettings():void{
    let settingsModal = this.modalCtrl.create(Settings,{
      perPage:this.redditService.perPage,
      sort : this.redditService.sort,
      subreddit : this.redditService.subreddit
    });
    settingsModal.onDidDismiss(settings => {
      if(settings){
        this.redditService.perPage = settings.perPage;
        this.redditService.sort = settings.sort;
        this.redditService.subreddit = settings.subreddit;
        this.dataService.save(settings);
        this.changeSubreddit();
      }
    });
    settingsModal.present();
  }
  playVideo(e, post):void{
    let video;
    if( e.target.localName == 'video'){
      video = e.target;
    }else{
      video = e.target.getElementsByTagName('video')[0];
    }
    
    if( !post.alreadyLoaded ){
      post.showLoader = true;
    }

    if( video.paused ){
      video.play();
      video.addEventListener('playing', function(e){
        post.showLoader = false;
        post.alreadyLoaded = true;
      });
    }else{
      video.pause();
    }
  }
  loadMore():void{
    this.redditService.nextPage();
  }
  changeSubreddit():void{
    this.redditService.resetPosts();
  }
}
