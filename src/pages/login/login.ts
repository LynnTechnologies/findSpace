import { Component } from '@angular/core';
import { IonicPage, NavController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ListPage } from '../../pages/list/list';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  private username : string;
  private password : string;

  constructor(public navCtrl: NavController, private authService : AuthServiceProvider) {
    console.log('ionViewDidLoad LoginPage');
  }

   fbLogin() {
      let res =  this.authService.fbLogin();
      this.navCtrl.push(ListPage,{userData : res});
    }

    login() {
      let userData = {
        username : this.username,
        password : this.password
      };
     
      this.authService.login(userData).then((result : any) => {
        if(result.success){
          this.navCtrl.setRoot(HomePage);
        }
      });
    }

}
