import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrirActionShet(): void{
    this.rootPage = 'ActionSheetPage';
  }

  abrirAdMob(): void {
    this.rootPage = 'AdMobPage';
  }

  abrirApplicationActive(): void {
    this.rootPage = 'AppAvaliabilityPage';
  }

  abrirAppMinimize(): void {
    this.rootPage = 'ApplicationMinimisePage';
  }

  abrirBarCodeScanner(): void {
    this.rootPage = 'BarCodeScannerPage';
  }

  abrirBateryStatusPage(): void {
    this.rootPage = 'BateryStatusPage';
  }

  abrirBrowserTab(): void {
    this.rootPage = 'BrowserTabPage';
  }

  abrirCamera(): void {
    this.rootPage = 'CameraPage';
  }
}

