import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,MenuController,AlertController  } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { FacebookLoginResponse } from '@ionic-native/facebook';
import { Keyboard } from '@ionic-native/keyboard';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';
//import { Firebase } from '@ionic-native/firebase'
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userData: any;
  signupURL:string;
  typeOfAccount:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public keyboard: Keyboard,public fb: Facebook,private storage: Storage,private http:Http,
    private event : Events,public menuCtrl: MenuController,private alertCtrl : AlertController) {
      this.signupURL = 'http://gateforyou.16mb.com/signup.php';
      this.typeOfAccount = ['Space Owner','Space Seeker'];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  username : any;
  password : any;
  name : any;
  accType : any;
  email : any;
  signup() {
    if (this.username == null || this.password == null || this.name == null || this.accType == null
      || this.email == null ) {
      let alert = this.alertCtrl.create({
        title: 'Invalid',
        subTitle: 'You have missed to enter some data... Please enter all values',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      if(this.accType == "Space Owner") {
        this.accType = "SO";
      } else {
        this.accType = "SF";
      }
   let data = {username: this.username, pass : this.password,
    name : this.name , accType : this.accType, email : this.email };
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

      this.http.post(this.signupURL,req,options).subscribe(res => {
        
        let response = res.json();
        console.log("response: " +response);
         if (response == null ) {
          let alert = this.alertCtrl.create({
            title: 'Invalid',
            subTitle: 'Username already available please give a different username!',
            buttons: ['Ok']
          });
          alert.present();
         } else {
          let alert = this.alertCtrl.create({
            title: 'User Created',
            buttons: ['Ok']
          });
          alert.present();
          this.navCtrl.setRoot(HomePage);
         }
       }, error => {
          let alert = this.alertCtrl.create({
            title: 'Oops! Something went wrong please try again later',
            buttons: ['Ok']
          });
          alert.present();
        });
    });
    
    }
    //this.navCtrl.push(IndexPage,{ username : this.username, password : this.password});
  }

}
