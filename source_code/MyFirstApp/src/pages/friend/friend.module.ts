import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Friend } from './friend';

@NgModule({
  declarations: [
    Friend,
  ],
  imports: [
    IonicModule.forRoot(Friend),
  ],
  exports: [
    Friend
  ]
})
export class FriendModule {}
