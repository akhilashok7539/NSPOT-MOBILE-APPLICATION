(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-course-post-course-module"],{

/***/ "7+RA":
/*!***********************************************************!*\
  !*** ./src/app/post-course/post-course-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PostCoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCoursePageRoutingModule", function() { return PostCoursePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_course_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-course.page */ "SX7D");




const routes = [
    {
        path: '',
        component: _post_course_page__WEBPACK_IMPORTED_MODULE_3__["PostCoursePage"]
    }
];
let PostCoursePageRoutingModule = class PostCoursePageRoutingModule {
};
PostCoursePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostCoursePageRoutingModule);



/***/ }),

/***/ "ERq8":
/*!***************************************************!*\
  !*** ./src/app/post-course/post-course.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #028490 !important;\n  margin-bottom: -8px;\n}\n\nion-label {\n  font-family: \"Poppins\" !important;\n}\n\nion-card {\n  width: 143px;\n  height: 143px;\n  padding: 15px !important;\n  background: #F8F8F8;\n}\n\nion-title {\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-button {\n  margin-left: 20px;\n  margin-right: 20px;\n  --background: #028490;\n  margin-top: 20px;\n}\n\n.toolbar-background {\n  --border-width: 0px !important;\n  border: 0 !important;\n}\n\n.toolbar-container {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.ToolbarVerde {\n  --padding-top: 0px !important;\n  --padding-left: 0px !important;\n  --padding-right: 0px !important;\n  --padding-bottom: 0px !important;\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n}\n\nimg {\n  margin: 0 auto;\n  margin-top: 10px;\n  display: block;\n}\n\nh5 {\n  text-align: center;\n  font-family: \"Poppins\";\n  font-weight: 300;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.instiutenamerow {\n  color: white;\n  padding: 10px;\n}\n\np {\n  text-align: center;\n}\n\nsvg {\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBvc3QtY291cnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdDQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlDQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBR0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFFSSxZQUFBO0VBRUEsYUFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBSkoiLCJmaWxlIjoicG9zdC1jb3Vyc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjMGMyZjZjICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiAxNDNweDtcclxuICAgIGhlaWdodDogMTQzcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjg0OTA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1jb250YWluZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5Ub29sYmFyVmVyZGUge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDUge1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluc3RpdXRlbmFtZXJvdyB7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzBjMmY2YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */");

/***/ }),

/***/ "P+69":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-course/post-course.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <!-- <button routerLink=\"/navigaiondrawer\">s</button> -->\r\n            <!-- <IonMenuButton> </IonMenuButton> -->\r\n            <!-- <ion-menu-button auto-hide=\"false\"></ion-menu-button> -->\r\n\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button auto-hide=\"false\" style=\"    color: #028490;\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>NSPOT</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container\">\r\n        <h5>Post a New Course</h5>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Course Code</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">University Name</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Available Seats</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Academic Year</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Academic Year Month</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Course Duration</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Exam Conducted</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label>Course Syllabus</ion-label>\r\n\r\n                </ion-col>\r\n                <ion-col>\r\n                    <input type=\"file\">\r\n\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item>\r\n            <ion-label>Addmission Start Date</ion-label>\r\n            <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Addmission End Date</ion-label>\r\n            <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Class Start Date</ion-label>\r\n            <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Male Allowed</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Female Allowed</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Other Gender Allowed</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Campus Address Line 1 </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Campus Address Line 2</ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Campus Address Line 3 </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Country </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Block </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Online Class Availability</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Apptitude Test Required</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n\r\n\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Online Interview</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Job Areas </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Salary Range </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Placement Assistance</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">Recuriters </ion-label>\r\n            <ion-input></ion-input>\r\n        </ion-item>\r\n        <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Active</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Yes</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>No</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\r\n                </ion-item>\r\n\r\n\r\n            </ion-radio-group>\r\n        </ion-list>\r\n\r\n\r\n        <ion-item>\r\n            <ion-label>Academic Levels</ion-label>\r\n            <ion-select placeholder=\"Select One\">\r\n                <ion-select-option value=\"f\">primary</ion-select-option>\r\n                <ion-select-option value=\"m\">seconday</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-button expand=\"block\">SUBMIT</ion-button>\r\n    </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "SX7D":
/*!*************************************************!*\
  !*** ./src/app/post-course/post-course.page.ts ***!
  \*************************************************/
/*! exports provided: PostCoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCoursePage", function() { return PostCoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_course_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-course.page.html */ "P+69");
/* harmony import */ var _post_course_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-course.page.scss */ "ERq8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PostCoursePage = class PostCoursePage {
    constructor() { }
    ngOnInit() {
    }
};
PostCoursePage.ctorParameters = () => [];
PostCoursePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-course',
        template: _raw_loader_post_course_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_course_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostCoursePage);



/***/ }),

/***/ "aVEZ":
/*!***************************************************!*\
  !*** ./src/app/post-course/post-course.module.ts ***!
  \***************************************************/
/*! exports provided: PostCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCoursePageModule", function() { return PostCoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _post_course_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-course-routing.module */ "7+RA");
/* harmony import */ var _post_course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-course.page */ "SX7D");







let PostCoursePageModule = class PostCoursePageModule {
};
PostCoursePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_course_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostCoursePageRoutingModule"]
        ],
        declarations: [_post_course_page__WEBPACK_IMPORTED_MODULE_6__["PostCoursePage"]]
    })
], PostCoursePageModule);



/***/ })

}]);
//# sourceMappingURL=post-course-post-course-module.js.map