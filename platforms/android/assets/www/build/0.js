webpackJsonp([0],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(83);
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
var SignupPage = (function () {
    function SignupPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.typeOfAccount = ['Space Owner', 'Space Seeker'];
        console.log('ionViewDidLoad SignupPage');
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var userData = {
            username: this.username,
            password: this.password,
            name: this.name,
            accType: this.accType,
            email: this.email
        };
        this.authService.signup(userData).then(function (result) {
            if (result.success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            }
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Join Us</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="background" >\n  \n    <ion-card >\n      \n        <ion-card-content style="position: relative;">\n            <form (ngSubmit)="signup()" >\n            <ion-list>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="username"  [ngModelOptions]="{standalone: true}" placeholder="Username"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="password" [(ngModel)]="password"  [ngModelOptions]="{standalone: true}"  placeholder="Password"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="name"  [ngModelOptions]="{standalone: true}" placeholder="Your Name"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="email"  [ngModelOptions]="{standalone: true}" placeholder="Email"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-select style="border-radius: 5px;\n                border: 1px solid #C8C3C3" placeholder="Select One" [(ngModel)]="accType" [ngModelOptions]="{standalone: true}">\n                 <ion-option *ngFor="let item of typeOfAccount" [value]="item">{{item}}</ion-option>\n               </ion-select>\n              </ion-item>\n              \n            </ion-list>\n              <button ion-button  color="secondary" type="submit" block>\n                Join Us\n              </button>\n            </form>\n          </ion-card-content>\n    </ion-card>\n     </ion-content>\n  \n  \n  '/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map