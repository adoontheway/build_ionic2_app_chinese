import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDetails } from './my-details';

@NgModule({
  declarations: [
    MyDetails,
  ],
  imports: [
    IonicPageModule.forChild(MyDetails),
  ],
  exports: [
    MyDetails
  ]
})
export class MyDetailsModule {}
