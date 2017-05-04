import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TecnoPlay } from './tecno-play';

@NgModule({
  declarations: [
    TecnoPlay,
  ],
  imports: [
    IonicPageModule.forChild(TecnoPlay),
  ],
  exports: [
    TecnoPlay
  ]
})
export class TecnoPlayModule {}
