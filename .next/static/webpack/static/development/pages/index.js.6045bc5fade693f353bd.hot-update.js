webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentList.tsx":
false,

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
var _this = undefined,
    _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/components/CommentListJS.jsx";


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
  }, "swag ", _this.props.initialComments.lenth());
};

/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_CommentListJS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CommentListJS */ "./components/CommentListJS.jsx");
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Comment */ "./models/Comment.ts");

var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      fontFamily: '"IBM Plex Sans", Arial, Helvetica',
      width: 800,
      maxWidth: '80vw',
      margin: '20px auto'
    },
    media: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('sm'), {
      width: '100%'
    })
  };
});

var Home = function Home() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    className: classes.media,
    alt: "Kokanee Creek is also known as Depot Creek",
    src: "https://www.waterfallsnorthwest.com/pictures/Depot_Creek_Falls_167.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Kokanee Exploratory Project"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Welcome Fred Choe!"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Design a comment list component that automatically appends new messages as they arrive. Allow the user to choose whether or not to automatically \u201Cfollow\u201D as new messages arrive."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Use this provided ", __jsx("a", {
    href: "https://github.com/themaven-net/web-kokanee-fred-choe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "nextjs repo"), " for your work."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Please connect with Hank Yates, your Maven Teammate. Please treat this relationship as you would a normal colleague. If you have any questions about the code base, feel free to ask for an orientation. You are also invited, but not obligated, to submit a PR for the work and take feedback from the PR. Your teammate's github username is ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "hankyates-maven"), " and his email is", ' ', __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "hank.yates@maven.io")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Typescript is preferred, but JavaScript is acceptable."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "You are welcome to design your own UX, if you wish, or we can supply some sample UX."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "When you are ready to present, reach out to Jimmy and he\u2019ll get a time scheduled for the demo."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Good luck!"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Have a look around the project and see if anything is helpful. be sure and take a look at models/Comment.ts and components/CommentList.tsx. (There is also a javascript version of the CommentList component, in components/ComponentListJS.jsx, if you prefer.)"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "If you want to do something like create a new page route, the", ' ', __jsx("a", {
    href: "https://nextjs.org/docs/basic-features/pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "nextjs docs"), " are quite useful.", ' '), __jsx(_components_CommentListJS__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialComments: Object(_models_Comment__WEBPACK_IMPORTED_MODULE_5__["makeComments"])(10),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Extra credit 1: ensure the CommentList can load a large number (~ 10,000) of comments. Extra credit 2: Ensure there are no duplicate messages in the stream."));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6045bc5fade693f353bd.hot-update.js.map