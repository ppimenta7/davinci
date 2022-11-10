"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 2960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Landing_Page_Portfolio1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/business/support.json
const support_namespaceObject = JSON.parse('[{"id":1,"image":"img/davinci/d2.png","title":"Kids"},{"id":2,"image":"img/davinci/btn.png","title":"Senior"},{"id":3,"image":"img/davinci/d6.png","title":"Performance"}]');
;// CONCATENATED MODULE: ./src/components/Landing-Page/Portfolio1/index.jsx


const Portfolio1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "portfolio-simp-crus pt-0 section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row col-lg-10 col-md-12 pt-60 justify-content-center margin-rl-auto",
                    children: support_namespaceObject.map((slide, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                className: "slide-item img info mt-20 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "fw-600 text-u text-light fz-24",
                                    children: slide.title
                                })
                            })
                        }, idx)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center pb-50 mt-30",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Uma cl\xednica para todos."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "col-6 fz-18 margin-rl-auto",
                            children: "De quem ainda vai passar por uma amputa\xe7\xe3o \xe0queles que buscam melhorar sua qualidade de vida com pr\xf3teses."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Landing_Page_Portfolio1 = (Portfolio1);


/***/ })

};
;