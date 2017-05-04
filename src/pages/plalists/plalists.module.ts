import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Plalists } from './plalists';

@NgModule({
  declarations: [
    Plalists,
  ],
  imports: [
    IonicPageModule.forChild(Plalists),
  ],
  exports: [
    Plalists
  ]
})
export class PlalistsModule {}
