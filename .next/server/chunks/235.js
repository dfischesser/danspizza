"use strict";
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 8037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ GetPrice)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);


function GetPrice(props) {
    let isOrderPage = false;
    if (props.isOrderPage) {
        isOrderPage = true;
    }
    let subtotal = 0;
    props.currentCartItems.map((foodItem)=>{
        subtotal += foodItem.customizeOptions.map((cartOption)=>cartOption.optionItems.reduce((a, b)=>a + b.price, 0)).reduce((a, b)=>a + b, 0);
        console.log("stotal: " + foodItem.customizeOptions.map((cartOption)=>cartOption.optionItems.reduce((a, b)=>a + b.price, 0)).reduce((a, b)=>a + b, 0));
    });
    //food item price
    const tax = subtotal * .0725;
    const total = subtotal + tax;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    "Subtotal:  ",
                    subtotal.toLocaleString("us-US", {
                        style: "currency",
                        currency: "USD"
                    })
                ]
            }),
            isOrderPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    "Tax (7.25%): ",
                    tax.toLocaleString("us-US", {
                        style: "currency",
                        currency: "USD"
                    }),
                    " "
                ]
            }),
            isOrderPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    "Total: ",
                    total.toLocaleString("us-US", {
                        style: "currency",
                        currency: "USD"
                    }),
                    " "
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports FoodItemWithPrice, OrderMap */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4317);
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4904);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__);













 // Grid version 2
function FoodItemWithPrice(props) {
    console.log("fooditemwithprice foodItem: " + JSON.stringify(props));
    const price = props.FoodItem.customizeOptions.map((cartOption)=>cartOption.optionItems.reduce((a, b)=>a + b.price, 0)).reduce((a, b)=>a + b, 0);
    return price.toLocaleString("us-US", {
        style: "currency",
        currency: "USD"
    });
}
function OrderMap(props) {
    let isOrderPage = false;
    if (props.isOrderPage) {
        isOrderPage = true;
    }
    console.log("cart current cart items: " + JSON.stringify(props.currentCartItems));
    if (props.currentCartItems.length > 0) {
        return /*#__PURE__*/ _jsx(List, {
            sx: {
                p: 1
            },
            children: props.currentCartItems.map((foodItem)=>/*#__PURE__*/ _jsx(_Fragment, {
                    children: /*#__PURE__*/ _jsxs(ListItem, {
                        disablePadding: true,
                        sx: {
                            textAlign: "center",
                            borderRadius: 1,
                            boxShadow: 3,
                            bgcolor: "#fafaf5"
                        },
                        children: [
                            /*#__PURE__*/ _jsx(ListItemText, {
                                primary: /*#__PURE__*/ _jsxs(Grid, {
                                    container: true,
                                    rowSpacing: 1,
                                    columnSpacing: 2,
                                    alignItems: "center",
                                    sx: {
                                        margin: "0 auto"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(Grid, {
                                            xs: 10,
                                            children: /*#__PURE__*/ _jsx(Typography, {
                                                noWrap: true,
                                                textAlign: "left",
                                                children: foodItem.foodName
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(Grid, {
                                            xs: 2,
                                            children: /*#__PURE__*/ _jsx(IconButton, {
                                                sx: {
                                                    border: "1px solid",
                                                    boxShadow: 3,
                                                    color: "error"
                                                },
                                                size: "small",
                                                disableGutters: true,
                                                variant: "contained",
                                                onClick: ()=>props.removeItem(foodItem),
                                                children: /*#__PURE__*/ _jsx(CloseIcon, {
                                                    fontSize: "small",
                                                    sx: {
                                                        bgcolor: "#a2747b",
                                                        color: "success",
                                                        bgcolor: "black"
                                                    },
                                                    disableGutters: true,
                                                    disablePadding: true
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(Grid, {
                                            xs: 9,
                                            xsOffset: 1,
                                            children: /*#__PURE__*/ _jsx(Box, {
                                                sx: {
                                                    textAlign: "left"
                                                },
                                                children: /*#__PURE__*/ _jsx(Typography, {
                                                    noWrap: true,
                                                    children: foodItem.customizeOptions.map((cartItemCustomize)=>cartItemCustomize.optionItems.map((customizeOptionItem)=>customizeOptionItem.customizeOptionItem).join(", ")).join(", ")
                                                })
                                            })
                                        })
                                    ]
                                }),
                                secondary: /*#__PURE__*/ _jsx(Box, {
                                    sx: {
                                        textAlign: "right"
                                    },
                                    children: /*#__PURE__*/ _jsx(Grid, {
                                        container: true,
                                        spacing: 2,
                                        children: /*#__PURE__*/ _jsx(Grid, {
                                            xs: 10,
                                            children: /*#__PURE__*/ _jsx(Box, {
                                                textAlign: "right",
                                                children: /*#__PURE__*/ _jsx(FoodItemWithPrice, {
                                                    FoodItem: foodItem
                                                })
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx(Divider, {})
                        ]
                    }, foodItem.cartItemID)
                }))
        });
    }
}
{}

/***/ })

};
;