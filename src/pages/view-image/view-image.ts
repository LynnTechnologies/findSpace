import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewImagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-image',
  templateUrl: 'view-image.html',
})
export class ViewImagePage {
  imageUrl:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageUrl = JSON.parse(navParams.get('imageUrl'));
  }

  homeButtonClick() {
    this.navCtrl.popToRoot();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewImagePage');
  }

}
