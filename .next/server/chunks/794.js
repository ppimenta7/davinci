"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/footers/main-footer.json
const main_footer_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/Footers/MainFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Footer = ()=>{
    const creative = undefined;
    const footerRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (!creative) footerRef.current.setAttribute("data-overlay-dark", "0");
    }, [
        creative
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "main-footer bg-dark-blue bg-img",
        style: {
            backgroundImage: "url('img/background/8.jpg')"
        },
        ref: footerRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `sub-footer pt-0 no-bord`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "copyrights d-flex justify-content-end",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "fz-13",
                                children: [
                                    "\xa9 2022 Davinci is Proudly Powered by",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "underline",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.penseapp.com.br",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            className: "gr-green-text ms-1",
                                            children: "Penseapp"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const MainFooter = (Footer);


/***/ })

};
;