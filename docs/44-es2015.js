(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/gl-ionic-background-video/dist/esm/es2017/build/tmstehfo.sc.entry.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/gl-ionic-background-video/dist/esm/es2017/build/tmstehfo.sc.entry.js ***!
  \*******************************************************************************************/
/*! exports provided: GlBackgroundVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlBackgroundVideo", function() { return GLBackgroundVideoComponent; });
/* harmony import */ var _gl_background_video_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gl-background-video.core.js */ "./node_modules/gl-ionic-background-video/dist/esm/es2017/gl-background-video.core.js");


class GLBackgroundVideoComponent {
    constructor() {
        this.muted = true;
    }
    componentDidLoad() {
        if (this.muted) {
            this.videoElement.muted = true;
        }
    }
    render() {
        return Object(_gl_background_video_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("video", { autoplay: true, loop: true, playsinline: true, preload: "auto", muted: this.muted, src: this.src, poster: this.poster });
    }
    static get is() { return "gl-background-video"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
    }; }
    static get style() { return "video.sc-gl-background-video{position:fixed;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.plt-android.sc-gl-background-video-h   video[poster].sc-gl-background-video, .plt-android   .sc-gl-background-video-h   video[poster].sc-gl-background-video{-o-object-fit:none;object-fit:none}"; }
}




/***/ })

}]);
//# sourceMappingURL=44-es2015.js.map