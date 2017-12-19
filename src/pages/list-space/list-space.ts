import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar  } from 'ionic-angular';
import { SpaceDetailPage } from '../space-detail/space-detail';
import { SpaceForServiceProvider } from '../../providers/space-for-service/space-for-service';
/**
 * Generated class for the ListSpacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-space',
  templateUrl: 'list-space.html',
})
export class ListSpacePage {
  @ViewChild(Navbar) navBar: Navbar;
  spacelists : any;
  header : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private spaceForService: SpaceForServiceProvider) {
    this.header = navParams.get('selectedSpace');
    this.spacelists = JSON.parse(navParams.get('spaceList'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSpacePage');
  }

  backButtonClick() {
    console.log("back button click");
     this.navCtrl.setRoot('HomePage');
  }
  loadSpaceDetails(space) {
    console.log('ionViewDidLoad loadSpaceDetails'+space);
    this.navCtrl.push(SpaceDetailPage,{ space : JSON.stringify(space) });
  }

  onLike (id) {
    this.spaceForService.updateLike(id).subscribe(data => 
      this.checkForEmpty(data)
    );
  }

  onComment () {

  }

  onShare () {

  }

  checkForEmpty(data) {
    for(let result of data){
      if (result != null) {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        break;
      }
    }
  }
}
