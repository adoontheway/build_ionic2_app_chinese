import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CampDetails } from '../pages/camp-details/camp-details';
import { Location } from '../pages/location/location';
import { MyDetails } from '../pages/my-details/my-details';
import { QuickListsHomePage } from '../pages/quicklistshome/quicklistshome';
import { CheckList } from '../pages/check-list/check-list';

import { Connectivity } from '../providers/connectivity';
import { Data } from '../providers/data';
import { GoogleMaps } from '../providers/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation'

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampDetails,
    Location,
    MyDetails,
    QuickListsHomePage,
    CheckList
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
    MyDetails,
    CampDetails,
    Location,
    QuickListsHomePage,
    CheckList
  ],
  providers: [
    Geolocation,
    Network,
    Data,
    Connectivity,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
