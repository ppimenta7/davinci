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
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = dynamic;\nexports.noSSR = noSSR;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions\n        ;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const suspenseOptions = loadableOptions;\n    // Error if Fizz rendering is not enabled and `suspense` option is set to true\n    if ( true && suspenseOptions.suspense) {\n        throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n    }\n    if (suspenseOptions.suspense) {\n        return loadableFn(suspenseOptions);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})\n    if (typeof loadableOptions.ssr === \"boolean\") {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === \"undefined\";\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        })\n    ;\n}\nif (typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) {\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUdHLE9BQU8sQ0FBQztBQUMxQkgsYUFBYSxHQUFHSSxLQUFLLENBQUM7QUFDdEIsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsU0FBUyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDLENBQUM7QUFDN0QsU0FBU0osT0FBTyxDQUFDTSxjQUFjLEVBQUVDLE9BQU8sRUFBRTtJQUN0QyxJQUFJQyxVQUFVLEdBQUdILFNBQVMsQ0FBQ04sT0FBTztJQUNsQyxJQUFJVSxlQUFlLEdBQUc7UUFDbEIsd0RBQXdEO1FBQ3hEQyxPQUFPLEVBQUUsQ0FBQyxFQUFFQyxLQUFLLEdBQUdDLFNBQVMsR0FBR0MsU0FBUyxHQUFHLEdBQUc7WUFDM0MsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUM7WUFDNUIsSUFBSUMsSUFBc0MsRUFBRTtnQkFDeEMsSUFBSUYsU0FBUyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELElBQUlELEtBQUssRUFBRTtvQkFDUCxPQUFPLGFBQWEsQ0FBQ1QsTUFBTSxDQUFDSCxPQUFPLENBQUNnQixhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRUosS0FBSyxDQUFDSyxPQUFPLEVBQUUsYUFBYSxDQUFDZCxNQUFNLENBQUNILE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUVKLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUU7aUJBQ3JKO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxxRUFBcUU7SUFDckUsd0dBQXdH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OUdKLE1BQU0sQ0FBQ3dDLE1BQU0sQ0FBQ3RDLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFRixPQUFPLENBQUMsQ0FBQztJQUN4Q3VDLE1BQU0sQ0FBQ3ZDLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxPQUFPLENBQUM7Q0FDbEMsQ0FFRCxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXZvX3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanM/ZTI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9uc1xuICAgICAgICA7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IHN1c3BlbnNlT3B0aW9ucyA9IGxvYWRhYmxlT3B0aW9ucztcbiAgICAvLyBFcnJvciBpZiBGaXp6IHJlbmRlcmluZyBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICB9XG4gICAgaWYgKHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICByZXR1cm4gbG9hZGFibGVGbihzdXNwZW5zZU9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkXG4gICAgICAgIH07XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XG4gICAgfVxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cblxuaWYgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpIHtcbiAgT2JqZWN0LmFzc2lnbihleHBvcnRzLmRlZmF1bHQsIGV4cG9ydHMpO1xuICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiZHluYW1pYyIsIm5vU1NSIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibG9hZGFibGVPcHRpb25zIiwibG9hZGluZyIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwicHJvY2VzcyIsImNyZWF0ZUVsZW1lbnQiLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwic3VzcGVuc2VPcHRpb25zIiwiZW52IiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsInRpbWVkT3V0IiwiYXNzaWduIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./src/pages/[slug].tsx":
/*!******************************!*\
  !*** ./src/pages/[slug].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_getBugets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/getBugets */ \"./src/services/getBugets.ts\");\n/* harmony import */ var _services_getCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getCategories */ \"./src/services/getCategories.ts\");\n/* harmony import */ var _services_getCustomers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/getCustomers */ \"./src/services/getCustomers.ts\");\n/* harmony import */ var _services_getProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getProducts */ \"./src/services/getProducts.ts\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_getBugetsHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/getBugetsHistory */ \"./src/services/getBugetsHistory.ts\");\n\n\n\n\n\n\n\nconst IndexPage = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/*! import() */ \"src_pages_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! . */ \"./src/pages/index.tsx\"))\n, {\n    loadableGenerated: {\n        modules: [\n            \"[slug].tsx -> \" + \".\"\n        ]\n    }\n});\nconst Slug = ({ pdf , bugets , products , categories , customers , params  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexPage, {\n            params: params,\n            bugets: bugets,\n            products: products,\n            categories: categories,\n            customers: customers,\n            pdf: pdf\n        }, void 0, false, {\n            fileName: \"E:\\\\\\xc1rea de Trabalho\\\\Penseapp\\\\Davinci\\\\davinci\\\\davinci\\\\src\\\\pages\\\\[slug].tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nconst getServerSideProps = async ({ query  })=>{\n    const params = query.slug;\n    // const params = \"orcamento-para-solucao-de-amputacao-chopart&19\"\n    // const params = \"pdf=orcamento-para-solucao-de-amputacao-chopart&22\"\n    // const params = \"historico2=orcamento-para-solucao-de-amputacao-chopart&22-versao=1\"\n    // const params = \"historico-pdf3=orcamento-para-solucao-de-amputacao-chopart&22-versao=2\"\n    const type = params.includes(\"historico\") ? \"historico\" : params.includes(\"pdf\") ? \"pdf\" : \"hotsite\";\n    const pdf = params.includes(\"pdf\") ? true : false;\n    const paramSplit = params.split(\"&\");\n    const history = paramSplit[0].split(\"=\");\n    const historyID = history[0].replace(/historico/i, \"\").replace(/-pdf/i, \"\");\n    const paramID = type == \"historico\" ? historyID : paramSplit[1];\n    const id = typeof params === \"string\" ? paramID : \"\";\n    try {\n        let bugets;\n        if (type == \"historico\") {\n            bugets = await (0,_services_getBugetsHistory__WEBPACK_IMPORTED_MODULE_6__.getBugetsHistory)(id).then((res)=>res.data\n            );\n        } else {\n            bugets = await (0,_services_getBugets__WEBPACK_IMPORTED_MODULE_1__.getBugets)(id).then((res)=>res.data\n            );\n        }\n        // bugets = await getBugets(id).then((res) => res.data);\n        const IDproducts = bugets.products.join();\n        const products1 = await (0,_services_getProducts__WEBPACK_IMPORTED_MODULE_4__.getProducts)(IDproducts).then((res)=>res.data.records\n        );\n        const IDCategorys = await products1.map((products)=>products.category\n        );\n        const categories = await (0,_services_getCategories__WEBPACK_IMPORTED_MODULE_2__.getCategories)(IDCategorys).then((res)=>res.data.records\n        );\n        const customers = await (0,_services_getCustomers__WEBPACK_IMPORTED_MODULE_3__.getCustomers)(bugets.customer).then((res)=>res.data.records[0]\n        );\n        return {\n            props: {\n                bugets,\n                products: products1,\n                categories,\n                customers,\n                pdf: pdf,\n                params: params\n            }\n        };\n    } catch (error) {\n        console.log(error);\n        return {\n            redirect: {\n                destination: \"/404\"\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDRyxPQUFPO1FBQUEsQ0FBQztRQUVuRixNQUFNbkIsU0FBUyxHQUFHLE1BQU1WLG9FQUFZLENBQUNPLE1BQU0sQ0FBQzBCLFFBQVEsQ0FBQyxDQUFDVCxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUM7UUFFeEYsT0FBTztZQUNMSyxLQUFLLEVBQUU7Z0JBQ0wzQixNQUFNO2dCQUNOQyxRQUFRLEVBQVJBLFNBQVE7Z0JBQ1JDLFVBQVU7Z0JBQ1ZDLFNBQVM7Z0JBQ1RKLEdBQUcsRUFBRUEsR0FBRztnQkFDUkssTUFBTSxFQUFFQSxNQUFNO2FBQ2Y7U0FDRixDQUFDO0tBQ0gsQ0FBQyxPQUFPd0IsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7UUFDbEIsT0FBTztZQUNMRyxRQUFRLEVBQUU7Z0JBQ1JDLFdBQVcsRUFBRSxNQUFNO2FBQ3BCO1NBQ0YsQ0FBQztLQUNIO0NBQ0YsQ0FBQztBQUVGLGlFQUFlbEMsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF2b19yZWFjdC8uL3NyYy9wYWdlcy9bc2x1Z10udHN4PzZmNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBCdWdldHNJbnRlcmZhY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9idWdldHNJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcmllc0ludGVyZmFjZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NhdGVnb3JpZXNJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ3VzdG9tZXJzSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY3VzdG9tZXJzSW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RzSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcHJvZHVjdHNJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgZ2V0QnVnZXRzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dldEJ1Z2V0c1wiO1xyXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dldENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXJzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dldEN1c3RvbWVyc1wiO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9nZXRQcm9kdWN0c1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IGdldEJ1Z2V0c0hpc3RvcnkgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2V0QnVnZXRzSGlzdG9yeVwiO1xyXG5jb25zdCBJbmRleFBhZ2UgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi5cIikpO1xyXG5cclxuaW50ZXJmYWNlIFNsdWdJbnRlcmZhY2Uge1xyXG4gIHBkZjogYm9vbGVhbjtcclxuICBidWdldHM6IEJ1Z2V0c0ludGVyZmFjZTtcclxuICBwcm9kdWN0czogUHJvZHVjdHNJbnRlcmZhY2U7XHJcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcmllc0ludGVyZmFjZTtcclxuICBjdXN0b21lcnM6IEN1c3RvbWVyc0ludGVyZmFjZTtcclxuICBwYXJhbXM6IHtcclxuICAgIHNsdWc6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTbHVnOiBOZXh0UGFnZTxTbHVnSW50ZXJmYWNlPiA9ICh7IHBkZiwgYnVnZXRzLCBwcm9kdWN0cywgY2F0ZWdvcmllcywgY3VzdG9tZXJzLCBwYXJhbXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5kZXhQYWdlIHBhcmFtcz17cGFyYW1zfSBidWdldHM9e2J1Z2V0c30gcHJvZHVjdHM9e3Byb2R1Y3RzfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBjdXN0b21lcnM9e2N1c3RvbWVyc30gcGRmPXtwZGZ9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCBwYXJhbXMgPSBxdWVyeS5zbHVnO1xyXG5cclxuICAvLyBjb25zdCBwYXJhbXMgPSBcIm9yY2FtZW50by1wYXJhLXNvbHVjYW8tZGUtYW1wdXRhY2FvLWNob3BhcnQmMTlcIlxyXG4gIC8vIGNvbnN0IHBhcmFtcyA9IFwicGRmPW9yY2FtZW50by1wYXJhLXNvbHVjYW8tZGUtYW1wdXRhY2FvLWNob3BhcnQmMjJcIlxyXG5cclxuICAvLyBjb25zdCBwYXJhbXMgPSBcImhpc3RvcmljbzI9b3JjYW1lbnRvLXBhcmEtc29sdWNhby1kZS1hbXB1dGFjYW8tY2hvcGFydCYyMi12ZXJzYW89MVwiXHJcbiAgLy8gY29uc3QgcGFyYW1zID0gXCJoaXN0b3JpY28tcGRmMz1vcmNhbWVudG8tcGFyYS1zb2x1Y2FvLWRlLWFtcHV0YWNhby1jaG9wYXJ0JjIyLXZlcnNhbz0yXCJcclxuXHJcbiAgY29uc3QgdHlwZSA9IHBhcmFtcy5pbmNsdWRlcyhcImhpc3Rvcmljb1wiKSA/ICdoaXN0b3JpY28nIDogKHBhcmFtcy5pbmNsdWRlcyhcInBkZlwiKSA/ICdwZGYnIDogJ2hvdHNpdGUnKTtcclxuICBjb25zdCBwZGYgPSBwYXJhbXMuaW5jbHVkZXMoXCJwZGZcIikgPyB0cnVlIDogZmFsc2VcclxuXHJcbiAgY29uc3QgcGFyYW1TcGxpdCA9IHBhcmFtcy5zcGxpdChcIiZcIik7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHBhcmFtU3BsaXRbMF0uc3BsaXQoXCI9XCIpO1xyXG4gIFxyXG4gIGNvbnN0IGhpc3RvcnlJRCA9IGhpc3RvcnlbMF0ucmVwbGFjZSgvaGlzdG9yaWNvL2ksIFwiXCIpLnJlcGxhY2UoLy1wZGYvaSwgXCJcIik7XHJcbiAgY29uc3QgcGFyYW1JRCA9IHR5cGUgPT0gJ2hpc3RvcmljbycgPyBoaXN0b3J5SUQgOiBwYXJhbVNwbGl0WzFdXHJcblxyXG4gIGNvbnN0IGlkID0gdHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIiA/IHBhcmFtSUQgOiBcIlwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgbGV0IGJ1Z2V0cztcclxuXHJcbiAgICBpZiAodHlwZSA9PSAnaGlzdG9yaWNvJykgeyBidWdldHMgPSBhd2FpdCBnZXRCdWdldHNIaXN0b3J5KGlkKS50aGVuKChyZXMpID0+IHJlcy5kYXRhKTsgfVxyXG4gICAgZWxzZSB7IGJ1Z2V0cyA9IGF3YWl0IGdldEJ1Z2V0cyhpZCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7IH1cclxuICAgIC8vIGJ1Z2V0cyA9IGF3YWl0IGdldEJ1Z2V0cyhpZCkudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcblxyXG4gICAgY29uc3QgSURwcm9kdWN0cyA9IGJ1Z2V0cy5wcm9kdWN0cy5qb2luKClcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldFByb2R1Y3RzKElEcHJvZHVjdHMpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEucmVjb3Jkcyk7XHJcblxyXG4gICAgY29uc3QgSURDYXRlZ29yeXMgPSBhd2FpdCBwcm9kdWN0cy5tYXAoKHByb2R1Y3RzOiBQcm9kdWN0c0ludGVyZmFjZSkgPT4gcHJvZHVjdHMuY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXMoSURDYXRlZ29yeXMpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEucmVjb3Jkcyk7XHJcblxyXG4gICAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgZ2V0Q3VzdG9tZXJzKGJ1Z2V0cy5jdXN0b21lcikudGhlbigocmVzKSA9PiByZXMuZGF0YS5yZWNvcmRzWzBdKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGJ1Z2V0cyxcclxuICAgICAgICBwcm9kdWN0cyxcclxuICAgICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICAgIGN1c3RvbWVycyxcclxuICAgICAgICBwZGY6IHBkZixcclxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvNDA0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWc7XHJcbiJdLCJuYW1lcyI6WyJnZXRCdWdldHMiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0Q3VzdG9tZXJzIiwiZ2V0UHJvZHVjdHMiLCJkeW5hbWljIiwiZ2V0QnVnZXRzSGlzdG9yeSIsIkluZGV4UGFnZSIsIlNsdWciLCJwZGYiLCJidWdldHMiLCJwcm9kdWN0cyIsImNhdGVnb3JpZXMiLCJjdXN0b21lcnMiLCJwYXJhbXMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsInNsdWciLCJ0eXBlIiwiaW5jbHVkZXMiLCJwYXJhbVNwbGl0Iiwic3BsaXQiLCJoaXN0b3J5IiwiaGlzdG9yeUlEIiwicmVwbGFjZSIsInBhcmFtSUQiLCJpZCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiSURwcm9kdWN0cyIsImpvaW4iLCJyZWNvcmRzIiwiSURDYXRlZ29yeXMiLCJtYXAiLCJjYXRlZ29yeSIsImN1c3RvbWVyIiwicHJvcHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[slug].tsx\n");

/***/ }),

/***/ "./src/services/getBugets.ts":
/*!***********************************!*\
  !*** ./src/services/getBugets.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBugets\": () => (/* binding */ getBugets),\n/* harmony export */   \"options\": () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    headers: {\n        Authorization: \"Bearer odh5mG3V332Drs7NwoGJz0XRXKlOoQgYonWNxieE\",\n        \"X-Bridge-Settings\": \"gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ==\"\n    }\n};\nconst getBugets = async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_generation/${id}/`, {\n        headers: {\n            Authorization: options.headers.Authorization\n        }\n    });\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZ2V0QnVnZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFHdEMsTUFBTUMsT0FBTyxHQUFHO0lBQ3JCQyxPQUFPLEVBQUU7UUFDUEMsYUFBYSxFQUFFLGlEQUFpRDtRQUNoRSxtQkFBbUIsRUFDakIsOGpCQUE4akI7S0FDamtCO0NBQ0YsQ0FBQztBQUVLLE1BQU1DLFNBQVMsR0FBRyxPQUN2QkMsRUFBRSxHQUM0QztJQUU1QyxNQUFNQyxRQUFRLEdBQUcsTUFBTU4sZ0RBQVMsQ0FDOUIsQ0FBQywyRkFBMkYsRUFBRUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNuRztRQUNFSCxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFRixPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsYUFBYTtTQUU3QztLQUNGLENBQ0Y7SUFFRCxPQUFPRyxRQUFRLENBQUM7Q0FDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9fcmVhY3QvLi9zcmMvc2VydmljZXMvZ2V0QnVnZXRzLnRzPzVhM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQnVnZXRzSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYnVnZXRzSW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiB7XHJcbiAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBvZGg1bUczVjMzMkRyczdOd29HSnowWFJYS2xPb1FnWW9uV054aWVFXCIsXHJcbiAgICBcIlgtQnJpZGdlLVNldHRpbmdzXCI6XHJcbiAgICAgIFwiZ0FBQUFBQmpEbEpBcHlfNUhyUkl1WGE3MGp3NGpCR1VJek9VcS1tRWNEU2xYaUpId2dPaklEQ3piYndMZXVjRUJMVXh4VlptNWEyQWx3M3hDd3BiM05ud3VuWlVrUk9UV0xGOXJkQm55b2NaRUZIdzBsdUZSSWhBVTQ0UDlUbzV2N1I3X1NSeGxNMXdVcWtQcEdiX0hWVURtMG9xVnZYc3BXYkR6aHd4Z2JHV0JhRTZEZ1RjVDB0WDNuenpfMnFwdDFUbUM5RzFCQWJ2MG91WlFQSmw2cWJ4V24wZ2FCR09na1YtX21zS1d2SmluRTNHZ3lON3pMMEM1QmxPbEpQREV6N1Q0NG1DemZRMEVVVXIxdkdrNjE3OGFEVnpaajVUSFc1WHYzRjd4UnFDNGlpdmczckxGTmtpMTZMTVFyWnNBRXRDOXhLSGVKMG1ma3NOYzJrdTYxNzFRX3E4ajhVa2hsd3RrT1pyOUtHSjR0SkhxOExXdU55dGQ1ODFVVDJMd1c3NGlmWHlKYkJZUHZNeC1HTFZkR0V0SlltWHVRejViY0NXUjZhbXZSRFE5eHNIX1k3Y013QnI0MnR4Z05ZTVVYRkdYczJOaE1ieWdSQ0c4bGtlU0NfVE5jTUtvbFdMcmQzTWREdzdlZG45cFh4NFhNRGpNOUk3N0RvTEpOYk11VHB3ZC1YcXhEenlORGo4eUNQOEdzV20xSlpMWVVpX29nPT1ZTW9EVy9YSFdXYTU1bkNTbHpZYlFRPT1cIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJ1Z2V0cyA9IGFzeW5jIChcclxuICBpZFxyXG4gICk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxCdWdldHNJbnRlcmZhY2U+PiA9PiB7XHJcbiAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgYGh0dHBzOi8vZGF0YS5qZXRhZG1pbi5pby9wcm9qZWN0cy9kYV92aW5jaS9wcm9kL2pldF9kYXRhYmFzZV84ZmwzL21vZGVscy9idWRnZXRfZ2VuZXJhdGlvbi8ke2lkfS9gLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24sXHJcbiAgICAgICAgICAvLyBcIlgtQnJpZGdlLVNldHRpbmdzXCI6IG9wdGlvbnMuaGVhZGVyc1tcIlgtQnJpZGdlLVNldHRpbmdzXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfTsiXSwibmFtZXMiOlsiYXhpb3MiLCJvcHRpb25zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRCdWdldHMiLCJpZCIsInJlc3BvbnNlIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/getBugets.ts\n");

/***/ }),

/***/ "./src/services/getBugetsHistory.ts":
/*!******************************************!*\
  !*** ./src/services/getBugetsHistory.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBugetsHistory\": () => (/* binding */ getBugetsHistory),\n/* harmony export */   \"options\": () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    headers: {\n        Authorization: \"Bearer odh5mG3V332Drs7NwoGJz0XRXKlOoQgYonWNxieE\",\n        \"X-Bridge-Settings\": \"gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ==\"\n    }\n};\nconst getBugetsHistory = async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_history/${id}/`, {\n        headers: {\n            Authorization: options.headers.Authorization\n        }\n    });\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZ2V0QnVnZXRzSGlzdG9yeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZDO0FBR3RDLE1BQU1DLE9BQU8sR0FBRztJQUNyQkMsT0FBTyxFQUFFO1FBQ1BDLGFBQWEsRUFBRSxpREFBaUQ7UUFDaEUsbUJBQW1CLEVBQ2pCLDhqQkFBOGpCO0tBQ2prQjtDQUNGLENBQUM7QUFFSyxNQUFNQyxnQkFBZ0IsR0FBRyxPQUM5QkMsRUFBRSxHQUNtRDtJQUVuRCxNQUFNQyxRQUFRLEdBQUcsTUFBTU4sZ0RBQVMsQ0FDOUIsQ0FBQyx3RkFBd0YsRUFBRUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNoRztRQUNFSCxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFRixPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsYUFBYTtTQUU3QztLQUNGLENBQ0Y7SUFFRCxPQUFPRyxRQUFRLENBQUM7Q0FDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9fcmVhY3QvLi9zcmMvc2VydmljZXMvZ2V0QnVnZXRzSGlzdG9yeS50cz9mM2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEJ1Z2V0c0hpc3RvcnlJbnRlcmZhY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9idWdldHNIaXN0b3J5SW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcclxuICBoZWFkZXJzOiB7XHJcbiAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBvZGg1bUczVjMzMkRyczdOd29HSnowWFJYS2xPb1FnWW9uV054aWVFXCIsXHJcbiAgICBcIlgtQnJpZGdlLVNldHRpbmdzXCI6XHJcbiAgICAgIFwiZ0FBQUFBQmpEbEpBcHlfNUhyUkl1WGE3MGp3NGpCR1VJek9VcS1tRWNEU2xYaUpId2dPaklEQ3piYndMZXVjRUJMVXh4VlptNWEyQWx3M3hDd3BiM05ud3VuWlVrUk9UV0xGOXJkQm55b2NaRUZIdzBsdUZSSWhBVTQ0UDlUbzV2N1I3X1NSeGxNMXdVcWtQcEdiX0hWVURtMG9xVnZYc3BXYkR6aHd4Z2JHV0JhRTZEZ1RjVDB0WDNuenpfMnFwdDFUbUM5RzFCQWJ2MG91WlFQSmw2cWJ4V24wZ2FCR09na1YtX21zS1d2SmluRTNHZ3lON3pMMEM1QmxPbEpQREV6N1Q0NG1DemZRMEVVVXIxdkdrNjE3OGFEVnpaajVUSFc1WHYzRjd4UnFDNGlpdmczckxGTmtpMTZMTVFyWnNBRXRDOXhLSGVKMG1ma3NOYzJrdTYxNzFRX3E4ajhVa2hsd3RrT1pyOUtHSjR0SkhxOExXdU55dGQ1ODFVVDJMd1c3NGlmWHlKYkJZUHZNeC1HTFZkR0V0SlltWHVRejViY0NXUjZhbXZSRFE5eHNIX1k3Y013QnI0MnR4Z05ZTVVYRkdYczJOaE1ieWdSQ0c4bGtlU0NfVE5jTUtvbFdMcmQzTWREdzdlZG45cFh4NFhNRGpNOUk3N0RvTEpOYk11VHB3ZC1YcXhEenlORGo4eUNQOEdzV20xSlpMWVVpX29nPT1ZTW9EVy9YSFdXYTU1bkNTbHpZYlFRPT1cIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJ1Z2V0c0hpc3RvcnkgPSBhc3luYyAoXHJcbiAgaWRcclxuICApOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8QnVnZXRzSGlzdG9yeUludGVyZmFjZT4+ID0+IHtcclxuICBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBgaHR0cHM6Ly9kYXRhLmpldGFkbWluLmlvL3Byb2plY3RzL2RhX3ZpbmNpL3Byb2QvamV0X2RhdGFiYXNlXzhmbDMvbW9kZWxzL2J1ZGdldF9oaXN0b3J5LyR7aWR9L2AsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbixcclxuICAgICAgICAgIC8vIFwiWC1CcmlkZ2UtU2V0dGluZ3NcIjogb3B0aW9ucy5oZWFkZXJzW1wiWC1CcmlkZ2UtU2V0dGluZ3NcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9OyJdLCJuYW1lcyI6WyJheGlvcyIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldEJ1Z2V0c0hpc3RvcnkiLCJpZCIsInJlc3BvbnNlIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/getBugetsHistory.ts\n");

/***/ }),

/***/ "./src/services/getCategories.ts":
/*!***************************************!*\
  !*** ./src/services/getCategories.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getBugets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBugets */ \"./src/services/getBugets.ts\");\n\n\nconst getCategories = async (IDCategorys)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/categories/`, {\n        params: {\n            id__in: `${IDCategorys}`\n        },\n        headers: {\n            Authorization: _getBugets__WEBPACK_IMPORTED_MODULE_1__.options.headers.Authorization\n        }\n    });\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZ2V0Q2F0ZWdvcmllcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZDO0FBR1A7QUFFL0IsTUFBTUUsYUFBYSxHQUFHLE9BQzNCQyxXQUFXLEdBQzZDO0lBRXRELE1BQU1DLFFBQVEsR0FBRyxNQUFNSixnREFBUyxDQUM5QixDQUFDLG9GQUFvRixDQUFDLEVBQ3RGO1FBQ0VNLE1BQU0sRUFBRTtZQUFFQyxNQUFNLEVBQUUsQ0FBQyxFQUFFSixXQUFXLENBQUMsQ0FBQztTQUFFO1FBQ3BDSyxPQUFPLEVBQUU7WUFDUEMsYUFBYSxFQUFFUixxRUFBNkI7U0FFN0M7S0FDRixDQUNGO0lBRUQsT0FBT0csUUFBUSxDQUFDO0NBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXZvX3JlYWN0Ly4vc3JjL3NlcnZpY2VzL2dldENhdGVnb3JpZXMudHM/YThmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvY2F0ZWdvcmllc0ludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21BeGlvc1Jlc3BvbnNlIH0gZnJvbSBcIi4vYXhpb3NTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9nZXRCdWdldHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gYXN5bmMgKFxyXG4gIElEQ2F0ZWdvcnlzXHJcbiAgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPENhdGVnb3JpZXNJbnRlcmZhY2VbXXxhbnk+PiA9PiB7XHJcbiAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgYGh0dHBzOi8vZGF0YS5qZXRhZG1pbi5pby9wcm9qZWN0cy9kYV92aW5jaS9wcm9kL2pldF9kYXRhYmFzZV84ZmwzL21vZGVscy9jYXRlZ29yaWVzL2AsXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHsgaWRfX2luOiBgJHtJRENhdGVnb3J5c31gIH0sXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24sXHJcbiAgICAgICAgICAvLyBcIlgtQnJpZGdlLVNldHRpbmdzXCI6IG9wdGlvbnMuaGVhZGVyc1tcIlgtQnJpZGdlLVNldHRpbmdzXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfTsiXSwibmFtZXMiOlsiYXhpb3MiLCJvcHRpb25zIiwiZ2V0Q2F0ZWdvcmllcyIsIklEQ2F0ZWdvcnlzIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJpZF9faW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/getCategories.ts\n");

/***/ }),

/***/ "./src/services/getCustomers.ts":
/*!**************************************!*\
  !*** ./src/services/getCustomers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCustomers\": () => (/* binding */ getCustomers),\n/* harmony export */   \"options\": () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    headers: {\n        Authorization: \"Bearer odh5mG3V332Drs7NwoGJz0XRXKlOoQgYonWNxieE\",\n        \"X-Bridge-Settings\": \"gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ==\"\n    }\n};\nconst getCustomers = async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/customers/`, {\n        params: {\n            id: id\n        },\n        headers: {\n            Authorization: options.headers.Authorization\n        }\n    });\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZ2V0Q3VzdG9tZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFHdEMsTUFBTUMsT0FBTyxHQUFHO0lBQ3JCQyxPQUFPLEVBQUU7UUFDUEMsYUFBYSxFQUFFLGlEQUFpRDtRQUNoRSxtQkFBbUIsRUFDakIsOGpCQUE4akI7S0FDamtCO0NBQ0YsQ0FBQztBQUVLLE1BQU1DLFlBQVksR0FBRyxPQUMxQkMsRUFBRSxHQUM2QztJQUMvQyxNQUFNQyxRQUFRLEdBQUcsTUFBTU4sZ0RBQVMsQ0FDOUIsQ0FBQyxtRkFBbUYsQ0FBQyxFQUNyRjtRQUNFUSxNQUFNLEVBQUU7WUFBRUgsRUFBRSxFQUFFQSxFQUFFO1NBQUU7UUFDbEJILE9BQU8sRUFBRTtZQUNQQyxhQUFhLEVBQUVGLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxhQUFhO1NBRTdDO0tBQ0YsQ0FDRjtJQUVELE9BQU9HLFFBQVEsQ0FBQztDQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF2b19yZWFjdC8uL3NyYy9zZXJ2aWNlcy9nZXRDdXN0b21lcnMudHM/ODlhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDdXN0b21lcnNJbnRlcmZhY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jdXN0b21lcnNJbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xyXG4gIGhlYWRlcnM6IHtcclxuICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIG9kaDVtRzNWMzMyRHJzN053b0dKejBYUlhLbE9vUWdZb25XTnhpZUVcIixcclxuICAgIFwiWC1CcmlkZ2UtU2V0dGluZ3NcIjpcclxuICAgICAgXCJnQUFBQUFCakRsSkFweV81SHJSSXVYYTcwanc0akJHVUl6T1VxLW1FY0RTbFhpSkh3Z09qSURDemJid0xldWNFQkxVeHhWWm01YTJBbHczeEN3cGIzTm53dW5aVWtST1RXTEY5cmRCbnlvY1pFRkh3MGx1RlJJaEFVNDRQOVRvNXY3UjdfU1J4bE0xd1Vxa1BwR2JfSFZVRG0wb3FWdlhzcFdiRHpod3hnYkdXQmFFNkRnVGNUMHRYM256el8ycXB0MVRtQzlHMUJBYnYwb3VaUVBKbDZxYnhXbjBnYUJHT2drVi1fbXNLV3ZKaW5FM0dneU43ekwwQzVCbE9sSlBERXo3VDQ0bUN6ZlEwRVVVcjF2R2s2MTc4YURWelpqNVRIVzVYdjNGN3hScUM0aWl2ZzNyTEZOa2kxNkxNUXJac0FFdEM5eEtIZUowbWZrc05jMmt1NjE3MVFfcThqOFVraGx3dGtPWnI5S0dKNHRKSHE4TFd1Tnl0ZDU4MVVUMkx3Vzc0aWZYeUpiQllQdk14LUdMVmRHRXRKWW1YdVF6NWJjQ1dSNmFtdlJEUTl4c0hfWTdjTXdCcjQydHhnTllNVVhGR1hzMk5oTWJ5Z1JDRzhsa2VTQ19UTmNNS29sV0xyZDNNZER3N2VkbjlwWHg0WE1Eak05STc3RG9MSk5iTXVUcHdkLVhxeER6eU5Eajh5Q1A4R3NXbTFKWkxZVWlfb2c9PVlNb0RXL1hIV1dhNTVuQ1NselliUVE9PVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VzdG9tZXJzID0gYXN5bmMgKFxyXG4gIGlkXHJcbik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxDdXN0b21lcnNJbnRlcmZhY2U+PiA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9kYXRhLmpldGFkbWluLmlvL3Byb2plY3RzL2RhX3ZpbmNpL3Byb2QvamV0X2RhdGFiYXNlXzhmbDMvbW9kZWxzL2N1c3RvbWVycy9gLFxyXG4gICAge1xyXG4gICAgICBwYXJhbXM6IHsgaWQ6IGlkIH0sXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbixcclxuICAgICAgICAvLyBcIlgtQnJpZGdlLVNldHRpbmdzXCI6IG9wdGlvbnMuaGVhZGVyc1tcIlgtQnJpZGdlLVNldHRpbmdzXCJdLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q3VzdG9tZXJzIiwiaWQiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/getCustomers.ts\n");

/***/ }),

/***/ "./src/services/getProducts.ts":
/*!*************************************!*\
  !*** ./src/services/getProducts.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getBugets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBugets */ \"./src/services/getBugets.ts\");\n\n\nconst getProducts = async (IDproducts)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/collection/`, {\n        params: {\n            id__in: `${IDproducts}`\n        },\n        headers: {\n            Authorization: _getBugets__WEBPACK_IMPORTED_MODULE_1__.options.headers.Authorization\n        }\n    });\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZ2V0UHJvZHVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUdQO0FBRS9CLE1BQU1FLFdBQVcsR0FBRyxPQUN2QkMsVUFBVSxHQUMwQztJQUVwRCxNQUFNQyxRQUFRLEdBQUcsTUFBTUosZ0RBQVMsQ0FDOUIsQ0FBQyxvRkFBb0YsQ0FBQyxFQUN0RjtRQUNFTSxNQUFNLEVBQUU7WUFBRUMsTUFBTSxFQUFFLENBQUMsRUFBRUosVUFBVSxDQUFDLENBQUM7U0FBRTtRQUNuQ0ssT0FBTyxFQUFFO1lBQ1BDLGFBQWEsRUFBRVIscUVBQTZCO1NBRTdDO0tBQ0YsQ0FDRjtJQUVELE9BQU9HLFFBQVEsQ0FBQztDQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF2b19yZWFjdC8uL3NyYy9zZXJ2aWNlcy9nZXRQcm9kdWN0cy50cz8yNjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RzSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcHJvZHVjdHNJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ3VzdG9tQXhpb3NSZXNwb25zZSB9IGZyb20gXCIuL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vZ2V0QnVnZXRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoXHJcbiAgICBJRHByb2R1Y3RzXHJcbiAgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFByb2R1Y3RzSW50ZXJmYWNlW118YW55Pj4gPT4ge1xyXG4gIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIGBodHRwczovL2RhdGEuamV0YWRtaW4uaW8vcHJvamVjdHMvZGFfdmluY2kvcHJvZC9qZXRfZGF0YWJhc2VfOGZsMy9tb2RlbHMvY29sbGVjdGlvbi9gLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7IGlkX19pbjogYCR7SURwcm9kdWN0c31gIH0sXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24sXHJcbiAgICAgICAgICAvLyBcIlgtQnJpZGdlLVNldHRpbmdzXCI6IG9wdGlvbnMuaGVhZGVyc1tcIlgtQnJpZGdlLVNldHRpbmdzXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfTsiXSwibmFtZXMiOlsiYXhpb3MiLCJvcHRpb25zIiwiZ2V0UHJvZHVjdHMiLCJJRHByb2R1Y3RzIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJpZF9faW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/getProducts.ts\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzPzczZDQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "@mui/icons-material":
/*!**************************************!*\
  !*** external "@mui/icons-material" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material");

/***/ }),

/***/ "@mui/icons-material/Abc":
/*!******************************************!*\
  !*** external "@mui/icons-material/Abc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Abc");

/***/ }),

/***/ "@mui/icons-material/Delete":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Delete" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ "@mui/material/Icon":
/*!*************************************!*\
  !*** external "@mui/material/Icon" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Icon");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "html-to-text":
/*!*******************************!*\
  !*** external "html-to-text" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-to-text");

/***/ }),

/***/ "jspdf":
/*!************************!*\
  !*** external "jspdf" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("jspdf");

/***/ }),

/***/ "next/dist/compiled/react-is":
/*!**********************************************!*\
  !*** external "next/dist/compiled/react-is" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-is");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../shared/lib/is-plain-object":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/is-plain-object.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../page-path/denormalize-page-path":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/page-path/denormalize-page-path.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "./utils/format-url":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/format-url.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/get-middleware-regex":
/*!****************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-middleware-regex.js" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "pdfmake/build/pdfmake":
/*!****************************************!*\
  !*** external "pdfmake/build/pdfmake" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("pdfmake/build/pdfmake");

/***/ }),

/***/ "pdfmake/build/vfs_fonts":
/*!******************************************!*\
  !*** external "pdfmake/build/vfs_fonts" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("pdfmake/build/vfs_fonts");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-modal-video");

/***/ }),

/***/ "react-slidedown":
/*!**********************************!*\
  !*** external "react-slidedown" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-slidedown");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/[slug].tsx"));
module.exports = __webpack_exports__;

})();