"use strict";
(() => {
var exports = {};
exports.id = 941;
exports.ids = [941,59];
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


/***/ }),

/***/ 5047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostOrder": () => (/* binding */ PostOrder),
/* harmony export */   "default": () => (/* binding */ Order),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_orderMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1611);
/* harmony import */ var _components_getPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8037);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_fetchy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8059);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4904);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5732);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_21__);
/* eslint-disable react/prop-types */ 





 // Grid version 2
















const CartItem = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_16___default()))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fafaf5",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        borderRadius: 1,
        boxShadow: 3
    }));
const Submit = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_16___default()))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fafaf5",
        ...theme.typography.body2,
        textAlign: "center",
        color: theme.palette.text.secondary,
        boxShadow: "none"
    }));
function Header({ title  }) {
    return /*#__PURE__*/ _jsx("h1", {
        className: "header-padding",
        children: title ? title : "Default title"
    });
}
function OptionsWithPrice(props) {
    //console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price = props.option.optionItems.reduce((a, b)=>a + b.price, 0);
    if (price !== 0) {
        return price.toLocaleString("us-US", {
            style: "currency",
            currency: "USD"
        });
    }
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == " "){
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function PostOrder(props) {
    const formatData = {
        orderItems: props.currentCartItems.map((item)=>({
                orderItem: item
            }))
    };
    const test = props.currentCartItems;
    console.log("formatted order data: " + JSON.stringify(test) + ". cookie: " + getCookie("token"));
    const token = getCookie("token");
    const headers = {
        "Content-Type": "application/json"
    };
    console.log("headers: " + JSON.stringify(headers));
    (0,_components_fetchy__WEBPACK_IMPORTED_MODULE_22__/* .fetchy */ .X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/Order/Post", "POST", test, headers).then((data)=>{
        console.log("handleFetch data: " + JSON.stringify(data));
        props.setOrderPosted(false);
        props.setOrderPlaced(true);
        props.setHasOrder(false);
        props.removeAllItems();
    }).catch((error)=>{
        //console.log('handleFetch error: ' + JSON.stringify(JSON.parse(error.message).errors))
        //console.log('handleFetch error: ' + JSON.parse(error.message).errors)
        console.log("handleFetch error: " + error);
        props.setOrderPosted(false);
    //props.setError(JSON.stringify(JSON.parse(error.message).errors))
    });
}
const getServerSideProps = async (context)=>{
    console.log("server token:" + context.req.cookies.token);
    try {
        const res = await fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/User/Account", {
            headers: {
                "Authorization": "Bearer " + context.req.cookies.token
            }
        });
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const user = await res.json();
        console.log("user: " + JSON.stringify(user));
        return {
            props: {
                user
            }
        };
    } catch (error) {
        console.log("Error: " + error.message);
    }
};
function FoodItemWithPrice(props) {
    //console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price = props.foodItem.customizeOptions.map((cartOption)=>cartOption.optionItems.reduce((a, b)=>a + b.price, 0)).reduce((a, b)=>a + b, 0);
    return price.toLocaleString("us-US", {
        style: "currency",
        currency: "USD"
    });
}
function Order(props) {
    const [orderPosted, setOrderPosted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [orderPlaced, setOrderPlaced] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [expandItem, setExpandItem] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    console.log("orderPlaced: " + orderPlaced);
    console.log("order cart items: " + JSON.stringify(props.currentCartItems));
    console.log("user: " + JSON.stringify(props.user));
    let defaultOption;
    if (props.currentCartItems.flatMap((item)=>item.customizeOptions).find((option)=>option.isDefaultOption)) {
        defaultOption = props.currentCartItems.flatMap((item)=>item.customizeOptions).find((option)=>option.isDefaultOption).optionID;
    } else {
        defaultOption = "";
    }
    const handleExpand = (cartItemID)=>{
        console.log("handling expand. id: " + JSON.stringify(cartItemID));
        if (cartItemID === expandItem) {
            setExpandItem(0);
        } else {
            setExpandItem(cartItemID);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
        container: true,
        rowSpacing: 1,
        columnSpacing: 2,
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                xs: 12,
                textAlign: "center",
                sx: {
                    mt: 5
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                    variant: "h5",
                    component: "h2",
                    sx: {
                        fontWeight: 500
                    },
                    children: "Order"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                xs: 12,
                textAlign: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_20___default()), {
                    component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_16___default()),
                    sx: {
                        width: "100%",
                        mx: "auto",
                        my: 5,
                        maxWidth: 400,
                        bgcolor: "#fafaf5"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Table__WEBPACK_IMPORTED_MODULE_17___default()), {
                        size: "small",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_18___default()), {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            children: "Name:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            children: [
                                                props.user.firstName,
                                                " ",
                                                props.user.lastName
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            children: "Email:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            children: props.user.email
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            children: "Phone:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            children: props.user.phone
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                xs: 12,
                sm: 6,
                sx: {
                    mx: "auto"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                    spacing: 1,
                    justifyContent: "space-between",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                            sx: {
                                p: 1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                                spacing: 1,
                                children: props.currentCartItems.map((foodItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartItem, {
                                            onClick: ()=>handleExpand(foodItem.cartItemID),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                container: true,
                                                width: 300,
                                                spacing: 1,
                                                alignItems: "center",
                                                sx: {
                                                    margin: "0 auto"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        xs: 10,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                            component: "div",
                                                            textAlign: "left",
                                                            fontWeight: 500,
                                                            children: [
                                                                foodItem.foodName,
                                                                " ",
                                                                foodItem.customizeOptions.find((cartItemCustomize)=>defaultOption === cartItemCustomize.optionID) && "(" + foodItem.customizeOptions.find((cartItemCustomize)=>defaultOption === cartItemCustomize.optionID).optionItems.find((x)=>x).customizeOptionItem + ")"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        xs: 12,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                disablePadding: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                    primary: expandItem !== foodItem.cartItemID && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                        spacing: 1,
                                                                        container: true,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                                xs: 9,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                    noWrap: true,
                                                                                    children: foodItem.customizeOptions.filter((cartItemCustomize)=>defaultOption !== cartItemCustomize.optionID).flatMap((option)=>option.optionItems.filter((customizeOptionItem)=>customizeOptionItem.customizeOptionItem !== option.optionName && customizeOptionItem.customizeOptionItem).map((x)=>x.customizeOptionItem)).join(", ")
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                                xs: 2,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FoodItemWithPrice, {
                                                                                        foodItem: foodItem
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }, foodItem.cartItemID),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                in: expandItem === foodItem.cartItemID,
                                                                timeout: "auto",
                                                                unmountOnExit: true,
                                                                children: foodItem.customizeOptions.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                        disablePadding: true,
                                                                        dense: true,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            sx: {
                                                                                bgcolor: "background.light",
                                                                                boxShadow: 3,
                                                                                mb: 1,
                                                                                borderRadius: .5
                                                                            },
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                                primary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                    direction: "row",
                                                                                    justifyContent: "space-between",
                                                                                    width: "100%",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                            component: "div",
                                                                                            fontSize: ".75rem",
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                                                direction: "row",
                                                                                                justifyContent: "space-between",
                                                                                                width: "100%",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                                        minWidth: 75,
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                                                            children: option.optionName === foodItem.foodName ? "Base Item: " : option.optionName + ": "
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                                                        fontSize: ".75rem",
                                                                                                        children: option.optionItems.map((x)=>x.customizeOptionItem).join(", ")
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                                                                                            component: "div",
                                                                                            fontSize: ".75rem",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OptionsWithPrice, {
                                                                                                option: option
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    }, option.optionID))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }, foodItem.cartItemID))
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5___default()), {
                xs: 12,
                textAlign: "center",
                children: [
                    !orderPlaced && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_getPrice__WEBPACK_IMPORTED_MODULE_2__/* .GetPrice */ .R, {
                        currentCartItems: props.currentCartItems,
                        customizeData: props.customizeData,
                        isOrderPage: true
                    }),
                    !orderPlaced && (orderPosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                        textAlign: "center",
                        sx: {
                            minWidth: 200,
                            my: 3
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                            disabled: true,
                            sx: {
                                mx: 1
                            },
                            variant: "contained",
                            children: "Place Order"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                        textAlign: "center",
                        sx: {
                            minWidth: 200,
                            my: 3
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                            onClick: ()=>setOrderPosted(true),
                            sx: {
                                mx: 1
                            },
                            variant: "contained",
                            children: "Place Order"
                        })
                    })),
                    orderPosted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostOrder, {
                        currentCartItems: props.currentCartItems,
                        setError: (error)=>setError(error),
                        setOrderPosted: (data)=>setOrderPosted(data),
                        setOrderPlaced: (data)=>setOrderPlaced(data),
                        setHasOrder: (data)=>props.setHasOrder(data),
                        removeAllItems: ()=>props.removeAllItems()
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: error
                    }),
                    orderPlaced && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                        sx: {
                            my: 3
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {
                            children: [
                                "Thank you for your order, ",
                                props.user.firstName,
                                "!",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "You can view your order status on your ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/account",
                                    children: "account"
                                }),
                                " page."
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4317:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CloseRounded");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

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

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 4904:
/***/ ((module) => {

module.exports = require("@mui/material/Unstable_Grid2");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,235], () => (__webpack_exec__(5047)));
module.exports = __webpack_exports__;

})();