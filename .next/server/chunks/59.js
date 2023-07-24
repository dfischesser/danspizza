"use strict";
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 8059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ fetchy)
/* harmony export */ });
async function fetchy(url, method, postData, headers) {
    //console.log('url: ' + url) 
    //console.log('method: ' + method) 
    //console.log('postData: ' + JSON.stringify(postData)) 
    console.log("headers: " + JSON.stringify(headers));
    console.log("1");
    const res = await fetch(url, {
        method: method,
        body: JSON.stringify(postData),
        headers: headers,
        credentials: "include"
    });
    if (!res.ok) {
        console.log("2");
        const text = await res.text();
        throw new Error(text);
    }
    console.log("fetchy headers: ");
    console.log(...res.headers);
    return res.json();
}


/***/ })

};
;