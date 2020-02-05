webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentListJS.jsx":
/*!**************************************!*\
  !*** ./components/CommentListJS.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Comment */ "./models/Comment.ts");
var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/components/CommentListJS.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CommentList = function CommentList(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_models_Comment__WEBPACK_IMPORTED_MODULE_1__["subscribe"])(function (comment) {
      console.log('received comment: ', comment);
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "swag ", props.initialComments.length);
};

/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ })

})
//# sourceMappingURL=index.js.a68c90d8881ad03e1fd1.hot-update.js.map