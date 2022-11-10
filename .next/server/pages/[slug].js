"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219,405,545,429];
exports.modules = {

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/services/getBugets.ts

const options = {
    headers: {
        Authorization: "Bearer odh5mG3V332Drs7NwoGJz0XRXKlOoQgYonWNxieE",
        "X-Bridge-Settings": "gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ=="
    }
};
const getBugets = async (id)=>{
    const response = await external_axios_default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_generation/${id}/`, {
        headers: {
            Authorization: options.headers.Authorization
        }
    });
    return response;
};

;// CONCATENATED MODULE: ./src/services/getCategories.ts


const getCategories = async (IDCategorys)=>{
    const response = await external_axios_default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/categories/`, {
        params: {
            id__in: `${IDCategorys}`
        },
        headers: {
            Authorization: options.headers.Authorization
        }
    });
    return response;
};

;// CONCATENATED MODULE: ./src/services/getCustomers.ts

const getCustomers_options = {
    headers: {
        Authorization: "Bearer odh5mG3V332Drs7NwoGJz0XRXKlOoQgYonWNxieE",
        "X-Bridge-Settings": "gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ=="
    }
};
const getCustomers = async (id)=>{
    const response = await external_axios_default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/customers/`, {
        params: {
            id: id
        },
        headers: {
            Authorization: getCustomers_options.headers.Authorization
        }
    });
    return response;
};

;// CONCATENATED MODULE: ./src/services/getProducts.ts


const getProducts = async (IDproducts)=>{
    const response = await external_axios_default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/collection/`, {
        params: {
            id__in: `${IDproducts}`
        },
        headers: {
            Authorization: options.headers.Authorization
        }
    });
    return response;
};

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/services/getBugetsHistory.ts

const getBugetsHistory_options = {
    headers: {
        Authorization: "Bearer odh5mG3V332Drs7NwoGJz0XRXKlOoQgYonWNxieE",
        "X-Bridge-Settings": "gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ=="
    }
};
const getBugetsHistory = async (id)=>{
    const response = await external_axios_default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_history/${id}/`, {
        headers: {
            Authorization: getBugetsHistory_options.headers.Authorization
        }
    });
    return response;
};

;// CONCATENATED MODULE: ./src/pages/[slug].tsx







const IndexPage = dynamic_default()(()=>__webpack_require__.e(/* import() */ 970).then(__webpack_require__.bind(__webpack_require__, 5970))
, {
    loadableGenerated: {
        modules: [
            "[slug].tsx -> " + "."
        ]
    }
});
const Slug = ({ pdf , bugets , products , categories , customers , params  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(IndexPage, {
            params: params,
            bugets: bugets,
            products: products,
            categories: categories,
            customers: customers,
            pdf: pdf
        })
    });
};
const getServerSideProps = async ({ query  })=>{
    const params = query.slug;
    // const params = "orcamento-para-solucao-de-amputacao-chopart&19"
    // const params = "pdf=orcamento-para-solucao-de-amputacao-chopart&22"
    // const params = "historico2=orcamento-para-solucao-de-amputacao-chopart&22-versao=1"
    // const params = "historico-pdf3=orcamento-para-solucao-de-amputacao-chopart&22-versao=2"
    const type = params.includes("historico") ? "historico" : params.includes("pdf") ? "pdf" : "hotsite";
    const pdf = params.includes("pdf") ? true : false;
    const paramSplit = params.split("&");
    const history = paramSplit[0].split("=");
    const historyID = history[0].replace(/historico/i, "").replace(/-pdf/i, "");
    const paramID = type == "historico" ? historyID : paramSplit[1];
    const id = typeof params === "string" ? paramID : "";
    try {
        let bugets;
        if (type == "historico") {
            bugets = await getBugetsHistory(id).then((res)=>res.data
            );
        } else {
            bugets = await getBugets(id).then((res)=>res.data
            );
        }
        // bugets = await getBugets(id).then((res) => res.data);
        const IDproducts = bugets.products.join();
        const products1 = await getProducts(IDproducts).then((res)=>res.data.records
        );
        const IDCategorys = await products1.map((products)=>products.category
        );
        const categories = await getCategories(IDCategorys).then((res)=>res.data.records
        );
        const customers = await getCustomers(bugets.customer).then((res)=>res.data.records[0]
        );
        return {
            props: {
                bugets,
                products: products1,
                categories,
                customers,
                pdf: pdf,
                params: params
            }
        };
    } catch (error) {
        console.log(error);
        return {
            redirect: {
                destination: "/404"
            }
        };
    }
};
/* harmony default export */ const _slug_ = (Slug);


/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("html-to-text");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(8898)));
module.exports = __webpack_exports__;

})();