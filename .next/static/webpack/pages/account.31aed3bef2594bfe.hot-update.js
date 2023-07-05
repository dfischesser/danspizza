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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; },\n/* harmony export */   \"fetchums\": function() { return /* binding */ fetchums; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header(param) {\n    let { title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"header-padding\",\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n        lineNumber: 8,\n        columnNumber: 12\n    }, this);\n}\n_c = Header;\n// export const getServerSideProps = async (context) => {\n//     const res = await fetch('http://localhost:5753/api/User/Account', {headers: {Authentication: 'Bearer ' + props.token}})\n//     const user = await res.json()\n//     return {props: {user}}\n// }\nasync function fetchums(url, token) {\n    console.log(\"token: \" + token);\n    const res = await fetch(url, {\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \" + token\n        }\n    });\n    if (!res.ok) {\n        throw new Error(res.statusText);\n    }\n    return res.json();\n}\nfunction Account(props) {\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setToken(document.cookie.split(\"=\")[1]);\n    }, [\n        token\n    ]);\n    let user;\n    fetchums(\"http://localhost:5753/api/User/Account\", token).then((data)=>{\n        console.log(\"data: \" + data);\n        user = data;\n    });\n    console.log(\"hmmtoken: \" + token);\n    console.log(\"user: \" + user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"account-table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: [\n                                        user.firstName,\n                                        \" \",\n                                        user.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Phone:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.phone\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Address:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.address1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.address2\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"City:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.city\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"State:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.state\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Zip:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.zip\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                lineNumber: 47,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Account, \"SSLzquenZQzOMzU62DrezfOo2pU=\");\n_c1 = Account;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFtQzs7QUFDVDtBQUNGO0FBQ29CO0FBQ0o7QUFFeEMsU0FBU0ssT0FBTyxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDtJQUNaLHFCQUFPLDhEQUFDQztRQUFHQyxXQUFVO2tCQUFrQkYsUUFBUUEsUUFBUSxlQUFlOzs7Ozs7QUFDeEU7S0FGT0Q7QUFJVCx5REFBeUQ7QUFFekQsOEhBQThIO0FBQzlILG9DQUFvQztBQUNwQyw2QkFBNkI7QUFDN0IsSUFBSTtBQUVHLGVBQWVJLFNBQVNDLEdBQUcsRUFBRUMsS0FBSyxFQUFFO0lBQ3ZDQyxRQUFRQyxHQUFHLENBQUMsWUFBWUY7SUFDeEIsTUFBTUcsTUFBTSxNQUFNQyxNQUFNTCxLQUFLO1FBQ3pCTSxTQUFTO1lBQ0wsZ0JBQWdCO1lBQ2hCLGlCQUFpQixZQUFZTDtRQUNqQztJQUNKO0lBQ0EsSUFBSSxDQUFDRyxJQUFJRyxFQUFFLEVBQUU7UUFDVCxNQUFNLElBQUlDLE1BQU1KLElBQUlLLFVBQVUsRUFBRTtJQUNwQyxDQUFDO0lBQ0QsT0FBT0wsSUFBSU0sSUFBSTtBQUVuQixDQUFDO0FBR2MsU0FBU0MsUUFBUUMsS0FBSyxFQUFFOztJQUNuQyxNQUFNLENBQUNYLE9BQU9ZLFNBQVMsR0FBR3JCLCtDQUFRQSxDQUFDLElBQUk7SUFDdkNDLGdEQUFTQSxDQUFDLElBQU07UUFDWm9CLFNBQVNDLFNBQVNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzFDLEdBQUU7UUFBQ2Y7S0FBTTtJQUNULElBQUlnQjtJQUNKbEIsU0FBUywwQ0FBMENFLE9BQU9pQixJQUFJLENBQUMsQ0FBQ0MsT0FBUztRQUFDakIsUUFBUUMsR0FBRyxDQUFDLFdBQVdnQjtRQUFPRixPQUFPRTtJQUFJO0lBQ25IakIsUUFBUUMsR0FBRyxDQUFDLGVBQWVGO0lBQzNCQyxRQUFRQyxHQUFHLENBQUMsV0FBV2M7SUFFdkIscUJBQ0k7OzBCQUNJLDhEQUFDdEI7Z0JBQU9DLE9BQU07Ozs7OztZQUNiSyx1QkFBUyw4REFBQ21CO2dCQUFJdEIsV0FBVTswQkFDckIsNEVBQUN1QjtvQkFBTXZCLFdBQVU7O3NDQUNiLDhEQUFDd0I7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs7d0NBQUlOLEtBQUtPLFNBQVM7d0NBQUM7d0NBQUVQLEtBQUtRLFFBQVE7Ozs7Ozs7Ozs7Ozs7c0NBRXZDLDhEQUFDSDs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFJTixLQUFLUyxLQUFLOzs7Ozs7Ozs7Ozs7c0NBRW5CLDhEQUFDSjs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFJTixLQUFLVSxLQUFLOzs7Ozs7Ozs7Ozs7c0NBRW5CLDhEQUFDTDs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFJTixLQUFLVyxRQUFROzs7Ozs7Ozs7Ozs7c0NBRXRCLDhEQUFDTjs7OENBQ0csOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ0E7OENBQUlOLEtBQUtZLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FFdEIsOERBQUNQOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUlOLEtBQUthLElBQUk7Ozs7Ozs7Ozs7OztzQ0FFbEIsOERBQUNSOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUlOLEtBQUtjLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FFbkIsOERBQUNUOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUlOLEtBQUtlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckMsQ0FBQztHQXBEdUJyQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50LmpzPzJlODYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItcGFkZGluZ1wiPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+O1xyXG4gIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgIFxyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTc1My9hcGkvVXNlci9BY2NvdW50Jywge2hlYWRlcnM6IHtBdXRoZW50aWNhdGlvbjogJ0JlYXJlciAnICsgcHJvcHMudG9rZW59fSlcclxuLy8gICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgICByZXR1cm4ge3Byb3BzOiB7dXNlcn19XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaHVtcyh1cmwsIHRva2VuKSB7XHJcbiAgICBjb25zb2xlLmxvZygndG9rZW46ICcgKyB0b2tlbilcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5qc29uKClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50KHByb3BzKSB7XHJcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnPScpWzFdKVxyXG4gICAgfSxbdG9rZW5dKVxyXG4gICAgbGV0IHVzZXJcclxuICAgIGZldGNodW1zKCdodHRwOi8vbG9jYWxob3N0OjU3NTMvYXBpL1VzZXIvQWNjb3VudCcsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7Y29uc29sZS5sb2coJ2RhdGE6ICcgKyBkYXRhKTsgdXNlciA9IGRhdGF9KTtcclxuICAgIGNvbnNvbGUubG9nKCdobW10b2tlbjogJyArIHRva2VuKVxyXG4gICAgY29uc29sZS5sb2coJ3VzZXI6ICcgKyB1c2VyKVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT1cIkFjY291bnRcIi8+XHJcbiAgICAgICAgICAgIHt0b2tlbiAmJiA8ZGl2IGNsYXNzTmFtZT0nYWNjb3VudC1pbmZvJz5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J2FjY291bnQtdGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5hbWU6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVtYWlsOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGhvbmU6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLnBob25lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BZGRyZXNzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5hZGRyZXNzMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmFkZHJlc3MyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DaXR5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5jaXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdGF0ZTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuc3RhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlppcDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuemlwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PiB9XHJcbiAgICAgICAgPC8+IFxyXG4gICAgKVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTV1IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJmZXRjaHVtcyIsInVybCIsInRva2VuIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsIkFjY291bnQiLCJwcm9wcyIsInNldFRva2VuIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInVzZXIiLCJ0aGVuIiwiZGF0YSIsImRpdiIsInRhYmxlIiwidHIiLCJ0ZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5Iiwic3RhdGUiLCJ6aXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account.js\n"));

/***/ })

});