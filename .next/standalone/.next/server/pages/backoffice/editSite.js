"use strict";
(() => {
var exports = {};
exports.id = 896;
exports.ids = [896,59];
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

/***/ 2491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getCookie)
/* harmony export */ });
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


/***/ }),

/***/ 1391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OptionItemsForFood": () => (/* binding */ editSite_OptionItemsForFood),
  "SelectCustomizeOptions": () => (/* binding */ editSite_SelectCustomizeOptions),
  "default": () => (/* binding */ EditSite),
  "getServerSideProps": () => (/* binding */ editSite_getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(8544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./components/getCookie.js
var getCookie = __webpack_require__(2491);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/fetchy.js
var fetchy = __webpack_require__(8059);
// EXTERNAL MODULE: external "@mui/material/Unstable_Grid2"
var Unstable_Grid2_ = __webpack_require__(4904);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/ListSubheader"
var ListSubheader_ = __webpack_require__(9685);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
;// CONCATENATED MODULE: ./components/editMenu.js
/* eslint-disable react/prop-types */ 







 // Grid version 2









function Header({ title  }) {
    return /*#__PURE__*/ _jsx("h1", {
        className: "header-styles",
        children: title ? title : "Default title"
    });
}
const getServerSideProps = async (context)=>{
    //console.log('server token:' + context.req.cookies.token)
    try {
        const res = await fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/EditMenu/Food/Get", {
            headers: {
                "Authorization": "Bearer " + context.req.cookies.token
            }
        });
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const items = await res.json();
        console.log("food items: " + JSON.stringify(items));
        return {
            props: {
                items: items
            }
        };
    } catch (error) {
        console.log("Error: " + error.message);
    }
};
function SelectCustomize(props) {
    console.log("select food props: " + JSON.stringify(props));
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            minWidth: 120
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
            disablePortal: true,
            id: "combo-box-demo",
            options: props.foodItems.map((foodItem)=>({
                    foodID: foodItem.foodID,
                    foodName: foodItem.foodName
                })),
            sx: {
                width: 300
            },
            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    ...params,
                    label: "Customize Options"
                }),
            getOptionLabel: (option)=>typeof option === "string" ? option : option.foodName,
            isOptionEqualToValue: (option, value)=>option.id === value.id,
            onChange: (event, foodItem)=>{
                props.setSelectedFoodItem(foodItem);
                props.setOptionItemsPosted(true);
                console.log("handlechange target value: " + JSON.stringify(foodItem));
            }
        })
    });
}
function SelectFood(props) {
    console.log("select food props: " + JSON.stringify(props));
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            minWidth: 120
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
            disablePortal: true,
            id: "combo-box-demo",
            options: props.foodItems.map((foodItem)=>({
                    foodID: foodItem.foodID,
                    foodName: foodItem.foodName
                })),
            sx: {
                width: 300
            },
            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    ...params,
                    label: "Food Items"
                }),
            getOptionLabel: (option)=>typeof option === "string" ? option : option.foodName,
            isOptionEqualToValue: (option, value)=>option.id === value.id,
            onChange: (event, foodItem)=>{
                props.setSelectedFoodItem(foodItem);
                props.setOptionItemsPosted(true);
                console.log("handlechange target value: " + JSON.stringify(foodItem));
            }
        })
    });
}
function SelectCategory(props) {
    console.log("select food props: " + JSON.stringify(props));
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            minWidth: 120
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
            disablePortal: true,
            id: "combo-box-demo",
            options: props.foodItems.map((foodItem)=>({
                    foodID: foodItem.foodID,
                    foodName: foodItem.foodName
                })),
            sx: {
                width: 300
            },
            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    ...params,
                    label: "Menu Categories"
                }),
            getOptionLabel: (option)=>typeof option === "string" ? option : option.foodName,
            isOptionEqualToValue: (option, value)=>option.id === value.id,
            onChange: (event, foodItem)=>{
                props.setSelectedFoodItem(foodItem);
                props.setOptionItemsPosted(true);
                console.log("handlechange target value: " + JSON.stringify(foodItem));
            }
        })
    });
}
function OptionItemsForFood(props) {
    console.log("fetching food item: " + props.foodID);
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + (0,getCookie/* getCookie */.e)("token")
    };
    (0,fetchy/* fetchy */.X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/EditMenu/OptionItems/Get", "POST", props.foodID, headers).catch((error)=>{
        console.log("API error: " + error);
        console.log("API error: " + error.message);
        console.log("API error: " + JSON.parse(error));
        console.log("API error: " + JSON.parse(error.message));
        console.log("API error: " + JSON.parse(error.message).message);
        props.setError("API error: " + JSON.parse(error.message).message);
        props.setOptionItemsPosted(false);
    }).then((optionItems)=>{
        console.log("option items: " + JSON.stringify(optionItems));
        props.setFoodOptionItems(optionItems);
        const allFoodOptionItems = [];
        new Set(optionItems.map((optionItem)=>optionItem.customizeOption)).forEach((item)=>allFoodOptionItems.push(item));
        props.setFoodOptions(allFoodOptionItems);
        props.setOptionItemsPosted(false);
    }).catch((error)=>{
        console.log("React fetch error: " + error);
        props.setError("React fetch error: " + error.message);
        props.setOptionItemsPosted(false);
    });
}
function SelectCustomizeOptions(props) {
    console.log("options: " + JSON.stringify(props.customizeOptions));
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            minWidth: 120
        },
        children: /*#__PURE__*/ _jsx(Autocomplete, {
            disablePortal: true,
            id: "combo-box-demo",
            options: props.customizeOptions.map((option)=>({
                    optionID: option.optionID,
                    optionName: option.optionName
                })),
            sx: {
                width: 300
            },
            renderInput: (params)=>/*#__PURE__*/ _jsx(TextField, {
                    ...params,
                    label: "Options"
                }),
            getOptionLabel: (option)=>typeof option === "string" ? option : option.optionName,
            onChange: (event, option)=>{
                props.setSelectedOption(option);
                console.log("handlechange target value: " + JSON.stringify(option));
            }
        })
    });
}
function TabPanel(props) {
    const { children , value , index , ...other } = props;
    console.log("index: " + index);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                p: 3
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                component: "div",
                children: children
            })
        })
    });
}
TabPanel.propTypes = {
    children: (external_prop_types_default()).node,
    index: (external_prop_types_default()).number.isRequired,
    value: (external_prop_types_default()).number.isRequired
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
const focusStyle = {
    boxShadow: 1,
    borderRadius: 1,
    my: 1,
    opacity: 1
};
const blurStyle = {
    boxShadow: 3,
    borderRadius: 1,
    my: 1,
    opacity: .75
};
function EditMenu(props) {
    const [selectedFoodItem, setSelectedFoodItem] = (0,external_react_.useState)("");
    const [selectedOption, setSelectedOption] = (0,external_react_.useState)("");
    const [foodOptions, setFoodOptions] = (0,external_react_.useState)([]);
    const [foodOptionItems, setFoodOptionItems] = (0,external_react_.useState)([
        {}
    ]);
    const [optionItemsPosted, setOptionItemsPosted] = (0,external_react_.useState)(false);
    const [error, setError] = (0,external_react_.useState)(null);
    const [homeButtonValue, setHomeButtonValue] = (0,external_react_.useState)(0);
    const [menuTabValue, setMenuTabValue] = (0,external_react_.useState)(0);
    const handleMenuTabChange = (event, newValue)=>{
        setMenuTabValue(newValue);
    };
    console.log("selectedFoodItem is: " + JSON.stringify(selectedFoodItem) + ". optionItemsPosted is " + optionItemsPosted);
    console.log("food items: " + JSON.stringify(props.foodItems));
    console.log("options: " + JSON.stringify(props.customizeOptions));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
        container: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 2,
                sx: {
                    borderRight: 1,
                    borderColor: "divider"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                    sx: {
                        pr: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                            sx: homeButtonValue === 4 ? focusStyle : blurStyle,
                            selected: homeButtonValue === 4,
                            onClick: (e)=>setHomeButtonValue(4),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: "Batch",
                                sx: {
                                    textAlign: "center"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                            sx: homeButtonValue === 1 ? focusStyle : blurStyle,
                            selected: homeButtonValue === 1,
                            onClick: (e)=>setHomeButtonValue(1),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: "Categories",
                                sx: {
                                    textAlign: "center"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                            sx: homeButtonValue === 2 ? focusStyle : blurStyle,
                            selected: homeButtonValue === 2,
                            onClick: (e)=>setHomeButtonValue(2),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: "Food",
                                sx: {
                                    textAlign: "center"
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                            sx: homeButtonValue === 3 ? focusStyle : blurStyle,
                            selected: homeButtonValue === 3,
                            onClick: (e)=>setHomeButtonValue(3),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: "Customize",
                                sx: {
                                    textAlign: "center"
                                }
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                xs: 10,
                sx: {
                    pl: 2
                },
                children: [
                    homeButtonValue == 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            mx: "auto",
                            width: "50%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SelectCategory, {
                                setOptionItemsPosted: (data)=>setOptionItemsPosted(data),
                                foodItems: props.foodItems,
                                setSelectedFoodItem: (foodItem)=>setSelectedFoodItem(foodItem)
                            }),
                            selectedFoodItem && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                children: [
                                    "Food Item set to ",
                                    selectedFoodItem.foodName
                                ]
                            })
                        ]
                    }),
                    homeButtonValue == 2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            mx: "auto",
                            width: "50%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SelectFood, {
                                setOptionItemsPosted: (data)=>setOptionItemsPosted(data),
                                foodItems: props.foodItems,
                                setSelectedFoodItem: (foodItem)=>setSelectedFoodItem(foodItem)
                            }),
                            selectedFoodItem && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mx: "auto",
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        children: foodOptionItems && foodOptions.map((option, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: option
                                            }, index))
                                    }),
                                    error && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        children: error
                                    }),
                                    optionItemsPosted && selectedFoodItem && /*#__PURE__*/ jsx_runtime_.jsx(OptionItemsForFood, {
                                        foodID: selectedFoodItem.foodID,
                                        foodOptions: foodOptions,
                                        setOptionItemsPosted: (data)=>setOptionItemsPosted(data),
                                        setFoodOptionItems: (data)=>setFoodOptionItems(data),
                                        setFoodOptions: (data)=>setFoodOptions(data),
                                        setError: (data)=>setError(data)
                                    })
                                ]
                            })
                        ]
                    }),
                    homeButtonValue == 3 && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            mx: "auto",
                            width: "50%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SelectCustomize, {
                            setOptionItemsPosted: (data)=>setOptionItemsPosted(data),
                            foodItems: props.foodItems,
                            setSelectedFoodItem: (foodItem)=>setSelectedFoodItem(foodItem)
                        })
                    }),
                    homeButtonValue == 4 && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            my: "auto"
                        },
                        children: "Batch Upload"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
;// CONCATENATED MODULE: ./pages/backoffice/editSite.js
/* eslint-disable react/prop-types */ 











 // Grid version 2







function editSite_Header({ title  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "header-styles",
        children: title ? title : "Default title"
    });
}
const editSite_getServerSideProps = async (context)=>{
    console.log("server token:" + JSON.stringify(context.req.cookies));
    try {
        const res = await fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/EditMenu/Food/Get", {
            headers: {
                "Authorization": "Bearer " + context.req.cookies.token
            }
        });
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const items = await res.json();
        console.log("food items count: " + items.foodItems.length);
        return {
            props: {
                items: []
            }
        };
    } catch (error) {
        console.log("Error: " + error.message);
    }
};
function editSite_OptionItemsForFood(props) {
    console.log("fetching food item: " + props.foodID);
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + (0,getCookie/* getCookie */.e)("token")
    };
    (0,fetchy/* fetchy */.X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/EditMenu/OptionItems/Get", "POST", props.foodID, headers).catch((error)=>{
        console.log("API error: " + error);
        console.log("API error: " + error.message);
        console.log("API error: " + JSON.parse(error));
        console.log("API error: " + JSON.parse(error.message));
        console.log("API error: " + JSON.parse(error.message).message);
        props.setError("API error: " + JSON.parse(error.message).message);
        props.setOptionItemsPosted(false);
    }).then((optionItems)=>{
        console.log("option items: " + JSON.stringify(optionItems));
        props.setFoodOptionItems(optionItems);
        const allFoodOptionItems = [];
        new Set(optionItems.map((optionItem)=>optionItem.customizeOption)).forEach((item)=>allFoodOptionItems.push(item));
        props.setFoodOptions(allFoodOptionItems);
        props.setOptionItemsPosted(false);
    }).catch((error)=>{
        console.log("React fetch error: " + error);
        props.setError("React fetch error: " + error.message);
        props.setOptionItemsPosted(false);
    });
}
function editSite_SelectCustomizeOptions(props) {
    console.log("options: " + JSON.stringify(props.customizeOptions));
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            minWidth: 120
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
            disablePortal: true,
            id: "combo-box-demo",
            options: props.customizeOptions.map((option)=>({
                    optionID: option.optionID,
                    optionName: option.optionName
                })),
            sx: {
                width: 300
            },
            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    ...params,
                    label: "Options"
                }),
            getOptionLabel: (option)=>typeof option === "string" ? option : option.optionName,
            onChange: (event, option)=>{
                props.setSelectedOption(option);
                console.log("handlechange target value: " + JSON.stringify(option));
            }
        })
    });
}
function editSite_TabPanel(props) {
    const { children , value , index , ...other } = props;
    console.log("index: " + index);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                p: 3
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                component: "div",
                children: children
            })
        })
    });
}
editSite_TabPanel.propTypes = {
    children: (external_prop_types_default()).node,
    index: (external_prop_types_default()).number.isRequired,
    value: (external_prop_types_default()).number.isRequired
};
function editSite_a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
const editSite_focusStyle = {
    boxShadow: 1,
    borderRadius: 1,
    my: 1,
    opacity: 1
};
const editSite_blurStyle = {
    boxShadow: 3,
    borderRadius: 1,
    my: 1,
    opacity: .75
};
function EditSite(props) {
    const [selectedFoodItem, setSelectedFoodItem] = (0,external_react_.useState)("");
    const [selectedOption, setSelectedOption] = (0,external_react_.useState)("");
    const [foodOptions, setFoodOptions] = (0,external_react_.useState)([]);
    const [foodOptionItems, setFoodOptionItems] = (0,external_react_.useState)([
        {}
    ]);
    const [optionItemsPosted, setOptionItemsPosted] = (0,external_react_.useState)(false);
    const [error, setError] = (0,external_react_.useState)(null);
    const [pageTabValue, setPageTabValue] = (0,external_react_.useState)(0);
    const [homeButtonValue, setHomeButtonValue] = (0,external_react_.useState)(0);
    const handlePageTabChange = (event, newValue)=>{
        setPageTabValue(newValue);
    };
    const handleMenuTabChange = (event, newValue)=>{
        setPageTabValue(newValue);
    };
    console.log("selectedFoodItem is: " + JSON.stringify(selectedFoodItem) + ". optionItemsPosted is " + optionItemsPosted);
    console.log("food items: " + JSON.stringify(props.items.foodItems));
    console.log("options: " + JSON.stringify(props.items.customizeOptions));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        textAlign: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(editSite_Header, {
                title: "Edit Site"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: "Edit Site Disabled",
                followCursor: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                        container: true,
                        textAlign: "center",
                        sx: {
                            px: 5,
                            pointerEvents: "none",
                            opacity: "0.4"
                        } /*pointerEvents: "none",*/ ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        borderBottom: 1,
                                        borderColor: "divider"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                                        value: pageTabValue,
                                        onChange: handlePageTabChange,
                                        "aria-label": "basic tabs example",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                                label: "Edit Home",
                                                ...editSite_a11yProps(0),
                                                sx: {
                                                    fontSize: "1rem"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                                label: "Edit Menu",
                                                ...editSite_a11yProps(1),
                                                sx: {
                                                    fontSize: "1rem"
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(editSite_TabPanel, {
                                    value: pageTabValue,
                                    index: 0,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                        container: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                                xs: 5,
                                                sm: 3,
                                                md: 2,
                                                sx: {
                                                    borderRight: 1,
                                                    borderColor: "divider"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                                    sx: {
                                                        p: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                                            sx: homeButtonValue === 1 ? editSite_focusStyle : editSite_blurStyle,
                                                            selected: homeButtonValue === 1,
                                                            onClick: (e)=>setHomeButtonValue(1),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: "Coupons",
                                                                sx: {
                                                                    textAlign: "center"
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                                            sx: homeButtonValue === 2 ? editSite_focusStyle : editSite_blurStyle,
                                                            selected: homeButtonValue === 2,
                                                            onClick: (e)=>setHomeButtonValue(2),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: "Blurb",
                                                                sx: {
                                                                    textAlign: "center"
                                                                }
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                                            sx: homeButtonValue === 3 ? editSite_focusStyle : editSite_blurStyle,
                                                            selected: homeButtonValue === 3,
                                                            onClick: (e)=>setHomeButtonValue(3),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: "News",
                                                                sx: {
                                                                    textAlign: "center"
                                                                }
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                                xs: 7,
                                                sm: 9,
                                                md: 10,
                                                children: [
                                                    homeButtonValue == 1 && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            my: "auto"
                                                        },
                                                        children: "Current Coupons"
                                                    }),
                                                    homeButtonValue == 2 && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            my: "auto"
                                                        },
                                                        children: "Current Blurb"
                                                    }),
                                                    homeButtonValue == 3 && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        sx: {
                                                            my: "auto"
                                                        },
                                                        children: "Current News"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(editSite_TabPanel, {
                                        value: pageTabValue,
                                        index: 1,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(EditMenu, {
                                            foodItems: props.items.foodItems
                                        })
                                    }),
                                    error && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        children: error
                                    }),
                                    optionItemsPosted && selectedFoodItem && /*#__PURE__*/ jsx_runtime_.jsx(editSite_OptionItemsForFood, {
                                        foodID: selectedFoodItem.foodID,
                                        foodOptions: foodOptions,
                                        setOptionItemsPosted: (data)=>setOptionItemsPosted(data),
                                        setFoodOptionItems: (data)=>setFoodOptionItems(data),
                                        setFoodOptions: (data)=>setFoodOptions(data),
                                        setError: (data)=>setError(data)
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 2311:
/***/ ((module) => {

module.exports = require("@mui/material/Autocomplete");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

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

/***/ 9685:
/***/ ((module) => {

module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 8544:
/***/ ((module) => {

module.exports = require("@mui/material/Tabs");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 4904:
/***/ ((module) => {

module.exports = require("@mui/material/Unstable_Grid2");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

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
var __webpack_exports__ = (__webpack_exec__(1391));
module.exports = __webpack_exports__;

})();