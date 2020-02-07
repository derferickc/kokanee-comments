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
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");







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
    }
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
    }
  }, {
    key: "addCustomComment",
    value: function addCustomComment() {
      var comment = Object(_models_Comment__WEBPACK_IMPORTED_MODULE_8__["createDupeComment"])();
      var dupeCheck = this.handleDupeCheck(comment);

      if (dupeCheck === -1) {
        this.setState({
          comments: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.comments), [comment])
        });
      }
    }
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
            lineNumber: 72
          },
          __self: this
        }, __jsx(_Comment__WEBPACK_IMPORTED_MODULE_9__["default"], {
          comment: comments[index],
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }));
      };

      return __jsx("div", {
        className: "comment-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("button", {
        onClick: this.handleFollow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, follow == true ? "Unfollow" : "Follow")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("button", {
        onClick: this.addCustomComment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Add Custom Comment")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Comments array length: ", comments.length), __jsx(react_virtualized__WEBPACK_IMPORTED_MODULE_11__["AutoSizer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, function (_ref2) {
        var height = _ref2.height,
            width = _ref2.width;
        return __jsx(react_window__WEBPACK_IMPORTED_MODULE_10__["FixedSizeList"], {
          height: height,
          width: width,
          itemCount: comments.length,
          itemSize: 120,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, commentReactWindow);
      }));
    }
  }]);

  return CommentList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/dom-helpers/esm/canUseDOM.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/canUseDOM.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollbarSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollbarSize.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollbarSize; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js":
false,

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);








/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ArrowKeyStepper, _React$PureComponent);

  function ArrowKeyStepper() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ArrowKeyStepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = ArrowKeyStepper.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ArrowKeyStepper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrollToColumn: 0,
      scrollToRow: 0
    }, _this._columnStartIndex = 0, _this._columnStopIndex = 0, _this._rowStartIndex = 0, _this._rowStopIndex = 0, _this._onKeyDown = function (event) {
      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          disabled = _this$props.disabled,
          mode = _this$props.mode,
          rowCount = _this$props.rowCount;


      if (disabled) {
        return;
      }

      var _this$_getScrollState = _this._getScrollState(),
          scrollToColumnPrevious = _this$_getScrollState.scrollToColumn,
          scrollToRowPrevious = _this$_getScrollState.scrollToRow;

      var _this$_getScrollState2 = _this._getScrollState(),
          scrollToColumn = _this$_getScrollState2.scrollToColumn,
          scrollToRow = _this$_getScrollState2.scrollToRow;

      // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;
        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;
        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;
        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        _this._updateScrollState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    }, _this._onSectionRendered = function (_ref2) {
      var columnStartIndex = _ref2.columnStartIndex,
          columnStopIndex = _ref2.columnStopIndex,
          rowStartIndex = _ref2.rowStartIndex,
          rowStopIndex = _ref2.rowStopIndex;

      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ArrowKeyStepper, [{
    key: 'setScrollIndexes',
    value: function setScrollIndexes(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;

      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      var _getScrollState2 = this._getScrollState(),
          scrollToColumn = _getScrollState2.scrollToColumn,
          scrollToRow = _getScrollState2.scrollToRow;

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
        'div',
        { className: className, onKeyDown: this._onKeyDown },
        children({
          onSectionRendered: this._onSectionRendered,
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        })
      );
    }
  }, {
    key: '_getScrollState',
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: '_updateScrollState',
    value: function _updateScrollState(_ref4) {
      var scrollToColumn = _ref4.scrollToColumn,
          scrollToRow = _ref4.scrollToRow;
      var _props2 = this.props,
          isControlled = _props2.isControlled,
          onScrollToChange = _props2.onScrollToChange;


      if (typeof onScrollToChange === 'function') {
        onScrollToChange({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }

      if (!isControlled) {
        this.setState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
      }
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isControlled) {
        return null;
      }

      if (nextProps.scrollToColumn !== prevState.scrollToColumn || nextProps.scrollToRow !== prevState.scrollToRow) {
        return {
          scrollToColumn: nextProps.scrollToColumn,
          scrollToRow: nextProps.scrollToRow
        };
      }

      return null;
    }
  }]);

  return ArrowKeyStepper;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

ArrowKeyStepper.defaultProps = {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
};
ArrowKeyStepper.propTypes =  false ? undefined : {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  columnCount: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  isControlled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['cells', 'edges']).isRequired,
  onScrollToChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
  scrollToColumn: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
  scrollToRow: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_6__["polyfill"])(ArrowKeyStepper);

/* harmony default export */ __webpack_exports__["default"] = (ArrowKeyStepper);




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js ***!
  \*************************************************************************/
/*! exports provided: default, ArrowKeyStepper, bpfrpt_proptype_ScrollIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowKeyStepper */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowKeyStepper", function() { return _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_ScrollIndices", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["bpfrpt_proptype_ScrollIndices"]; });









/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js ***!
  \*************************************************************************/
/*! exports provided: bpfrpt_proptype_ScrollIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_ScrollIndices", function() { return bpfrpt_proptype_ScrollIndices; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_ScrollIndices =  false ? undefined : {
  scrollToColumn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  scrollToRow: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor/detectElementResize */ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);









var AutoSizer = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = AutoSizer.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;


      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        var _height = _this._parentNode.offsetHeight || 0;
        var _width = _this._parentNode.offsetWidth || 0;

        var win = _this._window || window;
        var _style = win.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;

        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });

          onResize({ height: _height, width: _width });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  } // uses any instead of Window because Flow doesn't have window type


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;
        this._window = this._autoSizer.parentNode.ownerDocument.defaultView;

        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = Object(_vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_7__["default"])(nonce, this._window);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }

      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */

      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
        'div',
        {
          className: className,
          ref: this._setRef,
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, outerStyle, style) },
        children(childParams)
      );
    }
  }]);

  return AutoSizer;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};
AutoSizer.propTypes =  false ? undefined : {
  /** Function responsible for rendering children.*/
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,


  /** Optional custom CSS class name to attach to root AutoSizer element.  */
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,


  /** Default height to use for initial render; useful for SSR */
  defaultHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,


  /** Default width to use for initial render; useful for SSR */
  defaultWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,


  /** Disable dynamic :height property */
  disableHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,


  /** Disable dynamic :width property */
  disableWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,


  /** Nonce of the inlined stylesheet for Content Security Policy */
  nonce: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,


  /** Callback to be invoked on-resize */
  onResize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,


  /** Optional inline style */
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (AutoSizer);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/AutoSizer/index.js ***!
  \*******************************************************************/
/*! exports provided: default, AutoSizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoSizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AutoSizer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoSizer", function() { return _AutoSizer__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);








/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CellMeasurer, _React$PureComponent);

  function CellMeasurer() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CellMeasurer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = CellMeasurer.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(CellMeasurer)).call.apply(_ref, [this].concat(args))), _this), _this._measure = function () {
      var _this$props = _this.props,
          cache = _this$props.cache,
          _this$props$columnInd = _this$props.columnIndex,
          columnIndex = _this$props$columnInd === undefined ? 0 : _this$props$columnInd,
          parent = _this$props.parent,
          _this$props$rowIndex = _this$props.rowIndex,
          rowIndex = _this$props$rowIndex === undefined ? _this.props.index || 0 : _this$props$rowIndex;

      var _this$_getCellMeasure = _this._getCellMeasurements(),
          height = _this$_getCellMeasure.height,
          width = _this$_getCellMeasure.width;

      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);

        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CellMeasurer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return typeof children === 'function' ? children({ measure: this._measure }) : children;
    }
  }, {
    key: '_getCellMeasurements',
    value: function _getCellMeasurements() {
      var cache = this.props.cache;


      var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(this);

      // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height;

        // If we are re-measuring a cell that has already been measured,
        // It will have a hard-coded width/height from the previous measurement.
        // The fact that we are measuring indicates this measurement is probably stale,
        // So explicitly clear it out (eg set to "auto") so we can recalculate.
        // See issue #593 for more info.
        // Even if we are measuring initially- if we're inside of a MultiGrid component,
        // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
        // eg top/left Grid renders before bottom/right Grid
        // Since the CellMeasurerCache is shared between them this taints derived cell size values.
        if (!cache.hasFixedWidth()) {
          node.style.width = 'auto';
        }
        if (!cache.hasFixedHeight()) {
          node.style.height = 'auto';
        }

        var height = Math.ceil(node.offsetHeight);
        var width = Math.ceil(node.offsetWidth);

        // Reset after measuring to avoid breaking styles; see #660
        if (styleWidth) {
          node.style.width = styleWidth;
        }
        if (styleHeight) {
          node.style.height = styleHeight;
        }

        return { height: height, width: width };
      } else {
        return { height: 0, width: 0 };
      }
    }
  }, {
    key: '_maybeMeasureCell',
    value: function _maybeMeasureCell() {
      var _props = this.props,
          cache = _props.cache,
          _props$columnIndex = _props.columnIndex,
          columnIndex = _props$columnIndex === undefined ? 0 : _props$columnIndex,
          parent = _props.parent,
          _props$rowIndex = _props.rowIndex,
          rowIndex = _props$rowIndex === undefined ? this.props.index || 0 : _props$rowIndex;


      if (!cache.has(rowIndex, columnIndex)) {
        var _getCellMeasurements2 = this._getCellMeasurements(),
            height = _getCellMeasurements2.height,
            width = _getCellMeasurements2.width;

        cache.set(rowIndex, columnIndex, width, height);

        // If size has changed, let Grid know to re-render.
        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);

  return CellMeasurer;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

// Used for DEV mode warning check


CellMeasurer.__internalCellMeasurerFlag = false;
CellMeasurer.propTypes =  false ? undefined : {
  cache: function cache() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellMeasureCache"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellMeasureCache"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellMeasureCache"].isRequired : _types__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellMeasureCache"] : prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellMeasureCache"]).isRequired).apply(this, arguments);
  },
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node]).isRequired,
  columnIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    invalidateCellSizeAfterRender: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    recomputeGridSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
  }).isRequired,
  rowIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (CellMeasurer);
if (true) {
  CellMeasurer.__internalCellMeasurerFlag = true;
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js ***!
  \**********************************************************************************/
/*! exports provided: DEFAULT_HEIGHT, DEFAULT_WIDTH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEIGHT", function() { return DEFAULT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WIDTH", function() { return DEFAULT_WIDTH; });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js");




var DEFAULT_HEIGHT = 30;

var DEFAULT_WIDTH = 100;

// Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache = function () {
  function CellMeasurerCache() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CellMeasurerCache);

    this._cellHeightCache = {};
    this._cellWidthCache = {};
    this._columnWidthCache = {};
    this._rowHeightCache = {};
    this._columnCount = 0;
    this._rowCount = 0;

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      var key = _this._keyMapper(0, index);

      return _this._columnWidthCache.hasOwnProperty(key) ? _this._columnWidthCache[key] : _this._defaultWidth;
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      var key = _this._keyMapper(index, 0);

      return _this._rowHeightCache.hasOwnProperty(key) ? _this._rowHeightCache[key] : _this._defaultHeight;
    };

    var defaultHeight = params.defaultHeight,
        defaultWidth = params.defaultWidth,
        fixedHeight = params.fixedHeight,
        fixedWidth = params.fixedWidth,
        keyMapper = params.keyMapper,
        minHeight = params.minHeight,
        minWidth = params.minWidth;


    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;

    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (true) {
      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
        console.warn("CellMeasurerCache should only measure a cell's width or height. " + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
      }

      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }

      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
      }
    }
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CellMeasurerCache, [{
    key: 'clear',
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache.hasOwnProperty(_key) ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache.hasOwnProperty(_key2) ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache.hasOwnProperty(key);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }
      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      }

      // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: '_updateCachedColumnAndRowSizes',
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;
        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }
        var columnKey = this._keyMapper(0, columnIndex);
        this._columnWidthCache[columnKey] = columnWidth;
      }
      if (!this._hasFixedHeight) {
        var rowHeight = 0;
        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }
        var rowKey = this._keyMapper(rowIndex, 0);
        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._defaultWidth;
    }
  }]);

  return CellMeasurerCache;
}();

/* harmony default export */ __webpack_exports__["default"] = (CellMeasurerCache);


function defaultKeyMapper(rowIndex, columnIndex) {
  return rowIndex + '-' + columnIndex;
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/index.js ***!
  \**********************************************************************/
/*! exports provided: default, CellMeasurer, CellMeasurerCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellMeasurer", function() { return _CellMeasurer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CellMeasurerCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellMeasurerCache */ "./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellMeasurerCache", function() { return _CellMeasurerCache__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_CellMeasurer__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/CellMeasurer/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/CellMeasurer/types.js ***!
  \**********************************************************************/
/*! exports provided: bpfrpt_proptype_CellMeasureCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellMeasureCache", function() { return bpfrpt_proptype_CellMeasureCache; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_CellMeasureCache =  false ? undefined : {
  hasFixedWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  hasFixedHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  has: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  set: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  getWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/Collection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/Collection.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CollectionView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CollectionView */ "./node_modules/react-virtualized/dist/es/Collection/CollectionView.js");
/* harmony import */ var _utils_calculateSizeAndPositionData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/calculateSizeAndPositionData */ "./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js");
/* harmony import */ var _utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getUpdatedOffsetForIndex */ "./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");













/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var Collection = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Collection, _React$PureComponent);

  function Collection(props, context) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Collection);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Collection.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Collection)).call(this, props, context));

    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = [];

    // Cell cache during scroll (for perforamnce)
    _this._cellCache = [];

    _this._isScrollingChange = _this._isScrollingChange.bind(_this);
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Collection, [{
    key: 'forceUpdate',
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }

    /** See Collection#recomputeCellSizesAndPositions */

  }, {
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];
      this._collectionView.recomputeCellSizesAndPositions();
    }

    /** React lifecycle methods */

  }, {
    key: 'render',
    value: function render() {
      var props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(this.props, []);

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_CollectionView__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }

    /** CellLayoutManager interface */

  }, {
    key: 'calculateSizeAndPositionData',
    value: function calculateSizeAndPositionData() {
      var _props = this.props,
          cellCount = _props.cellCount,
          cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter,
          sectionSize = _props.sectionSize;


      var data = Object(_utils_calculateSizeAndPositionData__WEBPACK_IMPORTED_MODULE_10__["default"])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });

      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }

    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: 'getLastRenderedIndices',
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }

    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: 'getScrollPositionForCell',
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
          cellIndex = _ref.cellIndex,
          height = _ref.height,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          width = _ref.width;
      var cellCount = this.props.cellCount;


      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];

        scrollLeft = Object(_utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__["default"])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });

        scrollTop = Object(_utils_getUpdatedOffsetForIndex__WEBPACK_IMPORTED_MODULE_11__["default"])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: 'cellRenderers',
    value: function cellRenderers(_ref2) {
      var _this2 = this;

      var height = _ref2.height,
          isScrolling = _ref2.isScrolling,
          width = _ref2.width,
          x = _ref2.x,
          y = _ref2.y;
      var _props2 = this.props,
          cellGroupRenderer = _props2.cellGroupRenderer,
          cellRenderer = _props2.cellRenderer;

      // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });

      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({ index: index });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: '_isScrollingChange',
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: '_setCollectionViewRef',
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);

  return Collection;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Collection.defaultProps = {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
};
/* harmony default export */ __webpack_exports__["default"] = (Collection);
Collection.propTypes =  true ? {
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Number of cells in Collection.
   */
  cellCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
   * Responsible for rendering a group of cells given their indices.
   * Should implement the following interface: ({
   *   cellSizeAndPositionGetter:Function,
   *   indices: Array<number>,
   *   cellRenderer: Function
   * }): Array<PropTypes.node>
   */
  cellGroupRenderer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
   */
  cellRenderer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Callback responsible for returning size and offset/position information for a given cell (index).
   * ({ index: number }): { height: number, width: number, x: number, y: number }
   */
  cellSizeAndPositionGetter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Optionally override the size of the sections a Collection's cells are split into.
   */
  sectionSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
} : undefined;


function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
      cellRenderer = _ref4.cellRenderer,
      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
      indices = _ref4.indices,
      isScrolling = _ref4.isScrolling;

  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({ index: index });

    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    };

    // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.
    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/CollectionView.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/CollectionView.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");













// @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CollectionView, _React$PureComponent);

  // Invokes callbacks only when their values have changed.
  function CollectionView() {
    var _ref;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CollectionView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // If this component is being rendered server-side, getScrollbarSize() will return undefined.
    // We handle this case in componentDidMount()
    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = CollectionView.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(CollectionView)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    };
    _this._calculateSizeAndPositionDataOnNextUpdate = false;
    _this._onSectionRenderedMemoizer = Object(_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__["default"])();
    _this._onScrollMemoizer = Object(_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_10__["default"])(false);

    _this._invokeOnSectionRenderedHelper = function () {
      var _this$props = _this.props,
          cellLayoutManager = _this$props.cellLayoutManager,
          onSectionRendered = _this$props.onSectionRendered;


      _this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    };

    _this._setScrollingContainerRef = function (ref) {
      _this._scrollingContainer = ref;
    };

    _this._updateScrollPositionForScrollToCell = function () {
      var _this$props2 = _this.props,
          cellLayoutManager = _this$props2.cellLayoutManager,
          height = _this$props2.height,
          scrollToAlignment = _this$props2.scrollToAlignment,
          scrollToCell = _this$props2.scrollToCell,
          width = _this$props2.width;
      var _this$state = _this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;


      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          _this._setScrollPosition(scrollPosition);
        }
      }
    };

    _this._onScroll = function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== _this._scrollingContainer) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      _this._enablePointerEventsAfterDelay();

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
      var _this$props3 = _this.props,
          cellLayoutManager = _this$props3.cellLayoutManager,
          height = _this$props3.height,
          isScrollingChange = _this$props3.isScrollingChange,
          width = _this$props3.width;

      var scrollbarSize = _this._scrollbarSize;

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;

        // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
        if (!_this.state.isScrolling) {
          isScrollingChange(true);
        }

        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      _this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    };

    _this._scrollbarSize = Object(dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__["default"])();
    if (_this._scrollbarSize === undefined) {
      _this._scrollbarSizeMeasured = false;
      _this._scrollbarSize = 0;
    } else {
      _this._scrollbarSizeMeasured = true;
    }
    return _this;
  }

  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CollectionView, [{
    key: 'recomputeCellSizesAndPositions',
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }

    /* ---------------------------- Component lifecycle methods ---------------------------- */

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          cellLayoutManager = _props.cellLayoutManager,
          scrollLeft = _props.scrollLeft,
          scrollToCell = _props.scrollToCell,
          scrollTop = _props.scrollTop;

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = Object(dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_11__["default"])();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      // Update onSectionRendered callback.
      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width;

      // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props2 = this.props,
          height = _props2.height,
          scrollToAlignment = _props2.scrollToAlignment,
          scrollToCell = _props2.scrollToCell,
          width = _props2.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Update scroll offsets if the current :scrollToCell values requires it
      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          autoHeight = _props3.autoHeight,
          cellCount = _props3.cellCount,
          cellLayoutManager = _props3.cellLayoutManager,
          className = _props3.className,
          height = _props3.height,
          horizontalOverscanSize = _props3.horizontalOverscanSize,
          id = _props3.id,
          noContentRenderer = _props3.noContentRenderer,
          style = _props3.style,
          verticalOverscanSize = _props3.verticalOverscanSize,
          width = _props3.width;
      var _state2 = this.state,
          isScrolling = _state2.isScrolling,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;

      // Memoization reset

      if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        this._lastRenderedCellCount = cellCount;
        this._lastRenderedCellLayoutManager = cellLayoutManager;
        this._calculateSizeAndPositionDataOnNextUpdate = false;

        cellLayoutManager.calculateSizeAndPositionData();
      }

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width;

      // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);

      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];

      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      };

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
        'div',
        {
          ref: this._setScrollingContainerRef,
          'aria-label': this.props['aria-label'],
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('ReactVirtualized__Collection', className),
          id: id,
          onScroll: this._onScroll,
          role: 'grid',
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, collectionStyle, style),
          tabIndex: 0 },
        cellCount > 0 && react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
          'div',
          {
            className: 'ReactVirtualized__Collection__innerScrollContainer',
            style: {
              height: totalHeight,
              maxHeight: totalHeight,
              maxWidth: totalWidth,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              width: totalWidth
            } },
          childrenToDisplay
        ),
        cellCount === 0 && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_enablePointerEventsAfterDelay',
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;


        isScrollingChange(false);

        _this2._disablePointerEventsTimeoutId = null;
        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref2) {
      var _this3 = this;

      var scrollLeft = _ref2.scrollLeft,
          scrollTop = _ref2.scrollTop,
          totalHeight = _ref2.totalHeight,
          totalWidth = _ref2.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref3) {
          var scrollLeft = _ref3.scrollLeft,
              scrollTop = _ref3.scrollTop;
          var _props4 = _this3.props,
              height = _props4.height,
              onScroll = _props4.onScroll,
              width = _props4.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref4) {
      var scrollLeft = _ref4.scrollLeft,
          scrollTop = _ref4.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) {
        return {
          scrollLeft: 0,
          scrollTop: 0
        };
      } else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop
        };
      }

      return null;
    }
  }]);

  return CollectionView;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

CollectionView.defaultProps = {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
};
CollectionView.propTypes =  true ? {
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Number of cells in collection.
   */
  cellCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */
  cellLayoutManager: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,

  /**
   * Optional custom CSS class name to attach to root Collection element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
   * Optional custom id to attach to root Collection element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  horizontalOverscanSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  isScrollingChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */
  noContentRenderer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */
  onSectionRendered: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Horizontal offset.
   */
  scrollLeft: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */
  scrollToCell: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
   * Vertical offset.
   */
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,

  /**
   * Optional custom inline style to attach to root Collection element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */
  verticalOverscanSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired
} : undefined;


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__["polyfill"])(CollectionView);

/* harmony default export */ __webpack_exports__["default"] = (CollectionView);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/Section.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/Section.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var Section = function () {
  function Section(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Section);

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    this._indexMap = {};
    this._indices = [];
  }

  /** Add a cell to this section. */


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Section, [{
    key: 'addCellIndex',
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;
        this._indices.push(index);
      }
    }

    /** Get all cell indices that have been added to this section. */

  }, {
    key: 'getCellIndices',
    value: function getCellIndices() {
      return this._indices;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      return this.x + ',' + this.y + ' ' + this.width + 'x' + this.height;
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Section);



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/SectionManager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/SectionManager.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./node_modules/react-virtualized/dist/es/Collection/Section.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Collection/types.js");



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */



var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager = function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SectionManager);

    this._sectionSize = sectionSize;

    this._cellMetadata = [];
    this._sections = {};
  }

  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SectionManager, [{
    key: 'getCellIndices',
    value: function getCellIndices(_ref) {
      var height = _ref.height,
          width = _ref.width,
          x = _ref.x,
          y = _ref.y;

      var indices = {};

      this.getSections({ height: height, width: width, x: x, y: y }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      });

      // Object keys are strings; this function returns numbers
      return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(indices).map(function (index) {
        return indices[index];
      });
    }

    /** Get size and position information for the cell specified. */

  }, {
    key: 'getCellMetadata',
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;

      return this._cellMetadata[index];
    }

    /** Get all Sections overlapping the specified region. */

  }, {
    key: 'getSections',
    value: function getSections(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          x = _ref3.x,
          y = _ref3.y;

      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);

      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = sectionX + '.' + sectionY;

          if (!this._sections[key]) {
            this._sections[key] = new _Section__WEBPACK_IMPORTED_MODULE_3__["default"]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }

    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: 'getTotalSectionCount',
    value: function getTotalSectionCount() {
      return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this._sections).length;
    }

    /** Intended for debugger/test purposes only */

  }, {
    key: 'toString',
    value: function toString() {
      var _this = this;

      return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }

    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: 'registerCell',
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
          index = _ref4.index;

      this._cellMetadata[index] = cellMetadatum;

      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({ index: index });
      });
    }
  }]);

  return SectionManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (SectionManager);



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/index.js ***!
  \********************************************************************/
/*! exports provided: default, Collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection */ "./node_modules/react-virtualized/dist/es/Collection/Collection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _Collection__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Collection__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/types.js ***!
  \********************************************************************/
/*! exports provided: bpfrpt_proptype_Index, bpfrpt_proptype_PositionInfo, bpfrpt_proptype_ScrollPosition, bpfrpt_proptype_SizeAndPositionInfo, bpfrpt_proptype_SizeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_Index", function() { return bpfrpt_proptype_Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_PositionInfo", function() { return bpfrpt_proptype_PositionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_ScrollPosition", function() { return bpfrpt_proptype_ScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_SizeAndPositionInfo", function() { return bpfrpt_proptype_SizeAndPositionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_SizeInfo", function() { return bpfrpt_proptype_SizeInfo; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_Index =  false ? undefined : {
  index: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
var bpfrpt_proptype_PositionInfo =  false ? undefined : {
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
var bpfrpt_proptype_ScrollPosition =  false ? undefined : {
  scrollLeft: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
var bpfrpt_proptype_SizeAndPositionInfo =  false ? undefined : {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
var bpfrpt_proptype_SizeInfo =  false ? undefined : {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};







/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateSizeAndPositionData; });
/* harmony import */ var _SectionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SectionManager */ "./node_modules/react-virtualized/dist/es/Collection/SectionManager.js");


function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
      sectionSize = _ref.sectionSize;

  var cellMetadata = [];
  var sectionManager = new _SectionManager__WEBPACK_IMPORTED_MODULE_0__["default"](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({ index: index });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error('Invalid metadata returned for cell ' + index + ':\n        x:' + cellMetadatum.x + ', y:' + cellMetadatum.y + ', width:' + cellMetadatum.width + ', height:' + cellMetadatum.height);
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);

    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ColumnSizer, _React$PureComponent);

  function ColumnSizer(props, context) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ColumnSizer);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ColumnSizer.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ColumnSizer)).call(this, props, context));

    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ColumnSizer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          columnMaxWidth = _props.columnMaxWidth,
          columnMinWidth = _props.columnMinWidth,
          columnCount = _props.columnCount,
          width = _props.width;


      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          columnMaxWidth = _props2.columnMaxWidth,
          columnMinWidth = _props2.columnMinWidth,
          columnCount = _props2.columnCount,
          width = _props2.width;


      var safeColumnMinWidth = columnMinWidth || 1;

      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;

      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);

      var adjustedWidth = Math.min(width, columnWidth * columnCount);

      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);

  return ColumnSizer;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ColumnSizer);
ColumnSizer.propTypes =  true ? {
  /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,

  /** Optional maximum allowed column width */
  columnMaxWidth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /** Optional minimum allowed column width */
  columnMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /** Number of columns in Grid or Table child */
  columnCount: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,

  /** Width of Grid or Table child */
  width: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
} : undefined;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ColumnSizer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ColumnSizer/index.js ***!
  \*********************************************************************/
/*! exports provided: default, ColumnSizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColumnSizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnSizer */ "./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnSizer", function() { return _ColumnSizer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_ColumnSizer__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/Grid.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/Grid.js ***!
  \*************************************************************/
/*! exports provided: DEFAULT_SCROLLING_RESET_TIME_INTERVAL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLLING_RESET_TIME_INTERVAL", function() { return DEFAULT_SCROLLING_RESET_TIME_INTERVAL; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/calculateSizeAndPositionDataAndUpdateScrollOffset */ "./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js");
/* harmony import */ var _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/ScalingCellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");
/* harmony import */ var _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js");
/* harmony import */ var _utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/updateScrollIndexHelper */ "./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js");
/* harmony import */ var _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./defaultCellRangeRenderer */ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);



















/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Grid);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Grid.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Grid)).call(this, props));

    _this._onGridRenderedMemoizer = Object(_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_11__["default"])();
    _this._onScrollMemoizer = Object(_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_11__["default"])(false);
    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;
    _this._recomputeScrollLeftFlag = false;
    _this._recomputeScrollTopFlag = false;
    _this._horizontalScrollBarSize = 0;
    _this._verticalScrollBarSize = 0;
    _this._scrollbarPresenceChanged = false;
    _this._renderedColumnStartIndex = 0;
    _this._renderedColumnStopIndex = 0;
    _this._renderedRowStartIndex = 0;
    _this._renderedRowStopIndex = 0;
    _this._styleCache = {};
    _this._cellCache = {};

    _this._debounceScrollEndedCallback = function () {
      _this._disablePointerEventsTimeoutId = null;
      // isScrolling is used to determine if we reset styleCache
      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    };

    _this._invokeOnGridRenderedHelper = function () {
      var onSectionRendered = _this.props.onSectionRendered;


      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    };

    _this._setScrollingContainerRef = function (ref) {
      _this._scrollingContainer = ref;
    };

    _this._onScroll = function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    };

    var columnSizeAndPositionManager = new _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_10__["default"]({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_10__["default"]({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });

    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,

        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,

        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"],
      scrollDirectionVertical: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"],
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,

      needToResetStyleCache: false
    };

    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }
    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }
    return _this;
  }

  /**
   * Gets offsets for a given cell and alignment.
   */


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Grid, [{
    key: 'getOffsetForCell',
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === undefined ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }

    /**
     * Gets estimated total rows' height.
     */

  }, {
    key: 'getTotalRowsHeight',
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }

    /**
     * Gets estimated total columns' width.
     */

  }, {
    key: 'getTotalColumnsWidth',
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }

    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: 'handleScrollEvent',
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      var _props = this.props,
          autoHeight = _props.autoHeight,
          autoWidth = _props.autoWidth,
          height = _props.height,
          width = _props.width;
      var instanceProps = this.state.instanceProps;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var _scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"] : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_BACKWARD"] : this.state.scrollDirectionHorizontal;
        var _scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"] : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_BACKWARD"] : this.state.scrollDirectionVertical;

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: _scrollDirectionHorizontal,
          scrollDirectionVertical: _scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        newState.needToResetStyleCache = false;
        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props2 = this.props,
          columnCount = _props2.columnCount,
          rowCount = _props2.rowCount;
      var instanceProps = this.state.instanceProps;

      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === undefined ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === undefined ? 0 : _ref4$rowIndex;

      var _props3 = this.props,
          scrollToColumn = _props3.scrollToColumn,
          scrollToRow = _props3.scrollToRow;
      var instanceProps = this.state.instanceProps;


      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex);

      // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"] ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"] ? rowIndex <= scrollToRow : rowIndex >= scrollToRow);

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._styleCache = {};
      this._cellCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;


      var props = this.props;

      // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.
      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props4 = this.props,
          getScrollbarSize = _props4.getScrollbarSize,
          height = _props4.height,
          scrollLeft = _props4.scrollLeft,
          scrollToColumn = _props4.scrollToColumn,
          scrollTop = _props4.scrollTop,
          scrollToRow = _props4.scrollToRow,
          width = _props4.width;
      var instanceProps = this.state.instanceProps;

      // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.
      this._handleInvalidatedGridSize();

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.
      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, prevState, { needToResetStyleCache: false });
          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      }

      // refs don't work in `react-test-renderer`
      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }
        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      }

      // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.
      var sizeIsBiggerThanZero = height > 0 && width > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props5 = this.props,
          autoHeight = _props5.autoHeight,
          autoWidth = _props5.autoWidth,
          columnCount = _props5.columnCount,
          height = _props5.height,
          rowCount = _props5.rowCount,
          scrollToAlignment = _props5.scrollToAlignment,
          scrollToColumn = _props5.scrollToColumn,
          scrollToRow = _props5.scrollToRow,
          width = _props5.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop,
          instanceProps = _state.instanceProps;
      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.
      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0;

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        Object(_utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_13__["default"])({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        Object(_utils_updateScrollIndexHelper__WEBPACK_IMPORTED_MODULE_13__["default"])({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_17__["cancelAnimationTimeout"])(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          autoContainerWidth = _props6.autoContainerWidth,
          autoHeight = _props6.autoHeight,
          autoWidth = _props6.autoWidth,
          className = _props6.className,
          containerProps = _props6.containerProps,
          containerRole = _props6.containerRole,
          containerStyle = _props6.containerStyle,
          height = _props6.height,
          id = _props6.id,
          noContentRenderer = _props6.noContentRenderer,
          role = _props6.role,
          style = _props6.style,
          tabIndex = _props6.tabIndex,
          width = _props6.width;
      var _state2 = this.state,
          instanceProps = _state2.instanceProps,
          needToResetStyleCache = _state2.needToResetStyleCache;


      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      if (needToResetStyleCache) {
        this._styleCache = {};
      }

      // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset
      if (!this.state.isScrolling) {
        this._resetStyleCache();
      }

      // calculate children to render here
      this._calculateChildrenToRender(this.props, this.state);

      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      }

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          ref: this._setScrollingContainerRef
        }, containerProps, {
          'aria-label': this.props['aria-label'],
          'aria-readonly': this.props['aria-readonly'],
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('ReactVirtualized__Grid', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, gridStyle, style),
          tabIndex: tabIndex }),
        childrenToDisplay.length > 0 && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
          'div',
          {
            className: 'ReactVirtualized__Grid__innerScrollContainer',
            role: containerRole,
            style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
              height: totalRowsHeight,
              maxWidth: totalColumnsWidth,
              maxHeight: totalRowsHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            }, containerStyle) },
          childrenToDisplay
        ),
        showNoContentRenderer && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width,
          isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          instanceProps = state.instanceProps;


      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });

        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        });

        // Store for _invokeOnGridRenderedHelper()
        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex;

        // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          }

          // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).
          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });

        // update the indices
        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._disablePointerEventsTimeoutId) {
        Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_17__["cancelAnimationTimeout"])(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_17__["requestAnimationTimeout"])(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_handleInvalidatedGridSize',


    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
      }
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _props7 = _this3.props,
              height = _props7.height,
              onScroll = _props7.onScroll,
              width = _props7.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_isScrolling',
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: '_maybeCallOnScrollbarPresenceChange',
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var _onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;


        this._scrollbarPresenceChanged = false;

        _onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: 'scrollToPosition',


    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: '_resetStyleCache',
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0;

        // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }

      var instanceProps = prevState.instanceProps;

      // Initially we should not clearStyleCache

      newState.needToResetStyleCache = false;
      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }

      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });

      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });

      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      }

      // If scrolling is controlled outside this component, clear cache when scrolling stops
      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(newState, {
          isScrolling: false
        });
      }

      var maybeStateA = void 0;
      var maybeStateB = void 0;

      Object(_utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_9__["default"])({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      Object(_utils_calculateSizeAndPositionDataAndUpdateScrollOffset__WEBPACK_IMPORTED_MODULE_9__["default"])({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });

      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow;

      // getting scrollBarSize (moved from componentWillMount)
      instanceProps.scrollbarSize = nextProps.getScrollbarSize();
      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;

      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, newState, maybeStateA, maybeStateB);
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: '_getScrollToPositionStateUpdate',


    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
          scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"] : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_BACKWARD"];
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_FORWARD"] : _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["SCROLL_DIRECTION_BACKWARD"];
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }
      return null;
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
          height = nextProps.height,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToColumn = nextProps.scrollToColumn,
          width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
          instanceProps = prevState.instanceProps;


      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;

        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: '_getScrollLeftForScrollToColumnStateUpdate',
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;

      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }
      return null;
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
          rowCount = nextProps.rowCount,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToRow = nextProps.scrollToRow,
          width = nextProps.width;
      var scrollTop = prevState.scrollTop,
          instanceProps = prevState.instanceProps;


      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: '_getScrollTopForScrollToRowStateUpdate',
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;

      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }
      return null;
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Grid.defaultProps = {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_14__["default"],
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_15__["default"],
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_12__["default"],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
};
Grid.propTypes =  false ? undefined : {
  "aria-label": prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.string.isRequired,
  "aria-readonly": prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool,


  /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */
  autoContainerWidth: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool.isRequired,


  /**
   * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool.isRequired,


  /**
   * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool.isRequired,


  /** Responsible for rendering a cell given an row and column index.  */
  cellRenderer: function cellRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRenderer"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRenderer"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRenderer"].isRequired : _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRenderer"] : prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRenderer"]).isRequired).apply(this, arguments);
  },


  /** Responsible for rendering a group of cells given their index ranges.  */
  cellRangeRenderer: function cellRangeRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRangeRenderer"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRangeRenderer"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRangeRenderer"].isRequired : _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRangeRenderer"] : prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellRangeRenderer"]).isRequired).apply(this, arguments);
  },


  /** Optional custom CSS class name to attach to root Grid element.  */
  className: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.string,


  /** Number of columns in grid.  */
  columnCount: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** Either a fixed column width (number) or a function that returns the width of a column given its index.  */
  columnWidth: function columnWidth() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"].isRequired : _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"] : prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"]).isRequired).apply(this, arguments);
  },


  /** Unfiltered props for the Grid container. */
  containerProps: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object,


  /** ARIA role for the cell-container.  */
  containerRole: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.string.isRequired,


  /** Optional inline style applied to inner cell-container */
  containerStyle: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object.isRequired,


  /**
   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
   */
  deferredMeasurementCache: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object,


  /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */
  estimatedColumnSize: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** Exposed for testing purposes only.  */
  getScrollbarSize: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func.isRequired,


  /** Height of Grid; this property determines the number of visible (vs virtualized) rows.  */
  height: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** Optional custom id to attach to root Grid element.  */
  id: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.string,


  /**
   * Override internal is-scrolling state tracking.
   * This property is primarily intended for use with the WindowScroller component.
   */
  isScrolling: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool,


  /**
   * Opt-out of isScrolling param passed to cellRangeRenderer.
   * To avoid the extra render when scroll stops.
   */
  isScrollingOptOut: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool.isRequired,


  /** Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.  */
  noContentRenderer: function noContentRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_NoContentRenderer"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_NoContentRenderer"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_NoContentRenderer"].isRequired : _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_NoContentRenderer"] : prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_NoContentRenderer"]).isRequired).apply(this, arguments);
  },


  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func.isRequired,


  /**
   * Called whenever a horizontal or vertical scrollbar is added or removed.
   * This prop is not intended for end-user use;
   * It is used by MultiGrid to support fixed-row/fixed-column scroll syncing.
   */
  onScrollbarPresenceChange: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func.isRequired,


  /** Callback invoked with information about the section of the Grid that was just rendered.  */
  onSectionRendered: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func.isRequired,


  /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanColumnCount: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   */
  overscanIndicesGetter: function overscanIndicesGetter() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_OverscanIndicesGetter"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_OverscanIndicesGetter"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_OverscanIndicesGetter"].isRequired : _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_OverscanIndicesGetter"] : prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_OverscanIndicesGetter"]).isRequired).apply(this, arguments);
  },


  /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanRowCount: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** ARIA role for the grid element.  */
  role: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.string.isRequired,


  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */
  rowHeight: function rowHeight() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"].isRequired : _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"] : prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_CellSize"]).isRequired).apply(this, arguments);
  },


  /** Number of rows in grid.  */
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
  scrollingResetTimeInterval: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** Horizontal offset. */
  scrollLeft: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number,


  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: function scrollToAlignment() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_Alignment"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_Alignment"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_Alignment"].isRequired : _types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_Alignment"] : prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_18__["bpfrpt_proptype_Alignment"]).isRequired).apply(this, arguments);
  },


  /** Column index to ensure visible (by forcefully scrolling if necessary) */
  scrollToColumn: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** Vertical offset. */
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number,


  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToRow: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired,


  /** Optional inline style */
  style: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object.isRequired,


  /** Tab index for focus */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number,


  /** Width of Grid; this property determines the number of visible (vs virtualized) columns.  */
  width: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.number.isRequired
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_16__["polyfill"])(Grid);
/* harmony default export */ __webpack_exports__["default"] = (Grid);
















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js ***!
  \*******************************************************************************************/
/*! exports provided: SCROLL_DIRECTION_BACKWARD, SCROLL_DIRECTION_FORWARD, SCROLL_DIRECTION_HORIZONTAL, SCROLL_DIRECTION_VERTICAL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_BACKWARD", function() { return SCROLL_DIRECTION_BACKWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_FORWARD", function() { return SCROLL_DIRECTION_FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_HORIZONTAL", function() { return SCROLL_DIRECTION_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_VERTICAL", function() { return SCROLL_DIRECTION_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultOverscanIndicesGetter; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");


var SCROLL_DIRECTION_BACKWARD = -1;

var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultCellRangeRenderer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");


/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */

function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      isScrollingOptOut = _ref.isScrollingOptOut,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;

  var renderedCells = [];

  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();

  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };

          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028
      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (true) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (true) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;

        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js ***!
  \*************************************************************************************/
/*! exports provided: SCROLL_DIRECTION_BACKWARD, SCROLL_DIRECTION_FORWARD, SCROLL_DIRECTION_HORIZONTAL, SCROLL_DIRECTION_VERTICAL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_BACKWARD", function() { return SCROLL_DIRECTION_BACKWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_FORWARD", function() { return SCROLL_DIRECTION_FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_HORIZONTAL", function() { return SCROLL_DIRECTION_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DIRECTION_VERTICAL", function() { return SCROLL_DIRECTION_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultOverscanIndicesGetter; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");


var SCROLL_DIRECTION_BACKWARD = -1;

var SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/index.js ***!
  \**************************************************************/
/*! exports provided: default, Grid, accessibilityOverscanIndicesGetter, defaultCellRangeRenderer, defaultOverscanIndicesGetter, bpfrpt_proptype_NoContentRenderer, bpfrpt_proptype_Alignment, bpfrpt_proptype_CellPosition, bpfrpt_proptype_CellSize, bpfrpt_proptype_OverscanIndicesGetter, bpfrpt_proptype_RenderedSection, bpfrpt_proptype_CellRendererParams, bpfrpt_proptype_Scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/react-virtualized/dist/es/Grid/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _accessibilityOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessibilityOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accessibilityOverscanIndicesGetter", function() { return _accessibilityOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultCellRangeRenderer */ "./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCellRangeRenderer", function() { return _defaultCellRangeRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultOverscanIndicesGetter */ "./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOverscanIndicesGetter", function() { return _defaultOverscanIndicesGetter__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_NoContentRenderer", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_NoContentRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_Alignment", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_Alignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellPosition", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_CellPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellSize", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_CellSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_OverscanIndicesGetter", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_OverscanIndicesGetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_RenderedSection", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_RenderedSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellRendererParams", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_CellRendererParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_Scroll", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["bpfrpt_proptype_Scroll"]; });


























/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/types.js ***!
  \**************************************************************/
/*! exports provided: bpfrpt_proptype_CellPosition, bpfrpt_proptype_CellRendererParams, bpfrpt_proptype_CellRenderer, bpfrpt_proptype_CellCache, bpfrpt_proptype_StyleCache, bpfrpt_proptype_CellRangeRendererParams, bpfrpt_proptype_CellRangeRenderer, bpfrpt_proptype_CellSizeGetter, bpfrpt_proptype_CellSize, bpfrpt_proptype_NoContentRenderer, bpfrpt_proptype_Scroll, bpfrpt_proptype_ScrollbarPresenceChange, bpfrpt_proptype_RenderedSection, bpfrpt_proptype_OverscanIndicesGetterParams, bpfrpt_proptype_OverscanIndices, bpfrpt_proptype_OverscanIndicesGetter, bpfrpt_proptype_Alignment, bpfrpt_proptype_VisibleCellRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellPosition", function() { return bpfrpt_proptype_CellPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellRendererParams", function() { return bpfrpt_proptype_CellRendererParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellRenderer", function() { return bpfrpt_proptype_CellRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellCache", function() { return bpfrpt_proptype_CellCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_StyleCache", function() { return bpfrpt_proptype_StyleCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellRangeRendererParams", function() { return bpfrpt_proptype_CellRangeRendererParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellRangeRenderer", function() { return bpfrpt_proptype_CellRangeRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellSizeGetter", function() { return bpfrpt_proptype_CellSizeGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellSize", function() { return bpfrpt_proptype_CellSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_NoContentRenderer", function() { return bpfrpt_proptype_NoContentRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_Scroll", function() { return bpfrpt_proptype_Scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_ScrollbarPresenceChange", function() { return bpfrpt_proptype_ScrollbarPresenceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_RenderedSection", function() { return bpfrpt_proptype_RenderedSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_OverscanIndicesGetterParams", function() { return bpfrpt_proptype_OverscanIndicesGetterParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_OverscanIndices", function() { return bpfrpt_proptype_OverscanIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_OverscanIndicesGetter", function() { return bpfrpt_proptype_OverscanIndicesGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_Alignment", function() { return bpfrpt_proptype_Alignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_VisibleCellRange", function() { return bpfrpt_proptype_VisibleCellRange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ScalingCellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var bpfrpt_proptype_CellPosition =  false ? undefined : {
  columnIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var bpfrpt_proptype_CellRendererParams =  false ? undefined : {
  columnIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  isScrolling: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  key: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  rowIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
var bpfrpt_proptype_CellRenderer =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func;
var bpfrpt_proptype_CellCache =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired);
var bpfrpt_proptype_StyleCache =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired);
var bpfrpt_proptype_CellRangeRendererParams =  false ? undefined : {
  cellCache: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired).isRequired,
  cellRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  columnSizeAndPositionManager: function columnSizeAndPositionManager() {
    return (typeof _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"] === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(_utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired).apply(this, arguments);
  },
  columnStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  columnStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  deferredMeasurementCache: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  horizontalOffsetAdjustment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  isScrolling: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isScrollingOptOut: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  rowSizeAndPositionManager: function rowSizeAndPositionManager() {
    return (typeof _utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"] === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(_utils_ScalingCellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_1__["default"]).isRequired : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired).apply(this, arguments);
  },
  rowStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  scrollLeft: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  styleCache: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired).isRequired,
  verticalOffsetAdjustment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  visibleColumnIndices: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  visibleRowIndices: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
var bpfrpt_proptype_CellRangeRenderer =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func;
var bpfrpt_proptype_CellSizeGetter =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func;
var bpfrpt_proptype_CellSize =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]);
var bpfrpt_proptype_NoContentRenderer =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func;
var bpfrpt_proptype_Scroll =  false ? undefined : {
  clientHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  clientWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  scrollHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  scrollLeft: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  scrollWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var bpfrpt_proptype_ScrollbarPresenceChange =  false ? undefined : {
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var bpfrpt_proptype_RenderedSection =  false ? undefined : {
  columnOverscanStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  columnOverscanStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  columnStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  columnStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowOverscanStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowOverscanStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var bpfrpt_proptype_OverscanIndicesGetterParams =  false ? undefined : {
  // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
  direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['horizontal', 'vertical']).isRequired,


  // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
  scrollDirection: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([-1, 1]).isRequired,


  // Number of rows or columns in the current axis
  cellCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,


  // Maximum number of cells to over-render in either direction
  overscanCellsCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,


  // Begin of range of visible cells
  startIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,


  // End of range of visible cells
  stopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var bpfrpt_proptype_OverscanIndices =  false ? undefined : {
  overscanStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  overscanStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var bpfrpt_proptype_OverscanIndicesGetter =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func;
var bpfrpt_proptype_Alignment =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['auto', 'end', 'start', 'center']);
var bpfrpt_proptype_VisibleCellRange =  false ? undefined : {
  start: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  stop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};




















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");



/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */

var CellSizeAndPositionManager = function () {

  // Used in deferred mode to track which cells have been queued for measurement.

  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CellSizeAndPositionManager);

    this._cellSizeAndPositionData = {};
    this._lastMeasuredIndex = -1;
    this._lastBatchedIndex = -1;

    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment() {
      return 0;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var _size = this._cellSizeGetter({ index: i });

          // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.
          if (_size === undefined || isNaN(_size)) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          } else if (_size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: 0
            };

            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: _size
            };

            _offset += _size;

            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize,
          offset = params.offset;


      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;

      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;

        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: '_binarySearch',
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var _currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (_currentOffset === offset) {
          return middle;
        } else if (_currentOffset < offset) {
          low = middle + 1;
        } else if (_currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: '_exponentialSearch',
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);

      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (CellSizeAndPositionManager);




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CellSizeAndPositionManager */ "./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js");
/* harmony import */ var _maxElementSize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maxElementSize.js */ "./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");









/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === undefined ? Object(_maxElementSize_js__WEBPACK_IMPORTED_MODULE_4__["getMaxElementSize"])() : _ref$maxScrollSize,
        params = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ['maxScrollSize']);

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager__WEBPACK_IMPORTED_MODULE_3__["default"](params);
    this._maxScrollSize = maxScrollSize;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ScalingCellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (ScalingCellSizeAndPositionManager);




/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateSizeAndPositionDataAndUpdateScrollOffset; });


function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/**
 * Helper method that determines when to recalculate row or column metadata.
 */

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js ***!
  \*****************************************************************************/
/*! exports provided: getMaxElementSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxElementSize", function() { return getMaxElementSize; });
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome;
};

var getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }
  return DEFAULT_MAX_ELEMENT_SIZE;
};

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateScrollIndexHelper; });
/* harmony import */ var _ScalingCellSizeAndPositionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScalingCellSizeAndPositionManager.js */ "./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/react-virtualized/dist/es/Grid/types.js");




/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js ***!
  \*********************************************************************************/
/*! exports provided: default, isRangeVisible, scanForUnloadedRanges, forceUpdateReactVirtualizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRangeVisible", function() { return isRangeVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanForUnloadedRanges", function() { return scanForUnloadedRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceUpdateReactVirtualizedComponent", function() { return forceUpdateReactVirtualizedComponent; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createCallbackMemoizer */ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js");










/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(InfiniteLoader, _React$PureComponent);

  function InfiniteLoader(props, context) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, InfiniteLoader);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (InfiniteLoader.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(InfiniteLoader)).call(this, props, context));

    _this._loadMoreRowsMemoizer = Object(_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_8__["default"])();

    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(InfiniteLoader, [{
    key: 'resetLoadMoreRowsCache',
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = Object(_utils_createCallbackMemoizer__WEBPACK_IMPORTED_MODULE_8__["default"])();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;


      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: '_onRowsRendered',
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;

      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: '_doStuff',
    value: function _doStuff(startIndex, stopIndex) {
      var _ref2,
          _this3 = this;

      var _props = this.props,
          isRowLoaded = _props.isRowLoaded,
          minimumBatchSize = _props.minimumBatchSize,
          rowCount = _props.rowCount,
          threshold = _props.threshold;


      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      });

      // For memoize comparison
      var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(unloadedRanges.map(function (_ref3) {
        var startIndex = _ref3.startIndex,
            stopIndex = _ref3.stopIndex;
        return [startIndex, stopIndex];
      })));

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);

  return InfiniteLoader;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


InfiniteLoader.defaultProps = {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
};
/* harmony default export */ __webpack_exports__["default"] = (InfiniteLoader);
InfiniteLoader.propTypes =  true ? {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired
} : undefined;
function isRangeVisible(_ref4) {
  var lastRenderedStartIndex = _ref4.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref4.lastRenderedStopIndex,
      startIndex = _ref4.startIndex,
      stopIndex = _ref4.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */
function scanForUnloadedRanges(_ref5) {
  var isRowLoaded = _ref5.isRowLoaded,
      minimumBatchSize = _ref5.minimumBatchSize,
      rowCount = _ref5.rowCount,
      startIndex = _ref5.startIndex,
      stopIndex = _ref5.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({ index: index });

    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({ index: _index })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({ index: _index2 })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */
function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js ***!
  \************************************************************************/
/*! exports provided: default, InfiniteLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfiniteLoader */ "./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfiniteLoader", function() { return _InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_InfiniteLoader__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/List.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/List.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/List/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);











/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(List, _React$PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref = List.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(List)).call.apply(_ref, [this].concat(args))), _this), _this._cellRenderer = function (_ref2) {
      var parent = _ref2.parent,
          rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          isScrolling = _ref2.isScrolling,
          isVisible = _ref2.isVisible,
          key = _ref2.key;
      var rowRenderer = _this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    }, _this._setRef = function (ref) {
      _this.Grid = ref;
    }, _this._onScroll = function (_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = _this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }, _this._onSectionRendered = function (_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref5) {
      var alignment = _ref5.alignment,
          index = _ref5.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === undefined ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === undefined ? 0 : _ref7$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])('ReactVirtualized__List', className);

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: _Grid__WEBPACK_IMPORTED_MODULE_7__["accessibilityOverscanIndicesGetter"],
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
List.propTypes =  false ? undefined : {
  "aria-label": prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,


  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool.isRequired,


  /** Optional CSS class name */
  className: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,


  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,


  /** Height constraint for list (determines how many actual rows are rendered) */
  height: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,


  /** Optional renderer to be used in place of rows when rowCount is 0 */
  noRowsRenderer: function noRowsRenderer() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_NoContentRenderer"] === 'function' ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_NoContentRenderer"].isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_NoContentRenderer"].isRequired : _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_NoContentRenderer"] : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape(_Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_NoContentRenderer"]).isRequired).apply(this, arguments);
  },


  /** Callback invoked with information about the slice of rows that were just rendered.  */

  onRowsRendered: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,


  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,


  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: function overscanIndicesGetter() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_OverscanIndicesGetter"] === 'function' ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_OverscanIndicesGetter"].isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_OverscanIndicesGetter"].isRequired : _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_OverscanIndicesGetter"] : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape(_Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_OverscanIndicesGetter"]).isRequired).apply(this, arguments);
  },


  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,


  /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
  rowHeight: function rowHeight() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellSize"] === 'function' ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellSize"].isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellSize"].isRequired : _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellSize"] : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape(_Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_CellSize"]).isRequired).apply(this, arguments);
  },


  /** Responsible for rendering a row given an index; ({ index: number }): node */
  rowRenderer: function rowRenderer() {
    return (typeof _types__WEBPACK_IMPORTED_MODULE_10__["bpfrpt_proptype_RowRenderer"] === 'function' ? _types__WEBPACK_IMPORTED_MODULE_10__["bpfrpt_proptype_RowRenderer"].isRequired ? _types__WEBPACK_IMPORTED_MODULE_10__["bpfrpt_proptype_RowRenderer"].isRequired : _types__WEBPACK_IMPORTED_MODULE_10__["bpfrpt_proptype_RowRenderer"] : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape(_types__WEBPACK_IMPORTED_MODULE_10__["bpfrpt_proptype_RowRenderer"]).isRequired).apply(this, arguments);
  },


  /** Number of rows in list. */
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,


  /** See Grid#scrollToAlignment */
  scrollToAlignment: function scrollToAlignment() {
    return (typeof _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_Alignment"] === 'function' ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_Alignment"].isRequired ? _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_Alignment"].isRequired : _Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_Alignment"] : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape(_Grid__WEBPACK_IMPORTED_MODULE_7__["bpfrpt_proptype_Alignment"]).isRequired).apply(this, arguments);
  },


  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,


  /** Vertical offset. */
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,


  /** Optional inline style */
  style: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,


  /** Tab index for focus */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,


  /** Width of list */
  width: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (List);













/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/index.js ***!
  \**************************************************************/
/*! exports provided: default, List, bpfrpt_proptype_RowRendererParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/react-virtualized/dist/es/List/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/List/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_RowRendererParams", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["bpfrpt_proptype_RowRendererParams"]; });









/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/List/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/List/types.js ***!
  \**************************************************************/
/*! exports provided: bpfrpt_proptype_RowRendererParams, bpfrpt_proptype_RowRenderer, bpfrpt_proptype_RenderedRows, bpfrpt_proptype_Scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_RowRendererParams", function() { return bpfrpt_proptype_RowRendererParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_RowRenderer", function() { return bpfrpt_proptype_RowRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_RenderedRows", function() { return bpfrpt_proptype_RenderedRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_Scroll", function() { return bpfrpt_proptype_Scroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var bpfrpt_proptype_RowRendererParams =  false ? undefined : {
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isScrolling: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
var bpfrpt_proptype_RowRenderer =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func;
var bpfrpt_proptype_RenderedRows =  false ? undefined : {
  overscanStartIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  overscanStopIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  startIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  stopIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
var bpfrpt_proptype_Scroll =  false ? undefined : {
  clientHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  scrollHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};






/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/Masonry.js ***!
  \*******************************************************************/
/*! exports provided: DEFAULT_SCROLLING_RESET_TIME_INTERVAL, default, bpfrpt_proptype_CellMeasurerCache, bpfrpt_proptype_Positioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLLING_RESET_TIME_INTERVAL", function() { return DEFAULT_SCROLLING_RESET_TIME_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellMeasurerCache", function() { return bpfrpt_proptype_CellMeasurerCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_Positioner", function() { return bpfrpt_proptype_Positioner; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _PositionCache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PositionCache */ "./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js");
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);













var emptyObject = {};

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

var Masonry = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Masonry, _React$PureComponent);

  function Masonry() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Masonry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref = Masonry.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Masonry)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isScrolling: false,
      scrollTop: 0
    }, _this._invalidateOnUpdateStartIndex = null, _this._invalidateOnUpdateStopIndex = null, _this._positionCache = new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"](), _this._startIndex = null, _this._startIndexMemoized = null, _this._stopIndex = null, _this._stopIndexMemoized = null, _this._debounceResetIsScrollingCallback = function () {
      _this.setState({
        isScrolling: false
      });
    }, _this._setScrollingContainerRef = function (ref) {
      _this._scrollingContainer = ref;
    }, _this._onScroll = function (event) {
      var height = _this.props.height;


      var eventScrollTop = event.currentTarget.scrollTop;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
      var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height), eventScrollTop);

      // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.
      if (eventScrollTop !== scrollTop) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      _this._debounceResetIsScrolling();

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (_this.state.scrollTop !== scrollTop) {
        _this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Masonry, [{
    key: 'clearCellPositions',
    value: function clearCellPositions() {
      this._positionCache = new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]();
      this.forceUpdate();
    }

    // HACK This method signature was intended for Grid

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref2) {
      var index = _ref2.rowIndex;

      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: 'recomputeCellPositions',
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;

      this._positionCache = new _PositionCache__WEBPACK_IMPORTED_MODULE_10__["default"]();
      this._populatePositionCache(0, stopIndex);

      this.forceUpdate();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();

      if (this.props.scrollTop !== prevProps.scrollTop) {
        this._debounceResetIsScrolling();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__["cancelAnimationTimeout"])(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoHeight = _props.autoHeight,
          cellCount = _props.cellCount,
          cellMeasurerCache = _props.cellMeasurerCache,
          cellRenderer = _props.cellRenderer,
          className = _props.className,
          height = _props.height,
          id = _props.id,
          keyMapper = _props.keyMapper,
          overscanByPixels = _props.overscanByPixels,
          role = _props.role,
          style = _props.style,
          tabIndex = _props.tabIndex,
          width = _props.width,
          rowDirection = _props.rowDirection;
      var _state = this.state,
          isScrolling = _state.isScrolling,
          scrollTop = _state.scrollTop;


      var children = [];

      var estimateTotalHeight = this._getEstimatedTotalHeight();

      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;

      var startIndex = 0;
      var stopIndex = void 0;

      this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function (index, left, top) {
        var _style;

        if (typeof stopIndex === 'undefined') {
          startIndex = index;
          stopIndex = index;
        } else {
          startIndex = Math.min(startIndex, index);
          stopIndex = Math.max(stopIndex, index);
        }

        children.push(cellRenderer({
          index: index,
          isScrolling: isScrolling,
          key: keyMapper(index),
          parent: _this2,
          style: (_style = {
            height: cellMeasurerCache.getHeight(index)
          }, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_style, rowDirection === 'ltr' ? 'left' : 'right', left), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_style, 'position', 'absolute'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_style, 'top', top), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_style, 'width', cellMeasurerCache.getWidth(index)), _style)
        }));
      });

      // We need to measure additional cells for this layout
      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));

        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          stopIndex = _index;

          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      }

      this._startIndex = startIndex;
      this._stopIndex = stopIndex;

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
        'div',
        {
          ref: this._setScrollingContainerRef,
          'aria-label': this.props['aria-label'],
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('ReactVirtualized__Masonry', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            boxSizing: 'border-box',
            direction: 'ltr',
            height: autoHeight ? 'auto' : height,
            overflowX: 'hidden',
            overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
            position: 'relative',
            width: width,
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform'
          }, style),
          tabIndex: tabIndex },
        react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
          'div',
          {
            className: 'ReactVirtualized__Masonry__innerScrollContainer',
            style: {
              width: '100%',
              height: estimateTotalHeight,
              maxWidth: '100%',
              maxHeight: estimateTotalHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            } },
          children
        )
      );
    }
  }, {
    key: '_checkInvalidateOnUpdate',
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var _startIndex = this._invalidateOnUpdateStartIndex;
        var _stopIndex = this._invalidateOnUpdateStopIndex;

        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null;

        // Query external layout logic for position of newly-measured cells
        this._populatePositionCache(_startIndex, _stopIndex);

        this.forceUpdate();
      }
    }
  }, {
    key: '_debounceResetIsScrolling',
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._debounceResetIsScrollingId) {
        Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__["cancelAnimationTimeout"])(this._debounceResetIsScrollingId);
      }

      this._debounceResetIsScrollingId = Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_11__["requestAnimationTimeout"])(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_getEstimatedTotalHeight',
    value: function _getEstimatedTotalHeight() {
      var _props2 = this.props,
          cellCount = _props2.cellCount,
          cellMeasurerCache = _props2.cellMeasurerCache,
          width = _props2.width;


      var estimatedColumnCount = Math.max(1, Math.floor(width / cellMeasurerCache.defaultWidth));

      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: '_invokeOnScrollCallback',
    value: function _invokeOnScrollCallback() {
      var _props3 = this.props,
          height = _props3.height,
          onScroll = _props3.onScroll;
      var scrollTop = this.state.scrollTop;


      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });

        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: '_invokeOnCellsRenderedCallback',
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var _onCellsRendered = this.props.onCellsRendered;


        _onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });

        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: '_populatePositionCache',
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _props4 = this.props,
          cellMeasurerCache = _props4.cellMeasurerCache,
          cellPositioner = _props4.cellPositioner;


      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
            _left = _cellPositioner.left,
            _top = _cellPositioner.top;

        this._positionCache.setPosition(_index2, _left, _top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollTop !== undefined && prevState.scrollTop !== nextProps.scrollTop) {
        return {
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        };
      }

      return null;
    }
  }]);

  return Masonry;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Masonry.defaultProps = {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0,
  rowDirection: 'ltr'
};
Masonry.propTypes =  false ? undefined : {
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool.isRequired,
  cellCount: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  cellMeasurerCache: function cellMeasurerCache() {
    return (typeof CellMeasurerCache === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.instanceOf(CellMeasurerCache).isRequired : prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any.isRequired).apply(this, arguments);
  },
  cellPositioner: function cellPositioner() {
    return (typeof Positioner === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.instanceOf(Positioner).isRequired : prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any.isRequired).apply(this, arguments);
  },
  cellRenderer: function cellRenderer() {
    return (typeof CellRenderer === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.instanceOf(CellRenderer).isRequired : prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any.isRequired).apply(this, arguments);
  },
  className: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  keyMapper: function keyMapper() {
    return (typeof KeyMapper === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.instanceOf(KeyMapper).isRequired : prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any.isRequired).apply(this, arguments);
  },
  onCellsRendered: function onCellsRendered() {
    return (typeof OnCellsRenderedCallback === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.instanceOf(OnCellsRenderedCallback) : prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any).apply(this, arguments);
  },
  onScroll: function onScroll() {
    return (typeof OnScrollCallback === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.instanceOf(OnScrollCallback) : prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.any).apply(this, arguments);
  },
  overscanByPixels: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired,
  scrollingResetTimeInterval: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  style: function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error('Prop `' + propName + '` has type \'any\' or \'mixed\', but was not provided to `' + componentName + '`. Pass undefined or any other value.');
    }
  },
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  rowDirection: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired
};


function identity(value) {
  return value;
}

function noop() {}

var bpfrpt_proptype_CellMeasurerCache =  false ? undefined : {
  defaultHeight: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  defaultWidth: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  getHeight: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  getWidth: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__["polyfill"])(Masonry);

/* harmony default export */ __webpack_exports__["default"] = (Masonry);

var bpfrpt_proptype_Positioner =  false ? undefined : prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func;





/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_intervalTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendor/intervalTree */ "./node_modules/react-virtualized/dist/es/vendor/intervalTree.js");





// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache = function () {
  function PositionCache() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PositionCache);

    this._columnSizeMap = {};
    this._intervalTree = Object(_vendor_intervalTree__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this._leftMap = {};
  }
  // Tracks the height of each column


  // Store tops and bottoms of each cell for fast intersection lookup.


  // Maps cell index to x coordinates for quick lookup.


  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PositionCache, [{
    key: 'estimateTotalHeight',
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    }

    // Render all cells visible within the viewport range defined.

  }, {
    key: 'range',
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;

      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 3),
            top = _ref2[0],
            _ = _ref2[1],
            index = _ref2[2];

        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: 'setPosition',
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);
      this._leftMap[index] = left;

      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];
      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: 'count',
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: 'shortestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }

      return size;
    }
  }, {
    key: 'tallestColumnSize',
    get: function get() {
      var columnSizeMap = this._columnSizeMap;

      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }

      return size;
    }
  }]);

  return PositionCache;
}();

/* harmony default export */ __webpack_exports__["default"] = (PositionCache);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCellPositioner; });
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js");


function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
      columnCount = _ref.columnCount,
      columnWidth = _ref.columnWidth,
      _ref$spacer = _ref.spacer,
      spacer = _ref$spacer === undefined ? 0 : _ref$spacer;

  var columnHeights = void 0;

  initOrResetDerivedValues();

  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;
    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }

    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;

    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;

    return {
      left: left,
      top: top
    };
  }

  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];
    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }

  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;

    initOrResetDerivedValues();
  }

  cellPositioner.reset = reset;

  return cellPositioner;
}



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Masonry/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Masonry/index.js ***!
  \*****************************************************************/
/*! exports provided: default, createCellPositioner, Masonry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCellPositioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCellPositioner */ "./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCellPositioner", function() { return _createCellPositioner__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/Masonry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Masonry", function() { return _Masonry__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_Masonry__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");




/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator = function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CellMeasurerCacheDecorator);

    this.columnWidth = function (_ref) {
      var index = _ref.index;

      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    };

    this.rowHeight = function (_ref2) {
      var index = _ref2.index;

      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    };

    var cellMeasurerCache = params.cellMeasurerCache,
        _params$columnIndexOf = params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === undefined ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === undefined ? 0 : _params$rowIndexOffse;


    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CellMeasurerCacheDecorator, [{
    key: 'clear',
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'clearAll',
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: 'hasFixedHeight',
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: 'hasFixedWidth',
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: 'getHeight',
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'getWidth',
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'has',
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: 'set',
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: 'defaultHeight',
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: 'defaultWidth',
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);

  return CellMeasurerCacheDecorator;
}();

/* harmony default export */ __webpack_exports__["default"] = (CellMeasurerCacheDecorator);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CellMeasurerCacheDecorator */ "./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");













var SCROLLBAR_SIZE_BUFFER = 20;

/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(MultiGrid, _React$PureComponent);

  function MultiGrid(props, context) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, MultiGrid);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (MultiGrid.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(MultiGrid)).call(this, props, context));

    _initialiseProps.call(_this);

    var deferredMeasurementCache = props.deferredMeasurementCache,
        fixedColumnCount = props.fixedColumnCount,
        fixedRowCount = props.fixedRowCount;


    _this._maybeCalculateCachedStyles(true);

    if (deferredMeasurementCache) {
      _this._deferredMeasurementCacheBottomLeftGrid = fixedRowCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_10__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: 0,
        rowIndexOffset: fixedRowCount
      }) : deferredMeasurementCache;

      _this._deferredMeasurementCacheBottomRightGrid = fixedColumnCount > 0 || fixedRowCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_10__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: fixedColumnCount,
        rowIndexOffset: fixedRowCount
      }) : deferredMeasurementCache;

      _this._deferredMeasurementCacheTopRightGrid = fixedColumnCount > 0 ? new _CellMeasurerCacheDecorator__WEBPACK_IMPORTED_MODULE_10__["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: fixedColumnCount,
        rowIndexOffset: 0
      }) : deferredMeasurementCache;
    }
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(MultiGrid, [{
    key: 'forceUpdateGrids',
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }

    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$columnIndex = _ref2.columnIndex,
          columnIndex = _ref2$columnIndex === undefined ? 0 : _ref2$columnIndex,
          _ref2$rowIndex = _ref2.rowIndex,
          rowIndex = _ref2$rowIndex === undefined ? 0 : _ref2$rowIndex;

      var _props = this.props,
          fixedColumnCount = _props.fixedColumnCount,
          fixedRowCount = _props.fixedRowCount;


      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);

      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });

      this._leftGridWidth = null;
      this._topGridHeight = null;
      this._maybeCalculateCachedStyles(true);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          scrollLeft = _props2.scrollLeft,
          scrollTop = _props2.scrollTop;


      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          onScroll = _props3.onScroll,
          onSectionRendered = _props3.onSectionRendered,
          onScrollbarPresenceChange = _props3.onScrollbarPresenceChange,
          scrollLeftProp = _props3.scrollLeft,
          scrollToColumn = _props3.scrollToColumn,
          scrollTopProp = _props3.scrollTop,
          scrollToRow = _props3.scrollToRow,
          rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props3, ['onScroll', 'onSectionRendered', 'onScrollbarPresenceChange', 'scrollLeft', 'scrollToColumn', 'scrollTop', 'scrollToRow']);

      this._prepareForRender();

      // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.
      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      }

      // scrollTop and scrollLeft props are explicitly filtered out and ignored

      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop;


      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
        'div',
        { style: this._containerOuterStyle },
        react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
          'div',
          { style: this._containerTopStyle },
          this._renderTopLeftGrid(rest),
          this._renderTopRightGrid(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
            onScroll: onScroll,
            scrollLeft: scrollLeft
          }))
        ),
        react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
          'div',
          { style: this._containerBottomStyle },
          this._renderBottomLeftGrid(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
            onScroll: onScroll,
            scrollTop: scrollTop
          })),
          this._renderBottomRightGrid(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
            onScroll: onScroll,
            onSectionRendered: onSectionRendered,
            scrollLeft: scrollLeft,
            scrollToColumn: scrollToColumn,
            scrollToRow: scrollToRow,
            scrollTop: scrollTop
          }))
        )
      );
    }
  }, {
    key: '_getBottomGridHeight',
    value: function _getBottomGridHeight(props) {
      var height = props.height;


      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: '_getLeftGridWidth',
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;


      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({ index: index });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: '_getRightGridWidth',
    value: function _getRightGridWidth(props) {
      var width = props.width;


      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: '_getTopGridHeight',
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;


      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({ index: index });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }

    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: '_maybeCalculateCachedStyles',
    value: function _maybeCalculateCachedStyles(resetAll) {
      var _props4 = this.props,
          columnWidth = _props4.columnWidth,
          enableFixedColumnScroll = _props4.enableFixedColumnScroll,
          enableFixedRowScroll = _props4.enableFixedRowScroll,
          height = _props4.height,
          fixedColumnCount = _props4.fixedColumnCount,
          fixedRowCount = _props4.fixedRowCount,
          rowHeight = _props4.rowHeight,
          style = _props4.style,
          styleBottomLeftGrid = _props4.styleBottomLeftGrid,
          styleBottomRightGrid = _props4.styleBottomRightGrid,
          styleTopLeftGrid = _props4.styleTopLeftGrid,
          styleTopRightGrid = _props4.styleTopRightGrid,
          width = _props4.width;


      var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
      var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
      var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;

      if (resetAll || sizeChange || style !== this._lastRenderedStyle) {
        this._containerOuterStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          height: height,
          overflow: 'visible', // Let :focus outline show through
          width: width
        }, style);
      }

      if (resetAll || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(this.props),
          position: 'relative',
          width: width
        };

        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(this.props),
          overflow: 'visible', // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) {
        this._bottomLeftGridStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) {
        this._bottomRightGridStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          left: this._getLeftGridWidth(this.props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
        this._topLeftGridStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) {
        this._topRightGridStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          left: this._getLeftGridWidth(this.props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }

      this._lastRenderedColumnWidth = columnWidth;
      this._lastRenderedFixedColumnCount = fixedColumnCount;
      this._lastRenderedFixedRowCount = fixedRowCount;
      this._lastRenderedHeight = height;
      this._lastRenderedRowHeight = rowHeight;
      this._lastRenderedStyle = style;
      this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
      this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
      this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
      this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
      this._lastRenderedWidth = width;
    }
  }, {
    key: '_prepareForRender',
    value: function _prepareForRender() {
      if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) {
        this._topGridHeight = null;
      }

      this._maybeCalculateCachedStyles();

      this._lastRenderedColumnWidth = this.props.columnWidth;
      this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
      this._lastRenderedFixedRowCount = this.props.fixedRowCount;
      this._lastRenderedRowHeight = this.props.rowHeight;
    }
  }, {
    key: '_renderBottomLeftGrid',
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;


      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0,
          height = this._getBottomGridHeight(props),
          width = this._getLeftGridWidth(props),
          scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0,
          gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;

      var bottomLeftGrid = react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: height,
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: gridWidth
      }));

      if (hideBottomLeftGridScrollbar) {
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
          'div',
          {
            className: 'BottomLeftGrid_ScrollWrapper',
            style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this._bottomLeftGridStyle, {
              height: height,
              width: width,
              overflowY: 'hidden'
            }) },
          bottomLeftGrid
        );
      }
      return bottomLeftGrid;
    }
  }, {
    key: '_renderBottomRightGrid',
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;


      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopLeftGrid',
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;


      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: '_renderTopRightGrid',
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft,
          hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
      var _state2 = this.state,
          showHorizontalScrollbar = _state2.showHorizontalScrollbar,
          scrollbarSize = _state2.scrollbarSize;


      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0,
          height = this._getTopGridHeight(props),
          width = this._getRightGridWidth(props),
          additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;

      var gridHeight = height,
          style = this._topRightGridStyle;

      if (hideTopRightGridScrollbar) {
        gridHeight = height + additionalHeight;
        style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this._topRightGridStyle, {
          left: 0
        });
      }

      var topRightGrid = react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: gridHeight,
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: style,
        tabIndex: null,
        width: width
      }));

      if (hideTopRightGridScrollbar) {
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](
          'div',
          {
            className: 'TopRightGrid_ScrollWrapper',
            style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this._topRightGridStyle, {
              height: height,
              width: width,
              overflowX: 'hidden'
            }) },
          topRightGrid
        );
      }
      return topRightGrid;
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
        };
      }

      return null;
    }
  }]);

  return MultiGrid;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

MultiGrid.defaultProps = {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    scrollLeft: 0,
    scrollTop: 0,
    scrollbarSize: 0,
    showHorizontalScrollbar: false,
    showVerticalScrollbar: false
  };
  this._deferredInvalidateColumnIndex = null;
  this._deferredInvalidateRowIndex = null;

  this._bottomLeftGridRef = function (ref) {
    _this2._bottomLeftGrid = ref;
  };

  this._bottomRightGridRef = function (ref) {
    _this2._bottomRightGrid = ref;
  };

  this._cellRendererBottomLeftGrid = function (_ref3) {
    var rowIndex = _ref3.rowIndex,
        rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ['rowIndex']);

    var _props5 = _this2.props,
        cellRenderer = _props5.cellRenderer,
        fixedRowCount = _props5.fixedRowCount,
        rowCount = _props5.rowCount;


    if (rowIndex === rowCount - fixedRowCount) {
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]('div', {
        key: rest.key,
        style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest.style, {
          height: SCROLLBAR_SIZE_BUFFER
        })
      });
    } else {
      return cellRenderer(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
        parent: _this2,
        rowIndex: rowIndex + fixedRowCount
      }));
    }
  };

  this._cellRendererBottomRightGrid = function (_ref4) {
    var columnIndex = _ref4.columnIndex,
        rowIndex = _ref4.rowIndex,
        rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, ['columnIndex', 'rowIndex']);

    var _props6 = _this2.props,
        cellRenderer = _props6.cellRenderer,
        fixedColumnCount = _props6.fixedColumnCount,
        fixedRowCount = _props6.fixedRowCount;


    return cellRenderer(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
      columnIndex: columnIndex + fixedColumnCount,
      parent: _this2,
      rowIndex: rowIndex + fixedRowCount
    }));
  };

  this._cellRendererTopRightGrid = function (_ref5) {
    var columnIndex = _ref5.columnIndex,
        rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, ['columnIndex']);

    var _props7 = _this2.props,
        cellRenderer = _props7.cellRenderer,
        columnCount = _props7.columnCount,
        fixedColumnCount = _props7.fixedColumnCount;


    if (columnIndex === columnCount - fixedColumnCount) {
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]('div', {
        key: rest.key,
        style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest.style, {
          width: SCROLLBAR_SIZE_BUFFER
        })
      });
    } else {
      return cellRenderer(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: _this2
      }));
    }
  };

  this._columnWidthRightGrid = function (_ref6) {
    var index = _ref6.index;
    var _props8 = _this2.props,
        columnCount = _props8.columnCount,
        fixedColumnCount = _props8.fixedColumnCount,
        columnWidth = _props8.columnWidth;
    var _state3 = _this2.state,
        scrollbarSize = _state3.scrollbarSize,
        showHorizontalScrollbar = _state3.showHorizontalScrollbar;

    // An extra cell is added to the count
    // This gives the smaller Grid extra room for offset,
    // In case the main (bottom right) Grid has a scrollbar
    // If no scrollbar, the extra space is overflow:hidden anyway

    if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
      return scrollbarSize;
    }

    return typeof columnWidth === 'function' ? columnWidth({ index: index + fixedColumnCount }) : columnWidth;
  };

  this._onScroll = function (scrollInfo) {
    var scrollLeft = scrollInfo.scrollLeft,
        scrollTop = scrollInfo.scrollTop;

    _this2.setState({
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    });
    var onScroll = _this2.props.onScroll;
    if (onScroll) {
      onScroll(scrollInfo);
    }
  };

  this._onScrollbarPresenceChange = function (_ref7) {
    var horizontal = _ref7.horizontal,
        size = _ref7.size,
        vertical = _ref7.vertical;
    var _state4 = _this2.state,
        showHorizontalScrollbar = _state4.showHorizontalScrollbar,
        showVerticalScrollbar = _state4.showVerticalScrollbar;


    if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
      _this2.setState({
        scrollbarSize: size,
        showHorizontalScrollbar: horizontal,
        showVerticalScrollbar: vertical
      });

      var onScrollbarPresenceChange = _this2.props.onScrollbarPresenceChange;

      if (typeof onScrollbarPresenceChange === 'function') {
        onScrollbarPresenceChange({
          horizontal: horizontal,
          size: size,
          vertical: vertical
        });
      }
    }
  };

  this._onScrollLeft = function (scrollInfo) {
    var scrollLeft = scrollInfo.scrollLeft;

    _this2._onScroll({
      scrollLeft: scrollLeft,
      scrollTop: _this2.state.scrollTop
    });
  };

  this._onScrollTop = function (scrollInfo) {
    var scrollTop = scrollInfo.scrollTop;

    _this2._onScroll({
      scrollTop: scrollTop,
      scrollLeft: _this2.state.scrollLeft
    });
  };

  this._rowHeightBottomGrid = function (_ref8) {
    var index = _ref8.index;
    var _props9 = _this2.props,
        fixedRowCount = _props9.fixedRowCount,
        rowCount = _props9.rowCount,
        rowHeight = _props9.rowHeight;
    var _state5 = _this2.state,
        scrollbarSize = _state5.scrollbarSize,
        showVerticalScrollbar = _state5.showVerticalScrollbar;

    // An extra cell is added to the count
    // This gives the smaller Grid extra room for offset,
    // In case the main (bottom right) Grid has a scrollbar
    // If no scrollbar, the extra space is overflow:hidden anyway

    if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
      return scrollbarSize;
    }

    return typeof rowHeight === 'function' ? rowHeight({ index: index + fixedRowCount }) : rowHeight;
  };

  this._topLeftGridRef = function (ref) {
    _this2._topLeftGrid = ref;
  };

  this._topRightGridRef = function (ref) {
    _this2._topRightGrid = ref;
  };
};

MultiGrid.propTypes =  true ? {
  classNameBottomLeftGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  classNameBottomRightGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  classNameTopLeftGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  classNameTopRightGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  enableFixedColumnScroll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  enableFixedRowScroll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  fixedColumnCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,
  fixedRowCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,
  onScrollbarPresenceChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  styleBottomLeftGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  styleBottomRightGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  styleTopLeftGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  styleTopRightGrid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  hideTopRightGridScrollbar: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  hideBottomLeftGridScrollbar: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
} : undefined;


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__["polyfill"])(MultiGrid);

/* harmony default export */ __webpack_exports__["default"] = (MultiGrid);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/MultiGrid/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/MultiGrid/index.js ***!
  \*******************************************************************/
/*! exports provided: default, MultiGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiGrid */ "./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiGrid", function() { return _MultiGrid__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_MultiGrid__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ScrollSync, _React$PureComponent);

  function ScrollSync(props, context) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ScrollSync);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ScrollSync.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ScrollSync)).call(this, props, context));

    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };

    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ScrollSync, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          clientHeight = _state.clientHeight,
          clientWidth = _state.clientWidth,
          scrollHeight = _state.scrollHeight,
          scrollLeft = _state.scrollLeft,
          scrollTop = _state.scrollTop,
          scrollWidth = _state.scrollWidth;


      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;

      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);

  return ScrollSync;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ScrollSync);
ScrollSync.propTypes =  true ? {
  /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
} : undefined;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/ScrollSync/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/ScrollSync/index.js ***!
  \********************************************************************/
/*! exports provided: default, ScrollSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollSync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollSync */ "./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollSync", function() { return _ScrollSync__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_ScrollSync__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/Column.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/Column.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultHeaderRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js");
/* harmony import */ var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultCellRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js");
/* harmony import */ var _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaultCellDataGetter */ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");











/**
 * Describes the header and cell contents of a table column.
 */

var Column = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Column, _React$Component);

  function Column() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Column);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Column.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Column)).apply(this, arguments));
  }

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Column.defaultProps = {
  cellDataGetter: _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_8__["default"],
  cellRenderer: _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_7__["default"],
  defaultSortDirection: _SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_6__["default"],
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Column);
Column.propTypes =  true ? {
  /** Optional aria-label value to set on the column header */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */
  cellDataGetter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */
  cellRenderer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /** Optional CSS class to apply to cell */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** Optional additional data passed to this column's :cellDataGetter */
  columnData: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /** Uniquely identifies the row-data attribute corresponding to this cell */
  dataKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,

  /** Optional direction to be used when clicked the first time */
  defaultSortDirection: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_9__["default"].DESC]),

  /** If sort is enabled for the table at large, disable it for this column */
  disableSort: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /** Flex grow style; defaults to 0 */
  flexGrow: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /** Flex shrink style; defaults to 1 */
  flexShrink: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /** Optional CSS class to apply to this column's header */
  headerClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
   */
  headerRenderer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,

  /** Optional inline style to apply to this column's header */
  headerStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /** Optional id to set on the column header */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** Header label for this column */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /** Minimum width of column. */
  minWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /** Optional inline style to apply to cell */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
} : undefined;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/SortDirection.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};

/* harmony default export */ __webpack_exports__["default"] = (SortDirection);

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/SortIndicator.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortIndicator; });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");





/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;

  var classNames = Object(clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_3__["default"].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_3__["default"].DESC
  });

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
    'svg',
    { className: classNames, width: 18, height: 18, viewBox: '0 0 24 24' },
    sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_3__["default"].ASC ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"]('path', { d: 'M7 14l5-5 5 5z' }) : react__WEBPACK_IMPORTED_MODULE_2__["createElement"]('path', { d: 'M7 10l5 5 5-5z' }),
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  );
}

SortIndicator.propTypes =  true ? {
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_3__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_3__["default"].DESC])
} : undefined;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/Table.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/Table.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Column */ "./node_modules/react-virtualized/dist/es/Table/Column.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony import */ var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js");
/* harmony import */ var _defaultHeaderRowRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defaultHeaderRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js");
/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");




















/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Table, _React$PureComponent);

  function Table(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Table);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Table.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Table)).call(this, props));

    _this.state = {
      scrollbarWidth: 0
    };

    _this._createColumn = _this._createColumn.bind(_this);
    _this._createRow = _this._createRow.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Table, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            scrollTop = _Grid$getOffsetForCel.scrollTop;

        return scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === undefined ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === undefined ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'getScrollbarWidth',
    value: function getScrollbarWidth() {
      if (this.Grid) {
        var _Grid = Object(react_dom__WEBPACK_IMPORTED_MODULE_10__["findDOMNode"])(this.Grid);
        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        return offsetWidth - clientWidth;
      }

      return 0;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeader = _props.disableHeader,
          gridClassName = _props.gridClassName,
          gridStyle = _props.gridStyle,
          headerHeight = _props.headerHeight,
          headerRowRenderer = _props.headerRowRenderer,
          height = _props.height,
          id = _props.id,
          noRowsRenderer = _props.noRowsRenderer,
          rowClassName = _props.rowClassName,
          rowStyle = _props.rowStyle,
          scrollToIndex = _props.scrollToIndex,
          style = _props.style,
          width = _props.width;
      var scrollbarWidth = this.state.scrollbarWidth;


      var availableRowsHeight = disableHeader ? height : height - headerHeight;

      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: -1 }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: -1 }) : rowStyle;

      // Precompute and cache column styles before rendering rows and columns to speed things up
      this._cachedColumnStyles = [];
      react__WEBPACK_IMPORTED_MODULE_9__["Children"].toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          overflow: 'hidden'
        }, flexStyles);
      });

      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
        'div',
        {
          'aria-label': this.props['aria-label'],
          'aria-labelledby': this.props['aria-labelledby'],
          'aria-colcount': react__WEBPACK_IMPORTED_MODULE_9__["Children"].toArray(children).length,
          'aria-rowcount': this.props.rowCount,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('ReactVirtualized__Table', className),
          id: id,
          role: 'grid',
          style: style },
        !disableHeader && headerRowRenderer({
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('ReactVirtualized__Table__headerRow', rowClass),
          columns: this._getHeaderColumns(),
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            height: headerHeight,
            overflow: 'hidden',
            paddingRight: scrollbarWidth,
            width: width
          }, rowStyleObject)
        }),
        react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
          'aria-readonly': null,
          autoContainerWidth: true,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('ReactVirtualized__Table__Grid', gridClassName),
          cellRenderer: this._createRow,
          columnWidth: width,
          columnCount: 1,
          height: availableRowsHeight,
          id: undefined,
          noContentRenderer: noRowsRenderer,
          onScroll: this._onScroll,
          onSectionRendered: this._onSectionRendered,
          ref: this._setRef,
          role: 'rowgroup',
          scrollbarWidth: scrollbarWidth,
          scrollToRow: scrollToIndex,
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, gridStyle, {
            overflowX: 'hidden'
          })
        }))
      );
    }
  }, {
    key: '_createColumn',
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
          columnIndex = _ref4.columnIndex,
          isScrolling = _ref4.isScrolling,
          parent = _ref4.parent,
          rowData = _ref4.rowData,
          rowIndex = _ref4.rowIndex;
      var onColumnClick = this.props.onColumnClick;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;


      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });

      var onClick = function onClick(event) {
        onColumnClick && onColumnClick({ columnData: columnData, dataKey: dataKey, event: event });
      };

      var style = this._cachedColumnStyles[columnIndex];

      var title = typeof renderedCell === 'string' ? renderedCell : null;

      // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942
      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
        'div',
        {
          'aria-colindex': columnIndex + 1,
          'aria-describedby': id,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('ReactVirtualized__Table__rowColumn', className),
          key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
          onClick: onClick,
          role: 'gridcell',
          style: style,
          title: title },
        renderedCell
      );
    }
  }, {
    key: '_createHeader',
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
          index = _ref5.index;
      var _props2 = this.props,
          headerClassName = _props2.headerClassName,
          headerStyle = _props2.headerStyle,
          onHeaderClick = _props2.onHeaderClick,
          sort = _props2.sort,
          sortBy = _props2.sortBy,
          sortDirection = _props2.sortDirection;
      var _column$props2 = column.props,
          columnData = _column$props2.columnData,
          dataKey = _column$props2.dataKey,
          defaultSortDirection = _column$props2.defaultSortDirection,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label;

      var sortEnabled = !disableSort && sort;

      var classNames = Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, headerStyle, column.props.headerStyle));

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });

      var headerOnClick = void 0,
          headerOnKeyDown = void 0,
          headerTabIndex = void 0,
          headerAriaSort = void 0,
          headerAriaLabel = void 0;

      if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        var isFirstTimeSort = sortBy !== dataKey;

        // If this is the firstTime sort of this column, use the column default sort order.
        // Otherwise, invert the direction of the sort.
        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_14__["default"].DESC ? _SortDirection__WEBPACK_IMPORTED_MODULE_14__["default"].ASC : _SortDirection__WEBPACK_IMPORTED_MODULE_14__["default"].DESC;

        var onClick = function onClick(event) {
          sortEnabled && sort({
            defaultSortDirection: defaultSortDirection,
            event: event,
            sortBy: dataKey,
            sortDirection: newSortDirection
          });
          onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey, event: event });
        };

        var onKeyDown = function onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick(event);
          }
        };

        headerAriaLabel = column.props['aria-label'] || label || dataKey;
        headerAriaSort = 'none';
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }

      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === _SortDirection__WEBPACK_IMPORTED_MODULE_14__["default"].ASC ? 'ascending' : 'descending';
      }

      // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942
      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](
        'div',
        {
          'aria-label': headerAriaLabel,
          'aria-sort': headerAriaSort,
          className: classNames,
          id: id,
          key: 'Header-Col' + index,
          onClick: headerOnClick,
          onKeyDown: headerOnKeyDown,
          role: 'columnheader',
          style: style,
          tabIndex: headerTabIndex },
        renderedHeader
      );
    }
  }, {
    key: '_createRow',
    value: function _createRow(_ref6) {
      var _this3 = this;

      var index = _ref6.rowIndex,
          isScrolling = _ref6.isScrolling,
          key = _ref6.key,
          parent = _ref6.parent,
          style = _ref6.style;
      var _props3 = this.props,
          children = _props3.children,
          onRowClick = _props3.onRowClick,
          onRowDoubleClick = _props3.onRowDoubleClick,
          onRowRightClick = _props3.onRowRightClick,
          onRowMouseOver = _props3.onRowMouseOver,
          onRowMouseOut = _props3.onRowMouseOut,
          rowClassName = _props3.rowClassName,
          rowGetter = _props3.rowGetter,
          rowRenderer = _props3.rowRenderer,
          rowStyle = _props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;


      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: index }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: index }) : rowStyle;
      var rowData = rowGetter({ index: index });

      var columns = react__WEBPACK_IMPORTED_MODULE_9__["Children"].toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });

      var className = Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('ReactVirtualized__Table__row', rowClass);
      var flattenedStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      }, rowStyleObject);

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }

    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: '_getFlexStyleForColumn',
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';

      var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: '_getHeaderColumns',
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _props4 = this.props,
          children = _props4.children,
          disableHeader = _props4.disableHeader;

      var items = disableHeader ? [] : react__WEBPACK_IMPORTED_MODULE_9__["Children"].toArray(children);

      return items.map(function (column, index) {
        return _this4._createHeader({ column: column, index: index });
      });
    }
  }, {
    key: '_getRowHeight',
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;


      return typeof rowHeight === 'function' ? rowHeight({ index: rowIndex }) : rowHeight;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
          scrollHeight = _ref7.scrollHeight,
          scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
          rowStartIndex = _ref8.rowStartIndex,
          rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: '_setRef',
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: '_setScrollbarWidth',
    value: function _setScrollbarWidth() {
      var scrollbarWidth = this.getScrollbarWidth();

      this.setState({ scrollbarWidth: scrollbarWidth });
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Table.defaultProps = {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: _Grid__WEBPACK_IMPORTED_MODULE_11__["accessibilityOverscanIndicesGetter"],
  overscanRowCount: 10,
  rowRenderer: _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_12__["default"],
  headerRowRenderer: _defaultHeaderRowRenderer__WEBPACK_IMPORTED_MODULE_13__["default"],
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Table);
Table.propTypes =  true ? {
  /** This is just set on the grid top element. */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /** This is just set on the grid top element. */
  'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,

  /** One or more Columns describing the data displayed in this row */
  children: function children(props) {
    var children = react__WEBPACK_IMPORTED_MODULE_9__["Children"].toArray(props.children);
    for (var i = 0; i < children.length; i++) {
      var childType = children[i].type;
      if (childType !== _Column__WEBPACK_IMPORTED_MODULE_7__["default"] && !(childType.prototype instanceof _Column__WEBPACK_IMPORTED_MODULE_7__["default"])) {
        return new Error('Table only accepts children of type Column');
      }
    }
  },

  /** Optional CSS class name */
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /** Disable rendering the header at all */
  disableHeader: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,

  /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,

  /** Optional custom CSS class name to attach to inner Grid element. */
  gridClassName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /** Optional inline style to attach to inner Grid element. */
  gridStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,

  /** Optional CSS class to apply to all column headers */
  headerClassName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /** Fixed height of header row */
  headerHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: any[],
   *   style: any
   * }): PropTypes.node
   */
  headerRowRenderer: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /** Optional custom inline style to attach to table header columns. */
  headerStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,

  /** Fixed/available height for out DOM element */
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,

  /** Optional id */
  id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
  noRowsRenderer: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Optional callback when a column is clicked.
   * ({ columnData: any, dataKey: string }): void
   */
  onColumnClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Optional callback when a column's header is clicked.
   * ({ columnData: any, dataKey: string }): void
   */
  onHeaderClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */
  onRowDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */
  onRowMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */
  onRowMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Callback invoked when a user right-clicks on a table row.
   * ({ index: number }): void
   */
  onRowRightClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,

  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,

  /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */
  rowClassName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),

  /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */
  rowGetter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]).isRequired,

  /** Number of rows in table. */
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,

  /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */
  rowRenderer: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /** Optional custom inline style to attach to table rows. */
  rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]).isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,

  /** Vertical offset. */
  scrollTop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,

  /**
   * Sort function to be called if a sortable header is clicked.
   * Should implement the following interface: ({
   *   defaultSortDirection: 'ASC' | 'DESC',
   *   event: MouseEvent,
   *   sortBy: string,
   *   sortDirection: SortDirection
   * }): void
   */
  sort: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
  sortBy: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /** Table data is currently sorted in this direction (if it is sorted at all) */
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf([_SortDirection__WEBPACK_IMPORTED_MODULE_14__["default"].ASC, _SortDirection__WEBPACK_IMPORTED_MODULE_14__["default"].DESC]),

  /** Optional inline style */
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,

  /** Tab index for focus */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,

  /** Width of list */
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
} : undefined;


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/createMultiSort.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/createMultiSort.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMultiSort; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);



function createMultiSort(sortCallback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultSortBy = _ref.defaultSortBy,
      _ref$defaultSortDirec = _ref.defaultSortDirection,
      defaultSortDirection = _ref$defaultSortDirec === undefined ? {} : _ref$defaultSortDirec;

  if (!sortCallback) {
    throw Error('Required parameter "sortCallback" not specified');
  }

  var sortBy = defaultSortBy || [];
  var sortDirection = {};

  sortBy.forEach(function (dataKey) {
    sortDirection[dataKey] = defaultSortDirection.hasOwnProperty(dataKey) ? defaultSortDirection[dataKey] : 'ASC';
  });

  function sort(_ref2) {
    var defaultSortDirection = _ref2.defaultSortDirection,
        event = _ref2.event,
        dataKey = _ref2.sortBy;

    if (event.shiftKey) {
      // Shift + click appends a column to existing criteria
      if (sortDirection.hasOwnProperty(dataKey)) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
        sortBy.push(dataKey);
      }
    } else if (event.ctrlKey || event.metaKey) {
      // Control + click removes column from sort (if pressent)
      var index = sortBy.indexOf(dataKey);
      if (index >= 0) {
        sortBy.splice(index, 1);
        delete sortDirection[dataKey];
      }
    } else {
      // Clear sortBy array of all non-selected keys
      sortBy.length = 0;
      sortBy.push(dataKey);

      // Clear sortDirection object of all non-selected keys
      var sortDirectionKeys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sortDirection);
      sortDirectionKeys.forEach(function (key) {
        if (key !== dataKey) delete sortDirection[key];
      });

      // If key is already selected, reverse sort direction.
      // Else, set sort direction to default direction.
      if (sortDirection.hasOwnProperty(dataKey)) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
      }
    }

    // Notify application code
    sortCallback({
      sortBy: sortBy,
      sortDirection: sortDirection
    });
  }

  return {
    sort: sort,
    sortBy: sortBy,
    sortDirection: sortDirection
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultCellDataGetter; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");


/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultCellRenderer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");


/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultHeaderRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SortIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortIndicator */ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;

  var showSortIndicator = sortBy === dataKey;
  var children = [react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
    'span',
    {
      className: 'ReactVirtualized__Table__headerTruncatedText',
      key: 'label',
      title: typeof label === 'string' ? label : null },
    label
  )];

  if (showSortIndicator) {
    children.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SortIndicator__WEBPACK_IMPORTED_MODULE_1__["default"], { key: 'SortIndicator', sortDirection: sortDirection }));
  }

  return children;
}
defaultHeaderRenderer.propTypes =  false ? undefined : _types__WEBPACK_IMPORTED_MODULE_2__["bpfrpt_proptype_HeaderRendererParams"] === prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any ? {} : _types__WEBPACK_IMPORTED_MODULE_2__["bpfrpt_proptype_HeaderRendererParams"];



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultHeaderRowRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
    'div',
    { className: className, role: 'row', style: style },
    columns
  );
}
defaultHeaderRowRenderer.propTypes =  false ? undefined : _types__WEBPACK_IMPORTED_MODULE_1__["bpfrpt_proptype_HeaderRowRendererParams"] === prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any ? {} : _types__WEBPACK_IMPORTED_MODULE_1__["bpfrpt_proptype_HeaderRowRendererParams"];



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultRowRenderer; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/react-virtualized/dist/es/Table/types.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      style = _ref.style;

  var a11yProps = { 'aria-rowindex': index + 1 };

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({ event: event, index: index, rowData: rowData });
      };
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
    'div',
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, a11yProps, {
      className: className,
      key: key,
      role: 'row',
      style: style }),
    columns
  );
}
defaultRowRenderer.propTypes =  false ? undefined : _types__WEBPACK_IMPORTED_MODULE_2__["bpfrpt_proptype_RowRendererParams"] === prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any ? {} : _types__WEBPACK_IMPORTED_MODULE_2__["bpfrpt_proptype_RowRendererParams"];



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/index.js ***!
  \***************************************************************/
/*! exports provided: default, createMultiSort, defaultCellDataGetter, defaultCellRenderer, defaultHeaderRowRenderer, defaultHeaderRenderer, defaultRowRenderer, Column, SortDirection, SortIndicator, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMultiSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMultiSort */ "./node_modules/react-virtualized/dist/es/Table/createMultiSort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMultiSort", function() { return _createMultiSort__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultCellDataGetter */ "./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCellDataGetter", function() { return _defaultCellDataGetter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultCellRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCellRenderer", function() { return _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _defaultHeaderRowRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultHeaderRowRenderer.js */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultHeaderRowRenderer", function() { return _defaultHeaderRowRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultHeaderRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultHeaderRenderer", function() { return _defaultHeaderRenderer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultRowRenderer */ "./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRowRenderer", function() { return _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Column */ "./node_modules/react-virtualized/dist/es/Table/Column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _Column__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _SortDirection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SortDirection */ "./node_modules/react-virtualized/dist/es/Table/SortDirection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return _SortDirection__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _SortIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SortIndicator */ "./node_modules/react-virtualized/dist/es/Table/SortIndicator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortIndicator", function() { return _SortIndicator__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table */ "./node_modules/react-virtualized/dist/es/Table/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/* harmony default export */ __webpack_exports__["default"] = (_Table__WEBPACK_IMPORTED_MODULE_9__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/Table/types.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/Table/types.js ***!
  \***************************************************************/
/*! exports provided: bpfrpt_proptype_CellDataGetterParams, bpfrpt_proptype_CellRendererParams, bpfrpt_proptype_HeaderRowRendererParams, bpfrpt_proptype_HeaderRendererParams, bpfrpt_proptype_RowRendererParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellDataGetterParams", function() { return bpfrpt_proptype_CellDataGetterParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_CellRendererParams", function() { return bpfrpt_proptype_CellRendererParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_HeaderRowRendererParams", function() { return bpfrpt_proptype_HeaderRowRendererParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_HeaderRendererParams", function() { return bpfrpt_proptype_HeaderRendererParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_RowRendererParams", function() { return bpfrpt_proptype_RowRendererParams; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
var bpfrpt_proptype_CellDataGetterParams =  false ? undefined : {
  columnData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  dataKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  rowData: function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `" + propName + "` has type 'any' or 'mixed', but was not provided to `" + componentName + "`. Pass undefined or any other value.");
    }
  }
};
var bpfrpt_proptype_CellRendererParams =  false ? undefined : {
  cellData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  columnData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  dataKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  rowData: function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `" + propName + "` has type 'any' or 'mixed', but was not provided to `" + componentName + "`. Pass undefined or any other value.");
    }
  },
  rowIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
var bpfrpt_proptype_HeaderRowRendererParams =  false ? undefined : {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `" + propName + "` has type 'any' or 'mixed', but was not provided to `" + componentName + "`. Pass undefined or any other value.");
    }
  }).isRequired,
  style: function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `" + propName + "` has type 'any' or 'mixed', but was not provided to `" + componentName + "`. Pass undefined or any other value.");
    }
  }
};
var bpfrpt_proptype_HeaderRendererParams =  false ? undefined : {
  columnData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  dataKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  disableSort: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  sortBy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
var bpfrpt_proptype_RowRendererParams =  false ? undefined : {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `" + propName + "` has type 'any' or 'mixed', but was not provided to `" + componentName + "`. Pass undefined or any other value.");
    }
  }).isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  isScrolling: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onRowDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onRowMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onRowMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  rowData: function rowData(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `" + propName + "` has type 'any' or 'mixed', but was not provided to `" + componentName + "`. Pass undefined or any other value.");
    }
  },
  style: function style(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `" + propName + "` has type 'any' or 'mixed', but was not provided to `" + componentName + "`. Pass undefined or any other value.");
    }
  }
};







/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js ***!
  \*********************************************************************************/
/*! exports provided: IS_SCROLLING_TIMEOUT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SCROLLING_TIMEOUT", function() { return IS_SCROLLING_TIMEOUT; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_onScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/onScroll */ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js");
/* harmony import */ var _utils_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/dimensions */ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js");
/* harmony import */ var _vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vendor/detectElementResize */ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);












/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;

var getWindow = function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
};

var WindowScroller = function (_React$PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WindowScroller, _React$PureComponent);

  function WindowScroller() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, WindowScroller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = WindowScroller.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(WindowScroller)).call.apply(_ref, [this].concat(args))), _this), _this._window = getWindow(), _this._isMounted = false, _this._positionFromTop = 0, _this._positionFromLeft = 0, _this.state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_9__["getDimensions"])(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    }), _this._registerChild = function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('WindowScroller registerChild expects to be passed Element or null');
      }
      _this._child = element;
      _this.updatePosition();
    }, _this._onChildScroll = function (_ref2) {
      var scrollTop = _ref2.scrollTop;

      if (_this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        if (typeof scrollElement.scrollTo === 'function') {
          scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + _this._positionFromTop;
        }
      }
    }, _this._registerResizeListener = function (element) {
      if (element === window) {
        window.addEventListener('resize', _this._onResize, false);
      } else {
        _this._detectElementResize.addResizeListener(element, _this._onResize);
      }
    }, _this._unregisterResizeListener = function (element) {
      if (element === window) {
        window.removeEventListener('resize', _this._onResize, false);
      } else if (element) {
        _this._detectElementResize.removeResizeListener(element, _this._onResize);
      }
    }, _this._onResize = function () {
      _this.updatePosition();
    }, _this.__handleWindowScrollEvent = function () {
      if (!_this._isMounted) {
        return;
      }

      var onScroll = _this.props.onScroll;


      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        var scrollOffset = Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_9__["getScrollOffset"])(scrollElement);
        var _scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
        var _scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);

        _this.setState({
          isScrolling: true,
          scrollLeft: _scrollLeft,
          scrollTop: _scrollTop
        });

        onScroll({
          scrollLeft: _scrollLeft,
          scrollTop: _scrollTop
        });
      }
    }, _this.__resetIsScrolling = function () {
      _this.setState({
        isScrolling: false
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(WindowScroller, [{
    key: 'updatePosition',
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
      var onResize = this.props.onResize;
      var _state = this.state,
          height = _state.height,
          width = _state.width;


      var thisNode = this._child || react_dom__WEBPACK_IMPORTED_MODULE_7__["findDOMNode"](this);
      if (thisNode instanceof Element && scrollElement) {
        var offset = Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_9__["getPositionOffset"])(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }

      var dimensions = Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_9__["getDimensions"])(scrollElement, this.props);
      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;

      this._detectElementResize = Object(_vendor_detectElementResize__WEBPACK_IMPORTED_MODULE_10__["default"])();

      this.updatePosition(scrollElement);

      if (scrollElement) {
        Object(_utils_onScroll__WEBPACK_IMPORTED_MODULE_8__["registerScrollListener"])(this, scrollElement);
        this._registerResizeListener(scrollElement);
      }

      this._isMounted = true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;


      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);

        Object(_utils_onScroll__WEBPACK_IMPORTED_MODULE_8__["unregisterScrollListener"])(this, prevScrollElement);
        Object(_utils_onScroll__WEBPACK_IMPORTED_MODULE_8__["registerScrollListener"])(this, scrollElement);

        this._unregisterResizeListener(prevScrollElement);
        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;
      if (scrollElement) {
        Object(_utils_onScroll__WEBPACK_IMPORTED_MODULE_8__["unregisterScrollListener"])(this, scrollElement);
        this._unregisterResizeListener(scrollElement);
      }

      this._isMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state2 = this.state,
          isScrolling = _state2.isScrolling,
          scrollTop = _state2.scrollTop,
          scrollLeft = _state2.scrollLeft,
          height = _state2.height,
          width = _state2.width;


      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }

    // Referenced by utils/onScroll


    // Referenced by utils/onScroll

  }]);

  return WindowScroller;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
};
WindowScroller.propTypes =  false ? undefined : {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,


  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,


  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  onScroll: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,


  /** Element to attach scroll event listeners. Defaults to window. */
  scrollElement: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any, function () {
    return (typeof Element === 'function' ? prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.instanceOf(Element) : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any).apply(this, arguments);
  }]),

  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  scrollingResetTimeInterval: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,


  /** Height used for server-side rendering */
  serverHeight: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,


  /** Width used for server-side rendering */
  serverWidth: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WindowScroller);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/index.js ***!
  \************************************************************************/
/*! exports provided: default, WindowScroller, IS_SCROLLING_TIMEOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WindowScroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindowScroller */ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowScroller", function() { return _WindowScroller__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_SCROLLING_TIMEOUT", function() { return _WindowScroller__WEBPACK_IMPORTED_MODULE_0__["IS_SCROLLING_TIMEOUT"]; });



/* harmony default export */ __webpack_exports__["default"] = (_WindowScroller__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js ***!
  \***********************************************************************************/
/*! exports provided: getDimensions, getPositionOffset, getScrollOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDimensions", function() { return getDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionOffset", function() { return getPositionOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollOffset", function() { return getScrollOffset; });


/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */

var isWindow = function isWindow(element) {
  return element === window;
};

// TODO Move this into WindowScroller and import from there


var getBoundingBox = function getBoundingBox(element) {
  return element.getBoundingClientRect();
};

function getDimensions(scrollElement, props) {
  if (!scrollElement) {
    return {
      height: props.serverHeight,
      width: props.serverWidth
    };
  } else if (isWindow(scrollElement)) {
    var _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;

    return {
      height: typeof innerHeight === 'number' ? innerHeight : 0,
      width: typeof innerWidth === 'number' ? innerWidth : 0
    };
  } else {
    return getBoundingBox(scrollElement);
  }
}

/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */
function getPositionOffset(element, container) {
  if (isWindow(container) && document.documentElement) {
    var containerElement = document.documentElement;
    var elementRect = getBoundingBox(element);
    var containerRect = getBoundingBox(containerElement);
    return {
      top: elementRect.top - containerRect.top,
      left: elementRect.left - containerRect.left
    };
  } else {
    var scrollOffset = getScrollOffset(container);
    var _elementRect = getBoundingBox(element);
    var _containerRect = getBoundingBox(container);
    return {
      top: _elementRect.top + scrollOffset.top - _containerRect.top,
      left: _elementRect.left + scrollOffset.left - _containerRect.left
    };
  }
}

/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */
function getScrollOffset(element) {
  if (isWindow(element) && document.documentElement) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js ***!
  \*********************************************************************************/
/*! exports provided: registerScrollListener, unregisterScrollListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerScrollListener", function() { return registerScrollListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterScrollListener", function() { return unregisterScrollListener; });
/* harmony import */ var _utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/requestAnimationTimeout */ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js");
/* harmony import */ var _WindowScroller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WindowScroller.js */ "./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js");



var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__["cancelAnimationTimeout"])(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });

  disablePointerEventsTimeoutId = Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__["requestAnimationTimeout"])(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      Object(_utils_requestAnimationTimeout__WEBPACK_IMPORTED_MODULE_0__["cancelAnimationTimeout"])(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}


/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/index.js ***!
  \*********************************************************/
/*! exports provided: ArrowKeyStepper, AutoSizer, CellMeasurer, CellMeasurerCache, Collection, ColumnSizer, accessibilityOverscanIndicesGetter, defaultCellRangeRenderer, defaultOverscanIndicesGetter, Grid, InfiniteLoader, List, createMasonryCellPositioner, Masonry, MultiGrid, ScrollSync, createTableMultiSort, defaultTableCellDataGetter, defaultTableCellRenderer, defaultTableHeaderRenderer, defaultTableHeaderRowRenderer, defaultTableRowRenderer, Table, Column, SortDirection, SortIndicator, WindowScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowKeyStepper */ "./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowKeyStepper", function() { return _ArrowKeyStepper__WEBPACK_IMPORTED_MODULE_0__["ArrowKeyStepper"]; });

/* harmony import */ var _AutoSizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoSizer", function() { return _AutoSizer__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"]; });

/* harmony import */ var _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellMeasurer", function() { return _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__["CellMeasurer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellMeasurerCache", function() { return _CellMeasurer__WEBPACK_IMPORTED_MODULE_2__["CellMeasurerCache"]; });

/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collection */ "./node_modules/react-virtualized/dist/es/Collection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _Collection__WEBPACK_IMPORTED_MODULE_3__["Collection"]; });

/* harmony import */ var _ColumnSizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColumnSizer */ "./node_modules/react-virtualized/dist/es/ColumnSizer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnSizer", function() { return _ColumnSizer__WEBPACK_IMPORTED_MODULE_4__["ColumnSizer"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grid */ "./node_modules/react-virtualized/dist/es/Grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accessibilityOverscanIndicesGetter", function() { return _Grid__WEBPACK_IMPORTED_MODULE_5__["accessibilityOverscanIndicesGetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCellRangeRenderer", function() { return _Grid__WEBPACK_IMPORTED_MODULE_5__["defaultCellRangeRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOverscanIndicesGetter", function() { return _Grid__WEBPACK_IMPORTED_MODULE_5__["defaultOverscanIndicesGetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_5__["Grid"]; });

/* harmony import */ var _InfiniteLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfiniteLoader */ "./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfiniteLoader", function() { return _InfiniteLoader__WEBPACK_IMPORTED_MODULE_6__["InfiniteLoader"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_7__["List"]; });

/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-virtualized/dist/es/Masonry/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMasonryCellPositioner", function() { return _Masonry__WEBPACK_IMPORTED_MODULE_8__["createCellPositioner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Masonry", function() { return _Masonry__WEBPACK_IMPORTED_MODULE_8__["Masonry"]; });

/* harmony import */ var _MultiGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MultiGrid */ "./node_modules/react-virtualized/dist/es/MultiGrid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiGrid", function() { return _MultiGrid__WEBPACK_IMPORTED_MODULE_9__["MultiGrid"]; });

/* harmony import */ var _ScrollSync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScrollSync */ "./node_modules/react-virtualized/dist/es/ScrollSync/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollSync", function() { return _ScrollSync__WEBPACK_IMPORTED_MODULE_10__["ScrollSync"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Table */ "./node_modules/react-virtualized/dist/es/Table/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTableMultiSort", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["createMultiSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTableCellDataGetter", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["defaultCellDataGetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTableCellRenderer", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["defaultCellRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTableHeaderRenderer", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["defaultHeaderRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTableHeaderRowRenderer", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["defaultHeaderRowRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTableRowRenderer", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["defaultRowRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["Column"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["SortDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortIndicator", function() { return _Table__WEBPACK_IMPORTED_MODULE_11__["SortIndicator"]; });

/* harmony import */ var _WindowScroller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WindowScroller */ "./node_modules/react-virtualized/dist/es/WindowScroller/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowScroller", function() { return _WindowScroller__WEBPACK_IMPORTED_MODULE_12__["WindowScroller"]; });















/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/animationFrame.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/animationFrame.js ***!
  \************************************************************************/
/*! exports provided: raf, caf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });


// Properly handle server-side rendering.
var win = void 0;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
}

// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = request;
var caf = cancel;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCallbackMemoizer; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;

    var keys = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUpdatedOffsetForIndex; });
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === undefined ? 'auto' : _ref$align,
      cellOffset = _ref.cellOffset,
      cellSize = _ref.cellSize,
      containerSize = _ref.containerSize,
      currentOffset = _ref.currentOffset;

  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;
    case 'end':
      return minOffset;
    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;
    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js ***!
  \*********************************************************************************/
/*! exports provided: cancelAnimationTimeout, requestAnimationTimeout, bpfrpt_proptype_AnimationTimeoutId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationTimeout", function() { return cancelAnimationTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationTimeout", function() { return requestAnimationTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpfrpt_proptype_AnimationTimeoutId", function() { return bpfrpt_proptype_AnimationTimeoutId; });
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrame */ "./node_modules/react-virtualized/dist/es/utils/animationFrame.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var bpfrpt_proptype_AnimationTimeoutId =  false ? undefined : {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};


var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return Object(_animationFrame__WEBPACK_IMPORTED_MODULE_1__["caf"])(frame.id);
};

/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */
var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = void 0;
  // wait for end of processing current event handler, because event handler may be long
  babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = Object(_animationFrame__WEBPACK_IMPORTED_MODULE_1__["raf"])(timeout);
    }
  };

  var frame = {
    id: Object(_animationFrame__WEBPACK_IMPORTED_MODULE_1__["raf"])(timeout)
  };

  return frame;
};



/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/

function _GEA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GEP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _GTA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GTP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LTA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LTP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LEA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LEP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _EQA(a, l, h, y) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function _EQP(a, l, h, y, c) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c(x, y);
    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
});

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDetectElementResize; });
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Added support for injecting custom window object
 **/

function createDetectElementResize(nonce, hostWindow) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof hostWindow !== 'undefined') {
    _window = hostWindow;
  } else if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = global;
  }

  var attachEvent = typeof _window.document !== 'undefined' && _window.document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = _window.document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-virtualized/dist/es/vendor/intervalTree.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-virtualized/dist/es/vendor/intervalTree.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWrapper; });
/* harmony import */ var _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearchBounds */ "./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js");
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/



var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);
  if (idx < 0) {
    return NOT_FOUND;
  }
  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);
  if (this.left) {
    this.left.intervals(result);
  }
  if (this.right) {
    this.right.intervals(result);
  }
  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;
  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.leftPoints, interval, compareBegin);
    var r = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;
  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }
    var rw = this.right ? this.right.count : 0;
    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.left.remove(interval);
    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }
    var lw = this.left ? this.left.count : 0;
    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.right.remove(interval);
    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }
    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;
        while (n.right) {
          p = n;
          n = n.right;
        }
        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }
        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }
      return SUCCESS;
    }
    for (var l = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }
      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);
        for (var r = _binarySearchBounds__WEBPACK_IMPORTED_MODULE_0__["default"].ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }
    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];
  if (d) {
    return d;
  }
  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];
  if (d) {
    return d;
  }
  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }
  var pts = [];
  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }
  pts.sort(compareNumbers);

  var mid = pts[pts.length >> 1];

  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];
  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];
    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  }

  //Split center intervals
  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);

  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
}

//User friendly wrapper that makes it possible to support empty trees
function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);
    if (r === EMPTY) {
      this.root = null;
    }
    return r !== NOT_FOUND;
  }
  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, 'count', {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
});

Object.defineProperty(tproto, 'intervals', {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  }
});

function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }
  return new IntervalTree(createIntervalTree(intervals));
}

/***/ })

})
//# sourceMappingURL=index.js.51dd3b112b9a81a98d3f.hot-update.js.map