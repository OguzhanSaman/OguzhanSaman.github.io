"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/iletisim",{

/***/ "./src/data/headerData.js":
/*!********************************!*\
  !*** ./src/data/headerData.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navItems: function() { return /* binding */ navItems; },\n/* harmony export */   servicesSubNavItems: function() { return /* binding */ servicesSubNavItems; }\n/* harmony export */ });\n/* harmony import */ var _images_resources_koksalpartnerslogowh_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/images/resources/koksalpartnerslogowh.png */ \"./src/assets/images/resources/koksalpartnerslogowh.png\");\n/* harmony import */ var _images_resources_koksalpartnerslogobl_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/images/resources/koksalpartnerslogobl.png */ \"./src/assets/images/resources/koksalpartnerslogobl.png\");\n\n\nconst home = {\n    id: 1,\n    name: \"Ana Sayfa\",\n    href: \"/\"\n};\nconst servicesSubNavItems = [\n    {\n        id: 1,\n        name: \"Services\",\n        href: \"/hizmetler\"\n    },\n    {\n        id: 2,\n        name: \"Services Two\",\n        href: \"/services-2\"\n    },\n    {\n        id: 3,\n        name: \"Services Three\",\n        href: \"/services-3\"\n    },\n    {\n        id: 4,\n        name: \"Kişisel Verilerin Korunması\",\n        href: \"/kisisel-verilerin-korunmasi\"\n    },\n    {\n        id: 5,\n        name: \"Bilişim Hukuku\",\n        href: \"/bilisim-hukuku\"\n    },\n    {\n        id: 6,\n        name: \"İş Hukuku\",\n        href: \"/is-hukuku\"\n    },\n    {\n        id: 7,\n        name: \"Şirketler ve S\\xf6zleşmeler Hukuku\",\n        href: \"/sirketler-ve-sozlesmeler-hukuku\"\n    },\n    {\n        id: 8,\n        name: \"Gayrimenkul ve İnşaat Hukuku\",\n        href: \"gayrimenkul-ve-insaat-hukuku\"\n    },\n    {\n        id: 9,\n        name: \"Telekominikasyon Hukuku\",\n        href: \"/telekominikasyon-hukuku\"\n    }\n];\nconst navItems = [\n    home,\n    {\n        id: 3,\n        name: \"Hakkımızda\",\n        href: \"/hakkimizda\",\n        subNavItems: []\n    },\n    {\n        id: 6,\n        name: \"Ekibimiz\",\n        href: \"/ekip\"\n    },\n    {\n        id: 2,\n        name: \"\\xc7alışma Alanlarımız\",\n        href: \"/hizmetler\"\n    },\n    {\n        id: 5,\n        name: \"Haberler ve Yayınlar\",\n        href: \"/haberler-ve-yayinlar\"\n    },\n    {\n        id: 7,\n        name: \"İletişim\",\n        href: \"/iletisim\",\n        subNavItems: [\n            // { id: 3, name: \"Testimonials\", href: \"/testimonials\" },\n            // { id: 1, name: \"SSS\", href: \"/faq\" },\n            {\n                id: 2,\n                name: \"Kariyer\",\n                href: \"/kariyer\"\n            }\n        ]\n    }\n];\nconst socials = [\n    {\n        id: 1,\n        icon: \"fab fa-twitter\",\n        href: \"#\"\n    },\n    {\n        id: 2,\n        icon: \"fab fa-facebook-square\",\n        href: \"#\"\n    },\n    {\n        id: 3,\n        icon: \"fab fa-pinterest-p\",\n        href: \"#\"\n    },\n    {\n        id: 4,\n        icon: \"fab fa-instagram\",\n        href: \"#\"\n    }\n];\nconst headerData = {\n    logo: _images_resources_koksalpartnerslogowh_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    logoblck: _images_resources_koksalpartnerslogobl_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    navItems,\n    socials\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9oZWFkZXJEYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0Q7QUFDSTtBQUVuRSxNQUFNRSxPQUFPO0lBQ1hDLElBQUk7SUFDSkMsTUFBTTtJQUNOQyxNQUFNO0FBQ1I7QUFFTyxNQUFNQyxzQkFBc0I7SUFDakM7UUFBRUgsSUFBSTtRQUFHQyxNQUFNO1FBQVlDLE1BQU07SUFBYTtJQUM5QztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBZ0JDLE1BQU07SUFBYztJQUNuRDtRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBa0JDLE1BQU07SUFBYztJQUNyRDtRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBK0JDLE1BQU07SUFBK0I7SUFDbkY7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWtCQyxNQUFNO0lBQWtCO0lBQ3pEO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFhQyxNQUFNO0lBQWE7SUFDL0M7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQW1DQyxNQUFNO0lBQW1DO0lBQzNGO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFnQ0MsTUFBTTtJQUErQjtJQUNwRjtRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBMkJDLE1BQU07SUFBMkI7Q0FDNUUsQ0FBQztBQUVLLE1BQU1FLFdBQVc7SUFDdEJMO0lBQ0E7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkcsYUFBYSxFQUVaO0lBQ0g7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUVBO1FBQ0VGLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFFQTtRQUNFRixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNORyxhQUFhO1lBQ1gsMERBQTBEO1lBQzFELHdDQUF3QztZQUN4QztnQkFBRUwsSUFBSTtnQkFBR0MsTUFBTTtnQkFBV0MsTUFBTTtZQUFXO1NBQzVDO0lBQ0g7Q0FDRCxDQUFDO0FBRUYsTUFBTUksVUFBVTtJQUNkO1FBQ0VOLElBQUk7UUFDSk8sTUFBTTtRQUNOTCxNQUFNO0lBQ1I7SUFDQTtRQUNFRixJQUFJO1FBQ0pPLE1BQU07UUFDTkwsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsSUFBSTtRQUNKTyxNQUFNO1FBQ05MLE1BQU07SUFDUjtJQUNBO1FBQ0VGLElBQUk7UUFDSk8sTUFBTTtRQUNOTCxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1NLGFBQWE7SUFDakJYLElBQUlBLG9GQUFBQTtJQUNKQyxRQUFRQSxvRkFBQUE7SUFDUk07SUFDQUU7QUFDRjtBQUVBLCtEQUFlRSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9kYXRhL2hlYWRlckRhdGEuanM/N2YyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nbyBmcm9tIFwiQC9pbWFnZXMvcmVzb3VyY2VzL2tva3NhbHBhcnRuZXJzbG9nb3doLnBuZ1wiO1xuaW1wb3J0IGxvZ29ibGNrIGZyb20gXCJAL2ltYWdlcy9yZXNvdXJjZXMva29rc2FscGFydG5lcnNsb2dvYmwucG5nXCI7XG5cbmNvbnN0IGhvbWUgPSB7XG4gIGlkOiAxLFxuICBuYW1lOiBcIkFuYSBTYXlmYVwiLFxuICBocmVmOiBcIi9cIixcbn07XG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlc1N1Yk5hdkl0ZW1zID0gW1xuICB7IGlkOiAxLCBuYW1lOiBcIlNlcnZpY2VzXCIsIGhyZWY6IFwiL2hpem1ldGxlclwiIH0sXG4gIHsgaWQ6IDIsIG5hbWU6IFwiU2VydmljZXMgVHdvXCIsIGhyZWY6IFwiL3NlcnZpY2VzLTJcIiB9LFxuICB7IGlkOiAzLCBuYW1lOiBcIlNlcnZpY2VzIFRocmVlXCIsIGhyZWY6IFwiL3NlcnZpY2VzLTNcIiB9LFxuICB7IGlkOiA0LCBuYW1lOiBcIktpxZ9pc2VsIFZlcmlsZXJpbiBLb3J1bm1hc8SxXCIsIGhyZWY6IFwiL2tpc2lzZWwtdmVyaWxlcmluLWtvcnVubWFzaVwiIH0sXG4gIHsgaWQ6IDUsIG5hbWU6IFwiQmlsacWfaW0gSHVrdWt1XCIsIGhyZWY6IFwiL2JpbGlzaW0taHVrdWt1XCIgfSxcbiAgeyBpZDogNiwgbmFtZTogXCLEsMWfIEh1a3VrdVwiLCBocmVmOiBcIi9pcy1odWt1a3VcIiB9LFxuICB7IGlkOiA3LCBuYW1lOiBcIsWeaXJrZXRsZXIgdmUgU8O2emxlxZ9tZWxlciBIdWt1a3VcIiwgaHJlZjogXCIvc2lya2V0bGVyLXZlLXNvemxlc21lbGVyLWh1a3VrdVwiIH0sXG4gIHsgaWQ6IDgsIG5hbWU6IFwiR2F5cmltZW5rdWwgdmUgxLBuxZ9hYXQgSHVrdWt1XCIsIGhyZWY6IFwiZ2F5cmltZW5rdWwtdmUtaW5zYWF0LWh1a3VrdVwiIH0sXG4gIHsgaWQ6IDksIG5hbWU6IFwiVGVsZWtvbWluaWthc3lvbiBIdWt1a3VcIiwgaHJlZjogXCIvdGVsZWtvbWluaWthc3lvbi1odWt1a3VcIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1zID0gW1xuICBob21lLFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJIYWtrxLFtxLF6ZGFcIixcbiAgICBocmVmOiBcIi9oYWtraW1pemRhXCIsXG4gICAgc3ViTmF2SXRlbXM6IFtcblxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIkVraWJpbWl6XCIsXG4gICAgaHJlZjogXCIvZWtpcFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCLDh2FsxLHFn21hIEFsYW5sYXLEsW3EsXpcIixcbiAgICBocmVmOiBcIi9oaXptZXRsZXJcIixcbiAgfSxcblxuICB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogXCJIYWJlcmxlciB2ZSBZYXnEsW5sYXJcIixcbiAgICBocmVmOiBcIi9oYWJlcmxlci12ZS15YXlpbmxhclwiLFxuICB9LFxuXG4gIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIsSwbGV0acWfaW1cIixcbiAgICBocmVmOiBcIi9pbGV0aXNpbVwiLFxuICAgIHN1Yk5hdkl0ZW1zOiBbXG4gICAgICAvLyB7IGlkOiAzLCBuYW1lOiBcIlRlc3RpbW9uaWFsc1wiLCBocmVmOiBcIi90ZXN0aW1vbmlhbHNcIiB9LFxuICAgICAgLy8geyBpZDogMSwgbmFtZTogXCJTU1NcIiwgaHJlZjogXCIvZmFxXCIgfSxcbiAgICAgIHsgaWQ6IDIsIG5hbWU6IFwiS2FyaXllclwiLCBocmVmOiBcIi9rYXJpeWVyXCIgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGljb246IFwiZmFiIGZhLXR3aXR0ZXJcIixcbiAgICBocmVmOiBcIiNcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGljb246IFwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogXCJmYWIgZmEtcGludGVyZXN0LXBcIixcbiAgICBocmVmOiBcIiNcIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGljb246IFwiZmFiIGZhLWluc3RhZ3JhbVwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9LFxuXTtcblxuY29uc3QgaGVhZGVyRGF0YSA9IHtcbiAgbG9nbyxcbiAgbG9nb2JsY2ssXG4gIG5hdkl0ZW1zLFxuICBzb2NpYWxzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyRGF0YTtcbiJdLCJuYW1lcyI6WyJsb2dvIiwibG9nb2JsY2siLCJob21lIiwiaWQiLCJuYW1lIiwiaHJlZiIsInNlcnZpY2VzU3ViTmF2SXRlbXMiLCJuYXZJdGVtcyIsInN1Yk5hdkl0ZW1zIiwic29jaWFscyIsImljb24iLCJoZWFkZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/headerData.js\n"));

/***/ })

});