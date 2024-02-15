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

/***/ "./src/context/ContextProvider.js":
/*!****************************************!*\
  !*** ./src/context/ContextProvider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./src/context/context.js\");\n\n\n\n\nconst ContextProvider = ({ children })=>{\n    const [menuStatus, toggleMenu] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n    const [openSearch, toggleSearch] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n    const [currentActive, setCurrentActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#home\");\n    const value = {\n        menuStatus,\n        toggleMenu,\n        currentActive,\n        setCurrentActive,\n        openSearch,\n        toggleSearch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/context/ContextProvider.js\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDRjtBQUNSO0FBRWhDLE1BQU1JLGtCQUFrQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNuQyxNQUFNLENBQUNDLFlBQVlDLFdBQVcsR0FBR1AsNERBQVNBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxZQUFZQyxhQUFhLEdBQUdULDREQUFTQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1VLFFBQVE7UUFDWk47UUFDQUM7UUFDQUc7UUFDQUM7UUFDQUg7UUFDQUM7SUFDRjtJQUNBLHFCQUFPLDhEQUFDTix5REFBZ0I7UUFBQ1MsT0FBT0E7a0JBQVFQOzs7Ozs7QUFDMUM7QUFFQSxpRUFBZUQsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29zbGltLy4vc3JjL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyLmpzPzJkYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiQC9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFttZW51U3RhdHVzLCB0b2dnbGVNZW51XSA9IHVzZVRvZ2dsZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuU2VhcmNoLCB0b2dnbGVTZWFyY2hdID0gdXNlVG9nZ2xlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRBY3RpdmUsIHNldEN1cnJlbnRBY3RpdmVdID0gdXNlU3RhdGUoXCIjaG9tZVwiKTtcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBtZW51U3RhdHVzLFxuICAgIHRvZ2dsZU1lbnUsXG4gICAgY3VycmVudEFjdGl2ZSxcbiAgICBzZXRDdXJyZW50QWN0aXZlLFxuICAgIG9wZW5TZWFyY2gsXG4gICAgdG9nZ2xlU2VhcmNoLFxuICB9O1xuICByZXR1cm4gPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9jb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VUb2dnbGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiY29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibWVudVN0YXR1cyIsInRvZ2dsZU1lbnUiLCJvcGVuU2VhcmNoIiwidG9nZ2xlU2VhcmNoIiwiY3VycmVudEFjdGl2ZSIsInNldEN1cnJlbnRBY3RpdmUiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ContextProvider.js\n");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useRootContext: () => (/* binding */ useRootContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst useRootContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsd0JBQVVGLG9EQUFhQSxDQUFDLENBQUM7QUFFeEIsTUFBTUcsaUJBQWlCO0lBQzVCLE9BQU9GLGlEQUFVQSxDQUFDQztBQUNwQixFQUFFO0FBRUYsaUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vc2xpbS8uL3NyYy9jb250ZXh0L2NvbnRleHQuanM/NDZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IHVzZVJvb3RDb250ZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwidXNlUm9vdENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/context.js\n");

/***/ }),

/***/ "./src/hooks/useToggle.js":
/*!********************************!*\
  !*** ./src/hooks/useToggle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * @param {boolean} defaultValue\n * @returns {[boolean, (value?: boolean) => void]}\n */ const useToggle = (defaultValue = false)=>{\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);\n    /**\n   * @param {boolean} value\n   */ const toggler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value = undefined)=>{\n        setToggle((preToggle)=>typeof value === \"boolean\" ? value : !preToggle);\n    }, []);\n    return [\n        toggle,\n        toggler\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVG9nZ2xlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5Qzs7O0NBR0MsR0FFRCxNQUFNRSxZQUFZLENBQUNDLGVBQWUsS0FBSztJQUNyQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUNFO0lBRXJDOztHQUVDLEdBQ0QsTUFBTUcsVUFBVU4sa0RBQVdBLENBQUMsQ0FBQ08sUUFBUUMsU0FBUztRQUM1Q0gsVUFBVSxDQUFDSSxZQUFlLE9BQU9GLFVBQVUsWUFBWUEsUUFBUSxDQUFDRTtJQUNsRSxHQUFHLEVBQUU7SUFFTCxPQUFPO1FBQUNMO1FBQVFFO0tBQVE7QUFDMUI7QUFFQSxpRUFBZUosU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29zbGltLy4vc3JjL2hvb2tzL3VzZVRvZ2dsZS5qcz85OGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmYXVsdFZhbHVlXG4gKiBAcmV0dXJucyB7W2Jvb2xlYW4sICh2YWx1ZT86IGJvb2xlYW4pID0+IHZvaWRdfVxuICovXG5cbmNvbnN0IHVzZVRvZ2dsZSA9IChkZWZhdWx0VmFsdWUgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgY29uc3QgdG9nZ2xlciA9IHVzZUNhbGxiYWNrKCh2YWx1ZSA9IHVuZGVmaW5lZCkgPT4ge1xuICAgIHNldFRvZ2dsZSgocHJlVG9nZ2xlKSA9PiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiA/IHZhbHVlIDogIXByZVRvZ2dsZSkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFt0b2dnbGUsIHRvZ2dsZXJdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VUb2dnbGUiLCJkZWZhdWx0VmFsdWUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ0b2dnbGVyIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJwcmVUb2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useToggle.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/ContextProvider */ \"./src/context/ContextProvider.js\");\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/vendors/animate/animate.min.css */ \"./src/assets/vendors/animate/animate.min.css\");\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendors_animate_custom_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/vendors/animate/custom-animate.css */ \"./src/assets/vendors/animate/custom-animate.css\");\n/* harmony import */ var _vendors_animate_custom_animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_custom_animate_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/vendors/fontawesome/css/all.min.css */ \"./src/assets/vendors/fontawesome/css/all.min.css\");\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vendors_oslim_icons_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/vendors/oslim-icons/style.css */ \"./src/assets/vendors/oslim-icons/style.css\");\n/* harmony import */ var _vendors_oslim_icons_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendors_oslim_icons_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/vendors/reey-font/stylesheet.css */ \"./src/assets/vendors/reey-font/stylesheet.css\");\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _vendors_the_sayinistic_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/vendors/the-sayinistic-font/stylesheet.css */ \"./src/assets/vendors/the-sayinistic-font/stylesheet.css\");\n/* harmony import */ var _vendors_the_sayinistic_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendors_the_sayinistic_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node_modules/swiper/swiper-bundle.min.css */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jarallax/dist/jarallax.css */ \"./node_modules/jarallax/dist/jarallax.css\");\n/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tiny-slider/dist/tiny-slider.css */ \"./node_modules/tiny-slider/dist/tiny-slider.css\");\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/styles/responsive.css */ \"./src/styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n// extra css\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_app.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ2I7QUFDRztBQUNDO0FBQ047QUFDRztBQUNVO0FBQ1I7QUFDSztBQUNKO0FBQ1g7QUFDTTtBQUcxQyxZQUFZO0FBQ2dCO0FBQ0s7QUFFakMsTUFBTUMsUUFBUSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCxnRUFBZUE7a0JBQ2QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29zbGltLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCJAL2NvbnRleHQvQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgXCJAL3ZlbmRvcnMvYW5pbWF0ZS9hbmltYXRlLm1pbi5jc3NcIjtcbmltcG9ydCBcIkAvdmVuZG9ycy9hbmltYXRlL2N1c3RvbS1hbmltYXRlLmNzc1wiO1xuaW1wb3J0IFwiQC92ZW5kb3JzL2ZvbnRhd2Vzb21lL2Nzcy9hbGwubWluLmNzc1wiO1xuaW1wb3J0IFwiQC92ZW5kb3JzL29zbGltLWljb25zL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiQC92ZW5kb3JzL3JlZXktZm9udC9zdHlsZXNoZWV0LmNzc1wiO1xuaW1wb3J0IFwiQC92ZW5kb3JzL3RoZS1zYXlpbmlzdGljLWZvbnQvc3R5bGVzaGVldC5jc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwibm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3NcIjtcbmltcG9ydCBcInJlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5jc3NcIjtcbmltcG9ydCBcImphcmFsbGF4L2Rpc3QvamFyYWxsYXguY3NzXCI7XG5pbXBvcnQgXCJ0aW55LXNsaWRlci9kaXN0L3Rpbnktc2xpZGVyLmNzc1wiO1xuXG5cbi8vIGV4dHJhIGNzc1xuaW1wb3J0IFwiQC9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9yZXNwb25zaXZlLmNzc1wiO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ29udGV4dFByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5cbiJdLCJuYW1lcyI6WyJDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/assets/vendors/animate/animate.min.css":
/*!****************************************************!*\
  !*** ./src/assets/vendors/animate/animate.min.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/animate/custom-animate.css":
/*!*******************************************************!*\
  !*** ./src/assets/vendors/animate/custom-animate.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/fontawesome/css/all.min.css":
/*!********************************************************!*\
  !*** ./src/assets/vendors/fontawesome/css/all.min.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/oslim-icons/style.css":
/*!**************************************************!*\
  !*** ./src/assets/vendors/oslim-icons/style.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/reey-font/stylesheet.css":
/*!*****************************************************!*\
  !*** ./src/assets/vendors/reey-font/stylesheet.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/the-sayinistic-font/stylesheet.css":
/*!***************************************************************!*\
  !*** ./src/assets/vendors/the-sayinistic-font/stylesheet.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/responsive.css":
/*!***********************************!*\
  !*** ./src/styles/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (() => {



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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/tiny-slider","vendor-chunks/swiper","vendor-chunks/react-modal-video","vendor-chunks/jarallax","vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();