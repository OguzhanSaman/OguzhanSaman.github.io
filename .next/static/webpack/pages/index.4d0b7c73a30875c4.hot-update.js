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

/***/ "./src/components/MainSlider/MainSliderThree.js":
/*!******************************************************!*\
  !*** ./src/components/MainSlider/MainSliderThree.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_mainSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/mainSlider */ \"./src/data/mainSlider.js\");\n/* harmony import */ var _hooks_useActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useActive */ \"./src/hooks/useActive.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _SingleSlideThree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SingleSlideThree */ \"./src/components/MainSlider/SingleSlideThree.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use([\n    swiper__WEBPACK_IMPORTED_MODULE_4__.EffectFade,\n    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,\n    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,\n    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay\n]);\nconst options = {\n    slidesPerView: 1,\n    loop: true,\n    effect: \"fade\",\n    pagination: {\n        el: \"#main-slider-pagination\",\n        type: \"bullets\",\n        clickable: true\n    },\n    navigation: {\n        nextEl: \"#main-slider__swiper-button-next\",\n        prevEl: \"#main-slider__swiper-button-prev\"\n    },\n    autoplay: {\n        delay: 5000\n    }\n};\nconst MainSliderThree = (param)=>{\n    let { id = \"\" } = param;\n    _s();\n    const ref = (0,_hooks_useActive__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"imageContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"../images/backgrounds/main-page-bg.png\",\n            alt: \"\"\n        }, void 0, false, {\n            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/MainSlider/MainSliderThree.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/MainSlider/MainSliderThree.js\",\n        lineNumber: 37,\n        columnNumber: 7\n    }, undefined);\n};\n_s(MainSliderThree, \"zsqCvnxHtS7RgLph3pWNK7y/N0Q=\", false, function() {\n    return [\n        _hooks_useActive__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = MainSliderThree;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainSliderThree);\nvar _c;\n$RefreshReg$(_c, \"MainSliderThree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluU2xpZGVyL01haW5TbGlkZXJUaHJlZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDVjtBQUNoQjtBQU1WO0FBQ21DO0FBQ0Q7QUFFbERHLGtEQUFjLENBQUM7SUFBQ0UsOENBQVVBO0lBQUVFLDhDQUFVQTtJQUFFRCw4Q0FBVUE7SUFBRUYsNENBQVFBO0NBQUM7QUFFN0QsTUFBTVEsVUFBVTtJQUNkQyxlQUFlO0lBQ2ZDLE1BQU07SUFDTkMsUUFBUTtJQUNSQyxZQUFZO1FBQ1ZDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxXQUFXO0lBQ2I7SUFDQUMsWUFBWTtRQUNWQyxRQUFRO1FBQ1JDLFFBQVE7SUFDVjtJQUNBQyxVQUFVO1FBQ1JDLE9BQU87SUFDVDtBQUNGO0FBRUEsTUFBTUMsa0JBQWtCO1FBQUMsRUFBRUMsS0FBSyxFQUFFLEVBQUU7O0lBQ2xDLE1BQU1DLE1BQU0xQiw0REFBU0EsQ0FBQ3lCO0lBRXRCLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJQyxLQUFJO1lBQXlDQyxLQUFJOzs7Ozs7Ozs7OztBQUc5RDtHQVJNUDs7UUFDUXhCLHdEQUFTQTs7O0tBRGpCd0I7QUFVTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluU2xpZGVyL01haW5TbGlkZXJUaHJlZS5qcz8yYmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1haW5TbGlkZXJUaHJlZSB9IGZyb20gXCJAL2RhdGEvbWFpblNsaWRlclwiO1xuaW1wb3J0IHVzZUFjdGl2ZSBmcm9tIFwiQC9ob29rcy91c2VBY3RpdmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTd2lwZXJDb3JlLCB7XG4gIEF1dG9wbGF5LFxuICBFZmZlY3RGYWRlLFxuICBOYXZpZ2F0aW9uLFxuICBQYWdpbmF0aW9uLFxufSBmcm9tIFwic3dpcGVyXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IFNpbmdsZVNsaWRlVGhyZWUgZnJvbSBcIi4vU2luZ2xlU2xpZGVUaHJlZVwiO1xuXG5Td2lwZXJDb3JlLnVzZShbRWZmZWN0RmFkZSwgUGFnaW5hdGlvbiwgTmF2aWdhdGlvbiwgQXV0b3BsYXldKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgbG9vcDogdHJ1ZSxcbiAgZWZmZWN0OiBcImZhZGVcIixcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIiNtYWluLXNsaWRlci1wYWdpbmF0aW9uXCIsXG4gICAgdHlwZTogXCJidWxsZXRzXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIiNtYWluLXNsaWRlcl9fc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIiNtYWluLXNsaWRlcl9fc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDUwMDAsXG4gIH0sXG59O1xuXG5jb25zdCBNYWluU2xpZGVyVGhyZWUgPSAoeyBpZCA9IFwiXCIgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VBY3RpdmUoaWQpO1xuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlQ29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2JhY2tncm91bmRzL21haW4tcGFnZS1iZy5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2xpZGVyVGhyZWU7XG4iXSwibmFtZXMiOlsibWFpblNsaWRlclRocmVlIiwidXNlQWN0aXZlIiwiUmVhY3QiLCJTd2lwZXJDb3JlIiwiQXV0b3BsYXkiLCJFZmZlY3RGYWRlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlNpbmdsZVNsaWRlVGhyZWUiLCJ1c2UiLCJvcHRpb25zIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJlZmZlY3QiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImF1dG9wbGF5IiwiZGVsYXkiLCJNYWluU2xpZGVyVGhyZWUiLCJpZCIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MainSlider/MainSliderThree.js\n"));

/***/ })

});