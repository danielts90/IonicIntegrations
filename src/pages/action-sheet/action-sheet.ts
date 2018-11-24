import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  botaoEscolhido: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheet: ActionSheet) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

  async showActionSheet() {
    try {
      const options: ActionSheetOptions  = {
        title: 'Exemplo ActionSheet',
        subtitle: 'Escolha uma opção.',
        buttonLabels: ['Facebook', 'Twitter', 'Linkedin'],
        addCancelButtonWithLabel: 'Cancel',
        addDestructiveButtonWithLabel: 'Delete',
        destructiveButtonLast: true
      }
  
      const selectButtonIndex = await this.actionSheet.show(options);
      console.log(`usuário selecionou ${selectButtonIndex}`);
      
      switch(selectButtonIndex){
        case 1: this.botaoEscolhido = 'Facebook'
          break;
        case 2: this.botaoEscolhido = 'Twitter'
          break;
        case 3: this.botaoEscolhido = 'Linkedin'
          break;
        case 4 : this.botaoEscolhido = 'Delete'
          break;
      }
      
    } catch (e) {
      console.error(e);
    }
    
  }

}
