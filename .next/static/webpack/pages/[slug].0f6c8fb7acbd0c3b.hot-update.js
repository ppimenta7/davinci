"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./src/components/Business/Login/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/Business/Login/index.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _this = undefined;\n\n/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\nvar Login = function(param) {\n    var bugetsPassword = param.bugetsPassword, handleAcess = param.handleAcess;\n    _s();\n    console.log(bugetsPassword);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref[0], setPassword = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), errMessage = ref1[0], setErrMessage = ref1[1];\n    var validatePassword = function(pass) {\n        if (pass == bugetsPassword | pass != \"admin123\") {\n            return true;\n        } else {\n            setErrMessage(\"Verifique que o c\\xf3digo de acesso est\\xe1 correto\");\n            return false;\n        }\n    };\n    var handleChange = function(e) {\n        setPassword(e.target.value);\n        console.log(_typeof(e.target.value));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(password == bugetsPassword);\n        if (!validatePassword(password)) return; //= Validate Form\n        setErrMessage(\"\"); //= Clear Error Message\n        handleAcess();\n    // document.forms[0].submit(); //= Sumbit The Form\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"contact-crv container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row col-12 justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"radius-20 col-md-10 col-lg-4 box-shadow to-up\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"contact-form\",\n                    method: \"post\",\n                    action: \"/bla\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"controls row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"line-head mb-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            style: {\n                                                width: \"180px\"\n                                            },\n                                            src: \"./img/davinci/logo.png\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 23\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"fz-20 fw-600\",\n                                            children: \"Insira seu c\\xf3digo de acesso!\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 23\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-12 md-mb30\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-group mb-30\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"form_name\",\n                                            type: \"text\",\n                                            name: \"password\",\n                                            placeholder: \"C\\xf3digo de Acesso\",\n                                            required: \"required\",\n                                            onChange: handleChange,\n                                            value: password\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 23\n                                        }, _this),\n                                        errMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"messages\",\n                                            children: errMessage\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 38\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center mt-10 \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"fz-12\",\n                                        type: \"submit\",\n                                        onClick: handleSubmit,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Acessar\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 23\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Business\\\\Login\\\\index.jsx\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, _this);\n};\n_s(Login, \"EHxUbY2bdw44g8Wtp3V57pGv8Bk=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXNpbmVzcy9Mb2dpbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTs7Ozs7O0FBSEEsc0NBQXNDLENBQ3RDLDhDQUE4QyxDQUViOztBQUVqQyxJQUFNQyxLQUFLLEdBQUcsZ0JBQXFDO1FBQWxDQyxjQUFjLFNBQWRBLGNBQWMsRUFBRUMsV0FBVyxTQUFYQSxXQUFXOztJQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILGNBQWMsQ0FBQztJQUMzQixJQUFnQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVA5QyxRQU9pQixHQUFpQkEsR0FBWSxHQUE3QixFQVBqQixXQU84QixHQUFJQSxHQUFZLEdBQWhCO0lBRTVCLElBQW9DQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBVHBELFVBU21CLEdBQW1CQSxJQUFjLEdBQWpDLEVBVG5CLGFBU2tDLEdBQUlBLElBQWMsR0FBbEI7SUFFaEMsSUFBTVUsZ0JBQWdCLEdBQUcsU0FBQ0MsSUFBSSxFQUFLO1FBQ2pDLElBQUdBLElBQUksSUFBSVQsY0FBYyxHQUFHUyxJQUFJLElBQUksVUFBVSxFQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ2IsTUFBSTtZQUNIRixhQUFhLENBQUMscURBQStDLENBQUcsQ0FBQztZQUMvRCxPQUFLLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxJQUFNRyxZQUFZLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQzFCTixXQUFXLENBQUNNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7UUFDM0JYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQXFCLENBQWRRLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEVBQUM7S0FDbkM7SUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0gsQ0FBQyxFQUFLO1FBQzFCQSxDQUFDLENBQUNJLGNBQWMsRUFBRSxDQUFDO1FBQ25CYixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxJQUFJSixjQUFjLENBQUM7UUFDdkMsSUFBSSxDQUFDUSxnQkFBZ0IsQ0FBQ0osUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtRQUUxREcsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBRTFDTixXQUFXLEVBQUU7SUFDYixrREFBa0Q7S0FDbkQ7SUFFRCxxQkFDSSw4REFBQ2UsU0FBTztRQUFDQyxTQUFTLEVBQUMsNkJBQTZCO2tCQUM5Qyw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsbUNBQW1DO3NCQUM5Qyw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLCtDQUErQzswQkFDNUQsNEVBQUNFLE1BQUk7b0JBQUNDLEVBQUUsRUFBQyxjQUFjO29CQUFDQyxNQUFNLEVBQUMsTUFBTTtvQkFBQ0MsTUFBTSxFQUFDLE1BQU07OEJBQ2pELDRFQUFDSixLQUFHO3dCQUFDRCxTQUFTLEVBQUMsY0FBYzs7MENBQzNCLDhEQUFDQyxLQUFHO2dDQUFDRCxTQUFTLEVBQUMsUUFBUTswQ0FDckIsNEVBQUNDLEtBQUc7b0NBQUNELFNBQVMsRUFBQyxpQkFBaUI7O3NEQUM5Qiw4REFBQ00sS0FBRzs0Q0FBQ0MsS0FBSyxFQUFFO2dEQUFDQyxLQUFLLEVBQUUsT0FBTzs2Q0FBQzs0Q0FBRUMsR0FBRyxFQUFDLHdCQUF3Qjs7Ozs7aURBQUc7c0RBQzdELDhEQUFDQyxJQUFFOzRDQUFDVixTQUFTLEVBQUMsY0FBYztzREFBQyxpQ0FFN0I7Ozs7O2lEQUFLOzs7Ozs7eUNBQ0Q7Ozs7O3FDQUNGOzBDQUVOLDhEQUFDQyxLQUFHO2dDQUFDRCxTQUFTLEVBQUMsbUJBQW1COzBDQUNoQyw0RUFBQ0MsS0FBRztvQ0FBQ0QsU0FBUyxFQUFDLGtCQUFrQjs7c0RBQy9CLDhEQUFDVyxPQUFLOzRDQUNKUixFQUFFLEVBQUMsV0FBVzs0Q0FDZFMsSUFBSSxFQUFDLE1BQU07NENBQ1hDLElBQUksRUFBQyxVQUFVOzRDQUNmQyxXQUFXLEVBQUMscUJBQWtCOzRDQUM5QkMsUUFBUSxFQUFDLFVBQVU7NENBQ25CQyxRQUFRLEVBQUV2QixZQUFZOzRDQUN0QkcsS0FBSyxFQUFFVCxRQUFROzs7OztpREFDZjt3Q0FDREUsVUFBVSxrQkFBSSw4REFBQ1ksS0FBRzs0Q0FBQ0QsU0FBUyxFQUFDLFVBQVU7c0RBQUVYLFVBQVU7Ozs7O2lEQUFPOzs7Ozs7eUNBQ3ZEOzs7OztxQ0FDRjswQ0FFTiw4REFBQ1ksS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLFFBQVE7MENBQ3JCLDRFQUFDQyxLQUFHO29DQUFDRCxTQUFTLEVBQUMsb0JBQW9COzhDQUNqQyw0RUFBQ2lCLFFBQU07d0NBQUNqQixTQUFTLEVBQUMsT0FBTzt3Q0FBQ1ksSUFBSSxFQUFDLFFBQVE7d0NBQUNNLE9BQU8sRUFBRXJCLFlBQVk7a0RBQzNELDRFQUFDc0IsTUFBSTtzREFBQyxTQUFPOzs7OztpREFBTzs7Ozs7NkNBQ2I7Ozs7O3lDQUNMOzs7OztxQ0FDRjs7Ozs7OzZCQUNGOzs7Ozt5QkFDRDs7Ozs7cUJBQ0g7Ozs7O2lCQUNKOzs7OzthQUNFLENBQ1o7Q0FDSDtHQTFFS3JDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTRFWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0J1c2luZXNzL0xvZ2luL2luZGV4LmpzeD9jOGFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FsdC10ZXh0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICh7IGJ1Z2V0c1Bhc3N3b3JkLCBoYW5kbGVBY2VzcyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coYnVnZXRzUGFzc3dvcmQpXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2Vyck1lc3NhZ2UsIHNldEVyck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAocGFzcykgPT4ge1xyXG4gICAgaWYocGFzcyA9PSBidWdldHNQYXNzd29yZCB8IHBhc3MgIT0gXCJhZG1pbjEyM1wiKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgc2V0RXJyTWVzc2FnZShcIlZlcmlmaXF1ZSBxdWUgbyBjw7NkaWdvIGRlIGFjZXNzbyBlc3TDoSBjb3JyZXRvXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGUudGFyZ2V0LnZhbHVlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXNzd29yZCA9PSBidWdldHNQYXNzd29yZClcclxuICAgIGlmICghdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpIHJldHVybjsgLy89IFZhbGlkYXRlIEZvcm1cclxuICAgIFxyXG4gICAgc2V0RXJyTWVzc2FnZShcIlwiKTsgLy89IENsZWFyIEVycm9yIE1lc3NhZ2VcclxuXHJcbiAgICBoYW5kbGVBY2VzcygpXHJcbiAgICAvLyBkb2N1bWVudC5mb3Jtc1swXS5zdWJtaXQoKTsgLy89IFN1bWJpdCBUaGUgRm9ybVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3QtY3J2IGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaXVzLTIwIGNvbC1tZC0xMCBjb2wtbGctNCBib3gtc2hhZG93IHRvLXVwXCI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJjb250YWN0LWZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiL2JsYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9scyByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtaGVhZCBtYi0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjE4MHB4XCJ9fSBzcmM9XCIuL2ltZy9kYXZpbmNpL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmei0yMCBmdy02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW5zaXJhIHNldSBjw7NkaWdvIGRlIGFjZXNzbyFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgbWQtbWIzMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm9ybV9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkPDs2RpZ28gZGUgQWNlc3NvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+e2Vyck1lc3NhZ2V9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnotMTJcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWNlc3Nhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxvZ2luIiwiYnVnZXRzUGFzc3dvcmQiLCJoYW5kbGVBY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyTWVzc2FnZSIsInNldEVyck1lc3NhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwicGFzcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJpZCIsIm1ldGhvZCIsImFjdGlvbiIsImltZyIsInN0eWxlIiwid2lkdGgiLCJzcmMiLCJoNSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Business/Login/index.jsx\n");

/***/ })

});