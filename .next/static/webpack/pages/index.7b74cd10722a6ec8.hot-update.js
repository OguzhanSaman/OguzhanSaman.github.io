"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/MainHeader.js":
/*!*********************************************!*\
  !*** ./src/components/Header/MainHeader.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/context */ \"./src/context/context.js\");\n/* harmony import */ var _data_headerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/headerData */ \"./src/data/headerData.js\");\n/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useScroll */ \"./src/hooks/useScroll.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Image_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Image!=!react-bootstrap */ \"__barrel_optimize__?names=Image!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuList */ \"./src/components/Header/MenuList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst { navItems: items, callText, phone, phoneHref, logo, logoblck } = _data_headerData__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nconst MainHeader = (param)=>{\n    let { mainMenuClass = \"\", navItems = items, onePage = false } = param;\n    _s();\n    const [scrollColor, setScrollColor] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // Initialize scrollColor to true\n    const { scrollTop } = (0,_hooks_useScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\n    const { toggleMenu, toggleSearch } = (0,_context_context__WEBPACK_IMPORTED_MODULE_1__.useRootContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (scrollTop > 0) {\n            setScrollColor(true); // Set scrollColor to false when the user starts scrolling\n        } else {\n            setScrollColor(false); // Set scrollColor to true when the user is at the top of the page\n        }\n    }, [\n        scrollTop\n    ]);\n    const handleToggleSearch = ()=>{\n        toggleSearch();\n        toggleMenu(false);\n        document.body.classList.toggle(\"locked\");\n    };\n    const handleToggleMenu = ()=>{\n        document.body.classList.toggle(\"locked\");\n        toggleMenu();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"main-header clearfix\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"\".concat(scrollColor ? \"stricky-header stricked-menu stricky-fixed slideInDown\" : \"slideIn\", \" main-menu \").concat(mainMenuClass, \" animated clearfix\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-menu-wrapper clearfix\".concat(scrollColor ? \" sticky-header__content\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main-menu-wrapper__left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main-menu-wrapper__logo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Image_react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Image, {\n                                    src: scrollColor ? logo.src : logoblck.src,\n                                    alt: \"K\\xf6ksal Partners Logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main-menu-wrapper__main-menu-ent\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    onClick: handleToggleMenu,\n                                    className: \"mobile-nav__toggler\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fa fa-bars\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    navItems: navItems,\n                                    scrollColor: scrollColor\n                                }, void 0, false, {\n                                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Header/MainHeader.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainHeader, \"+rTxCCiwfmLTVVy7SGepyV5RMQU=\", false, function() {\n    return [\n        _hooks_useScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _context_context__WEBPACK_IMPORTED_MODULE_1__.useRootContext\n    ];\n});\n_c = MainHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainHeader);\nvar _c;\n$RefreshReg$(_c, \"MainHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvTWFpbkhlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNSO0FBQ0Q7QUFDUztBQUNYO0FBQ1g7QUFDSztBQUVsQyxNQUFNLEVBQUVTLFVBQVVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FBR2Qsd0RBQVVBO0FBR2xGLE1BQU1lLGFBQWE7UUFBQyxFQUFFQyxnQkFBZ0IsRUFBRSxFQUFFUixXQUFXQyxLQUFLLEVBQUVRLFVBQVUsS0FBSyxFQUFFOztJQUMzRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDLFFBQVEsaUNBQWlDO0lBQ3hGLE1BQU0sRUFBRWlCLFNBQVMsRUFBRSxHQUFHbkIsNERBQVNBLENBQUM7SUFDaEMsTUFBTSxFQUFFb0IsVUFBVSxFQUFFQyxZQUFZLEVBQUUsR0FBR3ZCLGdFQUFjQTtJQUVuREssZ0RBQVNBLENBQUM7UUFDUixJQUFJZ0IsWUFBWSxHQUFHO1lBQ2pCRCxlQUFlLE9BQU8sMERBQTBEO1FBQ2xGLE9BQU87WUFDTEEsZUFBZSxRQUFRLGtFQUFrRTtRQUMzRjtJQUNGLEdBQUc7UUFBQ0M7S0FBVTtJQUVkLE1BQU1HLHFCQUFxQjtRQUN6QkQ7UUFDQUQsV0FBVztRQUNYRyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO0lBQ2pDO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCSixTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQy9CTjtJQUNGO0lBRUEscUJBQ0UsOERBQUNRO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUNDRCxXQUFXLEdBSUdkLE9BSFpFLGNBQ0ksMkRBQ0EsV0FDTCxlQUEyQixPQUFkRixlQUFjO3NCQUU1Qiw0RUFBQ2dCO2dCQUNDRixXQUFXLDZCQUVWLE9BRENaLGNBQWMsNEJBQTRCOzBCQUc1Qyw0RUFBQ2M7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBSUYsV0FBVTtzQ0FDYiw0RUFBQ3hCLGtEQUFJQTtnQ0FBQzJCLE1BQUs7MENBQ1QsNEVBQUM1QiwrRUFBS0E7b0NBQUM2QixLQUFLaEIsY0FBY0wsS0FBS3FCLEdBQUcsR0FBR3BCLFNBQVNvQixHQUFHO29DQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUczRCw4REFBQ0g7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FBRUMsU0FBU1Q7b0NBQWtCRSxXQUFVOzhDQUN0Qyw0RUFBQ1E7d0NBQUVSLFdBQVU7Ozs7Ozs7Ozs7OzhDQUVmLDhEQUFDdkIsaURBQVFBO29DQUFDQyxVQUFVQTtvQ0FBVVUsYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96RDtHQXZETUg7O1FBRWtCZCx3REFBU0E7UUFDTUYsNERBQWNBOzs7S0FIL0NnQjtBQXlETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvTWFpbkhlYWRlci5qcz80M2ViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvb3RDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgaGVhZGVyRGF0YSBmcm9tIFwiQC9kYXRhL2hlYWRlckRhdGFcIjtcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIkAvaG9va3MvdXNlU2Nyb2xsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIi4vTWVudUxpc3RcIjtcblxuY29uc3QgeyBuYXZJdGVtczogaXRlbXMsIGNhbGxUZXh0LCBwaG9uZSwgcGhvbmVIcmVmLCBsb2dvLCBsb2dvYmxjayB9ID0gaGVhZGVyRGF0YTtcblxuXG5jb25zdCBNYWluSGVhZGVyID0gKHsgbWFpbk1lbnVDbGFzcyA9IFwiXCIsIG5hdkl0ZW1zID0gaXRlbXMsIG9uZVBhZ2UgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxDb2xvciwgc2V0U2Nyb2xsQ29sb3JdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBJbml0aWFsaXplIHNjcm9sbENvbG9yIHRvIHRydWVcbiAgY29uc3QgeyBzY3JvbGxUb3AgfSA9IHVzZVNjcm9sbCgxMDApO1xuICBjb25zdCB7IHRvZ2dsZU1lbnUsIHRvZ2dsZVNlYXJjaCB9ID0gdXNlUm9vdENvbnRleHQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxUb3AgPiAwKSB7XG4gICAgICBzZXRTY3JvbGxDb2xvcih0cnVlKTsgLy8gU2V0IHNjcm9sbENvbG9yIHRvIGZhbHNlIHdoZW4gdGhlIHVzZXIgc3RhcnRzIHNjcm9sbGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTY3JvbGxDb2xvcihmYWxzZSk7IC8vIFNldCBzY3JvbGxDb2xvciB0byB0cnVlIHdoZW4gdGhlIHVzZXIgaXMgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgIH1cbiAgfSwgW3Njcm9sbFRvcF0pO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVNlYXJjaCA9ICgpID0+IHtcbiAgICB0b2dnbGVTZWFyY2goKTtcbiAgICB0b2dnbGVNZW51KGZhbHNlKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsb2NrZWRcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsb2NrZWRcIik7XG4gICAgdG9nZ2xlTWVudSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBjbGVhcmZpeFwiPlxuICAgICAgPG5hdlxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIHNjcm9sbENvbG9yXG4gICAgICAgICAgICA/IFwic3RyaWNreS1oZWFkZXIgc3RyaWNrZWQtbWVudSBzdHJpY2t5LWZpeGVkIHNsaWRlSW5Eb3duXCJcbiAgICAgICAgICAgIDogXCJzbGlkZUluXCJcbiAgICAgICAgfSBtYWluLW1lbnUgJHttYWluTWVudUNsYXNzfSBhbmltYXRlZCBjbGVhcmZpeGB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BtYWluLW1lbnUtd3JhcHBlciBjbGVhcmZpeCR7XG4gICAgICAgICAgICBzY3JvbGxDb2xvciA/IFwiIHN0aWNreS1oZWFkZXJfX2NvbnRlbnRcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1tZW51LXdyYXBwZXJfX2xlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1tZW51LXdyYXBwZXJfX2xvZ29cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzY3JvbGxDb2xvciA/IGxvZ28uc3JjIDogbG9nb2JsY2suc3JjfSBhbHQ9XCJLw7Zrc2FsIFBhcnRuZXJzIExvZ29cIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1tZW51LXdyYXBwZXJfX21haW4tbWVudS1lbnRcIj5cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlVG9nZ2xlTWVudX0gY2xhc3NOYW1lPVwibW9iaWxlLW5hdl9fdG9nZ2xlclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPE1lbnVMaXN0IG5hdkl0ZW1zPXtuYXZJdGVtc30gc2Nyb2xsQ29sb3I9e3Njcm9sbENvbG9yfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVJvb3RDb250ZXh0IiwiaGVhZGVyRGF0YSIsInVzZVNjcm9sbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxpbmsiLCJNZW51TGlzdCIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJjYWxsVGV4dCIsInBob25lIiwicGhvbmVIcmVmIiwibG9nbyIsImxvZ29ibGNrIiwiTWFpbkhlYWRlciIsIm1haW5NZW51Q2xhc3MiLCJvbmVQYWdlIiwic2Nyb2xsQ29sb3IiLCJzZXRTY3JvbGxDb2xvciIsInNjcm9sbFRvcCIsInRvZ2dsZU1lbnUiLCJ0b2dnbGVTZWFyY2giLCJoYW5kbGVUb2dnbGVTZWFyY2giLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoYW5kbGVUb2dnbGVNZW51IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwiZGl2IiwiaHJlZiIsInNyYyIsImFsdCIsImEiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/MainHeader.js\n"));

/***/ })

});