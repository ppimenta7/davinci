"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219,545,429];
exports.modules = {

/***/ 7563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_getBugets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5049);
/* harmony import */ var _services_getCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1793);
/* harmony import */ var _services_getCustomers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6680);
/* harmony import */ var _services_getProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3575);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6969);
/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7726);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_landing_page__WEBPACK_IMPORTED_MODULE_5__]);
_landing_page__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Slug = ({ pdf , bugets , products , categories , customers ,  })=>{
    console.log(pdf);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !pdf ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_page__WEBPACK_IMPORTED_MODULE_5__["default"], {
            bugets: bugets,
            products: products,
            categories: categories,
            customers: customers
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pdf__WEBPACK_IMPORTED_MODULE_6__["default"], {
            bugets: bugets,
            products: products,
            categories: categories,
            customers: customers
        })
    });
};
const getServerSideProps = async ({ query  })=>{
    try {
        const params = query.slug;
        const pdf = params.includes("pdf");
        const paramSplit = params.split("&");
        const id = typeof params === "string" ? paramSplit.at(-1) : "";
        const bugets = await (0,_services_getBugets__WEBPACK_IMPORTED_MODULE_1__/* .getBugets */ .r)(id).then((res)=>res.data
        );
        const IDproducts = bugets.products.join();
        const products1 = await (0,_services_getProducts__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .X)(IDproducts).then((res)=>res.data.results
        );
        const IDCategorys = await products1.map((products)=>products.category
        );
        const categories = await (0,_services_getCategories__WEBPACK_IMPORTED_MODULE_2__/* .getCategories */ .C)(IDCategorys).then((res)=>res.data.results
        );
        const customers = await (0,_services_getCustomers__WEBPACK_IMPORTED_MODULE_3__/* .getCustomers */ .O)(bugets.customer);
        return {
            props: {
                bugets,
                products: products1,
                categories,
                customers,
                pdf: pdf
            }
        };
    } catch (error) {
        return {
            redirect: {
                destination: "/404"
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ options),
/* harmony export */   "r": () => (/* binding */ getBugets)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const options = {
    headers: {
        Authorization: "Token d06fb4379620cbd4ca06289a4850b882860da1e8",
        "X-Bridge-Settings": "gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ=="
    }
};
const getBugets = async (id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://cloud.jetadmin.io/api/models/budget_generation/${id}/`, {
        headers: {
            Authorization: options.headers.Authorization,
            "X-Bridge-Settings": options.headers["X-Bridge-Settings"]
        }
    });
    return response;
};


/***/ }),

/***/ 1793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getCategories)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getBugets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5049);


const getCategories = async (IDCategorys)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://cloud.jetadmin.io/api/models/categories/`, {
        params: {
            id__in: `${IDCategorys}`
        },
        headers: {
            Authorization: _getBugets__WEBPACK_IMPORTED_MODULE_1__/* .options.headers.Authorization */ .Y.headers.Authorization,
            "X-Bridge-Settings": _getBugets__WEBPACK_IMPORTED_MODULE_1__/* .options.headers["X-Bridge-Settings"] */ .Y.headers["X-Bridge-Settings"]
        }
    });
    return response;
};


/***/ }),

/***/ 6680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ getCustomers)
/* harmony export */ });
/* unused harmony export options */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const options = {
    headers: {
        Authorization: "Token d06fb4379620cbd4ca06289a4850b882860da1e8",
        "X-Bridge-Settings": "gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ=="
    }
};
const getCustomers = async (id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://cloud.jetadmin.io/api/models/customers/${id}/`, {
        headers: {
            Authorization: options.headers.Authorization,
            "X-Bridge-Settings": options.headers["X-Bridge-Settings"]
        }
    });
    return response.data;
};


/***/ }),

/***/ 3575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getBugets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5049);


const getProducts = async (IDproducts)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://cloud.jetadmin.io/api/models/collection/`, {
        params: {
            id__in: `${IDproducts}`
        },
        headers: {
            Authorization: _getBugets__WEBPACK_IMPORTED_MODULE_1__/* .options.headers.Authorization */ .Y.headers.Authorization,
            "X-Bridge-Settings": _getBugets__WEBPACK_IMPORTED_MODULE_1__/* .options.headers["X-Bridge-Settings"] */ .Y.headers["X-Bridge-Settings"]
        }
    });
    return response;
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5158:
/***/ ((module) => {

module.exports = require("jspdf");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 5989:
/***/ ((module) => {

module.exports = require("pdfmake/build/pdfmake");

/***/ }),

/***/ 7788:
/***/ ((module) => {

module.exports = require("pdfmake/build/vfs_fonts");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 172:
/***/ ((module) => {

module.exports = require("react-slidedown");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,138,969,726], () => (__webpack_exec__(7563)));
module.exports = __webpack_exports__;

})();