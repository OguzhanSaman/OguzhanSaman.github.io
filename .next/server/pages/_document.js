"use strict";
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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const originalRenderPage = ctx.renderPage;\n        // Run the React rendering logic synchronously\n        ctx.renderPage = ()=>originalRenderPage({\n                // Useful for wrapping the whole react tree\n                enhanceApp: (App)=>App,\n                // Useful for wrapping in a per-page basis\n                enhanceComponent: (Component)=>Component\n            });\n        // Run the parent `getInitialProps`, it now includes the custom `renderPage`\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        return initialProps;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"shortcut icon\",\n                            href: \"favicon.ico\",\n                            id: \"fav-shortcut\",\n                            type: \"image/x-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"favicon.ico\",\n                            id: \"fav-icon\",\n                            type: \"image/x-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            sizes: \"180x180\",\n                            href: \"apple-touch-icon.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"32x32\",\n                            href: \"favicon-32x32.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            type: \"image/png\",\n                            sizes: \"16x16\",\n                            href: \"favicon-16x16.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"manifest.json\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Koksal & Partners Attorney Partnership / K\\xf6ksal & Partners Avukatlık Ortaklığı\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.googleapis.com\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\",\n                            crossOrigin: \"true\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"alternate\",\n                            type: \"application/rss+xml\",\n                            title: \"RSS Feed for K\\xf6ksal & Partners\",\n                            href: \"https://www.koksalpartners.com/rss.xml\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_document.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RTtBQUV2RSxNQUFNSyxtQkFBbUJMLHNEQUFRQTtJQUMvQixhQUFhTSxnQkFBZ0JDLEdBQUcsRUFBRTtRQUNoQyxNQUFNQyxxQkFBcUJELElBQUlFLFVBQVU7UUFFekMsOENBQThDO1FBQzlDRixJQUFJRSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO2dCQUNqQiwyQ0FBMkM7Z0JBQzNDRSxZQUFZLENBQUNDLE1BQVFBO2dCQUNyQiwwQ0FBMEM7Z0JBQzFDQyxrQkFBa0IsQ0FBQ0MsWUFBY0E7WUFDbkM7UUFFRiw0RUFBNEU7UUFDNUUsTUFBTUMsZUFBZSxNQUFNZCxvRUFBd0IsQ0FBQ087UUFFcEQsT0FBT087SUFDVDtJQUVBQyxTQUFTO1FBQ1AscUJBQ0UsOERBQUNiLCtDQUFJQTtZQUFDYyxNQUFLOzs4QkFDVCw4REFBQ2YsK0NBQUlBOztzQ0FDSCw4REFBQ2dCOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNKOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxNQUFLOzs7Ozs7c0NBRVAsOERBQUNKOzRCQUNDQyxLQUFJOzRCQUNKSSxPQUFNOzRCQUNOSCxNQUFLOzs7Ozs7c0NBRVAsOERBQUNGOzRCQUNDQyxLQUFJOzRCQUNKRyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOSCxNQUFLOzs7Ozs7c0NBRVAsOERBQUNGOzRCQUNDQyxLQUFJOzRCQUNKRyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOSCxNQUFLOzs7Ozs7c0NBRVAsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7c0NBQ3RCLDhEQUFDRjs0QkFBS0MsS0FBSTs0QkFBV0MsTUFBSzs7Ozs7O3NDQUUxQiw4REFBQ0k7NEJBQ0NDLE1BQUs7NEJBQ0xDLFNBQVE7Ozs7OztzQ0FHViw4REFBQ1I7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzRCQUNMTyxhQUFZOzs7Ozs7c0NBRWQsOERBQUNUOzRCQUNDRSxNQUFLOzRCQUNMRCxLQUFJOzs7Ozs7c0NBSU4sOERBQUNEOzRCQUNDQyxLQUFJOzRCQUNKRyxNQUFLOzRCQUNMTSxPQUFNOzRCQUNOUixNQUFLOzs7Ozs7Ozs7Ozs7OEJBR1QsOERBQUNTOztzQ0FDQyw4REFBQ3pCLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRjtBQUVBLGlFQUFlQyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3NsaW0vLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzP2M1MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIEh0bWwsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG4gICAgLy8gUnVuIHRoZSBSZWFjdCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseVxuICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICAgIC8vIFVzZWZ1bCBmb3Igd3JhcHBpbmcgdGhlIHdob2xlIHJlYWN0IHRyZWVcbiAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gQXBwLFxuICAgICAgICAvLyBVc2VmdWwgZm9yIHdyYXBwaW5nIGluIGEgcGVyLXBhZ2UgYmFzaXNcbiAgICAgICAgZW5oYW5jZUNvbXBvbmVudDogKENvbXBvbmVudCkgPT4gQ29tcG9uZW50LFxuICAgICAgfSk7XG5cbiAgICAvLyBSdW4gdGhlIHBhcmVudCBgZ2V0SW5pdGlhbFByb3BzYCwgaXQgbm93IGluY2x1ZGVzIHRoZSBjdXN0b20gYHJlbmRlclBhZ2VgXG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbFByb3BzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgICAgaHJlZj1cImZhdmljb24uaWNvXCJcbiAgICAgICAgICAgIGlkPVwiZmF2LXNob3J0Y3V0XCJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgaHJlZj1cImZhdmljb24uaWNvXCJcbiAgICAgICAgICAgIGlkPVwiZmF2LWljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgICAgaHJlZj1cImFwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgICBocmVmPVwiZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICAgIGhyZWY9XCJmYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCJtYW5pZmVzdC5qc29uXCIgLz5cblxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIktva3NhbCAmIFBhcnRuZXJzIEF0dG9ybmV5IFBhcnRuZXJzaGlwIC8gS8O2a3NhbCAmIFBhcnRuZXJzIEF2dWthdGzEsWsgT3J0YWtsxLHEn8SxXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cInRydWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogUlNTIEZlZWQgTGluayAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9yc3MreG1sXCJcbiAgICAgICAgICAgIHRpdGxlPVwiUlNTIEZlZWQgZm9yIEvDtmtzYWwgJiBQYXJ0bmVyc1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cua29rc2FscGFydG5lcnMuY29tL3Jzcy54bWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiSGVhZCIsIkh0bWwiLCJNYWluIiwiTmV4dFNjcmlwdCIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVuaGFuY2VDb21wb25lbnQiLCJDb21wb25lbnQiLCJpbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJsYW5nIiwibGluayIsInJlbCIsImhyZWYiLCJpZCIsInR5cGUiLCJzaXplcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImNyb3NzT3JpZ2luIiwidGl0bGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.js")));
module.exports = __webpack_exports__;

})();