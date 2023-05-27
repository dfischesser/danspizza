"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 4093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Menu),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react-bootstrap/Accordion"
const Accordion_namespaceObject = require("react-bootstrap/Accordion");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/customize.js



function Header({
  title
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("h5", {
    className: "padding customize-header",
    children: title ? title : 'Default title'
  });
}

function Customize(props) {
  let updatedChecked = props.checked;

  function handleChange(newToppingID) {
    let filterChecked = props.checked.filter(topping => topping.toppingID == newToppingID).pop();
    filterChecked.isChecked = !filterChecked.isChecked;
    updatedChecked = props.checked.map(checked => checked.toppingID == newToppingID ? filterChecked : checked);
    console.log('cust updatedchecked: ' + JSON.stringify(updatedChecked));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "customize-wrapper",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "customize-title",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        title: "Customize"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "customize-close-button",
        onClick: () => props.closeCustomize(),
        children: "X"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: props.foodToCustomize.foodName
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "customize-body",
      children: [props.customizeData.toppings.map(topping => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "customize-center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          htmlFor: topping.toppingID,
          className: "customize-label",
          children: [topping.toppingName, ": ", topping.price.toLocaleString('us-US', {
            style: 'currency',
            currency: 'USD'
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "checkbox",
          id: topping.toppingID,
          name: topping.toppingName,
          value: props.checked,
          onChange: () => handleChange(topping.toppingID),
          className: "customize-item"
        }, topping.toppingID), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      }, topping.toppingID)), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => props.addCustomItem(props.foodToCustomize),
        children: "Add to Cart"
      })]
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/menu.js
/* eslint-disable react/prop-types */







function menu_Header({
  title
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "header-padding",
    children: title ? title : 'Default title'
  });
}

const getStaticProps = async () => {
  const res = await fetch('https://localhost/api/Menu/Get');
  const menu = await res.json();
  return {
    props: {
      menu
    }
  };
};
function Menu(props) {
  const data = props.menu;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(menu_Header, {
      title: "Menu"
    }), /*#__PURE__*/jsx_runtime_.jsx((Accordion_default()), {
      defaultActiveKey: "0",
      className: "menu",
      children: data.menuCategoryList.map(data => /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
        eventKey: data.menuCategoryID,
        className: "menu-category",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Accordion_default()).Header, {
          className: "accordion-head",
          children: data.foodType
        }), /*#__PURE__*/jsx_runtime_.jsx((Accordion_default()).Body, {
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "menu-list",
            children: data.foodList.map(data => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "menu-center",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "menu-item",
                children: [data.foodName, ": $", data.price]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "menu-button",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => props.openModal(data),
                  children: "Customize"
                }, data.foodID)
              })]
            }, data.foodID))
          })
        })]
      }, data.menuCategoryID))
    }), props.isModalOpen && /*#__PURE__*/jsx_runtime_.jsx(Customize, {
      customizeData: props.customizeData,
      closeCustomize: () => props.closeCustomize(),
      updateCheckedToppings: updatedChecked => props.updateCheckedToppings(updatedChecked),
      checked: props.checked,
      foodToCustomize: props.foodToCustomize,
      addCustomItem: foodItem => props.addCustomItem(foodItem)
    })]
  });
}

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
var __webpack_exports__ = (__webpack_exec__(4093));
module.exports = __webpack_exports__;

})();