import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, Events,MenuController,AlertController  } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { FacebookLoginResponse } from '@ionic-native/facebook';
import { Keyboard } from '@ionic-native/keyboard';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//import { Firebase } from '@ionic-native/firebase'
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private signupURL : any;
  private loginURL : any;

  constructor( public keyboard: Keyboard,public fb: Facebook,private storage: Storage,private http:Http,
    private event : Events,public menuCtrl: MenuController,private alertCtrl : AlertController) {
    console.log('Hello AuthServiceProvider Provider');
     this.signupURL = 'http://gateforyou.16mb.com/signup.php';
     this.loginURL = 'http://gateforyou.16mb.com/login.php';

    //this.signupURL = 'http:/localhost/sf/signup.php';
    //this.loginURL = 'http:/localhost/sf/login.php';
  }

  signup(userData) {
    return new Promise((resolve,reject) =>  {
      if (userData.username == null || userData.password == null || userData.name == null || userData.accType == null
        || userData.email == null ) {
        let alert = this.alertCtrl.create({
          title: 'Invalid',
          subTitle: 'You have missed to enter some data... Please enter all values',
          buttons: ['Ok']
        });
        alert.present();
      } else {
        if(userData.accType == "Space Owner") {
          userData.accType = "SO";
        } else {
          userData.accType = "SF";
        }
     let data = {username: userData.username, pass : userData.password,
      name : userData.name , accType : userData.accType, email : userData.email };
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
            resolve({success : true});
           }
         }, error => {
            let alert = this.alertCtrl.create({
              title: 'Oops! Something went wrong please try again later',
              buttons: ['Ok']
            });
            alert.present();
          });
      
      }
    });
    
    //this.navCtrl.push(IndexPage,{ username : this.username, password : this.password});
  }
/* User Login method */
  login(userData) {
    return new Promise((resolve,reject) => {
      if (userData.username == null || userData.password == null) {
        let alert = this.alertCtrl.create({
          title: 'Invalid',
          subTitle: 'Please enter both username and password!',
          buttons: ['Ok']
        });
        alert.present();
      } else {
     let data = {username: userData.username, pass : userData.password};

        let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
          headers: headers
        });
        var req = JSON.stringify(data);
      //  var response;
        console.log("inside login"+req);
  
        this.http.post(this.loginURL,req,options).subscribe(res => {
          
          let response = res.json();
          console.log("response: " +response);
           if (response == null ) {
            let alert = this.alertCtrl.create({
              title: 'Invalid',
              subTitle: 'Please make sure your username and password is correct!',
              buttons: ['Ok']
            });
            alert.present();
           } else {
            this.storage.set('name', response[0].name);
            this.storage.set('email', response[0].email);
            this.storage.set('pic', response[0].pic);
            this.event.publish('user:logged', response[0], Date.now());
            if (response[0].accType == "SO"){
              this.enableAuthenticatedMenuForOwner();
            } else {
              console.log(response[0]);
              this.enableAuthenticatedMenu();
            }
            resolve({success : true});
           }
         }, error => {
            let alert = this.alertCtrl.create({
              title: 'Oops! Something went wrong please try again later',
              buttons: ['Ok']
            });
            alert.present();
          });
      
      }
    });
   
    //this.navCtrl.push(IndexPage,{ username : this.username, password : this.password});
  }

  fbLogin() {
    // this.navCtrl.setRoot(indexPage);
    let userData ;
      this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((respose: FacebookLoginResponse) => {
        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
          this.storage.set('name', profile['first_name']);
          this.storage.set('email', profile['email']);
          this.storage.set('pic', profile['picture_large']['data']['url']);
          this.event.publish("user:loggedin",profile['first_name'])//------
          this.enableAuthenticatedMenu();
          return userData;
          //this.navCtrl.setRoot(HomePage);
        });
      });

      console.log(userData);  
    
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

  enableAuthenticatedMenu() {
    this.menuCtrl.enable(true, 'authenticated');
    this.menuCtrl.enable(false, 'unauthenticated');
    this.menuCtrl.enable(false, 'authenticatedOwner');
  }

  enableAuthenticatedMenuForOwner() {
    this.menuCtrl.enable(true, 'authenticatedOwner');
    this.menuCtrl.enable(false, 'unauthenticated');
    this.menuCtrl.enable(false, 'authenticated');
  }

}
