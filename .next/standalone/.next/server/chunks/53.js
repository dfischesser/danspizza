"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 8053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NextLinkComposed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);







// Add support for the sx prop for consistency with the other branches.
const Anchor = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)("a")({});
const NextLinkComposed = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function NextLinkComposed(props, ref) {
    const { to , linkAs , replace , scroll , shallow , prefetch , legacyBehavior =true , locale , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: to,
        prefetch: prefetch,
        as: linkAs,
        replace: replace,
        scroll: scroll,
        shallow: shallow,
        passHref: true,
        locale: locale,
        legacyBehavior: legacyBehavior,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
            ref: ref,
            ...other
        })
    });
});
// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const Link = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function Link(props, ref) {
    const { activeClassName ="active" , as , className: classNameProps , href , legacyBehavior , linkAs: linkAsProp , locale , noLinkStyle , prefetch , replace , role , scroll , shallow , ...other } = props;
    const router = useRouter();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName
    });
    const isExternal = typeof href === "string" && (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);
    if (isExternal) {
        if (noLinkStyle) {
            return /*#__PURE__*/ _jsx(Anchor, {
                className: className,
                href: href,
                ref: ref,
                ...other
            });
        }
        return /*#__PURE__*/ _jsx(MuiLink, {
            className: className,
            href: href,
            ref: ref,
            ...other
        });
    }
    const linkAs = linkAsProp || as;
    const nextjsProps = {
        to: href,
        linkAs,
        replace,
        scroll,
        shallow,
        prefetch,
        legacyBehavior,
        locale
    };
    if (noLinkStyle) {
        return /*#__PURE__*/ _jsx(NextLinkComposed, {
            className: className,
            ref: ref,
            ...nextjsProps,
            ...other
        });
    }
    return /*#__PURE__*/ _jsx(MuiLink, {
        component: NextLinkComposed,
        className: className,
        ref: ref,
        ...nextjsProps,
        ...other
    });
})));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Link)));


/***/ })

};
;