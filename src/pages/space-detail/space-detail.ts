import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ViewImagePage } from '../view-image/view-image';
import { PhotoViewer } from '@ionic-native/photo-viewer';
//import { CommonModule } from '@angular/common';  
/**
 * Generated class for the SpaceDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-space-detail',
  templateUrl: 'space-detail.html',
})
export class SpaceDetailPage {
  private space : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public photoViewer: PhotoViewer) {
    this.space = JSON.parse(navParams.get('space'));
  }

  backButtonClick() {
    this.navCtrl.pop();
 }

 homeButtonClick() {
  this.navCtrl.popToRoot();
  }

  addLike(id) {

  }


  viewImage(imageUrl) {
    console.log(JSON.stringify(imageUrl));
    this.photoViewer.show(imageUrl);
    //this.navCtrl.push(ViewImagePage,{ imageUrl : JSON.stringify(imageUrl) });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailPage');
  }

}
