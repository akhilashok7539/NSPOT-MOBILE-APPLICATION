(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <ion-menu-button auto-hide=\"false\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <!-- <ion-row class=\"instiutenamerow\"> -->\r\n    <!-- <ion-col>\r\n\r\n            <p>Welcome Institue !</p>\r\n        </ion-col> -->\r\n\r\n    <!-- </ion-row> -->\r\n    <ion-row class=\"instiutenamerow\">\r\n        <ion-col size=\"6\">\r\n            <ion-card routerLink=\"/verify-student-applications\">\r\n\r\n                <img src=\"./assets/img/user(1) 1.png\" alt=\"\">\r\n\r\n                <h5>Verify Applications</h5>\r\n\r\n            </ion-card>\r\n            <!-- <img src=\"./assets/img/icons8-checked-user-male-96.png\" alt=\"\"> -->\r\n\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-card routerLink=\"/addmission-register-list\">\r\n                <img src=\"./assets/img/shortlist 1.png\" alt=\"\">\r\n\r\n                <h5>Addmission Register List</h5>\r\n\r\n            </ion-card>\r\n            <!-- <img src=\"./assets/img/icons8-add-user-male-100.png\" alt=\"\"> -->\r\n\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-card routerLink=\"/addmission-officerlist\">\r\n                <img src=\"./assets/img/clipboard 1.png\" alt=\"\">\r\n\r\n                <h5>Addmission Officer List</h5>\r\n\r\n\r\n            </ion-card>\r\n            <!-- <img src=\"./assets/img/icons8-fat-cop-100.png\" alt=\"\"> -->\r\n\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-card routerLink=\"/customize-applications\">\r\n                <img src=\"./assets/img/feature 1.png\" alt=\"\">\r\n\r\n                <h5> Customise Application </h5>\r\n\r\n\r\n            </ion-card>\r\n            <!-- <img src=\"./assets/img/icons8-google-forms-96.png\" alt=\"\"> -->\r\n\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n            <ion-card routerLink=\"/post-course\">\r\n                <img src=\"./assets/img/add 1.png\" alt=\"\">\r\n\r\n                <h5> Post a course </h5>\r\n\r\n\r\n            </ion-card>\r\n            <!-- <img src=\"./assets/img/icons8-course-assign-96.png\" alt=\"\"> -->\r\n\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-card routerLink=\"/manage-course\">\r\n                <img src=\"./assets/img/online-course 1.png\" alt=\"\">\r\n\r\n                <h5> Manage course </h5>\r\n\r\n\r\n            </ion-card>\r\n            <!-- <img src=\"./assets/img/icons8-request-service-96.png\" alt=\"\"> -->\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n\r\n<!-- \r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n    <ion-header>\r\n        <ion-toolbar color=\"primary\" style=\" --ion-color-base: #028490 !important;\r\n          padding-top: 47px;\r\n    padding-bottom: 47px;\">\r\n        \r\n            <img src=\"./assets/img/NSpot_Logo Png-03.svg\" alt=\"\">\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-icon name=\"home-sharp\"></ion-icon>\r\n                <p>Home</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"pulse-sharp\"></ion-icon>\r\n                <p>Live Addmission Desk</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"person-circle-sharp\"></ion-icon>\r\n                <p>Profile</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"mail-open-sharp\"></ion-icon>\r\n                <p>Contact Us</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"arrow-up-circle-sharp\"></ion-icon>\r\n                <p>Upgrade</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"pricetag-sharp\"></ion-icon>\r\n                <p>Payment History</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-icon name=\"power-sharp\"></ion-icon>\r\n                <p>Logout</p>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main\"></ion-router-outlet> -->");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let Tab1Page = class Tab1Page {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeGesture(true);
    }
    ngAfterContentInit() {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeGesture(true);
    }
    ngAfterViewInit() {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeGesture(true);
    }
    ngOnDestroy() {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeGesture(true);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\nion-card {\n  height: 143px;\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 12px;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n  font-family: \"Poppins\";\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBRUksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFHSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFFSSxZQUFBO0VBRUEsYUFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFMSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzBjMmY2YyAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDI4NDkwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICAvLyB3aWR0aDogMTQzcHg7XHJcbiAgICBoZWlnaHQ6IDE0M3B4O1xyXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaW5zdGl1dGVuYW1lcm93IHtcclxuICAgIC8vIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMGMyZjZjO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map