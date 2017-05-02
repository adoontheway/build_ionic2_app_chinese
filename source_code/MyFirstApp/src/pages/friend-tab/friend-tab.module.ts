import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FriendTab } from './friend-tab';

@NgModule({
  declarations: [
    FriendTab,
  ],
  imports: [
    IonicModule.forRoot(FriendTab),
  ]
})
export class FriendTabModule {}
