webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CommentListClass.js":
/*!****************************************!*\
  !*** ./components/CommentListClass.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/Comment */ "./models/Comment.ts");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-virtualized-auto-sizer */ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");







var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/components/CommentListClass.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var CommentList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CommentList, _Component);

  function CommentList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CommentList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentList).call(this, props));
    _this.state = {
      comments: [],
      follow: true
    };
    _this.handleFollow = _this.handleFollow.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.addCustomComment = _this.addCustomComment.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDupeCheck = _this.handleDupeCheck.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CommentList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        comments: this.props.initialComments
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      Object(_models_Comment__WEBPACK_IMPORTED_MODULE_8__["subscribe"])(function (comment) {
        var dupeCheck = _this2.handleDupeCheck(comment);

        if (dupeCheck === -1) {
          _this2.setState({
            comments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.state.comments), [comment])
          });
        }

        console.log('received comment: ', comment);
      });
    } // method to handle follow / unfollow clicks

  }, {
    key: "handleFollow",
    value: function handleFollow() {
      if (this.state.follow) {
        Object(_models_Comment__WEBPACK_IMPORTED_MODULE_8__["stopFollow"])();
      } else {
        Object(_models_Comment__WEBPACK_IMPORTED_MODULE_8__["startFollow"])();
      }

      this.setState({
        follow: !this.state.follow
      });
    } // method to add a controlled comment in order to test for dupe handling

  }, {
    key: "addCustomComment",
    value: function addCustomComment() {
      var comment = Object(_models_Comment__WEBPACK_IMPORTED_MODULE_8__["createDupeComment"])();
      var dupeCheck = this.handleDupeCheck(comment); // if -1, comment is unique and is added to state

      if (dupeCheck === -1) {
        this.setState({
          comments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.comments), [comment])
        });
      }
    } // method to check if the current comment already exists in the state (returns index or -1)

  }, {
    key: "handleDupeCheck",
    value: function handleDupeCheck(val) {
      var indexOfComment = this.state.comments.findIndex(function (comment) {
        return comment.author === val.author && comment.message === val.message;
      });
      return indexOfComment;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          comments = _this$state.comments,
          follow = _this$state.follow;

      var commentReactWindow = function commentReactWindow(_ref) {
        var index = _ref.index,
            style = _ref.style;
        return __jsx("div", {
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, __jsx(_Comment__WEBPACK_IMPORTED_MODULE_11__["default"], {
          comment: comments[index],
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }));
      };

      return __jsx("div", {
        className: "commentlist-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "follow-button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("button", {
        onClick: this.handleFollow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, follow == true ? "Unfollow" : "Follow")), __jsx("div", {
        className: "addcustom-comment-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("button", {
        onClick: this.addCustomComment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Add Custom Comment")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Comments List Length: ", comments.length), __jsx("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: '1 1 auto',
          height: '50vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, function (_ref2) {
        var height = _ref2.height,
            width = _ref2.width;
        return __jsx(react_window__WEBPACK_IMPORTED_MODULE_9__["FixedSizeList"], {
          height: height,
          width: width,
          itemSize: 125,
          itemCount: comments.length,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, commentReactWindow);
      }))));
    }
  }]);

  return CommentList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ })

})
//# sourceMappingURL=index.js.f6ea276f4de7fbb2c614.hot-update.js.map