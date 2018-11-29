import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { ActionSheet } from '@ionic-native/action-sheet';
import { AdMobFree} from '@ionic-native/admob-free';
import { AppAvailability } from '@ionic-native/app-availability';
import { AppMinimize }  from '@ionic-native/app-minimize';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BatteryStatus } from '@ionic-native/battery-status';
import { BrowserTab } from '@ionic-native/browser-tab'
import { Camera }from '@ionic-native/camera'

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActionSheet,
    AdMobFree,
    AppAvailability,
    AppMinimize,
    BarcodeScanner,
    BatteryStatus,
    BrowserTab,
    Camera
  ]
})
export class AppModule {}
