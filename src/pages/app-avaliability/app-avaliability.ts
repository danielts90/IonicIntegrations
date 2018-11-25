import { AppAvailability } from '@ionic-native/app-availability';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-app-avaliability',
  templateUrl: 'app-avaliability.html',
})
export class AppAvaliabilityPage {

  aplicationName: string;
  aplicationResult: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private platfomr: Platform,
              private appAvailability: AppAvailability) {
     this.aplicationName = 'com.twitter.android';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppAvaliabilityPage');
  }

  doesUserHaveApplication(){
    this.platfomr.ready().then(() => {
      if(this.platfomr.is('ios')){
        this.checkForApplication('twitter://');
      }
      else if(this.platfomr.is('android')){
        this.checkForApplication('com.twitter.android');
      }

    })
  }

  checkForApplication(name) {
    this.appAvailability.check(name).then(
      yes => this.aplicationResult = `${ name } está instalado no dispositivo.`,
      no => this.aplicationResult = `${ name } não está instalado.`
    );
  }

}
