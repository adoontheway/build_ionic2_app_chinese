import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnotherPage } from '../pages/another-page/another-page';
import { HttpModule } from '@angular/http';
//import { MyPipe } from '../pipes/my-pipe';
//import { MyProvider} from '../providers/my-provider';
//import { MyComponent } from '../pages/my-component/my-component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnotherPage
  //  MyPipe,
//    MyComponent
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'BACK',
      iconMode: 'ios',
      modalEnter : 'modal-slide-in',
      modalLeave : 'modal-slide-out',
      tabbarPlacement : 'bottom',
      pageTransition : 'ios',
      mode : 'md',
      platforms :{
        ios : {
          tabbarPlacement : 'top'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnotherPage
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
   // MyProvider
  ]
})
export class AppModule {}
