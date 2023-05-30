"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable react/prop-types */ \n\nfunction Header({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"header-styles\",\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\nfunction Coupons(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Coupons\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"coupon-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: props.data.couponList.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"coupon\",\n                            children: data.couponText\n                        }, data.couponID, false, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\nfunction Blurb() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"blurb\",\n        children: \" Welcome! Check out our menu!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://danspizza-api.azurewebsites.net/api/Coupon/Get\");\n    const coupons = await res.json();\n    //const coupons = {\"couponList\":[{\"couponID\":1,\"couponText\":\"Large Pizza and 2-Liter Coke for $20\"},{\"couponID\":2,\"couponText\":\"Two Calzones for $15\"}]}\n    return {\n        props: {\n            coupons\n        }\n    };\n};\nfunction HomePage(props) {\n    console.log(\"index rendered.\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Dan's Pizza\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Blurb, {}, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Coupons, {\n                data: props.coupons\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDVjtBQUV6QixTQUFTQyxPQUFPLEVBQUVDLE1BQUssRUFBRSxFQUFFO0lBQ3pCLHFCQUFPLDhEQUFDQztRQUFHQyxXQUFVO2tCQUFpQkYsUUFBUUEsUUFBUSxlQUFlOzs7Ozs7QUFDdkU7QUFFQSxTQUFTRyxRQUFRQyxLQUFLLEVBQUU7SUFFdEIscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7Z0JBQUlILFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFJSCxXQUFVOzhCQUNaRSxNQUFNRyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUNGLHFCQUMxQiw4REFBQ0c7NEJBQXNCUixXQUFVO3NDQUFVSyxLQUFLSSxVQUFVOzJCQUFsREosS0FBS0ssUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0FBRUEsU0FBU0MsUUFBUTtJQUNmLHFCQUNFLDhEQUFDSDtRQUFFUixXQUFVO2tCQUFROzs7Ozs7QUFFekI7QUFFTyxNQUFNWSxpQkFBaUIsVUFBWTtJQUN4QyxNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTUMsVUFBVSxNQUFNRixJQUFJRyxJQUFJO0lBQzlCLHdKQUF3SjtJQUN4SixPQUFPO1FBQUNkLE9BQU87WUFBQ2E7UUFBTztJQUFDO0FBQzFCLEVBQUM7QUFHYyxTQUFTRSxTQUFTZixLQUFLLEVBQUU7SUFFdENnQixRQUFRQyxHQUFHLENBQUM7SUFDWixxQkFDRTs7MEJBQ0UsOERBQUN0QjtnQkFBT0MsT0FBTTs7Ozs7OzBCQUNkLDhEQUFDYTs7Ozs7MEJBQ0QsOERBQUNWO2dCQUFRSSxNQUFNSCxNQUFNYSxPQUFPOzs7Ozs7OztBQUdsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cImhlYWRlci1zdHlsZXNcIj57dGl0bGUgPyB0aXRsZSA6ICdEZWZhdWx0IHRpdGxlJ308L2gxPjtcclxufVxyXG5cclxuZnVuY3Rpb24gQ291cG9ucyhwcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPkNvdXBvbnM8L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY291cG9uLWNvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5jb3Vwb25MaXN0Lm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e2RhdGEuY291cG9uSUR9IGNsYXNzTmFtZT0nY291cG9uJz57ZGF0YS5jb3Vwb25UZXh0fTwvcD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQmx1cmIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxwIGNsYXNzTmFtZT0nYmx1cmInPiBXZWxjb21lISBDaGVjayBvdXQgb3VyIG1lbnUhPC9wPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2RhbnNwaXp6YS1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL0NvdXBvbi9HZXQnKVxyXG4gIGNvbnN0IGNvdXBvbnMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy9jb25zdCBjb3Vwb25zID0ge1wiY291cG9uTGlzdFwiOlt7XCJjb3Vwb25JRFwiOjEsXCJjb3Vwb25UZXh0XCI6XCJMYXJnZSBQaXp6YSBhbmQgMi1MaXRlciBDb2tlIGZvciAkMjBcIn0se1wiY291cG9uSURcIjoyLFwiY291cG9uVGV4dFwiOlwiVHdvIENhbHpvbmVzIGZvciAkMTVcIn1dfVxyXG4gIHJldHVybiB7cHJvcHM6IHtjb3Vwb25zfX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7ICBcclxuXHJcbiAgY29uc29sZS5sb2coJ2luZGV4IHJlbmRlcmVkLicpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJEYW4ncyBQaXp6YVwiLz5cclxuICAgICAgPEJsdXJiIC8+XHJcbiAgICAgIDxDb3Vwb25zIGRhdGE9e3Byb3BzLmNvdXBvbnN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsImNsYXNzTmFtZSIsIkNvdXBvbnMiLCJwcm9wcyIsImRpdiIsImgzIiwiZGF0YSIsImNvdXBvbkxpc3QiLCJtYXAiLCJwIiwiY291cG9uVGV4dCIsImNvdXBvbklEIiwiQmx1cmIiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwiY291cG9ucyIsImpzb24iLCJIb21lUGFnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();