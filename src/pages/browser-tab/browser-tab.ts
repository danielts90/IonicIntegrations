import { BrowserTab } from '@ionic-native/browser-tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrowserTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browser-tab',
  templateUrl: 'browser-tab.html',
})
export class BrowserTabPage {

  website: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private broserTab: BrowserTab) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserTabPage');
  }

  async openBrowserTab(website: string){
    
    try {
      const isAvailable = this.broserTab.isAvailable();
      console.log(isAvailable);

      if(isAvailable){
        await this.broserTab.openUrl(website);
      }
      
    } catch (error) {
      console.error(error);
    } 
  }

}
