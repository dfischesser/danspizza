"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 5494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Menu),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-bootstrap/Accordion"
const Accordion_namespaceObject = require("react-bootstrap/Accordion");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
;// CONCATENATED MODULE: external "@mui/material/Select"
const Select_namespaceObject = require("@mui/material/Select");
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: external "@mui/material/Chip"
const Chip_namespaceObject = require("@mui/material/Chip");
;// CONCATENATED MODULE: external "@mui/icons-material/CheckBoxOutlineBlank"
const CheckBoxOutlineBlank_namespaceObject = require("@mui/icons-material/CheckBoxOutlineBlank");
var CheckBoxOutlineBlank_default = /*#__PURE__*/__webpack_require__.n(CheckBoxOutlineBlank_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/CheckBox"
const CheckBox_namespaceObject = require("@mui/icons-material/CheckBox");
var CheckBox_default = /*#__PURE__*/__webpack_require__.n(CheckBox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Checkbox"
const Checkbox_namespaceObject = require("@mui/material/Checkbox");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_namespaceObject);
;// CONCATENATED MODULE: ./components/customizeMultiAutocomplete.js














function CustomizeMultiAutocomplete({ customizeOption , handleChange  }) {
    //console.log('CustomizeMultiAutocomplete rendered. custOption: ' + JSON.stringify(customizeOption))
    const [value, setValue] = (0,external_react_.useState)([]);
    //console.log('value: ' + JSON.stringify(value))
    return /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
        multiple: true,
        disablePortal: true,
        limitTags: 2,
        options: customizeOption.optionItems,
        disableCloseOnSelect: true,
        value: value,
        onChange: (event, newValue)=>{
            if (event.currentTarget) {
                console.log("change hit. target: " + event.currentTarget.innerText);
                console.log("newValue: " + JSON.stringify(newValue));
            }
            if (newValue.find((x)=>x.customizeOptionItem === "Cheese")) {
                console.log("found cheese in array");
                if (event.currentTarget.innerText.startsWith("Cheese")) {
                    console.log("current target starts with cheese. setting only cheese");
                    setValue(newValue.filter((x)=>x.customizeOptionItem === "Cheese"));
                } else {
                    setValue(newValue.filter((x)=>x.customizeOptionItem !== "Cheese"));
                }
            } else {
                setValue(newValue);
            }
            handleChange({
                optionItems: newValue,
                optionID: customizeOption.optionID
            });
        },
        sx: {
            minWidth: 300,
            mx: "auto",
            display: "block",
            pt: 2
        },
        getOptionLabel: (option)=>option.customizeOptionItem,
        size: "small",
        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                ...params,
                size: "small",
                multiline: true,
                maxRows: 2,
                label: customizeOption.optionName,
                variant: "filled"
            }),
        renderOption: (props, option, { selected  })=>{
            return /*#__PURE__*/ (0,external_react_.createElement)((ListItem_default()), {
                ...props,
                key: option.customizeOptionItemID,
                sx: {
                    backgroundColor: "background.paper"
                },
                secondaryAction: option.price.toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD"
                })
            }, /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                primary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                            icon: /*#__PURE__*/ jsx_runtime_.jsx((CheckBoxOutlineBlank_default()), {
                                fontSize: "small"
                            }),
                            checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((CheckBox_default()), {
                                fontSize: "small"
                            }),
                            style: {
                                marginRight: 8
                            },
                            checked: selected
                        }),
                        option.customizeOptionItem
                    ]
                })
            }));
        }
    });
}

;// CONCATENATED MODULE: ./components/customizeAutocomplete.js
/* eslint-disable react/prop-types */ 









function CustomizeAutocomplete({ customizeOption , handleChange , defaultValue  }) {
    // //Get any defaults if they exist or there is a specified default option set it
    // const defaultValue = () => {
    //         //If there is only one item set 
    //             // console.log('defaultValue hit. option items amount : ' + customizeOption.optionItems.length);
    //             // console.log('defaultValue hit. is default option : ' + customizeOption.isDefaultOption);
    //         if ((customizeOption.optionItems.length === 1 || customizeOption.isDefaultOption)) {
    //             // console.log('default found. : ' + JSON.stringify(customizeOption))
    //             handleChange({optionItems: [customizeOption.optionItems[0]], optionID: customizeOption.optionItems[0].optionID})
    //             return customizeOption.optionItems[0].customizeOptionItem
    //         }
    //         console.log('NO default found. : ' + JSON.stringify(customizeOption));
    //         return ''
    // }
    console.log("autocomplete default value: " + defaultValue);
    const [value, setValue] = (0,external_react_.useState)(defaultValue ? defaultValue : null);
    //console.log('# optionItems: ' + customizeOption.optionItems.length)
    //console.log('option item 1: ' + JSON.stringify(customizeOption.optionItems[0]))
    //console.log('option item 1 name: ' + JSON.stringify(customizeOption.optionItems[0].customizeOptionItem))
    return /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
        disablePortal: true,
        value: value,
        onChange: (event, newValue)=>{
            setValue(newValue);
            handleChange({
                optionItems: newValue ? [
                    newValue
                ] : [],
                optionID: customizeOption.optionID
            });
        },
        onInputChange: (event, newValue)=>{
            console.log("hit input change, newValue: " + JSON.stringify(newValue) + ". customizeOption: " + JSON.stringify(customizeOption.optionItems.every((x)=>x.optionID === customizeOption.optionItems[0].optionID)));
            if (customizeOption.optionItems.every((x)=>x.optionID === customizeOption.optionItems[0].optionID) && customizeOption.optionItems[0].customizeOptionItem === newValue) {
                console.log("handling change");
                handleChange({
                    optionItems: [
                        customizeOption.optionItems[0]
                    ],
                    optionID: customizeOption.optionItems[0].optionID
                });
            }
        },
        options: customizeOption.optionItems,
        getOptionLabel: (option)=>typeof option === "string" ? option : option.customizeOptionItem,
        sx: customizeOption.optionItems.length === 1 ? {
            display: "none"
        } : {
            minWidth: 300,
            mx: "auto",
            display: "block",
            pt: 2
        },
        isOptionEqualToValue: (option, value)=>option.optionItemID === value.optionItemID,
        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                ...params,
                label: customizeOption.optionName,
                variant: "filled"
            }),
        renderOption: (props, option)=>{
            return /*#__PURE__*/ (0,external_react_.createElement)((ListItem_default()), {
                ...props,
                key: option.customizeOptionItemID,
                sx: {
                    backgroundColor: "background.paper"
                },
                secondaryAction: option.price.toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD"
                })
            }, /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                primary: option.customizeOptionItem
            }));
        }
    }, customizeOption.optionID);
}

;// CONCATENATED MODULE: ./components/customize.js




















function Customize(props) {
    const custOptions = props.customizeFood.customizeOptions.map((custOption)=>({
            optionID: custOption.optionID,
            optionName: custOption.optionName,
            isMultiSelect: custOption.isMultiSelect,
            isDefaultOption: custOption.isDefaultOption,
            price: 0,
            optionItems: []
        }));
    const [optionsValidated, setOptionsValidated] = (0,external_react_.useState)(false);
    const [customizeOptions, setCustomizeOptions] = (0,external_react_.useState)(custOptions);
    const [price, setPrice] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        console.log("setting price: " + customizeOptions.filter((x)=>x.price !== null).reduce((a, b)=>a + b.price, 0));
        setPrice(customizeOptions.filter((x)=>x.price !== null).reduce((a, b)=>a + b.price, 0));
        console.log("valid: " + customizeOptions.every((x)=>x.optionItems.length > 0));
    //Write to session storage
    }, [
        customizeOptions,
        price
    ]);
    //console.log('currentCartItem: ' + JSON.stringify(props.customizeFood))
    console.log("customizeOptions: " + JSON.stringify(customizeOptions));
    console.log("current price: " + price);
    // function storageAvailable(type) {
    //     let storage;
    //     try {
    //       storage = window[type];
    //       const x = "__storage_test__";
    //       storage.setItem(x, x);
    //       storage.removeItem(x);
    //       return true;
    //     } catch (e) {
    //         console.error(e)
    //       return (
    //         e instanceof DOMException &&
    //         // everything except Firefox
    //         (e.code === 22 ||
    //           // Firefox
    //           e.code === 1014 ||
    //           // test name field too, because code might not be present
    //           // everything except Firefox
    //           e.name === "QuotaExceededError" ||
    //           // Firefox
    //           e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
    //         // acknowledge QuotaExceededError only if there's something already stored
    //         storage &&
    //         storage.length !== 0
    //       );
    //     }
    //   }
    //   if (storageAvailable("localStorage")) {
    //     // Yippee! We can use localStorage awesomeness
    //     console.log('storing!: ' + JSON.stringify(customizeOptions))
    //   } else {
    //     console.log('cant store right now: ' + storageAvailable("sessionStorage"))
    //   }
    let test = customizeOptions.filter((x)=>x.price !== null).reduce((a, b)=>a + b.price, 0);
    if (test.length > 0) {
        console.log("filtered options: " + JSON.stringify(test));
        console.log("adding prices: " + test.reduce((a, b)=>a + b.price, 0));
    }
    function handleChange(newValue) {
        console.log("new value: " + JSON.stringify(newValue));
        console.log("custOptions value: " + JSON.stringify(customizeOptions));
        console.log("poop");
        console.log("newValue[0]: " + (newValue.optionItems.length > 0));
        //here
        if (newValue.optionItems.length > 0) {
            console.log("incoming price: " + newValue.optionItems.reduce((a, b)=>a + b.price, 0));
            if (newValue.optionItems.find((x)=>x.customizeOptionItem === "Cheese") && newValue.optionItems.length > 1) {
                newValue.optionItems = newValue.optionItems.filter((x)=>x.customizeOptionItem !== "Cheese");
            }
            setCustomizeOptions(customizeOptions.map((x)=>x.optionID === newValue.optionID ? {
                    ...x,
                    optionItems: newValue.optionItems,
                    price: newValue.optionItems.reduce((a, b)=>a + b.price, 0)
                } : {
                    ...x
                }));
        } else {
            setCustomizeOptions(customizeOptions.map((x)=>x.optionID === newValue.optionID ? {
                    ...x,
                    optionItems: newValue.optionItems
                } : {
                    ...x
                }));
        }
    }
    function handleClick() {
        console.log("custOptions final value: " + JSON.stringify(customizeOptions));
        console.log("all optionItems selected: " + JSON.stringify(customizeOptions.every((x)=>x.optionItems.length > 0)));
        props.addCustomItem({
            ...props.customizeFood,
            customizeOptions: customizeOptions
        });
        props.collapseCustomizeOnAdd();
    }
    //Get any defaults if they exist or there is a specified default option set it
    const defaultValue = (custOption)=>{
        //If there is only one item set 
        // console.log('defaultValue hit. option items amount : ' + customizeOption.optionItems.length);
        // console.log('defaultValue hit. is default option : ' + customizeOption.isDefaultOption);
        if (custOption.optionItems.length === 1 || custOption.isDefaultOption) {
            // console.log('default found. : ' + JSON.stringify(customizeOption))
            console.log("returning default: " + JSON.stringify(custOption.optionItems[0].customizeOptionItem));
            return custOption.optionItems[0].customizeOptionItem;
        }
        console.log("NO default found. : " + JSON.stringify(custOption.optionName));
        return "";
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        sx: {
            bgcolor: "background.lightest",
            mx: "auto",
            px: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
            children: [
                props.customizeFood.customizeOptions.map((custOption)=>custOption.isMultiSelect ? /*#__PURE__*/ jsx_runtime_.jsx(CustomizeMultiAutocomplete, {
                        handleChange: (newValue)=>handleChange(newValue),
                        customizeOption: custOption,
                        defaultValue: defaultValue(custOption)
                    }, custOption.optionID) : /*#__PURE__*/ jsx_runtime_.jsx(CustomizeAutocomplete, {
                        handleChange: (newValue)=>handleChange(newValue),
                        customizeOption: custOption,
                        defaultValue: defaultValue(custOption)
                    }, custOption.optionID)),
                customizeOptions.every((x)=>x.optionItems.length > 0) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                    onClick: ()=>handleClick(),
                    variant: "contained",
                    sx: {
                        width: 250,
                        mx: "auto",
                        display: "block",
                        my: 2
                    },
                    children: [
                        "Add To Cart - ",
                        price.toLocaleString("us-US", {
                            style: "currency",
                            currency: "USD"
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    disabled: true,
                    variant: "contained",
                    sx: {
                        width: 250,
                        mx: "auto",
                        display: "block",
                        my: 2
                    },
                    children: "Add To Cart"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "@mui/material/ListSubheader"
var ListSubheader_ = __webpack_require__(9685);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandLess"
var ExpandLess_ = __webpack_require__(6174);
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/material/Unstable_Grid2"
var Unstable_Grid2_ = __webpack_require__(4904);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_);
;// CONCATENATED MODULE: ./pages/menu.js
/* eslint-disable react/prop-types */ 















 // Grid version 2

function Header({ title  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "header-padding",
        children: title ? title : "Default title"
    });
}
const getStaticProps = async ()=>{
    const res = await fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/Menu/Get");
    const menu = await res.json();
    console.log("menu food cust menu length: " + menu.menuCategoryList.length);
    console.log("done.");
    //console.log('menu food cust via find: ' + JSON.stringify(menu.menuCategoryList.find(list => list.menuCategoryID == 2)))
    // const menu = {"menuCategoryList":[{"menuCategoryID":1,"foodType":"Pizza","foodList":[{"foodID":1,"menuCategoryID":1,"foodName":"Hand-Tossed","price":17.99},{"foodID":2,"menuCategoryID":1,"foodName":"Thin-Crust","price":18.99},{"foodID":3,"menuCategoryID":1,"foodName":"Sicilian","price":19.99}]},{"menuCategoryID":2,"foodType":"Pasta","foodList":[{"foodID":4,"menuCategoryID":2,"foodName":"Francese","price":14.99},{"foodID":5,"menuCategoryID":2,"foodName":"Marsala","price":14.99},{"foodID":6,"menuCategoryID":2,"foodName":"Alfredo","price":14.99}]},{"menuCategoryID":3,"foodType":"Salad","foodList":[]},{"menuCategoryID":4,"foodType":"Soup","foodList":[]},{"menuCategoryID":5,"foodType":"Sides","foodList":[]},{"menuCategoryID":6,"foodType":"Drinks","foodList":[]},{"menuCategoryID":7,"foodType":"Dessert","foodList":[]}]}
    return {
        props: {
            menu
        }
    };
};
function Menu(props) {
    const [data, setData] = (0,external_react_.useState)(props.menu.menuCategoryList.slice());
    const [open, setOpen] = (0,external_react_.useState)(props.menu.menuCategoryList.map((foodType)=>({
            isOpen: false,
            menuCategoryID: foodType.menuCategoryID,
            food: foodType.foodList.map((food)=>({
                    isOpen: false,
                    foodID: food.foodID
                }))
        })));
    const [selectedIndex, setSelectedIndex] = (0,external_react_.useState)(0);
    const [selectedCustIndex, setSelectedCustIndex] = (0,external_react_.useState)(1);
    const [buttonFocus, setButtonFocus] = (0,external_react_.useState)(0);
    console.log("buttonFocus: " + JSON.stringify(buttonFocus));
    function handleClick(e, menuCategoryID) {
        console.log("food: " + menuCategoryID);
        console.log("open: " + JSON.stringify(open));
        console.log("selected: " + JSON.stringify(selectedIndex));
        setSelectedIndex(menuCategoryID);
        setOpen(open.map((item)=>item.menuCategoryID === menuCategoryID ? {
                ...item,
                isOpen: item.isOpen = !item.isOpen
            } : {
                ...item,
                isOpen: false
            }));
    }
    function handleCustomizeClick(e, food) {
        console.log("food: " + food);
        console.log("open: " + JSON.stringify(open.find((menuItem)=>(menuItem.menuCategoryID === food.menuCategoryID).food)));
        console.log("selected: " + JSON.stringify(selectedCustIndex));
        setSelectedCustIndex(food.foodID);
        setOpen(open.map((menuItem)=>({
                ...menuItem,
                food: menuItem.food.map((item)=>item.foodID === food.foodID ? {
                        ...item,
                        isOpen: item.isOpen = !item.isOpen
                    } : {
                        ...item,
                        isOpen: false
                    })
            })));
    }
    function collapseCustomizeOnAdd() {
        setOpen(open.map((menuItem)=>({
                ...menuItem,
                food: menuItem.food.map((item)=>({
                        ...item,
                        isOpen: item.isOpen = false
                    }))
            })));
    }
    function GetIcon({ type  }) {
        switch(type){
            case 1:
                {
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        fontSize: "25px",
                        children: "\uD83C\uDF55"
                    });
                }
            case 2:
                {
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        fontSize: "25px",
                        children: "\uD83C\uDF5D"
                    });
                }
            case 3:
                {
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        fontSize: "25px",
                        children: "\uD83E\uDD57"
                    });
                }
            case 4:
                {
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        fontSize: "25px",
                        children: "\uD83E\uDD63"
                    });
                }
            case 5:
                {
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        fontSize: "25px",
                        children: "\uD83C\uDF5F"
                    });
                }
            case 6:
                {
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        fontSize: "25px",
                        children: "\uD83E\uDD64"
                    });
                }
            case 7:
                {
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        fontSize: "25px",
                        children: "\uD83C\uDF70"
                    });
                }
        }
        return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            children: type
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
        container: true,
        rowSpacing: 1,
        columnSpacing: 2,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                textAlign: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                    title: "Menu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 10,
                xsOffset: 1,
                children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                    component: "nav",
                    children: data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                    onClick: (e)=>{
                                        handleClick(e, item.menuCategoryID);
                                        setButtonFocus(item.menuCategoryID);
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(GetIcon, {
                                                type: item.menuCategoryID
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: item.foodType
                                        }),
                                        open.find((state)=>state.menuCategoryID == item.menuCategoryID).isOpen ? /*#__PURE__*/ jsx_runtime_.jsx((ExpandLess_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {})
                                    ]
                                }),
                                index !== data.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                    variant: "middle",
                                    component: "li"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                                    in: open.find((state)=>state.menuCategoryID == item.menuCategoryID).isOpen,
                                    timeout: "auto",
                                    unmountOnExit: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                        component: "div",
                                        disablePadding: true,
                                        children: item.foodList.map((foodItem)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                        sx: {
                                                            width: "95%",
                                                            mx: "auto"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                primary: foodItem.foodName
                                                            }),
                                                            open.find((menuItem)=>menuItem.menuCategoryID === foodItem.menuCategoryID).food.find((state)=>state.foodID == foodItem.foodID).isOpen ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                onClick: (e)=>{
                                                                    handleCustomizeClick(e, foodItem);
                                                                },
                                                                variant: "contained",
                                                                children: "Cancel"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                onClick: (e)=>{
                                                                    handleCustomizeClick(e, foodItem);
                                                                },
                                                                variant: "contained",
                                                                children: "Add"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                                                        in: open.find((menuItem)=>menuItem.menuCategoryID === foodItem.menuCategoryID).food.find((state)=>state.foodID == foodItem.foodID).isOpen,
                                                        timeout: "auto",
                                                        unmountOnExit: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                                            component: "div",
                                                            disablePadding: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Customize, {
                                                                    customizeFood: foodItem,
                                                                    addCustomItem: (foodItem)=>props.addCustomItem(foodItem),
                                                                    collapseCustomizeOnAdd: ()=>collapseCustomizeOnAdd()
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            }, foodItem.foodID))
                                    })
                                })
                            ]
                        }, item.menuCategoryID))
                })
            })
        ]
    });
}


/***/ }),

/***/ 6174:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2311:
/***/ ((module) => {

module.exports = require("@mui/material/Autocomplete");

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

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

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

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5494));
module.exports = __webpack_exports__;

})();