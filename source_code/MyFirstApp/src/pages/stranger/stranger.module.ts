import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Stranger } from './stranger';

@NgModule({
  declarations: [
    Stranger,
  ],
  imports: [
    IonicModule.forRoot(Stranger),
  ],
  exports: [
    Stranger
  ]
})
export class StrangerModule {}
