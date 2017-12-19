import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpaceForServiceProvider } from '../providers/space-for-service/space-for-service';

import { SearchForServiceProvider } from '../providers/search-for-service/search-for-service';
import { ListSpacePage } from '../pages/list-space/list-space';
import { SpaceDetailPage } from '../pages/space-detail/space-detail';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';

import { Facebook } from '@ionic-native/facebook';
import { Keyboard } from '@ionic-native/keyboard';
import { Firebase  } from '@ionic-native/firebase';
import { SplashPage } from '../pages/splash/splash';
import { Network } from '@ionic-native/network';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Geolocation } from '@ionic-native/geolocation';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { IonicStorageModule } from '@ionic/storage';

import firebase  from 'firebase';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

firebase.initializeApp({
    apiKey: "AIzaSyABhjRnxsNoInUHuqIE1_Fpx0lGMCei_D4",
    authDomain: "findspace-9f8d0.firebaseapp.com",
    databaseURL: "https://findspace-9f8d0.firebaseio.com",
    projectId: "findspace-9f8d0",
    storageBucket: "findspace-9f8d0.appspot.com",
    messagingSenderId: "412484675919"})

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SplashPage,
    ListSpacePage,
    SpaceDetailPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SplashPage,
    ListSpacePage,
    SpaceDetailPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceForServiceProvider,
    SearchForServiceProvider,
    Facebook,
    Keyboard,
    Firebase,
    Network,
    Geolocation,
    AuthServiceProvider,
    PhotoViewer,
    LocalNotifications,
    IonicStorageModule
  ]
})
export class AppModule {}
