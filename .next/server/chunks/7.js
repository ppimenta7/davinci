"use strict";
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 6007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3138);

/* eslint-disable @next/next/no-css-tags */ // eslint-disable-next-line react/no-children-prop




const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(__webpack_require__, 57))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Header"
        ]
    }
});
const Services = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 800).then(__webpack_require__.bind(__webpack_require__, 1800))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Services"
        ]
    }
});
const Team = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 446).then(__webpack_require__.bind(__webpack_require__, 3446))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Team"
        ]
    }
});
const Portfolio = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 367).then(__webpack_require__.bind(__webpack_require__, 8367))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Portfolio"
        ]
    }
});
const Portfolio1 = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 960).then(__webpack_require__.bind(__webpack_require__, 2960))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Portfolio1"
        ]
    }
});
const Pricing = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(308), __webpack_require__.e(728)]).then(__webpack_require__.bind(__webpack_require__, 5728))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Pricing"
        ]
    }
});
const Testimonials = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 631).then(__webpack_require__.bind(__webpack_require__, 1631))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Testimonials"
        ]
    }
});
const About = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 814).then(__webpack_require__.bind(__webpack_require__, 5814))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/About"
        ]
    }
});
const Section = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 739).then(__webpack_require__.bind(__webpack_require__, 2739))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Section"
        ]
    }
});
const Info = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 97).then(__webpack_require__.bind(__webpack_require__, 97))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Info"
        ]
    }
});
const Login = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 798).then(__webpack_require__.bind(__webpack_require__, 2798))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Login"
        ]
    }
});
const ExpiratePage = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 298).then(__webpack_require__.bind(__webpack_require__, 3298))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/ExpiratePage"
        ]
    }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 794).then(__webpack_require__.bind(__webpack_require__, 4794))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Footers/MainFooter"
        ]
    }
});
const LandingPage = ({ bugets , products , categories , customers  })=>{
    const dateNow = new Date();
    const expirationDate = new Date(bugets?.expiration_date);
    const status = expirationDate.getTime() >= dateNow.getTime();
    const { 0: acessType , 1: setAcessType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleTypeAcess = ()=>{
        setAcessType("admin");
    };
    const { 0: acess , 1: setAcess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //false
    const handleAcess = ()=>{
        setAcess(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.classList.add("index-main");
    }, []);
    const nav_links = [
        {
            name: "Home",
            href: "#0"
        },
        {
            name: "Equipe",
            href: "#0"
        },
        {
            name: "Produtos",
            href: "#0"
        },
        {
            name: "Detalhes",
            href: "#0"
        },
        {
            name: "Proposta",
            href: "#0"
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Davinci - Or\xe7amento Hotsite"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_main_light__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                links: nav_links,
                children: acess ? status || acessType == "admin" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                            bugets: bugets
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                            className: "position-re",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Team, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Services, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Portfolio1, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Portfolio, {
                                    bugets: bugets,
                                    products: products,
                                    categories: categories
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(About, {
                                    products: products,
                                    categories: categories
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Testimonials, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Info, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Pricing, {
                                    bugets: bugets,
                                    customers: customers,
                                    products: products
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExpiratePage, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Login, {
                    handleAcess: handleAcess,
                    handleTypeAcess: handleTypeAcess,
                    bugetsPassword: bugets?.password_access_code
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);


/***/ })

};
;