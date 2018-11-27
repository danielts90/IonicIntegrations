import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarCodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bar-code-scanner',
  templateUrl: 'bar-code-scanner.html',
})
export class BarCodeScannerPage {

  result: BarcodeScanResult;
  dataToEncode: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private barcode: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarCodeScannerPage');
  }

  async scanBarcode() {
    try {

      const options: BarcodeScannerOptions = {
        prompt:'Point your camera at a barcode',
        showTorchButton: true,
        showFlipCameraButton: true,
        disableSuccessBeep: false
      }

      this.result = await this.barcode.scan(options);
      console.log(this.result);
      
    } catch (error) {
      console.error(error);
    }
  }

  async encodeData(){
    try{
      await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.dataToEncode);
      
    }
    catch(e){
      console.log(e);
    }
  }

}
