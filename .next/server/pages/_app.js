/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/common/scrollToTop.js":
/*!***********************************!*\
  !*** ./src/common/scrollToTop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollToTop = ()=>{\n    let offset = 150;\n    let progressWrap = document.querySelector(\".progress-wrap\");\n    let progressPath = document.querySelector(\".progress-wrap path\");\n    let pathLength = progressPath.getTotalLength();\n    const updateProgress = ()=>{\n        let scroll = window.pageYOffset;\n        let height = document.documentElement.scrollHeight - window.innerHeight;\n        let progress = pathLength - scroll * pathLength / height;\n        progressPath.style.strokeDashoffset = progress;\n    };\n    if (progressWrap) {\n        progressPath.style.transition = progressPath.style.WebkitTransition = \"none\";\n        progressPath.style.strokeDasharray = pathLength + \" \" + pathLength;\n        progressPath.style.strokeDashoffset = pathLength;\n        progressPath.getBoundingClientRect();\n        progressPath.style.transition = progressPath.style.WebkitTransition = \"stroke-dashoffset 10ms linear\";\n        updateProgress();\n        window.addEventListener(\"scroll\", updateProgress);\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > offset) {\n                progressWrap.classList.add(\"active-progress\");\n            } else {\n                document.querySelector(\".progress-wrap\").classList.remove(\"active-progress\");\n            }\n        });\n        progressWrap.addEventListener(\"click\", function(event) {\n            event.preventDefault();\n            window.scrollTo({\n                top: 0,\n                behavior: \"smooth\"\n            });\n            return false;\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3Njcm9sbFRvVG9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXLEdBQUcsSUFBTTtJQUN4QixJQUFJQyxNQUFNLEdBQUcsR0FBRztJQUNoQixJQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzNELElBQUlDLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFDaEUsSUFBSUUsVUFBVSxHQUFHRCxZQUFZLENBQUNFLGNBQWMsRUFBRTtJQUM5QyxNQUFNQyxjQUFjLEdBQUcsSUFBTTtRQUMzQixJQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVztRQUMvQixJQUFJQyxNQUFNLEdBQUdULFFBQVEsQ0FBQ1UsZUFBZSxDQUFDQyxZQUFZLEdBQUdKLE1BQU0sQ0FBQ0ssV0FBVztRQUN2RSxJQUFJQyxRQUFRLEdBQUdWLFVBQVUsR0FBRyxNQUFPLEdBQUdBLFVBQVUsR0FBSU0sTUFBTTtRQUMxRFAsWUFBWSxDQUFDWSxLQUFLLENBQUNDLGdCQUFnQixHQUFHRixRQUFRLENBQUM7S0FDaEQ7SUFDRCxJQUFJZCxZQUFZLEVBQUU7UUFDaEJHLFlBQVksQ0FBQ1ksS0FBSyxDQUFDRSxVQUFVLEdBQUdkLFlBQVksQ0FBQ1ksS0FBSyxDQUFDRyxnQkFBZ0IsR0FDakUsTUFBTSxDQUFDO1FBQ1RmLFlBQVksQ0FBQ1ksS0FBSyxDQUFDSSxlQUFlLEdBQUdmLFVBQVUsR0FBRyxHQUFHLEdBQUdBLFVBQVUsQ0FBQztRQUNuRUQsWUFBWSxDQUFDWSxLQUFLLENBQUNDLGdCQUFnQixHQUFHWixVQUFVLENBQUM7UUFDakRELFlBQVksQ0FBQ2lCLHFCQUFxQixFQUFFLENBQUM7UUFDckNqQixZQUFZLENBQUNZLEtBQUssQ0FBQ0UsVUFBVSxHQUFHZCxZQUFZLENBQUNZLEtBQUssQ0FBQ0csZ0JBQWdCLEdBQ2pFLCtCQUErQixDQUFDO1FBRWxDWixjQUFjLEVBQUUsQ0FBQztRQUNqQkUsTUFBTSxDQUFDYSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVmLGNBQWMsQ0FBQyxDQUFDO1FBQ2xERSxNQUFNLENBQUNhLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxXQUFZO1lBQzVDLElBQUliLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHVixNQUFNLEVBQUU7Z0JBQy9CQyxZQUFZLENBQUNzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQy9DLE1BQU07Z0JBQ0x0QixRQUFRLENBQ0xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMvQm9CLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDeEM7U0FDRixDQUFDLENBQUM7UUFDSHhCLFlBQVksQ0FBQ3FCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFVSSxLQUFLLEVBQUU7WUFDdERBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7WUFDdkJsQixNQUFNLENBQUNtQixRQUFRLENBQUM7Z0JBQUVDLEdBQUcsRUFBRSxDQUFDO2dCQUFFQyxRQUFRLEVBQUUsUUFBUTthQUFFLENBQUMsQ0FBQztZQUNoRCxPQUFPLEtBQUssQ0FBQztTQUNkLENBQUMsQ0FBQztLQUNKO0NBQ0Y7QUFFRCxpRUFBZS9CLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9fcmVhY3QvLi9zcmMvY29tbW9uL3Njcm9sbFRvVG9wLmpzPzg1MGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgbGV0IG9mZnNldCA9IDE1MDtcclxuICBsZXQgcHJvZ3Jlc3NXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy13cmFwXCIpO1xyXG4gIGxldCBwcm9ncmVzc1BhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXdyYXAgcGF0aFwiKTtcclxuICBsZXQgcGF0aExlbmd0aCA9IHByb2dyZXNzUGF0aC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gIGNvbnN0IHVwZGF0ZVByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIGxldCBoZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgbGV0IHByb2dyZXNzID0gcGF0aExlbmd0aCAtIChzY3JvbGwgKiBwYXRoTGVuZ3RoKSAvIGhlaWdodDtcclxuICAgIHByb2dyZXNzUGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcHJvZ3Jlc3M7XHJcbiAgfTtcclxuICBpZiAocHJvZ3Jlc3NXcmFwKSB7XHJcbiAgICBwcm9ncmVzc1BhdGguc3R5bGUudHJhbnNpdGlvbiA9IHByb2dyZXNzUGF0aC5zdHlsZS5XZWJraXRUcmFuc2l0aW9uID1cclxuICAgICAgXCJub25lXCI7XHJcbiAgICBwcm9ncmVzc1BhdGguc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gcGF0aExlbmd0aCArIFwiIFwiICsgcGF0aExlbmd0aDtcclxuICAgIHByb2dyZXNzUGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcGF0aExlbmd0aDtcclxuICAgIHByb2dyZXNzUGF0aC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHByb2dyZXNzUGF0aC5zdHlsZS50cmFuc2l0aW9uID0gcHJvZ3Jlc3NQYXRoLnN0eWxlLldlYmtpdFRyYW5zaXRpb24gPVxyXG4gICAgICBcInN0cm9rZS1kYXNob2Zmc2V0IDEwbXMgbGluZWFyXCI7XHJcblxyXG4gICAgdXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZVByb2dyZXNzKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldCkge1xyXG4gICAgICAgIHByb2dyZXNzV3JhcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2dyZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy13cmFwXCIpXHJcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9ncmVzc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwcm9ncmVzc1dyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxUb1RvcDtcclxuIl0sIm5hbWVzIjpbInNjcm9sbFRvVG9wIiwib2Zmc2V0IiwicHJvZ3Jlc3NXcmFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvZ3Jlc3NQYXRoIiwicGF0aExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwidXBkYXRlUHJvZ3Jlc3MiLCJzY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3MiLCJzdHlsZSIsInN0cm9rZURhc2hvZmZzZXQiLCJ0cmFuc2l0aW9uIiwiV2Via2l0VHJhbnNpdGlvbiIsInN0cm9rZURhc2hhcnJheSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/scrollToTop.js\n");

/***/ }),

/***/ "./src/components/Progress-Scroll/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/Progress-Scroll/index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_scrollToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/scrollToTop */ \"./src/common/scrollToTop.js\");\n\n\n\nconst ProgressScroll = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_common_scrollToTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"progress-wrap cursor-pointer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: \"progress-circle svg-content\",\n            width: \"100%\",\n            height: \"100%\",\n            viewBox: \"-1 -1 102 102\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Progress-Scroll\\\\index.jsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Progress-Scroll\\\\index.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\components\\\\Progress-Scroll\\\\index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressScroll);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy1TY3JvbGwvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ2tCO0FBRW5ELE1BQU1FLGNBQWMsR0FBRyxJQUFNO0lBQzNCRixnREFBUyxDQUFDLElBQU07UUFDZEMsK0RBQVcsRUFBRSxDQUFDO0tBQ2YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4QkFBOEI7a0JBQzNDLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyw2QkFBNkI7WUFBQ0UsS0FBSyxFQUFDLE1BQU07WUFBQ0MsTUFBTSxFQUFDLE1BQU07WUFBQ0MsT0FBTyxFQUFDLGVBQWU7c0JBQzdGLDRFQUFDQyxNQUFJO2dCQUFDQyxDQUFDLEVBQUMsNENBQTRDOzs7Ozt5QkFBRzs7Ozs7cUJBQ25EOzs7OztpQkFDRixDQUNQO0NBQ0Y7QUFFRCxpRUFBZVIsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9fcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy1TY3JvbGwvaW5kZXguanN4PzUwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzY3JvbGxUb1RvcCBmcm9tICcuLi8uLi9jb21tb24vc2Nyb2xsVG9Ub3AnO1xyXG5cclxuY29uc3QgUHJvZ3Jlc3NTY3JvbGwgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvVG9wKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy13cmFwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY2lyY2xlIHN2Zy1jb250ZW50XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCItMSAtMSAxMDIgMTAyXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk01MCwxIGE0OSw0OSAwIDAsMSAwLDk4IGE0OSw0OSAwIDAsMSAwLC05OFwiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc1Njcm9sbCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RvcCIsIlByb2dyZXNzU2Nyb2xsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Progress-Scroll/index.jsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Progress-Scroll */ \"./src/components/Progress-Scroll/index.jsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n\n/* eslint-disable @next/next/no-before-interactive-script-outside-document */ \n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Da vinci\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, maximum-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Progress_Scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"beforeInteractive\",\n                src: \"/js/bootstrap.bundle.min.js\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"beforeInteractive\",\n                src: \"/js/wow.min.js\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"beforeInteractive\",\n                src: \"/js/splitting.min.js\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"beforeInteractive\",\n                src: \"/js/simpleParallax.min.js\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"beforeInteractive\",\n                src: \"/js/isotope.pkgd.min.js\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"beforeInteractive\",\n                src: \"/landing-preview/js/parallax.min.js\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                strategy: \"lazyOnload\",\n                src: \"/js/main.js\"\n            }, void 0, false, {\n                fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQURBLDZFQUE2RSxDQUNuRDtBQUNPO0FBQ0o7QUFDOEI7QUFDNUI7QUFFL0IsU0FBU0ksS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSTs7a0NBQ0gsOERBQUNLLE9BQUs7a0NBQUMsVUFBUTs7Ozs7NEJBQVE7a0NBQ3ZCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHNEQUFzRDs7Ozs7NEJBQUc7Ozs7OztvQkFDbEY7MEJBRVAsOERBQUNMLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7MEJBQzVCLDhEQUFDSCxtRUFBYzs7OztvQkFBRzswQkFFbEIsOERBQUNGLG9EQUFNO2dCQUFDVSxRQUFRLEVBQUMsbUJBQW1CO2dCQUFDQyxHQUFHLEVBQUMsNkJBQTZCOzs7OztvQkFBVTswQkFDaEYsOERBQUNYLG9EQUFNO2dCQUFDVSxRQUFRLEVBQUMsbUJBQW1CO2dCQUFDQyxHQUFHLEVBQUMsZ0JBQWdCOzs7OztvQkFBVTswQkFDbkUsOERBQUNYLG9EQUFNO2dCQUFDVSxRQUFRLEVBQUMsbUJBQW1CO2dCQUFDQyxHQUFHLEVBQUMsc0JBQXNCOzs7OztvQkFBVTswQkFDekUsOERBQUNYLG9EQUFNO2dCQUFDVSxRQUFRLEVBQUMsbUJBQW1CQztnQkFBQUEsR0FBRyxFQUFDLDJCQUEyQjs7Ozs7b0JBQVU7MEJBQzdFLDhEQUFDWCxvREFBTTtnQkFBQ1UsUUFBUSxFQUFDLG1CQUFtQjtnQkFBQ0MsR0FBRyxFQUFDLHlCQUF5Qjs7Ozs7b0JBQVU7MEJBQzVFLDhEQUFDWCxvREFBTTtnQkFBQ1UsUUFBUSxFQUFDLG1CQUFtQjtnQkFBQ0MsR0FBRyxFQUFDLHFDQUFxQzs7Ozs7b0JBQVU7MEJBQ3hGLDhEQUFDWCxvREFBTTtnQkFBQ1UsUUFBUSxFQUFDLFlBQVk7Z0JBQUNDLEdBQUcsRUFBQyxhQUFhOzs7OztvQkFBVTs7b0JBQ3hELENBQ0g7Q0FDSDtBQUVELGlFQUFlUixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXZvX3JlYWN0Ly4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWJlZm9yZS1pbnRlcmFjdGl2ZS1zY3JpcHQtb3V0c2lkZS1kb2N1bWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFByb2dyZXNzU2Nyb2xsIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2dyZXNzLVNjcm9sbFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RGEgdmluY2k8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8UHJvZ3Jlc3NTY3JvbGwgLz5cclxuXHJcbiAgICAgIDxTY3JpcHQgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiIHNyYz1cIi9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIiBzcmM9XCIvanMvd293Lm1pbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIiBzcmM9XCIvanMvc3BsaXR0aW5nLm1pbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcInNyYz1cIi9qcy9zaW1wbGVQYXJhbGxheC5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2pzL2lzb3RvcGUucGtnZC5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2xhbmRpbmctcHJldmlldy9qcy9wYXJhbGxheC5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImxhenlPbmxvYWRcIiBzcmM9XCIvanMvbWFpbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNjcmlwdCIsIkhlYWQiLCJQcm9ncmVzc1Njcm9sbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJzdHJhdGVneSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();