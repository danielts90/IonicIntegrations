import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the AdMobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ad-mob',
  templateUrl: 'ad-mob.html',
})
export class AdMobPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private adMob: AdMobFree) {
    this.showBannerAd();
    // this.showInterstitialAd();
    this.showVideoRewardsAd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdMobPage');
  }

  async showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      //id: 'ca-pub-xxxxxxxxx',
      isTesting: true,
      autoShow: true,
      bannerAtTop: true,
    }

    this.adMob.banner.config(bannerConfig);

    try {
      const result = this.adMob.banner.prepare();
      console.log(result);
      
    } catch (error) {
      console.error(error); 
    }
  }

  async showInterstitialAd() {

    try {
     const interstitialConfig: AdMobFreeInterstitialConfig = {
       //id: '',
       isTesting: true,
       autoShow: true
     };
     this.adMob.interstitial.config(interstitialConfig);

     const result = await this.adMob.interstitial.prepare();
     console.log(result);
     
      
    } catch (error) {
      console.error(error); 
    }
  }

  async showVideoRewardsAd() {
    try {
      const videoRewardsConfig: AdMobFreeRewardVideoConfig = {
        //id:
        isTesting: true,
        autoShow: true
      }

      this.adMob.rewardVideo.config(videoRewardsConfig);
      const result = this.adMob.rewardVideo.prepare();
      console.log(result);
      
    } catch (error) {
      console.log(error);
      
    }
  }
}
