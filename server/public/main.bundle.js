webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\n  position: relative;\n  top:85px;\n  color:white;\n  margin-left:20px;\n  padding-left:20px;\n  border-left: 2px solid #690EAC;\n  max-width: 940px;\n  margin: 0 auto;\n}\n.first{\n  font-size: 12px;\n  color:white;\n  font-family: 'Roboto', sans-serif;\n  font-weight: lighter;\n  margin-bottom: 8px;\n  margin-top:0;\n}\n.game-notification{\n  display: inline-block;\n  width: 182px;\n  background: rgba(66, 66, 66, 0.32);\n  margin-bottom: 24px;\n  border-radius: 2px;\n}\n.game-notification img{\n  display: inline-block;\n  margin: 8px;\n}\n.titulo{\n  margin: 17px 8px 0px 0;\n  vertical-align: top;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:12px;\n  display: inline-block;\n  width: 70px;\n}\n.avatar{\n  border-radius:50%;\n  display: inline-block;\n  margin: 8px;\n}\n.center{\n  text-align: center;\n  margin-top: 11px;\n}\n.game-notification a {\n  display: inline-block;\n  position: relative;\n  bottom: 30px;\n  left: 40%;\n  margin: 0;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 10px;\n  color: #fd2249;\n  font-weight: bold;\n\n}\n.game-notification .group-link{\n  display: inline-block;\n  position: relative;\n  bottom: 60px;\n  left: 60%;\n  margin: 0;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 10px;\n  color: #fd2249;\n  font-weight: bold;\n}\n.group{\n  width:200px;\n  height: 90px;\n}\n.small{\n  height: 56px;\n}\n.date{\n  color:white;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  font-size: 12px;\n  position: relative;\n  right:30px;\n}\n.date:before{\n  content: 'oo';\n  height: 16px;\n  width: 16px;\n  color: #690EAC;\n  background: #690EAC;\n  border-radius:50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div *ngFor=\"let act of userActivities\">\n  <h3 class=\"date\"> {{act.since}}</h3>\n    <div *ngIf=\"act.kind === 'GAME'\">\n\n      <h6 class=\"first\">Started playing</h6>\n      <div class=\"game-notification\">\n        <img [src] = \"act.image\" height=\"70\">\n        <p class=\"titulo\">{{act.text}}</p>\n      </div>\n    </div>\n    <div *ngIf=\"act.kind === 'GROUP'\">\n      <h6 class=\"first\">Joined</h6>\n      <div class=\"game-notification group\">\n        <img [src]=\"act.image\" height=\"70\" width=\"90\">\n        <p class=\"titulo center\">{{act.text}}</p>\n        <a [routerLink]=\"['/group', act.addedUser]\" class=\"group-link\">See group > </a>\n      </div>\n    </div>\n    <div *ngIf=\"act.kind === 'FRIEND'\">\n      <h6 class=\"first\">Started following</h6>\n      <div class=\"game-notification small\">\n        <img [src] =\"act.image\" height=\"40\" class=\"avatar\">\n        <p class=\"titulo center\">{{act.text}}</p>\n        <a [routerLink]=\"['/profile', act.addedUser]\">See profile > </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityComponent = (function () {
    function ActivityComponent(auth, act, route) {
        this.auth = auth;
        this.act = act;
        this.route = route;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.profileId = params['id'];
            _this.act.getActivitiesFromUser(_this.profileId)
                .subscribe(function (acts) {
                _this.userActivities = acts;
                console.log(_this.userActivities);
            });
        });
    };
    return ActivityComponent;
}());
ActivityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-activity',
        template: __webpack_require__("../../../../../src/app/activity/activity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/activity/activity.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ActivityComponent);

var _a, _b, _c;
//# sourceMappingURL=activity.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_list_service__ = __webpack_require__("../../../../../src/app/services/get-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_edit_user_service__ = __webpack_require__("../../../../../src/app/services/edit-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_list_game_list_component__ = __webpack_require__("../../../../../src/app/game-list/game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__multiform_multiform_component__ = __webpack_require__("../../../../../src/app/multiform/multiform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pick_plat_pick_plat_component__ = __webpack_require__("../../../../../src/app/pick-plat/pick-plat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__log_in_log_in_component__ = __webpack_require__("../../../../../src/app/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__game_page_game_page_component__ = __webpack_require__("../../../../../src/app/game-page/game-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__groups_page_groups_page_component__ = __webpack_require__("../../../../../src/app/groups-page/groups-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__group_form_group_form_component__ = __webpack_require__("../../../../../src/app/group-form/group-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__single_group_single_group_component__ = __webpack_require__("../../../../../src/app/single-group/single-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__activity_activity_component__ = __webpack_require__("../../../../../src/app/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__browser_browser_component__ = __webpack_require__("../../../../../src/app/browser/browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_cha_service__ = __webpack_require__("../../../../../src/app/services/cha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contact-list/contact-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__game_list_game_list_component__["a" /* GameListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_15__multiform_multiform_component__["a" /* MultiformComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pick_plat_pick_plat_component__["a" /* PickPlatComponent */],
            __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_20__search_bar_search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__game_page_game_page_component__["a" /* GamePageComponent */],
            __WEBPACK_IMPORTED_MODULE_25__groups_page_groups_page_component__["a" /* GroupsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_26__group_form_group_form_component__["a" /* GroupFormComponent */],
            __WEBPACK_IMPORTED_MODULE_27__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__single_group_single_group_component__["a" /* SingleGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_29__activity_activity_component__["a" /* ActivityComponent */],
            __WEBPACK_IMPORTED_MODULE_30__browser_browser_component__["a" /* BrowserComponent */],
            __WEBPACK_IMPORTED_MODULE_32__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_33__contact_list_contact_list_component__["a" /* ContactListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material__["b" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_get_list_service__["a" /* GetListService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_17__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */],
            __WEBPACK_IMPORTED_MODULE_5__services_add_game_service__["a" /* AddGameService */],
            __WEBPACK_IMPORTED_MODULE_3__services_edit_user_service__["a" /* EditUserService */],
            __WEBPACK_IMPORTED_MODULE_13__services_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_31__services_cha_service__["a" /* ChaService */],
            __WEBPACK_IMPORTED_MODULE_14__services_activity_service__["a" /* ActivityService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/browser/browser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index:1\n}\n.searchBar{\n  position: absolute;\n    top: 104px;\n    left: 8px;\n    width: 340px;\n    height: 32px;\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid grey;\n    color:white;\n}\n.search{\n  position:absolute;\n  top:104px;\n  right:16px;\n  color:grey;\n}\n.inline{\n  display: inline-block;\n  margin: 10px;\n  margin-top:0;\n  vertical-align: top;\n}\n.users-list{\n  position: relative;\n  top: 172px;\n  color:white;\n}\n.position{\n  position: relative;\n}\nh5{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n  font-weight: lighter;\n  margin-top:0px;\n  max-width: 156px;\n  text-align: center;\n\n  margin: 0;\n}\n.usuarios{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:16px;\n  font-weight: lighter;\n  vertical-align: 100%;\n}\n.avatar{\n  margin:10px;\n  width: 40px;\n  border-radius:20px;\n}\n.menu{\n  position: fixed;\n  bottom:0;\n  height: 56px;\n  background: #212121;\n  width: 100%;\n}\n.nav-bar{\n  color:rgba(255, 255, 255, 0.64);\n  vertical-align: middle;\n\n}\n#active{\n  padding-top:5px;\n\n}\n#active .nav-bar{\n  color:white;\n}\n.icons p{\n  margin:0;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n}\n.icons{\n  vertical-align: top;\n  padding-top:15px;\n  width: 24%;\n  text-align: center;\n  display: inline-block;\n}\n.title{\n  font-family: 'Titillium Web', sans-serif;\n  font-size:20px;\n  letter-spacing: 1px;\n  margin-left:16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browser/browser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3> Search </h3>\n</div>\n\n<div>\n  <input type=\"text\" name=\"\" [(ngModel)]=\"searchBar\" placeholder=\"Search users, games, groups\" class=\"searchBar\">\n  <i class=\"material-icons search\" (click)='searchAll()'>search</i>\n</div>\n<div class=\"users-list\">\n<div *ngIf=\"foundUsers.length > 0\" >\n  <h3 class=\"title\">Suggested Users</h3>\n  <div *ngFor=\"let user of foundUsers\">\n    <a [routerLink]=\"['/profile', user._id]\">\n      <img class=\"avatar\" src=\"https://store.playstation.com/store/api/chihiro/00_09_000/container/ES/es/999/EP4497-CUSA01439_00-AV00000000000003/1499640335000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100\" alt=\"\">\n      <span class=\"usuarios\">{{user.username}}</span>\n    </a>\n  </div>\n</div>\n<div *ngIf=\"foundGroups.length > 0\" class=\"position\">\n  <h3 class=\"title\">Sugested Groups</h3>\n <div  *ngFor = 'let game of foundGroups' class=\"inline\" [attr.data-value]=\"game.id\" #selectedGame >\n   <a [routerLink] = \"['/group', game._id]\">\n   <img *ngIf=\"game.groupImage\" [src] ='game.groupImage' height=\"93\" width=\"156\">\n </a>\n   <img *ngIf=\"!game.groupImage\"  src ='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' height=\"93\" width=\"156\"(click)=\"showme(myGame)\">\n   <h5>{{game.groupname}}</h5>\n </div>\n</div>\n<div *ngIf=\"foundGames.length === 6\" class=\"position\">\n  <h3 class=\"title\">Sugested Games</h3>\n <div  *ngFor = 'let game of foundGames' class=\"inline\" [attr.data-value]=\"game.id\" #selectedGame >\n   <a [routerLink] = \"['/game', game.id]\">\n   <img *ngIf=\"game.cover\" [src] ='game.cover.url' height=\"93\" width=\"156\">\n </a>\n   <img *ngIf=\"!game.cover\"  src ='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' height=\"93\" width=\"156\"(click)=\"showme(myGame)\">\n   <h5>{{game.name}}</h5>\n </div>\n</div>\n</div>\n<div class=\"menu\">\n<div class=\"icons\">\n  <a [routerLink] ='[\"/home\"]'>\n  <i class=\"material-icons nav-bar\">home</i>\n\n</a>\n</div>\n<div class=\"icons\" id=\"active\">\n  <a [routerLink] ='[\"/browse\"]'>\n  <i class=\"material-icons nav-bar\">explore</i>\n      <p>Contact</p>\n</a>\n</div>\n<div class=\"icons\"  >\n  <a [routerLink] = '[\"/contact\"]'>\n  <i class=\"material-icons nav-bar\">chat_bubble_outline</i>\n\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink]=\"['/profile', user._id]\" *ngIf=\"user\">\n  <i class=\"material-icons nav-bar\">perm_identity</i>\n</a>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/browser/browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_list_service__ = __webpack_require__("../../../../../src/app/services/get-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrowserComponent = (function () {
    function BrowserComponent(auth, add, getList) {
        this.auth = auth;
        this.add = add;
        this.getList = getList;
        this.foundGames = [];
        this.foundUsers = [];
        this.foundGroups = [];
    }
    BrowserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    BrowserComponent.prototype.searchAll = function () {
        this.searchGame();
        this.searchUser();
        this.searchGroup();
    };
    BrowserComponent.prototype.searchGame = function () {
        var _this = this;
        this.add.searchGame(this.searchBar)
            .subscribe(function (found) {
            found.body.forEach(function (game) {
                if (game.cover) {
                    game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x");
                    // game.screenshots = game.screenshots[2].url.split("t_thumb").join("t_thumb_2x")
                }
            });
            _this.foundGames = found.body;
        });
    };
    BrowserComponent.prototype.searchUser = function () {
        var _this = this;
        this.getList.browseUsers(this.searchBar)
            .subscribe(function (users) {
            _this.foundUsers = users;
        });
    };
    BrowserComponent.prototype.searchGroup = function () {
        var _this = this;
        this.getList.browseGroups(this.searchBar)
            .subscribe(function (users) {
            _this.foundGroups = users;
            console.log(_this.foundGroups);
        });
    };
    return BrowserComponent;
}());
BrowserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-browser',
        template: __webpack_require__("../../../../../src/app/browser/browser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browser/browser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_list_service__["a" /* GetListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_get_list_service__["a" /* GetListService */]) === "function" && _c || Object])
], BrowserComponent);

var _a, _b, _c;
//# sourceMappingURL=browser.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  letter-spacing: 2px;\n  z-index:1;\n\n}\n\n.avatar{\n  width: 32px;\n  border-radius:20px;\n}\n.back{\n\n}\n.position{\n  position: relative;\n  left: 24px;\n  top:25px;\n}\n.usuarios{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:16px;\n  font-weight: lighter;\n  vertical-align: 100%;\n  top:35px;\n  left:25px;\n}\n.write{\n  position: fixed;\n  bottom:4px;\n  display: block;\n  left: 6px;\n}\n.write input {\n  width: 328px;\n  height: 32px;\n  margin: 0 auto;\n  display: block;\n  border-radius: 24px;\n  border: none;\n  background-color: #212121;\n  color:white;\n  padding-left: 16px;\n}\n.send{\n  position: absolute;\n  bottom: 4px;\n  right:10px;\n  color:#616161;\n}\n.conversation{\n  position: absolute;\n  top:90px;\n  width: 100%;\n  overflow: scroll;\n  height:80%;\n}\n\n.mine{\n  text-align: right;\n\n  margin-left:50px;\n}\n.other{\n  text-align: left;\n\n  margin-left:10px;\n}\n.message{\n  max-width: 288px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size:14px;\n}\n.message p{\n  display: inline-block;\n  padding:10px;\n  border-radius: 5px;\n}\n.red{\n  background: #FD2249;\n  color:white;\n}\n.gray{\n  color:black;\n  background: #c2c2c2;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" *ngIf=\"recieverUser\">\n  <i class=\"material-icons back position\" (click)=\"goback()\">keyboard_arrow_left</i>\n  <img class=\"avatar position\" src=\"https://store.playstation.com/store/api/chihiro/00_09_000/container/ES/es/999/EP4497-CUSA01439_00-AV00000000000003/1499640335000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100\" alt=\"\">\n  <span class=\"usuarios position\">{{recieverUser.username}}</span>\n</div>\n<div  class=\"conversation\"  id=\"convo\">\n  <div *ngFor=\"let mess of convMessages\">\n    <div *ngIf=\"mess.sender === user._id\" class=\"mine message\">\n      <p class=\"red\">{{mess.message}}</p>\n    </div>\n    <div *ngIf=\"mess.sender !== user._id\" class=\"other message\">\n      <p class=\"gray\">{{mess.message}}</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"write\">\n<input type=\"text\" #message>\n<i class=\"material-icons send\" (click) = \"sendMessage(message, convo)\">chevron_right</i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cha_service__ = __webpack_require__("../../../../../src/app/services/cha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(chatService, auth, route, add, elemRef, router) {
        this.chatService = chatService;
        this.auth = auth;
        this.route = route;
        this.add = add;
        this.elemRef = elemRef;
        this.router = router;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            _this.route.params
                .subscribe(function (params) {
                _this.roomName = params['room'];
                _this.reciever = params['id'];
                _this.add.searchProfile(_this.reciever)
                    .subscribe(function (user) {
                    _this.recieverUser = user;
                    _this.getMessages(_this.roomName);
                    setInterval(function () {
                        _this.getMessages(_this.roomName);
                        _this.updateScroll(_this.convo);
                    }, 1000);
                });
            });
        });
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.convo = this.elemRef.nativeElement.querySelector('#convo');
        this.updateScroll(this.convo);
    };
    ChatComponent.prototype.updateScroll = function (elem) {
        elem.scrollTop = elem.scrollHeight;
    };
    ChatComponent.prototype.sendMessage = function (text) {
        var message = {
            message: text.value,
            sender: this.user['_id'],
            room: this.roomName,
            recieve: this.reciever
        };
        text.value = '';
        this.chatService.saveMessage(message)
            .subscribe();
    };
    ChatComponent.prototype.getMessages = function (roomName) {
        var _this = this;
        this.chatService.getRoomMessages(roomName)
            .subscribe(function (messages) {
            _this.convMessages = [];
            _this.convMessages = messages;
        });
    };
    ChatComponent.prototype.goback = function () {
        this.router.navigate(["/contact"]);
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cha_service__["a" /* ChaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cha_service__["a" /* ChaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_add_game_service__["a" /* AddGameService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ChatComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-list/contact-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index:1\n}\n.usuarios{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:16px;\n  font-weight: lighter;\n  vertical-align: 100%;\n}\n.avatar{\n  margin:10px;\n  width: 40px;\n  border-radius:20px;\n}\n.each{\n  margin-top:24px;\n}\n.contenedor{\n  position: relative;\n  top:80px;\n}\n.menu{\n  position: fixed;\n  bottom:0;\n  height: 56px;\n  background: #212121;\n  width: 100%;\n}\n.nav-bar{\n  color:rgba(255, 255, 255, 0.64);\n  vertical-align: middle;\n\n}\n#active{\n  padding-top:5px;\n\n}\n#active .nav-bar{\n  color:white;\n}\n.icons p{\n  margin:0;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n}\n.icons{\n  vertical-align: top;\n  padding-top:15px;\n  width: 24%;\n  text-align: center;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3> Chat </h3>\n</div>\n<div class=\"contenedor\">\n<div *ngIf = \"contacts\" class=\"each\" >\n  <div *ngFor=\"let u of contacts\" (click)=\"navigateToRoom(u.username, u._id)\">\n    <img class=\"avatar\" src=\"https://store.playstation.com/store/api/chihiro/00_09_000/container/ES/es/999/EP4497-CUSA01439_00-AV00000000000003/1499640335000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100\" alt=\"\">\n    <span class=\"usuarios\">{{u.username}}</span>\n  </div>\n  <div *ngFor=\"let g of groups\">\n    <img class=\"avatar\" [src]=\"g.groupImage\" alt=\"\">\n    <span class=\"usuarios\">{{g.groupname}}</span>\n  </div>\n</div>\n</div>\n<div class=\"menu\">\n<div class=\"icons\">\n  <a [routerLink] ='[\"/home\"]'>\n  <i class=\"material-icons nav-bar\">home</i>\n\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink] ='[\"/browse\"]'>\n  <i class=\"material-icons nav-bar\">explore</i>\n</a>\n</div>\n<div class=\"icons\"  id=\"active\">\n  <a [routerLink] = '[\"/contact\"]'>\n  <i class=\"material-icons nav-bar\">chat_bubble_outline</i>\n    <p>Contact</p>\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink]=\"['/profile', user._id]\" *ngIf=\"user\">\n  <i class=\"material-icons nav-bar\">perm_identity</i>\n</a>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactListComponent = (function () {
    function ContactListComponent(auth, add, router, group) {
        this.auth = auth;
        this.add = add;
        this.router = router;
        this.group = group;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            _this.add.searchProfile(_this.user['_id'])
                .subscribe(function (user) {
                _this.contacts = user.friends;
                _this.group.getUserGroups(user['_id'])
                    .subscribe(function (groups) {
                    _this.groups = groups;
                });
            });
        });
    };
    ContactListComponent.prototype.navigateToRoom = function (elem, id) {
        var arrNames = [elem.toLowerCase(), this.user['username'].toLowerCase()];
        var roomName = arrNames.sort().join('');
        this.router.navigate(['/chat', roomName, id]);
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__("../../../../../src/app/contact-list/contact-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-list/contact-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_group_service__["a" /* GroupService */]) === "function" && _d || Object])
], ContactListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inline{\n  display: inline-block;\n  margin: 10px;\n}\n.bottom{\n  margin-top:16px;\n}\n.container{\n  position: absolute;\n  bottom:208px;\n}\n.next{\n  font-size:30px;\n  position: fixed;\n  top:33px;\n  right: 26px;\n}\n.header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index: 1;\n}\n.games{\n  position: absolute;\n  top: 172px;\n}\n.cover{\n width: 160px;\n height: 160px;\n position: absolute;\n margin: 0;\n\n}\n.back{\n background-color: rgba(62, 63, 63, 0.5)\n}\n@media (min-width: 1200px){\n  .games{\n    left:30%;\n    max-width: 800px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" >\n  <h3> Games</h3>\n  <i class=\"material-icons next\" (click)='sendGames()'>navigate_next</i>\n</div>\n  <app-search-bar (onFocus)=\"searchingGames($event)\"></app-search-bar>\n<div *ngIf=\"!nosearching\" >\n<div class=\"games\" >\n  <div *ngFor=\"let game of games\" [attr.data-value]=\"game.id\" class=\"inline\" #myGame>\n  <div class=\"inline cover back\" #cover  (click)=\"showme(myGame,cover)\"></div>\n  <img *ngIf=\"!game.cover\" class=\"bottom\"  src ='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' height=\"160\"(click)=\"showme(myGame)\">\n  <img *ngIf=\"game.cover\" [src] ='game.cover.url' height=\"160\" >\n  </div>\n  </div>\n</div>\n  <!-- <button (click)=\"sendGames()\">NEXT</button> -->\n"

/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_list_service__ = __webpack_require__("../../../../../src/app/services/get-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameListComponent = (function () {
    function GameListComponent(myService, auth, addService) {
        this.myService = myService;
        this.auth = auth;
        this.addService = addService;
        this.nosearching = false;
        this.myGames = [];
    }
    GameListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.getList(this.auth.platList)
            .subscribe(function (games) {
            games.forEach(function (game) {
                if (game.cover) {
                    game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x");
                }
            });
            _this.games = games;
        });
    };
    GameListComponent.prototype.showme = function (elem, cover) {
        var index = this.addService.gamesToAdd.indexOf(elem.getAttribute('data-value'));
        if (index >= 0) {
            this.addService.gamesToAdd.splice(index, 1);
            elem.classList.remove('selected');
            cover.classList.add('back');
        }
        else {
            this.addService.gamesToAdd.push(elem.getAttribute('data-value'));
            elem.classList.add('selected');
            cover.classList.remove('back');
        }
    };
    GameListComponent.prototype.sendGames = function () {
        this.auth.gamesList = this.addService.gamesToAdd;
        this.auth.secondStep = true;
    };
    GameListComponent.prototype.searchingGames = function (val) {
        this.nosearching = val;
    };
    return GameListComponent;
}());
GameListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-game-list',
        template: __webpack_require__("../../../../../src/app/game-list/game-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game-list/game-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_list_service__["a" /* GetListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_get_list_service__["a" /* GetListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_add_game_service__["a" /* AddGameService */]) === "function" && _c || Object])
], GameListComponent);

var _a, _b, _c;
//# sourceMappingURL=game-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/game-page/game-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".carousel {\n    position: relative;\n    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);\n    margin-top:24px;\n}\n\n.carousel-inner {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n.carousel-open:checked + .carousel-item {\n    position: static;\n    opacity: 100;\n}\n\n.carousel-item {\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.6s ease-out;\n}\n\n.carousel-item img {\n    display: block;\n    height: auto;\n    max-width: 100%;\n    margin: 0 auto;\n}\n#carousel-1:checked ~ .control-1,\n#carousel-2:checked ~ .control-2,\n#carousel-3:checked ~ .control-3 {\n    display: block;\n}\n.carousel-item {\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.6s ease-out;\n}\n\n.carousel-item img {\n    display: block;\n    height: auto;\n    max-width: 100%;\n}\n\n.carousel-control {\n    background: rgba(0, 0, 0, 0.28);\n    border-radius: 50%;\n    color: #fff;\n    cursor: pointer;\n    display: none;\n    font-size: 40px;\n    height: 40px;\n    line-height: 35px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translate(0, -50%);\n    cursor: pointer;\n    transform: translate(0, -50%);\n    text-align: center;\n    width: 40px;\n    z-index: 10;\n}\n\n.carousel-control.prev {\n    left: 2%;\n}\n\n.carousel-control.next {\n    right: 2%;\n}\n\n.carousel-control:hover {\n    background: rgba(0, 0, 0, 0.8);\n    color: #aaaaaa;\n}\n\n#carousel-1:checked ~ .control-1,\n#carousel-2:checked ~ .control-2,\n#carousel-3:checked ~ .control-3 {\n    display: block;\n}\n\n.carousel-indicators {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    bottom: 2%;\n    left: 0;\n    right: 0;\n    text-align: center;\n    z-index: 10;\n}\n\n.carousel-indicators li {\n    display: inline-block;\n    margin: 0 5px;\n}\n\n.carousel-bullet {\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 35px;\n}\n\n.carousel-bullet:hover {\n    color: #aaaaaa;\n}\n\n#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,\n#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,\n#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {\n    color: black;\n}\n.information{\n  position: absolute;\n  width: 100%;\n  height: 209px;\n  background: rgba(0, 0, 0, 0.72)\n}\n.summary{\n  color:white;\n  position: absolute;\n  margin: 8px 0 0 0;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:14px;\n  width: 312px;\n  text-align: justify;\n  margin-left:24px;\n}\nnav ul {\n  background: #212121;\n  color:#fff;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size:12px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  padding: 0;\n  max-width: 940px;\n  list-style: none;\n  -ms-flex-flow: row wrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /*border-bottom: 1px solid #e3e3e3;*/\n}\n\nnav li {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin: 0;\n  text-align: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 16px;\n}\n\nnav li a {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 2.5;\n  padding: 1em 0;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n  opacity: 0.5;\n  color: #9EACB8;\n  line-height: 1;\n  transition: all 0.3s, -webkit-transform 0.3s;\n  transition: all 0.3s, transform 0.3s;\n  transition: all 0.3s, transform 0.3s, -webkit-transform 0.3s;\n}\nnav li a:hover {\n  opacity: 1;\n}\n\n/* The line */\nnav li:last-child::before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 80%;\n  height: 4px;\n  background: #FD2249;\n  content: '';\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n/* Move the line */\nnav li:first-child.current ~ li:last-child::before {\n  -webkit-transform: translate3d(-112.5%, 0, 0);\n  transform: translate3d(-112.5%, 0, 0);\n}\n\nnav li:last-child.current::before {\n  -webkit-transform: translate3d(12.5%, 0, 0);\n  transform: translate3d(12.5%, 0, 0);\n}\n\n.usuarios{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:16px;\n  font-weight: lighter;\n  vertical-align: 100%;\n}\n.avatar{\n  margin:10px;\n  width: 40px;\n  border-radius:20px;\n}\n.each{\n  margin-top:24px;\n  max-width: 940px;\n  margin: 0 auto;\n}\n.menu{\n  position: fixed;\n  bottom:0;\n  height: 56px;\n  background: #212121;\n  width: 100%;\n}\n.nav-bar{\n  color:rgba(255, 255, 255, 0.64);\n  vertical-align: middle;\n\n}\n#active{\n  padding-top:5px;\n\n}\n#active .nav-bar{\n  color:white;\n}\n.icons p{\n  margin:0;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n}\n.icons{\n  vertical-align: top;\n  padding-top:15px;\n  width: 24%;\n  text-align: center;\n  display: inline-block;\n}\n.plat{\n  font-family: 'Titillium Web', sans-serif;\n  font-weight: bold;\n  font-size:10px;\n  color:white;\n  margin-left:28px;\n  background: #FD2249;\n  padding: 2px 3px;\n  border-radius:20px;\n  margin-bottom: 8px;\n}\n.addGame{\n  width: 328px;\n  height: 40px;\n  background: #FD2249;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  border:none;\n  letter-spacing: 2px;\n\n\n}\n.set{\n    position: fixed;\n    bottom: 68px;\n    margin-left: 16px;\n}\n\n.add{\n  position: relative;\n  display: inline-block;\n  width:40%;\n  height: 128px;\n  text-align: center;\n  vertical-align: top;\n  margin-left: 6%;\n}\n\n.add h5{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n  font-weight: lighter;\n  margin-top:0px;\n}\n@media(min-width:1200px){\n  .set{\n    margin-left:40%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-page/game-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"game[0]\">\n<div class=\"carousel\">\n    <div class=\"carousel-inner\">\n        <input class=\"carousel-open\" type=\"radio\" id=\"carousel-1\" name=\"carousel\" aria-hidden=\"true\" hidden=\"\" checked=\"checked\">\n        <div class=\"carousel-item\">\n            <img [src]='game[0].screenshots[0].url' height=\"400\">\n              </div>\n        <input class=\"carousel-open\" type=\"radio\" id=\"carousel-3\" name=\"carousel\" aria-hidden=\"true\" hidden=\"\">\n        <div class=\"carousel-item\">\n              <div class=\"information\">\n                <span class=\"plat\">{{this.platformsGame}}</span>\n                <p class=\"summary\">{{game[0].summary}}</p>\n              </div>\n              <img [src]='game[0].screenshots[0].url'>\n        </div>\n\n        <ol class=\"carousel-indicators\">\n            <li>\n                <label for=\"carousel-1\" class=\"carousel-bullet\">•</label>\n            </li>\n            <li>\n                <label for=\"carousel-3\" class=\"carousel-bullet\">•</label>\n            </li>\n        </ol>\n    </div>\n</div>\n</div>\n<nav>\n  <ul>\n      <li class=\"current game-comp\" #users1 (click)=\"setCurrent(users1, group)\" data-value=\"1\">Users</li>\n      <li class=\"game-comp\" #group (click)=\"setCurrent(group,users1)\" data-value=\"2\">Groups</li>\n  </ul>\n</nav>\n<div *ngIf = \"users[0] && corresponds\" class=\"each\" >\n  <div *ngFor=\"let u of users\" >\n  <a [routerLink]=\"['/profile', u._id]\">\n    <img class=\"avatar\" src=\"https://store.playstation.com/store/api/chihiro/00_09_000/container/ES/es/999/EP4497-CUSA01439_00-AV00000000000003/1499640335000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100\" alt=\"\">\n    <span class=\"usuarios\">{{u.username}}</span>\n  </a>\n  </div>\n</div>\n\n<div *ngIf=\"!corresponds\" class=\"each\">\n  <div  *ngFor=\"let group of groupsOfGame\" class=\"add\" [attr.data-value] =\"group._id\">\n    <a [routerLink]=\"['/group', group._id]\">\n    <img [src] =\"group.groupImage\" height=\"93px\" width='156'>\n  </a>\n    <h5>{{group.groupname}}</h5>\n  </div>\n</div>\n\n<div class=\"set\" *ngIf=\"showButton && buttonNotClicked\">\n<button  *ngIf=\"game[0]\" class=\"addGame\" (click)=\"addGameToUser(game[0].id)\">Add {{game[0].name}}</button>\n</div>\n\n<div class=\"menu\">\n<div class=\"icons\">\n  <a [routerLink] =\"['/home']\">\n  <i class=\"material-icons nav-bar\">home</i>\n</a>\n</div>\n<div class=\"icons\">\n  <i class=\"material-icons nav-bar\">explore</i>\n</div>\n<div class=\"icons\">\n  <i class=\"material-icons nav-bar\">chat_bubble_outline</i>\n</div>\n<div class=\"icons\">\n  <i class=\"material-icons nav-bar\">perm_identity</i>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game-page/game-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_edit_user_service__ = __webpack_require__("../../../../../src/app/services/edit-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GamePageComponent = (function () {
    function GamePageComponent(add, route, auth, edit, group, act) {
        this.add = add;
        this.route = route;
        this.auth = auth;
        this.edit = edit;
        this.group = group;
        this.act = act;
        this.game = [];
        this.users = [];
        this.groupsOfGame = [];
        this.corresponds = true;
        this.platformsGame = '';
        this.showButton = true;
        this.buttonNotClicked = true;
    }
    GamePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUser = this.auth.user;
        this.route.params
            .subscribe(function (params) { return _this.gameId = Number(params['id']); });
        this.getMainGame(this.gameId);
        this.getUsers(this.gameId);
        this.checkIfUserHasThisGame(this.gameId);
        this.getGroupsOfGame(this.gameId);
    };
    GamePageComponent.prototype.getMainGame = function (id) {
        var _this = this;
        this.add.findGame(id)
            .subscribe(function (game) {
            _this.add.turnPic(game);
            _this.add.bigScreenshot(game[0].screenshots);
            _this.game = game;
            _this.checkPlatforms(_this.game);
        });
    };
    GamePageComponent.prototype.getUsers = function (id) {
        var _this = this;
        this.add.searchUser(id)
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    GamePageComponent.prototype.setCurrent = function (elem, other) {
        elem.classList.add('current');
        other.classList.remove('current');
        this.corresponds = !this.corresponds;
    };
    GamePageComponent.prototype.checkPlatforms = function (game) {
        var platforms = game[0].release_dates;
        if (platforms.length > 1) {
            this.platformsGame = 'MULTIPLATFORM';
        }
        else {
            switch (platforms[0].platform) {
                case 48:
                    this.platformsGame = "PlayStation";
                    break;
                case 49:
                    this.platformsGame = "Xbox";
                    break;
                case 6:
                    this.platformsGame = "PC";
                    break;
                case 41:
                    this.platformsGame = "Nintendo";
                    break;
            }
        }
    };
    GamePageComponent.prototype.checkIfUserHasThisGame = function (gameId) {
        var _this = this;
        this.auth.user['games'].forEach(function (game) {
            if (game == gameId) {
                _this.showButton = false;
            }
        });
    };
    GamePageComponent.prototype.addGameToUser = function (gameId) {
        var _this = this;
        var totalGames = this.loggedUser['games'];
        totalGames.push(gameId.toString());
        this.buttonNotClicked = false;
        this.edit.addGame(this.loggedUser['_id'], totalGames)
            .subscribe(function (user) {
            _this.getUsers(_this.gameId);
            _this.act.addNewAct(_this.createObjforAct())
                .subscribe();
        });
    };
    GamePageComponent.prototype.getGroupsOfGame = function (id) {
        var _this = this;
        this.group.getGroupsOfSameGame(id)
            .subscribe(function (groups) {
            _this.groupsOfGame = groups;
            console.log(_this.groupsOfGame);
        });
    };
    GamePageComponent.prototype.createObjforAct = function () {
        var newObj = {
            addedUser: this.game[0]._id,
            text: this.game[0].name,
            owner: this.loggedUser['_id'],
            image: this.game[0].cover.url,
            kind: 'GAME'
        };
        return newObj;
    };
    return GamePageComponent;
}());
GamePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-game-page',
        template: __webpack_require__("../../../../../src/app/game-page/game-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game-page/game-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_game_service__["a" /* AddGameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_edit_user_service__["a" /* EditUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_edit_user_service__["a" /* EditUserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_group_service__["a" /* GroupService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_activity_service__["a" /* ActivityService */]) === "function" && _f || Object])
], GamePageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=game-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/group-form/group-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inline{\n  display: inline-block;\n  margin: 10px;\n}\n.header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index:1\n}\n.contain{\n  position: relative;\n  top:147px;\n}\n\n.search{\n  position:absolute;\n  top:140px;\n  right:16px;\n  color:grey;\n  font-size: 24px;\n}\n.signup{\n  display: block;\n  width: 328px;\n  height: 58px;\n  margin: 0 auto;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.56);\n  color: rgba(255, 255, 255, 0.56);\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  letter-spacing: 2px;\n}\n.addnew{\n  position: fixed;\n  top:40px;\n  right: 40px;\n  margin: 0;\n  color: #FD2249;\n  font-size: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/group-form/group-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3> New Group </h3>\n  <h6 class=\"addnew\" (click)=\"createGroup()\">ADD</h6>\n</div>\n<div class=\"contain\">\n<form class=\"group-form\">\n  <input type=\"text\" [(ngModel)]=\"groupInfo.groupname\" name=\"groupname\" class=\"signup\" placeholder=\"Group Name\"/>\n  <input type=\"text\" [(ngModel)]=\"groupInfo.platform\" name=\"platform\" class=\"signup\" placeholder=\"Platform\"/>\n</form>\n<div class=\"searchme\">\n  <input type=\"text\" name=\"\" [(ngModel)]=\"searchBar\" placeholder=\"Search\" class=\"signup\">\n\n  <i class=\"material-icons search\" (click)='searchGame()'>search</i>\n  <!-- <button (click) =\"searchGame()\">Search</button> -->\n</div>\n<div *ngIf=\"foundGames.length === 6\" class=\"game-list\">\n\n <div  *ngFor = 'let game of foundGames' class=\"inline\" [attr.data-value]=\"game.id\" #selectedGame >\n   <img *ngIf=\"game.cover\" [src] ='game.cover.url'  (click) = \"selected(selectedGame)\" height=\"160\">\n   <img *ngIf=\"!game.cover\"  src ='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' height=\"160\"(click)=\"showme(myGame)\">\n </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/group-form/group-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupFormComponent = (function () {
    function GroupFormComponent(add, auth, act) {
        this.add = add;
        this.auth = auth;
        this.act = act;
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loggedUser = this.auth.user;
        this.foundGames = [];
        this.groupInfo = {
            groupname: "",
            platform: "",
            groupImage: "",
            gameId: 0,
            gameSlug: "",
            gameName: "",
            users: []
        };
    }
    GroupFormComponent.prototype.ngOnInit = function () {
    };
    GroupFormComponent.prototype.searchGame = function () {
        var _this = this;
        this.add.searchGame(this.searchBar)
            .subscribe(function (found) {
            found.body.forEach(function (game) {
                if (game.cover) {
                    game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x");
                }
            });
            _this.foundGames = found.body;
        });
    };
    GroupFormComponent.prototype.selected = function (elem) {
        var _this = this;
        var id = elem.getAttribute('data-value');
        this.add.findGame(id)
            .subscribe(function (game) {
            _this.add.bigScreenshot(game[0].screenshots);
            _this.groupInfo.groupImage = game[0].screenshots[1].url;
            _this.groupInfo.gameId = game[0].id;
            _this.groupInfo.gameSlug = game[0].slug,
                _this.groupInfo.gameName = game[0].name,
                _this.groupInfo.users.push(_this.loggedUser['_id']);
        });
    };
    GroupFormComponent.prototype.createGroup = function () {
        var _this = this;
        this.add.createGroup(this.groupInfo)
            .subscribe(function (group) {
            _this.onSave.emit(false);
            _this.act.addNewAct(_this.createObjforAct(group))
                .subscribe();
        });
    };
    GroupFormComponent.prototype.createObjforAct = function (group) {
        var newObj = {
            text: group['groupname'],
            owner: this.loggedUser['_id'],
            image: group['groupImage'],
            addedUser: group['_id'],
            kind: 'GROUP'
        };
        return newObj;
    };
    return GroupFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], GroupFormComponent.prototype, "onSave", void 0);
GroupFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group-form',
        template: __webpack_require__("../../../../../src/app/group-form/group-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/group-form/group-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_add_game_service__["a" /* AddGameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */]) === "function" && _c || Object])
], GroupFormComponent);

var _a, _b, _c;
//# sourceMappingURL=group-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/groups-page/groups-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index:1;\n\n}\n.contain{\n  position: relative;\n  top:80px;\n  margin-top: 24px;\n}\n.contain .add{\n  position: relative;\n  display: inline-block;\n  width:40%;\n  height: 128px;\n  text-align: center;\n  vertical-align: top;\n  margin-left: 6%;\n}\n\n.add h5{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n  font-weight: lighter;\n  margin-top:0px;\n}\n\n.add-circle{\n  color: #FD2249;\n  font-size: 46px;\n  margin-top:5px;\n}\n.menu{\n  position: fixed;\n  bottom:0;\n  height: 56px;\n  background: #212121;\n  width: 100%;\n}\n.nav-bar{\n  color:rgba(255, 255, 255, 0.64);\n  vertical-align: middle;\n\n}\n#active{\n  padding-top:5px;\n\n}\n#active .nav-bar{\n  color:white;\n}\n.icons p{\n  margin:0;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n}\n.icons{\n  vertical-align: top;\n  padding-top:15px;\n  width: 24%;\n  text-align: center;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groups-page/groups-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!addGroup\">\n<div class=\"header\">\n  <h3> Groups </h3>\n</div>\n<div class=\"contain\">\n  <div  *ngFor=\"let group of userGroups\" class=\"add\" [attr.data-value] =\"group._id\">\n    <a [routerLink]=\"['/group', group._id]\">\n    <img [src] =\"group.groupImage\" height=\"93px\" width='156'>\n  </a>\n    <h5>{{group.groupname}}</h5>\n  </div>\n  <div class=\"add\">\n    <p (click)=\"addNewGroup()\">\n    <i class=\"material-icons add-circle\">add_circle</i>\n\n  </p>\n  </div>\n\n</div>\n</div>\n<div *ngIf=\"addGroup\">\n<app-group-form (onSave)=\"newGroupSaved($event)\"></app-group-form>\n</div>\n<div class=\"menu\">\n<div class=\"icons\" >\n  <a [routerLink] =\"['/home']\">\n  <i class=\"material-icons nav-bar\">home</i>\n</a>\n</div>\n<div class=\"icons\">\n  <i class=\"material-icons nav-bar\">explore</i>\n</div>\n<div class=\"icons\">\n  <i class=\"material-icons nav-bar\">chat_bubble_outline</i>\n</div>\n<div class=\"icons\" id=\"active\">\n  <a *ngIf=\"loggedUser\" [routerLink]=\"['/profile', loggedUser._id]\">\n  <i class=\"material-icons nav-bar\">perm_identity</i>\n  <p>Profile</p>\n</a>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/groups-page/groups-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupsPageComponent = (function () {
    function GroupsPageComponent(groupService, route, auth) {
        this.groupService = groupService;
        this.route = route;
        this.auth = auth;
        this.addGroup = false;
        this.userGroups = [];
    }
    GroupsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.loggedUser = _this.auth.user;
            _this.route.params
                .subscribe(function (params) {
                _this.profileId = params['id'];
                _this.getUserGroups(_this.profileId);
            });
        });
    };
    GroupsPageComponent.prototype.addNewGroup = function () {
        this.addGroup = true;
    };
    GroupsPageComponent.prototype.getUserGroups = function (id) {
        var _this = this;
        this.groupService.getUserGroups(id)
            .subscribe(function (groups) {
            _this.userGroups = groups;
        });
    };
    GroupsPageComponent.prototype.newGroupSaved = function (val) {
        var _this = this;
        this.addGroup = val;
        this.route.params
            .subscribe(function (params) {
            _this.profileId = params['id'];
            _this.getUserGroups(_this.profileId);
        });
    };
    return GroupsPageComponent;
}());
GroupsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-groups-page',
        template: __webpack_require__("../../../../../src/app/groups-page/groups-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/groups-page/groups-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_group_service__["a" /* GroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], GroupsPageComponent);

var _a, _b, _c;
//# sourceMappingURL=groups-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index:1\n}\n\nhtml {\n    overflow: scroll;\n    overflow-x: hidden;\n}\n::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    background: transparent;  /* optional: just make scrollbar invisible */\n}\n#wrapper{\n  max-width:100%;\n  position:relative;\n  color:white;\n  height: 220px;\n}\n.contenedor{\n  position: relative;\n  top:92px;\n}\n.sec-title{\n  text-align: center;\n  font-family: 'Titillium Web', sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  letter-spacing: 2px;\n  margin-bottom: 0px;\n}\n.sec-par{\n  font-family: 'Titillium Web', sans-serif;\n  font-size:12px;\n  text-align: center;\n  color:rgba(255, 255, 255, 0.48);\n  width:238px;\n  margin: 0 auto;\n  font-weight: light;\n}\n.module-section{\n  max-width: 100%;\n  overflow: hidden;\n  overflow-x:scroll;\n}\nul{\nwidth:100em;\nlist-style-type:none;\npadding:20px 0 20px 0;\nmargin:0;\n}\n.content{\n  position:relative;\n  height: 250px;\n}\nul > li {\n  display: inline-block;\n  margin: 10px;\n  vertical-align: top;\n}\n\n.menu{\n  position: fixed;\n  bottom:0;\n  height: 56px;\n  background: #212121;\n  width: 100%;\n}\n.nav-bar{\n  color:rgba(255, 255, 255, 0.64);\n  vertical-align: middle;\n\n}\n#active{\n  padding-top:5px;\n\n}\n#active .nav-bar{\n  color:white;\n}\n.icons p{\n  margin:0;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n}\n.icons{\n  vertical-align: top;\n  padding-top:15px;\n  width: 24%;\n  text-align: center;\n  display: inline-block;\n}\n@media (min-width:1200px){\n  .content{\n    left: 15%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n<div class=\"header\">\n  <h3> Home </h3>\n</div>\n<div class=\"contenedor\">\n<div id=\"wrapper\">\n  <h3 class=\"sec-title\">My games </h3>\n  <p class=\"sec-par\">Aquí aparecen los títulos de tus juegos, los últimos a los que has jugado o te gustaría jugar</p>\n  <div class=\"module-section clearfix\">\n   <ul class=\"content\">\n    <li *ngFor=\"let g of userGames\">\n      <div [attr.data-value]=\"g[0].id\" (click)=\"goToPage(game)\" #game>\n        <img [src] = 'g[0].cover.url' height=\"106\">\n      </div>\n    </li>\n   </ul>\n </div>\n</div>\n  <div id=\"wrapper\" *ngFor =\"let plat of platRecom\">\n    <h3 class=\"sec-title\">More games of {{plat.platform}}</h3>\n      <p class=\"sec-par\">Aquí aparecen los títulos de tus juegos, los últimos a los que has jugado o te gustaría jugar</p>\n    <div class=\"module-section clearfix\">\n     <ul class=\"content\">\n      <li *ngFor=\"let game of plat.games\">\n        <div [attr.data-value]='game.id' (click)=\"goToPage(gameplat)\" #gameplat>\n          <img *ngIf=\"!game.cover\" src = \"http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png\" height=\"106\">\n          <img *ngIf=\"game.cover\" [src] = \"game.cover.url\" height=\"106\">\n        </div>\n      </li>\n     </ul>\n   </div><!--end of module-section-->\n</div>\n\n\n\n<div id=\"wrapper\">\n  <h3 class=\"sec-title\">You might also like</h3>\n    <p class=\"sec-par\">Aquí aparecen los títulos de tus juegos, los últimos a los que has jugado o te gustaría jugar</p>\n  <div class=\"module-section clearfix\">\n   <ul class=\"content\">\n    <li *ngFor=\"let game of youMayLike\">\n      <div [attr.data-value]='game[0].id' (click)=\"goToPage(gamelike)\" #gamelike>\n        <img *ngIf='game[0].cover' [src]= 'game[0].cover.url' height=\"106\">\n        <img *ngIf=\"!game[0].cover\"  src ='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' height=\"106\">\n      </div>\n    </li>\n   </ul>\n </div>\n</div>\n</div>\n<div class=\"menu\">\n<div class=\"icons\" id=\"active\">\n  <a [routerLink] ='[\"/home\"]'>\n  <i class=\"material-icons nav-bar\">home</i>\n  <p>Home</p>\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink] ='[\"/browse\"]'>\n  <i class=\"material-icons nav-bar\">explore</i>\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink] = '[\"/contact\"]'>\n  <i class=\"material-icons nav-bar\">chat_bubble_outline</i>\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink]=\"['/profile', this.user._id]\">\n  <i class=\"material-icons nav-bar\">perm_identity</i>\n</a>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_list_service__ = __webpack_require__("../../../../../src/app/services/get-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(auth, add, getList) {
        this.auth = auth;
        this.add = add;
        this.getList = getList;
        this.myGamesId = [];
        this.userGames = [];
        this.platRecom = [];
        this.platformsName = [];
        this.relevantGames = [];
        this.youMayLike = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            _this.myGamesId = _this.user.games;
            _this.getGames(_this.myGamesId);
            _this.getGamesForPlat(_this.user.platforms);
            _this.getRelatedGames(_this.getRandomId(_this.user.games));
        });
    };
    HomeComponent.prototype.getRandomId = function (arr) {
        var random = Math.floor(Math.random() * ((arr.length - 1) - 1));
        console.log(arr);
        console.log(arr[random]);
        return arr[random];
    };
    HomeComponent.prototype.getGames = function (gamesArr) {
        var _this = this;
        gamesArr.forEach(function (e) {
            _this.add.findGame(e)
                .subscribe(function (game) {
                _this.add.turnPic(game);
                _this.userGames.push(game);
            });
        });
    };
    HomeComponent.prototype.getGamesForPlat = function (platArr) {
        var _this = this;
        platArr.forEach(function (plat) {
            _this.getList.getSuggestions(plat)
                .subscribe(function (games) {
                _this.add.turnPic(games);
                _this.platRecom.push({ platform: _this.transPlat(plat),
                    games: games });
            });
        });
    };
    HomeComponent.prototype.getRelatedGames = function (game) {
        var _this = this;
        this.getList.getSimilarGames(game)
            .subscribe(function (newGames) {
            _this.relevantGames.push(newGames);
            _this.getInterested(_this.relevantGames);
        });
    };
    HomeComponent.prototype.getInterested = function (gameArr) {
        var _this = this;
        gameArr[0].forEach(function (e) {
            _this.add.findGame(e)
                .subscribe(function (game) {
                _this.add.turnPic(game);
                _this.youMayLike.push(game);
            });
        });
    };
    HomeComponent.prototype.transPlat = function (num) {
        var translation = "";
        switch (num) {
            case '48':
                translation = "PlayStation";
                break;
            case '49':
                translation = "Xbox";
                break;
            case '6':
                translation = "PC";
                break;
            case '41':
                translation = "Nintendo";
                break;
        }
        return translation;
    };
    HomeComponent.prototype.goToPage = function (game) {
        this.add.navigateToGamePage(game);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_list_service__["a" /* GetListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_get_list_service__["a" /* GetListService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n}\n.signup-form{\n position: absolute;\n top:194px;\n width: 100%;\n text-align: center;\n}\n.signup{\n  display: block;\n  width: 328px;\n  height: 58px;\n  margin: 0 auto;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.56);\n  color: rgba(255, 255, 255, 0.56);\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  letter-spacing: 2px;\n\n}\n::-webkit-input-placeholder {\n   padding-left: 52px;\n   font-family: 'Titillium Web', sans-serif;\n   font-size: 16px;\n   letter-spacing: 2px;\n}\n.sign-up-butt{\n  margin-top:29px;\n  width: 328px;\n  height: 40px;\n  background: #FD2249;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  border:none;\n  letter-spacing: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" >\n  <h3> Log in </h3>\n</div>\n<form class=\"signup-form\">\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" class=\"signup\" placeholder=\"Username\"/>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"  class=\"signup\"  placeholder=\"Password\"/>\n\n  <button (click)=\"login()\" class=\"sign-up-butt\"> LOG IN </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogInComponent = (function () {
    function LogInComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .subscribe(function (user) {
                _this.router.navigate(['/home']);
            });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-log-in',
        template: __webpack_require__("../../../../../src/app/log-in/log-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/log-in/log-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogInComponent);

var _a, _b;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/multiform/multiform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multiform/multiform.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.firstStep\">\n  <app-pick-plat></app-pick-plat>\n</div>\n<div *ngIf=\"!auth.secondStep  && auth.firstStep\">\n\n    <app-game-list></app-game-list>\n</div>\n<div *ngIf = 'auth.secondStep'>\n  <app-signup></app-signup>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/multiform/multiform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiformComponent = (function () {
    function MultiformComponent(auth) {
        this.auth = auth;
    }
    MultiformComponent.prototype.ngOnInit = function () {
    };
    return MultiformComponent;
}());
MultiformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-multiform',
        template: __webpack_require__("../../../../../src/app/multiform/multiform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/multiform/multiform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], MultiformComponent);

var _a;
//# sourceMappingURL=multiform.component.js.map

/***/ }),

/***/ "../../../../../src/app/pick-plat/pick-plat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".inline{\n  display: inline-block;\n}\n .right{\n   margin-left: 8px;\n }\n .left{\n   margin-left: 16px;\n }\n.bottom{\n  margin-top:16px;\n}\n.container{\n  position: absolute;\n  bottom:208px;\n  max-width:350px;\n  margin: 0 auto;\n}\n.next{\n  font-size:30px;\n  position: fixed;\n  top:33px;\n  right: 26px;\n}\n.header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n}\n.deff{\n  position: absolute;\n  top: 104px;\n  color: #fff;\n  text-align: center;\n}\n.deff > h4, .deff >p{\n  margin-bottom: 0;\n  margin-top: 0;\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.deff >p{\n  font-size: 14px;\n}\n.container .cover{\n  width: 160px;\n  height: 160px;\n  position: absolute;\n\n}\n.back{\n  background-color: rgba(62, 63, 63, 0.5)\n}\n@media (min-width: 1200px){\n  .container{\n    left:40%;\n    bottom:400px;\n  }\n  .deff{\n    top:200px;\n    left:36%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pick-plat/pick-plat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3> Platforms </h3>\n  <i class=\"material-icons next\" (click)='sendAndNext()'>navigate_next</i>\n  <!-- <button (click)='sendAndNext()'>Next</button> -->\n</div>\n<div class=\"deff\">\n  <h4> Which platform do you use the most?</h4>\n  <p>Pick the ones you use so we can adapt the content and the sugestions to your preferences</p>\n</div>\n<div class=\"container\">\n<div class=\"inline left\" [attr.data-value]=\"48\" #play>\n  <div class=\"inline cover back\" #p1 (click)=\"addPlat(play,p1)\">\n  </div>\n  <img src=\"https://static.blog.playstation.com/wp-content/uploads/avatars//Playstation-logo.png?m=1466514976\"  height=\"160\">\n\n</div>\n<div class=\"inline right\" [attr.data-value]=\"49\" #xbox>\n  <div class=\"inline cover back\" #x1 (click)=\"addPlat(xbox,x1)\"></div>\n  <img src=\"http://image.techtimes.com/data/images/full/11675/xbox-one-logo.jpg\" (click)=\"addPlat(xbox)\" height=\"160\">\n</div>\n<div class=\"inline left\" [attr.data-value]=\"6\" #pc>\n  <div class=\"inline cover bottom back\" #c1 (click)=\"addPlat(pc,c1)\"></div>\n  <img src=\"https://cdn.worldvectorlogo.com/logos/windows-store.svg\" class=\"bottom\" (click)=\"addPlat(pc)\" height=\"160\">\n\n</div>\n<div class=\"inline right\" [attr.data-value]=\"41\" #nintendo>\n  <div class=\"inline cover  bottom back\" #w1 (click)=\"addPlat(nintendo,w1)\"></div>\n  <img src=\"http://cdn3.computerhoy.com/sites/computerhoy.com/files/editores/user-75989/c1csmnoviaaziww.jpg\" class=\"bottom\" (click)=\"addPlat(nintendo)\" height=\"160\">\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pick-plat/pick-plat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickPlatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PickPlatComponent = (function () {
    function PickPlatComponent(auth) {
        this.auth = auth;
        this.myPlats = [];
    }
    PickPlatComponent.prototype.ngOnInit = function () {
    };
    PickPlatComponent.prototype.addPlat = function (elem, cover) {
        var index = this.myPlats.indexOf(elem.getAttribute('data-value'));
        if (index >= 0) {
            this.myPlats.splice(index, 1);
            cover.classList.add('back');
            elem.classList.remove('selected');
        }
        else {
            this.myPlats.push(elem.getAttribute('data-value'));
            cover.classList.remove('back');
            elem.classList.add('selected');
        }
        console.log(cover);
    };
    PickPlatComponent.prototype.sendAndNext = function () {
        this.auth.platList = this.myPlats;
        this.auth.firstStep = true;
    };
    return PickPlatComponent;
}());
PickPlatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pick-plat',
        template: __webpack_require__("../../../../../src/app/pick-plat/pick-plat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pick-plat/pick-plat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PickPlatComponent);

var _a;
//# sourceMappingURL=pick-plat.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel {\n    position: relative;\n    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);\n    top:80px;\n}\n\n.carousel-inner {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 216px;\n}\n.carousel-open:checked + .carousel-item {\n    position: static;\n    opacity: 100;\n}\n\n.carousel-item {\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.6s ease-out;\n}\n\n.carousel-item img {\n    display: block;\n    height: auto;\n    max-width: 100%;\n}\n#carousel-1:checked ~ .control-1,\n#carousel-2:checked ~ .control-2,\n#carousel-3:checked ~ .control-3 {\n    display: block;\n}\n.carousel-item {\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.6s ease-out;\n}\n\n.carousel-item img {\n    display: block;\n    height: auto;\n    max-width: 100%;\n}\n\n.carousel-control {\n    background: rgba(0, 0, 0, 0.28);\n    border-radius: 50%;\n    color: #fff;\n    cursor: pointer;\n    display: none;\n    font-size: 40px;\n    height: 40px;\n    line-height: 35px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translate(0, -50%);\n    cursor: pointer;\n    transform: translate(0, -50%);\n    text-align: center;\n    width: 40px;\n    z-index: 10;\n}\n\n.carousel-control.prev {\n    left: 2%;\n}\n\n.carousel-control.next {\n    right: 2%;\n}\n\n.carousel-control:hover {\n    background: rgba(0, 0, 0, 0.8);\n    color: #aaaaaa;\n}\n\n#carousel-1:checked ~ .control-1,\n#carousel-2:checked ~ .control-2,\n#carousel-3:checked ~ .control-3 {\n    display: block;\n}\n\n.carousel-indicators {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    bottom: 2%;\n    left: 0;\n    right: 0;\n    text-align: center;\n    z-index: 10;\n}\n\n.carousel-indicators li {\n    display: inline-block;\n    margin: 0 5px;\n}\n\n.carousel-bullet {\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 35px;\n}\n\n.carousel-bullet:hover {\n    color: #aaaaaa;\n}\n\n#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,\n#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,\n#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {\n    color: black;\n}\n\n.saludo{\n  color:white;\n}\n.header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index:1\n}\n#profile-pic{\n  height: 88px;\n  border-radius:50%;\n  margin: 0 auto;\n  margin-top: 24px;\n}\n.name{\n  color:white;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size:20px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  margin-top:15px;\n  margin-bottom: 0;\n}\n.location{\n  text-align: center;\n  color: white;\n  margin-top:2px;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:12px;\n  font-weight: lighter;\n}\n\n.info-friends-group{\n  height: 88px;\n  width: 91%;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  margin: 0 auto;\n  position: relative;\n  top: 80px;\n  color:white;\n}\n.num{\n  text-align: center;\n  display: inline-block;\n  width: 40%;\n  margin-left:5%;\n  font-family: 'Titillium Web', sans-serif;\n}\n.num > h2, .num1>h2{\n  font-size:24px;\n  font-weight: bold;\n  margin: 21px 0 0 0;\n}\n.num > h4, .num1>h4{\n  font-size: 12px;\n  margin-top: 0px;\n}\n.toGroups > h4{\n  margin: 0;\n  font-size: 12px;\n  color:white;\n}\n.num1{\n  display: inline-block;\n  width:31%;\n  margin-left:1%;\n  font-family: 'Titillium Web', sans-serif;\n  text-align: center;\n}\n.add{\n  background: #fd2249;\n  color:white;\n  width:95px;\n  height:32px;\n  border:none;\n    font-family: 'Titillium Web', sans-serif;\n  font-size:12px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  vertical-align: 70%;\n}\nnav{\n  position: relative;\n  top:80px;\n  margin-bottom:24px;\n}\nnav ul {\n  background: #212121;\n  color:#fff;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size:12px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  padding: 0;\n  max-width: 1200px;\n  list-style: none;\n  -ms-flex-flow: row wrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /*border-bottom: 1px solid #e3e3e3;*/\n}\n\nnav li {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin: 0;\n  text-align: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 16px;\n}\n\n\n\n/* The line */\nnav li:first-child::before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 80%;\n  height: 4px;\n  background: #3908CC;\n  content: '';\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n/* Move the line */\nnav li:first-child.current ~ li:last-child::before {\n  -webkit-transform: translate3d(-112.5%, 0, 0);\n  transform: translate3d(-112.5%, 0, 0);\n}\n\nnav li:last-child.current::before {\n  -webkit-transform: translate3d(12.5%, 0, 0);\n  transform: translate3d(12.5%, 0, 0);\n}\n.usergames{\n  color:white;\n  position: relative;\n  top:80px;\n}\n\n.game-inf{\n  display: inline-block;\n  width:40%;\n  margin-left:6%;\n  text-align: center;\n  vertical-align: top;\n}\n.game-inf > h5{\n  font-family: 'Titillium Web', sans-serif;\n  font-size:12px;\n  font-weight: lighter;\n  margin-top:0px;\n}\n.menu{\n  position: fixed;\n  bottom:0;\n  height: 56px;\n  background: #212121;\n  width: 100%;\n}\n.nav-bar{\n  color:rgba(255, 255, 255, 0.64);\n  vertical-align: middle;\n\n}\n#active{\n  padding-top:5px;\n\n}\n#active .nav-bar{\n  color:white;\n}\n.icons p{\n  margin:0;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n}\n.icons{\n  vertical-align: top;\n  padding-top:15px;\n  width: 24%;\n  text-align: center;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n  <h3 *ngIf='myProfile'> My Profile </h3>\n  <h3 *ngIf=\"profileUser && !myProfile\">{{profileUser.username}}</h3>\n</div>\n<div *ngIf=\"profileUser\">\n<div class=\"carousel\">\n    <div class=\"carousel-inner\">\n        <input class=\"carousel-open\" type=\"radio\" id=\"carousel-1\" name=\"carousel\" aria-hidden=\"true\" hidden=\"\" checked=\"checked\">\n        <div class=\"carousel-item\">\n          <div class=\"main-view\">\n            <img *ngIf=\"profileUser.image\" [src]='profileUser.image' height=\"88\" id=\"profile-pic\">\n            <img *ngIf=\"!profileUser.image\" src= \"https://avatarfiles.alphacoders.com/840/84098.jpg\" height=\"88\" id=\"profile-pic\">\n            <h3 class=\"name\">{{profileUser.username}}</h3>\n            <p *ngIf=\"profileUser.location\"><span>{{profileUser.location.city}}</span> / <span>{{profileUser.location.country}}</span></p>\n            <p *ngIf=\"!profileUser.location\" class=\"location\"><span>City</span> / <span>Country</span></p>\n          </div>\n        </div>\n        <input class=\"carousel-open\" type=\"radio\" id=\"carousel-3\" name=\"carousel\" aria-hidden=\"true\" hidden=\"\">\n        <div class=\"carousel-item\">\n              <div class=\"information\">\n              <h1 class=\"saludo\"> Hola {{profileUser.username}}</h1>\n              </div>\n\n        </div>\n\n        <ol class=\"carousel-indicators\">\n            <li>\n                <label for=\"carousel-1\" class=\"carousel-bullet\">•</label>\n            </li>\n            <li>\n                <label for=\"carousel-3\" class=\"carousel-bullet\">•</label>\n            </li>\n        </ol>\n    </div>\n</div>\n<div *ngIf=\"myProfile\"class=\"info-friends-group\">\n  <div class=\"num\">\n    <h2 *ngIf=\"profileUser.friends\">{{profileUser.friends.length}}</h2>\n    <h2 *ngIf=\"!profileUser.friends\">0</h2>\n    <h4>FRIENDS</h4>\n  </div>\n  <div class=\"num\">\n\n    <h2 *ngIf=\"userGroups\">{{userGroups}}</h2>\n    <h2 *ngIf=\"!userGroups\">0</h2>\n    <a [routerLink] = \"['/groups', profileUser._id]\" class=\"toGroups\">\n    <h4>GROUPS</h4>\n  </a>\n  </div>\n</div>\n<div *ngIf=\"!myProfile\"class=\"info-friends-group\">\n  <div class=\"num1\">\n    <h2 *ngIf=\"profileUser.friends\">{{profileUser.friends.length}}</h2>\n    <h2 *ngIf=\"!profileUser.friends\">0</h2>\n    <h4>FRIENDS</h4>\n  </div>\n  <div class=\"num1\">\n    <h2 *ngIf=\"userGroups\">{{userGroups}}</h2>\n    <h2 *ngIf=\"!userGroups\">0</h2>\n    <a [routerLink] = \"['/groups', profileUser._id]\" class=\"toGroups\">\n    <h4>GROUPS</h4>\n  </a>\n  </div>\n  <div class=\"num1\">\n    <button *ngIf=\"notfollow\" class=\"add\" (click)=\"followUser()\">Follow</button>\n    <button *ngIf=\"!notfollow\" class=\"add\" (click)=\"followUser()\">Unfollow</button>\n  </div>\n</div>\n<nav>\n  <ul>\n      <li class=\"current game-comp\" #games data-value=\"1\">Games</li>\n      <li class=\"game-comp\" #activity data-value=\"2\" (click)='changeContent(activity)'>Activity</li>\n      <li class=\"game-comp\" #posts  data-value=\"3\">Posts</li>\n  </ul>\n</nav>\n<div class=\"content\">\n<div class=\"usergames\" *ngIf=\"contenido === 'games'\">\n  <div *ngFor=\"let game of userGames\" class=\"game-inf\">\n    <a [routerLink] = '[\"/game\", game[0].id]'>\n    <img [src] = \"game[0].screenshots[0].url\" height=\"93\" width=\"156\">\n      </a>\n    <h5>{{game[0].name}}</h5>\n  </div>\n</div>\n<div *ngIf=\"contenido === 'activity'\">\n  <app-activity></app-activity>\n</div>\n</div>\n</div>\n<div class=\"menu\">\n<div class=\"icons\" >\n  <a [routerLink] =\"['/home']\">\n  <i class=\"material-icons nav-bar\">home</i>\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink] =\"['/browse']\">\n  <i class=\"material-icons nav-bar\">explore</i>\n</a>\n</div>\n<div class=\"icons\">\n  <a [routerLink] = '[\"/contact\"]'>\n  <i class=\"material-icons nav-bar\">chat_bubble_outline</i>\n</a>\n</div>\n<div class=\"icons\" id=\"active\">\n  <a *ngIf=\"LoggedUser\" [routerLink]=\"['/profile', LoggedUser._id]\">\n  <i class=\"material-icons nav-bar\">perm_identity</i>\n  <p>Profile</p>\n</a>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_edit_user_service__ = __webpack_require__("../../../../../src/app/services/edit-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(auth, add, route, edit, groupService, act) {
        this.auth = auth;
        this.add = add;
        this.route = route;
        this.edit = edit;
        this.groupService = groupService;
        this.act = act;
        this.notfollow = true;
        this.contenido = 'games';
        this.userGames = [];
        this.myProfile = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.route.params
                .subscribe(function (params) {
                _this.profileId = params['id'];
                _this.getUserGroups(_this.profileId);
            });
            _this.LoggedUser = _this.auth.getUser();
            _this.getProfileUser(_this.profileId);
            _this.checkIfMyProfile(_this.auth.user['_id']);
            _this.checkIfFollow();
        });
        // this.route.params
        //     .subscribe((params)=> {
        //       this.profileId = params['id']
        //       this.getUserGroups(this.profileId)
        //     })
        // this.getGames(this.profileUser['games'])
    };
    ProfileComponent.prototype.getProfileUser = function (id) {
        var _this = this;
        this.add.searchProfile(id)
            .subscribe(function (user) {
            _this.profileUser = user;
            _this.getGames(_this.profileUser['games']);
        });
    };
    ProfileComponent.prototype.getGames = function (gamesArr) {
        var _this = this;
        gamesArr.forEach(function (e) {
            _this.add.findGame(e)
                .subscribe(function (game) {
                _this.add.turnPic(game);
                _this.add.bigScreenshot(game[0].screenshots);
                _this.userGames.push(game);
            });
        });
    };
    ProfileComponent.prototype.checkIfMyProfile = function (userId) {
        if (userId == this.profileId) {
            this.myProfile = true;
        }
    };
    ProfileComponent.prototype.checkIfFollow = function () {
        var _this = this;
        this.LoggedUser.friends.forEach(function (friend) {
            if (friend == _this.profileId) {
                _this.notfollow = false;
            }
        });
    };
    ProfileComponent.prototype.followUser = function () {
        var _this = this;
        this.notfollow = false;
        this.LoggedUser.friends.push(this.profileId);
        this.edit.addUser(this.LoggedUser._id, this.LoggedUser.friends)
            .subscribe(function (user) {
            _this.act.addNewAct(_this.createObjforAct())
                .subscribe();
        });
    };
    ProfileComponent.prototype.getUserGroups = function (id) {
        var _this = this;
        this.groupService.getUserGroups(id)
            .subscribe(function (groups) {
            _this.userGroups = groups.length;
            console.log(_this.userGroups);
        });
    };
    ProfileComponent.prototype.createObjforAct = function () {
        var newObj = {
            text: this.profileUser['username'],
            owner: this.LoggedUser['_id'],
            image: 'https://avatarfiles.alphacoders.com/812/81222.jpg',
            addedUser: this.profileUser['_id'],
            kind: 'FRIEND'
        };
        return newObj;
    };
    ProfileComponent.prototype.changeContent = function (elem) {
        var value = elem.innerHTML;
        this.contenido = value.toLowerCase();
        console.log(this.contenido);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_edit_user_service__["a" /* EditUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_edit_user_service__["a" /* EditUserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_group_service__["a" /* GroupService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_activity_service__["a" /* ActivityService */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_list_game_list_component__ = __webpack_require__("../../../../../src/app/game-list/game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiform_multiform_component__ = __webpack_require__("../../../../../src/app/multiform/multiform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_in_log_in_component__ = __webpack_require__("../../../../../src/app/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_page_game_page_component__ = __webpack_require__("../../../../../src/app/game-page/game-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__groups_page_groups_page_component__ = __webpack_require__("../../../../../src/app/groups-page/groups-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__single_group_single_group_component__ = __webpack_require__("../../../../../src/app/single-group/single-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browser_browser_component__ = __webpack_require__("../../../../../src/app/browser/browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contact-list/contact-list.component.ts");












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__multiform_multiform_component__["a" /* MultiformComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_0__game_list_game_list_component__["a" /* GameListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__log_in_log_in_component__["a" /* LogInComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'game/:id', component: __WEBPACK_IMPORTED_MODULE_5__game_page_game_page_component__["a" /* GamePageComponent */] },
    { path: 'groups/:id', component: __WEBPACK_IMPORTED_MODULE_6__groups_page_groups_page_component__["a" /* GroupsPageComponent */] },
    { path: 'group/:id', component: __WEBPACK_IMPORTED_MODULE_7__single_group_single_group_component__["a" /* SingleGroupComponent */] },
    { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_9__browser_browser_component__["a" /* BrowserComponent */] },
    { path: 'chat/:room/:id', component: __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_11__contact_list_contact_list_component__["a" /* ContactListComponent */] }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".inline{\n  display: inline-block;\n  margin: 10px;\n}\n\n.searchBar{\n  position: absolute;\n    top: 104px;\n    left: 8px;\n    width: 340px;\n    height: 32px;\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid grey;\n    color:white;\n}\n.search{\n  position:absolute;\n  top:104px;\n  right:16px;\n  color:grey;\n  cursor: pointer;\n}\n.searchBar:focus{\n  border:none !important;\n}\n.game-list{\n  position: absolute;\n  top: 172px;\n}\n .cover{\n  width: 160px;\n  height: 160px;\n  position: absolute;\n  margin: 0;\n\n}\n.back{\n  background-color: rgba(62, 63, 63, 0.5)\n}\n@media (min-width:1200px) {\n  .searchBar{\n    width:730px;\n    left:30%;\n  }\n  .search{\n    right:32%;\n  }\n  .game-list{\n    left:20%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <input type=\"text\" name=\"\" [(ngModel)]=\"searchBar\" placeholder=\"Search\" class=\"searchBar\">\n\n  <i class=\"material-icons search\" (click)='searchGame()'>search</i>\n  <!-- <button (click) =\"searchGame()\">Search</button> -->\n</div>\n\n<div *ngIf=\"foundGames.length === 6\" class=\"game-list\">\n\n <div  *ngFor = 'let game of foundGames' class=\"inline\" [attr.data-value]=\"game.id\" #selectedGame >\n   <div class=\"inline cover back\" #cover  (click) = \"selected(selectedGame, cover)\"></div>\n   <img *ngIf=\"game.cover\" [src] ='game.cover.url'  height=\"160\">\n   <img *ngIf=\"!game.cover\"  src ='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' height=\"160\"(click)=\"showme(myGame)\">\n </div>\n</div>\n<!-- <button (click)=\"sendGames()\">NEXT</button> -->\n"

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = (function () {
    function SearchBarComponent(auth, add) {
        this.auth = auth;
        this.add = add;
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.foundGames = [];
        this.selectedGames = [];
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.searchGame = function () {
        var _this = this;
        this.onFocus.emit(true);
        this.add.searchGame(this.searchBar)
            .subscribe(function (found) {
            found.body.forEach(function (game) {
                if (game.cover) {
                    game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x");
                }
            });
            _this.foundGames = found.body;
            console.log(_this.foundGames);
        });
    };
    SearchBarComponent.prototype.selected = function (elem, cover) {
        var index = this.add.gamesToAdd.indexOf(elem.getAttribute('data-value'));
        if (index >= 0) {
            cover.classList.add('back');
        }
        else {
            this.add.gamesToAdd.push(elem.getAttribute('data-value'));
            cover.classList.remove('back');
        }
        console.log(cover);
    };
    SearchBarComponent.prototype.sendGames = function () {
        this.auth.gamesList = this.add.gamesToAdd;
        this.auth.secondStep = true;
    };
    return SearchBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "onFocus", void 0);
SearchBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-bar',
        template: __webpack_require__("../../../../../src/app/search-bar/search-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-bar/search-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */]) === "function" && _b || Object])
], SearchBarComponent);

var _a, _b;
//# sourceMappingURL=search-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
var ActivityService = (function () {
    function ActivityService(http, route) {
        this.http = http;
        this.route = route;
        this.options = { withCredentials: true };
    }
    ActivityService.prototype.addNewAct = function (obj) {
        return this.http.post(BASE_URL + "/api/add/activity", { newAct: obj }, this.options)
            .map(function (res) { return res.json(); });
    };
    ActivityService.prototype.getActivitiesFromUser = function (id) {
        return this.http.get(BASE_URL + "/api/user/activity/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    return ActivityService;
}());
ActivityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ActivityService);

var _a, _b;
//# sourceMappingURL=activity.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/add-game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
var AddGameService = (function () {
    function AddGameService(http, route) {
        this.http = http;
        this.route = route;
        this.gamesToAdd = [];
        this.options = { withCredentials: true };
    }
    AddGameService.prototype.findGame = function (game) {
        return this.http.get(BASE_URL + "/api/findone/" + game, this.options)
            .map(function (res) { return res.json(); });
    };
    AddGameService.prototype.findInDb = function (gameId) {
        return this.http.get(BASE_URL + "/api/find/db/" + gameId, this.options)
            .map(function (res) { return res.json(); });
    };
    AddGameService.prototype.saveGame = function (game) {
        return this.http.post(BASE_URL + "/api/save/game", { game: game }, this.options)
            .map(function (res) { return res.json(); });
    };
    AddGameService.prototype.searchGame = function (game) {
        return this.http.get(BASE_URL + "/api/search/" + game, this.options)
            .map(function (res) { return res.json(); });
    };
    AddGameService.prototype.searchUser = function (gameId) {
        return this.http.get(BASE_URL + "/api/user/" + gameId, this.options)
            .map(function (res) { return res.json(); });
    };
    AddGameService.prototype.turnPic = function (games) {
        games.forEach(function (game) {
            if (game.cover !== undefined) {
                game.cover.url = game.cover.url.split("t_thumb").join("t_thumb_2x");
            }
        });
    };
    AddGameService.prototype.bigScreenshot = function (screenshot) {
        screenshot.forEach(function (screen) {
            screen.url = screen.url.split("t_thumb").join("t_screenshot_big");
        });
    };
    AddGameService.prototype.navigateToGamePage = function (game) {
        game = game.getAttribute('data-value');
        this.route.navigate(['/game', game]);
    };
    AddGameService.prototype.searchProfile = function (id) {
        return this.http.get(BASE_URL + "/api/user/profile/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    AddGameService.prototype.createGroup = function (groupInfo) {
        return this.http.post(BASE_URL + "/api/new/group", { groupInfo: groupInfo })
            .map(function (res) { return res.json(); });
    };
    return AddGameService;
}());
AddGameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddGameService);

var _a, _b;
//# sourceMappingURL=add-game.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASE_URL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL;
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.searchBar = true;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password, email, games, platforms) {
        var _this = this;
        return this.http.post(BASE_URL + "/api/signup", { username: username, password: password, email: email, games: games, platforms: platforms }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASE_URL + "/api/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/api/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASE_URL + "/api/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
var ChaService = (function () {
    function ChaService(http) {
        this.http = http;
        this.options = { withCredentials: true };
    }
    ChaService.prototype.saveMessage = function (message) {
        return this.http.post(BASE_URL + "/api/save/message", { message: message }, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            throw err;
        });
    };
    ChaService.prototype.getRoomMessages = function (room) {
        return this.http.get(BASE_URL + "/api/chat/room/" + room, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            throw err;
        });
    };
    return ChaService;
}());
ChaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ChaService);

var _a;
//# sourceMappingURL=cha.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/edit-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
var EditUserService = (function () {
    function EditUserService(http, router) {
        this.http = http;
        this.router = router;
        this.options = { withCredentials: true };
    }
    EditUserService.prototype.addGame = function (userId, games) {
        return this.http.post(BASE_URL + "/api/hola", { games: games, userId: userId }, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { throw err; });
    };
    EditUserService.prototype.addUser = function (myId, updates) {
        return this.http.post(BASE_URL + "/api/follow/user", { myId: myId, updates: updates }, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { throw err; });
    };
    return EditUserService;
}());
EditUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EditUserService);

var _a, _b;
//# sourceMappingURL=edit-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
var GetListService = (function () {
    function GetListService(http) {
        this.http = http;
        this.options = { withCredentials: true };
    }
    GetListService.prototype.getList = function (platforms) {
        var stringofPlat = platforms.join("-");
        return this.http.get(BASE_URL + "/api/giveme/" + stringofPlat + "/10/21", this.options)
            .map(function (res) { return res.json(); });
    };
    GetListService.prototype.getSuggestions = function (platforms) {
        return this.http.get(BASE_URL + "/api/giveme/" + platforms + "/8/10", this.options)
            .map(function (res) { return res.json(); });
    };
    GetListService.prototype.getSimilarGames = function (id) {
        return this.http.get(BASE_URL + "/api/find/game/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    GetListService.prototype.browseUsers = function (name) {
        return this.http.get(BASE_URL + "/api/find/users/name/" + name, this.options)
            .map(function (res) { return res.json(); });
    };
    GetListService.prototype.browseGroups = function (name) {
        return this.http.get(BASE_URL + "/api/find/groups/name/" + name, this.options)
            .map(function (res) { return res.json(); });
    };
    return GetListService;
}());
GetListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GetListService);

var _a;
//# sourceMappingURL=get-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
var GroupService = (function () {
    function GroupService(http, route) {
        this.http = http;
        this.route = route;
        this.options = { withCredentials: true };
    }
    GroupService.prototype.getUserGroups = function (id) {
        return this.http.get(BASE_URL + "/api/groups/user/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    GroupService.prototype.getGroup = function (id) {
        return this.http.get(BASE_URL + "/api/get/group/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    GroupService.prototype.addUser = function (updates, id) {
        return this.http.post(BASE_URL + "/api/group/add/user", { updates: updates, id: id }, this.options)
            .map(function (res) { return res.json(); });
    };
    GroupService.prototype.getGroupsOfSameGame = function (id) {
        return this.http.get(BASE_URL + "/api/common/groups/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    return GroupService;
}());
GroupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GroupService);

var _a, _b;
//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        //return timeout(5).then(() => true);
        //return this.auth.isLoggedIn().map(user => true)
        return this.auth.getUser() ? true : false;
        //return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\n  height: 80px;\n  background: #212121;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:white;\n  position:fixed;\n  top:0;\n  width:100%;\n  font-size:24px;\n  text-align:center;\n  letter-spacing: 2px;\n  z-index: 1;\n}\n.signup{\n  display: block;\n  width: 328px;\n  height: 58px;\n  margin: 0 auto;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.56);\n  color: rgba(255, 255, 255, 0.56);\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  letter-spacing: 2px;\n\n}\n.signup-form{\n position: absolute;\n top:194px;\n width: 100%;\n text-align: center;\n}\n::-webkit-input-placeholder {\n   padding-left: 52px;\n   font-family: 'Titillium Web', sans-serif;\n   font-size: 16px;\n   letter-spacing: 2px;\n}\n\n.sign-up-butt{\n  margin-top:29px;\n  width: 328px;\n  height: 40px;\n  background: #FD2249;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  border:none;\n  letter-spacing: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" >\n  <h3> New User</h3>\n</div>\n<form class=\"signup-form\">\n\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" class=\"signup\" placeholder=\"Set a user name\"/>\n\n  <input type=\"email\" [(ngModel)]=\"formInfo.email\" name=\"email\" class=\"signup\" placeholder=\"Set your mail\"/>\n\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" class=\"signup\" placeholder=\"Set your password\"/>\n\n  <input type=\"password\" name=\"\" value=\"\" class=\"signup\" placeholder=\"Confirm your password\">\n\n  <button (click)=\"signup()\" class=\"sign-up-butt\"> SIGN UP </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(auth, addGame, router) {
        this.auth = auth;
        this.addGame = addGame;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            email: "",
            games: [],
            platforms: []
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        // this.addGame.gamesToAdd.forEach(game =>{
        //   this.addGame.findGame(game)
        //           .subscribe((element)=>{
        //             if(element !== "full"){
        //               console.log(element[0])
        //             this.addGame.saveGame(element[0])
        //                 .subscribe()
        //             }else{
        //               console.log("game is in db already")
        //             }
        //           })
        // })
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.formInfo.games = this.auth.gamesList;
        this.formInfo.platforms = this.auth.platList;
        var _a = this.formInfo, username = _a.username, password = _a.password, email = _a.email, games = _a.games, platforms = _a.platforms;
        if (username != "" && password != "" && email != "") {
            console.log("Signup with " + username + " " + password + " " + email);
            this.auth.signup(username, password, email, games, platforms)
                .map(function (user) { return _this.router.navigate(['/login']); })
                .subscribe();
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/single-group/single-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".group-content{\n  position: relative;\n  top:24px;\n}\n.resumen{\n  position: relative;\n  bottom:10px;\n  height: 48px;\n  background: #212121;\n}\n.nombre{\n  vertical-align: top;\n  width: 60%;\n  color:white;\n  display: inline-block;\n}\n.nombre h5, .nombre p{\n  margin: 0;\n  margin-left: 24px;\n}\n.nombre h5{\n  font-size: 14px;\n    font-family: 'Titillium Web', sans-serif;\n    letter-spacing: 1px;\n    margin-top:2px;\n}\n.nombre p {\n  font-size: 12px;\n  font-weight: lighter;\n  font-family: 'Titillium Web', sans-serif;\n  color: #757575;\n}\n.users{\n  vertical-align: top;\n  display: inline-block;\n  width: 35%;\n  text-align: center;\n  margin-top:5px;\n  border-left: 1px solid rgba(255, 255, 255, 0.12);\n}\n.users h5, .users h6{\n  margin: 0;\n  font-family: 'Titillium Web', sans-serif;\n  color:white;\n}\n.users h6{\n  font-size:10px;\n  font-weight: lighter;\n\n}\n.usuarios{\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size:16px;\n  font-weight: lighter;\n  vertical-align: 100%;\n}\n.avatar{\n  margin:10px;\n  width: 40px;\n  border-radius:20px;\n}\n.menu{\n  position: fixed;\n  bottom:0;\n  height: 56px;\n  background: #212121;\n  width: 100%;\n}\n.nav-bar{\n  color:rgba(255, 255, 255, 0.64);\n  vertical-align: middle;\n\n}\n#active{\n  padding-top:5px;\n\n}\n#active .nav-bar{\n  color:white;\n}\n.icons p{\n  margin:0;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 12px;\n}\n.icons{\n  vertical-align: top;\n  padding-top:15px;\n  width: 24%;\n  text-align: center;\n  display: inline-block;\n}\n.addGame{\n  width: 328px;\n  height: 40px;\n  background: #FD2249;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  border:none;\n  letter-spacing: 2px;\n\n\n}\n.set{\n    position: fixed;\n    bottom: 68px;\n    margin-left: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-group/single-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"groupInf\" class=\"group-content\">\n  <img [src]=\"groupInf.groupImage\" height=\"203\">\n  <div class=\"resumen\">\n    <div class=\"nombre\">\n      <h5>{{groupInf.groupname}}</h5>\n      <p><span>{{groupInf.gameName}}</span> / <span>{{groupInf.platform}}</span></p>\n    </div>\n    <div class=\"users\">\n      <h5>{{groupInf.users.length}}</h5>\n      <h6>USERS</h6>\n    </div>\n  </div>\n  <div class=\"usuarios\">\n    <div *ngFor=\"let u of groupUsers\" >\n    <a [routerLink]=\"['/profile', u._id]\">\n      <img class=\"avatar\" src=\"https://store.playstation.com/store/api/chihiro/00_09_000/container/ES/es/999/EP4497-CUSA01439_00-AV00000000000003/1499640335000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100\" alt=\"\">\n      <span class=\"usuarios\">{{u.username}}</span>\n    </a>\n    </div>\n  </div>\n</div>\n<div class=\"set\" *ngIf=\"!isUserInGroup\">\n<button  *ngIf=\"usersInGroup\" class=\"addGame\" (click)=\"userJoinsGroup()\">Join Group</button>\n</div>\n<div class=\"menu\">\n<div class=\"icons\" >\n  <a [routerLink] =\"['/home']\">\n  <i class=\"material-icons nav-bar\">home</i>\n</a>\n</div>\n<div class=\"icons\">\n  <i class=\"material-icons nav-bar\">explore</i>\n</div>\n<div class=\"icons\">\n  <i class=\"material-icons nav-bar\">chat_bubble_outline</i>\n</div>\n<div class=\"icons\">\n  <a [routerLink]=\"['/profile']\">\n  <i class=\"material-icons nav-bar\">perm_identity</i>\n</a>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/single-group/single-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_group_service__ = __webpack_require__("../../../../../src/app/services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__ = __webpack_require__("../../../../../src/app/services/add-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SingleGroupComponent = (function () {
    function SingleGroupComponent(group, route, add, auth, act) {
        this.group = group;
        this.route = route;
        this.add = add;
        this.auth = auth;
        this.act = act;
        this.loggedUser = this.auth.user;
        this.isUserInGroup = false;
    }
    SingleGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.route.params
                .subscribe(function (params) {
                _this.groupId = params['id'];
                _this.getGroupInfo(_this.groupId);
            });
        });
    };
    SingleGroupComponent.prototype.getGroupInfo = function (id) {
        var _this = this;
        this.group.getGroup(id)
            .subscribe(function (group) {
            _this.groupInf = group;
            _this.usersInGroup = _this.groupInf['users'];
            console.log(_this.groupInf);
            _this.groupUsers = [];
            _this.usersInGroup.forEach(function (user) {
                _this.add.searchProfile(user)
                    .subscribe(function (users) {
                    _this.groupUsers.push(users);
                });
            });
            _this.checkUser(_this.loggedUser['_id']);
        });
    };
    SingleGroupComponent.prototype.checkUser = function (id) {
        var _this = this;
        this.usersInGroup.forEach(function (user) {
            if (user === _this.loggedUser['_id']) {
                _this.isUserInGroup = true;
            }
        });
    };
    SingleGroupComponent.prototype.userJoinsGroup = function () {
        var _this = this;
        this.usersInGroup.push(this.loggedUser['_id']);
        this.group.addUser(this.usersInGroup, this.groupId)
            .subscribe(function (user) {
            _this.getGroupInfo(_this.groupId);
            _this.act.addNewAct(_this.createObjforAct())
                .subscribe();
        });
    };
    SingleGroupComponent.prototype.createObjforAct = function () {
        var newObj = {
            text: this.groupInf['groupname'],
            owner: this.loggedUser['_id'],
            image: this.groupInf['groupImage'],
            addedUser: this.groupInf['_id'],
            kind: 'GROUP'
        };
        return newObj;
    };
    return SingleGroupComponent;
}());
SingleGroupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-single-group',
        template: __webpack_require__("../../../../../src/app/single-group/single-group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/single-group/single-group.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_group_service__["a" /* GroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_add_game_service__["a" /* AddGameService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_activity_service__["a" /* ActivityService */]) === "function" && _e || Object])
], SingleGroupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=single-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".butt{\n  margin-top:29px;\n  width: 328px;\n  height: 40px;\n  background: #FD2249;\n  color:white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  border:none;\n  letter-spacing: 2px;\n  display: block;\n  margin: 0 auto;\n\n}\n.top{\n  position: relative;\n  top: 260px;\n  margin-bottom: 8px;\n}\n\n.logo{\n  position: relative;\n  top:193px;\n  display: block;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/images/beta.svg\" class=\"logo\" height=\"92\">\n<button class=\"butt top\" (click)=\"goToSignUp()\">SIGN UP</button>\n<button class=\"butt top\" (click)=\"goToLogIn()\">LOG IN</button>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent(router) {
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.goToSignUp = function () {
        this.router.navigate(['/signup']);
    };
    WelcomeComponent.prototype.goToLogIn = function () {
        this.router.navigate(['/login']);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], WelcomeComponent);

var _a;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    BASE_URL: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map