import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BlackList } from './black-list';

@NgModule({
  declarations: [
    BlackList,
  ],
  imports: [
    IonicModule.forRoot(BlackList),
  ],
  exports: [
    BlackList
  ]
})
export class BlackListModule {}
