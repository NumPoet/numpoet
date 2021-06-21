(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contac-contac-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/contac/contac.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/contac/contac.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>contac</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/contac/contac-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/contac/contac-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ContacPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContacPageRoutingModule", function() { return ContacPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contac_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contac.page */ "./src/app/folder/contac/contac.page.ts");




const routes = [
    {
        path: '',
        component: _contac_page__WEBPACK_IMPORTED_MODULE_3__["ContacPage"]
    }
];
let ContacPageRoutingModule = class ContacPageRoutingModule {
};
ContacPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContacPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/contac/contac.module.ts":
/*!************************************************!*\
  !*** ./src/app/folder/contac/contac.module.ts ***!
  \************************************************/
/*! exports provided: ContacPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContacPageModule", function() { return ContacPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contac_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contac-routing.module */ "./src/app/folder/contac/contac-routing.module.ts");
/* harmony import */ var _contac_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contac.page */ "./src/app/folder/contac/contac.page.ts");







let ContacPageModule = class ContacPageModule {
};
ContacPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contac_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContacPageRoutingModule"]
        ],
        declarations: [_contac_page__WEBPACK_IMPORTED_MODULE_6__["ContacPage"]]
    })
], ContacPageModule);



/***/ }),

/***/ "./src/app/folder/contac/contac.page.scss":
/*!************************************************!*\
  !*** ./src/app/folder/contac/contac.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb250YWMvY29udGFjLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/contac/contac.page.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/contac/contac.page.ts ***!
  \**********************************************/
/*! exports provided: ContacPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContacPage", function() { return ContacPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ContacPage = class ContacPage {
    constructor() { }
    ngOnInit() {
    }
};
ContacPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contac',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contac.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/contac/contac.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contac.page.scss */ "./src/app/folder/contac/contac.page.scss")).default]
    })
], ContacPage);



/***/ })

}]);
//# sourceMappingURL=contac-contac-module-es2015.js.map