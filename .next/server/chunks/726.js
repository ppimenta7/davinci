"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 7726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5158);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3138);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5989);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7788);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);

/* eslint-disable @next/next/no-css-tags */ 





function Pdf({ products , categories , bugets , customers  }) {
    /*
  function gerarPDF(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle= [
      {
        text: 'Teste',
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45]
      }
    ]
    const details = []
    const rodape = []
    const docDefinitions = {
      pageSize: 'A4',
      pageMargins: [15,50,15,40],
      header: [reportTitle],
    }
    pdfMake.createPdf(docDefinitions).open();
  }*/ (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        function gerarPDF() {
            const doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())("p", "pt", "a4");
            doc.html(document.querySelector("#teste"), {
                callback: function(pdf) {
                    // pdf.save("output.pdf");
                    // pdf.output("dataurlnewwindow");
                    var string = pdf.output("datauristring");
                    var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
                    var x = window.open();
                    x.document.open();
                    window.close();
                    x.document.write(iframe);
                    x.document.close();
                }
            });
        }
        document.body.classList.add("pdf");
        window.addEventListener("load", gerarPDF);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/style.css"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        id: "teste",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Teste"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor reiciendis quaerat odio quae ducimus vitae recusandae soluta? Facilis aliquid aperiam asperiores id assumenda labore explicabo fugit accusantium doloremque tempore."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                    "teste"
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pdf);


/***/ })

};
;