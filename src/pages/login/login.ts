import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { FacebookLoginResponse } from '@ionic-native/facebook';
import { Keyboard } from '@ionic-native/keyboard';
import { ListPage } from '../list/list';
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
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData: any;
  baseUrl:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public keyboard: Keyboard,public fb: Facebook,private storage: Storage,private http:Http,
    private event : Events) {
      this.baseUrl = 'http://localhost/sf/login.php';
  }

  // getUser():firebase.User {
  //   return this.afAuth.auth.currentUser;
  // }
  // facebookLogin(): Promise<any> {
  //   return this.facebook.login(['email'])
  //     .then( (response) => {
  //       const facebookCredential = firebase.auth.FacebookAuthProvider
  //         .credential(response.authResponse.accessToken);

  //       this.afAuth.auth.signInWithCredential(facebookCredential)
  //       .then((success) => { console.log("Firebase success: " + JSON.stringify(success)); })
  //       .catch((error) => { console.log("Firebase failure: " + JSON.stringify(error)); });

  //     })
  //     .catch((error) => { console.log(error) });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  fbLogin() {
    // this.navCtrl.setRoot(indexPage);
    
      this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((respose: FacebookLoginResponse) => {
        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
          this.storage.set('name', profile['first_name']);
          this.storage.set('email', profile['email']);
          this.storage.set('pic', profile['picture_large']['data']['url']);
          this.event.publish("user:loggedin",profile['first_name'])//-------
          this.navCtrl.push(ListPage,{userData : this.userData});
        });
      });

      console.log(this.userData);
     
    
    
    
    // let provider = new firebase.auth.FacebookAuthProvider();
    // //provider.addScope('list');
    // firebase.auth().signInWithRedirect(provider).then((result) => {
    //   console.log( result);
    //   firebase.auth().getRedirectResult().then((result)=>{
    //     console.log(JSON.stringify(result));
    //   }).catch(function(error){
    //     console.log(JSON.stringify(error));
    //   })
    // })
  }
  username : any;
  password : any;
  login() {
   let data = {username: this.username, pass : this.password};
    new Promise((resolve,reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      let options = new RequestOptions({
        headers: headers
      });
      var req = JSON.stringify(data);
    //  var response;
      console.log("inside login"+req);

      this.http.post(this.baseUrl,req,options).subscribe(res => {
        
        let response = res.json();
        this.storage.set('name', response.name);
        this.storage.set('email', response.email);
        this.storage.set('pic', response.pic);
        
        }, error => {
          console.log("Oooops!");
        });
    });
    //this.navCtrl.push(IndexPage,{ username : this.username, password : this.password});
  }

}
