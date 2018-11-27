import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

/**
 * Generated class for the BateryStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batery-status',
  templateUrl: 'batery-status.html',
})
export class BateryStatusPage {

  batteryPercente: BatteryStatusResponse

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private battery: BatteryStatus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BateryStatusPage');
  }

  getBatteryOnChange(){
      this.battery.onChange().subscribe(battery => {
        this.batteryPercente = battery;
        console.log(this.batteryPercente.level);
      })
  }

  getBatteryOnCritical(){
    this.battery.onCritical().subscribe(battery => this.batteryPercente = battery)
  }
  getBatteryOnLow(){
    this.battery.onLow().subscribe(battery => this.batteryPercente = battery)
  }
  

}
