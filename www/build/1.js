webpackJsonp([1],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatespacePageModule", function() { return CreatespacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createspace__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatespacePageModule = (function () {
    function CreatespacePageModule() {
    }
    return CreatespacePageModule;
}());
CreatespacePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__createspace__["a" /* CreatespacePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createspace__["a" /* CreatespacePage */]),
        ],
    })
], CreatespacePageModule);

//# sourceMappingURL=createspace.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatespacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(62);
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
 * Generated class for the CreatespacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreatespacePage = (function () {
    function CreatespacePage(navCtrl, navParams, keyboard, storage, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.createSpaceURL = 'http://gateforyou.16mb.com/createSpace.php';
    }
    CreatespacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatespacePage');
    };
    CreatespacePage.prototype.signup = function () {
        var _this = this;
        if (this.propertyName == null || this.address == null || this.sqft == null
            || this.permission == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Invalid',
                subTitle: 'You have missed to enter some data... Please enter all values',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else {
            var data_1 = { propertyName: this.propertyName, address: this.address,
                sqft: this.sqft, permission: this.permission };
            new Promise(function (resolve, reject) {
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
                    headers: headers
                });
                var req = JSON.stringify(data_1);
                //  var response;
                console.log("inside signup" + req);
                _this.http.post(_this.createSpaceURL, req, options).subscribe(function (res) {
                    var response = res.json();
                    console.log("response: " + response);
                    if (response == null) {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Something went wrong',
                            subTitle: 'Please try again later!!',
                            buttons: ['Ok']
                        });
                        alert_2.present();
                    }
                    else {
                        var alert_3 = _this.alertCtrl.create({
                            title: 'Data saved',
                            buttons: ['Ok']
                        });
                        alert_3.present();
                    }
                }, function (error) {
                    var alert = _this.alertCtrl.create({
                        title: 'Oops! Something went wrong please try again later',
                        buttons: ['Ok']
                    });
                    alert.present();
                });
            });
        }
    };
    return CreatespacePage;
}());
CreatespacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createspace',template:/*ion-inline-start:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\createspace\createspace.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Space</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="background" >\n  \n    <ion-card >\n      \n        <ion-card-content style="position: relative;">\n            <form (ngSubmit)="createSpace()" >\n            <ion-list>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="propertyName"  [ngModelOptions]="{standalone: true}" placeholder="Property Name"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="textarea" [(ngModel)]="address"  [ngModelOptions]="{standalone: true}" placeholder="Address"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="sqft"  [ngModelOptions]="{standalone: true}" placeholder="Area of space in sqft"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input type="textarea" [(ngModel)]="permission"  [ngModelOptions]="{standalone: true}" placeholder="Permitted Uses"></ion-input>\n              </ion-item>\n            </ion-list>\n              <button ion-button  color="secondary" type="submit" block>\n                Join Us\n              </button>\n            </form>\n          </ion-card-content>\n    </ion-card>\n     </ion-content>\n  \n  \n  '/*ion-inline-end:"L:\Ionic demo\SpaceFinder-Git\findSpace (Fork)\src\pages\createspace\createspace.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */], Storage, __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CreatespacePage);

//# sourceMappingURL=createspace.js.map

/***/ })

});
//# sourceMappingURL=1.js.map