import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the CreatespacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createspace',
  templateUrl: 'createspace.html',
})
export class CreatespacePage {

  private createSpaceURL:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public keyboard: Keyboard,private http:Http,private storage : Storage,
    private alertCtrl : AlertController) {
      this.createSpaceURL = 'http://gateforyou.16mb.com/createspace.php';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatespacePage');
  }
  
  private propertyName : any;
  private address : any;
  private sqft : any;
  private permission : any;
  private spaceType : any;
  private location : any;
  private imageURL : any;
  createSpace() {
    if ( this.propertyName == null || this.address == null || this.sqft == null 
      || this.permission == null || this.spaceType == null || this.location == null 
      || this.imageURL == null ) {
      let alert = this.alertCtrl.create({
        title: 'Invalid',
        subTitle: 'You have missed to enter some data... Please enter all values',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      let ownerid : any;
      let data : any;
      this.storage.get('userid') .then((val) => {
        ownerid = val;
        console.log("ownerid: " +ownerid);
        data = { propertyName : this.propertyName , address : this.address ,
          sqft : this.sqft , permission : this.permission , owner_id : ownerid,
        spaceType : this.spaceType, location : this.location, imageURL : this.imageURL };
         new Promise((resolve,reject) => {
           let headers = new Headers({
             'Content-Type': 'application/x-www-form-urlencoded'
           });
           let options = new RequestOptions({
             headers: headers
           });
           var req = JSON.stringify(data);
         //  var response;
           console.log("inside signup"+req);
     
           this.http.post(this.createSpaceURL,req,options).subscribe(res => {
             
             let response = res.json();
             console.log("response: " +response);
              if (response == null ) {
               let alert = this.alertCtrl.create({
                 title: 'Something went wrong',
                 subTitle: 'Please try again later!!',
                 buttons: ['Ok']
               });
               alert.present();
              } else {
               let alert = this.alertCtrl.create({
                 title: 'Data saved',
                 buttons: ['Ok']
               });
               alert.present();
               this.propertyName = null;
               this.address = null;
               this.sqft = null;
               this.permission = null;
               this.spaceType = null;
               this.location = null;
               this.imageURL = null;
              }
            }, error => {
               let alert = this.alertCtrl.create({
                 title: 'Oops! Something went wrong please try again later',
                 buttons: ['Ok']
               });
               alert.present();
             });
         });
         
      });
  }
}

}
