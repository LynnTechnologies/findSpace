import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,ModalController, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SplashPage } from '../pages/splash/splash';
import { MapPage } from '../pages/map/map';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  authenticatedPages: Array<{title: string, component: any}>;
  unauthenticatedPages: Array<{title: string, component: any}>;
  authenticatedOwner : Array<{title: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public modalCtrl: ModalController,private storage: Storage, private events : Events,
  private menuCtrl : MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.unauthenticatedPages = [
      { title: 'Home', component: HomePage },
      { title: 'Map', component: " " },
      { title: 'List a space', component: 'SignupPage' },
      { title: 'Login', component: LoginPage }
    ];
    this.setMenu();
    events.subscribe('user:logged', (user, time) => {
      console.log('Welcome', user, 'at', time);
     
      if(user.accType == "SO"){
        this.authenticatedOwner.push({title: user.email, component: " "});
        this.authenticatedOwner.push({ title: 'Logout', component: null });
      } else {
        this.authenticatedPages.push({title: user.email, component: " "});
        this.authenticatedPages.push({ title: 'Logout', component: null });
      }
     
    });
      
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let splash = this.modalCtrl.create(SplashPage);
      splash.present();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  private setMenu () {
    this.authenticatedOwner = [
      { title: 'Home', component: HomePage },
      { title: 'Add Space', component: " " },
      { title: 'View Space', component: " " },
      { title: 'Bookings', component: " " },
      { title: 'Earings', component: " " },
      { title: 'My Account', component: " " },
      
    ];

    this.authenticatedPages = [
      { title: 'Home', component: HomePage },
      { title: 'Map', component: " " },
      { title: 'Referals', component: " " },
      { title: 'Rewards', component: " " },
      { title: 'My Account', component: " " },
      
    ];
  }

  openPage(page) { 
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component == " ") {
     
    } else if (page.component) {
      this.nav.setRoot(page.component);
    } else {
      this.storage.clear();
      this.menuCtrl.enable(false, 'authenticated');
      this.menuCtrl.enable(true, 'unauthenticated');
      this.menuCtrl.enable(false, 'authenticatedOwner');
      this.setMenu();
      this.nav.setRoot(HomePage);
    }
  }
}
