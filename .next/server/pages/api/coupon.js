"use strict";
(() => {
var exports = {};
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 9165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
// pages/api/user
//http://192.168.86.31:5753/Coupon/Get
//https://supernatural-quotes-api.cyclic.app/quotes/random
async function getData() {
  const response = await fetch('http://localhost/api/Coupon/Get');
  const jsonData = await response.json();
  return jsonData;
}
async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9165));
module.exports = __webpack_exports__;

})();