import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AnotherPage } from './another-page';

@NgModule({
  declarations: [
    AnotherPage,
  ],
  imports: [
    IonicModule.forRoot(AnotherPage),
  ],
  exports: [
    AnotherPage
  ]
})
export class AnotherPageModule {}
