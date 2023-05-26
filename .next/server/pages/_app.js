(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./css/styles.css
var styles = __webpack_require__(8853);
// EXTERNAL MODULE: ./css/navbar.css
var navbar = __webpack_require__(8810);
// EXTERNAL MODULE: ./css/index.css
var css = __webpack_require__(374);
// EXTERNAL MODULE: ./css/menu.css
var menu = __webpack_require__(1941);
// EXTERNAL MODULE: ./css/cart.css
var cart = __webpack_require__(8446);
// EXTERNAL MODULE: ./css/customize.css
var customize = __webpack_require__(6809);
// EXTERNAL MODULE: ./css/login.css
var login = __webpack_require__(9555);
// EXTERNAL MODULE: ./css/account.css
var account = __webpack_require__(5576);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/cart.js
/* eslint-disable react/prop-types */





function Header({
  title
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("h3", {
    className: "cart-title",
    children: title ? title : 'Default title'
  });
}

function ItemList(props) {
  console.log('cart current cart items: ' + JSON.stringify(props.currentCartItems));

  if (props.currentCartItems.length > 0) {
    return props.currentCartItems.map(foodItem => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "cart-item-wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "cart-item",
        children: [foodItem.foodName, ": ", foodItem.price, /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => props.removeItem(foodItem),
          children: "x"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "cart-item",
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: foodItem.toppings.map(cartItemTopping => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: [props.toppings.find(toppingListItem => toppingListItem.toppingID == cartItemTopping).toppingName + ': ', props.toppings.find(toppingListItem => toppingListItem.toppingID == cartItemTopping).price.toLocaleString('us-US', {
              style: 'currency',
              currency: 'USD'
            })]
          }, cartItemTopping))
        })
      })]
    }, foodItem.cartItemID));
  }
}

function Cart(props) {
  let subtotal = 0;

  function getPrice() {
    //topping price
    props.currentCartItems.forEach(cartItem => cartItem.toppings.forEach(toppingID => subtotal += props.customizeData.toppings.find(topping => topping.toppingID == toppingID).price)); //food item price

    subtotal += props.currentCartItems.reduce((a, b) => a + b.price, 0);
    return subtotal;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "cart-wrapper",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "cart-body",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        title: "Cart"
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "cart-list",
        children: /*#__PURE__*/jsx_runtime_.jsx(ItemList, {
          currentCartItems: props.currentCartItems,
          removeItem: foodItem => props.removeItem(foodItem),
          toppings: props.customizeData.toppings
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Subtotal: ", getPrice().toLocaleString('us-US', {
          style: 'currency',
          currency: 'USD'
        })]
      }), props.currentCartItems.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/order",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          children: "Add to Order"
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No items added"
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/login.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */





function login_Header({
  title
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("h5", {
    className: "padding login-header",
    children: title ? title : 'Default title'
  });
}

function LoginStatus(props) {
  const {
    user,
    isLoading,
    isError
  } = props.useUser();
  console.log('loginstatus user: ' + user);
  const isLoggedIn = props.isLoggedIn;
  const isActive = props.isActive;
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(false);

  async function fetchy(url) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props.login)
      });

      if (!res.ok) {
        throw new Error("Network response was not OK");
      }

      return res.json();
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
  }

  fetchy('https://localhost:443/Login/Post').then(json => setData(json));
  (0,external_react_.useEffect)(() => {
    console.log('useEffect data: ' + data);
    props.setIsLoggedIn(data);
    console.log('useEffect loginSuccess: ' + isLoggedIn);
    console.log('useEffect accountData: ' + JSON.stringify(user));

    if (data) {
      props.handleAccountInfo(user);
      props.setIsActive(_objectSpread(_objectSpread({}, isActive), {}, {
        login: false
      }));
      console.log('useEffect isActive: ' + JSON.stringify(isActive));
    }
  }, [data, isLoggedIn, isActive, user, props]);
  console.log('login post result success: ' + data);
  console.log('login post loginSuccess: ' + props.isLoggedIn);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: ["Data Retrieved.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", data ? 'Login success!' : 'Login failed!', " "]
  });
}
function Login(props) {
  const {
    0: login,
    1: setLogin
  } = (0,external_react_.useState)({
    email: '',
    password: ''
  });
  const {
    0: loginPosted,
    1: setLoginPosted
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "login-wrapper",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "login-title",
      children: /*#__PURE__*/jsx_runtime_.jsx(login_Header, {
        title: "Login"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "login-body",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "email",
        children: "Email Address"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        id: "email",
        name: "email",
        value: login.email,
        readOnly: loginPosted,
        onChange: e => setLogin(_objectSpread(_objectSpread({}, login), {}, {
          email: e.target.value
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "pw",
        children: "Password"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        id: "pw",
        name: "pw",
        value: login.password,
        readOnly: loginPosted,
        onChange: e => setLogin(_objectSpread(_objectSpread({}, login), {}, {
          password: e.target.value
        }))
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "login-button",
        onClick: () => {
          setLoginPosted(true);
          setTimeout(() => {
            setLoginPosted(false);
            console.log('timeout!');
          }, 2000);
        },
        children: "Login"
      }), loginPosted && /*#__PURE__*/jsx_runtime_.jsx(LoginStatus, {
        login: login,
        loginPosted: loginPosted,
        isLoggedIn: props.isLoggedIn,
        setIsLoggedIn: data => props.setIsLoggedIn(data),
        setLoginPosted: () => setLoginPosted(),
        handleLoginPost: data => props.handleLoginPost(data),
        isActive: props.isActive,
        setIsActive: data => props.setIsActive(data),
        handleAccountInfo: data => props.handleAccountInfo(data),
        fetcher: props.fetcher,
        useUser: () => props.useUser()
      })]
    })]
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/navbar.js
function navbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function navbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? navbar_ownKeys(Object(source), !0).forEach(function (key) { navbar_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : navbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */








function Navbar(props) {
  const {
    asPath
  } = (0,router_.useRouter)();
  console.log('navbar isActive: ' + JSON.stringify(props.isActive));
  console.log('navbar login success: ' + props.isLoggedIn);
  const pages = [{
    Name: 'Home',
    Path: '/',
    IsActive: function () {
      return asPath == this.Path ? true : false;
    }
  }, {
    Name: 'Menu',
    Path: '/menu',
    IsActive: function () {
      return asPath == this.Path ? true : false;
    }
  }, {
    Name: 'Order',
    Path: '/order',
    IsActive: function () {
      return asPath == this.Path ? true : false;
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "navigate-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "navigate-link-container",
      children: pages.map(pages => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: pages.Path,
        className: 'navigate-link ' + (pages.IsActive() ? 'navigate-active' : ''),
        children: pages.Name
      }, pages.Name))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "navigate-cart-container navigate-dropdown",
      children: [props.isLoggedIn ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          className: 'navigate-link-account ' + (asPath == '/account' ? 'navigate-active' : ''),
          href: "",
          children: " Account"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "navigate-dropdown-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            className: "navigate-link",
            href: "/account",
            children: " Profile"
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            className: "navigate-link",
            href: "",
            onClick: () => props.setIsLoggedIn(false),
            children: " Logout"
          })]
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        className: 'navigate-link ' + (props.isActive.login ? 'navigate-active' : ''),
        href: "",
        onClick: () => !props.isLoggedIn ? props.setIsActive(navbar_objectSpread(navbar_objectSpread({}, props.isActive), {}, {
          login: !props.isActive.login
        })) : props.setIsLoggedIn(false),
        children: " Login"
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        className: 'navigate-link ' + (props.isActive.cart ? 'navigate-active' : ''),
        href: "",
        onClick: () => props.setIsActive(navbar_objectSpread(navbar_objectSpread({}, props.isActive), {}, {
          cart: !props.isActive.cart
        })),
        children: "Cart"
      })]
    }), props.isActive.cart && /*#__PURE__*/jsx_runtime_.jsx(Cart, {
      currentCartItems: props.currentCartItems,
      removeItem: foodItem => props.removeItem(foodItem),
      customizeData: props.customizeData
    }), props.isActive.login && /*#__PURE__*/jsx_runtime_.jsx(Login, {
      isLoggedIn: props.isLoggedIn,
      setIsLoggedIn: data => props.setIsLoggedIn(data),
      isActive: props.isActive,
      setIsActive: data => props.setIsActive(data),
      handleAccountInfo: data => props.handleAccountInfo(data),
      useUser: () => props.useUser()
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// pages/_app.js

















const fetcher = (...args) => fetch(...args).then(res => res.json());

function MyApp({
  Component,
  pageProps
}) {
  const customizeData = {
    "customizePizzaID": "",
    "size": "",
    "style": "",
    "toppings": [{
      "toppingID": 1,
      "toppingName": "Pepperoni",
      "price": 2.5
    }, {
      "toppingID": 2,
      "toppingName": "Sausage",
      "price": 2.5
    }, {
      "toppingID": 3,
      "toppingName": "Ham",
      "price": 2.5
    }, {
      "toppingID": 4,
      "toppingName": "Olives",
      "price": 2.5
    }, {
      "toppingID": 5,
      "toppingName": "Mushrooms",
      "price": 2.5
    }, {
      "toppingID": 6,
      "toppingName": "Pineapple",
      "price": 2.5
    }]
  }; //initial topping list

  const initialIsChecked = customizeData.toppings.map(newTopping => ({
    toppingID: newTopping.toppingID,
    isChecked: false
  })); //set states

  const {
    0: openModal,
    1: setOpenModal
  } = (0,external_react_.useState)({
    cart: false,
    customize: false,
    login: false
  });
  const {
    0: cartItems,
    1: dispatch
  } = (0,external_react_.useReducer)(cartItemsReducer, []);
  const {
    0: cartID,
    1: setCartID
  } = (0,external_react_.useState)(1);
  const {
    0: isLoggedIn,
    1: setIsLoggedIn
  } = (0,external_react_.useState)(false);
  const {
    0: accountInfo,
    1: setAccountInfo
  } = (0,external_react_.useState)(null); //customize    

  const {
    0: foodToCustomize,
    1: setfoodToCustomize
  } = (0,external_react_.useState)({
    foodID: 0,
    menuCategoryID: 0,
    foodName: ''
  });
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,external_react_.useState)(false);
  const {
    0: checked,
    1: setChecked
  } = (0,external_react_.useState)(initialIsChecked); //handle functions

  function handleOpenModal(selectedFoodItem) {
    setfoodToCustomize(selectedFoodItem);
    setIsModalOpen(true);
  }

  function handleCloseCustomize() {
    setIsModalOpen(false);
  }

  function handleAccountInfo(datums) {
    console.log('handleSetAccountInfo data: ' + JSON.stringify(datums));
    setAccountInfo(datums);
  }

  function addCustomItem(selectedFoodItem) {
    console.log('app add cust selectedFoodItem: ' + JSON.stringify(selectedFoodItem));
    console.log('app add cust cartitems: ' + JSON.stringify(cartItems));
    let checkedToppings = checked.filter(topping => topping.isChecked);
    let checkedToppingIDs = checkedToppings.map(topping => topping.toppingID);
    selectedFoodItem = _app_objectSpread(_app_objectSpread({}, selectedFoodItem), {}, {
      toppings: checkedToppingIDs
    });
    setfoodToCustomize(selectedFoodItem);
    setOpenModal(_app_objectSpread(_app_objectSpread({}, openModal), {}, {
      cart: true
    }));
    handleCloseCustomize();
    setChecked(initialIsChecked);
    handleAddItem(selectedFoodItem);
  } //handle functions


  function handleAddItem(selectedFood) {
    setCartID(cartID + 1);
    dispatch({
      type: 'added',
      id: cartID,
      foodItem: selectedFood
    });
  }

  function handleRemoveItem(selectedFood) {
    console.log('app handleRemove foodItem: ' + JSON.stringify(selectedFood));
    dispatch({
      type: 'removed',
      id: selectedFood.cartItemID,
      foodItem: selectedFood
    });
  }

  function cartItemsReducer(cartItems, action) {
    console.log('app reducer foodItem: ' + JSON.stringify(action.foodItem));

    switch (action.type) {
      case 'added':
        {
          action.foodItem = _app_objectSpread(_app_objectSpread({}, action.foodItem), {}, {
            cartItemID: action.id
          });
          return [...cartItems, action.foodItem];
        }

      case 'removed':
        {
          console.log('removing id: ' + action.id);
          console.log('removing cartItems: ' + JSON.stringify(cartItems));
          console.log('removing fooditem: ' + JSON.stringify(action.foodItem));
          return cartItems.filter(item => item.cartItemID != action.id);
        }

      default:
        {
          throw Error('Unknown Action: ' + action.type);
        }
    }
  }

  const {
    asPath
  } = (0,router_.useRouter)(); //Check Login Status

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
    className: "main",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar, {
      isActive: openModal,
      setIsActive: data => setOpenModal(data),
      removeItem: foodItem => handleRemoveItem(foodItem),
      currentCartItems: cartItems,
      addCartCustomize: checked,
      customizeData: customizeData,
      isLoggedIn: isLoggedIn,
      setIsLoggedIn: data => setIsLoggedIn(data),
      handleAccountInfo: data => handleAccountInfo(data)
    }), asPath == '/menu' && /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
      currentCartItems: cartItems,
      customizeData: customizeData,
      openModal: foodItem => handleOpenModal(foodItem),
      closeCustomize: () => handleCloseCustomize(),
      isModalOpen: isModalOpen,
      foodToCustomize: foodToCustomize,
      updateCheckedToppings: updatedChecked => setChecked(updatedChecked),
      addCustomItem: foodItem => addCustomItem(foodItem),
      checked: checked,
      fetcher: fetcher
    })), asPath == '/' && /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
      fetcher: fetcher
    })), asPath == '/order' && /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), asPath == '/account' && /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
      isLoggedIn: isLoggedIn,
      accountInfo: accountInfo
    }))]
  });
}

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [961], () => (__webpack_exec__(783)));
module.exports = __webpack_exports__;

})();