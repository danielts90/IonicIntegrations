import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';
/**
 * Generated class for the ApplicationMinimisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-application-minimise',
  templateUrl: 'application-minimise.html',
})
export class ApplicationMinimisePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platform: Platform,
              private appMinimise: AppMinimize) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationMinimisePage');
  }

  async minimise() {
    try{
      const result = await this.appMinimise.minimize();
      console.log(result);
      
    }
    catch(e){
      console.error(e);
      
    }
  }

}
