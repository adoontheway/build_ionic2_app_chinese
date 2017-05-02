import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,statusBar:StatusBar,splashScreen:SplashScreen,localNotifications:LocalNotifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if( platform.is('cordova')){
        localNotifications.isScheduled(1).then((scheduled) => {
          if(!scheduled){
            let firstNotificationTime = new Date();
            firstNotificationTime.setHours(firstNotificationTime.getHours()+24);
            localNotifications.schedule({
              id:1,
              title:'Snapaday',
              text:'Have you taken your snap today?',
              at : firstNotificationTime,
              every : 'day'
            });
          }
        });
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

