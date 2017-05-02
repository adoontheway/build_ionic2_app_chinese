import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CheckList } from './check-list';

@NgModule({
  declarations: [
    CheckList,
  ],
  imports: [
    IonicModule.forRoot(CheckList),
  ],
  exports: [
    CheckList
  ]
})
export class CheckListModule {}
