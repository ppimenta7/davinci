"use strict";
exports.id = 7;
exports.ids = [7];
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
;// CONCATENATED MODULE: ./src/data/footers/main-footer.json
const main_footer_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/Footers/MainFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Footer = ({ footerClass , footerBg , business , creative  })=>{
    const footerRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (!creative) footerRef.current.setAttribute("data-overlay-dark", "0");
    }, [
        creative
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: footerClass,
        style: {
            backgroundImage: footerBg ? "url('img/background/8.jpg')" : "url('')"
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


/***/ }),

/***/ 5814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Landing_Page_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
;// CONCATENATED MODULE: ./public/js/modal.js

/* eslint-disable @next/next/no-img-element */ 

const MyVerticallyCenteredModal = (props)=>{
    const product = props.product;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
        ...props,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                closeButton: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                    id: "contained-modal-title-vcenter",
                    children: "Detalhes T\xe9cnicos"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: product.nome
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: product.technical_details
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Footer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "butn butn-orange-light butn-xsm text-u fw-700 radius-30 ",
                    onClick: props.onHide,
                    children: "Close"
                })
            })
        ]
    });
};
/* harmony default export */ const modal = (MyVerticallyCenteredModal);

;// CONCATENATED MODULE: ./src/components/Landing-Page/About/index.jsx

/* eslint-disable @next/next/no-img-element */ 





const About = ({ products , categories  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: modalShow , 1: setModalShow  } = (0,external_react_.useState)(false);
    const { 0: productSelect , 1: setProductSelect  } = (0,external_react_.useState)("");
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        "data-scroll-index": "3",
        children: products?.map((product, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                style: {
                    backgroundColor: "#f0f0f0"
                },
                className: "section-padding pt-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 valign",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "intro-two-img full-width md-mb50",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "svg-color",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        x: "0px",
                                                        y: "0px",
                                                        viewBox: "0 0 288 288",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        width: "100%",
                                                        id: "blobSvg1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                                                    id: "gradient1",
                                                                    x1: "0%",
                                                                    y1: "0%",
                                                                    x2: "0%",
                                                                    y2: "100%",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                            offset: "1000%",
                                                                            style: {
                                                                                stopColor: "#a5baca"
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                            offset: "0%",
                                                                            style: {
                                                                                stopColor: "#a5baca"
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                fill: "url(#gradient1)",
                                                                id: "blob1",
                                                                d: "",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                                                                    repeatCount: "indefinite",
                                                                    attributeName: "d",
                                                                    dur: "12s",
                                                                    values: "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "img2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: product.image,
                                                        alt: ""
                                                    }),
                                                    product.link_video ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "play-button",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: product.link_video,
                                                            className: "btn vid",
                                                            onClick: openVideo,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    width: "100px",
                                                                    height: "100px",
                                                                    viewBox: "0 0 100 100",
                                                                    preserveAspectRatio: "none",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                        className: "circle",
                                                                        cx: "50",
                                                                        cy: "50",
                                                                        r: "48",
                                                                        stroke: "white",
                                                                        strokeWidth: "2",
                                                                        fill: "none"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-play"
                                                                })
                                                            ]
                                                        })
                                                    }) : ""
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 valign",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content pl-50",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-20 fw-800",
                                                children: [
                                                    product.name,
                                                    ".",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        style: {
                                                            display: "block"
                                                        },
                                                        className: "blue-color",
                                                        children: [
                                                            " ",
                                                            categories.map((category)=>category.id == product.category ? category.name : ""
                                                            )
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: product.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "butn butn-md butn-orange-light text-u fw-700 radius-30 mt-30",
                                                onClick: ()=>(setModalShow(true), setProductSelect(product))
                                                ,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text slide-up fz-15",
                                                        children: "Ver Mais"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text slide-down fz-15",
                                                        children: "Ver Mais"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                     false && /*#__PURE__*/ 0,
                    /*#__PURE__*/ jsx_runtime_.jsx(modal, {
                        show: modalShow,
                        product: productSelect,
                        onHide: ()=>setModalShow(false)
                    })
                ]
            }, product.id)
        )
    });
};
/* harmony default export */ const Landing_Page_About = (About);


/***/ }),

/***/ 3298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3138);

//= Layout

const ExpiratePage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_main_light__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "position-re",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container content-404 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4 justify-content-center text-center margin-rl-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Acesso Expirado"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "fz-18",
                                        children: "A p\xe1gina que voc\xea est\xe1 procurando n\xe3o est\xe1 dispon\xedvel ou n\xe3o pertencem a este site!"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpiratePage);


/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_parallaxie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8963);
/* harmony import */ var _Navbars_AppNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8086);

/* eslint-disable @next/next/no-img-element */ 




const Header = ({ bugets  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        new _common_parallaxie__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("header .background.bg-img.parallaxie");
    }, []);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    const bgTitle = bugets?.title;
    const title = bgTitle ? bgTitle.replace(/Orçamento para/g, "") : null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: "home-bus1 position-re",
            "data-scroll-index": "0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "background bg-img parallaxie valign",
                    // data-background="img/davinci/fundo.jpg"
                    // data-background="img/davinci/d3.png"
                    "data-background": "img/davinci/image2.png",
                    "data-overlay-dark": "4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container padding-rl-50",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-8 col-md-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "caption",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "pr-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/img/davinci/d7.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "row",
                                                        style: {
                                                            borderLeft: "2px solid white",
                                                            paddingLeft: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "social",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "rest",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "https://www.facebook.com/davinciclinicbr",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fab fa-facebook-f"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "https://www.instagram.com/davincibrasil/",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fab fa-instagram"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                href: "https://www.youtube.com/channel/UCa1K4UCwNtivaLBs_zF25VQ",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fab fa-youtube"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "fw-400 fz-16",
                                                                    children: "Cada pr\xf3tese, Uma obra de arte"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                className: "fw-300 text-u fz-40 pt-40",
                                                children: [
                                                    "A ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "orange-color fw-600 ",
                                                        children: "Da Vinci Clinic"
                                                    }),
                                                    " \xe9 o centro de reabilita\xe7\xe3o mais avan\xe7ado da Am\xe9rica Latina "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                // style={{
                                                //       backgroundColor:"#ccccccab",
                                                //       padding: "5px 10px",
                                                //       borderRadius: "10px",
                                                //       color: "black",
                                                //   }}
                                                className: "fz-18",
                                                children: "A Da Vinci Clinic re\xfane os mais experientes profissionais do pa\xeds que, juntos somam mais de 100 anos de experi\xeancia e milhares de pacientes reabilitados. Sua pr\xf3xima experi\xeancia pode ser aqui"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#0",
                                                "data-scroll-nav": 1,
                                                className: "butn butn-md butn-rounded butn-gradient mt-30",
                                                onClick: (e)=>(0,_Navbars_AppNavbar__WEBPACK_IMPORTED_MODULE_3__/* .goToSection */ .i)(e, "#0")
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text text-u",
                                                    children: "Veja Mais"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-2 offset-lg-2 valign",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "full-width text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "play-button",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://youtu.be/WRwJE1S7iuw",
                                                className: "vid",
                                                onClick: openVideo,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-play"
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "curve-buttom",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        preserveAspectRatio: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1920",
                        height: "217",
                        viewBox: "0 0 1920 217",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            fillRule: "evenodd",
                            transform: "matrix(-1 0 0 1 1920 0)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z",
                                    opacity: ".3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z",
                                    opacity: ".6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"
                                })
                            ]
                        })
                    })
                }),
                 false && /*#__PURE__*/ 0
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Info = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "work-carsouel crv section-padding pt-30",
                "data-scroll-index": "2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "round-head text-center mb-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-u fz-35 pt-40",
                                children: "Nosso M\xe9todo de Reabilita\xe7\xe3o"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "img/davinci/info.png",
                                alt: ""
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "process-simp position-re",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "curve-cls top",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 500 250",
                        enableBackground: "new 0 0 500 250",
                        xmlSpace: "preserve",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "#f5f5f5",
                            d: "M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);


/***/ }),

/***/ 2798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ 
const Login = ({ bugetsPassword , handleAcess , handleTypeAcess  })=>{
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: errMessage , 1: setErrMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const validatePassword = (pass)=>{
        if (pass == bugetsPassword || pass == "admin123") {
            return true;
        } else {
            setErrMessage("Verifique que o c\xf3digo de acesso est\xe1 correto");
            return false;
        }
    };
    const handleChange = (e)=>{
        setPassword(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!validatePassword(password)) return; //= Validate Form
        setErrMessage(""); //= Clear Error Message
        password == "admin123" ? handleTypeAcess() : null;
        handleAcess();
    // document.forms[0].submit(); //= Sumbit The Form
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "contact-crv container-fluid",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row col-12 justify-content-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "radius-20 col-md-10 col-lg-4 box-shadow to-up",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    id: "contact-form",
                    method: "post",
                    action: "/bla",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "controls row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "line-head mb-20",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            style: {
                                                width: "180px"
                                            },
                                            src: "./img/davinci/logo.png"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "fz-20 fw-600",
                                            children: "Insira seu c\xf3digo de acesso!"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12 md-mb30",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form-group mb-30",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            id: "form_name",
                                            type: "text",
                                            name: "password",
                                            placeholder: "C\xf3digo de Acesso",
                                            required: "required",
                                            onChange: handleChange,
                                            value: password
                                        }),
                                        errMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "messages",
                                            children: errMessage
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center mt-10 ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "fz-12",
                                        type: "submit",
                                        onClick: handleSubmit,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Acessar"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 2960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Landing_Page_Portfolio1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/business/support.json
const support_namespaceObject = JSON.parse('[{"id":1,"image":"img/davinci/d2.png","title":"Kids"},{"id":2,"image":"img/davinci/d5.png","title":"Senior"},{"id":3,"image":"img/davinci/d6.png","title":"Performance"}]');
;// CONCATENATED MODULE: ./src/components/Landing-Page/Portfolio1/index.jsx


const Portfolio1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "portfolio-simp-crus section-padding",
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
                            children: "De quem ainda vai passar por uma amputa\xe7\xe3o \xe0queles que busca melhor sua qualidade de vida com pr\xf3teses."
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Landing_Page_Portfolio1 = (Portfolio1);


/***/ }),

/***/ 8367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_business_features_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 


const Portfolio = ({ products , categories , bugets  })=>{
    const bgTitle = bugets?.title;
    const title = bgTitle ? bgTitle.replace(/Orçamento para/g, "") : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "work-carsouel crv section-padding pb-0 pt-30",
                "data-scroll-index": "2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "round-head text-center mb-20",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "orange-color text-u fz-35 pt-40 pb-30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "fw-300 text-dark",
                                    children: "Or\xe7amento para"
                                }),
                                title
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "work-carsouel crv section-padding pb-0 pt-30 bg-dark-gray bg-color",
                "data-scroll-index": "2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: `feat-exp pb-50 `,
                            "data-overlay-light": "0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `col-lg-4 'col-md-6' valign`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "exp",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: "fw-700",
                                                    children: [
                                                        "As melhores",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "fw-300",
                                                            children: " pr\xf3teses para VOC\xca"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `col-lg-4 col-md-6 valign`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `exp m-auto`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                            className: `lg-text feat-exp gr-green-text fw-700 line-height-1`,
                                                            children: [
                                                                "0",
                                                                _data_business_features_json__WEBPACK_IMPORTED_MODULE_3__/* .years */ .g
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "valign ml-20",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                                className: "text-u ls4 fz-14 line-height-28",
                                                                children: [
                                                                    "anos",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    " no mercado"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-4 valign",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "fz-16",
                                                    children: _data_business_features_json__WEBPACK_IMPORTED_MODULE_3__/* .text */ .f
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9308);

/* eslint-disable @next/next/no-img-element */ 
const { htmlToText  } = __webpack_require__(816);
const Pricing = ({ bugets , customers , products  })=>{
    const dataBirthdate = (0,_public_js_index__WEBPACK_IMPORTED_MODULE_1__/* .formateDate */ .F8)(customers?.birth_date);
    const cpf = (0,_public_js_index__WEBPACK_IMPORTED_MODULE_1__/* .formataCPF */ .bE)(customers?.cpf);
    const value = (0,_public_js_index__WEBPACK_IMPORTED_MODULE_1__/* .formateValue */ .es)(bugets.value);
    const comment = "";
    products.map((prod)=>{
        comment += `${prod.technical_details}. `;
    });
    const text = htmlToText(comment, {
        wordwrap: 130
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "price section-padding",
        "data-scroll-index": "4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "price-table col-md-10 col-lg-8 margin-rl-auto ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        children: "Dados do Paciente"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-center primery-shadow bg-light",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "customer",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "inline",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Nome:"
                                            }),
                                            " ",
                                            customers.full_name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "inline",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Endere\xe7o:"
                                            }),
                                            " ",
                                            customers.address
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "inline",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "CPF:"
                                            }),
                                            " ",
                                            cpf
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "inline",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Data de Nascimento:"
                                            }),
                                            " ",
                                            dataBirthdate
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Doutor Respons\xe1vel:"
                                            }),
                                            " ",
                                            customers.dr_responsible
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Tipo de Amputa\xe7\xe3o:"
                                            }),
                                            " ",
                                            customers.type_of_amputation
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `item md-mb50`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "round-head type",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                            className: "ls2 text-u fz-12 mb-30",
                                            children: [
                                                "Proposta Comercial para Solu\xe7\xe3o I ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "amount text-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                            className: "table-border",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: "fw-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: "Item"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            style: {
                                                                width: "70%"
                                                            },
                                                            children: "Descri\xe7\xe3o"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: "Valor Unit."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: "1"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: text
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: value
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: "Total c/ Desconto"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "fw-700",
                                                            children: (0,_public_js_index__WEBPACK_IMPORTED_MODULE_1__/* .formateValue */ .es)(bugets.value - bugets.discount)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "text-u",
                                                    children: "Condi\xe7\xe3o de Pagamento"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    children: bugets.payment_conditions
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Obs: *Sujeito a an\xe1lise de cr\xe9dito. **Sujeito a limite dispon\xedvel no cart\xe3o de cr\xe9dito. O pagamento pode ser realizado em mais um um cart\xe3o."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    fontSize: "16px",
                                                    color: "#15171f",
                                                    padding: "20px 0"
                                                },
                                                children: "*ESTE OR\xc7AMENTO INCLUI TODO SERVI\xc7O E FISIOTERAPIA NECESS\xc1RIOS PARA A COMPLETA REABILITA\xc7\xc3O DO(A) PACIENTE"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                className: "table-bd-none",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: "fw-700",
                                                                children: [
                                                                    "Prazo de Entrega: ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "fw-400",
                                                                        children: "A combinar"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: "fw-700",
                                                                children: [
                                                                    "Validade deste Or\xe7amento:  ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "fw-400",
                                                                        children: "30 Dias"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: "fw-700",
                                                                children: [
                                                                    "Garantia dos componentes: ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "fw-400",
                                                                        children: "Do fabricante"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                            colSpan: 3,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "fw-700",
                                                                    children: "Assist\xeancia T\xe9cnica:"
                                                                }),
                                                                " Toda e qualquer assist\xeancia t\xe9cnica do material ser\xe1 prestado por esta empresa sempre que necess\xe1rio, sendo recomendado a cada oito meses de manuten\xe7\xe3o para conserva\xe7\xe3o do material. Certos de contarmos com a sua prefer\xeancia, colocamo-nos ao inteiro dispor para qualquer eventual esclarecimento "
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            flexDirection: "column",
                                            alignItems: "flex-end"
                                        },
                                        className: "flex pb-30 pr-30",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                style: {
                                                    width: "250px",
                                                    transform: "translateY(45px)"
                                                },
                                                src: "/img/davinci/ass.png",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    width: "250px",
                                                    borderBottom: "2px black solid"
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "valign pl-30",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                style: {
                                                    width: "140px"
                                                },
                                                src: "/img/davinci/logo.png",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "fz-16 pl-30",
                                                children: "Av. Aruan\xe2, n\xba 280/352 - 1\xba andar - Sala 7 - Tambor\xe9 - Barueri - SP"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pricing);


/***/ }),

/***/ 2739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Landing_Page_Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slidedown"
var external_react_slidedown_ = __webpack_require__(172);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/business/accordions.json
const accordions_namespaceObject = JSON.parse('[{"id":1,"title":"Quando começar a reabilitação protética?","details":"Após a cirurgia da amputação e após a alta hospitalar, o paciente deverá dar continuidade à fisioterapia num serviço especializado. Isto fará toda a diferença na reabilitação e no sucesso do programa. A reabilitação de amputados pós-alta hospitalar tem duas etapas – a pré e pós – protética.","closed":false},{"id":2,"title":"De quanto em quanto tempo eu devo ver meu protesista?","details":"É recomendado que faça, no mínimo, uma visita ao ano ao nosso Centro para nos certificarmos que sua prótese permanece segura e funcional. Lembrando que na Da Vinci estamos sempre disponíveis via nossos canais de comunicação com o paciente.","closed":true},{"id":3,"title":"Em quanto tempo após minha amputação de membro inferior conseguirei voltar a andar novamente?","details":"Depende de quão rápida é sua recuperação pós-cirúrgica. Uma pessoa saudável, sem complicações vasculares e outras comorbidades pode começar sua protetização em três a cinco semanas após a cirurgia.","closed":true},{"id":4,"title":"Quando receberei minha prótese definitiva?","details":"Na Da Vinci, através de nosso método Reabilitação 360, prezamos sempre pelo melhor resultado possível, onde o paciente possa readquirir sua mobilidade, independência e confiança. Partindo deste princípio, usamos quantos cartuchos de prova forem necessários, até que o paciente se sinta confortável e confiante neles. Este processo pode durar de uma a dez semanas.","closed":true},{"id":5,"title":"Quando poderei levar a prótese para casa?","details":"Em paralelo ao treino de marcha o paciente passará por um treinamento específico de uso e manuseio da prótese, como a colocação correta da mesma e o ajuste da interface liner-prótese através de meias,por exemplo. É aconselhável que o paciente passe em treinamento pelo menos por duas semanas consecutivas, principalmente para aqueles que residem fora da capital ou do estado de São Paulo. O coto de amputação também sofre mudanças de volume principalmente neste período. Na Da Vinci, aceleramos ao máximo este processo através de nosso método Reabilitação 360, para que todos os ajustes necessários sejam feitos na prótese, assegurando uma adaptação mais rápida ao paciente.","closed":true},{"id":6,"title":"Quanto tempo poderei usar a prótese durante o dia?","details":"É aconselhável que o tempo de uso da prótese ocorra de forma gradativa. Nos pacientes diabéticos, os cuidados devem ser redobrados, com verificação constante da pele. Atentar-se a alterações de cor, presença de flictemas ou bolhas no coto, lesões de pele, perda de volume do coto, extremidades e saliências ósseas. O treinamento nestes casos, poderá ser supervisionado por familiar e/ou cuidador que levará um folheto explicativo de todos os cuidados com o coto e com a prótese. O uso da prótese ocorrerá em dois ou três períodos de forma lenta e gradual, aumentando o tempo de uso e permanência com a prótese, inserindo aos poucos nas atividades de vida diária. Para os demais pacientes, o uso da prótese ocorrerá de forma gradativa, de acordo com a sensibilidade e condicionamento do coto, uma vez que se trata de um novo membro. Este deverá ser condicionado desde a primeira etapa da reabilitação. O coto se contrai dentro do encaixe, ativando os diferentes grupos musculares de acordo com a fase de marcha. O paciente poderá ter exaustão dos músculos do coto no primeiro dia, se exagerar no tempo de uso e na intensidade da atividade praticada com a prótese.","closed":true},{"id":7,"title":"Eu ainda sinto meus dedos mesmo após minha amputação. Isso é normal?","details":"Sim, é super normal. Sensação fantasma do membro fantasma é comum na maioria dos casos. Se houver muito desconforto, recomendamos que entre em contato com um médico especialista para saber se há opções de tratamento.","closed":true},{"id":8,"title":"Que tipos de sapatos poderei usar com minhas próteses?","details":"Quase todos os tipos de calçados são compatíveis com pés protéticos. Porém, no caso de diferentes alturas do calcanhar, como saltos altos, ajustes de alinhamento do pé são necessários. Se o paciente for diabético o tipo de calçado dependerá do grau de comprometimento da sensibilidade protetora do pé. Se ele já fizer uso de um calçado especial com palmilha termo moldável feita sob medida, recomenda-se a troca apenas da cor do calçado, ou modelo, desde que seja da mesma marca comercial ou feito sob medida.","closed":true},{"id":9,"title":"Como minha prótese se conectará a meu membro amputado?","details":"Na Da Vinci, fabricamos nossos próprios cartuchos a partir de moldes tirados especialmente de cada paciente, capturando perfeitamente o formato e o volume do membro amputado. Após análise minuciosa, será escolhido o tipo de suspensão a ser usado, como sucção direta, pino distal ou através de liners de suspensão.","closed":true},{"id":10,"title":"É comum sentir dor ao usar a prótese?","details":"Não. Nosso método Reabilitação 360 contempla passos graduais até que o amputado se acostume 100% com sua prótese. Se estiver sentindo dor, entre em contato conosco imediatamente.","closed":true},{"id":11,"title":"Quanto tempo meu liner, cartucho e componentes devem durar?","details":"Liners tendem a durar de seis meses a um ano, dependo do nível de cuidado e higiene. Cartuchos podem ter vida útil de até quatro anos se não houver mudança brusca de volume do membro amputado. Por fim, diferentes componentes terão durabilidades e garantias distintas. Se tiver quaisquer dúvidas em relação a componentes específicos, entre em contato conosco.","closed":true},{"id":12,"title":"Poderei praticar esportes com minha prótese?","details":"Na maioria dos casos o amputado consegue voltar às suas atividades com sua prótese. Há alguns esportes, como corrida e natação, que exigem a fabricação de próteses específicas. Entre em contato através de nossos canais de comunicação com o paciente; adoraríamos te ajudar.","closed":true},{"id":13,"title":"Estou tendo que usar mais meias com minha prótese. Preciso de um novo cartucho?","details":"O uso de meias ajuda no controle da mudança de volume no cartucho. Porém, se o encolhimento do membro amputado persiste, é recomendada a troca de cartucho. Estamos à disposição para uma avaliação gratuita.","closed":true},{"id":14,"title":"Posso tomar banho com minha prótese?","details":"Não. A não ser que a prótese seja específica para banho ou uso na água.","closed":true},{"id":15,"title":"Posso nadar com minha prótese?","details":"Há diversos tipos de prótese feitos especificamente para atividades que envolvem água e areia. Nossos cartuchos são projetados para “abraçar” o membro amputado perfeitamente, permitindo, na maioria dos casos, o uso em água também. Entre em contato conosco para saber mais","closed":true},{"id":16,"title":"A prótese mais cara é a melhor?","details":"Não. Cada paciente tem uma particularidade (tamanho do coto, tipo de cirurgia realizada, presença ou não de espículas ósseas, neuromas, capacidade de descarga distal do coto, aderências, comorbidades) que influenciará na escolha de todos os componentes da prótese, aliada às expectativas e necessidades de cada paciente. Por este motivo, a escolha da prótese só será possível após uma avaliação completa e minuciosa da equipe da clínica. Entre em contato conosco para agendar uma avaliação gratuita.","closed":true}]');
;// CONCATENATED MODULE: ./src/components/Landing-Page/Section/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const Section = ()=>{
    const { 0: accordions , 1: setAccordions  } = (0,external_react_.useState)(accordions_namespaceObject);
    const openAccordion = (e)=>{
        document.querySelectorAll(".accordion.shadwo .item").forEach((accordion)=>accordion.classList.remove("active")
        );
        let item = e.target.closest(".item");
        item.classList.add("active");
        let newAccordions = accordions.map((accordion, idx)=>{
            if (item.id.split("-")[1] == idx) accordion.closed = false;
            else accordion.closed = true;
            return accordion;
        });
        setAccordions(newAccordions);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section-padding position-re",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 valign pb-60",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content md-mb50",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "Perguntas Frequentes"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "mb-20 fz-38 fw-700",
                                        children: "Principais D\xfavidas e Respostas para voc\xea que precisa de uma Pr\xf3tese."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Morbi sagittis hendrt nulla simply dummy text of the printing and typesetting has been the industry\u2019s en diam ips elementum pretium hendrerit ultricies."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex mt-50",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item flex full-width",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon-flex mr-20",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "100%"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont-flex valign",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                "Feedbacks",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                "Positivo"
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://davinciclinic.com.br",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "butn butn-md blue-bg text-light radius-30 mt-40",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text slide-up",
                                                    children: "Saiba Mais"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text slide-down",
                                                    children: "Saiba Mais"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 wow slideInUp",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img wow",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "img/davinci/p.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "accordion bord mt-50",
                                    children: accordions.map((accordion, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `item ${idx == 1 ? "active" : ""}`,
                                            id: `accordion-${idx}`,
                                            onClick: openAccordion,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "title ",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "fz-16",
                                                                children: accordion.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "ico"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_slidedown_.SlideDown, {
                                                        className: "accordion-info active",
                                                        closed: accordion.closed,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: accordion.details
                                                        })
                                                    })
                                                ]
                                            })
                                        }, idx)
                                    )
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shape-out left huge-shape opacity-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "svg-color",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 288 288",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        width: "100%",
                        id: "blobSvg2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                    id: "gradient2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                            offset: "1000%",
                                            style: {
                                                stopColor: "#efebfd"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                            offset: "0%",
                                            style: {
                                                stopColor: "transparent"
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "url(#gradient2)",
                                d: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("animate", {
                                    repeatCount: "indefinite",
                                    attributeName: "d",
                                    dur: "20s",
                                    values: "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Landing_Page_Section = (Section);


/***/ }),

/***/ 1800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Landing_Page_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/business/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"icon":"fas fa-heart","title":"Atendimento Humanizado","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":2,"icon":"fa-users","title":"Equipe Preparada","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":3,"icon":"fa-hand-holding-heart","title":"Suporte Dedicado","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":4,"icon":"fa-headset","title":"Mentoria com Pedro Pimenta","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":5,"icon":"fa-fire","title":"Próteses Moderna","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":6,"icon":"fa-handshake","title":"Próteses Feitas à Mão","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]}]');
;// CONCATENATED MODULE: ./src/components/Landing-Page/Services/index.jsx


const Services = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "services section-padding pt-90",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "round-head text-center mb-40",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "fw-700",
                                children: "Por que a Da Vinci?"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-10 row margin-rl-auto",
                    children: services_namespaceObject.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 pb-15",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item shadw bord text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "icon fz-50 mb-15 rest",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `gr-sunrise-text fas ${service.icon} i-span`
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-15 margin-rl-25",
                                        children: service.title
                                    })
                                ]
                            })
                        }, service.id)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Landing_Page_Services = (Services);


/***/ }),

/***/ 3446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Landing_Page_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/business/team.json
const team_namespaceObject = JSON.parse('[{"picture":"img/davinci/pedro-pimenta.png","name":"Pedro Pimenta","position":"Co-Fundador e Diretor Executivo","about":"Lorem Ipsum"},{"picture":"img/davinci/jairo.png","name":"Jairo Bluementhal","position":"Co-fundador e Diretor Clínico Ortesista e Protesista","about":"Primeiro Brasileiro graduado em O&P nos Estados Unidos. Ministrou cursos e palestras em mais de 30 países, sendo membro atuante da Academia Americana de Protesistas e Ortesistas (AAOP) e da International Society for Prosthetics and Orthotics (ISPO)."},{"picture":"img/davinci/monica.png","name":"Mônica Yamaoka","position":"Fisioterapeuta","about":"Fisioterapeuta formada pela PUCCAMP, especializada na reabilitação de amputados de MMII (membros inferiores). Palestrou em várias Universidades, tais como UNICID, UNIFESP, UNASP e em Congressos da SBOT – Salvador. Palestra na Reabilitar na Santa Casa de São Paulo."},{"picture":"img/davinci/leandro.png","name":"Leandro Silva","position":"Diretor Técnico","about":"Considerado um dos mais experientes protesistas do Brasil. São 26 anos de experiência com certificação pela Abotec (Associação Brasileira de Ortopedia Técnica), Touch Bionics em membros superiores, Ossur em encaixes Direct Socket TT, TF e Saddle Casting."}]');
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
;// CONCATENATED MODULE: ./src/components/Video/index.jsx





const Video = ()=>{
    const { 0: isOpen , 1: setOpen  } = useState(false);
    useEffect(()=>{
        new parallaxie(".video-wrapper.bg-img.parallaxie");
    }, []);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ _jsxs("section", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "video-wrapper section-padding bg-img parallaxie valign",
                    "data-background": "img/davinci/equipe1.jpg",
                    "data-overlay-dark": "4",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "full-width text-center",
                        children: /*#__PURE__*/ _jsx("a", {
                            className: "vid",
                            href: "https://youtu.be/hq8-I0N5BM4",
                            onClick: openVideo,
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "vid-butn",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "icon",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "fas fa-play"
                                    })
                                })
                            })
                        })
                    })
                })
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const components_Video = ((/* unused pure expression or super */ null && (Video)));

;// CONCATENATED MODULE: ./src/components/Landing-Page/Team/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const Team = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "team-shape section-padding",
        "data-scroll-index": "1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 col-md-10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-head text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fz-12 ls2 text-u gr-orange-text",
                                            children: "Quem Somos"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Experi\xeancia Conta"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "fz-24",
                                        children: 'O "Dream Team" Brasileiro'
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "fz-16",
                                        children: "Na Da vinci Clinic, contamos com o mais especializado corpo cl\xednico da Am\xe9rica do Sul"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "fz-16",
                                        children: "Nossos profissionais t\xeam d\xe9cadas de experi\xeancia com reabilita\xe7\xe3o de amputados, utilizando das t\xe9cnicas mais avan\xe7adas somadas \xe0 o que h\xe1 de mais tecnol\xf3gico no mercado"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sec-head",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "s-title valign justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://youtu.be/hq8-I0N5BM4",
                                onClick: openVideo,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Conhe\xe7a a equipe Da Vinci Clinic"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                color: "black"
                                            },
                                            className: "icon pe-7s-angle-right"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row col-lg-10 col-md-12 pt-60 justify-content-center margin-rl-auto",
                        children: team_namespaceObject.map((member, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item md-mb50",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: member.picture,
                                                className: "primery-shadow",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "cont text-dark",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "fz-14 opacity-8 text-dark",
                                                        children: member.about
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "shape blue-light-bg"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-30 mb-30 text-dark text-center bg-gray ",
                                                style: {
                                                    minHeight: "16vh"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-500 mb-10 text-black blue-bg in",
                                                        style: {
                                                            padding: "5px 10px"
                                                        },
                                                        children: member.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "fz-16 pt-10",
                                                        children: member.position
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, index)
                        )
                    })
                ]
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const Landing_Page_Team = (Team);


/***/ }),

/***/ 1631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _common_parallaxie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8963);
/* harmony import */ var _data_business_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ 






swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Controller
]);
const Testimonials = ({ curve  })=>{
    const galleryTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const navigationPrevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationNextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        new _common_parallaxie__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(".testimonials.bg-img.parallaxie");
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "testimonials slider-thumbs section-padding pb-60 bg-img parallaxie",
            "data-background": "img/davinci/d4.png",
            "data-overlay-dark": "6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "round-head text-center mb-50",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "ls2 text-u fz-13 fw-600 mb-20 gr-green-text rest",
                                            children: "Feedbacks"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "fw-700",
                                            children: "Recome\xe7os"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-8 col-md-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                        className: "swiper-container gallery-top",
                                        speed: 350,
                                        spaceBetween: 10,
                                        loop: true,
                                        loopedSlides: 4,
                                        navigation: {
                                            prevEl: navigationPrevRef.current,
                                            nextEl: navigationNextRef.current
                                        },
                                        onBeforeInit: (swiper)=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                        },
                                        onSwiper: (swiper)=>{
                                            galleryTop.current = swiper;
                                            setTimeout(()=>{
                                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                                swiper.navigation.destroy();
                                                swiper.navigation.init();
                                                swiper.navigation.update();
                                            });
                                        },
                                        children: _data_business_testimonials_json__WEBPACK_IMPORTED_MODULE_4__/* .galleryTop.map */ .l.map((slide, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "fz-20",
                                                                children: slide.content
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info mt-30",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "mb-5 text-u ls2 fw-700",
                                                                    children: slide.author.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: slide.author.position
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, idx)
                                        )
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "controls-rf",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "swiper-button-next ctrl-circle",
                                        ref: navigationNextRef,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "icon pe-7s-angle-right"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "swiper-button-prev ctrl-circle",
                                        ref: navigationPrevRef,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "icon pe-7s-angle-left"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                curve ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "curve-top",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        preserveAspectRatio: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1920",
                        height: "217",
                        viewBox: "0 0 1920 217",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            fillRule: "evenodd",
                            transform: "matrix(-1 0 0 1 1920 0)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z",
                                    opacity: ".3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z",
                                    opacity: ".6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"
                                })
                            ]
                        })
                    })
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "curve-buttom",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        preserveAspectRatio: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1920",
                        height: "217",
                        viewBox: "0 0 1920 217",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            fillRule: "evenodd",
                            transform: "matrix(-1 0 0 1 1920 0)",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,57.46875 C203.364583,135.217754 494.835938,156.564108 874.414062,121.507813 C1192.61198,-13.9827666 1541.14063,-35.3291208 1920,57.46875 L1920,207 L0,207 L0,57.46875 Z",
                                    opacity: ".3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,79 C292.46875,165.453125 612.46875,165.453125 960,79 C1307.53125,-7.453125 1627.53125,-7.453125 1920,79 L1920,207 L0,207 L0,79 Z",
                                    opacity: ".6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M0,89 C288.713542,146.786458 608.713542,146.786458 960,89 C1311.28646,31.2135417 1631.28646,31.2135417 1920,89 L1920,217 L0,217 L0,89 Z"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3138);
/* harmony import */ var _components_Landing_Page_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _components_Landing_Page_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1800);
/* harmony import */ var _components_Landing_Page_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3446);
/* harmony import */ var _components_Landing_Page_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8367);
/* harmony import */ var _components_Landing_Page_Portfolio1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2960);
/* harmony import */ var _components_Landing_Page_Pricing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5728);
/* harmony import */ var _components_Landing_Page_Testimonials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1631);
/* harmony import */ var _components_Landing_Page_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5814);
/* harmony import */ var _components_Landing_Page_Section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2739);
/* harmony import */ var _components_Landing_Page_Info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97);
/* harmony import */ var _components_Landing_Page_Login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2798);
/* harmony import */ var _components_Landing_Page_ExpiratePage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3298);
/* harmony import */ var _components_Footers_MainFooter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Landing_Page_Portfolio__WEBPACK_IMPORTED_MODULE_7__, _components_Landing_Page_Testimonials__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Landing_Page_Portfolio__WEBPACK_IMPORTED_MODULE_7__, _components_Landing_Page_Testimonials__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-css-tags */ // eslint-disable-next-line react/no-children-prop


//= Layout

//= Components













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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_main_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                type: "landing-preview",
                links: nav_links,
                navTheme: "light",
                children: acess ? status || acessType == "admin" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            bugets: bugets
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                            className: "position-re",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Team__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Portfolio1__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Portfolio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    bugets: bugets,
                                    products: products,
                                    categories: categories
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_About__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    products: products,
                                    categories: categories
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Section__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Testimonials__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    curve: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Info__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Pricing__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    bugets: bugets,
                                    customers: customers,
                                    products: products
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footers_MainFooter__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    footerClass: "main-footer bg-dark-blue bg-img",
                                    footerBg: true,
                                    business: true,
                                    creative: undefined
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_ExpiratePage__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing_Page_Login__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    handleAcess: handleAcess,
                    handleTypeAcess: handleTypeAcess,
                    bugetsPassword: bugets?.password_access_code
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3482:
/***/ ((module) => {

module.exports = JSON.parse('{"g":2,"f":"No primeiro ano de vida a Da Vinci Clinic já reabilitou mais de 100 pacientes! E você tambem pode ser um deles..."}');

/***/ }),

/***/ 2702:
/***/ ((module) => {

module.exports = JSON.parse('{"l":[{"content":"A Monica foi uma das pessoas mais importantes na minha reabilitação. Foi me visitar ainda no hospital e já me passou exercícios. Ela me escuta quando digo que algo na prótese não está boa e não desiste até ficar bom. Foi essencial no apoio à minha mãe também que ficou muito abalada na época. Ela une os pacientes compartilhando experiências e aprendizados. Excelente profissional.","author":{"name":"Deise Nishimura","position":"Paciente"}},{"content":"Me chamo Cleverson e sou amputado há 4 anos, durante o período de reabilitação aprendi que este é o momento mais importante de todo processo de voltar a caminhar, é através da fisioterapia que conseguirmos chegar ao sucesso, através da Mônica e toda sua enorme experiência não só na fisio mas com pessoas fez toda diferença, pois por trás de todos processo dever existir um ser humano cuidando de outro ser humano e isso é o que Mônica fez por mim, me ajudou a ter de volta a vida com qualidade.","author":{"name":"Cleverson Fidélis","position":"Paciente"}}]}');

/***/ })

};
;