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

/***/ "./src/components/NewsSection/NewsDetailsLeft.js":
/*!*******************************************************!*\
  !*** ./src/components/NewsSection/NewsDetailsLeft.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Image_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Image!=!react-bootstrap */ \"__barrel_optimize__?names=Image!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _Reuseable_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Reuseable/Link */ \"./src/components/Reuseable/Link.js\");\n\n\n\n\nconst NewsDetailsLeft = (param)=>{\n    let { news = {} } = param;\n    const { image, subtitle, date, title, text, dynamicContent, author, tags } = news;\n    const renderDynamicContent = ()=>{\n        return dynamicContent.map((item, index, title)=>{\n            if (item.type === \"paragraph\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.content\n                }, index, false, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                    lineNumber: 20,\n                    columnNumber: 16\n                }, undefined);\n            } else if (item.type === \"list\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: item.content.map((listItem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: listItem\n                        }, idx, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, undefined))\n                }, index, false, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined);\n            } else if (item.type === \"header\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: item.content\n                }, index, false, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                    lineNumber: 30,\n                    columnNumber: 16\n                }, undefined);\n            } else if (item.type === \"subheader\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: item.content\n                }, index, false, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                    lineNumber: 32,\n                    columnNumber: 16\n                }, undefined);\n            } else if (item.type === \"image\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    src: item.content.src,\n                    alt: title\n                }, index, false, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                    lineNumber: 34,\n                    columnNumber: 16\n                }, undefined);\n            } else {\n                // Handle other types if needed\n                return null;\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"news-details__left\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"news-details__img\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    src: image.src,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"news-details__content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"news-details__sub-title\",\n                        children: subtitle\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-unstyled news-details__meta\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Reuseable_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/blog-details\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"far fa-clock\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \" \",\n                                        date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"news-details__title\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"news-details__text-1\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    renderDynamicContent()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"news-details__bottom\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"news-details__tags\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Tags\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        tags.map((tag, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: tag\n                            }, i, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/NewsSection/NewsDetailsLeft.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewsDetailsLeft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsDetailsLeft);\nvar _c;\n$RefreshReg$(_c, \"NewsDetailsLeft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdzU2VjdGlvbi9OZXdzRGV0YWlsc0xlZnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNIO0FBRXJDLE1BQU1HLGtCQUFrQjtRQUFDLEVBQUVDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7SUFDcEMsTUFBTSxFQUNKQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsY0FBYyxFQUNkQyxNQUFNLEVBQ05DLElBQUksRUFDTCxHQUFHUjtJQUVKLE1BQU1TLHVCQUF1QjtRQUMzQixPQUFPSCxlQUFlSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsT0FBT1I7WUFDdEMsSUFBSU8sS0FBS0UsSUFBSSxLQUFLLGFBQWE7Z0JBQzdCLHFCQUFPLDhEQUFDQzs4QkFBZUgsS0FBS0ksT0FBTzttQkFBcEJIOzs7OztZQUNqQixPQUFPLElBQUlELEtBQUtFLElBQUksS0FBSyxRQUFRO2dCQUMvQixxQkFDRSw4REFBQ0c7OEJBQ0VMLEtBQUtJLE9BQU8sQ0FBQ0wsR0FBRyxDQUFDLENBQUNPLFVBQVVDLG9CQUMzQiw4REFBQ0M7c0NBQWNGOzJCQUFOQzs7Ozs7bUJBRkpOOzs7OztZQU1iLE9BQU8sSUFBSUQsS0FBS0UsSUFBSSxLQUFLLFVBQVU7Z0JBQ2pDLHFCQUFPLDhEQUFDTzs4QkFBZ0JULEtBQUtJLE9BQU87bUJBQXBCSDs7Ozs7WUFDbEIsT0FBTyxJQUFJRCxLQUFLRSxJQUFJLEtBQUssYUFBYTtnQkFDcEMscUJBQU8sOERBQUNROzhCQUFnQlYsS0FBS0ksT0FBTzttQkFBcEJIOzs7OztZQUNsQixPQUFPLElBQUlELEtBQUtFLElBQUksS0FBSyxTQUFTO2dCQUNoQyxxQkFBTyw4REFBQ2hCLCtFQUFLQTtvQkFBYXlCLEtBQUtYLEtBQUtJLE9BQU8sQ0FBQ08sR0FBRztvQkFBRUMsS0FBS25CO21CQUFuQ1E7Ozs7O1lBQ3JCLE9BQU87Z0JBQ0wsK0JBQStCO2dCQUMvQixPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzVCLCtFQUFLQTtvQkFBQ3lCLEtBQUtyQixNQUFNcUIsR0FBRztvQkFBRUMsS0FBSTs7Ozs7Ozs7Ozs7MEJBRTdCLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNYO3dCQUFFVyxXQUFVO2tDQUEyQnZCOzs7Ozs7a0NBQ3hDLDhEQUFDYzt3QkFBR1MsV0FBVTs7MENBQ1osOERBQUNOOzBDQUNDLDRFQUFDckIsdURBQUlBO29DQUFDNEIsTUFBSzs7c0RBQ1QsOERBQUNDOzRDQUFFRixXQUFVOzs7Ozs7d0NBQW1CO3dDQUFFdEI7Ozs7Ozs7Ozs7OzswQ0FHdEMsOERBQUNnQjswQ0FDQyw0RUFBQ1M7OENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdWLDhEQUFDQzt3QkFBR0osV0FBVTtrQ0FBdUJyQjs7Ozs7O2tDQUNyQyw4REFBQ1U7d0JBQUVXLFdBQVU7a0NBQXdCcEI7Ozs7OztvQkFDcENJOzs7Ozs7OzBCQUVILDhEQUFDZTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1g7b0JBQUVXLFdBQVU7O3NDQUNYLDhEQUFDRztzQ0FBSzs7Ozs7O3dCQUNMcEIsS0FBS0UsR0FBRyxDQUFDLENBQUNvQixLQUFLSCxrQkFDZCw4REFBQ0k7Z0NBQUVMLE1BQUs7MENBQ0xJOytCQURjSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3QjtLQXRFTTVCO0FBd0VOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05ld3NTZWN0aW9uL05ld3NEZXRhaWxzTGVmdC5qcz9lMGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL1JldXNlYWJsZS9MaW5rXCI7XG5cbmNvbnN0IE5ld3NEZXRhaWxzTGVmdCA9ICh7IG5ld3MgPSB7fSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpbWFnZSxcbiAgICBzdWJ0aXRsZSxcbiAgICBkYXRlLFxuICAgIHRpdGxlLFxuICAgIHRleHQsXG4gICAgZHluYW1pY0NvbnRlbnQsXG4gICAgYXV0aG9yLFxuICAgIHRhZ3MsXG4gIH0gPSBuZXdzO1xuXG4gIGNvbnN0IHJlbmRlckR5bmFtaWNDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBkeW5hbWljQ29udGVudC5tYXAoKGl0ZW0sIGluZGV4LCB0aXRsZSkgPT4ge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJwYXJhZ3JhcGhcIikge1xuICAgICAgICByZXR1cm4gPHAga2V5PXtpbmRleH0+e2l0ZW0uY29udGVudH08L3A+O1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHVsIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2l0ZW0uY29udGVudC5tYXAoKGxpc3RJdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT57bGlzdEl0ZW19PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gXCJoZWFkZXJcIikge1xuICAgICAgICByZXR1cm4gPGg0IGtleT17aW5kZXh9PntpdGVtLmNvbnRlbnR9PC9oND47XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gXCJzdWJoZWFkZXJcIikge1xuICAgICAgICByZXR1cm4gPGg1IGtleT17aW5kZXh9PntpdGVtLmNvbnRlbnR9PC9oNT47XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgIHJldHVybiA8SW1hZ2Uga2V5PXtpbmRleH0gc3JjPXtpdGVtLmNvbnRlbnQuc3JjfSBhbHQ9e3RpdGxlfSAvPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBvdGhlciB0eXBlcyBpZiBuZWVkZWRcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtZGV0YWlsc19fbGVmdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWRldGFpbHNfX2ltZ1wiPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZS5zcmN9IGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1kZXRhaWxzX19jb250ZW50XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ld3MtZGV0YWlsc19fc3ViLXRpdGxlXCI+e3N1YnRpdGxlfTwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgbmV3cy1kZXRhaWxzX19tZXRhXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCI+PC9pPiB7ZGF0ZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPi88L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5ld3MtZGV0YWlsc19fdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3cy1kZXRhaWxzX190ZXh0LTFcIj57dGV4dH08L3A+XG4gICAgICAgIHtyZW5kZXJEeW5hbWljQ29udGVudCgpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtZGV0YWlsc19fYm90dG9tXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ld3MtZGV0YWlsc19fdGFnc1wiPlxuICAgICAgICAgIDxzcGFuPlRhZ3M8L3NwYW4+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGkpID0+IChcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzRGV0YWlsc0xlZnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkxpbmsiLCJOZXdzRGV0YWlsc0xlZnQiLCJuZXdzIiwiaW1hZ2UiLCJzdWJ0aXRsZSIsImRhdGUiLCJ0aXRsZSIsInRleHQiLCJkeW5hbWljQ29udGVudCIsImF1dGhvciIsInRhZ3MiLCJyZW5kZXJEeW5hbWljQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInR5cGUiLCJwIiwiY29udGVudCIsInVsIiwibGlzdEl0ZW0iLCJpZHgiLCJsaSIsImg0IiwiaDUiLCJzcmMiLCJhbHQiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaSIsInNwYW4iLCJoMyIsInRhZyIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NewsSection/NewsDetailsLeft.js\n"));

/***/ })

});