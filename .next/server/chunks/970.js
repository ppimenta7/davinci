"use strict";
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 5970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);


const LandingPage = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(505), __webpack_require__.e(664), __webpack_require__.e(138), __webpack_require__.e(7)]).then(__webpack_require__.bind(__webpack_require__, 6007))
, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "./landing-page"
        ]
    }
});
const Pdf = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(308), __webpack_require__.e(53)]).then(__webpack_require__.bind(__webpack_require__, 6053))
, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "./pdf"
        ]
    }
});
const NotFoundPage = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(505), __webpack_require__.e(664), __webpack_require__.e(138), __webpack_require__.e(609)]).then(__webpack_require__.bind(__webpack_require__, 8609))
, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "./404"
        ]
    }
});
const IndexPage = ({ bugets , products , categories , customers , pdf , params  })=>{
    return params == undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotFoundPage, {}) : pdf == true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Pdf, {
        bugets: bugets,
        products: products,
        customers: customers
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LandingPage, {
        bugets: bugets,
        products: products,
        categories: categories,
        customers: customers
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);


/***/ })

};
;