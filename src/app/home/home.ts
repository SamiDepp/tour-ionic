import { Component } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
splash=true;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }
  ionViewDidLoad(){
    setTimeout(() =>this.splash=false,4000);
  }

}
