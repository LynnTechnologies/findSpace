import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { SpaceForServiceProvider } from '../../providers/space-for-service/space-for-service';
import { SearchForServiceProvider } from '../../providers/search-for-service/search-for-service';

import { ListSpacePage } from '../list-space/list-space';
//import { NgModule }  from '@angular/core';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',  
  templateUrl: 'home.html',
})

export class HomePage {
  string : any[];
  spaceFor : any[];
  obj: any[];
  userData: any;
  spaceList : any;
    constructor(public navCtrl: NavController,private spaceForService: SpaceForServiceProvider
    ,private network: Network,private alertCtrl: AlertController,
    private searchForServiceProvider : SearchForServiceProvider,
  private loadingController : LoadingController ) {
    
      this.userData = { selectedSpace : '' };
      this.spaceForService.getPosts().subscribe(data => this.processList(data));
      this.string = ['Any','Hours','Day','Week','Month'];
      
      this.network.onDisconnect().subscribe(() => {
        this.presentAlert("No network connection", "app may not function properly");
      });
     // console.log(this.string);
      // for(let result of this.obj){
      //   console.log(result.spaceType); //this.strings.push(result.spaceType);
      // }
      
    }

    presentAlert(title,string) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: string,
        buttons: ['Dismiss']
      });
      alert.present();
    }

    processList(data) {
      this.spaceFor = [];
      for(let result of data){
       this.spaceFor.push(result.spaceType); //this.strings.push(result.spaceType);
      }
      console.log(this.spaceFor);
      return this.spaceFor;
    }

    searchSpace() {
      const loading = this.loadingController.create({
       spinner :'dots'
      });
      loading.present();

      //.subscribe(data => this.processList(data));
      let data = { selectedSpace : this.userData.selectedSpace,
                  rentBy : this.userData.rentBy};
      
      this.searchForServiceProvider.searchSpace(data).then((result) => {
        loading.dismiss();
        this.spaceList = JSON.stringify(result);
        this.navCtrl.push(ListSpacePage,{ spaceList : this.spaceList,selectedSpace : this.userData.selectedSpace});
      });
     
    }
}
