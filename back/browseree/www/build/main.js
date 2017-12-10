webpackJsonp([6],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceForServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SpaceForServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SpaceForServiceProvider = (function () {
    function SpaceForServiceProvider(http) {
        this.http = http;
        this.baseUrl = 'http://gateforyou.16mb.com/user.php';
        this.baseUrlForLike = 'http://gateforyou.16mb.com/updateLikeForSpace.php';
        //this.baseUrl = 'http://localhost/sf/user.php';
    }
    SpaceForServiceProvider.prototype.getPosts = function () {
        //console.log(this.http.get(this.baseUrl));
        return this.http.get(this.baseUrl).do(function (res) { return console.log(res); })
            .map(function (res) { return res.json(); });
    };
    SpaceForServiceProvider.prototype.updateLike = function (id) {
        return this.http.post(this.baseUrlForLike, { spaceId: id }, null).do(function (res) { return console.log(res); })
            .map(function (res) { return res.json(); });
    };
    return SpaceForServiceProvider;
}());
SpaceForServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SpaceForServiceProvider);

//# sourceMappingURL=space-for-service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_space_for_service_space_for_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_for_service_search_for_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_space_list_space__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NgModule }  from '@angular/core';


var HomePage = (function () {
    function HomePage(navCtrl, spaceForService, network, alertCtrl, searchForServiceProvider, loadingController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.spaceForService = spaceForService;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.searchForServiceProvider = searchForServiceProvider;
        this.loadingController = loadingController;
        this.userData = { selectedSpace: '' };
        this.spaceForService.getPosts().subscribe(function (data) { return _this.processList(data); });
        this.string = ['Any', 'Hours', 'Day', 'Week', 'Month'];
        this.network.onDisconnect().subscribe(function () {
            _this.presentAlert("No network connection", "app may not function properly");
        });
        // console.log(this.string);
        // for(let result of this.obj){
        //   console.log(result.spaceType); //this.strings.push(result.spaceType);
        // }
    }
    HomePage.prototype.presentAlert = function (title, string) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: string,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.processList = function (data) {
        this.spaceFor = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var result = data_1[_i];
            this.spaceFor.push(result.spaceType); //this.strings.push(result.spaceType);
        }
        console.log(this.spaceFor);
        return this.spaceFor;
    };
    HomePage.prototype.searchSpace = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: "\n       <ion-spinner name=\"bubbles\"></ion-spinner>  Please wait..."
        });
        loading.present();
        //.subscribe(data => this.processList(data));
        var data = { selectedSpace: this.userData.selectedSpace,
            rentBy: this.userData.rentBy };
        this.searchForServiceProvider.searchSpace(data).then(function (result) {
            loading.dismiss();
            _this.spaceList = JSON.stringify(result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_space_list_space__["a" /* ListSpacePage */], { spaceList: _this.spaceList, selectedSpace: _this.userData.selectedSpace });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="margin-left: 10%">\n\n      <img src="assets/images/Spacefinder-logo.png" alt="" height="40px" style="align-items: center">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content page-home class="background">\n\n    <ion-card class="margin:10px">\n\n       <h1 class="title-head">FIND SPACES IN SEATTLE</h1>\n\n       <h3 style="color:#7D7A7A"> <span class="rule"></span>I AM LOOKING FOR A<span class="rule"></span></h3>\n\n       <ion-label>SPACE FOR:</ion-label>\n\n       <form (ngSubmit)="searchSpace()" >\n\n       <ion-list>\n\n       <ion-item >\n\n         <ion-select style="margin-right:5px; margin-left:5px; width: 100%;border-radius: 5px;\n\n          border: 1px solid #C8C3C3" placeholder="Space For" [(ngModel)]="userData.selectedSpace" [ngModelOptions]="{standalone: true}">\n\n           <ion-option *ngFor="let item of spaceFor" [value]="item">{{item}}</ion-option>\n\n         </ion-select>\n\n       </ion-item>\n\n       <ion-label>RENT BY:</ion-label>\n\n       <ion-item>\n\n           <ion-select style="margin-right:5px; margin-left:5px; width: 100%;border-radius: 5px;\n\n           border: 1px solid #C8C3C3" placeholder="Rent By" [(ngModel)]="userData.rentBy" [ngModelOptions]="{standalone: true}">\n\n            <ion-option *ngFor="let item of string" [value]="item">{{item}}</ion-option>\n\n          </ion-select>\n\n       </ion-item>\n\n     <ion-item>\n\n         <button ion-button style="height:40px" color="secondary" type="submit" block>\n\n             <h2  style="color:white"><b>Find Space</b></h2>\n\n         </button>\n\n     </ion-item>\n\n       \n\n       </ion-list>\n\n       </form>\n\n     </ion-card>\n\n   </ion-content>\n\n   \n\n'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_space_for_service_space_for_service__["a" /* SpaceForServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_search_for_service_search_for_service__["a" /* SearchForServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ViewImagePage } from '../view-image/view-image';

//import { CommonModule } from '@angular/common';  
/**
 * Generated class for the SpaceDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SpaceDetailPage = (function () {
    function SpaceDetailPage(navCtrl, navParams, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.space = JSON.parse(navParams.get('space'));
    }
    SpaceDetailPage.prototype.backButtonClick = function () {
        this.navCtrl.pop();
    };
    SpaceDetailPage.prototype.homeButtonClick = function () {
        this.navCtrl.popToRoot();
    };
    SpaceDetailPage.prototype.addLike = function (id) {
    };
    SpaceDetailPage.prototype.viewImage = function (imageUrl) {
        console.log(JSON.stringify(imageUrl));
        this.photoViewer.show(imageUrl);
        //this.navCtrl.push(ViewImagePage,{ imageUrl : JSON.stringify(imageUrl) });
    };
    SpaceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpaceDetailPage');
    };
    return SpaceDetailPage;
}());
SpaceDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-space-detail',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\space-detail\space-detail.html"*/'<!--\n\n  Generated template for the SpaceDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{space.spaceType}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-card>\n\n    <button (click)="viewImage(space.image)" no-padding><img src="{{space.image}}"></button>\n\n    <ion-card-content>\n\n        <div>\n\n            <span style="width:20%">  <ion-icon name="md-thumbs-up"> {{space.likes}}</ion-icon></span>\n\n            <span style="width:80%;float:right" text-right>{{space.comments}} Comments {{space.shares}} Shares</span> \n\n        </div>  \n\n\n\n   \n\n    <ion-item>Location : {{space.location}}</ion-item>\n\n    <ion-item>Owner : {{space.owner}}</ion-item>\n\n    <ion-item>Contact : {{space.contact}}</ion-item>\n\n\n\n    <ion-row>\n\n        <ion-col class="text-left" no-padding>\n\n          <button ion-button item-left small clear color="facebook"> <ion-icon name="md-thumbs-up"> Like</ion-icon></button>\n\n        </ion-col>\n\n        <ion-col class="text-center" no-padding> \n\n            <button ion-button item-left small clear color="facebook"><ion-icon name="ios-camera"> Comment</ion-icon></button>\n\n        </ion-col>\n\n        <ion-col class="text-right" no-padding> \n\n            <button ion-button item-left small clear color="facebook"><ion-icon name="md-share-alt"> Share</ion-icon></button>\n\n        </ion-col>\n\n    </ion-row>\n\n   </ion-card-content>\n\n    </ion-card>\n\n    <ion-footer style="height: 50px !important;">\n\n            \n\n              <ion-toolbar color="facebook"  no-padding>\n\n                  <button style="padding-top:5px;" ion-button small item-center clear (click)="homeButtonClick()"> <ion-icon name="ios-home-outline" style="color:#FFF"> Home </ion-icon> </button>\n\n                <h3 padding class="title" style="margin-top:5px;float:right;color:#FFF;font-size:10px">\n\n                    <ion-icon  name="md-globe" > Copyright 2017</ion-icon>   \n\n                </h3>  \n\n                \n\n                </ion-toolbar>\n\n    </ion-footer>\n\n'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\space-detail\space-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
], SpaceDetailPage);

//# sourceMappingURL=space-detail.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListSpacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__space_detail_space_detail__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_space_for_service_space_for_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListSpacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListSpacePage = (function () {
    function ListSpacePage(navCtrl, navParams, spaceForService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spaceForService = spaceForService;
        this.header = navParams.get('selectedSpace');
        this.spacelists = JSON.parse(navParams.get('spaceList'));
    }
    ListSpacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListSpacePage');
    };
    ListSpacePage.prototype.backButtonClick = function () {
        this.navCtrl.pop();
    };
    ListSpacePage.prototype.loadSpaceDetails = function (space) {
        console.log('ionViewDidLoad loadSpaceDetails' + space);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__space_detail_space_detail__["a" /* SpaceDetailPage */], { space: JSON.stringify(space) });
    };
    ListSpacePage.prototype.onLike = function (id) {
        var _this = this;
        this.spaceForService.updateLike(id).subscribe(function (data) {
            return _this.checkForEmpty(data);
        });
    };
    ListSpacePage.prototype.onComment = function () {
    };
    ListSpacePage.prototype.onShare = function () {
    };
    ListSpacePage.prototype.checkForEmpty = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var result = data_1[_i];
            if (result != null) {
                this.navCtrl.setRoot(this.navCtrl.getActive().component);
                break;
            }
        }
    };
    return ListSpacePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
], ListSpacePage.prototype, "navBar", void 0);
ListSpacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-space',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\list-space\list-space.html"*/'<!--\n\n  Generated template for the ListSpacePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Back</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n  \n\n\n\n<ion-content no-padding>\n\n  <h1 padding-left style="padding-left:30px">{{header}}</h1>\n\n  <ion-list style="margin-top:-10px">\n\n      <ion-item *ngFor="let space of spacelists">\n\n        \n\n          <ion-card>\n\n              <button (click)="loadSpaceDetails(space)" no-padding><img src="{{space.image}}"></button>\n\n              <ion-card-content >\n\n              <ion-row no-padding>\n\n                  <ion-col class="text-left"  >\n\n                    <button ion-button item-center small clear color="facebook" no-padding> <ion-icon name="md-thumbs-up" style="font-size:95%">{{space.likes}} Like</ion-icon></button>\n\n                  </ion-col>\n\n                  <ion-col class="text-center"  > \n\n                      <button ion-button item-center small clear color="facebook" no-padding><ion-icon name="ios-camera" style="font-size:95%">{{space.comments}} Comment</ion-icon></button>\n\n                  </ion-col>\n\n                  <ion-col class="text-right"  > \n\n                      <button ion-button small item-center clear color="facebook" no-padding><ion-icon name="md-share-alt" style="font-size:95%">{{space.shares}} Share</ion-icon></button>\n\n                  </ion-col>\n\n              </ion-row>\n\n             </ion-card-content>\n\n              <!-- <ion-item>\n\n                <ion-avatar item-left>\n\n                  <img src="../../assets/images/back.jpg">\n\n                </ion-avatar>\n\n                <ion-card-header>\n\n                    {{space.spaceType}}\n\n                </ion-card-header>\n\n              \n\n                <ion-card-content>\n\n                    \n\n                    {{space.location}}\n\n                </ion-card-content>\n\n              </ion-item> -->\n\n              </ion-card>\n\n      </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer style="height: 50px !important;">\n\n  \n\n    <ion-toolbar color="facebook"  no-padding>\n\n        <button style="padding-top:5px;" ion-button small item-center clear (click)="backButtonClick()"> <ion-icon name="md-arrow-round-back" style="color:#FFF"> Back </ion-icon> </button>\n\n      <h3 padding class="title" style="margin-top:5px;float:right;color:#FFF;font-size:10px">\n\n          <ion-icon  name="md-globe" > Copyright 2017</ion-icon>   \n\n      </h3>  \n\n      \n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\list-space\list-space.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_space_for_service_space_for_service__["a" /* SpaceForServiceProvider */]])
], ListSpacePage);

//# sourceMappingURL=list-space.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, keyboard, fb, storage, http, event, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.fb = fb;
        this.storage = storage;
        this.http = http;
        this.event = event;
        this.menuCtrl = menuCtrl;
        this.baseUrl = 'http://gateforyou.16mb.com/login.php';
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
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.fbLogin = function () {
        // this.navCtrl.setRoot(indexPage);
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (respose) {
            _this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                _this.storage.set('name', profile['first_name']);
                _this.storage.set('email', profile['email']);
                _this.storage.set('pic', profile['picture_large']['data']['url']);
                _this.event.publish("user:loggedin", profile['first_name']); //-------
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */], { userData: _this.userData });
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
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = { username: this.username, pass: this.password };
        new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var req = JSON.stringify(data);
            //  var response;
            console.log("inside login" + req);
            _this.http.post(_this.baseUrl, req, options).subscribe(function (res) {
                var response = res.json();
                _this.storage.set('name', response.name);
                _this.storage.set('email', response.email);
                _this.storage.set('pic', response.pic);
                _this.enableAuthenticatedMenu();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }, function (error) {
                console.log("Oooops!");
            });
        });
        //this.navCtrl.push(IndexPage,{ username : this.username, password : this.password});
    };
    LoginPage.prototype.enableAuthenticatedMenu = function () {
        this.menuCtrl.enable(true, 'authenticated');
        this.menuCtrl.enable(false, 'unauthenticated');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background" >\n\n  \n\n    <ion-card >\n\n      \n\n        <ion-card-content style="position: relative;">\n\n            <form (ngSubmit)="enableAuthenticatedMenu()" >\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-input type="text" [(ngModel)]="username"  [ngModelOptions]="{standalone: true}" placeholder="Username"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input type="password" [(ngModel)]="password"  [ngModelOptions]="{standalone: true}"  placeholder="Password"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n              <button ion-button  color="secondary" type="submit" block>\n\n                Login\n\n              </button>\n\n            </form>\n\n            <a>Forget password ? </a><br>\n\n            OR\n\n            <button ion-button block color="facebook" (click)="fbLogin()">\n\n              <ion-icon name="logo-facebook" ></ion-icon>\n\n              Login with facebook\n\n            </button>\n\n          </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngIf="userData">\n\n      <ion-card-header>{{ userData.username }}</ion-card-header>\n\n      <img [src]="userData.picture" />\n\n      <ion-card-content>\n\n        <p>Email: {{ userData.email }}</p>\n\n        <p>First Name: {{ userData.first_name }}</p>\n\n      </ion-card-content>\n\n      </ion-card>\n\n    \n\n      <button class="bottom" no-bounce fixed-content  ion-button clear full color="light"> Don\'t have an account? SignUp </button>\n\n    </ion-content>\n\n  \n\n  \n\n  '/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SplashPage = (function () {
    function SplashPage(navCtrl, viewCtrl, navParams, splashScreen) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    return SplashPage;
}());
SplashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-splash',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\splash\splash.html"*/'<ion-content>\n\n  \n\n    <svg width="5cm" height="3cm"  viewBox="0 0 500 300"\n\n    xmlns="http://www.w3.org/2000/svg" version="1.1"\n\n    xmlns:xlink="http://www.w3.org/1999/xlink" >\n\n <!-- Draw the outline of the motion path in blue, along\n\n         with three small circles at the start, middle and end. -->\n\n <path id="path1" d="M100,250 C 100,50 400,50 400,250"\n\n       fill="none" stroke="black" stroke-width="7.06"  />\n\n <path id="path2" d="M100,250 C 100,50 400,50 400,250"\n\n       fill="none" stroke="black" stroke-width="7.06"  />\n\n <circle cx="100" cy="250" r="17.64" fill="blue"  />\n\n <circle cx="400" cy="250" r="17.64" fill="blue"  />\n\n <!-- Here is a triangle which will be moved about the motion path.\n\n      It is defined with an upright orientation with the base of\n\n      the triangle centered horizontally just above the origin. -->\n\n <path d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"\n\n       fill="yellow" stroke="red" stroke-width="7.06"  >\n\n   <!-- Define the motion path animation -->\n\n   <animateMotion dur="1s" repeatCount="1" rotate="auto" >\n\n      <mpath xlink:href="#path1"/>\n\n   </animateMotion>\n\n </path>\n\n\n\n</svg>\n\n         \n\n        <img  class="cls-3" src="../../assets/images/gp.png" width="80.06" height="93.78" style="margin-left:-140px;margin-top:60px">\n\n     \n\n </ion-content>'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\splash\splash.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
], SplashPage);

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        //inside load map
        new Promise(function (resolve, reject) {
            var options = { timeout: 10000, enableHighAccuracy: true };
            navigator.geolocation.getCurrentPosition(function (position) {
                var latLng = new google.maps.LatLng(-34.9290, 138.6010);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                resolve(position);
            }, function (err) {
                reject(err);
            }, options);
        });
    };
    MapPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\map\map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Map\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n\n    </ion-buttons> \n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content>\n\n  <div #map id="map"></div> \n\n</ion-content>'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list-space/list-space.module": [
		440,
		5
	],
	"../pages/login/login.module": [
		441,
		4
	],
	"../pages/map/map.module": [
		443,
		3
	],
	"../pages/space-detail/space-detail.module": [
		439,
		2
	],
	"../pages/splash/splash.module": [
		442,
		1
	],
	"../pages/view-image/view-image.module": [
		444,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        //this.selectedItem = navParams.get('item');
        this.userData = navParams.get("userData");
        console.log(this.userData);
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div> -->\n\n  <ion-card *ngIf="userData">\n\n		<ion-card-header>{{ userData.username }}</ion-card-header>\n\n		<img [src]="userData.picture" />\n\n		<ion-card-content>\n\n		  <p>Email: {{ userData.email }}</p>\n\n		  <p>First Name: {{ userData.first_name }}</p>\n\n		</ion-card-content>\n\n	  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchForServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {AuthService} from '../../providers/auth-service';


/*
  Generated class for the SpaceForServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SearchForServiceProvider = (function () {
    function SearchForServiceProvider(http) {
        this.http = http;
        this.baseUrl = 'http://gateforyou.16mb.com/searchSpace.php';
        // this.baseUrl = 'http://localhost/api/feed';
        // this.baseUrl = 'http://localhost/sf/searchSpace.php';
    }
    SearchForServiceProvider.prototype.searchSpace = function (data) {
        //console.log(this.http.get(this.baseUrl));
        //  return this.http.get(this.baseUrl,req).do((res: Response) => console.log(res))
        //  .map((res: Response) => res.json());
        var _this = this;
        // return this.http.post(this.baseUrl,req,options).subscribe(res => {
        //   console.log(res.json());
        //   res.json()
        //   //resolve(res.json())
        //   }, error => {
        //   console.log("Oooops!");
        //   });
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var req = JSON.stringify(data);
            //  var response;
            console.log("inside search space" + req);
            _this.http.post(_this.baseUrl, req, options).subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject("Oooops!");
            });
        });
    };
    return SearchForServiceProvider;
}());
SearchForServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SearchForServiceProvider);

//# sourceMappingURL=search-for-service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewImagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ViewImagePage = (function () {
    function ViewImagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageUrl = JSON.parse(navParams.get('imageUrl'));
    }
    ViewImagePage.prototype.homeButtonClick = function () {
        this.navCtrl.popToRoot();
    };
    ViewImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewImagePage');
    };
    return ViewImagePage;
}());
ViewImagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-image',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\view-image\view-image.html"*/'<!--\n\n  Generated template for the ViewImagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <ion-title>Back</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding>\n\n  <img src="{{imageUrl}}"/>\n\n</ion-content>\n\n<ion-footer style="height: 50px !important;">\n\n    \n\n      <ion-toolbar color="facebook"  no-padding>\n\n          <button style="padding-top:5px;" ion-button small item-center clear (click)="homeButtonClick()"> <ion-icon name="ios-home-outline" style="color:#FFF"> Home </ion-icon> </button>\n\n        <h3 padding class="title" style="margin-top:5px;float:right;color:#FFF;font-size:10px">\n\n            <ion-icon  name="md-globe" > Copyright 2017</ion-icon>   \n\n        </h3>  \n\n        \n\n        </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\view-image\view-image.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ViewImagePage);

//# sourceMappingURL=view-image.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(313);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_space_for_service_space_for_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_search_for_service_search_for_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_space_list_space__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_space_detail_space_detail__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_image_view_image__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_firebase__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_splash_splash__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_photo_viewer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_local_notifications__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_firebase__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























__WEBPACK_IMPORTED_MODULE_25_firebase___default.a.initializeApp({
    apiKey: "AIzaSyABhjRnxsNoInUHuqIE1_Fpx0lGMCei_D4",
    authDomain: "findspace-9f8d0.firebaseapp.com",
    databaseURL: "https://findspace-9f8d0.firebaseio.com",
    projectId: "findspace-9f8d0",
    storageBucket: "findspace-9f8d0.appspot.com",
    messagingSenderId: "412484675919"
});
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_space_list_space__["a" /* ListSpacePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_space_detail_space_detail__["a" /* SpaceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_view_image_view_image__["a" /* ViewImagePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/space-detail/space-detail.module#SpaceDetailPageModule', name: 'SpaceDetailPage', segment: 'space-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-space/list-space.module#ListSpacePageModule', name: 'ListSpacePage', segment: 'list-space', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-image/view-image.module#ViewImagePageModule', name: 'ViewImagePage', segment: 'view-image', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_space_list_space__["a" /* ListSpacePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_space_detail_space_detail__["a" /* SpaceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_view_image_view_image__["a" /* ViewImagePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_space_for_service_space_for_service__["a" /* SpaceForServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_search_for_service_search_for_service__["a" /* SearchForServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ListPage } from '../pages/list/list';




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, storage, events, menuCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.unauthenticatedPages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Map', component: __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
        this.authenticatedPages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Map', component: __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */] },
            { title: 'Referals', component: " " },
            { title: 'Rewards', component: " " },
            { title: 'My Account', component: " " },
            { title: 'Logout', component: null }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var splash = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            //this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component) {
            this.nav.setRoot(page.component);
        }
        else {
            this.storage.clear();
            this.menuCtrl.enable(false, 'authenticated');
            this.menuCtrl.enable(true, 'unauthenticated');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\app\app.html"*/'<ion-menu [content]="content" id="unauthenticated" side="left">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of unauthenticatedPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-menu [content]="content" id="authenticated" side="left">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of authenticatedPages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map