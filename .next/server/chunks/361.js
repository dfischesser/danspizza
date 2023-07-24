"use strict";
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 1361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TM": () => (/* binding */ FormatOrders)
/* harmony export */ });
/* unused harmony exports OrderPageStatus, PostFulfill */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5732);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(441);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(216);
/* harmony import */ var _mui_material_Pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Pagination__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_fetchy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8059);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4904);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5074);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_16__);















 // Grid version 2



function getOrderDate(order) {
    //console.log('getorderdate orderID: ' + order.orderID)
    let getOrderDate = order.created;
    //console.log('getorderdate created: ' + order.created)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let date = new Date(getOrderDate + "Z");
    let dateDiff = new Date(Date.now());
    //console.log('datediff: ' + dateDiff)
    dateDiff = dateDiff - date;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    //console.log('days: ' + days)
    let hours = Math.floor(dateDiff / (1000 * 60 * 60));
    //console.log('hours: ' + hours)
    let minutes = Math.floor(dateDiff / (1000 * 60));
    //console.log('minutes: ' + minutes)
    if (days > 7) {
        return date.toLocaleDateString("us-US", options);
    } else if (days > 0) {
        return days === 1 ? days + " day ago" : days + " days ago";
    } else if (hours > 0) {
        return hours === 1 ? hours + " hour ago" : hours + " hours ago";
    } else if (minutes > 0) {
        return minutes === 1 ? minutes + " minute ago" : minutes + " minutes ago";
    }
    return "seconds ago";
}
function OrderPageStatus(props) {
    console.log("page: " + props.page);
    console.log("manage: " + props.manage);
    let url;
    if (props.manage) {
        url =  false ? 0 : "https://danspizza-api.azurewebsites.net/api/Order/OrderPage";
    } else {
        url =  false ? 0 : "https://danspizza-api.azurewebsites.net/api/Order/OrderPage";
    }
    const headers = {
        "Content-Type": "application/json"
    };
    (0,_components_fetchy__WEBPACK_IMPORTED_MODULE_17__/* .fetchy */ .X)(url, "POST", props.page, headers).catch((error)=>{
        console.log("API error: " + error.message);
        //console.log('API error: ' + JSON.parse(error.message).message)
        //props.setError('API error: ' + JSON.parse(error.message).message)
        props.setOrderPagePosted(false);
    }).then((data)=>{
        console.log("data");
        console.log("data: " + JSON.stringify(data));
        props.setOrders(data);
        console.log("data end: " + JSON.stringify(data));
        props.setOpen(data.map((order)=>({
                isOpen: false,
                orderID: order.orderID
            })));
        props.setOrderPagePosted(false);
        console.log("data end: " + JSON.stringify(data));
    }).catch((error)=>{
        console.log("React fetch error: " + error);
        props.setError("React fetch error: " + error.message);
        props.setOrderPagePosted(false);
    });
}
function PostFulfill(props) {
    const headers = {
        "Content-Type": "application/json"
    };
    (0,_components_fetchy__WEBPACK_IMPORTED_MODULE_17__/* .fetchy */ .X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/Order/Fulfill", "POST", props.fulfillPosted, headers).catch((error)=>{
        console.log("API error: " + error.message);
        //console.log('API error: ' + JSON.parse(error.message).message)
        //props.setError('API error: ' + JSON.parse(error.message).message)
        props.setFulfillPosted(false);
    }).then((newOrders)=>{
        //console.log('handleFetch order count: ' + JSON.stringify(newOrders.foodItems.length))
        props.setOpen(newOrders.map((order)=>({
                isOpen: false,
                orderID: order.orderID
            })));
        props.setFulfillPosted(false);
        props.setOrders(newOrders);
        return newOrders;
    }).catch((error)=>{
        console.log("React fetch error: " + error);
        props.setError("React fetch error: " + error.message);
        props.setFulfillPosted(false);
    });
}
function FormatOrders({ userOrders , active , orderCount , manage  }) {
    //console.log('orders: ' + JSON.stringify(userOrders))
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(userOrders.map((order)=>({
            isOpen: false,
            orderID: order.orderID
        })));
    const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const [orderPagePosted, setOrderPagePosted] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(userOrders);
    const [fulfillPosted, setFulfillPosted] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    console.log("order count: " + orderCount);
    function handleFulFill(orderID) {
        setSelectedIndex(orderID);
        setFulfillPosted(orderID);
    }
    function handleClick(e, orderID) {
        console.log("food: " + orderID);
        console.log("open: " + JSON.stringify(open)) //
        ;
        setSelectedIndex(orderID);
        setOpen(open.map((item)=>item.orderID === orderID ? {
                ...item,
                isOpen: item.isOpen = !item.isOpen
            } : {
                ...item,
                isOpen: item.isOpen = item.isOpen
            }));
    }
    const handlePageChange = (event, value)=>{
        setPage(value);
        setOrderPagePosted(true);
    };
    //console.log('formatorder orders: ' + JSON.stringify(orders))
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_14___default()), {
        elevation: 5,
        sx: {
            mx: {
                sm: 2,
                md: 15
            },
            mb: 3
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_List__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    bgcolor: "background.beige",
                    p: 2
                },
                component: "div",
                "aria-labelledby": "nested-list-subheader",
                disablePadding: true,
                children: [
                    orderPagePosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                        sx: {
                            width: "100%",
                            height: "600px",
                            top: "50%",
                            transform: "translateY(+50%)"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15___default()), {})
                        })
                    }) : orders.map((order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                            sx: fulfillPosted && {
                                pointerEvents: "none"
                            },
                            children: selectedIndex === order.orderID && fulfillPosted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                variant: "rounded",
                                width: "100%",
                                height: "95px",
                                sx: {
                                    mt: 2
                                }
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        sx: selectedIndex === order.orderID ? {
                                            boxShadow: 1,
                                            borderRadius: 1,
                                            mt: 2
                                        } : {
                                            boxShadow: 3,
                                            borderRadius: 1,
                                            mt: 2,
                                            bgcolor: "background.lightest"
                                        },
                                        selected: selectedIndex === order.orderID,
                                        onClick: (e)=>handleClick(e, order.orderID),
                                        component: "div",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            className: "account-item",
                                            primary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                container: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        xs: 9,
                                                        md: 10,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            sx: {
                                                                my: "auto"
                                                            },
                                                            children: getOrderDate(order)
                                                        })
                                                    }),
                                                    manage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        xs: 3,
                                                        md: 1,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                            disabled: fulfillPosted,
                                                            variant: "contained",
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleFulFill(order.orderID);
                                                            },
                                                            children: "Fulfill"
                                                        })
                                                    })
                                                ]
                                            }),
                                            secondary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                container: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        xs: 9,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            className: "account-item",
                                                            textAlign: "left",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: order.totalPrice.toLocaleString("us-US", {
                                                                        style: "currency",
                                                                        currency: "USD"
                                                                    })
                                                                }),
                                                                " - ",
                                                                order.foodItems.map((foodItem)=>foodItem.foodName).join(", ")
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        xs: 3,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            sx: {
                                                                my: "auto",
                                                                display: {
                                                                    xs: "none",
                                                                    md: "block"
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: order.account.firstName
                                                                }),
                                                                ": ",
                                                                order.account.phone
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            secondaryTypographyProps: {
                                                component: "div",
                                                mt: 1
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        in: open.find((state)=>state.orderID == order.orderID).isOpen,
                                        timeout: "auto",
                                        unmountOnExit: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_List__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            component: "div",
                                            children: [
                                                manage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    sx: {
                                                        mt: 1,
                                                        ml: 2,
                                                        width: "95%",
                                                        boxShadow: 3,
                                                        borderRadius: 1,
                                                        backgroundColor: "#f2f2ed"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            primary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                container: true,
                                                                textAlign: "center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                        xs: 6,
                                                                        md: 1,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                sx: {
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: "ID"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                children: order.account.userID
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                        xs: 6,
                                                                        md: 3,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                sx: {
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: "Name"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                children: [
                                                                                    order.account.firstName,
                                                                                    " ",
                                                                                    order.account.lastName
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                        xs: 6,
                                                                        md: 4,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                sx: {
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: "Phone"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                sx: {
                                                                                    whiteSpace: "nowrap",
                                                                                    overflow: "auto hidden",
                                                                                    "&::-webkit-scrollbar": {
                                                                                        height: 10,
                                                                                        WebkitAppearance: "none"
                                                                                    },
                                                                                    "&::-webkit-scrollbar-thumb": {
                                                                                        borderRadius: 8,
                                                                                        border: "2px solid",
                                                                                        borderColor: "background.lightest",
                                                                                        backgroundColor: "background.beige"
                                                                                    }
                                                                                },
                                                                                children: order.account.phone
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                                        xs: 6,
                                                                        md: 4,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                sx: {
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: "Email"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                sx: {
                                                                                    overflow: "auto hidden",
                                                                                    "&::-webkit-scrollbar": {
                                                                                        height: 10,
                                                                                        WebkitAppearance: "none"
                                                                                    },
                                                                                    "&::-webkit-scrollbar-thumb": {
                                                                                        borderRadius: 8,
                                                                                        border: "2px solid",
                                                                                        borderColor: "background.lightest",
                                                                                        backgroundColor: "background.beige"
                                                                                    }
                                                                                },
                                                                                children: order.account.email
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                }),
                                                order.foodItems.map((foodItem, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        sx: index % 2 === 1 ? {
                                                            mt: 1,
                                                            ml: 2,
                                                            width: "95%",
                                                            boxShadow: 3,
                                                            borderRadius: 1,
                                                            backgroundColor: "#f2f2ed"
                                                        } : {
                                                            mt: 1,
                                                            ml: 2,
                                                            width: "95%",
                                                            boxShadow: 3,
                                                            borderRadius: 1,
                                                            backgroundColor: "#f0f2e6"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            sx: {
                                                                pl: 3,
                                                                py: 2
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                className: "account-item",
                                                                primary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    sx: {
                                                                        display: "flex",
                                                                        justifyContent: "space-between"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: foodItem.foodName
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: foodItem.price && foodItem.price.toLocaleString("us-US", {
                                                                                style: "currency",
                                                                                currency: "USD"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                secondary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                    children: foodItem.customizeOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "option-group",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "option-name",
                                                                                    children: option.optionName + ": "
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "option-items",
                                                                                    children: option.optionItems.map((x)=>x.customizeOptionItem).join(", ")
                                                                                })
                                                                            ]
                                                                        }, option.orderItemOptionID))
                                                                }),
                                                                secondaryTypographyProps: {
                                                                    component: "div"
                                                                }
                                                            })
                                                        })
                                                    }, foodItem.orderItemID))
                                            ]
                                        })
                                    })
                                ]
                            })
                        }, order.orderID)),
                    orders.length === 0 && active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            boxShadow: 3,
                            borderRadius: 1,
                            mx: 2,
                            mt: 2,
                            bgcolor: "background.lightest"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
                            primary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: "No Active Orders"
                            })
                        })
                    }),
                    orders.length === 0 && !active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            boxShadow: 3,
                            borderRadius: 1,
                            mx: 2,
                            mt: 2,
                            bgcolor: "background.lightest"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
                            primary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: "No Past Orders"
                            })
                        })
                    }),
                    !active && orderCount > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Pagination__WEBPACK_IMPORTED_MODULE_9___default()), {
                        sx: {
                            mt: 1
                        },
                        count: Math.ceil(orderCount / 5),
                        page: page,
                        onChange: handlePageChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    orderPagePosted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderPageStatus, {
                        page: page,
                        setOrders: (data)=>setOrders(data),
                        setOpen: (data)=>setOpen(data),
                        setError: (error)=>setError(error),
                        setOrderPagePosted: (data)=>setOrderPagePosted(data),
                        manage: manage
                    }),
                    fulfillPosted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostFulfill, {
                        setError: (error)=>setError(error),
                        setOpen: (data)=>setOpen(data),
                        fulfillPosted: fulfillPosted,
                        setFulfillPosted: (data)=>setFulfillPosted(data),
                        setOrders: (data)=>setOrders(data)
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: error
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;