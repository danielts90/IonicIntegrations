import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BateryStatusPage } from './batery-status';

@NgModule({
  declarations: [
    BateryStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(BateryStatusPage),
  ],
})
export class BateryStatusPageModule {}
