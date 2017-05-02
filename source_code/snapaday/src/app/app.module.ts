import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule,Storage } from '@ionic/storage'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DaysAgo } from '../pipes/days-ago';
import { SlideShow } from '../pages/slide-show/slide-show';
import { SimpleAlert } from '../providers/simple-alert';
import { Data } from '../providers/data';

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SlideShow,
    DaysAgo
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SlideShow
  ],
  providers: [
    SocialSharing,
    LocalNotifications,
    Camera,
    File,
    Data,
    SimpleAlert,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
