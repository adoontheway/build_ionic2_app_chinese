import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickListsHomePage } from './quicklistshome';

@NgModule({
  declarations: [
    QuickListsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(QuickListsHomePage),
  ],
  exports: [
    QuickListsHomePage
  ]
})
export class QuickListsHomeModule {}