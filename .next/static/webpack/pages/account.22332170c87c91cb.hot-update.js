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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header(param) {\n    let { title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"header-padding\",\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n        lineNumber: 8,\n        columnNumber: 12\n    }, this);\n}\n_c = Header;\nvar __N_SSP = true;\n// export async function fetchums(url, token) {\n//     console.log('token: ' + token)\n//     const res = await fetch(url, {\n//         headers: {\n//             'Content-Type': 'application/json',\n//             'Authorization': 'Bearer ' + token\n//         }\n//     });\n//     if (!res.ok) {\n//         throw new Error(res.statusText);\n//     }\n//     return res.json()\n// }\nfunction Account(props) {\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //const [user, setUser] = useState(null)\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setToken(document.cookie.split(\"=\")[1]);\n    }, [\n        token\n    ]);\n    // if (!post) {\n    //     setUser(fetchums('http://localhost:5753/api/User/Account', token).then(data => data).catch(error => console.log('error: ' + error)))\n    //     setPost(true)\n    // }\n    const user = props.user;\n    console.log(\"hmmtoken: \" + token);\n    console.log(\"user: \" + JSON.stringify(user));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            token && user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"account-table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: [\n                                        user.firstName,\n                                        \" \",\n                                        user.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Phone:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.phone\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Address:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.address1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.address2\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"City:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.city\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"State:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.state\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Zip:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.zip\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\pizza\\\\pages\\\\account.js\",\n                lineNumber: 54,\n                columnNumber: 31\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Account, \"JmCBuZWKJkkmyVbPG637rIOOaZk=\");\n_c1 = Account;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFtQzs7QUFDVDtBQUNGO0FBQ29CO0FBQ0o7QUFFeEMsU0FBU0ssT0FBTyxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDtJQUNaLHFCQUFPLDhEQUFDQztRQUFHQyxXQUFVO2tCQUFrQkYsUUFBUUEsUUFBUSxlQUFlOzs7Ozs7QUFDeEU7S0FGT0Q7O0FBV1QsK0NBQStDO0FBQy9DLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFDakQsWUFBWTtBQUNaLFVBQVU7QUFDVixxQkFBcUI7QUFDckIsMkNBQTJDO0FBQzNDLFFBQVE7QUFDUix3QkFBd0I7QUFFeEIsSUFBSTtBQUdXLFNBQVNJLFFBQVFDLEtBQUssRUFBRTs7SUFDbkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsd0NBQXdDO0lBQ3hDLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pTLFNBQVNHLFNBQVNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzFDLEdBQUU7UUFBQ047S0FBTTtJQUVULGVBQWU7SUFDZiwySUFBMkk7SUFDM0ksb0JBQW9CO0lBQ3BCLElBQUk7SUFDSixNQUFNTyxPQUFPUixNQUFNUSxJQUFJO0lBRXZCQyxRQUFRQyxHQUFHLENBQUMsZUFBZVQ7SUFDM0JRLFFBQVFDLEdBQUcsQ0FBQyxXQUFXQyxLQUFLQyxTQUFTLENBQUNKO0lBRXRDLHFCQUNJOzswQkFDSSw4REFBQ2I7Z0JBQU9DLE9BQU07Ozs7OztZQUNiSyxTQUFTTyxzQkFBUSw4REFBQ0s7Z0JBQUlmLFdBQVU7MEJBQzdCLDRFQUFDZ0I7b0JBQU1oQixXQUFVOztzQ0FDYiw4REFBQ2lCOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7O3dDQUFJUixLQUFLUyxTQUFTO3dDQUFDO3dDQUFFVCxLQUFLVSxRQUFROzs7Ozs7Ozs7Ozs7O3NDQUV2Qyw4REFBQ0g7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBSVIsS0FBS1csS0FBSzs7Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ0o7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBSVIsS0FBS1ksS0FBSzs7Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ0w7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBSVIsS0FBS2EsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUV0Qiw4REFBQ047OzhDQUNHLDhEQUFDQzs7Ozs7OENBQ0QsOERBQUNBOzhDQUFJUixLQUFLYyxRQUFROzs7Ozs7Ozs7Ozs7c0NBRXRCLDhEQUFDUDs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFJUixLQUFLZSxJQUFJOzs7Ozs7Ozs7Ozs7c0NBRWxCLDhEQUFDUjs7OENBQ0csOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFJUixLQUFLZ0IsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ1Q7OzhDQUNHLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBSVIsS0FBS2lCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckMsQ0FBQztHQTNEdUIxQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50LmpzPzJlODYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJoZWFkZXItcGFkZGluZ1wiPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+O1xyXG4gIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coanNvbi5zdHJpbmdpZnkoY29udGV4dCkpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1NzUzL2FwaS9Vc2VyL0FjY291bnQnLCB7IGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sm9kSFJ3T2k4dmMyTm9aVzFoY3k1NGJXeHpiMkZ3TG05eVp5OTNjeTh5TURBMUx6QTFMMmxrWlc1MGFYUjVMMk5zWVdsdGN5OWxiV0ZwYkdGa1pISmxjM01pT2lKa1ptbHpZMmhsYzNObGNrQm5iV0ZwYkM1amIyMGlMQ0pvZEhSd09pOHZjMk5vWlcxaGN5NXRhV055YjNOdlpuUXVZMjl0TDNkekx6SXdNRGd2TURZdmFXUmxiblJwZEhrdlkyeGhhVzF6TDNKdmJHVWlPaUpWYzJWeUlpd2laWGh3SWpveE5qZzFOREV5TlRRNExDSnBjM01pT2lKb2RIUndPaTh2Ykc5allXeG9iM04wT2pVM05UTXZJaXdpWVhWa0lqb2lhSFIwY0RvdkwyeHZZMkZzYUc5emREbzFOelV6THlKOS5aZ1RXS3g3SG1nVWtXYmxlNGFLeUc1azA4SzlGQ21lOWdjUGZ6MzNHakJVJ319KVxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiB7cHJvcHM6IHt1c2VyfX1cclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNodW1zKHVybCwgdG9rZW4pIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIHRva2VuKVxyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbi8vICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vICAgICBpZiAoIXJlcy5vaykge1xyXG4vLyAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCk7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG5cclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnQocHJvcHMpIHtcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUobnVsbClcclxuICAgIC8vY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUb2tlbihkb2N1bWVudC5jb29raWUuc3BsaXQoJz0nKVsxXSlcclxuICAgIH0sW3Rva2VuXSlcclxuICAgIFxyXG4gICAgLy8gaWYgKCFwb3N0KSB7XHJcbiAgICAvLyAgICAgc2V0VXNlcihmZXRjaHVtcygnaHR0cDovL2xvY2FsaG9zdDo1NzUzL2FwaS9Vc2VyL0FjY291bnQnLCB0b2tlbikudGhlbihkYXRhID0+IGRhdGEpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcjogJyArIGVycm9yKSkpXHJcbiAgICAvLyAgICAgc2V0UG9zdCh0cnVlKVxyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgdXNlciA9IHByb3BzLnVzZXJcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ2htbXRva2VuOiAnICsgdG9rZW4pXHJcbiAgICBjb25zb2xlLmxvZygndXNlcjogJyArIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT1cIkFjY291bnRcIi8+XHJcbiAgICAgICAgICAgIHt0b2tlbiAmJiB1c2VyICYmIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LWluZm8nPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nYWNjb3VudC10YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TmFtZTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuZmlyc3ROYW1lfSB7dXNlci5sYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RW1haWw6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5QaG9uZTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIucGhvbmV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFkZHJlc3M6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmFkZHJlc3MxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuYWRkcmVzczJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNpdHk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmNpdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlN0YXRlOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5zdGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+WmlwOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci56aXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+IH1cclxuICAgICAgICA8Lz4gXHJcbiAgICApXHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNXUiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsImNsYXNzTmFtZSIsIkFjY291bnQiLCJwcm9wcyIsInRva2VuIiwic2V0VG9rZW4iLCJwb3N0Iiwic2V0UG9zdCIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJ0YWJsZSIsInRyIiwidGQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInN0YXRlIiwiemlwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account.js\n"));

/***/ })

});