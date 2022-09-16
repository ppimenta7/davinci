"use strict";
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 8963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ parallaxie)
/* harmony export */ });
function parallaxie(selector) {
    let elementBg = document.querySelector(selector);
    let image = elementBg.getAttribute("data-background");
    let position = elementBg.getBoundingClientRect().top * 0.55;
    elementBg.style.backgroundImage = `url("${image}")`;
    elementBg.style.backgroundSize = "cover";
    elementBg.style.backgroundRepeat = "no-repeat";
    elementBg.style.backgroundAttachment = "fixed";
    elementBg.style.backgroundPosition = `center ${position}px`;
    window.onscroll = ()=>{
        let elements = document.querySelectorAll(".parallaxie[data-background]");
        elements.forEach((element)=>{
            position = element.getBoundingClientRect().top * 0.55;
            element.style.backgroundPosition = `center ${position}px`;
        });
    };
};


/***/ }),

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/footers/main-footer.json
const main_footer_namespaceObject = JSON.parse('{"FK":{"qv":"https://www.facebook.com/","km":"https://twitter.com/","ZB":"https://www.youtube.com/"},"Ok":[{"title":"Company","url":"/about-creative"},{"title":"Team","url":"/about-business"},{"title":"Services","url":"/services-creative"},{"title":"Products","url":"/portfolio-classic-masonry"}],"aC":[{"url":"/blog-grid-modern","image":"img/blog/c3.jpg","title":"How to check the website before releasing it?"},{"url":"/blog-grid-modern","image":"img/blog/c1.jpg","title":"How to check the website before releasing it?"}],"Lk":"Germany — 785 15h Street, Office 478 Berlin, De 81566","Do":"Info-Support@Gmail.com","m7":"+1 840 841 25 69","Qz":{"u":"ThemesCamp","H":"https://themeforest.net/user/themescamp"}}');
;// CONCATENATED MODULE: ./src/components/Footers/MainFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Footer = ({ footerClass , footerBg , business , creative  })=>{
    const footerRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (!creative) footerRef.current.setAttribute("data-overlay-dark", "0");
    }, [
        creative
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: footerClass,
        style: {
            backgroundImage: footerBg ? "url('img/background/8.jpg')" : "url('')"
        },
        ref: footerRef,
        children: [
            footerBg ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cal pb-80 pt-80",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cont",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "sub-title gr-green-text",
                                            children: "Stay Connected"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "fz-50",
                                            children: "Partner with us!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mt-5 fw-300 fz-20",
                                            children: "Let\u2019s build the next big thing together."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5 d-flex justify-content-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact-creative",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "butn butn-md butn-rounded butn-light mt-30",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "Get In Touch"
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container pt-80 pb-80",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/landing-preview",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: `img/logo-${creative ? "dark" : "light"}.png`,
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "We create digital experiences for brands and companies by using technology."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social circle-bord mt-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "rest horizontal-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.qv,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.km,
                                                        className: "ms-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: main_footer_namespaceObject.FK.ZB,
                                                        className: "ms-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "cmp-links",
                                        children: main_footer_namespaceObject.Ok.map((link, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: link.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: link.title
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "Office"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "address",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "adrs mb-15",
                                                children: main_footer_namespaceObject.Lk
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "eml underline mb-15",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: main_footer_namespaceObject.Do
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "tel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: `${business ? "gr-green-text" : creative ? "" : "gr-purple-red-text"}`,
                                                    children: main_footer_namespaceObject.m7
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title fw-600 fz-20 mb-30",
                                        children: "Recent Posts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "rc-post",
                                        children: main_footer_namespaceObject.aC.map((post, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: `flex ${idx !== main_footer_namespaceObject.aC.length - 1 ? "mb-30" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: post.image,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "fz-16 line-height-28",
                                                                    children: post.title
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${footerBg ? "sub-footer pb-50 pt-0 no-bord" : creative ? "sub-footer pb-50 pt-50" : "sub-footer pb-50"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "horizontal-link fz-13",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/services-business",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Privacy policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/services-business",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Legal notice"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/services-business",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Terms of service"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyrights d-flex justify-content-end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "fz-13",
                                        children: [
                                            "\xa9 2022 Ravo is Proudly Powered by",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "underline",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: main_footer_namespaceObject.Qz.H,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    className: `${business ? "gr-green-text" : creative ? "" : "gr-purple-red-text"} ms-1`,
                                                    children: main_footer_namespaceObject.Qz.u
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const MainFooter = (Footer);


/***/ }),

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


const MainLayout = ({ children , links , type , navTheme  })=>{
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