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

/***/ "./src/data/pdf-content.js":
/*!*********************************!*\
  !*** ./src/data/pdf-content.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nada\": function() { return /* binding */ nada; },\n/* harmony export */   \"produ\": function() { return /* binding */ produ; },\n/* harmony export */   \"totalValueBugets\": function() { return /* binding */ totalValueBugets; }\n/* harmony export */ });\nvar totalValueBugets = function(value) {\n    var totalValueBugets1 = [\n        {\n            border: [\n                false,\n                false,\n                true,\n                false\n            ],\n            text: \"\"\n        },\n        {\n            text: \"Total c/ Desconto\",\n            alignment: \"right\",\n            margin: [\n                10,\n                5,\n                10,\n                5\n            ]\n        },\n        {\n            text: \"\".concat(value),\n            bold: true,\n            margin: [\n                10,\n                5,\n                10,\n                5\n            ]\n        }, \n    ];\n    return totalValueBugets1;\n};\nvar nada = [\n    {\n        colSpan: 3,\n        text: \"\",\n        border: [\n            false,\n            false,\n            false,\n            false\n        ]\n    }, \n];\nvar produ = function(products, bugets) {\n    var bla = [];\n    products === null || products === void 0 ? void 0 : products.map(function(prod, idx) {\n        var htmlToText = (__webpack_require__(/*! html-to-text */ \"./node_modules/html-to-text/index.js\").htmlToText);\n        var comment = htmlToText(prod.technical_details, {\n            wordwrap: 130\n        });\n        bla.push([\n            {\n                text: +idx,\n                alignment: \"center\",\n                margin: [\n                    5,\n                    5\n                ]\n            },\n            {\n                text: [\n                    {\n                        text: prod.name,\n                        bold: true\n                    },\n                    \": \",\n                    {\n                        text: prod === null || prod === void 0 ? void 0 : prod.description\n                    }\n                ],\n                margin: [\n                    5,\n                    5\n                ]\n            },\n            {\n                text: \"\",\n                alignment: \"center\",\n                margin: [\n                    5,\n                    5\n                ]\n            }, \n        ]);\n    });\n    (bugets === null || bugets === void 0 ? void 0 : bugets.comments_report) != \"\" ? bla.push([\n        {\n            border: [\n                false,\n                false,\n                false,\n                false\n            ],\n            text: \"\"\n        },\n        {\n            text: [\n                {\n                    text: \"Coment\\xe1rio/Laudo: \",\n                    bold: true\n                },\n                bugets === null || bugets === void 0 ? void 0 : bugets.comments_report, \n            ],\n            alignment: \"center\",\n            margin: [\n                5,\n                5\n            ]\n        },\n        {\n            text: \"\",\n            alignment: \"center\",\n            margin: [\n                5,\n                5\n            ]\n        }, \n    ]) : null;\n    return bla;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkJBLEtBQUFBLENBQXVCLEdBQXZCQSxNQUFNLENBQUVhLGVBQWU7YUFDeEI7WUFBRXBCLFNBQVMsRUFBRSxRQUFRO1lBQUVDLE1BQU0sRUFBRTtBQUFDLGlCQUFDO0FBQUUsaUJBQUM7YUFBQztTQUN2QztRQUNEO1lBQUVGLElBQUksRUFBRSxFQUFFO1lBQUVDLFNBQVMsRUFBRSxRQUFRO1lBQUVDLE1BQU0sRUFBRTtBQUFDLGlCQUFDO0FBQUUsaUJBQUM7YUFBQztTQUFFO0tBQ2xELENBQUUsR0FBSSxJQUFJLENBQUM7SUFFYixPQUFPTyxHQUFHLENBQUM7Q0FDYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZGF0YS9wZGYtY29udGVudC5qcz82OTYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0b3RhbFZhbHVlQnVnZXRzID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgdG90YWxWYWx1ZUJ1Z2V0cyA9IFtcclxuICAgIHtcclxuICAgICAgYm9yZGVyOiBbZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZV0sXHJcbiAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlRvdGFsIGMvIERlc2NvbnRvXCIsXHJcbiAgICAgIGFsaWdubWVudDogXCJyaWdodFwiLFxyXG4gICAgICBtYXJnaW46IFsxMCwgNSwgMTAsIDVdLFxyXG4gICAgfSxcclxuICAgIHsgdGV4dDogYCR7dmFsdWV9YCwgYm9sZDogdHJ1ZSwgbWFyZ2luOiBbMTAsIDUsIDEwLCA1XSB9LFxyXG4gIF07XHJcbiAgIHJldHVybiB0b3RhbFZhbHVlQnVnZXRzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmFkYSA9IFtcclxuICB7XHJcbiAgICBjb2xTcGFuOiAzLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICBib3JkZXI6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV1cclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdSA9IChwcm9kdWN0cywgYnVnZXRzKSA9PiB7XHJcbiAgY29uc3QgYmxhID0gW107XHJcbiAgICBwcm9kdWN0cz8ubWFwKChwcm9kLCBpZHgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IHsgaHRtbFRvVGV4dCB9ID0gcmVxdWlyZSgnaHRtbC10by10ZXh0Jyk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBodG1sVG9UZXh0KHByb2QudGVjaG5pY2FsX2RldGFpbHMsIHtcclxuICAgICAgICB3b3Jkd3JhcDogMTMwXHJcbiAgICB9KTtcclxuICAgICAgYmxhLnB1c2goW1xyXG4gICAgICAgIHsgdGV4dDogK2lkeCwgYWxpZ25tZW50OiBcImNlbnRlclwiLCBtYXJnaW46IFs1LCA1XSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiBwcm9kLm5hbWUsIGJvbGQ6IHRydWUgfSxcIjogXCIsXHJcbiAgICAgICAgICAgIHsgdGV4dDogcHJvZD8uZGVzY3JpcHRpb259LFxyXG4gICAgICAgICAgICAvLyB7IHRleHQ6IGNvbW1lbnR9XHJcbiAgICAgICAgICBdLCBtYXJnaW46IFs1LCA1XSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHsgdGV4dDogJycsIGFsaWdubWVudDogXCJjZW50ZXJcIiwgbWFyZ2luOiBbNSwgNV0gfSxcclxuICAgICAgXSwpXHJcbiAgICB9KTtcclxuXHJcbiAgICBidWdldHM/LmNvbW1lbnRzX3JlcG9ydCAhPSBcIlwiID8gKFxyXG4gICAgYmxhLnB1c2goW1xyXG4gICAgICB7Ym9yZGVyOiBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLCB0ZXh0OiBcIlwiLH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQ29tZW50w6FyaW8vTGF1ZG86IFwiLCBib2xkOiB0cnVlIH0sXHJcbiAgICAgICAgICBidWdldHM/LmNvbW1lbnRzX3JlcG9ydCxcclxuICAgICAgICBdLCBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsIG1hcmdpbjogWzUsIDVdLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6ICcnLCBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsIG1hcmdpbjogWzUsIDVdIH0sXHJcbiAgICBdLCkpIDogbnVsbDtcclxuXHJcbiAgIHJldHVybiBibGE7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ0b3RhbFZhbHVlQnVnZXRzIiwidmFsdWUiLCJib3JkZXIiLCJ0ZXh0IiwiYWxpZ25tZW50IiwibWFyZ2luIiwiYm9sZCIsIm5hZGEiLCJjb2xTcGFuIiwicHJvZHUiLCJwcm9kdWN0cyIsImJ1Z2V0cyIsImJsYSIsIm1hcCIsInByb2QiLCJpZHgiLCJodG1sVG9UZXh0IiwicmVxdWlyZSIsImNvbW1lbnQiLCJ0ZWNobmljYWxfZGV0YWlscyIsIndvcmR3cmFwIiwicHVzaCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNvbW1lbnRzX3JlcG9ydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/pdf-content.js\n");

/***/ })

});