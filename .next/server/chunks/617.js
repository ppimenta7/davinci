"use strict";
exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 2496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__);

/* eslint-disable @next/next/no-img-element */ 




function MyVerticallyCenteredModal(props, { products  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
        ...props,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Header), {
                closeButton: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Title), {
                    id: "contained-modal-title-vcenter",
                    children: "Detalhes T\xe9cnicos"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Body), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Centered Modal"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Footer), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: props.onHide,
                    children: "Close"
                })
            })
        ]
    });
}
const About = ({ products , categories  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: modalShow , 1: setModalShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-scroll-index": "3",
        children: products?.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "section-padding pt-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6 valign",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "intro-two-img full-width md-mb50",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "img1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "svg-color",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        x: "0px",
                                                        y: "0px",
                                                        viewBox: "0 0 288 288",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                        width: "100%",
                                                        id: "blobSvg1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                                                    id: "gradient1",
                                                                    x1: "0%",
                                                                    y1: "0%",
                                                                    x2: "0%",
                                                                    y2: "100%",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                                            offset: "1000%",
                                                                            style: {
                                                                                stopColor: "#a5baca"
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                                            offset: "0%",
                                                                            style: {
                                                                                stopColor: "#a5baca"
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fill: "url(#gradient1)",
                                                                id: "blob1",
                                                                d: "",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
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
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "img2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: product.image,
                                                        alt: ""
                                                    }),
                                                    product.link_video ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "play-button",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: product.link_video,
                                                            className: "btn vid",
                                                            onClick: openVideo,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "100px",
                                                                    height: "100px",
                                                                    viewBox: "0 0 100 100",
                                                                    preserveAspectRatio: "none",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                        className: "circle",
                                                                        cx: "50",
                                                                        cy: "50",
                                                                        r: "48",
                                                                        stroke: "white",
                                                                        strokeWidth: "2",
                                                                        fill: "none"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6 valign",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content pl-50",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "mb-20 fw-800",
                                                children: [
                                                    product.nome,
                                                    ".",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: product.description
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "butn butn-md butn-orange-light text-u fw-700 radius-30 mt-30",
                                                onClick: ()=>setModalShow(true)
                                                ,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text slide-up fz-15",
                                                        children: "Ver Mais"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyVerticallyCenteredModal, {
                        show: modalShow,
                        onHide: ()=>setModalShow(false)
                    })
                ]
            }, product.id)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 7758:
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
                    "data-background": "img/davinci/d3.png",
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
                                                            src: "img/davinci/d7.png",
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
                                                className: "orange-color text-u fz-40 pt-40",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "fw-300 ",
                                                        children: "Or\xe7amento para"
                                                    }),
                                                    title
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
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

/***/ 3150:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/portfolio/classic/four-columns.json
const four_columns_namespaceObject = {};
// EXTERNAL MODULE: ./src/data/main/portfolio3.json
var portfolio3 = __webpack_require__(8763);
;// CONCATENATED MODULE: ./src/components/Business/OurServices/index.jsx






const OurServices = ()=>{
    useEffect(()=>{
        //= Init Isotope
        setTimeout(()=>{
            initIsotope();
        }, 500);
    }, []);
    return /*#__PURE__*/ _jsx("section", {
        className: "portfolio section-padding sub-bg",
        "data-scroll-index": "1",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-lg-6 col-md-9",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "section-head text-center",
                            children: [
                                /*#__PURE__*/ _jsx("h6", {
                                    className: "sub-head radius mb-20",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "fz-12 ls2 text-u gr-orange-text",
                                        children: "Quem Somos"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("h2", {
                                    children: 'O "Dream Team" Brasileiro'
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "fz-16",
                                    children: "Na Da vinci Clinic, contamos com o mais especializado corpo cl\xednico da Am\xe9rica do Sul"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "fz-16",
                                    children: "Nossos profissionais t\xeam d\xe9cadas de experi\xeancia com reabilita\xe7\xe3o de amputados, utilizando das t\xe9cnicas mais avan\xe7adas somadas \xe0 o que h\xe1 de mais tecnol\xf3gico no mercado"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "wild-padding",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "gallery col-12 rest",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "row justify-content-center",
                            children: data.gallery.map((item, index)=>/*#__PURE__*/ _jsxs("div", {
                                    className: `col-lg-3 col-md-6 items md-getter wow fadeInUp`,
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/project-details",
                                                children: /*#__PURE__*/ _jsxs("a", {
                                                    className: "imago wow primery-shadow",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("img", {
                                                            src: item.image,
                                                            alt: "image"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            className: "cont text-light",
                                                            children: [
                                                                /*#__PURE__*/ _jsx("h6", {
                                                                    className: "fz-14 fw-700 text-u ls1 mb-5",
                                                                    children: "teste teste"
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    className: "fz-14 opacity-8",
                                                                    children: "teste"
                                                                }),
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "shape gr-sunrise-bg"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "cont mt-30 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsx("h6", {
                                                    className: "fw-500",
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "hover fz-16",
                                                    children: item.type
                                                })
                                            ]
                                        })
                                    ]
                                }, index)
                            )
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Business_OurServices = ((/* unused pure expression or super */ null && (OurServices)));


/***/ }),

/***/ 6048:
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


const Portfolio = ({ products , categories  })=>{
    {
        products?.map((product)=>console.log(product.nome)
        );
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "work-carsouel crv section-padding pb-30 bg-dark-gray bg-color",
        "data-scroll-index": "2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "round-head text-center mb-40",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                className: "ls2 text-u fz-12 mb-15 gr-orange-text",
                                children: [
                                    "Produtos",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
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
                                                    "Create your own",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "fw-300",
                                                        children: "unique website"
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: `lg-text feat-exp gr-green-text fw-700 line-height-1`,
                                                        children: _data_business_features_json__WEBPACK_IMPORTED_MODULE_3__/* .years */ .gQ
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "valign ml-20",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                            className: "text-u ls4 fz-14 line-height-28",
                                                            children: [
                                                                "years ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                " in the field"
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
                                                children: _data_business_features_json__WEBPACK_IMPORTED_MODULE_3__/* .text */ .fL
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3510:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_main_portfolio3_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 


const Portfolio = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: "portfolio-simp-crus section-padding pb-0",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "row mb-100",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "simple-head md-mb10",
                                children: [
                                    /*#__PURE__*/ _jsx("h6", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ _jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "Portfolio"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: "fz-40 fw-700",
                                        children: "Case Studies"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ _jsx("p", {
                                    children: "The most widely sought for agency in branding nowadays we design brand, digital experience that engage the right customers."
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "work-crus",
                            children: [
                                /*#__PURE__*/ _jsx(Swiper, {
                                    spaceBetween: 50,
                                    slidesPerView: 3,
                                    loop: true,
                                    speed: 1000,
                                    id: "content-carousel-container-unq-3",
                                    className: "swiper-container",
                                    breakpoints: {
                                        0: {
                                            slidesPerView: 1
                                        },
                                        640: {
                                            slidesPerView: 2
                                        },
                                        1024: {
                                            slidesPerView: 3
                                        }
                                    },
                                    children: portfolios.map((slide, idx)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                                            children: /*#__PURE__*/ _jsxs("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ _jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ _jsx("img", {
                                                            src: slide.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ _jsxs("div", {
                                                        className: "info mt-20 text-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("h6", {
                                                                className: "fw-600",
                                                                children: /*#__PURE__*/ _jsx(Link, {
                                                                    href: "/project-details",
                                                                    children: /*#__PURE__*/ _jsx("a", {
                                                                        children: slide.title
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "tag",
                                                                children: /*#__PURE__*/ _jsx("a", {
                                                                    href: "#0",
                                                                    children: slide.type
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, idx)
                                    )
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "swiper-pagination"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Portfolio)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Pricing = ({ bugets  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "price section-padding gr-orange-bg-gr",
        "data-scroll-index": "4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "price-table",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center primery-shadow col-md-8 col-lg-6 margin-rl-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `item md-mb50`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "round-head type",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                    className: "ls2 text-u fz-12 mb-30",
                                    children: [
                                        "Proposta ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "amount text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "full-width",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "R$"
                                        }),
                                        bugets?.value
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "offer ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: bugets?.comments_report
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "order text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#0",
                                    className: `butn butn-md butn-icon-anim text-light radius-30 dark-blue-bg `,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-anim-two fz-12 fw-500 text-u ls2",
                                                children: "Ver PDF da Proposta"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "icon anim-two fz-12 fas fa-long-arrow-alt-right ml-10"
                                            })
                                        ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pricing);


/***/ }),

/***/ 5535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Section2)
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
;// CONCATENATED MODULE: ./src/data/main/accordions.json
const accordions_namespaceObject = JSON.parse('[{"id":1,"title":"Quando receberei minha prótese definitiva?","details":"Na Da Vinci, através de nosso método Reabilitação 360, prezamos sempre pelo melhor resultado possível, onde o paciente possa readquirir sua mobilidade, independência e confiança. Partindo deste princípio, usamos quantos cartuchos de prova forem necessários, até que o paciente se sinta confortável e confiante neles. Este processo pode durar de uma a dez semanas.","closed":false},{"id":2,"title":"Quando poderei levar a prótese para casa?","details":"Em paralelo ao treino de marcha o paciente passará por um treinamento específico de uso e manuseio da prótese, como a colocação correta da mesma e o ajuste da interface liner-prótese através de meias,por exemplo. É aconselhável que o paciente passe em treinamento pelo menos por duas semanas consecutivas, principalmente para aqueles que residem fora da capital ou do estado de São Paulo. O coto de amputação também sofre mudanças de volume principalmente neste período. Na Da Vinci, aceleramos ao máximo este processo através de nosso método Reabilitação 360, para que todos os ajustes necessários sejam feitos na prótese, assegurando uma adaptação mais rápida ao paciente.","closed":true},{"id":3,"title":"A prótese mais cara é a melhor?","details":"Não. Cada paciente tem uma particularidade (tamanho do coto, tipo de cirurgia realizada, presença ou não de espículas ósseas, neuromas, capacidade de descarga distal do coto, aderências, comorbidades) que influenciará na escolha de todos os componentes da prótese, aliada às expectativas e necessidades de cada paciente. Por este motivo, a escolha da prótese só será possível após uma avaliação completa e minuciosa da equipe da clínica. Entre em contato conosco para agendar uma avaliação gratuita.","closed":true}]');
;// CONCATENATED MODULE: ./src/components/Business/Section2/index.jsx






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
                            className: "col-lg-6 valign",
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
                                        children: "Start building stunning websites with us."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Morbi sagittis hendrt nulla simply dummy text of the printing and typesetting has been the industry\u2019s en diam ips elementum pretium hendrerit ultricies."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://davinciclinic.com.br",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "butn butn-md butn-gradient2 text-light radius-30 mt-40",
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
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "accordion shadwo",
                                    children: accordions.map((accordion, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `item ${idx == 1 ? "active" : ""} ${idx == accordion.length - 1 ? "mb-0" : ""}`,
                                            id: `accordion-${idx}`,
                                            onClick: openAccordion,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "title",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "fz-13 text-u ls2 fw-600",
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
/* harmony default export */ const Section2 = (Section);


/***/ }),

/***/ 8141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Business_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/corporate/team.json
const team_namespaceObject = JSON.parse('[{"picture":"img/davinci/pedro-pimenta.png","name":"Pedro Pimenta","position":"Co-Fundador e Diretor Executivo","about":"Lorem Ipsum"},{"picture":"img/davinci/jairo.png","name":"Jairo Bluementhal","position":"Co-fundador e Diretor Clínico Ortesista e Protesista","about":"Primeiro Brasileiro graduado em O&P nos Estados Unidos. Ministrou cursos e palestras em mais de 30 países, sendo membro atuante da Academia Americana de Protesistas e Ortesistas (AAOP) e da International Society for Prosthetics and Orthotics (ISPO)."},{"picture":"img/davinci/monica.png","name":"Mônica Yamaoka","position":"Fisioterapeuta","about":"Fisioterapeuta formada pela PUCCAMP, especializada na reabilitação de amputados de MMII (membros inferiores). Palestrou em várias Universidades, tais como UNICID, UNIFESP, UNASP e em Congressos da SBOT – Salvador. Palestra na Reabilitar na Santa Casa de São Paulo."},{"picture":"img/davinci/leandro.png","name":"Leandro Silva","position":"Diretor Técnico","about":"Considerado um dos mais experientes protesistas do Brasil. São 26 anos de experiência com certificação pela Abotec (Associação Brasileira de Ortopedia Técnica), Touch Bionics em membros superiores, Ossur em encaixes Direct Socket TT, TF e Saddle Casting."}]');
;// CONCATENATED MODULE: ./src/components/Business/Team/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const Team = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "team-shape section-padding bg-gray",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "round-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "ls2 text-u fz-12 mb-15",
                                    children: [
                                        "Our Staff ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "fw-700",
                                    children: "Creative Minds"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: team_namespaceObject.map((member, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: member.picture,
                                            className: "primery-shadow",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont text-light",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "fz-14 fw-700 text-u ls1 mb-5",
                                                    children: member.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "fz-14 opacity-8",
                                                    children: member.position
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fz-14 opacity-8 text-light",
                                                    children: member.about
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "shape gr-sunrise-bg"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-30 mb-30 text-light text-center bg-gray ",
                                            stylle: {
                                                minHeight: "15vh"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "fw-500 text-black blue-bg in",
                                                    children: member.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fz-16",
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
        })
    });
};
/* harmony default export */ const Business_Team = (Team);


/***/ }),

/***/ 7776:
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
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
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1197:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable @next/next/no-img-element */ 
const Navbar = ({ navbarRef , theme , logoTheme  })=>{
    const dropdownHover = (e)=>{
        const dropdownItem = e.target.tagName === "SPAN" ? e.target.parentElement : e.target;
        const dropdownMenu = dropdownItem.querySelector(".dropdown-menu");
        if (dropdownMenu) dropdownMenu.classList.add("show");
    };
    const dropdownLeave = ()=>{
        const openedDropdown = document.querySelector(".navbar .dropdown-menu.show");
        if (openedDropdown) openedDropdown.classList.remove("show");
    };
    const sideDropdownHover = (e)=>{
        const dropdownItem = e.target.tagName === "SPAN" ? e.target.parentElement : e.target;
        const dropdownSide = dropdownItem.querySelector(".dropdown-side");
        if (dropdownSide) dropdownSide.classList.add("show");
    };
    const sideDropdownLeave = ()=>{
        const openedSideDropdown = document.querySelector(".navbar .dropdown-side.show");
        if (openedSideDropdown) openedSideDropdown.classList.remove("show");
    };
    return /*#__PURE__*/ _jsx("nav", {
        className: `navbar navbar-expand-lg ${theme}`,
        ref: navbarRef,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
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
                        /*#__PURE__*/ _jsxs("ul", {
                            className: "navbar-nav",
                            children: [
                                /*#__PURE__*/ _jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        children: "Produtos"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("li", {
                                    className: "nav-item dropdown mega-menu",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        children: "Detalhes"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("li", {
                                    className: "nav-item dropdown",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        children: "Proposta"
                                    })
                                })
                            ]
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

/***/ 617:
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
/* harmony import */ var _components_Navbars_MainNavbar_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1197);
/* harmony import */ var _components_Business_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7758);
/* harmony import */ var _components_Business_OurServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3150);
/* harmony import */ var _components_Business_Team__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8141);
/* harmony import */ var _components_Business_Portfolio1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6048);
/* harmony import */ var _components_Business_Portfolio3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3510);
/* harmony import */ var _components_Business_Pricing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2870);
/* harmony import */ var _components_Business_Testimonials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7776);
/* harmony import */ var _components_Footers_MainFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4794);
/* harmony import */ var _components_Business_About__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2496);
/* harmony import */ var _components_Business_Section2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Business_Portfolio1__WEBPACK_IMPORTED_MODULE_8__, _components_Business_Portfolio3__WEBPACK_IMPORTED_MODULE_9__, _components_Business_Testimonials__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Business_Portfolio1__WEBPACK_IMPORTED_MODULE_8__, _components_Business_Portfolio3__WEBPACK_IMPORTED_MODULE_9__, _components_Business_Testimonials__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-css-tags */ // eslint-disable-next-line react/no-children-prop


//= Layout


//= Components










const LandingPreview = ({ bugets , products , categories  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.classList.add("index-main");
        const removeClasses = [
            "index-bus1",
            "index-corporate",
            "index-restaurant",
            "index-arch",
            "index-freelancer",
            "cr-agency",
            "land-demo2",
            "mobile-app",
            "gr-orange-bg",
            "nft-market"
        ];
        document.body.classList.remove(...removeClasses);
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
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Davinci - Or\xe7amento Hotsite"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_main_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                type: "landing-preview",
                links: nav_links,
                navTheme: "light",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Business_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        bugets: bugets
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "position-re",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Business_Team__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Business_Portfolio1__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                products: products,
                                categories: categories
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Business_About__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                products: products,
                                categories: categories
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Business_Section2__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Business_Testimonials__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                curve: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Business_Pricing__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                bugets: bugets
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footers_MainFooter__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                footerClass: "main-footer bg-dark-blue bg-img",
                                footerBg: true,
                                business: true,
                                creative: undefined
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPreview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3482:
/***/ ((module) => {

module.exports = JSON.parse('{"gQ":25,"fL":"One may speculate that over the course of time certain letters were added or deleted at various positions within the text."}');

/***/ }),

/***/ 2702:
/***/ ((module) => {

module.exports = JSON.parse('{"l":[{"content":"A Monica foi uma das pessoas mais importantes na minha reabilitação. Foi me visitar ainda no hospital e já me passou exercícios. Ela me escuta quando digo que algo na prótese não está boa e não desiste até ficar bom. Foi essencial no apoio à minha mãe também que ficou muito abalada na época. Ela une os pacientes compartilhando experiências e aprendizados. Excelente profissional.","author":{"name":"Deise Nishimura","position":"Paciente"}},{"content":"Me chamo Cleverson e sou amputado há 4 anos, durante o período de reabilitação aprendi que este é o momento mais importante de todo processo de voltar a caminhar, é através da fisioterapia que conseguirmos chegar ao sucesso, através da Mônica e toda sua enorme experiência não só na fisio mas com pessoas fez toda diferença, pois por trás de todos processo dever existir um ser humano cuidando de outro ser humano e isso é o que Mônica fez por mim, me ajudou a ter de volta a vida com qualidade.","author":{"name":"Cleverson Fidélis","position":"Paciente"}}]}');

/***/ }),

/***/ 8763:
/***/ ((module) => {

module.exports = [];

/***/ })

};
;