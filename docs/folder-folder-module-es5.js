function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
  /***/
  "./node_modules/gl-ionic-background-video/dist/esm/es5/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/gl-ionic-background-video/dist/esm/es5/index.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesGlIonicBackgroundVideoDistEsmEs5IndexJs(module, exports) {// GlBackgroundVideo: ES Module

    /***/
  },

  /***/
  "./node_modules/gl-ionic-background-video/dist/esm/index.js":
  /*!******************************************************************!*\
    !*** ./node_modules/gl-ionic-background-video/dist/esm/index.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesGlIonicBackgroundVideoDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _es5_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./es5/index.js */
    "./node_modules/gl-ionic-background-video/dist/esm/es5/index.js");
    /* harmony import */


    var _es5_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_es5_index_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _es5_index_js__WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _es5_index_js__WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" >\r\n  <ion-toolbar color=\"success\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" size=\"large\">NUMPOET</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [scrollEvents]=\"true\"\r\n  (ionScrollStart)=\"logScrollStart()\"\r\n  (ionScroll)=\"logScrolling($event)\"\r\n  (ionScrollEnd)=\"logScrollEnd()\"\r\n  fullscreen=\"true\"\r\n>\r\n  <!--\r\n  <div id=\"container\">\r\n    <section>\r\n\r\n        <video src=\"./assets/portfolio/./assets/bg.mp4\" class=\"section-video\"  autoplay muted loop ></video>\r\n\r\n      <gl-background-video class=\"section-video\" src=\"./assets/portfolio/./assets/bg.mp4\" mute=\"true\"></gl-background-video>\r\n      \r\n      <div class=\"sphere\">\r\n        <video src=\"./assets/portfolio/./assets/bg.mp4\" class=\"video\"  autoplay muted loop ></video>\r\n      </div>\r\n\r\n      <h2 class=\"texto-landing\">NumPoet</h2>\r\n    </section>\r\n  </div>\r\n-->\r\n\r\n  <section class=\"banner\" id=\"home\">\r\n    <div class=\"imgSidebar\">\r\n      <img src=\"./assets/numpoet/meu-1.jpg\" />\r\n    </div>\r\n    <div class=\"contentBx\">\r\n      <h5 class=\"logoText\">Software Developer/Data scientist/Dev/Sec/Ops</h5>\r\n      <div>\r\n        <h4><span>Hello</span>, I'm</h4>\r\n        <h2>Sergio Negrete Villegas</h2>\r\n        <h4>Welcome to my personal brand -><strong>NumPoet</strong>.</h4>\r\n        <p>\r\n          Digital Transformation as a Service.\r\n        </p>\r\n        <a href=\"#\" class=\"btn\">About Me</a>\r\n      </div>\r\n      <ul class=\"sci\">\r\n        <li>\r\n          <a href=\"https://www.facebook.com/NumPoet/\" target=\"_blank\"><img src=\"./assets/portfolio/facebook.png\" /></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://twitter.com/Num_Poet\"><img src=\"./assets/portfolio/twitter.png\" /></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.instagram.com/toch_psi/\"><img src=\"./assets/portfolio/instagram.png\" /></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n<!-- \r\n  <section class=\"about\" id=\"about\">\r\n    <div class=\"title white\">\r\n      <h2>About Us</h2>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"textBx\">\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n          aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r\n          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum\r\n          dolor sit amet<br /><br />consectetur adipisicing elit, sed do eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim\r\n          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\r\n          ea commodo consequat. Duis aute irure dolor in reprehenderit in\r\n          voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n        </p>\r\n      </div>\r\n      <div class=\"imgBx\">\r\n        <img src=\"./assets/portfolio/bg1.jpg\" />\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"services\" id=\"services\">\r\n    <div class=\"title\">\r\n      <h2>Our Services</h2>\r\n      <p>\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam,\r\n        molestias excepturi earum placeat amet aspernatur pariatur vero aut.\r\n      </p>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"servicesBx\">\r\n        <img src=\"./assets/portfolio/icon1.png\" />\r\n        <h2>Web Design</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur\r\n          fugit voluptas vero, quibusdam neque aspernatur laboriosam.\r\n        </p>\r\n      </div>\r\n      <div class=\"servicesBx\">\r\n        <img src=\"./assets/portfolio/icon2.png\" />\r\n        <h2>Web Development</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur\r\n          fugit voluptas vero, quibusdam neque aspernatur laboriosam.\r\n        </p>\r\n      </div>\r\n      <div class=\"servicesBx\">\r\n        <img src=\"./assets/portfolio/icon3.png\" />\r\n        <h2>Android Apps</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur\r\n          fugit voluptas vero, quibusdam neque aspernatur laboriosam.\r\n        </p>\r\n      </div>\r\n      <div class=\"servicesBx\">\r\n        <img src=\"./assets/portfolio/icon4.png\" />\r\n        <h2>Photography</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur\r\n          fugit voluptas vero, quibusdam neque aspernatur laboriosam.\r\n        </p>\r\n      </div>\r\n      <div class=\"servicesBx\">\r\n        <img src=\"./assets/portfolio/icon5.png\" />\r\n        <h2>Content Writing</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur\r\n          fugit voluptas vero, quibusdam neque aspernatur laboriosam.\r\n        </p>\r\n      </div>\r\n      <div class=\"servicesBx\">\r\n        <img src=\"./assets/portfolio/icon6.png\" />\r\n        <h2>Video Editing</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur\r\n          fugit voluptas vero, quibusdam neque aspernatur laboriosam.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"work\" id=\"work\">\r\n    <div class=\"title\">\r\n      <h2>Recent Work</h2>\r\n      <p>\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam,\r\n        molestias excepturi earum placeat amet aspernatur pariatur vero aut.\r\n      </p>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img1.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 01</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img2.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 02</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img3.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 03</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img4.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 04</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img5.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 05</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img6.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 06</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img7.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 07</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"workBx\">\r\n        <div class=\"imgBx\">\r\n          <img src=\"./assets/portfolio/img8.jpg\" />\r\n        </div>\r\n        <div class=\"textBx\">\r\n          <h3>Project 08</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"contact\" id=\"contact\">\r\n    <div class=\"title white\">\r\n      <h2>Contact Us</h2>\r\n      <p>\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam,\r\n        molestias excepturi earum placeat amet aspernatur pariatur vero aut.\r\n      </p>\r\n    </div>\r\n    <div class=\"contactForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col50\">\r\n          <input type=\"text\" name=\"\" placeholder=\"First Name\" />\r\n        </div>\r\n        <div class=\"col50\">\r\n          <input type=\"text\" name=\"\" placeholder=\"Last Name\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col50\">\r\n          <input type=\"text\" name=\"\" placeholder=\"Email\" />\r\n        </div>\r\n        <div class=\"col50\">\r\n          <input type=\"text\" name=\"\" placeholder=\"Mobile No.\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col100\">\r\n          <textarea placeholder=\"Message\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col100\">\r\n          <input type=\"submit\" value=\"Send\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n\r\n  <div class=\"copyright\">\r\n    <p>Copyright © 2021 NumPoet. All Right Reserved.</p>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/folder/folder-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/folder/folder-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FolderPageRoutingModule */

  /***/
  function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
      return FolderPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");

    var routes = [{
      path: '',
      component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }, {
      path: 'contacto',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contac-contac-module */
        "contac-contac-module").then(__webpack_require__.bind(null,
        /*! ./contac/contac.module */
        "./src/app/folder/contac/contac.module.ts")).then(function (m) {
          return m.ContacPageModule;
        });
      }
    }];

    var FolderPageRoutingModule = function FolderPageRoutingModule() {
      _classCallCheck(this, FolderPageRoutingModule);
    };

    FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FolderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.module.ts ***!
    \*****************************************/

  /*! exports provided: FolderPageModule */

  /***/
  function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
      return FolderPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-routing.module */
    "./src/app/folder/folder-routing.module.ts");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");
    /* harmony import */


    var gl_ionic_background_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! gl-ionic-background-video */
    "./node_modules/gl-ionic-background-video/dist/esm/index.js");

    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]];

    var FolderPageModule = function FolderPageModule() {
      _classCallCheck(this, FolderPageModule);
    };

    FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]],
      declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], FolderPageModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1000;\n  --border-style: none;\n}\n\n.toggle {\n  position: fixed;\n  top: 30px;\n  right: 30px;\n  width: 50px;\n  height: 50px;\n  background-size: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.toggle.active {\n  background-size: 25px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nsection {\n  padding: 100px;\n  min-height: 100vh;\n}\n\n.banner {\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.banner .imgSidebar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 500px;\n  height: 100%;\n}\n\n.banner .imgSidebar img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.banner .contentBx,\n.sidebar {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc(100% - 500px);\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 100px;\n}\n\n.logoText {\n  position: absolute;\n  top: 40px;\n  left: 100px;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: #333;\n  color: #fff;\n  padding: 0 5px;\n}\n\n.banner .contentBx h4 {\n  font-size: 1.5em;\n  color: #333;\n  font-weight: 300;\n}\n\n.banner .contentBx h4 span {\n  color: #00bcd4;\n  font-size: 1.5em;\n  font-weight: 700;\n}\n\n.banner .contentBx h2 {\n  font-size: 3em;\n  color: #333;\n  line-height: 1em;\n}\n\np {\n  font-size: 1.1em;\n  margin: 20px 0;\n  font-weight: 300;\n}\n\n.btn {\n  background: #00bcd4;\n  color: #fff;\n  padding: 10px 30px;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n\n.sidebar {\n  position: fixed;\n  background: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.5s;\n  padding: 40px;\n  z-index: 100;\n  right: -100%;\n}\n\n.sidebar.active {\n  right: 0;\n}\n\n.sidebar ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.sidebar ul li {\n  list-style: none;\n}\n\n.sidebar ul li a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 2em;\n  margin: 10px 0;\n  font-weight: 300;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.sidebar ul li a:hover {\n  color: #00bcd4;\n}\n\n.sci {\n  position: absolute;\n  left: 100px;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sci li {\n  margin-right: 10px;\n  list-style: none;\n}\n\n.sci li img {\n  transform: scale(0.5);\n  opacity: 0.7;\n}\n\n.sci li img:hover {\n  opacity: 1;\n}\n\n.title {\n  width: 100%;\n  text-align: center;\n}\n\n.title h2 {\n  position: relative;\n  color: #00bcd4;\n  font-size: 1.8em;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n\n.title p {\n  max-width: 700px;\n  display: inline-block;\n}\n\n.title h2::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -10px;\n  width: 60px;\n  height: 4px;\n  background: #000;\n}\n\n.title.white h2,\n.title.white p {\n  color: #fff;\n}\n\n.title.white h2::before {\n  background: #fff;\n}\n\n.about {\n  background: #000;\n}\n\n.about .content {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n\n.about .content .textBx {\n  min-width: 49%;\n  width: 49%;\n}\n\n.about .content .textBx p {\n  color: #fff;\n}\n\n.about .content .imgBx {\n  margin-left: 40px;\n}\n\n.about .content .imgBx img {\n  max-width: 100%;\n}\n\n.services .content {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.services .content .servicesBx {\n  padding: 40px 20px;\n  max-width: 340px;\n  margin: 20px;\n  transition: 0.5s;\n  text-align: center;\n  background: #f5f5f5;\n}\n\n.services .content .servicesBx:hover {\n  background: #000;\n}\n\n.services .content .servicesBx img {\n  max-width: 80px;\n  transition: 0.5s;\n}\n\n.services .content .servicesBx:hover img {\n  filter: invert(1);\n}\n\n.services .content .servicesBx h2 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 600;\n  transition: 0.5s;\n}\n\n.services .content .servicesBx:hover h2 {\n  color: #fff;\n}\n\n.services .content .servicesBx p {\n  margin: 0;\n  transition: 0.5s;\n}\n\n.services .content .servicesBx:hover p {\n  color: #fff;\n}\n\n.work .content {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.work .content .workBx {\n  position: relative;\n  width: 265px;\n  height: 265px;\n  margin: 10px;\n  transition: 0.5s;\n  text-align: center;\n}\n\n.work .content .workBx .imgBx,\n.work .content .workBx .textBx {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.work .content .workBx .imgBx img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.work .content .workBx .textBx {\n  background: #000;\n  opacity: 0;\n  transition: 0.5s;\n}\n\n.work .content .workBx:hover .textBx {\n  opacity: 1;\n}\n\n.work .content .workBx .textBx h3 {\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 1em;\n}\n\n.contact {\n  background: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.contact .contactForm {\n  position: relative;\n  width: 700px;\n  margin-top: 20px;\n}\n\n.contact .contactForm .row {\n  width: 100%;\n  display: flex;\n}\n\n.contact .contactForm .row .col50 {\n  width: 50%;\n  margin: 10px;\n}\n\n.contact .contactForm .row .col100 {\n  width: 100%;\n  margin: 10px;\n  text-align: center;\n}\n\n.contact .contactForm .row input,\n.contact .contactForm .row textarea {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  outline: none;\n  background: #111;\n  color: #fff;\n  font-size: 16px;\n  resize: none;\n}\n\n.contact .contactForm .row textarea {\n  height: 100px;\n}\n\n.contact .contactForm .row input[type=submit] {\n  background: #00bcd4;\n  color: #fff;\n  padding: 10px 30px;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 2px;\n  cursor: pointer;\n  max-width: 150px;\n}\n\n.copyright {\n  color: #fff;\n  background: #111;\n  text-align: center;\n  padding: 10px;\n}\n\n.copyright p {\n  margin: 0;\n  font-size: 16px;\n}\n\n@media (max-width: 991px) {\n  .banner .imgSidebar {\n    display: none;\n  }\n\n  .banner .contentBx, .sidebar {\n    width: 100%;\n    padding: 40px;\n  }\n\n  .logoText {\n    left: 40px;\n  }\n\n  .toggle {\n    right: 40px;\n  }\n\n  .sci {\n    left: 40px;\n  }\n\n  section {\n    padding: 40px;\n  }\n\n  .about .content {\n    flex-direction: column;\n  }\n\n  .about .content .textBx {\n    min-width: 100%;\n    width: 100%;\n  }\n\n  .about .content {\n    margin-top: 0;\n  }\n\n  .about .content .imgBx {\n    margin-left: 0;\n  }\n\n  .services .content .servicesBx {\n    padding: 30px 20px;\n    max-width: 340px;\n    margin: 10px;\n  }\n\n  .contact .contactForm {\n    width: 100%;\n  }\n\n  .contactForm .row {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .contact .contactForm .row .col50 {\n    width: 100%;\n  }\n\n  .sidebar ul li a {\n    font-size: 1.5em;\n  }\n}\n\n@media (max-width: 500px) {\n  .services .content .servicesBx,\n.work .content .workBx {\n    max-width: 100%;\n    width: 100%;\n    margin: 10px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL0M6XFxVc2Vyc1xcYm9uZWtcXERvY3VtZW50c1xcMDQtbnVtcG9ldFxccG9ydGZvbGlvXFxudW1wb2V0L3NyY1xcYXBwXFxmb2xkZXJcXGZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURHQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QUQ4QkE7RUFFRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDN0JGOztBRCtCQTtFQUdFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQzlCRjs7QURnQ0E7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7QUM5QkY7O0FEZ0NBO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUM5QkY7O0FEZ0NBO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDOUJGOztBRGdDQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUM5QkY7O0FEaUNBOztFQUdFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUMvQkY7O0FEaUNBO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFB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Q0Y7O0VEMkNBO0lBRUUsYUFBQTtFQ3pDRjs7RUQyQ0E7SUFFRSxzQkFBQTtFQ3pDRjs7RUQyQ0E7SUFFRSxlQUFBO0lBQ0EsV0FBQTtFQ3pDRjs7RUQyQ0E7SUFFRSxhQUFBO0VDekNGOztFRDJDQTtJQUVFLGNBQUE7RUN6Q0Y7O0VEMkNBO0lBRUUsa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUN6Q0Y7O0VEMkNBO0lBRUUsV0FBQTtFQ3pDRjs7RUQyQ0E7SUFFRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUN6Q0Y7O0VEMkNBO0lBRUUsV0FBQTtFQ3pDRjs7RUQyQ0E7SUFFRSxnQkFBQTtFQ3pDRjtBQUNGOztBRDRDQTtFQUVFOztJQUdFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQzVDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICAvL3dpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy9wYWRkaW5nOiA0MHB4IDEwMHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8vICNjb250YWluZXIge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICByaWdodDogMDtcclxuLy8gICB0b3A6IDUwJTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vIH1cclxuXHJcbi8vICNjb250YWluZXIgc3Ryb25nIHtcclxuLy8gICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbi8vIH1cclxuXHJcbi8vICNjb250YWluZXIgcCB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4vLyAgIGNvbG9yOiAjOGM4YzhjO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gfVxyXG5cclxuLy8gI2NvbnRhaW5lciBhIHtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vIH1cclxuXHJcbi50b2dnbGVcclxue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDMwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6ICMwMDAgdXJsKC4vYXNzZXRzL3BvcnRmb2xpby9tZW51LnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi50b2dnbGUuYWN0aXZlXHJcbntcclxuICAvLyBiYWNrZ3JvdW5kOiAjMDAwIHVybChjbG9zZS5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5zZWN0aW9uXHJcbntcclxuICBwYWRkaW5nOiAxMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uYmFubmVyXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmJhbm5lciAuaW1nU2lkZWJhclxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJhbm5lciAuaW1nU2lkZWJhciBpbWdcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5iYW5uZXIgLmNvbnRlbnRCeCxcclxuLnNpZGViYXJcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwMHB4KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwMHB4O1xyXG59XHJcbi5sb2dvVGV4dFxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBsZWZ0OiAxMDBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcbi5iYW5uZXIgLmNvbnRlbnRCeCBoNFxyXG57XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5iYW5uZXIgLmNvbnRlbnRCeCBoNCBzcGFuXHJcbntcclxuICBjb2xvcjogIzAwYmNkNDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmJhbm5lciAuY29udGVudEJ4IGgyXHJcbntcclxuICBmb250LXNpemU6IDNlbTtcclxuICBjb2xvcjogIzMzMztcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcbnBcclxue1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmJ0blxyXG57XHJcbiAgYmFja2dyb3VuZDogIzAwYmNkNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyXHJcbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICByaWdodDogLTEwMCU7XHJcbn1cclxuLnNpZGViYXIuYWN0aXZlIFxyXG57XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLnNpZGViYXIgdWxcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zaWRlYmFyIHVsIGxpXHJcbntcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zaWRlYmFyIHVsIGxpIGFcclxue1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW46ICAxMHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnNpZGViYXIgdWwgbGkgYTpob3ZlclxyXG57XHJcbiAgY29sb3I6ICMwMGJjZDQ7XHJcbn1cclxuXHJcbi5zY2lcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMDBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zY2kgbGlcclxue1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zY2kgbGkgaW1nXHJcbntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5zY2kgbGkgaW1nOmhvdmVyXHJcbntcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGl0bGVcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0bGUgaDJcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzAwYmNkNDtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4udGl0bGUgcFxyXG57XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRpdGxlIGgyOjpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4udGl0bGUud2hpdGUgaDIsXHJcbi50aXRsZS53aGl0ZSBwXHJcbntcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4udGl0bGUud2hpdGUgaDI6OmJlZm9yZVxyXG57XHJcbiAgYmFja2dyb3VuZDogI2ZmZlxyXG59XHJcbi5hYm91dFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4uYWJvdXQgLmNvbnRlbnRcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmFib3V0IC5jb250ZW50IC50ZXh0Qnhcclxue1xyXG4gIG1pbi13aWR0aDogNDklO1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuLmFib3V0IC5jb250ZW50IC50ZXh0QnggcFxyXG57XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmFib3V0IC5jb250ZW50IC5pbWdCeFxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuLmFib3V0IC5jb250ZW50IC5pbWdCeCBpbWdcclxue1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5jb250ZW50XHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG4uc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VzQnhcclxue1xyXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeDpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG4uc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VzQnggaW1nXHJcbntcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VzQng6aG92ZXIgaW1nXHJcbntcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxufVxyXG4uc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VzQnggaDJcclxue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeDpob3ZlciBoMlxyXG57XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNlcnZpY2VzIC5jb250ZW50IC5zZXJ2aWNlc0J4IHBcclxue1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeDpob3ZlciBwXHJcbntcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLndvcmsgLmNvbnRlbnRcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLndvcmsgLmNvbnRlbnQgLndvcmtCeFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNjVweDtcclxuICBoZWlnaHQ6IDI2NXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud29yayAuY29udGVudCAud29ya0J4IC5pbWdCeCxcclxuLndvcmsgLmNvbnRlbnQgLndvcmtCeCAudGV4dEJ4XHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ud29yayAuY29udGVudCAud29ya0J4IC5pbWdCeCBpbWdcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLndvcmsgLmNvbnRlbnQgLndvcmtCeCAudGV4dEJ4XHJcbntcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4ud29yayAuY29udGVudCAud29ya0J4OmhvdmVyIC50ZXh0Qnhcclxue1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLndvcmsgLmNvbnRlbnQgLndvcmtCeCAudGV4dEJ4IGgzXHJcbntcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5jb250YWN0XHJcbntcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0Rm9ybVxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0Rm9ybSAucm93XHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0Rm9ybSAucm93IC5jb2w1MFxyXG57XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmNvbnRhY3QgLmNvbnRhY3RGb3JtIC5yb3cgLmNvbDEwMFxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFjdCAuY29udGFjdEZvcm0gLnJvdyBpbnB1dCxcclxuLmNvbnRhY3QgLmNvbnRhY3RGb3JtIC5yb3cgdGV4dGFyZWFcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzExMTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0Rm9ybSAucm93IHRleHRhcmVhXHJcbntcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0Rm9ybSAucm93IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1cclxue1xyXG4gIGJhY2tncm91bmQ6ICMwMGJjZDQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuLmNvcHlyaWdodFxyXG57XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzExMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29weXJpZ2h0IHBcclxue1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweClcclxue1xyXG4gIC5iYW5uZXIgLmltZ1NpZGViYXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYmFubmVyIC5jb250ZW50QngsIC5zaWRlYmFyXHJcbiAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxuICAubG9nb1RleHRcclxuICB7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuICAudG9nZ2xlXHJcbiAge1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5zY2lcclxuICB7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuICBzZWN0aW9uXHJcbiAge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcbiAgLmFib3V0IC5jb250ZW50XHJcbiAge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmFib3V0IC5jb250ZW50IC50ZXh0QnhcclxuICB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFib3V0IC5jb250ZW50XHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLmFib3V0IC5jb250ZW50IC5pbWdCeFxyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAuc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VzQnhcclxuICB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAuY29udGFjdCAuY29udGFjdEZvcm1cclxuICB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhY3RGb3JtIC5yb3dcclxuICB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIC5jb250YWN0IC5jb250YWN0Rm9ybSAucm93IC5jb2w1MFxyXG4gIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2lkZWJhciB1bCBsaSBhXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcclxue1xyXG4gIC5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeCxcclxuICAud29yayAuY29udGVudCAud29ya0J4XHJcbiAge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn0iLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4udG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4udG9nZ2xlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5iYW5uZXIgLmltZ1NpZGViYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iYW5uZXIgLmltZ1NpZGViYXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYmFubmVyIC5jb250ZW50QngsXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwMHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTAwcHg7XG59XG5cbi5sb2dvVGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAxMDBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uYmFubmVyIC5jb250ZW50QnggaDQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJhbm5lciAuY29udGVudEJ4IGg0IHNwYW4ge1xuICBjb2xvcjogIzAwYmNkNDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJhbm5lciAuY29udGVudEJ4IGgyIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiAjMzMzO1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDBiY2Q0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nOiA0MHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHJpZ2h0OiAtMTAwJTtcbn1cblxuLnNpZGViYXIuYWN0aXZlIHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zaWRlYmFyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlYmFyIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNpZGViYXIgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpZGViYXIgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBiY2Q0O1xufVxuXG4uc2NpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNjaSBsaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNjaSBsaSBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnNjaSBsaSBpbWc6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMDBiY2Q0O1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4udGl0bGUgcCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRpdGxlIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3R0b206IC0xMHB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi50aXRsZS53aGl0ZSBoMixcbi50aXRsZS53aGl0ZSBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aXRsZS53aGl0ZSBoMjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmFib3V0IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmFib3V0IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYWJvdXQgLmNvbnRlbnQgLnRleHRCeCB7XG4gIG1pbi13aWR0aDogNDklO1xuICB3aWR0aDogNDklO1xufVxuXG4uYWJvdXQgLmNvbnRlbnQgLnRleHRCeCBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hYm91dCAuY29udGVudCAuaW1nQngge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmFib3V0IC5jb250ZW50IC5pbWdCeCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeCB7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgbWF4LXdpZHRoOiAzNDBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeCBpbWcge1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeDpob3ZlciBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLnNlcnZpY2VzIC5jb250ZW50IC5zZXJ2aWNlc0J4IGgyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VzQng6aG92ZXIgaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlcnZpY2VzIC5jb250ZW50IC5zZXJ2aWNlc0J4IHAge1xuICBtYXJnaW46IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeDpob3ZlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi53b3JrIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLndvcmsgLmNvbnRlbnQgLndvcmtCeCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI2NXB4O1xuICBoZWlnaHQ6IDI2NXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndvcmsgLmNvbnRlbnQgLndvcmtCeCAuaW1nQngsXG4ud29yayAuY29udGVudCAud29ya0J4IC50ZXh0Qngge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53b3JrIC5jb250ZW50IC53b3JrQnggLmltZ0J4IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLndvcmsgLmNvbnRlbnQgLndvcmtCeCAudGV4dEJ4IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLndvcmsgLmNvbnRlbnQgLndvcmtCeDpob3ZlciAudGV4dEJ4IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLndvcmsgLmNvbnRlbnQgLndvcmtCeCAudGV4dEJ4IGgzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uY29udGFjdCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFjdCAuY29udGFjdEZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRhY3QgLmNvbnRhY3RGb3JtIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhY3QgLmNvbnRhY3RGb3JtIC5yb3cgLmNvbDUwIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY29udGFjdCAuY29udGFjdEZvcm0gLnJvdyAuY29sMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdCAuY29udGFjdEZvcm0gLnJvdyBpbnB1dCxcbi5jb250YWN0IC5jb250YWN0Rm9ybSAucm93IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzExMTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uY29udGFjdCAuY29udGFjdEZvcm0gLnJvdyB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5jb250YWN0IC5jb250YWN0Rm9ybSAucm93IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQ6ICMwMGJjZDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvcHlyaWdodCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYmFubmVyIC5pbWdTaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJhbm5lciAuY29udGVudEJ4LCAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxuXG4gIC5sb2dvVGV4dCB7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuXG4gIC50b2dnbGUge1xuICAgIHJpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLnNjaSB7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cblxuICAuYWJvdXQgLmNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYWJvdXQgLmNvbnRlbnQgLnRleHRCeCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmFib3V0IC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLmFib3V0IC5jb250ZW50IC5pbWdCeCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VzQngge1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5jb250YWN0IC5jb250YWN0Rm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGFjdEZvcm0gLnJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuY29udGFjdCAuY29udGFjdEZvcm0gLnJvdyAuY29sNTAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNpZGViYXIgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZXNCeCxcbi53b3JrIC5jb250ZW50IC53b3JrQngge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/folder/folder.page.ts":
  /*!***************************************!*\
    !*** ./src/app/folder/folder.page.ts ***!
    \***************************************/

  /*! exports provided: FolderPage */

  /***/
  function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
      return FolderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FolderPage = /*#__PURE__*/function () {
      function FolderPage(activatedRoute) {
        _classCallCheck(this, FolderPage);

        this.activatedRoute = activatedRoute;
      }

      _createClass(FolderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }, {
        key: "logScrollStart",
        value: function logScrollStart() {}
      }, {
        key: "logScrolling",
        value: function logScrolling(event) {//console.log(event);
        }
      }, {
        key: "logScrollEnd",
        value: function logScrollEnd() {}
      }]);

      return FolderPage;
    }();

    FolderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./folder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./folder.page.scss */
      "./src/app/folder/folder.page.scss"))["default"]]
    })], FolderPage);
    /***/
  }
}]);
//# sourceMappingURL=folder-folder-module-es5.js.map