"use strict";
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 1800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Landing_Page_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/business/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"icon":"fas fa-heart","title":"Atendimento Humanizado","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":2,"icon":"fa-users","title":"Equipe Preparada","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":3,"icon":"fa-hand-holding-heart","title":"Suporte Dedicado","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":4,"icon":"fa-comments","title":"Mentoria com Pedro Pimenta","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":5,"icon":"fa-rocket","title":"Próteses Modernas","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]},{"id":6,"icon":"fa-fist-raised","title":"Próteses Feitas à Mão","detials":"No coding skills required to customize and create unique looks.","tags":["Hot","Wordpress"]}]');
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
                                className: "fw-700 text-white text-u",
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
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "icon fz-50 mb-15 rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `gr-sunrise-text fas ${service.icon} i-span`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-house"
                                            })
                                        ]
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


/***/ })

};
;