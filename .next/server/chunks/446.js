"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 3446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Landing_Page_Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/business/team.json
const team_namespaceObject = JSON.parse('[{"picture":"img/davinci/pedro-pimenta.png","name":"Pedro Pimenta","position":"Co-Fundador e Diretor Executivo","about":"Vítima de uma meningite meningocócica ao 18 anos, Pedro Pimenta teve partes dos braços e das pernas amputadas. Superou as expectativas dos médicos e criou a própria empresa, Centro de Excelência em reabilitação de pessoas com amputação."},{"picture":"img/davinci/jairo.png","name":"Jairo Bluementhal","position":"Co-fundador e Diretor Clínico Ortesista e Protesista","about":"Primeiro Brasileiro graduado em O&P nos Estados Unidos. Ministrou cursos e palestras em mais de 30 países, sendo membro atuante da Academia Americana de Protesistas e Ortesistas (AAOP) e da International Society for Prosthetics and Orthotics (ISPO)."},{"picture":"img/davinci/monica.png","name":"Mônica Yamaoka","position":"Fisioterapeuta","about":"Fisioterapeuta formada pela PUCCAMP, especializada na reabilitação de amputados de MMII (membros inferiores). Palestrou em várias Universidades, tais como UNICID, UNIFESP, UNASP e em Congressos da SBOT – Salvador. Palestra na Reabilitar na Santa Casa de São Paulo."},{"picture":"img/davinci/leandro.png","name":"Leandro Silva","position":"Diretor Técnico","about":"Considerado um dos mais experientes protesistas do Brasil. São 26 anos de experiência com certificação pela Abotec (Associação Brasileira de Ortopedia Técnica), Touch Bionics em membros superiores, Ossur em encaixes Direct Socket TT, TF e Saddle Casting."}]');
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
    const timeID1 = (member)=>{
        const nameMember = member.name.split(" ");
        const timeID = nameMember[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return timeID;
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
                                className: "card-team col-lg-3 col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        height: "100%"
                                    },
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
                                                        className: "shape"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-30 text-dark text-center bg-gray ",
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


/***/ })

};
;