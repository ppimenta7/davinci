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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contentProducts\": function() { return /* binding */ contentProducts; },\n/* harmony export */   \"nada\": function() { return /* binding */ nada; },\n/* harmony export */   \"totalValueBugets\": function() { return /* binding */ totalValueBugets; }\n/* harmony export */ });\nvar totalValueBugets = function(value) {\n    var totalValueBugets1 = [\n        {\n            border: [\n                false,\n                false,\n                true,\n                false\n            ],\n            text: \"\"\n        },\n        {\n            text: \"Total c/ Desconto\",\n            alignment: \"right\",\n            margin: [\n                10,\n                5,\n                10,\n                5\n            ]\n        },\n        {\n            text: \"\".concat(value),\n            bold: true,\n            margin: [\n                10,\n                5,\n                10,\n                5\n            ]\n        }, \n    ];\n    return totalValueBugets1;\n};\nvar nada = [\n    {\n        colSpan: 3,\n        text: \"\",\n        border: [\n            false,\n            false,\n            false,\n            false\n        ]\n    }, \n];\nvar contentProducts = function(products, bugets) {\n    var contentProducts1 = [];\n    products === null || products === void 0 ? void 0 : products.map(function(prod, idx) {\n        var htmlToText = (__webpack_require__(/*! html-to-text */ \"./node_modules/html-to-text/index.js\").htmlToText);\n        var comment = htmlToText(prod.technical_details, {\n            wordwrap: 130\n        });\n        bla.push([\n            {\n                text: +idx,\n                alignment: \"center\",\n                margin: [\n                    5,\n                    5\n                ]\n            },\n            {\n                text: [\n                    {\n                        text: prod.name,\n                        bold: true\n                    },\n                    \": \",\n                    {\n                        text: prod === null || prod === void 0 ? void 0 : prod.description\n                    }\n                ],\n                margin: [\n                    5,\n                    5\n                ]\n            },\n            {\n                text: \"\",\n                alignment: \"center\",\n                margin: [\n                    5,\n                    5\n                ]\n            }, \n        ]);\n    });\n    (bugets === null || bugets === void 0 ? void 0 : bugets.comments_report) != \"\" ? bla.push([\n        {\n            border: [\n                false,\n                false,\n                false,\n                false\n            ],\n            text: \"\"\n        },\n        {\n            text: [\n                {\n                    text: \"Coment\\xe1rio/Laudo: \",\n                    bold: true\n                },\n                bugets === null || bugets === void 0 ? void 0 : bugets.comments_report, \n            ],\n            alignment: \"center\",\n            margin: [\n                5,\n                5\n            ]\n        },\n        {\n            text: \"\",\n            alignment: \"center\",\n            margin: [\n                5,\n                5\n            ]\n        }, \n    ]) : null;\n    return contentProducts1;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF2QkEsS0FBQUEsQ0FBdUIsR0FBdkJBLE1BQU0sQ0FBRWEsZUFBZTthQUN4QjtZQUFFcEIsU0FBUyxFQUFFLFFBQVE7WUFBRUMsTUFBTSxFQUFFO0FBQUMsaUJBQUM7QUFBRSxpQkFBQzthQUFDO1NBQ3ZDO1FBQ0Q7WUFBRUYsSUFBSSxFQUFFLEVBQUU7WUFBRUMsU0FBUyxFQUFFLFFBQVE7WUFBRUMsTUFBTSxFQUFFO0FBQUMsaUJBQUM7QUFBRSxpQkFBQzthQUFDO1NBQUU7S0FDbEQsQ0FBRSxHQUFJLElBQUksQ0FBQztJQUViLE9BQU9JLGdCQUFlLENBQUM7Q0FDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvcGRmLWNvbnRlbnQuanM/Njk2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG90YWxWYWx1ZUJ1Z2V0cyA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHRvdGFsVmFsdWVCdWdldHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGJvcmRlcjogW2ZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2VdLFxyXG4gICAgICB0ZXh0OiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJUb3RhbCBjLyBEZXNjb250b1wiLFxyXG4gICAgICBhbGlnbm1lbnQ6IFwicmlnaHRcIixcclxuICAgICAgbWFyZ2luOiBbMTAsIDUsIDEwLCA1XSxcclxuICAgIH0sXHJcbiAgICB7IHRleHQ6IGAke3ZhbHVlfWAsIGJvbGQ6IHRydWUsIG1hcmdpbjogWzEwLCA1LCAxMCwgNV0gfSxcclxuICBdO1xyXG4gICByZXR1cm4gdG90YWxWYWx1ZUJ1Z2V0cztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5hZGEgPSBbXHJcbiAge1xyXG4gICAgY29sU3BhbjogMyxcclxuICAgIHRleHQ6ICcnLFxyXG4gICAgYm9yZGVyOiBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29udGVudFByb2R1Y3RzID0gKHByb2R1Y3RzLCBidWdldHMpID0+IHtcclxuICBjb25zdCBjb250ZW50UHJvZHVjdHMgPSBbXTtcclxuICAgIHByb2R1Y3RzPy5tYXAoKHByb2QsIGlkeCkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgeyBodG1sVG9UZXh0IH0gPSByZXF1aXJlKCdodG1sLXRvLXRleHQnKTtcclxuICAgICAgY29uc3QgY29tbWVudCA9IGh0bWxUb1RleHQocHJvZC50ZWNobmljYWxfZGV0YWlscywge1xyXG4gICAgICAgIHdvcmR3cmFwOiAxMzBcclxuICAgIH0pO1xyXG4gICAgICBibGEucHVzaChbXHJcbiAgICAgICAgeyB0ZXh0OiAraWR4LCBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsIG1hcmdpbjogWzUsIDVdIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogW1xyXG4gICAgICAgICAgICB7IHRleHQ6IHByb2QubmFtZSwgYm9sZDogdHJ1ZSB9LFwiOiBcIixcclxuICAgICAgICAgICAgeyB0ZXh0OiBwcm9kPy5kZXNjcmlwdGlvbn0sXHJcbiAgICAgICAgICAgIC8vIHsgdGV4dDogY29tbWVudH1cclxuICAgICAgICAgIF0sIG1hcmdpbjogWzUsIDVdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgeyB0ZXh0OiAnJywgYWxpZ25tZW50OiBcImNlbnRlclwiLCBtYXJnaW46IFs1LCA1XSB9LFxyXG4gICAgICBdLClcclxuICAgIH0pO1xyXG5cclxuICAgIGJ1Z2V0cz8uY29tbWVudHNfcmVwb3J0ICE9IFwiXCIgPyAoXHJcbiAgICBibGEucHVzaChbXHJcbiAgICAgIHtib3JkZXI6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sIHRleHQ6IFwiXCIsfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJDb21lbnTDoXJpby9MYXVkbzogXCIsIGJvbGQ6IHRydWUgfSxcclxuICAgICAgICAgIGJ1Z2V0cz8uY29tbWVudHNfcmVwb3J0LFxyXG4gICAgICAgIF0sIGFsaWdubWVudDogXCJjZW50ZXJcIiwgbWFyZ2luOiBbNSwgNV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGV4dDogJycsIGFsaWdubWVudDogXCJjZW50ZXJcIiwgbWFyZ2luOiBbNSwgNV0gfSxcclxuICAgIF0sKSkgOiBudWxsO1xyXG5cclxuICAgcmV0dXJuIGNvbnRlbnRQcm9kdWN0cztcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInRvdGFsVmFsdWVCdWdldHMiLCJ2YWx1ZSIsImJvcmRlciIsInRleHQiLCJhbGlnbm1lbnQiLCJtYXJnaW4iLCJib2xkIiwibmFkYSIsImNvbFNwYW4iLCJjb250ZW50UHJvZHVjdHMiLCJwcm9kdWN0cyIsImJ1Z2V0cyIsIm1hcCIsInByb2QiLCJpZHgiLCJodG1sVG9UZXh0IiwicmVxdWlyZSIsImNvbW1lbnQiLCJ0ZWNobmljYWxfZGV0YWlscyIsIndvcmR3cmFwIiwiYmxhIiwicHVzaCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNvbW1lbnRzX3JlcG9ydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/pdf-content.js\n");

/***/ })

});