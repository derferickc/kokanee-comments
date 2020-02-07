webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/components/Comment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Comment(props) {
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
    return {
      root: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      }
    };
  });
  return __jsx("div", {
    className: "individual-comment",
    style: {
      margin: "10px auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Author: "), props.comment.author), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Message: "), props.comment.message), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Time: "), props.comment.time.toString()));
}

/***/ })

})
//# sourceMappingURL=index.js.156bc97f66c32afa87c7.hot-update.js.map