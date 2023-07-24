"use strict";
(() => {
var exports = {};
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 3465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FormatOrders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1361);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable react/prop-types */ 




function Header({ title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "header-styles",
        children: title ? title : "Default title"
    });
}
const getServerSideProps = async (context)=>{
    console.log("server token:" + JSON.stringify(context.req.cookies.token));
    const token = context.req.cookies.token;
    try {
        const res = await fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/Order/Latest", {
            headers: {
                "Authorization": "Bearer " + context.req.cookies.token
            }
        });
        //const res = await fetch('http://localhost:18080/api/Order/Latest', { headers: { 'content-Type': 'application/json' }, credentials: 'include'}) //{ 'content-Type': 'application/json' }
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const orders = await res.json();
        console.log("active orders: " + JSON.stringify(orders.activeOrders));
        return {
            props: {
                orders
            }
        };
    } catch (error) {
        console.log("Error: " + error.message);
    }
};
function Manage(props) {
    console.log("manage orders rendered.");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        textAlign: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                title: "Manage Orders"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    mx: "auto",
                    width: "100%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormatOrders__WEBPACK_IMPORTED_MODULE_2__/* .FormatOrders */ .TM, {
                    userOrders: props.orders.activeOrders,
                    orderCount: props.orders.orderCount,
                    manage: true
                })
            })
        ]
    });
}


/***/ }),

/***/ 5074:
/***/ ((module) => {

module.exports = require("@mui/material/Backdrop");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 216:
/***/ ((module) => {

module.exports = require("@mui/material/Pagination");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 441:
/***/ ((module) => {

module.exports = require("@mui/material/Skeleton");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 4904:
/***/ ((module) => {

module.exports = require("@mui/material/Unstable_Grid2");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [59,361], () => (__webpack_exec__(3465)));
module.exports = __webpack_exports__;

})();