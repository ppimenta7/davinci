"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219,849];
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
/* harmony import */ var _services_getProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3575);
/* harmony import */ var _landing_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_landing_preview__WEBPACK_IMPORTED_MODULE_4__]);
_landing_preview__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Slug = ({ bugets , products , categories  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_landing_preview__WEBPACK_IMPORTED_MODULE_4__["default"], {
            bugets: bugets,
            products: products,
            categories: categories
        })
    });
};
const getServerSideProps = async ({ query  })=>{
    const params = query.slug;
    const id = typeof params === "string" ? params : "";
    const bugets = await (0,_services_getBugets__WEBPACK_IMPORTED_MODULE_1__/* .getBugets */ .r)(id);
    const IDproducts = bugets.products.join();
    const rest1 = await (0,_services_getProducts__WEBPACK_IMPORTED_MODULE_3__/* .getProducts */ .X)(IDproducts);
    const products = rest1.results;
    const IDCategorys = products?.map((product)=>{
        return product.category;
    });
    const categories = await (0,_services_getCategories__WEBPACK_IMPORTED_MODULE_2__/* .getCategories */ .C)(IDCategorys);
    console.log(categories);
    return {
        props: {
            bugets,
            products,
            categories: categories.results
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
    return response.data;
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,495,617,49], () => (__webpack_exec__(7563)));
module.exports = __webpack_exports__;

})();