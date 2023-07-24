(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7769:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_5506ec', '__Roboto_Fallback_5506ec', Helvetica, Arial, sans-serif","fontStyle":"normal"},
	"className": "__className_5506ec"
};


/***/ }),

/***/ 6915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ appBar)
});

// UNUSED EXPORTS: ResponsiveAppBar

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
;// CONCATENATED MODULE: external "@mui/material/Popper"
const Popper_namespaceObject = require("@mui/material/Popper");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_namespaceObject);
// EXTERNAL MODULE: ./components/getCookie.js
var getCookie = __webpack_require__(2491);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Unstable_Grid2"
var Unstable_Grid2_ = __webpack_require__(4904);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_);
// EXTERNAL MODULE: ./components/fetchy.js
var fetchy = __webpack_require__(8059);
;// CONCATENATED MODULE: ./components/modals/loginModal.js





 // Grid version 2


function LoginStatus(props) {
    const headers = {
        "content-Type": "application/json"
    };
    (0,fetchy/* fetchy */.X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/Login", "POST", props.login, headers).catch((error)=>{
        console.log("API error: " + JSON.stringify(error.message));
        console.log("API error2: " + JSON.stringify(props.login));
        //console.log('API error: ' + JSON.parse(error.message).message)
        //props.setError('API error: ' + JSON.parse(error.message).message)
        props.setLoginPosted(false);
    }).then((data)=>{
        console.log("message: " + data.message);
        if (data.message === "Login Success") {
            console.log("login success");
            console.log("handleFetch login data: " + JSON.stringify(data));
            document.cookie = "LoggedIn=true";
            props.setIsLoggedIn(true);
            props.setOpen(false);
        }
        props.setLoginPosted(false);
    }).catch((error)=>{
        console.log("React fetch error: " + error.message);
        //console.log('React fetch error: Username/Password combination does not match')
        props.setError("Login Failed");
        props.setLoginPosted(false);
    });
}
function LoginModal(props) {
    const [login, setLogin] = (0,external_react_.useState)({
        email: "",
        password: ""
    });
    const [error, setError] = (0,external_react_.useState)(null);
    const [hasAttemptedLogin, setHasAttemptedLogin] = (0,external_react_.useState)(false);
    const [isEmailValid, setIsEmailValid] = (0,external_react_.useState)(false);
    const [loginPosted, setLoginPosted] = (0,external_react_.useState)(false);
    function validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        console.log("valid: " + email.toString().match(regex));
        email.toString().match(regex) ? setIsEmailValid(true) : setIsEmailValid("Email is Invalid");
        console.log("is email valid: " + isEmailValid);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            mx: "auto",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                id: "modal-modal-title",
                variant: "h6",
                component: "h2",
                sx: {
                    textAlign: "center"
                },
                children: "Login"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                autoFocus: true,
                fullWidth: true,
                id: "standard-basic-email",
                label: "Email",
                variant: "standard",
                margin: "dense",
                helperText: isEmailValid !== true && hasAttemptedLogin ? isEmailValid : false,
                error: isEmailValid !== true && hasAttemptedLogin ? true : false,
                value: login.email,
                onChange: (e)=>{
                    validateEmail(e.target.value);
                    setLogin({
                        ...login,
                        email: e.target.value
                    });
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                fullWidth: true,
                id: "standard-basic-password",
                label: "Password",
                variant: "standard",
                margin: "dense",
                type: "password",
                value: login.password,
                onChange: (e)=>setLogin({
                        ...login,
                        password: e.target.value
                    }),
                onBlur: (e)=>{
                    console.log("enter key detected. bubbles: " + e.bubbles);
                    e.stopPropagation();
                },
                onKeyDown: (e)=>{
                    console.log("key down detected");
                    if (e.code === "Enter") {
                        console.log("enter key detected.");
                        if (isEmailValid === true) {
                            setLoginPosted(true);
                        }
                        setHasAttemptedLogin(true);
                    }
                }
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    textAlign: "center",
                    pt: 1,
                    color: "red"
                },
                children: error
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    width: "100%",
                    mx: "auto",
                    display: "block",
                    pt: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        disabled: loginPosted,
                        sx: {
                            width: 75,
                            mx: "auto",
                            display: "block"
                        },
                        variant: "contained",
                        className: "login-button",
                        onKeyDown: (e)=>{
                            console.log("key down detected");
                            if (e.code === "Enter") {
                                console.log("enter key detected. email valid: " + isEmailValid);
                                if (isEmailValid === true) {
                                    setLoginPosted(true);
                                }
                                setHasAttemptedLogin(true);
                            }
                        },
                        onClick: ()=>{
                            console.log("click is email valid: " + isEmailValid);
                            if (isEmailValid === true) {
                                setLoginPosted(true);
                            }
                            setHasAttemptedLogin(true);
                        },
                        children: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        sx: {
                            width: "100%",
                            mx: "auto",
                            display: "block",
                            mt: 2
                        },
                        href: "",
                        onClick: ()=>props.setIsCreate(true),
                        children: "Create Account"
                    }),
                    loginPosted && /*#__PURE__*/ jsx_runtime_.jsx(LoginStatus, {
                        login: login,
                        setHasCookie: (data)=>props.setHasCookie(data),
                        setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
                        setError: (error)=>setError(error),
                        setLoginPosted: (data)=>setLoginPosted(data),
                        setUserName: (data)=>props.setUserName(data),
                        setRole: (data)=>props.setRole(data),
                        setOpen: (data)=>props.setOpen(data),
                        closeLogin: ()=>props.closeLogin()
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: external "@mui/icons-material/Error"
const Error_namespaceObject = require("@mui/icons-material/Error");
var Error_default = /*#__PURE__*/__webpack_require__.n(Error_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/material/Input"
const Input_namespaceObject = require("@mui/material/Input");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
;// CONCATENATED MODULE: external "@mui/material/FormHelperText"
const FormHelperText_namespaceObject = require("@mui/material/FormHelperText");
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
;// CONCATENATED MODULE: external "@mui/icons-material/Visibility"
const Visibility_namespaceObject = require("@mui/icons-material/Visibility");
var Visibility_default = /*#__PURE__*/__webpack_require__.n(Visibility_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/VisibilityOff"
const VisibilityOff_namespaceObject = require("@mui/icons-material/VisibilityOff");
var VisibilityOff_default = /*#__PURE__*/__webpack_require__.n(VisibilityOff_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Fade"
const Fade_namespaceObject = require("@mui/material/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListSubheader"
var ListSubheader_ = __webpack_require__(9685);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: external "@mui/icons-material/Done"
const Done_namespaceObject = require("@mui/icons-material/Done");
var Done_default = /*#__PURE__*/__webpack_require__.n(Done_namespaceObject);
;// CONCATENATED MODULE: ./components/passwordPopper.js













function PasswordPopper({ id , open , anchorEl , validationArray  }) {
    const style = {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Popper_default()), {
        id: id,
        open: open,
        anchorEl: anchorEl,
        placement: "right",
        sx: {
            zIndex: 1301
        },
        transition: true,
        children: ({ TransitionProps  })=>/*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                ...TransitionProps,
                timeout: 350,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                    component: "div",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                        sx: style,
                        component: "div",
                        subheader: /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                            component: "div",
                            id: "nested-list-subheader",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    pl: 2,
                                    pt: 2
                                },
                                component: "div",
                                children: "Password Must:"
                            })
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                px: 2
                            },
                            component: "div",
                            children: validationArray.map((val, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                            disableGutters: true,
                                            sx: {
                                                maxWidth: 175
                                            },
                                            children: [
                                                val.active ? /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                    sx: {
                                                        minWidth: 30,
                                                        color: "red"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                        fontSize: "small"
                                                    })
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                    sx: {
                                                        minWidth: 30,
                                                        color: "green"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Done_default()), {
                                                        fontSize: "small"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                    primary: val.text,
                                                    primaryTypographyProps: {
                                                        fontSize: ".75rem"
                                                    }
                                                })
                                            ]
                                        }),
                                        index !== validationArray.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                            variant: "middle",
                                            component: "li"
                                        })
                                    ]
                                }, index))
                        })
                    })
                })
            })
    });
}

;// CONCATENATED MODULE: ./components/modals/createModal.js

















const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper"
};
function CreateStatus(props) {
    const headers = {
        "content-Type": "application/json"
    };
    (0,fetchy/* fetchy */.X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/User/Create", "POST", props.login, headers).catch((error)=>{
        console.log("API error: " + JSON.parse(error.message).message);
        props.setError("API error: " + JSON.parse(error.message).message);
        props.setCreatePosted(false);
    }).then(()=>{
        document.cookie = "LoggedIn=create";
        props.setIsLoggedIn(true);
        props.setIsStep2(true);
        props.setCreatePosted(false);
    }).catch((error)=>{
        if (typeof error.json === "function") {
            error.json().then((jsonError)=>{
                console.log("Json error from API");
                console.log(jsonError);
            }).catch((genericError)=>{
                console.log("Generic error from API");
                console.log(error.statusText);
            });
        } else {
            console.log("Fetch error");
            console.log(error);
        }
        // console.log('React fetch error: ' + JSON.stringify(error.message))
        // console.log('React fetch error: ' + JSON.stringify(error.cause))
        // props.setError('React fetch error: ' + error.message)
        props.setCreatePosted(false);
    });
}
function CreateModal(props) {
    const [login, setLogin] = (0,external_react_.useState)({
        email: "",
        password: ""
    });
    const [error, setError] = (0,external_react_.useState)(null);
    const [hasAttemptedLogin, setHasAttemptedLogin] = (0,external_react_.useState)(false);
    const [showPassword, setShowPassword] = (0,external_react_.useState)(false);
    const [anchorEl, setAnchorEl] = (0,external_react_.useState)(null);
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [isEmailValid, setIsEmailValid] = (0,external_react_.useState)(false);
    const [createPosted, setCreatePosted] = (0,external_react_.useState)(false);
    const [isPwMinLength, setIsPwMinLength] = (0,external_react_.useState)({
        text: "Be at least 8 characters in length.",
        active: true
    });
    const [isPwMaxLength, setIsPwMaxLength] = (0,external_react_.useState)({
        text: "Not exceed 24 characters in length.",
        active: false
    });
    const [isPwNumber, setIsPwNumber] = (0,external_react_.useState)({
        text: "Include at least one number.",
        active: true
    });
    const [isPwChar, setIsPwChar] = (0,external_react_.useState)({
        text: "Allowed characters: !@#$%^&*",
        active: true
    });
    const isPwValid = !isPwMinLength.active && !isPwMaxLength.active && !isPwNumber.active && !isPwChar.active;
    let validationArray = [
        isPwMinLength,
        isPwMaxLength,
        isPwNumber,
        isPwChar
    ];
    console.log("valArray: " + JSON.stringify(validationArray));
    function validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        console.log("regex: " + email.toString().match(regex));
        email.toString().match(regex) ? setIsEmailValid(true) : setIsEmailValid("Invalid Email");
    }
    function validatePw(pw) {
        const numRegex = /[0-9]/;
        const charRegex = /[a-zA-Z0-9!@#$%^&*]+/;
        if (pw.length < 8) {
            setIsPwMinLength({
                ...isPwMinLength,
                active: true
            });
        } else {
            setIsPwMinLength({
                ...isPwMinLength,
                active: false
            });
        }
        if (pw.length > 24) {
            setIsPwMaxLength({
                ...isPwMaxLength,
                active: true
            });
        } else {
            setIsPwMaxLength({
                ...isPwMaxLength,
                active: false
            });
        }
        if (!pw.match(numRegex)) {
            setIsPwNumber({
                ...isPwNumber,
                active: true
            });
        } else {
            setIsPwNumber({
                ...isPwNumber,
                active: false
            });
        }
        if (pw.match(charRegex) && pw.match(charRegex).toString().length < pw.length) {
            setIsPwChar({
                ...isPwChar,
                active: true
            });
        } else {
            setIsPwChar({
                ...isPwChar,
                active: false
            });
        }
    }
    function handleClick() {
        setHasAttemptedLogin(true);
        if (isPwValid && isEmailValid) {
            console.log("valArray: " + JSON.stringify(validationArray));
            console.log("login: " + JSON.stringify(login));
            setCreatePosted(true);
        }
    }
    const handleClickShowPassword = ()=>setShowPassword((show)=>!show);
    const handleClickShowValidation = (event)=>{
        console.log("current target: " + event.currentTarget);
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setOpen((previousOpen)=>!previousOpen);
    };
    const handleMouseDownPassword = (event)=>{
        event.preventDefault();
    };
    const canBeOpen = open && anchorEl && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                id: "modal-modal-title",
                variant: "h6",
                component: "h2",
                sx: {
                    textAlign: "center",
                    mb: 3
                },
                children: "Create Account"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        variant: "standard",
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "standard-basic-email",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
                                autoFocus: true,
                                id: "standard-basic-email",
                                variant: "standard",
                                label: "Email",
                                sx: {
                                    mb: 2
                                },
                                error: isEmailValid !== true && hasAttemptedLogin ? true : false,
                                value: login.email,
                                onChange: (e)=>{
                                    validateEmail(e.target.value);
                                    setLogin({
                                        ...login,
                                        email: e.target.value
                                    });
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        variant: "standard",
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "standard-adornment-password",
                                error: !isPwValid && hasAttemptedLogin,
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
                                id: "standard-adornment-password",
                                type: showPassword ? "text" : "password",
                                error: !isPwValid && hasAttemptedLogin,
                                onChange: (e)=>{
                                    validatePw(e.target.value);
                                    setLogin({
                                        ...login,
                                        password: e.target.value
                                    });
                                },
                                onKeyDown: (e)=>{
                                    if (e.code === "Enter") {
                                        handleClick();
                                    }
                                },
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                    position: "end",
                                    children: !isPwValid && hasAttemptedLogin ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            color: "error",
                                            "aria-label": "toggle password visibility",
                                            onClick: handleClickShowPassword,
                                            onMouseDown: handleMouseDownPassword,
                                            children: showPassword ? /*#__PURE__*/ jsx_runtime_.jsx((VisibilityOff_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Visibility_default()), {})
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        "aria-label": "toggle password visibility",
                                        onClick: handleClickShowPassword,
                                        onMouseDown: handleMouseDownPassword,
                                        children: showPassword ? /*#__PURE__*/ jsx_runtime_.jsx((VisibilityOff_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Visibility_default()), {})
                                    })
                                })
                            }),
                            !isPwValid && hasAttemptedLogin && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormHelperText_default()), {
                                    error: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            color: !isPwValid ? hasAttemptedLogin ? "error" : "warning" : "info",
                                            "aria-label": "toggle pw validation errors",
                                            onClick: handleClickShowValidation,
                                            onMouseDown: handleMouseDownPassword,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Error_default()), {})
                                        }),
                                        "Check Password Rules",
                                        /*#__PURE__*/ jsx_runtime_.jsx(PasswordPopper, {
                                            id: id,
                                            open: open,
                                            anchorEl: anchorEl,
                                            validationArray: validationArray
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: error
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            width: "100%",
                            mx: "auto",
                            display: "block",
                            pt: 4
                        },
                        children: [
                            createPosted ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                sx: {
                                    minWidth: 75,
                                    mx: "auto",
                                    display: "block"
                                },
                                variant: "contained",
                                onClick: ()=>handleClick(),
                                disabled: true,
                                children: "Create"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                sx: {
                                    minWidth: 75,
                                    mx: "auto",
                                    display: "block"
                                },
                                variant: "contained",
                                onClick: ()=>handleClick(),
                                children: "Create"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                sx: {
                                    width: "100%",
                                    mx: "auto",
                                    display: "block",
                                    mt: 3
                                },
                                href: "",
                                onClick: ()=>props.setIsCreate(false),
                                children: "Go to Login"
                            })
                        ]
                    })
                ]
            }),
            createPosted && /*#__PURE__*/ jsx_runtime_.jsx(CreateStatus, {
                login: login,
                setHasCookie: (data)=>props.setHasCookie(data),
                setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
                setError: (error)=>setError(error),
                setCreatePosted: (data)=>setCreatePosted(data),
                setUserName: (data)=>props.setUserName(data),
                setOpen: (data)=>props.setOpen(data),
                setIsStep2: (data)=>props.setIsStep2(data)
            })
        ]
    });
}
{}
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
;// CONCATENATED MODULE: external "mui-tel-input"
const external_mui_tel_input_namespaceObject = require("mui-tel-input");
;// CONCATENATED MODULE: external "@mui/material/utils"
const utils_namespaceObject = require("@mui/material/utils");
// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(5567);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
;// CONCATENATED MODULE: external "@mui/icons-material/Place"
const Place_namespaceObject = require("@mui/icons-material/Place");
var Place_default = /*#__PURE__*/__webpack_require__.n(Place_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Grid"
const Grid_namespaceObject = require("@mui/material/Grid");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/modals/createStep2Modal.js
/* eslint-disable react/prop-types */ 





















function SearchAddress(props) {
    const headers = {
        "Content-Type": "application/json"
    };
    fetch("https://atlas.microsoft.com/search/address/json?api-version=1.0&countrySet=US&subscription-key=nbaeKPTLIg1Yme-hCVAyw0DToUeuljC811pMgXlqbVY&query=" + props.address).then((res)=>res.json()).then((data)=>{
        console.log("handleFetch data: " + JSON.stringify(data));
        const addresses = data.results.filter((result)=>result.address.streetNumber != null).map((result)=>({
                address: result.address.freeformAddress,
                zip: result.address.postalCode,
                state: result.address.countrySubdivision,
                city: result.address.municipality,
                streetName: result.address.streetName,
                streetNumber: result.address.streetNumber,
                key: result.id
            }));
        console.log("handleFetch addresses: " + JSON.stringify(addresses));
        props.setNewAddresses(addresses);
        props.setAddressPosted(false);
    }).catch((error)=>{
        console.log("handleFetch error: " + error);
        //props.setError(error)
        props.setAddressPosted(false);
    });
}
function CreateStep2Status(props) {
    const router = (0,router_.useRouter)();
    const headers = {
        "Content-Type": "application/json"
    };
    const addies = {
        firstName: props.firstName,
        lastName: props.lastName,
        phone: props.phone,
        address1: props.address.streetNumber,
        address2: props.address.streetName,
        city: props.address.city,
        state: props.address.state,
        zip: props.address.zip
    };
    console.log("addies: " + JSON.stringify(addies));
    (0,fetchy/* fetchy */.X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/User/CreateStep2", "POST", addies, headers).catch((error)=>{
        console.log("API error: " + JSON.parse(error.message).message);
        props.setError("API error: " + JSON.parse(error.message).message);
        props.setCreateStep2Posted(false);
    }).then((data)=>{
        console.log("handleFetch create data: " + JSON.stringify(data));
        document.cookie = "LoggedIn=true";
        props.setCreateStep2Posted(false);
        props.setIsLoggedIn(true);
        props.setOpen(false);
        router.reload();
    }).catch((error)=>{
        console.log("React fetch error: " + error.message);
        props.setError("React fetch error: " + error.message);
        props.setCreateStep2Posted(false);
    });
}
function CreateStep2Modal(props) {
    const [addressPosted, setAddressPosted] = (0,external_react_.useState)(false);
    const [createStep2Posted, setCreateStep2Posted] = (0,external_react_.useState)(false);
    const [inputValue, setInputValue] = (0,external_react_.useState)("");
    const [value, setValue] = (0,external_react_.useState)("");
    const [firstName, setFirstName] = (0,external_react_.useState)("");
    const [lastName, setLastName] = (0,external_react_.useState)("");
    const [phone, setPhone] = (0,external_react_.useState)("");
    const [isValid, setIsValid] = (0,external_react_.useState)({
        phone: false,
        address: false,
        fName: false,
        lName: false
    });
    const [newAddresses, setNewAddresses] = (0,external_react_.useState)([]);
    const [error, setError] = (0,external_react_.useState)(null);
    const fetch1 = external_react_default().useMemo(()=>(0,utils_namespaceObject.debounce)(()=>{
            setAddressPosted(true);
        }, 400), []);
    const charRegex = new RegExp(/^[\s\da-zA-Z0-9!@#$%^&'*]*$/);
    // useEffect(() => {
    //     console.log('useeffect hit\n phone: ' + isValid.phone + '\n address: ' + isValid.address + '\n firstName: ' + firstName + '\n lastName: ' + lastName)
    //     if (isValid.phone && isValid.address && firstName && lastName) {
    //         console.log('all valid')
    //         setisValid({...isValid, fullyValid: true})
    //     }
    // }, [isValid.phone, isValid.address, firstName, lastName])
    console.log("valid: " + JSON.stringify(isValid));
    console.log("all valid: " + Object.values(isValid).every(Boolean));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                id: "modal-modal-title",
                variant: "h6",
                component: "h2",
                sx: {
                    textAlign: "center",
                    mb: 3
                },
                children: "Create Step 2"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        autoFocus: true,
                        type: "text",
                        id: "fname",
                        name: "fname",
                        className: "create-input",
                        variant: "standard",
                        margin: "dense",
                        label: "First Name",
                        onChange: (e)=>{
                            setFirstName(e.target.value);
                            setIsValid({
                                ...isValid,
                                fName: charRegex.test(e.target.value)
                            });
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        type: "text",
                        id: "lname",
                        name: "lname",
                        className: "create-input",
                        variant: "standard",
                        margin: "dense",
                        label: "Last Name",
                        onChange: (e)=>{
                            setLastName(e.target.value);
                            setIsValid({
                                ...isValid,
                                lName: charRegex.test(e.target.value)
                            });
                            console.log("match? " + charRegex.test(e.target.value));
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_mui_tel_input_namespaceObject.MuiTelInput, {
                        helperText: "Phone",
                        variant: "standard",
                        forceCallingCode: true,
                        defaultCountry: "US",
                        value: phone,
                        margin: "normal",
                        error: !isValid.phone,
                        onChange: (e)=>{
                            console.log("phone valid: " + (0,external_mui_tel_input_namespaceObject.matchIsValidTel)(e));
                            setPhone(e);
                            setIsValid({
                                ...isValid,
                                phone: (0,external_mui_tel_input_namespaceObject.matchIsValidTel)(e)
                            });
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                        sx: {
                            m: 0
                        },
                        margin: "dense",
                        autoComplete: true,
                        onChange: (event, newValue)=>{
                            setValue(newValue);
                            console.log("handlechange target value: " + JSON.stringify(newValue));
                            if (newValue && newValue.streetNumber && newValue.streetName && newValue.city && newValue.state && newValue.zip) {
                                setIsValid({
                                    ...isValid,
                                    address: true
                                });
                                console.log("address is valid");
                            }
                        },
                        onInputChange: (event, newInputValue)=>{
                            setInputValue(newInputValue);
                            fetch1();
                        },
                        value: value,
                        className: "create-input",
                        filterOptions: (x)=>x,
                        noOptionsText: "No locations",
                        options: newAddresses ? newAddresses : [],
                        getOptionLabel: (option)=>typeof option === "string" ? option : option.address,
                        isOptionEqualToValue: (option, value)=>option.id === value.id,
                        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                ...params,
                                variant: "standard",
                                label: "Address"
                            }),
                        renderOption: (props, option)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                ...props,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                        sx: {
                                            minWidth: 40
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Place_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: option.streetNumber + " " + option.streetName,
                                        secondary: option.city + ", " + option.state + " " + option.zip
                                    })
                                ]
                            });
                        },
                        onKeyDown: (e)=>{
                            if (e.code === "Enter") {
                                setCreateStep2Posted(true);
                            }
                        }
                    }, (option)=>option.key),
                    error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: error
                    }),
                    Object.values(isValid).every(Boolean) ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        sx: {
                            minWidth: 75,
                            mx: "auto",
                            display: "block",
                            mt: 4
                        },
                        variant: "contained",
                        onClick: ()=>setCreateStep2Posted(true),
                        children: "Submit"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        sx: {
                            minWidth: 75,
                            mx: "auto",
                            display: "block",
                            mt: 4
                        },
                        variant: "contained",
                        disabled: true,
                        children: "Submit"
                    }),
                    addressPosted && /*#__PURE__*/ jsx_runtime_.jsx(SearchAddress, {
                        setError: (error)=>setError(error),
                        setAddressPosted: (data)=>setAddressPosted(data),
                        setNewAddresses: (data)=>setNewAddresses(data),
                        address: inputValue
                    }),
                    createStep2Posted && /*#__PURE__*/ jsx_runtime_.jsx(CreateStep2Status, {
                        firstName: firstName,
                        lastName: lastName,
                        phone: phone,
                        address: value,
                        isActive: props.isActive,
                        setIsCreate: (data)=>props.setIsCreate(data),
                        setError: (error)=>setError(error),
                        setCreateStep2Posted: (data)=>setCreateStep2Posted(data),
                        setOpen: (data)=>props.setOpen(data),
                        setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
                        setIsStep2: (data)=>props.setIsStep2(data),
                        setUserName: (data)=>props.setUserName(data)
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/login.js
/* eslint-disable react/prop-types */ 




function Login(props) {
    return !props.isCreate ? /*#__PURE__*/ jsx_runtime_.jsx(LoginModal, {
        setIsCreate: (data)=>props.setIsCreate(data),
        setHasCookie: (data)=>props.setHasCookie(data),
        setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
        setUserName: (data)=>props.setUserName(data),
        setRole: (data)=>props.setRole(data),
        setOpen: (data)=>props.setOpen(data),
        closeLogin: ()=>props.closeLogin()
    }) : !props.isStep2 ? /*#__PURE__*/ jsx_runtime_.jsx(CreateModal, {
        setIsCreate: (data)=>props.setIsCreate(data),
        setHasCookie: (data)=>props.setHasCookie(data),
        setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
        setUserName: (data)=>props.setUserName(data),
        setOpen: (data)=>props.setOpen(data),
        setIsStep2: (data)=>props.setIsStep2(data)
    }) : /*#__PURE__*/ jsx_runtime_.jsx(CreateStep2Modal, {
        setIsCreate: (data)=>props.setIsCreate(data),
        setHasCookie: (data)=>props.setHasCookie(data),
        setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
        setUserName: (data)=>props.setUserName(data),
        setOpen: (data)=>props.setOpen(data),
        setIsStep2: (data)=>props.setIsStep2(data)
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/orderMap.js
var orderMap = __webpack_require__(1611);
// EXTERNAL MODULE: ./components/getPrice.js
var getPrice = __webpack_require__(8037);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/icons-material/CloseRounded"
var CloseRounded_ = __webpack_require__(4317);
var CloseRounded_default = /*#__PURE__*/__webpack_require__.n(CloseRounded_);
;// CONCATENATED MODULE: external "@mui/icons-material/KebabDining"
const KebabDining_namespaceObject = require("@mui/icons-material/KebabDining");
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(8053);
;// CONCATENATED MODULE: ./components/cart.js

















 // Grid version 2





const CartItem = (0,styles_.styled)((Paper_default()))(({ theme  })=>({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        borderRadius: 1,
        boxShadow: 3
    }));
const Submit = (0,styles_.styled)((Paper_default()))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fafaf5",
        ...theme.typography.body2,
        textAlign: "center",
        color: theme.palette.text.secondary,
        boxShadow: "none"
    }));
function FoodItemWithPrice(props) {
    //console.log('fooditemwithprice foodItem: ' + JSON.stringify(props))
    const price = props.foodItem.customizeOptions.map((cartOption)=>cartOption.optionItems.reduce((a, b)=>a + b.price, 0)).reduce((a, b)=>a + b, 0);
    return price.toLocaleString("us-US", {
        style: "currency",
        currency: "USD"
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
function Cart(props) {
    const [expandItem, setExpandItem] = (0,external_react_.useState)(0);
    const [token, setToken] = (0,external_react_.useState)((0,getCookie/* getCookie */.e)("token"));
    console.log("cart props: " + JSON.stringify(props)) //jwt_decode(getCookie('token'))
    ;
    console.log("token: " + token);
    if (token) {
        console.log("decoded: " + JSON.stringify(external_jwt_decode_default()((0,getCookie/* getCookie */.e)("token"))));
    }
    const handleExpand = (cartItemID)=>{
        console.log("handling expand. id: " + JSON.stringify(cartItemID));
        if (cartItemID === expandItem) {
            setExpandItem(0);
        } else {
            setExpandItem(cartItemID);
        }
    };
    let defaultOption;
    if (props.currentCartItems.flatMap((item)=>item.customizeOptions).find((option)=>option.isDefaultOption)) {
        defaultOption = props.currentCartItems.flatMap((item)=>item.customizeOptions).find((option)=>option.isDefaultOption).optionID;
    } else {
        defaultOption = "";
    }
    console.log("defaultOption: " + JSON.stringify(defaultOption));
    console.log("expandItem: " + JSON.stringify(expandItem));
    console.log("cart items: " + JSON.stringify(props.currentCartItems));
    return /*#__PURE__*/ jsx_runtime_.jsx(Submit, {
        elevation: 3,
        sx: {
            width: 300,
            width: "100%",
            pb: 2,
            boxShadow: 5
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
            spacing: 1,
            justifyContent: "space-between",
            sx: {
                minHeight: 300,
                minWidth: 300
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                            sx: {
                                p: 1
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                                spacing: 1,
                                children: [
                                    props.currentCartItems.length === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CartItem, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                component: "div",
                                                textAlign: "center",
                                                fontWeight: 500,
                                                sx: {
                                                    mt: 2
                                                },
                                                children: "No items added"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                component: Link/* NextLinkComposed */.Z,
                                                variant: "contained",
                                                to: "/menu",
                                                onClick: ()=>props.setAnchorElCart(false),
                                                sx: {
                                                    m: 2
                                                },
                                                children: "Go To Menu"
                                            })
                                        ]
                                    }),
                                    props.currentCartItems.map((foodItem)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(CartItem, {
                                                onClick: ()=>handleExpand(foodItem.cartItemID),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                                    container: true,
                                                    width: 300,
                                                    spacing: 1,
                                                    alignItems: "center",
                                                    sx: {
                                                        margin: "0 auto"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                                            xs: 10,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
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
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                                            xs: 2,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                                sx: {
                                                                    border: "1px solid",
                                                                    boxShadow: 3,
                                                                    fontSize: "15px",
                                                                    p: 0.25
                                                                },
                                                                variant: "contained",
                                                                onClick: ()=>props.removeItem(foodItem),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((CloseRounded_default()), {
                                                                    fontSize: "1px"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                                            xs: 12,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                    disablePadding: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                        primary: expandItem !== foodItem.cartItemID && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                                                            spacing: 1,
                                                                            container: true,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                                                                    xs: 9,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                        noWrap: true,
                                                                                        children: foodItem.customizeOptions.filter((cartItemCustomize)=>defaultOption !== cartItemCustomize.optionID).flatMap((option)=>option.optionItems.filter((customizeOptionItem)=>customizeOptionItem.customizeOptionItem !== option.optionName && customizeOptionItem.customizeOptionItem).map((x)=>x.customizeOptionItem)).join(", ")
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                                                                    xs: 2,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FoodItemWithPrice, {
                                                                                            foodItem: foodItem
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                }, foodItem.cartItemID),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                                                                    in: expandItem === foodItem.cartItemID,
                                                                    timeout: "auto",
                                                                    unmountOnExit: true,
                                                                    children: foodItem.customizeOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                                                            disablePadding: true,
                                                                            dense: true,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                                sx: {
                                                                                    bgcolor: "background.light",
                                                                                    boxShadow: 3,
                                                                                    mb: 1,
                                                                                    borderRadius: .5
                                                                                },
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                                    primary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                                                                                        direction: "row",
                                                                                        justifyContent: "space-between",
                                                                                        width: "100%",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                component: "div",
                                                                                                fontSize: ".75rem",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                                                                                                    direction: "row",
                                                                                                    justifyContent: "space-between",
                                                                                                    width: "100%",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                                                            minWidth: 75,
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                                                children: option.optionName === foodItem.foodName ? "Base Item: " : option.optionName + ": "
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                                                            fontSize: ".75rem",
                                                                                                            children: option.optionItems.map((x)=>x.customizeOptionItem).join(", ")
                                                                                                        })
                                                                                                    ]
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                                                                component: "div",
                                                                                                fontSize: ".75rem",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(OptionsWithPrice, {
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
                                ]
                            })
                        }),
                        props.currentCartItems.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            component: "div",
                            textAlign: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(getPrice/* GetPrice */.R, {
                                currentCartItems: props.currentCartItems
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        textAlign: "center",
                        sx: {
                            minWidth: 200
                        },
                        children: !props.isLoggedIn && props.currentCartItems.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                pt: 3,
                                mx: 3
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    children: "Create Account to Place Order"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    sx: {
                                        mt: 1
                                    },
                                    variant: "contained",
                                    onClick: ()=>{
                                        props.setIsCreate(true);
                                        props.setOpenLogin(true);
                                    },
                                    children: "Create Account"
                                })
                            ]
                        }) : !props.userName ? /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                width: "90%",
                                mx: "auto"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    onClick: ()=>{
                                        props.setIsCreate(true);
                                        props.setIsStep2(true);
                                        props.setOpenLogin(true);
                                    },
                                    children: "Complete Account Creation"
                                })
                            })
                        }) : props.currentCartItems.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: Link/* NextLinkComposed */.Z,
                            sx: {
                                mx: "auto",
                                width: "150px",
                                display: "block",
                                textAlign: "center"
                            },
                            variant: "contained",
                            color: "secondary",
                            to: "/order",
                            onClick: ()=>{
                                props.setAnchorElCart(null);
                                props.handleAddOrderClick();
                            },
                            children: "Prepare Order"
                        })
                    })
                })
            ]
        })
    });
}
{}{}
// EXTERNAL MODULE: ./components/theme.js + 1 modules
var theme = __webpack_require__(945);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const icons_material_Menu_namespaceObject = require("@mui/icons-material/Menu");
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/icons-material/LocalPizza"
var LocalPizza_ = __webpack_require__(2118);
var LocalPizza_default = /*#__PURE__*/__webpack_require__.n(LocalPizza_);
;// CONCATENATED MODULE: external "@mui/icons-material/ShoppingCart"
const ShoppingCart_namespaceObject = require("@mui/icons-material/ShoppingCart");
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "@mui/icons-material/Logout"
const Logout_namespaceObject = require("@mui/icons-material/Logout");
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AccountBox"
const AccountBox_namespaceObject = require("@mui/icons-material/AccountBox");
var AccountBox_default = /*#__PURE__*/__webpack_require__.n(AccountBox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ManageAccounts"
const ManageAccounts_namespaceObject = require("@mui/icons-material/ManageAccounts");
var ManageAccounts_default = /*#__PURE__*/__webpack_require__.n(ManageAccounts_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Tune"
const Tune_namespaceObject = require("@mui/icons-material/Tune");
var Tune_default = /*#__PURE__*/__webpack_require__.n(Tune_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Cottage"
const Cottage_namespaceObject = require("@mui/icons-material/Cottage");
var Cottage_default = /*#__PURE__*/__webpack_require__.n(Cottage_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/RestaurantMenu"
const RestaurantMenu_namespaceObject = require("@mui/icons-material/RestaurantMenu");
var RestaurantMenu_default = /*#__PURE__*/__webpack_require__.n(RestaurantMenu_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/PersonAdd"
var PersonAdd_ = __webpack_require__(5905);
var PersonAdd_default = /*#__PURE__*/__webpack_require__.n(PersonAdd_);
;// CONCATENATED MODULE: external "@mui/icons-material/Login"
const Login_namespaceObject = require("@mui/icons-material/Login");
var Login_default = /*#__PURE__*/__webpack_require__.n(Login_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
;// CONCATENATED MODULE: ./components/toolbars/main.js












//import Link, { NextLinkComposed } from 'next/link'














function Index() {
    return /*#__PURE__*/ _jsx(Button, {
        component: NextLinkComposed,
        to: {
            pathname: "/"
        },
        children: "Button link"
    });
}
function MainToolbar({ anchorElNav , anchorElUser , handleOpenNavMenu , handleCloseNavMenu , handleOpenUserMenu , handleCloseUserMenu , setOpen , setIsBackOffice , setIsCreate , setIsStep2 , isLoggedIn , hasCookie , userName , role , handleCartClick , cartHasItems , open  }) {
    console.log("isLoggedIn is " + isLoggedIn);
    console.log("username is " + userName);
    console.log("firstname cookie is " + (typeof document !== "undefined") ? "not defined" : 0);
    const riffReff = (0,external_react_.useRef)(null);
    console.log("main ref is " + riffReff.current);
    return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        maxWidth: "xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
            disableGutters: true,
            ref: riffReff,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    sx: {
                        mr: 2,
                        display: {
                            xs: "none",
                            md: "flex"
                        },
                        fontFamily: "fantasy",
                        fontWeight: 500,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none"
                    },
                    children: [
                        "   DANS",
                        /*#__PURE__*/ jsx_runtime_.jsx((LocalPizza_default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                mr: 1
                            }
                        }),
                        "PIZZA"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        flexGrow: 1,
                        display: {
                            xs: "flex",
                            md: "none"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "large",
                            "aria-label": "account of current user",
                            "aria-controls": "menu-appbar",
                            "aria-haspopup": "true",
                            onClick: handleOpenNavMenu,
                            color: "inherit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                            id: "menu-appbar",
                            anchorEl: anchorElNav,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            keepMounted: true,
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left"
                            },
                            open: Boolean(anchorElNav),
                            onClose: handleCloseNavMenu,
                            sx: {
                                display: {
                                    xs: "block",
                                    md: "none"
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    to: "/",
                                    onClick: handleCloseNavMenu,
                                    sx: {
                                        py: 0,
                                        my: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Cottage_default()), {
                                            sx: {
                                                mr: 2
                                            }
                                        }),
                                        "Home"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    to: "/menu",
                                    onClick: handleCloseNavMenu,
                                    sx: {
                                        py: 0,
                                        my: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((RestaurantMenu_default()), {
                                            sx: {
                                                mr: 2
                                            }
                                        }),
                                        "Menu"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    sx: {
                        mr: 2,
                        display: {
                            xs: "flex",
                            md: "none"
                        },
                        flexGrow: 1,
                        fontFamily: "fantasy",
                        fontWeight: 500,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none"
                    },
                    children: "DAN'S PIZZA"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        flexGrow: 1,
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: Link/* NextLinkComposed */.Z,
                            onClick: handleCloseNavMenu,
                            to: "/",
                            sx: {
                                my: 2,
                                color: "white",
                                display: "block",
                                textAlign: "center",
                                "&:hover": {
                                    bgcolor: "background.hover"
                                }
                            },
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: Link/* NextLinkComposed */.Z,
                            onClick: handleCloseNavMenu,
                            to: "/menu",
                            sx: {
                                my: 2,
                                color: "white",
                                display: "block",
                                textAlign: "center",
                                "&:hover": {
                                    bgcolor: "background.hover"
                                }
                            },
                            children: "Menu"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        flexGrow: 0
                    },
                    children: isLoggedIn ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Open settings",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    sx: {
                                        color: "white",
                                        p: 0
                                    },
                                    onClick: handleOpenUserMenu,
                                    children: userName ? userName : "Profile"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                sx: {
                                    mt: "45px"
                                },
                                id: "menu-appbar",
                                anchorEl: anchorElUser,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                open: Boolean(anchorElUser),
                                onClose: handleCloseUserMenu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        onClick: ()=>handleCloseUserMenu("Logout"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Logout_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Logout"
                                        ]
                                    }),
                                    userName ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        component: Link/* NextLinkComposed */.Z,
                                        to: "/account",
                                        onClick: ()=>handleCloseUserMenu("Account"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((AccountBox_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Account"
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        onClick: ()=>{
                                            setIsCreate(true);
                                            setIsStep2(true);
                                            setOpen(true);
                                            handleCloseUserMenu();
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ManageAccounts_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Complete ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " Account"
                                        ]
                                    }),
                                    role == "Employee" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        onClick: ()=>{
                                            handleCloseUserMenu();
                                        },
                                        component: Link/* NextLinkComposed */.Z,
                                        to: "/backoffice/manage",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tune_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Back Office"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                onClick: handleCartClick,
                                sx: {
                                    pl: 3
                                },
                                children: cartHasItems ? open ? /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {
                                    sx: {
                                        color: "#8d762b"
                                    }
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {
                                    sx: {
                                        color: "white"
                                    }
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                sx: {
                                    color: "white",
                                    textAlign: "center",
                                    "&:hover": {
                                        bgcolor: "background.hover"
                                    },
                                    mr: 2
                                },
                                focusRipple: false,
                                onClick: ()=>{
                                    setIsCreate(true);
                                    setOpen(true);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((PersonAdd_default()), {
                                        sx: {
                                            mr: 1
                                        }
                                    }),
                                    "Create"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                sx: {
                                    color: "white",
                                    textAlign: "center",
                                    "&:hover": {
                                        bgcolor: "background.hover"
                                    },
                                    mr: 2
                                },
                                focusRipple: false,
                                onClick: ()=>{
                                    setIsCreate(false);
                                    setOpen(true);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Login_default()), {
                                        sx: {
                                            mr: 1
                                        }
                                    }),
                                    "Login"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                onClick: handleCartClick,
                                sx: {
                                    "&:hover": {
                                        bgcolor: "background.hover"
                                    }
                                },
                                children: cartHasItems ? open ? /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {
                                    sx: {
                                        color: "#8d762b"
                                    }
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {
                                    sx: {
                                        color: "white"
                                    }
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/toolbars/order.js















function OrderToolbar({ anchorElNav , anchorElUser , handleOpenNavMenu , handleCloseNavMenu , handleOpenUserMenu , handleCloseUserMenu , setOpen , hasCookie , userName , role , handleCartClick , cartHasItems , open , setHasOrder  }) {
    const pages = [
        "Home",
        "Menu"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        maxWidth: "xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
            disableGutters: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    sx: {
                        mr: 2,
                        display: {
                            xs: "none",
                            md: "flex"
                        },
                        fontFamily: "fantasy",
                        fontWeight: 500,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none"
                    },
                    children: [
                        "   DANS",
                        /*#__PURE__*/ jsx_runtime_.jsx((LocalPizza_default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                mr: 1
                            }
                        }),
                        "PIZZA"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        flexGrow: 1,
                        display: {
                            xs: "flex",
                            md: "none"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "large",
                            "aria-label": "account of current user",
                            "aria-controls": "menu-appbar",
                            "aria-haspopup": "true",
                            onClick: handleOpenNavMenu,
                            color: "inherit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            id: "menu-appbar",
                            anchorEl: anchorElNav,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            keepMounted: true,
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left"
                            },
                            open: Boolean(anchorElNav),
                            onClose: handleCloseNavMenu,
                            sx: {
                                display: {
                                    xs: "block",
                                    md: "none"
                                }
                            },
                            children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        textAlign: "center",
                                        children: page
                                    })
                                }, page))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    noWrap: true,
                    component: "a",
                    href: "",
                    sx: {
                        mr: 2,
                        display: {
                            xs: "flex",
                            md: "none"
                        },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none"
                    },
                    children: "LOGO"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        flexGrow: 1,
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    sx: {
                        color: "white"
                    },
                    onClick: ()=>setHasOrder(false),
                    component: Link/* NextLinkComposed */.Z,
                    to: "/menu",
                    children: "Back To Cart"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "@mui/icons-material/ModeEdit"
const ModeEdit_namespaceObject = require("@mui/icons-material/ModeEdit");
var ModeEdit_default = /*#__PURE__*/__webpack_require__.n(ModeEdit_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Receipt"
const Receipt_namespaceObject = require("@mui/icons-material/Receipt");
var Receipt_default = /*#__PURE__*/__webpack_require__.n(Receipt_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/BarChart"
const BarChart_namespaceObject = require("@mui/icons-material/BarChart");
var BarChart_default = /*#__PURE__*/__webpack_require__.n(BarChart_namespaceObject);
;// CONCATENATED MODULE: ./components/toolbars/backOffice.js















//import Link, { NextLinkComposed } from 'next/link'






function backOffice_Index() {
    return /*#__PURE__*/ _jsx(Button, {
        component: NextLinkComposed,
        to: {
            pathname: "/"
        },
        children: "Button link"
    });
}
function BackOfficeToolbar({ anchorElNav , anchorElUser , handleOpenNavMenu , handleCloseNavMenu , handleOpenUserMenu , handleCloseUserMenu , setIsBackOffice , setOpen , isLoggedIn , userName , role , handleCartClick , cartHasItems , open  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        maxWidth: "xl",
        sx: {
            bgcolor: "black"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
            disableGutters: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    sx: {
                        mr: 2,
                        display: {
                            xs: "none",
                            md: "flex"
                        },
                        fontFamily: "fantasy",
                        fontWeight: 500,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none"
                    },
                    children: [
                        "   BACK",
                        /*#__PURE__*/ jsx_runtime_.jsx((LocalPizza_default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                mr: 1
                            }
                        }),
                        "OFFICE"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        flexGrow: 1,
                        display: {
                            xs: "flex",
                            md: "none"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "large",
                            "aria-label": "account of current user",
                            "aria-controls": "menu-appbar",
                            "aria-haspopup": "true",
                            onClick: handleOpenNavMenu,
                            color: "inherit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                            id: "menu-appbar",
                            anchorEl: anchorElNav,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            keepMounted: true,
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left"
                            },
                            open: Boolean(anchorElNav),
                            onClose: handleCloseNavMenu,
                            sx: {
                                display: {
                                    xs: "block",
                                    md: "none"
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    to: "/",
                                    onClick: handleCloseNavMenu,
                                    sx: {
                                        py: 0,
                                        my: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Cottage_default()), {
                                            sx: {
                                                mr: 2
                                            }
                                        }),
                                        "Home"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    to: "/backoffice/manage",
                                    onClick: handleCloseNavMenu,
                                    sx: {
                                        py: 0,
                                        my: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Receipt_default()), {
                                            sx: {
                                                mr: 2
                                            }
                                        }),
                                        "Manage Orders"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    to: "/backoffice/editSite",
                                    onClick: handleCloseNavMenu,
                                    sx: {
                                        py: 0,
                                        my: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ModeEdit_default()), {
                                            sx: {
                                                mr: 2
                                            }
                                        }),
                                        "Edit Site"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    to: "/backoffice/sales",
                                    onClick: handleCloseNavMenu,
                                    sx: {
                                        py: 0,
                                        my: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((BarChart_default()), {
                                            sx: {
                                                mr: 2
                                            }
                                        }),
                                        "Sales"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    sx: {
                        mr: 2,
                        display: {
                            xs: "flex",
                            md: "none"
                        },
                        flexGrow: 1,
                        fontFamily: "fantasy",
                        fontWeight: 500,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none"
                    },
                    children: "DAN'S PIZZA"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        flexGrow: 1,
                        display: {
                            xs: "none",
                            md: "flex"
                        },
                        justifyContent: "space-evenly"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Store Front",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    onClick: ()=>{
                                        handleCloseNavMenu("");
                                    },
                                    to: "/",
                                    sx: {
                                        ml: 2,
                                        my: "auto",
                                        color: "white",
                                        "&:hover": {
                                            bgcolor: "#3c3c3c"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Cottage_default()), {
                                        sx: {
                                            mx: "auto",
                                            width: "100%"
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Manage Orders",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    onClick: handleCloseNavMenu,
                                    to: "/backoffice/manage",
                                    sx: {
                                        my: "auto",
                                        color: "white",
                                        "&:hover": {
                                            bgcolor: "#3c3c3c"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Receipt_default()), {
                                        sx: {
                                            mx: "auto",
                                            width: "100%"
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Edit Site",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    onClick: handleCloseNavMenu,
                                    to: "/backoffice/editSite",
                                    sx: {
                                        my: "auto",
                                        color: "white",
                                        "&:hover": {
                                            bgcolor: "#3c3c3c"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ModeEdit_default()), {
                                        sx: {
                                            mx: "auto",
                                            width: "100%"
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Sales",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    component: Link/* NextLinkComposed */.Z,
                                    onClick: handleCloseNavMenu,
                                    to: "/backoffice/sales",
                                    sx: {
                                        my: "auto",
                                        color: "white",
                                        "&:hover": {
                                            bgcolor: "#3c3c3c"
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((BarChart_default()), {
                                        sx: {
                                            mx: "auto",
                                            width: "100%"
                                        }
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        flexGrow: 0
                    },
                    children: isLoggedIn ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Open settings",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    sx: {
                                        my: "auto",
                                        color: "white",
                                        "&:hover": {
                                            bgcolor: "#3c3c3c"
                                        }
                                    },
                                    onClick: handleOpenUserMenu,
                                    children: userName ? userName + " (" + role + ")" : "Account"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                sx: {
                                    mt: "45px"
                                },
                                id: "menu-appbar",
                                anchorEl: anchorElUser,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                open: Boolean(anchorElUser),
                                onClose: handleCloseUserMenu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        onClick: ()=>handleCloseUserMenu("Logout"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Logout_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Logout"
                                        ]
                                    }),
                                    userName ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        component: Link/* NextLinkComposed */.Z,
                                        to: "/account",
                                        onClick: ()=>handleCloseUserMenu("Account"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((AccountBox_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Account"
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        onClick: ()=>{
                                            setIsCreate(true);
                                            setIsStep2(true);
                                            setOpen(true);
                                            handleCloseUserMenu();
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ManageAccounts_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Complete ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " Account"
                                        ]
                                    }),
                                    role == "Employee" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        onClick: ()=>{
                                            handleCloseUserMenu();
                                        },
                                        component: Link/* NextLinkComposed */.Z,
                                        to: "/backoffice/manage",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tune_default()), {
                                                sx: {
                                                    mr: 2
                                                }
                                            }),
                                            "Back Office"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                            title: "Open settings",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                sx: {
                                    color: "white"
                                },
                                onClick: ()=>setOpen(true),
                                children: "Login"
                            })
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/appBar.js

















const appBar_style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    aspectRatio: "1/1.618",
    width: {
        xs: "80vw",
        sm: "55vw",
        md: "30vw",
        lg: "20vw",
        xl: "15vw"
    },
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    px: 4,
    pt: 2,
    pb: 1
};
function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = (0,external_react_.useState)(null);
    const [anchorElUser, setAnchorElUser] = (0,external_react_.useState)(null);
    const [anchorElCart, setAnchorElCart] = (0,external_react_.useState)(null);
    const [hasCookie, setHasCookie] = (0,external_react_.useState)(false);
    const [isCreate, setIsCreate] = (0,external_react_.useState)(false);
    const [isStep2, setIsStep2] = (0,external_react_.useState)(false);
    //const ref = useRef(0)
    const open = Boolean(anchorElCart);
    const id = open ? "simple-popper" : undefined;
    const router = (0,router_.useRouter)();
    console.log("current path: " + router.asPath);
    console.log("isBackOffice: " + props.isBackOffice);
    //console.log('ref: ' + ref.current)
    (0,external_react_.useEffect)(()=>{
        console.log("appbar useeffect hit. isloggedIn: " + props.isLoggedIn);
        console.log("appbar useeffect hit. userName: " + props.userName);
        const firstNameToken = (0,getCookie/* getCookie */.e)("firstName");
        const loginToken = (0,getCookie/* getCookie */.e)("LoggedIn");
        props.setRole((0,getCookie/* getCookie */.e)("role"));
        props.setUserName((0,getCookie/* getCookie */.e)("firstName"));
        if (loginToken) {
            if (loginToken === "true") {
                console.log("appbar useeffect setting role and username.");
                if (!props.userName) {
                    if (!firstNameToken) {
                        console.log("refreshing with firstname cookie: " + (0,getCookie/* getCookie */.e)("firstName"));
                        router.reload();
                    }
                }
                console.log("appbar useeffect setting role and username." + props.userName);
                props.setIsLoggedIn(true);
            } else if (loginToken === "create") {
                //router.reload()
                props.setIsLoggedIn(true);
            //maybe open step2 create modal?
            } else {
                console.log("logout should be false now. checking path: " + router.asPath);
                if (router.asPath !== "/" && !router.asPath.startsWith("/menu")) {
                    console.log("redirecting to index");
                    router.push("/");
                }
                console.log("appbar -> no firstname or login token or login is false");
                props.setIsLoggedIn(false);
            }
            console.log("backoffice set: " + props.isBackOffice);
        }
        if (router.isReady && router.asPath.startsWith("/order")) {
            if (props.hasOrder === false) {
                router.push("/");
            }
        }
    }, [
        props.userName,
        props.role,
        props.isLoggedIn,
        props.isBackOffice
    ]);
    function logOut() {
        console.log("logout hit. state of isLoggedIn: " + props.isLoggedIn);
        document.cookie = "LoggedIn=false";
        router.reload();
    }
    const handleCartClick = (event)=>{
        console.log("Navbar handleClick: " + event.currentTarget);
        setAnchorElCart(anchorElCart ? null : event.currentTarget);
    };
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = (page)=>{
        console.log("page:" + page);
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = (setting)=>{
        switch(setting){
            case "Logout":
                {
                    logOut();
                }
            case "Account":
                {
                    return;
                }
        }
        setAnchorElUser(null);
    };
    console.log("appBar username: " + props.userName);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                children: props.isBackOffice ? /*#__PURE__*/ jsx_runtime_.jsx(BackOfficeToolbar, {
                    anchorElNav: anchorElNav,
                    anchorElUser: anchorElUser,
                    handleOpenNavMenu: (page)=>handleOpenNavMenu(page),
                    handleCloseNavMenu: (page)=>handleCloseNavMenu(page),
                    handleOpenUserMenu: (setting)=>handleOpenUserMenu(setting),
                    handleCloseUserMenu: (setting)=>handleCloseUserMenu(setting),
                    setOpen: (data)=>setOpen(data),
                    setHasOrder: (data)=>props.setHasOrder(data),
                    handleCartClick: (e)=>handleCartClick(e),
                    setIsBackOffice: (data)=>props.setIsBackOffice(data),
                    isLoggedIn: props.isLoggedIn,
                    open: open,
                    hasCookie: hasCookie,
                    userName: props.userName,
                    role: props.role,
                    cartHasItems: props.currentCartItems.length > 0
                }) : props.hasOrder ? /*#__PURE__*/ jsx_runtime_.jsx(OrderToolbar, {
                    anchorElNav: anchorElNav,
                    anchorElUser: anchorElUser,
                    handleOpenNavMenu: (page)=>handleOpenNavMenu(page),
                    handleCloseNavMenu: (page)=>handleCloseNavMenu(page),
                    handleOpenUserMenu: (setting)=>handleOpenUserMenu(setting),
                    handleCloseUserMenu: (setting)=>handleCloseUserMenu(setting),
                    setOpen: (data)=>setOpen(data),
                    setHasOrder: (data)=>props.setHasOrder(data),
                    handleCartClick: (e)=>handleCartClick(e),
                    open: open,
                    hasCookie: hasCookie,
                    userName: props.userName,
                    role: props.role,
                    cartHasItems: props.currentCartItems.length > 0
                }) : /*#__PURE__*/ jsx_runtime_.jsx(MainToolbar, {
                    anchorElNav: anchorElNav,
                    anchorElUser: anchorElUser,
                    handleOpenNavMenu: (page)=>handleOpenNavMenu(page),
                    handleCloseNavMenu: (page)=>handleCloseNavMenu(page),
                    handleOpenUserMenu: (setting)=>handleOpenUserMenu(setting),
                    handleCloseUserMenu: (setting)=>handleCloseUserMenu(setting),
                    setOpen: (data)=>props.setOpen(data),
                    setIsCreate: (data)=>setIsCreate(data),
                    setIsStep2: (data)=>setIsStep2(data),
                    handleCartClick: (e)=>handleCartClick(e),
                    setIsBackOffice: (data)=>props.setIsBackOffice(data),
                    setTest: (data)=>setLoginButton(data),
                    isBackOffice: props.isBackOffice,
                    isLoggedIn: props.isLoggedIn,
                    open: open,
                    hasCookie: hasCookie,
                    userName: props.userName,
                    role: props.role,
                    cartHasItems: props.currentCartItems.length > 0
                })
            }),
            !props.hasOrder && /*#__PURE__*/ jsx_runtime_.jsx((Popper_default()), {
                id: id,
                open: open,
                anchorEl: anchorElCart,
                placement: "bottom-end",
                transition: true,
                children: ({ TransitionProps  })=>/*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
                        ...TransitionProps,
                        timeout: 300,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {},
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Cart, {
                                open: props.openLogin,
                                currentCartItems: props.currentCartItems,
                                setOpenLogin: (data)=>props.setOpen(data),
                                removeItem: (foodItem)=>props.removeItem(foodItem),
                                handleAddOrderClick: ()=>props.handleAddOrderClick(),
                                setUserName: (data)=>props.setUserName(data),
                                setIsCreate: (data)=>setIsCreate(data),
                                setIsStep2: (data)=>setIsStep2(data),
                                setAnchorElCart: (data)=>setAnchorElCart(data),
                                isLoggedIn: props.isLoggedIn,
                                userName: props.userName
                            })
                        })
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                open: props.open,
                onClose: (e)=>{
                    props.setOpen(false);
                },
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: appBar_style,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Login, {
                        isLoggedIn: props.isLoggedIn,
                        open: props.open,
                        isCreate: isCreate,
                        isStep2: isStep2,
                        setOpen: (data)=>props.setOpen(data),
                        setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
                        setHasCookie: (data)=>setHasCookie(data),
                        setIsCreate: (data)=>setIsCreate(data),
                        setIsStep2: (data)=>setIsStep2(data),
                        setUserName: (data)=>props.setUserName(data),
                        setRole: (data)=>props.setRole(data),
                        closeLogin: ()=>closeLogin()
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const appBar = (ResponsiveAppBar);


/***/ }),

/***/ 1293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: "mui-style",
        insertionPoint
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FloatingActionButtons)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/QuestionMarkOutlined"
const QuestionMarkOutlined_namespaceObject = require("@mui/icons-material/QuestionMarkOutlined");
var QuestionMarkOutlined_default = /*#__PURE__*/__webpack_require__.n(QuestionMarkOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/icons-material/Storage"
const Storage_namespaceObject = require("@mui/icons-material/Storage");
var Storage_default = /*#__PURE__*/__webpack_require__.n(Storage_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandLess"
var ExpandLess_ = __webpack_require__(6174);
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/icons-material/Info"
const Info_namespaceObject = require("@mui/icons-material/Info");
var Info_default = /*#__PURE__*/__webpack_require__.n(Info_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LinkedIn"
const LinkedIn_namespaceObject = require("@mui/icons-material/LinkedIn");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/GitHub"
const GitHub_namespaceObject = require("@mui/icons-material/GitHub");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/YouTube"
const YouTube_namespaceObject = require("@mui/icons-material/YouTube");
var YouTube_default = /*#__PURE__*/__webpack_require__.n(YouTube_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ContactPage"
const ContactPage_namespaceObject = require("@mui/icons-material/ContactPage");
var ContactPage_default = /*#__PURE__*/__webpack_require__.n(ContactPage_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Email"
const Email_namespaceObject = require("@mui/icons-material/Email");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/BugReport"
const BugReport_namespaceObject = require("@mui/icons-material/BugReport");
var BugReport_default = /*#__PURE__*/__webpack_require__.n(BugReport_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Api"
const Api_namespaceObject = require("@mui/icons-material/Api");
var Api_default = /*#__PURE__*/__webpack_require__.n(Api_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Javascript"
const Javascript_namespaceObject = require("@mui/icons-material/Javascript");
var Javascript_default = /*#__PURE__*/__webpack_require__.n(Javascript_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/PersonAdd"
var PersonAdd_ = __webpack_require__(5905);
var PersonAdd_default = /*#__PURE__*/__webpack_require__.n(PersonAdd_);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(8053);
;// CONCATENATED MODULE: ./components/checkLive.js





function LiveStatus(props) {
    console.log("fetching youtube");
    const headers = {
        "Content-Type": "application/json"
    };
    fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/User/Live", {
        headers: headers
    }).catch((error)=>{
        console.log("API error: " + JSON.stringify(error.message));
        props.setDataPosted(false);
    }).then((res)=>{
        return res.text();
    }).then((data)=>{
        console.log("live? " + JSON.parse(data).message);
        if (JSON.parse(data).message === true) {
            console.log("yep");
            props.setLive(true);
        }
        props.setLivePosted(false);
    }).catch((error)=>{
        console.log("React fetch error: " + error.message);
        props.setError(error.message);
        props.setLivePosted(false);
    });
}
function CheckLive({ live , setLive  }) {
    const [livePosted, setLivePosted] = (0,external_react_.useState)(true);
    const [error, setError] = (0,external_react_.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        children: [
            live && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                onClick: ()=>setLivePosted(true),
                children: "Live Now!"
            }),
            livePosted && /*#__PURE__*/ jsx_runtime_.jsx(LiveStatus, {
                setLivePosted: (data)=>setLivePosted(data),
                setLive: (data)=>setLive(data),
                setError: (data)=>setError(data)
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                children: error
            })
        ]
    });
}

;// CONCATENATED MODULE: external "@mui/icons-material/ArrowBack"
const ArrowBack_namespaceObject = require("@mui/icons-material/ArrowBack");
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Unstable_Grid2"
var Unstable_Grid2_ = __webpack_require__(4904);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/icons-material/ContentCopy"
const ContentCopy_namespaceObject = require("@mui/icons-material/ContentCopy");
var ContentCopy_default = /*#__PURE__*/__webpack_require__.n(ContentCopy_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/fetchy.js
var fetchy = __webpack_require__(8059);
;// CONCATENATED MODULE: external "@mui/icons-material/Badge"
const Badge_namespaceObject = require("@mui/icons-material/Badge");
;// CONCATENATED MODULE: external "@mui/material/FormControlLabel"
const FormControlLabel_namespaceObject = require("@mui/material/FormControlLabel");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
;// CONCATENATED MODULE: external "@mui/material/OutlinedInput"
const OutlinedInput_namespaceObject = require("@mui/material/OutlinedInput");
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
;// CONCATENATED MODULE: external "@mui/material/Switch"
const Switch_namespaceObject = require("@mui/material/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/loginInfo.js


 // Grid version 2















function LoginStatus(props) {
    console.log("employee: " + props.employee);
    const headers = {
        "content-Type": "application/json"
    };
    const role = props.employee ? 2 : 1;
    //const roleName = props.employee ? 'Employee' : 'User'
    (0,fetchy/* fetchy */.X)( false ? 0 : "https://danspizza-api.azurewebsites.net/api/User/CreateRandom", "POST", role, headers).catch((error)=>{
        console.log("API error: " + JSON.stringify(error.message));
        props.setLoginPosted(false);
    }).then((data)=>{
        console.log("message: " + data.message);
        if (data.message === "Login Success") {
            console.log("login success");
            console.log("handleFetch login data: " + JSON.stringify(data));
            document.cookie = "LoggedIn=true";
        }
        props.setLoginPosted(false);
        props.setEmail(data.email);
        props.setPass(data.password);
        props.setHasLoggedOn(true);
    }).catch((error)=>{
        console.log("React fetch error: " + error.message);
        //console.log('React fetch error: Username/Password combination does not match')
        props.setError("Login Failed");
        props.setLoginPosted(false);
    });
}
function LoginInfo(props) {
    const [disableButton, setDisableButton] = (0,external_react_.useState)(false);
    const [loginPosted, setLoginPosted] = (0,external_react_.useState)(false);
    const [employee, setEmployee] = (0,external_react_.useState)(false);
    const [email, setEmail] = (0,external_react_.useState)("");
    const [pass, setPass] = (0,external_react_.useState)("");
    const [error, setError] = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (disableButton) {
            if (router.asPath.startsWith("/backoffice")) {
                 false ? 0 : location.assign("http://danspizza.dev");
            } else {
                router.reload();
            }
        }
    });
    const copyEmail = ()=>{
        navigator.clipboard.writeText(email);
    };
    const copyPass = ()=>{
        navigator.clipboard.writeText(pass);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
            sx: {
                p: 3,
                bgcolor: "background.paper"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                    xs: 12,
                    textAlign: "center",
                    sx: {
                        mb: 3
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            fontWeight: 500
                        },
                        children: " Generate a User"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                    xs: 12,
                    textAlign: "left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                        control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {}),
                        value: employee,
                        onClick: ()=>setEmployee(!employee),
                        label: "Employee",
                        sx: {
                            ml: .5
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        sx: {
                            m: 1,
                            width: "25ch"
                        },
                        variant: "outlined",
                        onClick: copyEmail,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "outlined-adornment-password",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                id: "outlined-adornment-weight",
                                value: email,
                                label: "Email",
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                    position: "end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        onClick: copyEmail,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ContentCopy_default()), {})
                                    })
                                }),
                                "aria-describedby": "outlined-weight-helper-text"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        sx: {
                            m: 1,
                            width: "25ch"
                        },
                        variant: "outlined",
                        onClick: copyPass,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                htmlFor: "outlined-adornment-password",
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                id: "outlined-adornment-weight",
                                value: pass,
                                label: "Password",
                                endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                    position: "end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        onClick: copyPass,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ContentCopy_default()), {})
                                    })
                                }),
                                "aria-describedby": "outlined-weight-helper-text"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                    xs: 12,
                    textAlign: "center",
                    children: props.hasLoggedOn ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setDisableButton(true),
                        children: "Refresh Page"
                    }) : loginPosted ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        disabled: true,
                        variant: "contained",
                        children: "Create"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        onClick: ()=>setLoginPosted(true),
                        children: "Create"
                    })
                }),
                loginPosted && /*#__PURE__*/ jsx_runtime_.jsx(LoginStatus, {
                    employee: employee,
                    setLoginPosted: (data)=>setLoginPosted(data),
                    setIsLoggedIn: (data)=>props.setIsLoggedIn(data),
                    setInfoDrawer: (data)=>setInfoDrawer(data),
                    loginPosted: loginPosted,
                    setError: (data)=>setError(data),
                    setHasLoggedOn: (data)=>props.setHasLoggedOn(data),
                    setEmail: (data)=>setEmail(data),
                    setPass: (data)=>setPass(data)
                }),
                error && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        textAlign: "center",
                        pt: 2,
                        color: "red",
                        fontWeight: 500
                    },
                    children: error
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/floatyboi.js


































function FloatingActionButtons(props) {
    const [infoDrawer, setInfoDrawer] = (0,external_react_.useState)(false);
    const [live, setLive] = (0,external_react_.useState)(false);
    const [openR, setOpenR] = (0,external_react_.useState)(false);
    const [openG, setOpenG] = (0,external_react_.useState)(false);
    const [openU, setOpenU] = (0,external_react_.useState)(false);
    const [hasLoggedOn, setHasLoggedOn] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const toggleDrawer = (open)=>(event)=>{
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            console.log("open state: " + open);
            setInfoDrawer(open);
            if (hasLoggedOn) {
                console.log("floatyboi pushing reload");
                router.reload();
            }
        };
    const handleOpenGClick = ()=>{
        console.log("open, g");
        setOpenG(!openG);
    };
    const handleOpenRClick = ()=>{
        setOpenR(!openR);
    };
    const handleOpenUClick = ()=>{
        setOpenU(!openU);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            "& > :not(style)": {
                m: 1
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                color: "secondary",
                "aria-label": "edit",
                onClick: toggleDrawer(true),
                children: /*#__PURE__*/ jsx_runtime_.jsx((QuestionMarkOutlined_default()), {
                    color: "whitey"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                anchor: "right",
                open: infoDrawer,
                onClose: toggleDrawer(false),
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    minWidth: 400,
                    textAlign: "center",
                    sx: {
                        p: 5
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    fontSize: "1.5rem",
                                    fontWeight: 600,
                                    mb: 3
                                },
                                children: "Site Options"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                                sx: {
                                    bgcolor: "background.beige",
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                            sx: {
                                                textAlign: "left"
                                            },
                                            onClick: handleOpenUClick,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((PersonAdd_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                    primary: "Create User"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                                        in: openU,
                                        timeout: "auto",
                                        unmountOnExit: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LoginInfo, {
                                                hasLoggedOn: hasLoggedOn,
                                                setHasLoggedOn: (data)=>setHasLoggedOn(data)
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                                sx: {
                                    bgcolor: "background.beige",
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                            sx: {
                                                textAlign: "left"
                                            },
                                            onClick: handleOpenRClick,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Info_default()), {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                    primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        children: "Resources"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                                        in: openR,
                                        timeout: "auto",
                                        unmountOnExit: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                            component: "div",
                                            disablePadding: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                    sx: {
                                                        pl: 4
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ContactPage_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                children: "Resume"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                    sx: {
                                                        pl: 4
                                                    },
                                                    href: "https://www.linkedin.com/in/dfischesser",
                                                    target: "_blank",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((LinkedIn_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                children: "LinkedIn"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                    sx: {
                                                        pl: 4
                                                    },
                                                    onClick: handleOpenGClick,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((GitHub_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                children: "GitHub"
                                                            })
                                                        }),
                                                        openG ? /*#__PURE__*/ jsx_runtime_.jsx((ExpandLess_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                                                    in: openG,
                                                    timeout: "auto",
                                                    unmountOnExit: true,
                                                    sx: {
                                                        ml: 3
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                                        component: "div",
                                                        disablePadding: true,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                                sx: {
                                                                    pl: 4
                                                                },
                                                                href: "https://github.com/dfischesser/danspizza#readme",
                                                                target: "_blank",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Javascript_default()), {})
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                        primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            children: "React"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                                sx: {
                                                                    pl: 4
                                                                },
                                                                href: "https://github.com/dfischesser/danspizza-api#readme",
                                                                target: "_blank",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Api_default()), {})
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                        primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            children: ".Net API"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                                sx: {
                                                                    pl: 4
                                                                },
                                                                href: "https://github.com/dfischesser/PizzaDB#readme",
                                                                target: "_blank",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Storage_default()), {})
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                        primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                            children: "Azure SQL"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                    LinkComponent: Link/* NextLinkComposed */.Z,
                                                    to: "https://www.youtube.com/@fineplus2points",
                                                    target: "_blank",
                                                    sx: {
                                                        pl: 4
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                            children: live ? /*#__PURE__*/ jsx_runtime_.jsx((YouTube_default()), {
                                                                color: "primary"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((YouTube_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                children: "YouTube"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(CheckLive, {
                                                            live: live,
                                                            setLive: (data)=>setLive(data)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                    sx: {
                                                        pl: 4
                                                    },
                                                    href: "mailto:dfischesser@gmail.com?subject=Bug Report",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                children: "Email"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                                sx: {
                                    bgcolor: "background.beige",
                                    mb: 2
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                        href: "mailto:report@danspizza.dev",
                                        sx: {
                                            textAlign: "left"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((BugReport_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    children: "Report a Bug"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                sx: {
                                    float: "right"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                    sx: {
                                        textAlign: "right",
                                        float: "right"
                                    },
                                    onClick: ()=>setInfoDrawer(false),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ArrowBack_default()), {
                                            sx: {
                                                mr: 1
                                            }
                                        }),
                                        "Back"
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 3519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/icons-material/Circle"
const Circle_namespaceObject = require("@mui/icons-material/Circle");
// EXTERNAL MODULE: external "@mui/icons-material/LocalPizza"
var LocalPizza_ = __webpack_require__(2118);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(8053);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/footer.js









const style = {
    textAlign: "center",
    my: "auto"
};
function Bullet() {
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        minHeight: 30,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
            sx: {
                my: "auto",
                fontWeight: 700,
                fontSize: 14
            },
            children: "|"
        })
    });
}
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            my: "auto",
            mx: "auto",
            minHeight: 30,
            maxWidth: 550,
            fontSize: 14
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
            direction: "row",
            spacing: 3,
            justifyContent: "space-evenly",
            sx: {
                my: "auto"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        sx: {
                            my: "auto",
                            fontSize: 14
                        },
                        underline: "hover",
                        href: "mailto:dfischesser@gmail.com",
                        target: "_blank",
                        children: "CONTACT"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Bullet, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        sx: {
                            my: "auto",
                            fontSize: 14
                        },
                        underline: "hover",
                        href: "https://github.com/dfischesser/danspizza#readme",
                        target: "_blank",
                        children: "GITHUB"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Bullet, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        sx: {
                            my: "auto",
                            fontSize: 14
                        },
                        underline: "hover",
                        href: "https://www.linkedin.com/in/dfischesser",
                        target: "_blank",
                        children: "LINKEDIN"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Bullet, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        component: Link/* NextLinkComposed */.Z,
                        sx: {
                            my: "auto",
                            fontSize: 14
                        },
                        underline: "hover",
                        to: "/changelog",
                        children: "CHANGELOG"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 2491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1, width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_theme)
});

// UNUSED EXPORTS: roboto

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"components\\theme.js","import":"Roboto","arguments":[{"weight":["300","400","500","700"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"roboto"}
var target_path_components_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto_ = __webpack_require__(7769);
var target_path_components_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(target_path_components_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./components/theme.js



// Create a theme instance.
const theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: "#631f08"
        },
        secondary: {
            main: "#084c63"
        },
        error: {
            main: "#951c22"
        },
        whitey: {
            main: "white"
        },
        background: {
            default: "white",
            paper: "#fcfcf0",
            light: "#fffce7",
            lightest: "#f6f6e7",
            grayish: "#e3e5e0",
            beige: "#fff3e2",
            beiger: "#ffdfb7",
            hover: "#712d0e",
            pink: "#f8e1e1",
            lightblue: "#d3f4ff"
        }
    },
    components: {
        Menu: {
            styleOverrides: {
                root: {
                    backgroundColor: "#f6f6e7"
                }
            }
        }
    },
    typography: {
        fontFamily: (target_path_components_theme_js_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto_default()).style.fontFamily
    }
});
/* harmony default export */ const components_theme = (theme);



/***/ }),

/***/ 2644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ WelcomeModalBody)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
;// CONCATENATED MODULE: external "@mui/icons-material/Help"
const Help_namespaceObject = require("@mui/icons-material/Help");
var Help_default = /*#__PURE__*/__webpack_require__.n(Help_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@mui/material/Card"
const Card_namespaceObject = require("@mui/material/Card");
;// CONCATENATED MODULE: external "@mui/material/CardActions"
const CardActions_namespaceObject = require("@mui/material/CardActions");
;// CONCATENATED MODULE: external "@mui/material/CardContent"
const CardContent_namespaceObject = require("@mui/material/CardContent");
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
// EXTERNAL MODULE: external "@mui/icons-material/LocalPizza"
var LocalPizza_ = __webpack_require__(2118);
var LocalPizza_default = /*#__PURE__*/__webpack_require__.n(LocalPizza_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: ./components/footer.js + 1 modules
var footer = __webpack_require__(3519);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
// EXTERNAL MODULE: external "@mui/material/Unstable_Grid2"
var Unstable_Grid2_ = __webpack_require__(4904);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./components/welcomeModalBody.js


















 // Grid version 2

function WelcomeModalBody({ handleCloseWelcome  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
        container: true,
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                xs: 12,
                textAlign: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "h4",
                        sx: {
                            fontFamily: "fantasy",
                            fontWeight: 500,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: [
                            "   DANS",
                            /*#__PURE__*/ jsx_runtime_.jsx((LocalPizza_default()), {
                                sx: {
                                    fontSize: 40,
                                    ml: 1,
                                    mr: 1.5
                                }
                            }),
                            "PIZZA"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        id: "modal-modal-title",
                        color: "text.secondary",
                        variant: "subtitle1",
                        sx: {
                            fontFamily: "fantasy",
                            letterSpacing: ".05rem"
                        },
                        children: "Simulated Restaurant Order App"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                sx: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    id: "modal-modal-description",
                    variant: "h5",
                    component: "h2",
                    sx: {
                        mt: 2
                    },
                    children: "Features"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                    sx: {
                        minWidth: 150,
                        p: 2,
                        bgcolor: "background.lightest"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h5",
                            component: "div",
                            children: "Store Front"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                fontSize: 14
                            },
                            color: "text.secondary",
                            gutterBottom: true,
                            children: "Users"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            children: "Explore the menu and place orders"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                    sx: {
                        minWidth: 150,
                        p: 2,
                        bgcolor: "background.lightest"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h5",
                            component: "div",
                            children: "Back Office"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                fontSize: 14
                            },
                            color: "text.secondary",
                            gutterBottom: true,
                            children: "Employees"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            children: "Manage Orders, Edit Site, and Visualize Data"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                    sx: {
                        minWidth: 150,
                        p: 2,
                        bgcolor: "background.lightest"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                            direction: "row",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    id: "modal-modal-title",
                                    variant: "h5",
                                    component: "h2",
                                    sx: {
                                        textAlign: "left"
                                    },
                                    children: "Info Drawer"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Help_default()), {
                                        color: "secondary",
                                        sx: {
                                            ml: 2,
                                            fontSize: "1.3rem"
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                textAlign: "left"
                            },
                            variant: "body2",
                            color: "text.secondary",
                            gutterBottom: true,
                            children: "Test + Contact"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                textAlign: "left"
                            },
                            variant: "body2",
                            gutterBottom: true,
                            children: "Quickly Create Test Users and Employees"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                    sx: {
                        minWidth: 150,
                        p: 2,
                        bgcolor: "background.lightest"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            id: "modal-modal-title",
                            variant: "h5",
                            component: "h2",
                            sx: {
                                textAlign: "left"
                            },
                            children: "More to Come!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                textAlign: "left"
                            },
                            variant: "body2",
                            color: "text.secondary",
                            gutterBottom: true,
                            children: "Updates Mondays"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            sx: {
                                textAlign: "left"
                            },
                            variant: "body2",
                            gutterBottom: true,
                            children: [
                                "This is an ongoing project. ",
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "mailto:report@danspizza.dev",
                                    target: "_blank",
                                    children: "Change Log"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                        sx: {
                            p: 2,
                            bgcolor: "background.lightest"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        id: "modal-modal-title",
                                        variant: "h5",
                                        component: "h2",
                                        sx: {
                                            textAlign: "center",
                                            pb: 1
                                        },
                                        children: "Getting Started"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                        variant: "middle"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: "Select Create User from the Navigation Bar, or use the Info Drawer to quickly create a test user or employee."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                xs: 12,
                                sx: {
                                    textAlign: "center",
                                    mt: 2
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    onClick: handleCloseWelcome,
                                    children: "Got It"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3139);
/* harmony import */ var _components_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1293);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8853);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8810);
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(374);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1941);
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_menu_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_cart_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8446);
/* harmony import */ var _css_cart_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_cart_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_customize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6809);
/* harmony import */ var _css_customize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_customize_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9555);
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_login_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_account_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5576);
/* harmony import */ var _css_account_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_account_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8769);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(945);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9174);
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5074);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_appBar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6915);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3519);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_floatyboi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6492);
/* harmony import */ var _components_welcomeModalBody__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _components_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_4__, _components_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// pages/_app.js





























//import { ApplicationInsights } from '@microsoft/applicationinsights-web';
//import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
//import { createBrowserHistory } from "history";
//import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,_components_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
const Alert = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Alert(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_18___default()), {
        elevation: 6,
        ref: ref,
        variant: "filled",
        ...props
    });
});
//const browserHistory = createBrowserHistory({ basename: '' });
//var reactPlugin = new ReactPlugin();
// Add the Click Analytics plug-in.
/* var clickPluginInstance = new ClickAnalyticsPlugin();
   var clickPluginConfig = {
     autoCapture: true
}; */ // var appInsights = new ApplicationInsights({
//   config: {
//     connectionString: 'InstrumentationKey=92e06860-77de-4fc0-8aec-702644f32bf1;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/',
//     enableAutoRouteTracking: true,
//     // If you're adding the Click Analytics plug-in, delete the next line.
//     extensions: [reactPlugin],
//     // Add the Click Analytics plug-in.
//     // extensions: [reactPlugin, clickPluginInstance],
//     // extensionConfig: {
//     //   [reactPlugin.identifier]: { history: browserHistory }
//     // Add the Click Analytics plug-in.
//     // [clickPluginInstance.identifier]: clickPluginConfig
//     //}
//   }
// });
// appInsights.loadAppInsights();
// appInsights.trackPageView();
function MyApp({ Component , emotionCache =clientSideEmotionCache , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    //set states
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        cart: false,
        customize: false,
        login: false
    });
    const [cartItems, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartItemsReducer, []);
    const [cartID, setCartID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [hasOrder, setHasOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isBackOffice, setIsBackOffice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openLogin, setOpenLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [foodToCustomize, setfoodToCustomize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        foodID: 0,
        menuCategoryID: 0,
        foodName: ""
    });
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openWelcome, setOpenWelcome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
    };
    const handleCloseWelcome = (event, reason)=>{
        console.log("welcome handleclose hit. reason: " + reason);
        if (reason === "clickaway") {
            console.log("clickaway");
            return;
        }
        if (reason === "backdropClick") {
            console.log("backdropClick");
            return;
        }
        console.log("setting setOpenWelcome");
        localStorage.setItem("welcomeModalClosed", "true");
        setOpenWelcome(false);
        return;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleRouteChange = (url, { shallow  })=>{
            console.log(`App is changing to ${url} ${shallow ? "with" : "without"} shallow routing`);
        };
        let welcomeModalClosed = window.localStorage.getItem("welcomeModalClosed") ?? false;
        console.log("welcomeModalClosed: " + welcomeModalClosed);
        if (!welcomeModalClosed) {
            setOpenWelcome(true);
        }
        if (window.localStorage.getItem("cart") && cartItems.length === 0) {
            console.log("local storage cart: " + window.localStorage.getItem("cart"));
            console.log("local storage cartID: " + JSON.parse(window.localStorage.getItem("cart")).findLast((x)=>x).cartItemID);
            setCartID(JSON.parse(window.localStorage.getItem("cart")).findLast((x)=>x).cartItemID + 1);
            dispatch({
                type: "loaded",
                cartItems: JSON.parse(window.localStorage.getItem("cart"))
            });
        } else {
            if (cartItems.length > 0) {
                window.localStorage.setItem("cart", JSON.stringify(cartItems));
            }
        }
        if (router.isReady && router.asPath.startsWith("/backoffice")) {
            console.log("backoffice detected");
            setIsBackOffice(true);
            console.log("backoffice set 1: " + isBackOffice);
        } else {
            setIsBackOffice(false);
        }
        function start() {
            setLoading(true);
            handleRouteChange;
        }
        function end() {
            console.log("end");
            setLoading(false);
            handleRouteChange;
        }
        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", end);
        router.events.on("routeChangeError", end);
        return ()=>{
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", end);
            router.events.off("routeChangeError", end);
        };
    }, [
        router,
        loading,
        cartItems,
        isBackOffice,
        openWelcome
    ]);
    function handleAddOrderClick() {
        console.log("hasorder set");
        setHasOrder(true);
    //setOpenModal({...openModal, cart: false})
    }
    function handleOpenCustomize(selectedFoodItem) {
        console.log("customize modal open. selected food item: " + JSON.stringify(selectedFoodItem));
        setfoodToCustomize({
            ...selectedFoodItem,
            customizeOptions: null
        });
        setOpenModal({
            ...openModal,
            customize: !openModal.customize
        });
    }
    function addCustomItem(selectedFoodItem) {
        console.log("app add cust selectedFoodItem: " + JSON.stringify(selectedFoodItem));
        setfoodToCustomize(selectedFoodItem);
        //setOpenModal({...openModal, customize: false, cart: true})
        handleAddItem(selectedFoodItem);
        setOpen(true);
    }
    //handle functions
    function handleAddItem(selectedFood) {
        setCartID(cartID + 1);
        dispatch({
            type: "added",
            id: cartID,
            foodItem: {
                ...selectedFood,
                price: selectedFood.customizeOptions.reduce((a, b)=>a + b.price, 0)
            }
        });
    }
    function handleRemoveItem(selectedFood) {
        console.log("app handleRemove foodItem: " + JSON.stringify(selectedFood));
        dispatch({
            type: "removed",
            id: selectedFood.cartItemID,
            foodItem: selectedFood
        });
    }
    //handleRemoveAllItems
    function handleRemoveAllItems() {
        console.log("handleRemoveAllItems hit");
        dispatch({
            type: "removedAll"
        });
    }
    function cartItemsReducer(cartItems, action) {
        switch(action.type){
            case "added":
                {
                    action.foodItem = {
                        ...action.foodItem,
                        cartItemID: action.id
                    };
                    return [
                        ...cartItems,
                        action.foodItem
                    ];
                }
            case "loaded":
                {
                    return action.cartItems;
                }
            case "removed":
                {
                    console.log("removing id: " + action.id);
                    const cart = cartItems.filter((item)=>item.cartItemID != action.id);
                    if (cart.length === 0) {
                        localStorage.setItem("cart", "");
                    }
                    return cart;
                }
            case "removedAll":
                {
                    console.log("Removing all items");
                    localStorage.setItem("cart", "");
                    return cartItems = [];
                }
            default:
                {
                    throw Error("Unknown Action: " + action.type);
                }
        }
    }
    const handleClose = (event, reason)=>{
        console.log("alert handleclose hit. reason: " + reason);
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    console.log("asPath: " + router.asPath);
    console.log("isBackOffice: " + isBackOffice);
    console.log("_app isLoggedIn: " + isLoggedIn);
    //Check Login Status
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1, width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                    theme: _components_theme__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_21___default()), {
                            maxWidth: "md",
                            disableGutters: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_appBar__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    hasOrder: hasOrder,
                                    isLoggedIn: isLoggedIn,
                                    open: openLogin,
                                    currentCartItems: cartItems,
                                    isBackOffice: isBackOffice,
                                    role: role,
                                    userName: userName,
                                    setUserName: (data)=>setUserName(data),
                                    setRole: (data)=>setRole(data),
                                    setIsBackOffice: (data)=>setIsBackOffice(data),
                                    setIsLoggedIn: (data)=>setIsLoggedIn(data),
                                    setOpen: (data)=>setOpenLogin(data),
                                    setHasOrder: (data)=>setHasOrder(data),
                                    removeItem: (foodItem)=>handleRemoveItem(foodItem),
                                    handleAddOrderClick: ()=>handleAddOrderClick()
                                }),
                                loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    transitionDuration: 3000,
                                    sx: {
                                        color: "#fff",
                                        zIndex: (theme)=>theme.zIndex.drawer + 1
                                    },
                                    open: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_19___default()), {
                                        color: "inherit"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_23___default()), {
                                    id: "lepapier",
                                    square: true,
                                    variant: "outlined",
                                    children: [
                                        router.asPath == "/menu" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            currentCartItems: cartItems,
                                            handleOpenCustomize: (foodItem)=>handleOpenCustomize(foodItem),
                                            openModal: openModal,
                                            setOpenModal: (data)=>setOpenModal(data),
                                            foodToCustomize: foodToCustomize,
                                            addCustomItem: (foodItem)=>addCustomItem(foodItem)
                                        }),
                                        router.asPath == "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            isLoggedIn: isLoggedIn,
                                            role: role,
                                            userName: userName,
                                            setUserName: (data)=>setUserName(data),
                                            setIsLoggedIn: (data)=>setIsLoggedIn(data)
                                        }),
                                        router.asPath == "/order" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            currentCartItems: cartItems,
                                            removeAllItems: ()=>handleRemoveAllItems(),
                                            removeItem: (foodItem)=>handleRemoveItem(foodItem),
                                            openModal: openModal,
                                            setHasOrder: (data)=>setHasOrder(data),
                                            setOpenModal: (data)=>setOpenModal(data)
                                        }),
                                        router.asPath == "/account" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            isLoggedIn: isLoggedIn
                                        }),
                                        router.asPath == "/backoffice/manage" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            isLoggedIn: isLoggedIn
                                        }),
                                        router.asPath == "/backoffice/editSite" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            isLoggedIn: isLoggedIn
                                        }),
                                        router.asPath == "/backoffice/sales" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            isLoggedIn: isLoggedIn
                                        }),
                                        router.asPath == "/changelog" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps,
                                            isLoggedIn: isLoggedIn
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_24___default()), {
                                            sx: {
                                                textAlign: "right",
                                                position: "fixed",
                                                right: {
                                                    xs: "0vw",
                                                    md: "10vw",
                                                    lg: "13vw",
                                                    xl: "27vw"
                                                },
                                                bottom: {
                                                    xs: "0vh",
                                                    sm: "15vh",
                                                    md: "15vh",
                                                    lg: "15vh",
                                                    xl: "20vh"
                                                }
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_floatyboi__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                                setIsLoggedIn: (data)=>setIsLoggedIn(data)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_17___default()), {
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            },
                                            open: open,
                                            autoHideDuration: 2000,
                                            onClose: handleClose,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Alert, {
                                                onClose: handleClose,
                                                severity: "success",
                                                sx: {
                                                    width: "100%"
                                                },
                                                children: "Added to Cart"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_26___default()), {
                                    open: openWelcome,
                                    onClose: handleCloseWelcome,
                                    "aria-labelledby": "modal-modal-title",
                                    "aria-describedby": "modal-modal-description",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_24___default()), {
                                        sx: style,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_welcomeModalBody__WEBPACK_IMPORTED_MODULE_28__/* .WelcomeModalBody */ .t, {
                                            handleCloseWelcome: handleCloseWelcome
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5576:
/***/ (() => {



/***/ }),

/***/ 8446:
/***/ (() => {



/***/ }),

/***/ 6809:
/***/ (() => {



/***/ }),

/***/ 374:
/***/ (() => {



/***/ }),

/***/ 9555:
/***/ (() => {



/***/ }),

/***/ 1941:
/***/ (() => {



/***/ }),

/***/ 8810:
/***/ (() => {



/***/ }),

/***/ 8853:
/***/ (() => {



/***/ }),

/***/ 7915:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material");

/***/ }),

/***/ 4317:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/CloseRounded");

/***/ }),

/***/ 6174:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 2118:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LocalPizza");

/***/ }),

/***/ 5905:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PersonAdd");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3765:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 2311:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Autocomplete");

/***/ }),

/***/ 5074:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Backdrop");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9048:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 4475:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 8891:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 911:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 9564:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 1598:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 9174:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ 8742:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 6042:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7229:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 4904:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Unstable_Grid2");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8440:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ 3139:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,59,235,53], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();