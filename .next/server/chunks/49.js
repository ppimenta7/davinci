"use strict";
exports.id = 49;
exports.ids = [49];
exports.modules = {

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
    return response.data;
};


/***/ })

};
;