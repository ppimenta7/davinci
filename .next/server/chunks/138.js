"use strict";
exports.id = 138;
exports.ids = [138];
exports.modules = {

/***/ 8086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ goToSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable @next/next/no-img-element */ 
const goToSection = (e, link)=>{
    if (link == "#0") e.preventDefault();
    const section = document.querySelector(`[data-scroll-index="${e.target.dataset.scrollNav}"]`);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
};
const Navbar = ({ links , navbarRef , theme  })=>{
    return /*#__PURE__*/ _jsx("nav", {
        className: `navbar navbar-expand-lg ${theme}`,
        ref: navbarRef,
        children: /*#__PURE__*/ _jsxs("div", {
            className: `container`,
            children: [
                /*#__PURE__*/ _jsx(Link, {
                    className: "navbar-brand",
                    href: "/",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "logo",
                        children: /*#__PURE__*/ _jsx("img", {
                            src: "img/davinci/d7.png",
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ _jsx("i", {
                        className: "fas fa-bars"
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ _jsx("ul", {
                            className: "navbar-nav",
                            children: links && links.length && links.map((link, idx)=>/*#__PURE__*/ _jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "nav-link",
                                        href: link.href,
                                        "data-scroll-nav": idx,
                                        onClick: (e)=>goToSection(e, link.href)
                                        ,
                                        children: link.name
                                    })
                                }, idx)
                            )
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "social",
                            children: /*#__PURE__*/ _jsx("ul", {
                                className: "rest",
                                children: /*#__PURE__*/ _jsxs("li", {
                                    children: [
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "https://www.facebook.com/davinciclinicbr",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "https://www.instagram.com/davincibrasil/",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "https://www.youtube.com/channel/UCa1K4UCwNtivaLBs_zF25VQ",
                                            children: /*#__PURE__*/ _jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Navbar)));


/***/ }),

/***/ 3138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbars_AppNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8086);

/* eslint-disable @next/next/no-css-tags */ 


const MainLayout = ({ children , links  })=>{
    // const navbarRef = useRef(null);
    // useEffect(() => {
    //   var navbar = navbarRef.current;
    //   if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
    //   else navbar.classList.remove("nav-scroll");
    //   window.addEventListener("scroll", () => {
    //     if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
    //     else navbar.classList.remove("nav-scroll");
    //   });
    // }, [navbarRef]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/plugins.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/style.css"
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);


/***/ })

};
;