"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable react/prop-types */ \n\n\n\n\nfunction Header(param) {\n    let { title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"header-padding\",\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n        lineNumber: 8,\n        columnNumber: 12\n    }, this);\n}\n_c = Header;\nvar __N_SSP = true;\nfunction Account(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"account-table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: [\n                                        user.firstName,\n                                        \" \",\n                                        user.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Phone:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.phone\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Address:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.address1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.address2\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"City:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.city\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"State:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.state\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Zip:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.zip\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = Account;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNUO0FBQ0Y7QUFDb0I7QUFDSjtBQUV4QyxTQUFTSyxPQUFPLEtBQVMsRUFBRTtRQUFYLEVBQUVDLE1BQUssRUFBRSxHQUFUO0lBQ1oscUJBQU8sOERBQUNDO1FBQUdDLFdBQVU7a0JBQWtCRixRQUFRQSxRQUFRLGVBQWU7Ozs7OztBQUN4RTtLQUZPRDs7QUFZTSxTQUFTSSxRQUFRQyxLQUFLLEVBQUU7SUFFbkMscUJBQ0k7OzBCQUNJLDhEQUFDTDtnQkFBT0MsT0FBTTs7Ozs7OzBCQUNkLDhEQUFDSztnQkFBSUgsV0FBVTswQkFDWCw0RUFBQ0k7b0JBQU1KLFdBQVU7O3NDQUNiLDhEQUFDSzs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzt3Q0FBSUMsS0FBS0MsU0FBUzt3Q0FBQzt3Q0FBRUQsS0FBS0UsUUFBUTs7Ozs7Ozs7Ozs7OztzQ0FFdkMsOERBQUNKOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUlDLEtBQUtHLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FFbkIsOERBQUNMOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUlDLEtBQUtJLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FFbkIsOERBQUNOOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUlDLEtBQUtLLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FFdEIsOERBQUNQOzs4Q0FDRyw4REFBQ0M7Ozs7OzhDQUNELDhEQUFDQTs4Q0FBSUMsS0FBS00sUUFBUTs7Ozs7Ozs7Ozs7O3NDQUV0Qiw4REFBQ1I7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBSUMsS0FBS08sSUFBSTs7Ozs7Ozs7Ozs7O3NDQUVsQiw4REFBQ1Q7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBSUMsS0FBS1EsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ1Y7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBSUMsS0FBS1MsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQyxDQUFDO01BNUN1QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC5qcz8yZTg2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXBhZGRpbmdcIj57dGl0bGUgPyB0aXRsZSA6ICdEZWZhdWx0IHRpdGxlJ308L2gxPjtcclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgdG9rZW46JyArIGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW4pXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1NzUzL2FwaS9Vc2VyL0FjY291bnQnLCB7IGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW59fSlcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4ge3Byb3BzOiB7dXNlcn19XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50KHByb3BzKSB7XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiQWNjb3VudFwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjY291bnQtaW5mbyc+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSdhY2NvdW50LXRhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OYW1lOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5maXJzdE5hbWV9IHt1c2VyLmxhc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FbWFpbDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBob25lOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5waG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QWRkcmVzczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuYWRkcmVzczF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5hZGRyZXNzMn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2l0eTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuY2l0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdGU6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLnN0YXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5aaXA6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLnppcH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC8+IFxyXG4gICAgKVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTV1IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJBY2NvdW50IiwicHJvcHMiLCJkaXYiLCJ0YWJsZSIsInRyIiwidGQiLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJzdGF0ZSIsInppcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account.js\n"));

/***/ })

});