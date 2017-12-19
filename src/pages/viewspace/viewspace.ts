import { IonicPage,NavController, NavParams , LoadingController } from 'ionic-angular';
//import { Http, RequestOptions,Headers } from '@angular/http';
import { Storage } from '@ionic/storage'; 
import { Component } from '@angular/core';
import { SearchForServiceProvider } from '../../providers/search-for-service/search-for-service';
import { ListSpacePage } from '../list-space/list-space';
import { SpaceDetailPage } from '../space-detail/space-detail';
import { SpaceForServiceProvider } from '../../providers/space-for-service/space-for-service';
import { HomePage } from '../home/home';
 /**
 *
 * Generated class for the ViewspacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-viewspace',
  templateUrl: 'viewspace.html'
})
export class ViewspacePage {
  private spacelists : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingController : LoadingController, private storage : Storage,
    private searchForServiceProvider : SearchForServiceProvider,
    private spaceForService: SpaceForServiceProvider) {
      this.listSpace();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewspacePage');
  }

  public listSpace() {
    const loading = this.loadingController.create({
     spinner :'dots'
    });
    loading.present();
    this.storage.get('userid') .then((val) => {
      let data = { ownerid : val};
      this.searchForServiceProvider.searchSpace(data).then((result) => {
        loading.dismiss();
        this.spacelists = result;
      });
    });
   
  }

  
  backButtonClick() {
    console.log("back button click");
     this.navCtrl.setRoot(HomePage);
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
