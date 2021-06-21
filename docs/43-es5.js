function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43], {
  /***/
  "./node_modules/gl-ionic-background-video/dist/esm/es2017/build/tmstehfo.entry.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/gl-ionic-background-video/dist/esm/es2017/build/tmstehfo.entry.js ***!
    \****************************************************************************************/

  /*! exports provided: GlBackgroundVideo */

  /***/
  function node_modulesGlIonicBackgroundVideoDistEsmEs2017BuildTmstehfoEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlBackgroundVideo", function () {
      return GLBackgroundVideoComponent;
    });
    /* harmony import */


    var _gl_background_video_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../gl-background-video.core.js */
    "./node_modules/gl-ionic-background-video/dist/esm/es2017/gl-background-video.core.js");

    var GLBackgroundVideoComponent = /*#__PURE__*/function () {
      function GLBackgroundVideoComponent() {
        _classCallCheck(this, GLBackgroundVideoComponent);

        this.muted = true;
      }

      _createClass(GLBackgroundVideoComponent, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          if (this.muted) {
            this.videoElement.muted = true;
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_gl_background_video_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("video", {
            autoplay: true,
            loop: true,
            playsinline: true,
            preload: "auto",
            muted: this.muted,
            src: this.src,
            poster: this.poster
          });
        }
      }], [{
        key: "is",
        get: function get() {
          return "gl-background-video";
        }
      }, {
        key: "encapsulation",
        get: function get() {
          return "shadow";
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            "muted": {
              "type": Boolean,
              "attr": "muted"
            },
            "poster": {
              "type": String,
              "attr": "poster"
            },
            "src": {
              "type": String,
              "attr": "src"
            },
            "videoElement": {
              "elementRef": true
            }
          };
        }
      }, {
        key: "style",
        get: function get() {
          return "video{position:fixed;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}:host-context(.plt-android) video[poster]{-o-object-fit:none;object-fit:none}";
        }
      }]);

      return GLBackgroundVideoComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=43-es5.js.map