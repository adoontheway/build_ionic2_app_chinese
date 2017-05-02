import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampDetails } from './camp-details';

@NgModule({
  declarations: [
    CampDetails,
  ],
  imports: [
    IonicPageModule.forChild(CampDetails),
  ],
  exports: [
    CampDetails
  ]
})
export class CampDetailsModule {}
