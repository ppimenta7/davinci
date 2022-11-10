"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 4515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ landing_page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./src/layouts/main-light.jsx
var main_light = __webpack_require__(3138);
;// CONCATENATED MODULE: ./src/components/Common/FixedSearch/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const FixedSearch = ()=>{
    (0,external_react_.useEffect)(()=>{
        let offset = 150;
        let fixedSearch = document.querySelector(".fixed-search .search-area");
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > offset) {
                fixedSearch.classList.add("scroll");
            } else {
                fixedSearch.classList.remove("scroll");
            }
        });
    }, []);
    const toggleSearch = ()=>{
        window.open("https://wa.me/5511971707515?text=Ol\xe1!%20Gostaria%20de%20falar%20com%20um%20de%20seus%20atendentes", "_blank");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed-search",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-area",
                onClick: toggleSearch,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "https://i.ibb.co/VgSspjY/whatsapp-button.png",
                    alt: "bot\xe3o whatsapp"
                })
            })
        })
    });
};
/* harmony default export */ const Common_FixedSearch = (FixedSearch);

;// CONCATENATED MODULE: ./src/pages/landing-page.tsx

/* eslint-disable @next/next/no-css-tags */ // eslint-disable-next-line react/no-children-prop





const Header = dynamic_default()(()=>__webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(__webpack_require__, 57))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Header"
        ]
    }
});
const Header2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 319).then(__webpack_require__.bind(__webpack_require__, 5319))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Header2"
        ]
    }
});
const Services = dynamic_default()(()=>__webpack_require__.e(/* import() */ 800).then(__webpack_require__.bind(__webpack_require__, 1800))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Services"
        ]
    }
});
const Team = dynamic_default()(()=>__webpack_require__.e(/* import() */ 446).then(__webpack_require__.bind(__webpack_require__, 3446))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Team"
        ]
    }
});
const Portfolio = dynamic_default()(()=>__webpack_require__.e(/* import() */ 367).then(__webpack_require__.bind(__webpack_require__, 8367))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Portfolio"
        ]
    }
});
const Portfolio1 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 960).then(__webpack_require__.bind(__webpack_require__, 2960))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Portfolio1"
        ]
    }
});
const Pricing = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(308), __webpack_require__.e(728)]).then(__webpack_require__.bind(__webpack_require__, 5728))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Pricing"
        ]
    }
});
const Testimonials = dynamic_default()(()=>__webpack_require__.e(/* import() */ 631).then(__webpack_require__.bind(__webpack_require__, 1631))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Testimonials"
        ]
    }
});
const About = dynamic_default()(()=>__webpack_require__.e(/* import() */ 814).then(__webpack_require__.bind(__webpack_require__, 5814))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/About"
        ]
    }
});
const Section = dynamic_default()(()=>__webpack_require__.e(/* import() */ 739).then(__webpack_require__.bind(__webpack_require__, 2739))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Section"
        ]
    }
});
const Info = dynamic_default()(()=>__webpack_require__.e(/* import() */ 97).then(__webpack_require__.bind(__webpack_require__, 97))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Info"
        ]
    }
});
const Login = dynamic_default()(()=>__webpack_require__.e(/* import() */ 798).then(__webpack_require__.bind(__webpack_require__, 2798))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/Login"
        ]
    }
});
const ExpiratePage = dynamic_default()(()=>__webpack_require__.e(/* import() */ 298).then(__webpack_require__.bind(__webpack_require__, 3298))
, {
    loadableGenerated: {
        modules: [
            "landing-page.tsx -> " + "../components/Landing-Page/ExpiratePage"
        ]
    }
});
const Footer = dynamic_default()(()=>__webpack_require__.e(/* import() */ 794).then(__webpack_require__.bind(__webpack_require__, 4794))
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
    const { 0: acessType , 1: setAcessType  } = (0,external_react_.useState)("");
    const handleTypeAcess = ()=>{
        setAcessType("admin");
    };
    const { 0: acess , 1: setAcess  } = (0,external_react_.useState)(false); //false
    const handleAcess = ()=>{
        setAcess(true);
    };
    (0,external_react_.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Davinci - Or\xe7amento Hotsite"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(main_light/* default */.Z, {
                links: nav_links,
                children: acess ? status || acessType == "admin" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Common_FixedSearch, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header2, {
                            bugets: bugets
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                            className: "position-re",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Team, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Services, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Info, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Portfolio1, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Portfolio, {
                                    bugets: bugets,
                                    products: products,
                                    categories: categories
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(About, {
                                    products: products,
                                    categories: categories
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Pricing, {
                                    bugets: bugets,
                                    customers: customers,
                                    products: products
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Section, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Testimonials, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(ExpiratePage, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Login, {
                    handleAcess: handleAcess,
                    handleTypeAcess: handleTypeAcess,
                    bugetsPassword: bugets?.password_access_code
                })
            })
        ]
    });
};
/* harmony default export */ const landing_page = (LandingPage);


/***/ })

};
;