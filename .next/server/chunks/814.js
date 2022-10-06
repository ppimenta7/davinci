"use strict";
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 5814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Landing_Page_About)
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
        children: products?.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
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


/***/ })

};
;