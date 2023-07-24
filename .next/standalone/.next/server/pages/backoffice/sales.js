"use strict";
(() => {
var exports = {};
exports.id = 693;
exports.ids = [693];
exports.modules = {

/***/ 3356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BarSales)
/* harmony export */ });
/* unused harmony export DataStatus */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3767);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(738);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9580);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js__WEBPACK_IMPORTED_MODULE_1__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__]);
([chart_js__WEBPACK_IMPORTED_MODULE_1__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function DataStatus(props) {
    const headers = {
        "content-Type": "application/json"
    };
    fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/Sales/Daily?days=" + props.period, headers).catch((error)=>{
        console.log("API error: " + JSON.stringify(error.message));
        props.setDataPosted(false);
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log("handleFetch login data: " + JSON.stringify(data));
        props.setPrice(data.sales.reduce((a, b)=>[
                ...a,
                b.price
            ], []));
        props.setLabels(data.sales.map((x)=>x.foodType + " (" + x.amount + ")"));
        props.setDataPosted(false);
    }).catch((error)=>{
        console.log("React fetch error: " + error.message);
        props.setError(error.message);
        props.setDataPosted(false);
    });
}
function BarSales(props) {
    const [period, setPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const [dataPosted, setDataPosted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.data.reduce((a, b)=>[
            ...a,
            b.price
        ], []));
    const [labels, setLabels] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.data.map((x)=>x.foodType + " (" + x.amount + ")"));
    const food = props.data.reduce((a, b)=>[
            ...a,
            b.foodType
        ], []);
    const amount = props.data.reduce((a, b)=>[
            ...a,
            b.amount
        ], []);
    console.log("sales: " + food);
    console.log("amount: " + amount);
    console.log("price: " + price);
    console.log("label: " + props.data.map((x)=>x.foodType + " (" + x.amount + ")"));
    chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarController, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip);
    const handleDay = ()=>{
        setPeriod(1);
        setDataPosted(true);
    };
    const handleWeek = ()=>{
        setPeriod(7);
        setDataPosted(true);
    };
    const handleMonth = ()=>{
        setPeriod(30);
        setDataPosted(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
        sx: {
            p: 5
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    mb: 5
                },
                variant: "contained",
                "aria-label": "outlined primary button group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                        onClick: handleDay,
                        children: "Day"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                        onClick: handleWeek,
                        children: "Week"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                        onClick: handleMonth,
                        children: "Month"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Chart, {
                type: "bar",
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top"
                        },
                        title: {
                            display: true,
                            text: "Sales By Menu Category"
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || "";
                                    if (label) {
                                        label += ": ";
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD"
                                        }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
                data: {
                    type: "bar",
                    labels: labels,
                    datasets: [
                        {
                            label: "Price",
                            data: price,
                            borderWidth: 1,
                            backgroundColor: "#084c63"
                        }
                    ]
                }
            }),
            dataPosted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataStatus, {
                period: period,
                setLabels: (data)=>setLabels(data),
                setPrice: (data)=>setPrice(data),
                setDataPosted: (data)=>setDataPosted(data),
                setError: (data)=>setError(data)
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: error
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sales),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_barSales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9580);
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_barSales__WEBPACK_IMPORTED_MODULE_2__]);
_components_barSales__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react/prop-types */ 






const getServerSideProps = async (context)=>{
    //console.log('server token:' + context.req.cookies.token)
    try {
        const res = await fetch( false ? 0 : "https://danspizza-api.azurewebsites.net/api/Sales/Daily", {
            headers: {
                "Authorization": "Bearer " + context.req.cookies.token
            }
        });
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const data = await res.json();
        console.log(data);
        return {
            props: {
                data
            }
        };
    } catch (error) {
        console.log("Error: " + error.message);
    }
};
function Sales(props) {
    const data = props.data.sales;
    console.log("manage orders rendered.");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        textAlign: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_barSales__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            data: data
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

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

/***/ 9580:
/***/ ((module) => {

module.exports = require("@mui/material/ButtonGroup");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3767:
/***/ ((module) => {

module.exports = import("chart.js");;

/***/ }),

/***/ 738:
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7014));
module.exports = __webpack_exports__;

})();