import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideShow } from './slide-show';

@NgModule({
  declarations: [
    SlideShow,
  ],
  imports: [
    IonicPageModule.forChild(SlideShow),
  ],
  exports: [
    SlideShow
  ]
})
export class SlideShowModule {}
