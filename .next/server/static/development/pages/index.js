module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/components/Comment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  individualComment: {
    display: "flex",
    paddingBottom: '20px',
    paddingTop: '20px',
    borderBottom: '2px solid #cccccc'
  },
  personIcon: {
    fontSize: '80px'
  },
  message: {
    marginTop: '10px'
  }
}));
function Comment(props) {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.individualComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.personIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("div", {
    className: "commentInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "authorDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.comment.author)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Posted on ", props.comment.time.toLocaleDateString("en-US"))), __jsx("div", {
    className: classes.message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.comment.message)));
}

/***/ }),

/***/ "./components/CommentListClass.js":
/*!****************************************!*\
  !*** ./components/CommentListClass.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Comment */ "./models/Comment.ts");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-window */ "react-window");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized-auto-sizer */ "react-virtualized-auto-sizer");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/components/CommentListClass.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = theme => ({
  instructions: {
    textAlign: 'center'
  },
  inlineBlock: {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%'
  },
  followButton: {
    display: 'inline-block',
    marginRight: '5px'
  },
  customButton: {
    display: 'inline-block',
    marginLeft: '5px'
  },
  autoSizerWrapper: {
    display: 'flex'
  },
  autoSizerInner: {
    flex: '1 1 auto',
    height: '50vh'
  }
});

class CommentList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.initialComments || [],
      follow: true
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.addCustomComment = this.addCustomComment.bind(this);
    this.handleDupeCheck = this.handleDupeCheck.bind(this);
  }

  componentDidMount() {
    this.subscribeInitiate();
  }

  subscribeInitiate() {
    Object(_models_Comment__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(comment => {
      const dupeCheck = this.handleDupeCheck(comment);

      if (dupeCheck === -1) {
        this.setState({
          comments: [...this.state.comments, comment]
        });
      }

      console.log('received comment: ', comment);
    });
  } // method to handle follow / unfollow clicks


  handleFollow() {
    if (this.state.follow) {
      Object(_models_Comment__WEBPACK_IMPORTED_MODULE_2__["stopFollow"])();
    } else {
      Object(_models_Comment__WEBPACK_IMPORTED_MODULE_2__["startFollow"])();
      this.subscribeInitiate();
    }

    this.setState({
      follow: !this.state.follow
    });
  } // method to add a controlled comment in order to test for dupe handling


  addCustomComment() {
    const comment = Object(_models_Comment__WEBPACK_IMPORTED_MODULE_2__["createDupeComment"])();
    const dupeCheck = this.handleDupeCheck(comment); // if -1, comment is unique and is added to state

    if (dupeCheck === -1) {
      this.setState({
        comments: [...this.state.comments, comment]
      });
    }
  } // method to check if the current comment already exists in the state (returns index or -1)


  handleDupeCheck(val) {
    const indexOfComment = this.state.comments.findIndex(comment => comment.author === val.author && comment.message === val.message);
    return indexOfComment;
  }

  render() {
    const {
      comments,
      follow
    } = this.state;
    const {
      classes
    } = this.props; // Comment component loaded for each index in comments variable

    const commentReactWindow = ({
      index,
      style
    }) => __jsx("div", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_Comment__WEBPACK_IMPORTED_MODULE_6__["default"], {
      comment: comments[index],
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }));

    return __jsx("div", {
      className: "commentlist-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("div", {
      className: classes.inlineBlock,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("div", {
      className: classes.followButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, follow == true ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "contained",
      color: "primary",
      onClick: this.handleFollow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Unfollow") : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "contained",
      color: "secondary",
      onClick: this.handleFollow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Follow")), __jsx("div", {
      className: classes.customButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "contained",
      color: "primary",
      onClick: this.addCustomComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Add Custom Comment"))), __jsx("div", {
      className: classes.instructions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "To 'pause' the incoming stream of comments please click the 'Unfollow' button."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "In order continue receiving glowing reviews and comments, please click the 'Follow' button."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "Total Comments: ", comments.length))), __jsx("div", {
      className: classes.autoSizerWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("div", {
      className: classes.autoSizerInner,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, ({
      height,
      width
    }) => __jsx(react_window__WEBPACK_IMPORTED_MODULE_3__["FixedSizeList"], {
      height: height,
      width: width,
      itemSize: 200,
      itemCount: comments.length,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, commentReactWindow)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(useStyles)(CommentList));

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Kokanee Exploratory Project"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./models/Comment.ts":
/*!***************************!*\
  !*** ./models/Comment.ts ***!
  \***************************/
/*! exports provided: makeComments, createDupeComment, stopFollow, startFollow, subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeComments", function() { return makeComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDupeComment", function() { return createDupeComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopFollow", function() { return stopFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFollow", function() { return startFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lorem-ipsum */ "lorem-ipsum");
/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Names */ "./models/Names.ts");



const makeComment = () => ({
  author: Object(_Names__WEBPACK_IMPORTED_MODULE_1__["name"])(),
  message: Object(lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__["loremIpsum"])({
    count: ~~(Math.random() * 3)
  }),
  time: new Date()
});

const makeComments = count => {
  const comments = [];

  for (let i = 0; i < count; i++) {
    comments.push(makeComment());
  }

  return comments;
};
const createDupeComment = () => {
  const comment = {
    author: 'Fred Choe',
    message: 'If a comment has a unique author and message it will not be considered a duplicate comment',
    time: new Date()
  };
  return comment;
};
var keepGoing = true; // clicking the unfollow button takes us out of the subscribe callback loop by modyfing value of keepGoing

const stopFollow = () => {
  keepGoing = false;
}; // clicking the follow button puts us back into the callback loop by modyfing value of keepGoing

const startFollow = () => {
  keepGoing = true;
};
const subscribe = callback => {
  console.log('subscribing');

  const produce = () => {
    // if keepGoing is falsy, jump out of the callback loop
    if (!keepGoing) {
      console.log('stopped inside produce');
      return;
    }

    callback(makeComment());
    const interval = Math.random() * 5000 + 2000;
    console.log('next comment in:', interval);
    setTimeout(produce, interval);
  };

  setTimeout(produce, 3000);
};

/***/ }),

/***/ "./models/Names.ts":
/*!*************************!*\
  !*** ./models/Names.ts ***!
  \*************************/
/*! exports provided: choose, name */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
const names = ['Tianna Moore', 'Imani White', 'Jada Harris', 'Shaniqua King', 'Aaliyah Williams', 'Trina Davis', 'Shamika Thompson', 'Keisha Lewis', 'Pamela Brown', 'Deja Richards', 'Ebony Lee', 'Aisha Smith', 'Kimberly Jones', 'Ngo An', 'Le Lanh', 'Bui Ngu', 'Dang Tan', 'Le Dao', 'Pham Le', 'Le Ly', 'Tran Yen', 'Duong Dung', 'Do Long', 'Do Qui', 'Ngo Yen', 'Dang Tan', 'Le Cam', 'Dang Le', 'Duong Phuong', 'Do Bian', 'Duong Lanh', 'Ngo Linh', 'Phan Yen', 'Ngo Xuan', 'Pham Tan', 'Bui Be', 'Le Tan', 'Nuygen Thom', 'Bui Be', 'Vu Tan', 'Le Cong', 'Do Dung', 'Nguyen Le', 'Le Bian', 'Phan Dao', 'Dang Phuong', 'Huynh Ngoc', 'Nguyen Phuong', 'Dang Phuong', 'Tran Hanh', 'Bui Ngu', 'Dang Xuan', 'Le Ngu', 'Ho Cong', 'Vu Be', 'Phan Yen', 'Ngo Thom', 'Le Ngu', 'Bui Ly', 'Dang Ngoc', 'Nuygen Ngu', 'Huynh Ngu', 'Nguyen An', 'Ron Sor-yong', 'Son Cho', 'Shon Young-ah', 'Suk Yung-li', 'Sook Mi-kum', 'Hyun Sung-hee', 'Sun Sung-hee', 'Oh Hwa-soon', 'Rim Kyung-hee', 'Baik Sor-yong', 'Youj Sung-hee', 'Ra Kun-hee', 'Seok Aei-young', 'Chung Ae-Sook', 'Baik Ok-hwa', 'Choi Soo-Yun', 'Tsai Yang-gae', 'Tsai Sun-hy', 'Rheem Hwa-soon', 'Li He-suk', 'Jon Myung-hee', 'Mo Mi-soon', 'Chin Hwa-soon', 'Jon Hyang-soon', 'Shin Ok-hwa', 'Sun Kyung-wook', 'Choi Ok-hwa', 'Lee Sun-hy', 'Tsai Jung-hye', 'Youn Choe', 'Jeon Se-ri', 'Yoo Sang-me', 'Koo Hyung-sook', 'Song Yoo-mee', 'Shin Heyeong-gun', 'Seo Myung-hee', 'Hong Hye-young', 'Jon Se-ri', 'Sook Soon-ei', 'Sung Hyun-sil', 'Jeon Eun-seong', 'Jeon Cho', 'Ri Joo-hee', 'Tsai Chun-ok', 'Seo Choe', 'Park Kun-hee', 'Han Choon-yei', 'Ku Sor-yong', 'Gu Myong-suk', 'Chong Sor-yong', 'Wazuka Shiskikura', 'Rui Hiratasuka', 'Hoshiyo Fukuzawa', 'Sawako Okuda', 'Sakuro Minobe', 'Sata Kubo', 'Yoshiko Nakasawa', 'Saito Mori', 'Hikaru Akaike', 'Yuma Yamagata', 'Arisa Matoke', 'Kiyo Umehara', 'Eriko Shiroyama', 'Mariko Wakai', 'Fumie Hasekura', 'Kiko Kasahara', 'Joruri Kitoaji', 'Tae Kurogane', 'Chinatsu Ieyoshi', 'Tara Hideki', 'Tsuki Akiyama', 'Maeko Iwasaki', 'Shiori Murkami', 'Kinuko Shijo', 'Eriko Shimon', 'Yusuke Tatsuno', 'Kameko Hanabusa', 'Mako Koruba', 'Fujiko Uchida', 'Kit Tomimoto', 'Hiroe Imada', 'Wazuka Inoguchi', 'Mino Shiganori', 'Tamiko Soho', 'Chiaki Shibata', 'Suzue Shijo', 'Chikako Itami', 'Mina Kamio', 'Nami Kentaro', 'Kioko Raikatuji', 'Sumiko Fukuoka', 'Chiaki Koruba', 'Satomi Takizawa', 'Hisa Daigo', 'Mitsu Iseki', 'Hiroshi Tsunoda', 'Sachiko Egami', 'Shinobu Shimamura', 'Yumako Ono', 'Tae Asuhara', 'Ding Tse', 'Zhou Hui-lan', 'Si-ma Wei', 'Fou Shao-yan', 'Yep Zhuo', 'Cong Mei-zhen', 'Shang Xuer-nei', 'Cai Hong-yan', 'Lok Mei-zhu', 'Hsaio Ah-lam', 'Ou Xiaoming', 'Ye Xi-lan', 'Tann Yan-hong', 'Yeh Rui-hong', 'Mi Rou-wan', 'I Xiong-hong', 'Hsu Rui-hong', 'Yen My-lai', 'Bian Yong-tai', 'Jue Donglu', 'Kong ling', 'Hsaio Xiu-min', 'Yee Jiang-kui', 'Kun Wei', 'Yang Xiao-xian', 'Kin May-ling', 'Guao Sang-wa', 'Jin Wen-rong', 'Shang Yu-zhu', 'Cheng Yun-ping', 'Jiang Xiang', 'Leong Lian-hua', 'Ren Chin-chih', 'Sui Yun-he', 'Chong Mei-shio', 'Yun Shu-ting', 'Bian Ci-xi', 'Hou Shou-yun', 'See-to Er-hong', 'Meng Huan', 'Shuang May-ling', 'Chow Hui', 'Ow Ping', 'Hoong Kit', 'Fu Min', 'Guan Ying-nana', 'Tan Jin-hua', 'Kung Fang', 'Deng Jing-mei', 'Lum Ding', 'Jallata Choudhari', 'Abhivibha Kanmani', 'Ambaya Dinath', 'Geeta Palshikar', 'Dhanvanya Dinkar', 'Cumba Nisheeth', 'Ahladita Hemalatha', 'Betanabhatla Manjusha', 'Abjini Tantry', 'Devanganga Pal', 'Anutapta Sowrirajan', 'Acaryatanaya Vijayarangan', 'Harsi Kosanam', 'Baiju Kandathil', 'Archana Veeraraju', 'Chalamala Saibal', 'Lakshminarayanan Niraj', 'Alamelu Mohaiemen', 'Kanakamudra Sukhjinder', 'Kalmesika Qamar', 'Balaji Indrani', 'Aravamudan Manivanan', 'Betanabhatla Shukta', 'Gunnika Khilnani', 'Sheela Samir', 'Iditri Swathi', 'Balakunda Subram', 'Ekadhana Nirguna', 'Lakshmikantan Ramasamy', 'Isika Venkateshwara', 'Istara Polamreddy', 'Angada Puskara', 'Sumitro Hitendra', 'Bemra Ramaswami', 'Poonam Pramila', 'Kilasla Maddukuri', 'Amaratatini Joardar', 'Ayati Suneina', 'Kamalanayani Kumar', 'Kanakavalli Samrat', 'Ekaja Yogish', 'Ibhi Jyotiradha', 'Ipsa Nirupa', 'Candravadana Mangeshkar', 'Andala Motala', 'Ajoy Taksa', 'Kalpavati Gorawala', 'Indira Sasthi', 'Padmini Shubhendu', 'Adusumilli Samiksha', 'Shireen Ammini', 'Nahal Kazemi', 'Samira Fatemi', 'Nargess Mossadegh', 'Nora Misbahi', 'Zarrin-dokht Abedzadeh', 'Naniyyih Garoussi', 'Azadeh Ziya', 'Forough Rabani', 'Ramesh Ishraqi', 'Laila Pakravan', 'Pouri Amirsadeghi', 'Banafsheh Ansari', 'Guita Yaqtin', 'Hengameh Fatemi', 'Guiti Khomeini', 'Oranous Dhabihiyan', 'Fatemeh Kazimi', 'Kobra Fahandizh', 'Mastoureh Ishraqi', 'Mahvash Khani', 'Shahin Limbuwala', 'Pareechehr Awji', 'Noor Hushmand', 'Ehteram Nazari', 'Sharareh Mahmudi', 'Parand Dihmubidi', 'Seema Garoussi', 'Afsoon Khatami', 'Mahta Fahandizh', 'Saltanah Imami', 'Arghavan Haqiqat', 'Shideh Gaffari', 'Iman Amir', 'Pooneh Homayoun', 'Najmeh Ameri', 'Yasaman Najafi', 'Tala Mahdavi-Kia', 'Noushafarin Estili', 'Rasa Ishraqi', 'Omid Majidi', 'Qudsiyyih Ghiassy', 'Behnaz Amini', 'Najmeh Shahy', 'Yasaman Jayhoon', 'Shaheen Mahdavi-Kia', 'Roshanak Ghurani', 'Batul Mahdavi-Kia', 'Fatemeh Shariat', 'Fatimah Ashrafy', 'Massa Demoz', 'Kabira Conteh', 'Tiaret Ndiaye', 'Kimmy Tewoldeberhan', 'Xinavane Atieno', 'Ayanna Sy', 'Yamah Berhane', 'Marka Adoyo', 'Malika Sarr', 'Gamada Cisse', 'Sianeh Bah', 'Hazina Owiti', 'Tarana Ndiaye', 'Aman Nwosu', 'Qwara Cisse', 'Manica Dia', 'Kai Berhane', 'Afya Jalloh', 'Sarama Ballo', 'Manica Maalouf', 'Anika Onyango', 'Miatta Cisse', 'Yama Cisse', 'Yoruba Ballo', 'Nala Sall', 'Karasi Sesay', 'Ifama Diallo', 'Shaquana Conteh', 'Yata Dia', 'Fisseha Ndiaye', 'Zabia Hagos', 'Sia Sy', 'Famata Toure', 'Julisha Ndiaye', 'Coto Hagos', 'Latifah Owusu', 'Mamawa Onyango', 'Salihah Hailesellasie', 'Ziraili Sall', 'Juah Sow', 'Xolani Yeboah', 'Avongara Okafor', 'Mazu Michieka', 'Nowah Nahdi Sane', 'Saidah Berhane', 'Tonia Otieno', 'Sadatu Adoyo', 'Laquinta Gebremichael', 'Afric Abraha', 'Vasha Gueye', 'Eden Golan', 'Rachel Ashkenazi', 'Marian Amar', 'Lian David', 'Eden Adrei', 'Roni Friedman', 'Sarah Segel', 'Marian Tal', 'Eden Tal', 'Adi Chen', 'Eden Mizrachi', 'Hallah Friedman', 'Roni Cohen', 'Adi Levin', 'Tamar Amar', 'Mariah Klein', 'Mariah Tal', 'Shira Chen', 'Tamar Golan', 'Tamar Dahan', 'Nicol Chen', 'Shira Adrei', 'Roni Malcah', 'Michael Levin', 'Agam Biton', 'Roni Katz', 'Mariah Yosef', 'Eden Amar', 'Eden Shapira', 'Hallah Hadad', 'Eden Chazan', 'Shira Klein', 'Mary Dahan', 'Lian Avraham', 'Rachel Peretz', 'Marian Chazan', 'Michael Shapira', 'Carol Peretz', 'Sarah Gabai', 'Mary David', 'Adi Dahan', 'Maya Chen', 'Maya Friedman', 'Hallah Cohen', 'Hallah Ashkenazi', 'Carol Hadad', 'Shira Ashkenazi', 'Mary David', 'Tamar Avraham', 'Aya Ashkenazi', 'Nawal Nasser', 'Bahiah Al-Sadat', 'Efra Ghandour', 'Bahiah Nagib', 'Lotus Abdelsatta', 'Fathia Iamam', 'Huda Tarek', 'Nyla Al Gahary', 'Ditas Amir', 'Nadine Batrawi', 'Nawal Al Effendi', 'Sherin Tarek', 'Fatima Salam', 'Rakia Tamer', 'Nawal Mubarak', 'Nabeela Marsal', 'Samira Naguib', 'Shaheen Sindhom', 'Nawal Saadauri', 'Nabila Sabry', 'Fatima Al-Sadat', 'Bahiah Medhat', 'Hind Salam', 'Rasha Amir', 'Nadine Saad', 'Shahira Aly', 'Rakia Abdelsatta', 'Halima Allam', 'Nabila Amir', 'Sherin Aly', 'Aziza Tamer', 'Ditas Hakki', 'Mahasin Fahim', 'Mahasin Mahfouz', 'Bahiah Zein', 'Fatima Amir', 'Nema Mostafa', 'Nabeela Nagib', 'Rasha Hazem', 'Abeer Saadauri', 'Hind Shabana', 'Nagwa Naguib', 'Nawal Rassul', 'Zabeya Iamam', 'Halima Nagib', 'Nawal Chahine', 'Rakia Al Effendi', 'Lotus Mubarak', 'Nabila Tarek', 'Nema Abdelsatta', 'Thara Hassan', 'Husn Doka', 'Lamis Miandad', 'Saleema Hafeez', 'Fatin Bin', 'Suhailah Dastghayb', 'Jamilah Abelzada', 'Rana Mohammad', 'Nabeeha Hussain', 'Nudhar Aizazuddin', 'Janan Al-Fayyoumi', 'Amirah Sotoudeh', 'Karimah Khuzayn', 'Maysa Yaqtin', 'Nabihah Alim-ud-Din', 'Rabiah Dilawar', 'Sawsan Waqar', 'Haniyyah Amir', 'Khulud Sarfraz', 'Adeela Gul', 'Huda Salam-ud-din', 'Jala Baraniq', 'Amal Mansur', 'Hadeel Khani', 'Maizah Alim-ud-Din', 'Shahrazad Butt', 'Nafeesa Ali', 'Adiba Bani-Sadr', 'Zakiyyah Mualimi', 'Nudhar Pakravan', 'Yaminah Madari', 'Yamha Hami', 'Abir Dihmubidi', 'Kulthum Al-Fayyoumi', 'Nabeela Sumech', 'Suha Al-Dwairan', 'Radwa Moullai', 'Majeeda Hafeez', 'Hessa Diba', 'Jamilah Kazimi', 'Farihah Baraniq', 'Aishah Al-Jahani', 'Lamis Aslam-Mohammad', 'Hamidah Sarfraz', 'Nadirah Asif', 'Ameena Mulla', 'Huriyyah Azizi', 'Leena Mohammad', 'Nimat Akhlaqi', 'Wajeeha Salim', 'Seda Altıntop', 'Suat Altıntop', 'Fatima Aydin', 'Yesim Muhtar', 'Aytac Kurt', 'Berin Kervan', 'Ayhan Seven', 'Hulya Aydin', 'Aylin Ortaç', 'Aytac Şener', 'Mujde Pekkan', 'Semra Ateş', 'Devlet Aydin', 'Selma Baykal', 'Baris Tevetoğlu', 'Yesim Kader', 'Aytac Sezgin', 'Hulya Emanetoğlu', 'Can Aybar', 'Asana Şener', 'Asana Gömeç', 'Hilmiye Yiğit', 'Devlet Caker', 'Abbase Demir', 'Arzu Ozturk', 'Elif Mirza', 'Ece Korkmaz', 'Cezmiye Sezgin', 'Bahtiyar Aydin', 'Devlet Kader', 'Saliha Emir', 'Aylin Yiğit', 'Kibra Seran', 'Halile Tevetoğlu', 'Nehir Mirza', 'Nevzat Mansur', 'Bade Emir', 'Sezay Kurt', 'Mihrisah Gömeç', 'Karaca Mansur', 'Mihrimah Aksu', 'Perihan Aydin', 'Yesim Emanetoğlu', 'Kezban Ozturk', 'Ceyda Şener', 'Sibel Erdoğan', 'Meral Ozdemir', 'Sertap Gömeç', 'Hilmiye Akin', 'Adalet Seran', 'Dariya Novikov', 'Maria Smirnov', 'Inna Volkov', 'Sofia Kuznetsov', 'Dariya Petrov', 'Ksenia Petrov', 'Darya Ivanov', 'Anna Morozov', 'Natalya Kuznetsov', 'Svetlana Kozlov', 'Tatiana Solovynov', 'Yelizaveta Ivanov', 'Natasha Kozlov', 'Irina Zaytesev', 'Natalya Pavlov', 'Yelizaveta Novikov', 'Tatiana Kozlov', 'Natasha Popov', 'Yekaterina Vorobyrov', 'Polina Popov', 'Elena Bogdanov', 'Sofia Golyubev', 'Ludmilla Volkov', 'Inna Smirnov', 'Yelena Vinogradov', 'Maria Kozlov', 'Tatiana Solovynov', 'Natalya Sokolov', 'Anastasiya Kozlov', 'Ksenia Vinogradov', 'Yelizaveta Volkov', 'Yelena Popov', 'Inna Kuznetsov', 'Mariya Zaytesev', 'Elena Novikov', 'Marina Zaytesev', 'Viktoria Solovynov', 'Mariya Pavlov', 'Dariya Kuznetsov', 'Dariya Kozlov', 'Ksenia Semyonov', 'Yekaterina Solovynov', 'Anna Popov', 'Sofia Vorobyrov', 'Olga Vorobyrov', 'Yelizaveta Morozov', 'Sofia Lebedev', 'Dariya Solovynov', 'Polina Golyubev', 'Yelena Bogdanov', 'Agnes Nilsen', 'Emilie Eriksen', 'Aada Kristiansen', 'Ella Olsson', 'Emilia Hansson', 'Nora Nieminen', 'Venla Lindberg', 'Elin Mäkinen', 'Julie Pettersen', 'Emma Nieminen', 'Sara Laine', 'Ingrid Hansen', 'Malin Magnusson', 'Iida Olsson', 'Aada Halvorsen', 'Hanna Andreassen', 'Ella Johnsen', 'Anni Pettersen', 'Julia Lindberg', 'Emma Eriksen', 'Malin Nilsen', 'Emilia Hämäläinen', 'Julie Kristiansen', 'Emma Eriksson', 'Emma Olofsson', 'Linnea Larsen', 'Thea Pedersen', 'Ida Virtanen', 'Iida Andersson', 'Alice Olofsson', 'Sara Koskinen', 'Agnes Laine', 'Malin Svensson', 'Alva Jönsson', 'Sara Hansson', 'Nora Jensen', 'Thea Pettersson', 'Ida Nilsson', 'Nora Bengtsson', 'Alva Haugen', 'Emilie Virtanen', 'Ingrid Järvinen', 'Sara Olsen', 'Maja Pedersen', 'Wilma Karlsson', 'Alva Jensen', 'Hanna Berg', 'Ida Andersen', 'Alva Virtanen', 'Julia Gustavsson', 'Kristyna Torok', 'Tereza Prochazka', 'Tereza Gal', 'Stephanie Rebane', 'Nikola Kaasik', 'Natalie Luik', 'Anna Balazs', 'Anna Ivanova', 'Anna Kovacs', 'Adela Pokorny', 'Kristina Tamm', 'Tereza Szabo', 'Nikola Kocsis', 'Kristina Nemeth', 'Anna Torok', 'Katherine Luik', 'Kristyna Prochazka', 'Anna Ilves', 'Katherine Parn', 'Katherine Pinter', 'Natalie Toth', 'Tereza Vesely', 'Theresa Parn', 'Katerina Ilves', 'Anna Saar', 'Laura Ivanov', 'Katerina Kovacs', 'Nikola Torok', 'Stephanie Meszaros', 'Diana Rebane', 'Stephanie Nagy', 'Laura Luik', 'Diana Kovacs', 'Anna Vesely', 'Laura Simon', 'Karolina Kovacs', 'Kristyna Pinter', 'Adela Molnar', 'Kristyna Feher', 'Nikola Gal', 'Katerina Ivanov', 'Katerina Takacs', 'Adela Molnar', 'Aneta Koppel', 'Natalie Toth', 'Anna Ivanova', 'Anna Ivanov', 'Laura Parn', 'Aneta Balogh', 'Stephanie Magi', 'Anne Rauch', 'Lea Mendelsohn', 'Marie Smerdel', 'Anne Langen', 'Vanessa Steinberg', 'Laura Horn', 'Hannah Argelander', 'Laura Allbach', 'Sarah Decker', 'Anna Karbacher', 'Lea Worns', 'Katharina Baltz', 'Hannah Jakobs', 'Julia Merkler', 'Julia Morgenthau', 'Sarah Mittermayer', 'Vanessa Lacksz', 'Julia Ostendarp', 'Laura Mohr', 'Laura Grbech', 'Sofie Lehner', 'Marie Heymann', 'Sophie Konrad', 'Anna Schepfel', 'Lena Dehmer', 'Lea Treppel', 'Marie Schlauch', 'Vanessa Humbert', 'Anne Walma', 'Leah Bolm', 'Julia Stettin', 'Hannah Reizenstein', 'Leah Reber', 'Maria Isekenmeier', 'Katharina Klein', 'Lena Stiteller', 'Sofie Bittner', 'Leonie Lampl', 'Hannah Dorn', 'Emily Schoettlekotte', 'Anna Strege', 'Julia Ensslin', 'Sofie Hackl', 'Leah Kuehne', 'Lea Ahlmann', 'Emily Hartwig', 'Leah Schnell', 'Lea Pepke', 'Leonie Dreekmann', 'Lena Brink', 'Claudia Samari', 'Rosa Zuccaro', 'Rossanna Pininferino', 'Viola Bresciani', 'Michela Anguissola', 'Clarice Ruffo', 'Sempronia Ridolfi', 'Valeria Beccatini', 'Gina Gargallo', 'Candelora Destefani', 'Rosari Montella', 'Gaetana Fabroni', 'Monica Rosolino', 'Rea Trezza', 'Giulana Femia', 'Bina Milano', 'Crescenza Sapiara', 'Prescilla Bergomi', 'Evelina Valturri', 'Fiora Latini', 'Giovannina La', 'Nannetta Cimabue', 'Marianna Abruzzi', 'Cordelia Sanctis', 'Federica Chiesa', 'Domenica Colleano', 'Penelope Canova', 'Nannetta Brasco', 'Marcellina Della', 'Crescenza Carparelli', 'Prescilla Feroci', 'Giovanna Carangi', 'Evelina Bari', 'Gina Chinaglia', 'Teodora Pertorini', 'Angelina Nesta', 'Silvia Modica', 'Natalia Cipriani', 'Rosamonda Mangoni', 'Prescilla Nero', 'Clarice Spotelli', 'Venere Canalo', 'Ottavia Antuofermo', 'Vincenza Coppola', 'Lisa Cosini', 'Celestina Licci', 'Natalia Agosti', 'Carolina Cenacchi', 'Natalia Gobbi', 'Genoveffa Evola', 'Inez De La Cruz Barra', 'Irma Lujan Villa', 'Alejandra Iguiniz Raudon', 'Graciela Arguelles De', 'Grizelda Lima Trevino', 'Nailea Alva Herrera', 'Miranda Santa Tapia', 'Rosario Ipina Vigil', 'Nailea Archuleta Alcalde', 'Liliana De La Torre Sanchez', 'Ofelia Maldonado Gallardo', 'Viridiana De La Vega Santos', 'Thalia Rivera Garcia', 'Esmeralda Heras Vazquez', 'Eva-Yolanda Sanchez Nieto', 'Pitina Montano Ruz', 'Yizel Talamantes Esparza', 'Pitina Bernal Marquez', 'Flaca Vizcaino Pásquel', 'Myra Vallarta Loera', 'Hilda Veedor Soto', 'Dora Flores Alviso', 'Guadalupe Rodriguez Moya', 'Eva-Yolanda Goya Ocana', 'Dora Ramírez Medina', 'Bertha Barragan Rivas', 'Yanely Vivar Padilla', 'Lilia Arizpe González', 'Xochitl Anaya González', 'Angelica Noriega Colchado', 'Yvonne Coronado', 'Cierra López Ocana', 'Elvia Garibi Barra', 'Maricruz Moncada San', 'Materia Irolo Holguin', 'Marlina Irolo Santos', 'Leahonia Segura Vazquez', 'Christina Cabrera Salazar', 'Elodia Cabrera Zirion', 'AnaLeticia Ocana De La Pena', 'Aura Jaen Ramirez', 'Ana Losada Dolores', 'Gabriela Maria Buentello', 'Yaneisy Mendez Sisneros', 'Alejandra San Hinojosa', 'Leahonia Chavez Ramírez', 'Myra Ramírez Diaz', 'Juana Terreno Alcalde', 'Lucia Castulo Sámarez', 'Paula Ramirez Miranda', 'Leire Casero Palencia', 'Julia Bunuel Alkorta', 'Julia Enriquez Peyrera', 'Naroa Archuleta Borges', 'Alba Pinzon Cachon', 'Naroa Olmedo Huertas', 'Lucia Cruz Arnal', 'Naroa Oliva Duce', 'Paula Adega Preciosa', 'Maria Rebuelta Rozadilla', 'Ana Llosa Verdugo', 'June Banderas Parrera', 'Claudia Seabra Burrieza', 'Leire Morayta Suárez', 'Carla Véliz Carreno', 'Ana Marín Bolano', 'Carla Sierra Casamayor', 'Claudia Aguilar Miralles', 'Carla Marquina Montoro', 'Paula Cuéllar lanos', 'Marta Navarrete Montana', 'Sara Jara Zamorano', 'Julia Carballo Archuleta', 'Lucia Carbonell Jara', 'Laia Pardo Vazquez', 'Lucia Manjarin Gavilán', 'Andrea Albanese Cordova', 'Alba Quesada Basadre', 'Paula Pastrana Aristia', 'Marta Andrés Puiggros', 'Lucia Rosas Montez', 'Julia Arnal Casas', 'Laia Bustos Porras', 'Paula Brizuela Navarro', 'Carla Terreros Gaspar', 'Laura Lurdes Terezinho', 'Lucia Vera Obrégon', 'Laura Foa Velasco', 'Carla Masolta Carderas', 'Ana Gangotena liga', 'Maria Vales Rocha', 'Andrea Gibernau Villa', 'Leire Ferrer Perahia', 'Ana Montanes Yocemento', 'Lucia Murrieta Hurtado', 'Lucia Garbajosa Robaina', 'Alba Xalmiento Elizondo', 'Claudia Mayo Tortosa', 'Dias Temay', 'Verrine Campouyre', 'Marie-Line Rault', 'Emma Nivelon', 'Clair Poulet', 'Justine Castel', 'Céline Pingaud', 'Bluette Guillaut', 'Sylvanie Negret', 'Célia Le', 'Blandine Madalle', 'Alpais De Man', 'Nadine Malecot', 'Léontine Tarnaud', 'Claudette Wavelet', 'Nadia Bonaly', 'Marie-Line Garreau', 'Elzire Roufosse', 'Marie Mesmin', 'Florette Tourret', 'Vévé Favre', 'Galiana Caree', 'Reine Peugniez', 'Lillianne Daumoinx', 'Azalais Commandeur', 'Xaviére Chanony', 'Candide Gravel', 'EdméeEsmeralda Cailteux', 'Claudette Deneuve', 'Claire Marot', 'Felice De Villeneuve', 'Xaviére Berton', 'Bibiane Pinquier', 'Marie-Lou Laforet', 'Marie-Lou Simond', 'Camille Mallarmé', 'Solenne Clement', 'Rénée Laurent', 'Léonne Leydier', 'Nadette Bazille', 'Fanette Beautell', 'Grâce Naveau', 'Rose Clouet', 'Elionor Temry', 'Fanette Balibar', 'Amandine Mertillot', 'Céline Fivet', 'Annabelle se', 'Constance Nordin', 'Marie Pacaut', 'Selina Brown', 'Tambre Baker', 'Emily Parker', 'Clover Brown', 'Sarah Lee', 'Shirlyn Martin', 'Mary Cooper', 'Hillary Wood', 'Gaye Morris', 'Raleigh Allen', 'Honoria Harris', 'Chloe Thomas', 'Hayden Parker', 'Hayden Young', 'Zoe Scott', 'Almeda Green', 'Hollace Ward', 'Samantha Wood', 'Angela Mitchell', 'Jane Hill', 'Samantha Smith', 'Paisley Evans', 'Anne Moore', 'Gelsey Baker', 'Haile Smith', 'Topper Brown', 'Bridget Clarke', 'Laura Scott', 'Eudora Evans', 'Jennie Phillips', 'Shelly Wilson', 'Amy Smith', 'Clover Brown', 'Philomena Robinson', 'Susannah Thompson', 'Emily Davies', 'Zoe Taylor', 'Ruth King', 'Hermoine Lewis', 'Stacy Young', 'Eudora Williams', 'Tiffany Morris', 'Dorothea Wilson', 'Hollye Wood', 'Victoria Robinson', 'Darcie Harrison', 'Ashby Walker', 'Hermoine Wood', 'Midred Taylor', 'Cordelia Williams', 'Taylor Lewis', 'Emily Hyde', 'Layla Talbert', 'Sabrina Funk', 'Jennifer Chandler', 'Mariana Braden', 'Mikayla Krause', 'Lily Gonzales', 'Dakota Quintana', 'Kailey Mcnutt', 'Sophie Greenberg', 'Camila Lugo', 'Charlotte Berman', 'Payton Laughlin', 'Mackenzie Arthur', 'Danica Gaston', 'Dulce Dowd', 'Camille Shields', 'Isabelle Reardon', 'Karen Ferreira', 'Cheyenne Toney', 'Lila Mclean', 'Victoria Maples', 'Ella Castle', 'Lila Tomlinson', 'Serenity Fritz', 'Hannah Hurd', 'Sierra Moody', 'Crystal Guidry', 'Madelynn Reynolds', 'Sierra Moran', 'Jocelyn Garcia', 'Serena Gillis', 'Kate Carr', 'Layla Trammell', 'Hayley Helton', 'Katherine Fisher', 'Allison Vines', 'Reagan Winkler', 'Reese Sanders', 'Audrina Rico', 'Mckenzie Kiser', 'Makenzie Cain', 'Lily Wilson', 'Julissa Wilbur', 'Jazlyn Emery', 'Marissa Gomes', 'Paige Frederick', 'London Irving', 'Kylee Milton', 'DeShawn Jackson', 'Cedric Washington', 'Malcolm Johnson', 'Hakeem Robinson', 'Gabriel Mitchell', 'Malik Wright', 'Desmond Carter', 'Jayden Green', 'Anthony Walker', 'Xavier Turner', 'Ngo Tho', 'Pham Thinh', 'Nuygen Vien', 'Do Dein', 'Tran Dat', 'Ho Minh', 'Huynh Tuan', 'Do Dao', 'Pham Hoc', 'Duong Hai', 'Nguyen Hein', 'Vu Quan', 'Nguyen Dein', 'Huynh De', 'Phan Hein', 'Tran Sang', 'Pham An', 'Duong Dao', 'Vu Sang', 'Nuygen Quang', 'Ho Trong', 'Pham Quan', 'Nguyen Tho', 'Huynh Quan', 'Huynh Trong', 'Ngo Xuan', 'Phan Duong', 'Do Lanh', 'Dang Phuc', 'Le Sinh', 'Ngo Hein', 'Ho Son', 'Phan Bao', 'Phan Phuc', 'Bui Chinh', 'Dang Tho', 'Bui Vien', 'Huynh Xuan', 'Duong De', 'Le Sinh', 'Pham Thinh', 'Do Nhat', 'Nuygen Son', 'Nuygen Nhat', 'Do Lanh', 'Duong Bao', 'Do Nhat', 'Nguyen Minh', 'Ho An', 'Pham Tho', 'Jon Hyun-Gi', 'Chin Een-Ah', 'Jon Tae-Woo', 'Sun Young-Bum', 'Han Hong-Chol', 'Rim Soon', 'Jeung Sung-U', 'Sung Young-A', 'Ko Shin-Wa', 'Ma Mi-Hyan', 'Nam Tae-Yong', 'San Wook-Soon', 'Bang Gil-Su', 'Lim Sun', 'Son Man-Young', 'Yang Tai-Hee', 'So Sung-Ki', 'Ku Do-Keun', 'Sun Jang-Won', 'So Jung-Mo', 'Jung Ju-Yong', 'Park Shin-Cho', 'Yi Byung-Sang', 'Sun Dae-Hyun', 'Kwak Won', 'Jeon Tong-Lim', 'Ahn Seung-Hwa', 'Lee Mmoon-Joon', 'Suh Song-Gye', 'Jung So-Young', 'Shon Dae-Hee', 'San Han-Gyong', 'Chol Byung-Sang', 'Choi Myung-Dae', 'Chin Yong-Chul', 'Lim Jong-Kyu', 'Ra Shin-Cho', 'Pak Hyung-Seok', 'Jeon Yong-Ik', 'Ra Een-Ah', 'Ha Gi-Su', 'Chae Jung-Soo', 'Chol Shin-Cho', 'Yeo Yong-Ik', 'Hong Jung-Yoon', 'Chol Eunkyhung', 'Chu Jung-Soo', 'Gwang Ki-Young', 'Suh So-Young', 'Mok Chang-Hee', 'Yoshiteru Katsu', 'Ebizo Gensai', 'Yoritoki Shimakage', 'Razan Hosokawa', 'Otojiro Masuzoe', 'Hachigoro Saigo', 'Takeru Usami', 'Sozen Sakubara', 'Naozane Yamahata', 'Ebizo Hiyama', 'Subaru Sugisata', 'Yoson Yoemon', 'Eien Ohmiya', 'Kichibei Kawayama', 'Tsuginori Yamawaki', 'Namboku Satoh', 'Okakura Kamata', 'Keiji Nakasawa', 'Hyosuke Ohmiya', 'Tokugawa Jukodo', 'Chojiro Shige', 'Iemitsu Baisotei', 'Naomichi Makiguchi', 'Senzo Sakubara', 'Kojiro Sanjo', 'Taisuke Suzuki', 'Tetsuya Onohara', 'Shusake Fujimoto', 'Takane Nataga', 'Norihide Erizawa', 'Otojiro Watanbe', 'Rkuemon Shibata', 'Matsu Kazuyoshi', 'Makoto Nagatsuka', 'Yoshitsune Funabashi', 'Yeijiro Tsutaya', 'Yoshitaka Kusatsu', 'Yoshifumi Ozawa', 'Kazuki Nakada', 'Mitsuoki Sassa', 'Bussho Shirai', 'Koji Baba', 'Kijuro Ryusaki', 'Toyoshige Matsudaira', 'Toshiharu Yasutake', 'Hisamitsu Kinugasa', 'Korekiyo Katayanagi', 'Yasutake Izumi', 'Hyosuke Senmatsu', 'Torazo Kumasaka', 'Xu Tak-wai', 'He Bing-zhang', 'Ba Zhi-jun', 'Ming Li-zhi', 'Xun Lian-wei', 'Jianbua Zhao-jun', 'Cheng Ka-pa', 'Quian Kuan-tai', 'Ang Yic', 'Hua Dou-guan', 'Ban Dao-zi', 'Lew Qui-li', 'Toy Ke-yue', 'Chien Chia-liang', 'Shui Wan-fang', 'Lum Yu', 'Hann Xiao-mei', 'Qu You-de', 'Bi Hiang-ta', 'Pei Xue-liang', 'Xiu Min-zhong', 'Ng Ching', 'Chew Sun', 'Zhang Chua', 'Hu Xiao-xuan', 'Wan Shi-xian', 'Shuang Jing-bo', 'Shao Tzu-jao', 'Kim Mei', 'Xiao Hong-quan', 'Kun Mao', 'Lau Shi-lin', 'Lopan Tung', 'Chow Fu-quan', 'Fu Eng-hee', 'See-to Liangde', 'Chua Bing-zhong', 'Nan Yu-eh', 'Fa Kang-xi', 'Bi Kang', 'Kum Yen-ti', 'Lan Jin-song', 'Mah Ning', 'Joe Hsin-ta', 'Zhai Liang-hsi', 'Ngui Ming-an', 'Tong Ka-fei', 'Ye Jing-sheng', 'Wu Ye', 'Gao Yu-zeng', 'Bishwamba Badesha', 'Kasilingam Ranjan', 'Ankura Saikumar', 'Duleep Trilochana', 'Adhipa Baboor', 'Isat Mitul', 'Candraprabhava Giridhara', 'Jeet Deol', 'Hiranyadanta Sanyogita', 'Ajit Nathan', 'Durlabha Sandeep', 'Ajanidha Vish', 'Pradeep Visalakshi', 'Kukila Sophia', 'Aranya Rakala', 'Hridayangam Keerthana', 'Agnidatta Kesiraju', 'Dipita Udaya', 'Abhyavarsini Nirupama', 'Balayukta Neeharika', 'Guruswamy Kuruvilla', 'Kratumaya Varganti', 'Ahuka Ujjwal', 'Parvatiyar Diggavi', 'Kratvamagha Jagarlamudi', 'Devasru Gurinder', 'Purushothaman Sammeta', 'Bekura Setra', 'Naveen Ravipati', 'Sateesha Ranjana', 'Devarajan Tapas', 'Anudvega Sukarman', 'Surinder Panick', 'Amalamani Prasanta', 'Amprithu Goel', 'Jaikrta Motiwala', 'Bhavaniprasada Ranga', 'Dvimurdhan Nikesh', 'Anjana Nirmala', 'Animan Sagoo', 'Ganin Oruganti', 'Adhisa Seshadri', 'Dronacarya Srikrisna', 'Abhiramana Shaukat', 'Bhisaj Vineeta', 'Gagan Sukanya', 'Bisvajita Kambhatla', 'Khokhun Karim', 'Deb Srivathsan', 'Asecana Keshavan', 'Payam Khuzayn', 'Kian Diba', 'Yashar Nirumand', 'Zamyad Muhammadi', 'Parham Javadi', 'Esmail Sotoudeh', 'Allahyar Mehani', 'Ghaffar Alam', 'Vahhab Mualimi', 'Tooraj Mansur', 'Heydar Kazimi', 'Hooshyar Siyavushi', 'Puzhman Amirsadeghi', 'Payam Khuzayn', 'Iraj Bani-Sadr', 'Pezhman Rabani', 'Fardin Shahy', 'Niyoosha Bahonar', 'Nader Ansari', 'Farjad Khamenei', 'Kasra Daei', 'Sabbar Ameri', 'Hossein Afnan', 'Borzoo Afnan', 'Farshid Shafaq', "Manucher Mu/'ini", 'Nematollah Ansari', 'Armeen Haqiqat', 'Faramarz Abelzada', 'Farhang Roohizadegan', 'Manucher Ettehadieh', 'Behnam Shahriar', 'Niyoosha Dastghayb', 'Mahyar Keshuapad', 'Arman Mansur', 'Jafar Dihqani', 'Farzeen Qoli', 'Hedayat Pakravan', 'Fath Eftekhari', 'Safa Qashqai', 'Sanjar Talavi', 'Siavash Sabbah', 'Farjad Najafi', 'Bijan Bakhtavar', 'Kaveh Javadi', 'Borzoo Al-Doleh', 'Hootan Shahriar', 'Mahyar Yaqtin', 'Ebi Nouri', 'Tahmouress Roohizadegan', 'Kwame Contee', 'Boikai Gebrezghi', 'George Jalloh', 'Ansu Diallo', 'Fokra Otieno', 'Siafa Berhane', 'Abu Abraha', 'Saah Diallo', 'Oso Chahine', 'Saa Ballo', 'Tamba Sylla', 'Sidiki Dia', 'Kofa Traore', 'Momolu Fofana', 'Zanele Cisse', 'Lamie Toure', 'Kofi Osei', 'Varney Contee', 'Foday Owiti', 'Varney Gueye', 'Boimah Diallo', 'Kwame Sarr', 'Zanele Sow', 'Toyuwa Diop', 'Sarh Sesay', 'Armah Gashi', 'Goma Michieka', 'Trokon Wangai', 'Boikai Sesay', 'Marbue Okoro', 'Saah Contee', 'Solo Otieno', 'Solo Ballo', 'Foday Gebrezghi', 'Kandaki Hagos', 'Siafa Ballo', 'Lamie Mensah', 'Siafa Hailesellasie', 'Amu Sarr', 'Kofi Sesay', 'Foday Diallo', 'Kofi Yeboah', 'Ansu Traore', 'Roger Fall', 'Amu Tewoldeberhan', 'Wleh Hailesellasie', 'Massala Onyango', 'Toyuwa Gueye', 'Foday Sesay', 'Siafa Araya', 'Sharbal Levi', 'George Ashkenazi', 'Fadi Gabai', 'Amir Dahan', 'Yosef Friedman', 'Yehonatan Cohen', 'Itai Shapira', 'Julian Shapira', 'Yuval Moshe', 'Majd Chazan', 'Noam Azulai', 'Ido Peretz', 'Yehonatan Gabai', 'Yuval Peretz', 'Bashar Biton', 'Julian David', 'Yuval Ochion', 'Elias Yosef', 'Yosef Segel', 'Yosef Azulai', 'Daniel Gabai', 'Yuval Dahan', 'Ido Katz', 'Majd Dahan', 'Yehonatan Tal', 'Daniel Adrei', 'Yosef Peretz', 'Daniel Biton', 'Daniel Klein', 'Mosheh Klein', 'Uri Chen', 'Majd Biton', 'Itai Biton', 'David Malcah', 'Majd Segel', 'Yuval Peretz', 'Daniel Friedman', 'Mosheh Avraham', 'Ido Gabai', 'Yuval Malcah', 'Itai Cohen', 'Baasal Levi', 'Sharbal Shapira', 'Yehonatan Adrei', 'Uri Chazan', 'Amit Levin', 'Amir Klein', 'Fadi Shapira', 'Amit Segel', 'Amir Azulai', 'Arabi Amir', 'Hossam Naguib', 'Mohammed Youssef', 'Ahmad Hakki', 'Abdu Allam', 'Yahiya Mostafa', 'Hosni Mahfouz', 'Ahmed Salam', 'Fathi Aly', 'Samir Tarek', 'Arabi Iamam', 'Mohammed Medhat', 'Muhammed Nabih', 'Fathi El Hindi', 'Yasser Iamam', 'Ahmed Al-Assel', 'Hosni Hazem', 'Arabi Al Gahary', 'Gamal Tarek', 'Abdu Saad', 'Hossam Ghandour', 'Gamal Al Effendi', 'Roushdy Tarek', 'Arabi Ghandour', 'Addulla Aly', 'Samir Tarek', 'Boutros Reis', 'Sami Shabana', 'Taha Tamer', 'Hassan Sabry', 'Roushdy Habachi', 'Mohammed Saadauri', 'Ahmad Al Gahary', 'Shadi Sindhom', 'Yahya Shehata', 'Tamer El Sayed', 'Abdu Saad', 'Ahmed Reis', 'Taha Habachi', 'Abdel Naguib', 'Roushdy Shehata', 'Boutros Tulun', 'Hosni Habachi', 'Tamer Sabry', 'Yahya Samy', 'Nader El Hindi', 'Sef Shehata', 'Alheib Nabih', 'Ahmed Sindhom', 'Moneim Aly', 'Azzah Al-Karachi', 'Nimat Alam', 'Wijdan Al-Zeid', 'Rawdah Miandad', 'Taroob Najafi', 'Hayfa Zarincheh', 'Mufidah Al-Mowaled', 'Nazirah Abbas', 'Alia Zanjani', 'Amal Shah', 'Nashwa Asad', 'Anbar Ahmed', 'Abra Al-Dalharni', 'Suhair Meshkat', 'Layla Sabiri', 'Imtithal Hassan', 'Rabiah Jayhoon-Ahmed', 'Sameeha Afnan', 'Ghusoon Al-Dwairan', 'Madeeha Nasir', 'Adiba Siham', 'Radeyah Khuzayn', 'Adilah Al-bin-Bagheri', 'Ilham Daei', 'Sumaiya Mahomed', 'Baheera Anwar', 'Basmah Imami', 'Fawziyyah Al-Mubi', 'Asiya Inshan', 'Radwa Al-Shahrani', 'Banan Hassan', 'Numa Jahangir', 'Bushra Al-Muwalid', 'Ghadah Abelzada', 'Maysa Nasir', 'Asima Khushkhu', 'Maizah Jahangir', 'Sharifah Ghazali-Ghulam', 'May Elouahabu', 'Basimah Al-Thynniyan', 'Shahrazad Azmat', 'Nabihah Al-Jaber', 'Kulthum Fahandizh', 'Fatimah Muhammadi', 'Hooda Al-Mehalel', 'Barika Al-Dalharni', 'Almas Sumech', 'Azhar Nezam', 'Sumaiya Kordiyeh', 'Bariah Shafquat', 'Fuad Mumtazi', 'Salaam Imami', 'Jaabir Zebramani', 'Haaroon Yaqtin', 'Shafeeq Nissar', 'Ghasaan Ghatary', 'Abbas Salahuddin', 'Shareef Bakahasab', 'Imraan Mushtaq', 'Zaahid Ta’anari', 'Raatib Baraniq', 'Kareem Sumech', 'Fareed Ta’anari', 'Taamir Khadim', 'Salman Hejazi', 'Tamam Misbahi', 'Irfaan Muqimi', 'Khaldoon Pashazadeh', 'Ahmad Qashqai', 'Amr Farooq', 'Marzouq Asir', 'Abaan Elahi', 'Shihab Pervej', 'Marzouq Asgapur', 'Labeeb Al-Deayea', 'Yasaar Mushtaq-bin-Mohammad', 'Ahmad Hussain', 'Haatim Karim', 'Imaad Sotoudeh', 'Ashraf Mahomed', 'Afeef Abelzada', 'Mutazz Hushmand', 'Naadir Khatami', 'Maazin Maro', 'Khayr Khandil', "Nu/'man Billah", 'Ullah Bani-Sadr', 'Waliyullah Karbaschi', 'Jawad Husain', 'Zakariya Pahlavi', 'Taymullah Rana', 'Zakariya Ahmed', 'Ali Abdul-Hafeez', 'Khair Rabani', "Ma'awiya Al-Jaber", 'Razaaq Hafeez', 'Majeed Dihmubidi', 'Ameen Ishraqi', 'Kareem Ghurani', 'Aalee Wazir', 'Cagdas Demir', 'Kemal Mirza', 'Bulent Mansur', 'Cemil Kaya', 'Ekrem Baykal', 'Necmettin Yilmaz', 'Erol Mirza', 'Devlet Korkmaz', 'Erdogan Baykal', 'Abay Pekkan', 'Saim Ateş', 'Bagdas Ozturk', 'Murat Ozturk', 'Bilgi Erbil', 'Kemal Yılmaz', 'Cuneyd Kurt', 'Cuneyd Demir', 'Esen Oyal', 'Elif Mirza', 'Baris Aybar', 'Canpolat Kırca', 'Bagdas Erbil', 'Cagdas Erdoğan', 'Erdal Celik', 'Halil Baykal', 'Husrev Aksu', 'Okan Altıntop', 'Necmi Mirza', 'Arda Kaya', 'Tunc Sezgin', 'Alev Kurt', 'Derya Seven', 'Necmettin Altıntop', 'Bagdas Seven', 'Armagan Değirmencioğlu', 'Emre Sahin', 'Kemal Emanetoğlu', 'Esen Baykal', 'Ali Celik', 'Bilgi Pekkan', 'Arda Altıntop', 'Kayahan Değirmencioğlu', 'Erdogan Seven', 'Ekrem Mirza', 'Ali Erdoğan', 'Abbad Ozdemir', 'Cengiz Pekkan', 'Mehmet Mansur', 'Bayezid Emir', 'Devlet Aydin', 'Anatoly Vasilyev', 'Mikhail Kozlov', 'Anatoly Kozlov', 'Yegor Kozlov', 'Nikolai Vasilyev', 'Aleksey Morozov', 'Igor Vorobyrov', 'Igor Vasilyev', 'Aleksey Novikov', 'Alexsandr Zaytesev', 'Ivan Petrov', 'Dmitriy Pavlov', 'Aleksey Kozlov', 'Alexei Sokolov', 'Anatoly Golyubev', 'Artyom Kuznetsov', 'Dmitriy Bogdanov', 'Anatoly Solovynov', 'Alexei Vorobyrov', 'Vladimir Semyonov', 'Artyom Ivanov', 'Nikolai Vinogradov', 'Andrey Popov', 'Daniil Ivanov', 'Ivan Bogdanov', 'Ivan Petrov', 'Aleksey Petrov', 'Dmitriy Vinogradov', 'Aleksey Pavlov', 'Dmitriy Golyubev', 'Aleksey Golyubev', 'Yegor Novikov', 'Daniil Kozlov', 'Aleksey Semyonov', 'Nikolai Kuznetsov', 'Yegor Vinogradov', 'Andrey Bogdanov', 'Artyom Vorobyrov', 'Maxim Bogdanov', 'Maxim Kuznetsov', 'Vladimir Popov', 'Aleksey Ivanov', 'Vladimir Bogdanov', 'Igor Vasilyev', 'Mikhail Kozlov', 'Alexsandr Ivanov', 'Mikhail Ivanov', 'Anatoly Novikov', 'Nikolai Solovynov', 'Artyom Kuznetsov', 'Aleksi Järvinen', 'Kristian Järvinen', 'Juho Andersen', 'Joona Johannessen', 'Henrik Andersson', 'Elias Bengtsson', 'Eetu Heikkinen', 'Oscar Johnsen', 'Tobias Gustafsson', 'Henrik Larsen', 'Joona Hagen', 'Elias Pettersen', 'Henrik Järvinen', 'Lauri Laine', 'William Karlsson', 'Tobias Karlsen', 'Juho Lindberg', 'Veeti Nilsson', 'Arttu Andersson', 'Juho Persson', 'Joona Gustavsson', 'William Johansson', 'Matias Mäkelä', 'Emil Pettersen', 'Tobias Järvinen', 'Joona Johannessen', 'Arttu Johansen', 'Trond Kristiansen', 'William Olofsson', 'Veeti Magnusson', 'Isak Eriksen', 'Matias Lindberg', 'Joona Jönsson', 'Isak Jensen', 'Alexander Laine', 'Alexander Jönsson', 'Viktor Kristiansen', 'William Bengtsson', 'Arttu Jensen', 'Viktor Mäkinen', 'Filip Andersen', 'Matias Hagen', 'Lauri Andersson', 'Filip Andersen', 'Aleksi Nieminen', 'Leevi Heikkinen', 'Eetu Hansen', 'Lucas Svensson', 'Kristian Petersson', 'Elias Halvorsen', 'Matej Szucs', 'Jonas Dvorak', 'Martin Lakatos', 'Adam Kis', 'Robin Ilves', 'Jakub Nemec', 'Adam Hovath', 'Robin Fodor', 'Robin Takacs', 'Robin Luik', 'Sander Juhasz', 'Krzysztof Pinter', 'Matej Balazs', 'Vytautas Fodor', 'Antanas Nagy', 'Sander Szabo', 'Adam Sepp', 'Marek Oja', 'Vytautas Fekete', 'Filip Toth', 'Juozas Prochazka', 'Andrzej Kask', 'Markus Rebane', 'Lukas Simon', 'Tomasz Sepp', 'Jan Ilves', 'Jan Takacs', 'Piotr Oja', 'Andrzej Nemec', 'Markus Novotny', 'Aleksander Nemec', 'Tomas Novak', 'Adam Koppel', 'Jakub Marek', 'Filip Pokorny', 'Matej Simon', 'Sander Olah', 'Martin Feher', 'Tomas Novotny', 'Kevin Meszaros', 'Jakub Hovath', 'Andrzej horak', 'Tomas Balogh', 'Robin Ivanova', 'Jakub Szilagyi', 'Pawel Ivanova', 'Jonas Kovacs', 'Jonas Kis', 'Jan Kocsis', 'Jonas horak', 'Lukas Nerlinger', 'Felix Arnold', 'Daniel Wohlgemuth', 'Lukas Arnold', 'Tim Fichter', 'Maximilian Taube', 'Lucas Settlemeyer', 'Tim Klah', 'Michael Wleber', 'Simon Diffenderffer', 'Luca Tölle', 'Florian Kessing', 'David Bauchennss', 'Simon Neumann', 'Felix Ruehe', 'Alexander Cullmann', 'Florian Rosenfeld', 'Lukas Schleisher', 'Maximilian Meise', 'Lucas Huporkorny', 'Michael Mettler', 'Lucas Meise', 'Daniel Bastnagel', 'Alexander Goettinger', 'Jonas Goehr', 'Lucas Welter', 'Maximilian Kisslinger', 'Fabian Stuiber', 'Lucas Ahlmann', 'Felix Krauthammer', 'Luca Schnell', 'Lukas Barna', 'Fabian Guendler', 'Paul Möhler', 'Felix Fries', 'Maximilian Krabbe', 'Florian Schonlebe', 'Paul Krugman', 'Fabian Gutensohn', 'Leon Kahl', 'Tim Classen', "Paul Von/' Ettingshausen", 'Alexander Zoepfel', 'Lukas Singer', 'Felix Winschermann', 'Luca Wolfert', 'Leon Buser', 'Alexander Heidingsfelder', 'David Drum', 'David Stuckenschmidt', 'Tim Jaekle', 'Alexander Binus', 'Julian Meerapfels', 'Jonas Bethmann', 'Tim Schaenzer', 'Lukas Herbst', 'Tim Zurbrugg', 'Lukas Scragenheim', 'Julian Sackel', 'Leon Schramm', 'Simon Kreuger', 'David Thul', 'Julian Weinschrott', 'Paul Schenk', 'Simon Tammerk', 'Felix Zech', 'Simon Heinkel', 'Daniel Steinberg', 'Felix Dittmar', 'Lucas Goltz', 'Simon Erlang', 'Lucas Kota', 'Lukas Volker', 'Leon Muessig', 'Florian Creuzfeldt', 'Fabian Goetz', 'Daniel Krugman', 'Lukas Gaebler', 'Michael Dieskau', 'Lukas Rumpelmeier', 'Maximilian Erndt', 'Luca Stoltz', 'Tim Grueter', 'Tim Harnock', 'Maximilian Husmann', 'Lukas Koehneman', 'Alexander Arentz', 'Julian Hü', 'Michael Edelmann', 'Lukas Binus', 'Felix Sundhaussen', 'Lukas Donis', 'David Frankenstein', 'Fabian Buchalter', 'Felix Merstorff', 'Maximilian Riederer', 'Felix Dill', 'Maximilian Wleber', 'Lukas Schlomer', 'Daniel Grobler', 'Leonardo Scaduto', 'Siro Freni', 'Michelino Galli', 'Nardo Della', 'Gianetto Mosca', 'Edmondo Randi', 'Corrado Porcellato', 'Desiderio Pantoliano', 'Massimiliano Galasso', 'Cosimo Delvecchio', 'Prospero Viotti', 'Stentore Tuzzi', 'Dionigi Candeloro', 'Leandro Zanetti', 'Federico Fagatti', 'Reinardo Banditelli', 'Giordano Meo', 'Lucano Perpoli', 'Arturo Garafaio', 'Antonio Majarelli', 'Saverio Carbone', 'Achille Savonarola', 'Gian-Lorenzo Arnoldi', 'Orlando Solari', 'Vinfrido Gerratana', 'Vittorio Perani', 'Ottavio Pisani', 'Celemente Altichioro', 'Gionata Bagio', 'Cosimo Cuoco', 'Gustavo Pittoni', 'Ulrico Pisano', 'Leone Catone', 'Daniele Finucene', 'Michelangelo Lusieri', 'Siro Matarazzo', 'Nino Pistone', 'Gustavo Pesci', 'Dario Gabrieli', 'Leonardo Boscocuro', 'Giampeitro Belloli', 'Raulo Lagorio', 'Raulo Labriola', 'Teobaldo Boccasino', 'Alesio Sgattoni', 'Corradino Cuzzocrea', 'Alfredo Grasso', 'Annunciato Mazzocchi', 'Desiderio Magherini', 'Durante Bernardi', 'Jorge Dorantes Oviedo', 'Jorge Cortina Sada', 'Santiago Vallejo Vigil', 'Jorge Castilla Rivas', 'Omar Saso Bustos', 'Antonio Guerrero Bustos', 'Antonio Vallarta Fernandez De Hijar', 'Humberto De La Barra Salas', 'Quique Horcasitas Tenerio', 'Javier Pacheco De La Barra', 'Sergio Colio Figueroa', 'Pancho Avila Soto', 'Enrique Pacheco Guerra', 'Crespin Olivas Bernal', 'Rafael Manero Mendez', 'Juaquine Serrano Baragan', 'Elbanco Puente Esparza', 'Heraclio Palacio Moctezuma', 'Jorge Zirion Colio', 'Elieis Raudon Clavijero', 'Juan-Carlos Pizarro De La Peza', 'Victor Leyva Moncada', 'Antonio Romo', 'Roman Vazquez Marquez', 'Otilio Vela Rodríguez', 'Luis-Fernando Montejano Pásquel', 'Paulino Esparza Avila', 'Juan-Carlos Goya Unzaga', 'Jose Castilla Almazan', 'Ruben Pico Jurado', 'Santiago Coronado Terrero', 'Eru Hinojosa Saenz', 'Cruz Jorge Verdugo', 'Crespin Herrera Padilla', 'Jorge Santa San', 'Izek Quintana Víllánueva', 'Quique Benavides Vigil', 'Flaco Hurtado Pacheco', 'Carlos Marquez Blas', 'Jesus-Ernesto Zirion Castano', 'Erubiel Braganza Losada', 'Miguel Canedo Contreras', 'Heraclio Almesto Bocanegra', 'Raul Celis Romero', 'Heraclio Quintana Montemayor', 'Antonio Cruz Montoya', 'Spiro Santa Ramírez', 'Luz Chavez Guerra', 'Pancho Zamora Tapia', 'Gabriel Bastidas Garibay', 'Pol Rozadilla Sahagún', 'Javier Teofilo Sotelo', 'Marc Matutes Terranova', 'Sergio Sert Zubero', 'Jordi Canura Zamarilla', 'Alejandro Galdarres Questi', 'Hugo de Almagro Nascimento', 'Javier Aristzabal Fonseca', 'Carlos Carranzo Vaquero', 'Marc Saer Montaña', 'David lara Yegros', 'Pau Xovi Mena', 'Joel Mauri Martel', 'Carlos Cuervo Salvatella', 'Daniel Hoyos Santiago', 'Sergio Castillo Zerbino', 'Marc Valente Rengifo', 'Pablo Espinosa Zamorano', 'David Vivas Cuesta', 'Pablo Seda Robledo', 'Sergio Diaz Velloso', 'Jordi Rionda Polanco', 'Daniel Meligeni Pascual', 'David Pareds Bermudez', 'Sergio Tello Pedroso', 'Daniel Pareds Holguin', 'Pau Puron Cordero', 'Alejandro Andrés Pizzaro', 'Alejandro Perez Diaz', 'Pol Amavisca Tuscarora', 'Sergio Morales Ginez', 'Gerard Mayo Mendiluce', 'Pol Coelho Chiamulera', 'Pau Perez Reto', 'Alejandro Alemao Carabali', 'Hugo Tomas Albanese', 'Alejandro Elizondo Guerro', 'Alejandro Escuda Pastrana', 'Javier Becerril Falla', 'Pablo Valcárcel Bernaldez', 'Pablo Ferrado Robledo', 'Marc Meira Pimental', 'David Tapia Marroquín', 'Sergio Medina Beloki', 'Adrián Mayor Fiz', 'Joel Arnal Cordobes', 'Joel Nadol Barón', 'Daniel Castrilli Vallejo', 'David Polanco Sarsola', 'Joel Mauri Cadero', 'Simo Bartolone', 'Azalbertz Bouchez', 'Patric Cocteau', 'Adehémar Frechette', 'Donatien Bernadaux', 'Corin Tauziat', 'Émile Lelouch', 'Alban Gervex', 'Ebratz Deharo', 'Johan Pigeonnier', 'Fortuné Bessy', 'Alas Oudinot', 'Alas Cuvier', 'Guis Lise', 'Benöit Grignon', 'Raolf Loret', 'Johans Lebouc', 'Rainautz Braudel', 'Didier CastaignaDe_Castang', 'Franchot Cincebeaux', 'Catulle Muselier', 'Camille Peizerat', 'Gaidon Dabry', 'Renato Perrey', 'Léonce Huet', 'Romain Chartoire', 'Hugues Marnet', 'Lozoïc Lafenestre', 'Corneille Braconnier', 'Enricx Curutchet', 'Rainiers Serusclat', 'Amerig Degas', 'Rotger Peugniez', 'Lambert Ducros', 'Enzo Chereau', 'Ancelmes Ballu', 'Ancelmetz Le', 'Mamert Duphot', 'Vincent Saint-Andre', 'Pierre-Marie Favreau', 'Espanel Bottanet', 'Rotger Boulez', 'Amaldrics Grumiaux', 'Corin Alphand', 'Ricals Brissaud', 'Fortuné Cretier', 'Guiraut Trantinon', 'Sevis Thenardier', 'Rostains Besanceney', 'Rogier Grandmont', 'William Johnson', 'Marcus Taylor', 'Aldan Thomas', 'Shel Ward', 'Gordy Robinson', 'Jacob King', 'Booth Wood', 'Jarod Phillips', 'Phillip Evans', 'Truly Wilson', 'Humphrey Anderson', 'Edwin Taylor', 'Everett White', 'Barton Cooper', 'Jett Martin', 'Gore Brown', 'Gent Phillips', 'Ferris Mitchell', 'Fairly Wood', 'Ray Wood', 'Laurence Robinson', 'Shelley Williams', 'Shelley Davis', 'Eric Mitchell', 'Nigel Watson', 'Felton Evans', 'Andy Smith', 'Cedric Evans', 'Ferris Jones', 'Ishmael Morris', 'Kemp Patel', 'Frayne Phillips', 'Clarence King', 'Frasier Wright', 'Karston Taylor', 'Knox White', 'Gardner Moore', 'Synclair Walker', 'Jesse Turner', 'Barnabas Scott', 'Bond Roberts', 'Maitland Baker', 'Benjamin Lee', 'Hewitt Wright', 'David Patel', 'Andrew Smith', 'Albert Morgan', 'Jarod Baker', 'Fulbright Edwards', 'Shelley Walker', 'Declan Hunter', 'Phillip Ponce', 'Tyler Hobbs', 'Rylan Ulrich', 'Elijah Castro', 'Hudson Shaffer', 'Connor Harlow', 'Alex Holbrook', 'Alex Perdue', 'Kenneth Wyman', 'Antonio Haley', 'Caiden Himes', 'Isaiah Paige', 'Julio Gunn', 'Timothy Echols', 'Grant Ojeda', 'Daniel Mott', 'Derek Elias', 'Ismael Royal', 'Lorenzo Babb', 'Ryder Main', 'Hudson Lim', 'Manuel Heard', 'Patrick Angel', 'Christian Bravo', 'Maxwell Kenney', 'Julian Emery', 'Hunter Shell', 'Axel Cowart', 'Brett Sheppard', 'Axel Lyles', 'Maximilian Gomez', 'Braeden Orr', 'Finn Grove', 'Zackary Hurley', 'Kaiden Harrison', 'Braden Lombardo', 'Josue Mcwhorter', 'Dominick Ragland', 'Cesar Ruth', 'Edwin Dobson', 'Jakob Goff', 'Stephen Busby', 'Manuel Delatorre', 'Miles Trimble', 'Elliott Borden', 'Cohen Braswell', 'Gavin Sampson', 'Damien Braun', 'Leonardo Boykin']; // Math.random chooses random number between 0 - 1 * 2221 (length of array)
// ~~ cuts all fractional digits
// variable T captures type of item, then use T again as return type

function choose(items) {
  return items[~~(Math.random() * items.length)];
}
const name = () => choose(names);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CommentListClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CommentListClass */ "./components/CommentListClass.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Comment */ "./models/Comment.ts");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
var _jsxFileName = "/Users/frederickchoe/Projects/React/web-kokanee-fred-choe/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => {
  return {
    root: {
      fontFamily: '"IBM Plex Sans", Arial, Helvetica',
      width: '100%',
      maxWidth: '100vw',
      margin: 'auto'
    },
    hero: {
      margin: 'auto',
      textAlign: 'center'
    },
    media: {
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        width: '50%',
        margin: 'auto'
      }
    },
    description: {
      width: '80%',
      margin: 'auto',
      textAlign: 'center'
    }
  };
});

const Home = () => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    align: "center",
    gutterBottom: true,
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Welcome to the Kokanee Exploratory Project!")), __jsx("div", {
    className: classes.hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("img", {
    className: classes.media,
    alt: "Kokanee Creek is also known as Depot Creek",
    src: "https://www.waterfallsnorthwest.com/pictures/Depot_Creek_Falls_167.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), __jsx("div", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "The project was named after the beautiful creek because its uncanny resemblance to the national treasure. The comments below were left by visitors who were filled with awe; comments are appended and displayed as they are received.")))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    orientation: "horizontal",
    variant: "fullWidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_components_CommentListClass__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialComments: Object(_models_Comment__WEBPACK_IMPORTED_MODULE_6__["makeComments"])(10),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/frederickchoe/Projects/React/web-kokanee-fred-choe/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "lorem-ipsum":
/*!******************************!*\
  !*** external "lorem-ipsum" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lorem-ipsum");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-virtualized-auto-sizer":
/*!***********************************************!*\
  !*** external "react-virtualized-auto-sizer" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-virtualized-auto-sizer");

/***/ }),

/***/ "react-window":
/*!*******************************!*\
  !*** external "react-window" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-window");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map