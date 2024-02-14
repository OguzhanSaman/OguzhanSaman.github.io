"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ekip",{

/***/ "./src/components/TeamSection/TeamPopup.js":
/*!*************************************************!*\
  !*** ./src/components/TeamSection/TeamPopup.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Modal_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!react-bootstrap */ \"__barrel_optimize__?names=Modal!=!./node_modules/react-bootstrap/esm/index.js\");\n\n\n\nconst TeamPopup = (param)=>{\n    let { isOpen, onClose, team } = param;\n    const { name, title, cv, educationAndExpertise, languagesAndMemberships, image, linkedin } = team;\n    const handleClose = ()=>{\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n        show: isOpen,\n        onHide: handleClose,\n        centered: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {\n                closeButton: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: __webpack_require__(\"./src/assets/images/team sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(image)).default.src,\n                            alt: name,\n                            style: {\n                                maxWidth: \"50%\",\n                                maxHeight: \"400px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"placeholder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"placeholder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-unstyled team-one__social\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: linkedin,\n                                target: \"_blank\",\n                                rel: \"noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fab fa-linkedin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                children: \"Eğitim ve Uzmanlık Alanları\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            educationAndExpertise && educationAndExpertise.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: educationAndExpertise.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: item\n                                    }, index, false, {\n                                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No education and expertise areas provided.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                children: \"Yabancı Diller & \\xdcyelikler\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            languagesAndMemberships && languagesAndMemberships.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: languagesAndMemberships.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: item\n                                    }, index, false, {\n                                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No foreign languages and memberships provided.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/TeamSection/TeamPopup.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TeamPopup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamPopup);\nvar _c;\n$RefreshReg$(_c, \"TeamPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWFtU2VjdGlvbi9UZWFtUG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNjO0FBRXhDLE1BQU1FLFlBQVk7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0lBQzFDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEVBQUUsRUFBRUMscUJBQXFCLEVBQUVDLHVCQUF1QixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHUDtJQUU3RixNQUFNUSxjQUFjO1FBQ2xCVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNILCtFQUFLQTtRQUFDYSxNQUFNWDtRQUFRWSxRQUFRRjtRQUFhRyxRQUFROzswQkFDaEQsOERBQUNmLCtFQUFLQSxDQUFDZ0IsTUFBTTtnQkFBQ0MsV0FBVzswQkFDdkIsNEVBQUNqQiwrRUFBS0EsQ0FBQ2tCLEtBQUs7OEJBQUViOzs7Ozs7Ozs7OzswQkFFaEIsOERBQUNMLCtFQUFLQSxDQUFDbUIsSUFBSTs7a0NBQ1QsOERBQUNDO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUMsS0FBS0MsMEVBQVEsS0FBdUIsT0FBTmQsTUFBQUEsQ0FBQUEsQ0FBU2UsT0FBTyxDQUFDRixHQUFHOzRCQUFFRyxLQUFLckI7NEJBQU1zQixPQUFPO2dDQUFFQyxVQUFVO2dDQUFPQyxXQUFXOzRCQUFROzs7Ozs7Ozs7OztrQ0FFbkgsOERBQUNUO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNTO2tDQUFJeEI7Ozs7OztrQ0FDTCw4REFBQ2M7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ1U7d0JBQUdWLFdBQVU7a0NBQ1YsNEVBQUNXO3NDQUNHLDRFQUFDQztnQ0FBRUMsTUFBTXZCO2dDQUFVd0IsUUFBTztnQ0FBU0MsS0FBSTswQ0FDbkMsNEVBQUNDO29DQUFFaEIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl6Qiw4REFBQ0Q7OzBDQUNDLDhEQUFDa0I7MENBQUc7Ozs7Ozs0QkFDSDlCLHlCQUF5QkEsc0JBQXNCK0IsTUFBTSxHQUFHLGtCQUN2RCw4REFBQ1I7MENBQ0V2QixzQkFBc0JnQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hDLDhEQUFDVjtrREFBZ0JTO3VDQUFSQzs7Ozs7Ozs7OzBEQUliLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUdQLDhEQUFDdkI7OzBDQUNDLDhEQUFDa0I7MENBQUc7Ozs7Ozs0QkFDSDdCLDJCQUEyQkEsd0JBQXdCOEIsTUFBTSxHQUFHLGtCQUMzRCw4REFBQ1I7MENBQ0V0Qix3QkFBd0IrQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xDLDhEQUFDVjtrREFBZ0JTO3VDQUFSQzs7Ozs7Ozs7OzBEQUliLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7S0FyRE0xQztBQXVETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UZWFtU2VjdGlvbi9UZWFtUG9wdXAuanM/NjAzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgVGVhbVBvcHVwID0gKHsgaXNPcGVuLCBvbkNsb3NlLCB0ZWFtIH0pID0+IHtcbiAgY29uc3QgeyBuYW1lLCB0aXRsZSwgY3YsIGVkdWNhdGlvbkFuZEV4cGVydGlzZSwgbGFuZ3VhZ2VzQW5kTWVtYmVyc2hpcHMsIGltYWdlLCBsaW5rZWRpbiB9ID0gdGVhbTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgc2hvdz17aXNPcGVufSBvbkhpZGU9e2hhbmRsZUNsb3NlfSBjZW50ZXJlZD5cbiAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgIDxNb2RhbC5UaXRsZT57bmFtZX08L01vZGFsLlRpdGxlPlxuICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKGBAL2ltYWdlcy90ZWFtLyR7aW1hZ2V9YCkuZGVmYXVsdC5zcmN9IGFsdD17bmFtZX0gc3R5bGU9e3sgbWF4V2lkdGg6IFwiNTAlXCIsIG1heEhlaWdodDogXCI0MDBweFwiIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyXCI+PC9kaXY+XG4gICAgICAgIDxoNT57dGl0bGV9PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlclwiPjwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCB0ZWFtLW9uZV9fc29jaWFsXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua2VkaW59IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg2PkXEn2l0aW0gdmUgVXptYW5sxLFrIEFsYW5sYXLEsTwvaDY+XG4gICAgICAgICAge2VkdWNhdGlvbkFuZEV4cGVydGlzZSAmJiBlZHVjYXRpb25BbmRFeHBlcnRpc2UubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2VkdWNhdGlvbkFuZEV4cGVydGlzZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+Tm8gZWR1Y2F0aW9uIGFuZCBleHBlcnRpc2UgYXJlYXMgcHJvdmlkZWQuPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNj5ZYWJhbmPEsSBEaWxsZXIgJiDDnHllbGlrbGVyPC9oNj5cbiAgICAgICAgICB7bGFuZ3VhZ2VzQW5kTWVtYmVyc2hpcHMgJiYgbGFuZ3VhZ2VzQW5kTWVtYmVyc2hpcHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2xhbmd1YWdlc0FuZE1lbWJlcnNoaXBzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5ObyBmb3JlaWduIGxhbmd1YWdlcyBhbmQgbWVtYmVyc2hpcHMgcHJvdmlkZWQuPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtUG9wdXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIlRlYW1Qb3B1cCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJ0ZWFtIiwibmFtZSIsInRpdGxlIiwiY3YiLCJlZHVjYXRpb25BbmRFeHBlcnRpc2UiLCJsYW5ndWFnZXNBbmRNZW1iZXJzaGlwcyIsImltYWdlIiwibGlua2VkaW4iLCJoYW5kbGVDbG9zZSIsInNob3ciLCJvbkhpZGUiLCJjZW50ZXJlZCIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicmVxdWlyZSIsImRlZmF1bHQiLCJhbHQiLCJzdHlsZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiaDUiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJpIiwiaDYiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TeamSection/TeamPopup.js\n"));

/***/ })

});