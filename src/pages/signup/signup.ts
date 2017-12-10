import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';
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
  private typeOfAccount: any;
  private username : string;
  private password : string;
  private name : string;
  private accType : string;
  private email : string;

  constructor(public navCtrl: NavController,private authService : AuthServiceProvider) {
      this.typeOfAccount = ['Space Owner','Space Seeker'];
      console.log('ionViewDidLoad SignupPage');
  }
 
   signup() {
    let userData = {
      username : this.username,
      password : this.password,
      name : this.name,
      accType : this.accType,
      email : this.email
    }
    this.authService.signup(userData).then((result : any) => {
      if(result.success){
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

}
