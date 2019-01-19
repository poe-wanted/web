(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  position: relative;\n}\n.search .fas {\n  position: absolute;\n  right: 30px;\n  top: 28px;\n}\n.list-group-item {\n  overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <div class=\"container\">\n    <span class=\"navbar-brand mb-0 h1\">Path of Exile <b class=\"text-danger\">WANTED</b></span>\n    <form class=\"form-inline\">\n      <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"openModal(report)\">Report character</button>\n    </form>\n  </div>\n</nav>\n<!-- <ais-instantsearch [config]=\"options\">\n  <ais-search-box></ais-search-box>\n  <ais-hits></ais-hits>\n</ais-instantsearch> -->\n<div class=\"container\">\n  <p class=\"mt-4 lead\">This is a small tool to keep track of ongoing scammers, please don't abuse this by posting incorrect information, thank you and have a good one Exile.</p>\n\n  <p class=\"search shadow-sm p-3 mb-4 bg-white rounded\">\n    <input [(ngModel)]=\"searchValue\" (ngModelChange)=\"search(searchValue)\" class=\"form-control\" placeholder=\"Search for reported users\">\n    <i class=\"fas fa-search\"></i>\n  </p>\n  <div class=\"search-results\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\" (scrolled)=\"onScroll()\">\n    <div [ngSwitch]=\"loaded\">\n      <div *ngSwitchCase=\"true\">\n        <div class=\"list-group\">\n          <div class=\"list-group-item flex-column align-items-start\" *ngFor=\"let post of posts\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"mb-1\">{{post.characterName}}</h5>\n              <small class=\"text-muted\">{{post.timestamp.toDate() | date: 'dd/MM/yyyy'}}</small>\n            </div>\n            <small class=\"text-muted\">{{post.comment}}</small>\n          </div>\n        </div>\n        <p *ngIf=\"posts && posts.length === 0\"><i>No reports found</i></p>\n      </div>\n      <div *ngSwitchDefault>Loading...</div>\n    </div>\n  </div>\n</div>\n\n<ng-template #report>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Report character</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"reportForm\" ngNativeValidate (ngSubmit)=\"submitReport(formData)\">\n      <div class=\"form-group\">\n        <label for=\"characterName\">Character name: <abbr class=\"text-danger\" title=\"required\">*</abbr></label>\n        <input type=\"text\" class=\"form-control\" id=\"characterName\" [(ngModel)]=\"formData.characterName\" name=\"characterName\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"comment\">Comment: <abbr class=\"text-danger\" title=\"required\">*</abbr></label>\n        <input type=\"text\" class=\"form-control\" id=\"comment\" [(ngModel)]=\"formData.comment\" name=\"comment\" required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(storageService, modalService) {
        this.storageService = storageService;
        this.modalService = modalService;
        this.count = 0;
        this.displayLength = 10;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getList(this.displayLength);
        this.options = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].algolia;
    };
    AppComponent.prototype.getList = function (limit) {
        var _this = this;
        this.storageService.get(limit).subscribe(function (data) {
            _this.count++;
            if (_this.count === 2) {
                _this.loaded = true;
            }
            _this.posts = data;
        }, function (err) {
            _this.loaded = true;
        });
    };
    AppComponent.prototype.openModal = function (template) {
        this.formData = {};
        this.modalRef = this.modalService.show(template);
    };
    AppComponent.prototype.submitReport = function (data) {
        var _this = this;
        data.timestamp = new Date();
        this.storageService.post(data).subscribe(function (response) {
            _this.modalRef.hide();
        });
    };
    AppComponent.prototype.appendItems = function (data) {
        var that = this;
        data.forEach(function (value) {
            that.displayLength++;
            that.posts.push(value);
        });
    };
    AppComponent.prototype.onScroll = function () {
        var _this = this;
        this.storageService.next(this.displayLength, this.posts[this.posts.length - 1]).subscribe(function (respones) {
            _this.appendItems(respones);
        });
    };
    AppComponent.prototype.onSearch = function (string) {
        this.storageService.search(string).subscribe(function (response) {
            console.log('tere');
            console.log(response);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire-lite */ "./node_modules/angularfire-lite/fesm5/angularfire-lite.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_7__["NgAisModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TypeaheadModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
                angularfire_lite__WEBPACK_IMPORTED_MODULE_5__["AngularFireLite"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].config)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire-lite */ "./node_modules/angularfire-lite/fesm5/angularfire-lite.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(db, auth, firestore) {
        this.db = db;
        this.auth = auth;
        this.firestore = firestore;
    }
    StorageService.prototype.get = function (limit) {
        return this.firestore.query('api/posts/poe').orderBy('timestamp', 'desc').limit(limit).on();
    };
    StorageService.prototype.next = function (limit, data) {
        return this.firestore.query('api/posts/poe').orderBy('timestamp', 'desc').startAfter(data.timestamp).limit(limit).on();
    };
    StorageService.prototype.post = function (data) {
        return this.firestore.push('api/posts/poe', data);
    };
    StorageService.prototype.search = function (string) {
        return this.firestore.query('api/posts/poe').orderBy('characterName').startAt(string).on();
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire_lite__WEBPACK_IMPORTED_MODULE_1__["AngularFireLiteDatabase"],
            angularfire_lite__WEBPACK_IMPORTED_MODULE_1__["AngularFireLiteAuth"],
            angularfire_lite__WEBPACK_IMPORTED_MODULE_1__["AngularFireLiteFirestore"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    config: {
        apiKey: "AIzaSyAfsBZt4mzHQK05gDJnQ25Asy1UT4hzj7Y",
        authDomain: "poe-shame-list.firebaseapp.com",
        databaseURL: "https://poe-shame-list.firebaseio.com",
        projectId: "poe-shame-list",
        storageBucket: "poe-shame-list.appspot.com",
        messagingSenderId: "80483182774"
    },
    algolia: {
        appId: 'PJMNOBZRQL',
        apiKey: 'f81470db72199f0583e86761ed1b3522',
        indexName: 'poe'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/araud/Documents/poe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map