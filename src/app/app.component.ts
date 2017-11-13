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

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public modalCtrl: ModalController,private storage: Storage, private events : Events,
  private menuCtrl : MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.unauthenticatedPages = [
      { title: 'Home', component: HomePage },
      { title: 'Map', component: " " },
      { title: 'Login', component: LoginPage }
    ];

    this.authenticatedPages = [
      { title: 'Home', component: HomePage },
      { title: 'Map', component: " " },
      { title: 'Referals', component: " " },
      { title: 'Rewards', component: " " },
      { title: 'My Account', component: " " },
      { title: 'Logout', component: null }
    ];
      
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
      this.nav.setRoot(HomePage);
    }
  }
}
