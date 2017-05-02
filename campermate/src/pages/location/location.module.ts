import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Location } from './location';

@NgModule({
  declarations: [
    Location,
  ],
  imports: [
    IonicPageModule.forChild(Location),
  ],
  exports: [
    Location
  ]
})
export class LocationModule {}
