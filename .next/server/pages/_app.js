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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./src/context/context.js\");\n\n\n\n\nconst ContextProvider = ({ children  })=>{\n    const [menuStatus, toggleMenu] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n    const [openSearch, toggleSearch] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n    const { 0: currentActive , 1: setCurrentActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"#home\");\n    const value = {\n        menuStatus,\n        toggleMenu,\n        currentActive,\n        setCurrentActive,\n        openSearch,\n        toggleSearch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/context/ContextProvider.js\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ0Y7QUFDUjtBQUVoQyxNQUFNSSxlQUFlLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUN4QyxNQUFNLENBQUNDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLEdBQUdQLDREQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1EsVUFBVSxFQUFFQyxZQUFZLENBQUMsR0FBR1QsNERBQVMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsTUFBTSxFQVBSLEdBT1NVLGFBQWEsR0FQdEIsR0FPd0JDLGdCQUFnQixNQUFJVCwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztJQUUzRCxNQUFNVSxLQUFLLEdBQUc7UUFDWk4sVUFBVTtRQUNWQyxVQUFVO1FBQ1ZHLGFBQWE7UUFDYkMsZ0JBQWdCO1FBQ2hCSCxVQUFVO1FBQ1ZDLFlBQVk7S0FDYjtJQUNELHFCQUFPLDhEQUFDTix5REFBZ0I7UUFBQ1MsS0FBSyxFQUFFQSxLQUFLO2tCQUFHUCxRQUFROzs7OztpQkFBb0IsQ0FBQztDQUN0RTtBQUVELGlFQUFlRCxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vc2xpbS8uL3NyYy9jb250ZXh0L0NvbnRleHRQcm92aWRlci5qcz8yZGJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VUb2dnbGUgZnJvbSBcIkAvaG9va3MvdXNlVG9nZ2xlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW21lbnVTdGF0dXMsIHRvZ2dsZU1lbnVdID0gdXNlVG9nZ2xlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlblNlYXJjaCwgdG9nZ2xlU2VhcmNoXSA9IHVzZVRvZ2dsZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRBY3RpdmUsIHNldEN1cnJlbnRBY3RpdmVdID0gdXNlU3RhdGUoXCIjaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICBtZW51U3RhdHVzLFxyXG4gICAgdG9nZ2xlTWVudSxcclxuICAgIGN1cnJlbnRBY3RpdmUsXHJcbiAgICBzZXRDdXJyZW50QWN0aXZlLFxyXG4gICAgb3BlblNlYXJjaCxcclxuICAgIHRvZ2dsZVNlYXJjaCxcclxuICB9O1xyXG4gIHJldHVybiA8Y29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L2NvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlVG9nZ2xlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIm1lbnVTdGF0dXMiLCJ0b2dnbGVNZW51Iiwib3BlblNlYXJjaCIsInRvZ2dsZVNlYXJjaCIsImN1cnJlbnRBY3RpdmUiLCJzZXRDdXJyZW50QWN0aXZlIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ContextProvider.js\n");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useRootContext\": () => (/* binding */ useRootContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst useRootContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsT0FBTyxpQkFBR0Ysb0RBQWEsQ0FBQyxFQUFFLENBQUM7QUFFMUIsTUFBTUcsY0FBYyxHQUFHLElBQU07SUFDbEMsT0FBT0YsaURBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Q0FDNUIsQ0FBQztBQUVGLGlFQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vc2xpbS8uL3NyYy9jb250ZXh0L2NvbnRleHQuanM/NDZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUm9vdENvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwidXNlUm9vdENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/context.js\n");

/***/ }),

/***/ "./src/hooks/useToggle.js":
/*!********************************!*\
  !*** ./src/hooks/useToggle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\r\n * @param {boolean} defaultValue\r\n * @returns {[boolean, (value?: boolean) => void]}\r\n */ const useToggle = (defaultValue = false)=>{\n    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);\n    /**\r\n   * @param {boolean} value\r\n   */ const toggler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value = undefined)=>{\n        setToggle((preToggle)=>typeof value === \"boolean\" ? value : !preToggle\n        );\n    }, []);\n    return [\n        toggle,\n        toggler\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVG9nZ2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QztJQU1FLE1BQU0sRUFSUixHQVFTSSxNQUFNLEdBUmYsR0FRaUJDO0lBRWYsdUNBRUcsQ0FDSCxNQUFNQztRQUNKRCxTQUFTLENBQUMsQ0FBQ0ksU0FBUyxHQUFNLE9BQU9GLEtBQUs7UUFBb0MsQ0FBQyxDQUFDO0tBQzdFLEVBQUU7SUFFSCxPQUFPO1FBQUNILE1BQU07UUFBRUUsT0FBTztLQUFDLENBQUM7Q0FDMUI7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL29zbGltLy4vc3JjL2hvb2tzL3VzZVRvZ2dsZS5qcz85OGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmYXVsdFZhbHVlXHJcbiAqIEByZXR1cm5zIHtbYm9vbGVhbiwgKHZhbHVlPzogYm9vbGVhbikgPT4gdm9pZF19XHJcbiAqL1xyXG5cclxuY29uc3QgdXNlVG9nZ2xlID0gKGRlZmF1bHRWYWx1ZSA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcclxuICAgKi9cclxuICBjb25zdCB0b2dnbGVyID0gdXNlQ2FsbGJhY2soKHZhbHVlID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoKHByZVRvZ2dsZSkgPT4gKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgPyB2YWx1ZSA6ICFwcmVUb2dnbGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBbdG9nZ2xlLCB0b2dnbGVyXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRvZ2dsZTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VUb2dnbGUiLCJkZWZhdWx0VmFsdWUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ0b2dnbGVyIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJwcmVUb2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useToggle.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/ContextProvider */ \"./src/context/ContextProvider.js\");\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/vendors/animate/animate.min.css */ \"./src/assets/vendors/animate/animate.min.css\");\n/* harmony import */ var _vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendors_animate_custom_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/vendors/animate/custom-animate.css */ \"./src/assets/vendors/animate/custom-animate.css\");\n/* harmony import */ var _vendors_animate_custom_animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_custom_animate_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/vendors/fontawesome/css/all.min.css */ \"./src/assets/vendors/fontawesome/css/all.min.css\");\n/* harmony import */ var _vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_fontawesome_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vendors_oslim_icons_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/vendors/oslim-icons/style.css */ \"./src/assets/vendors/oslim-icons/style.css\");\n/* harmony import */ var _vendors_oslim_icons_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendors_oslim_icons_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/vendors/reey-font/stylesheet.css */ \"./src/assets/vendors/reey-font/stylesheet.css\");\n/* harmony import */ var _vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendors_reey_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _vendors_the_sayinistic_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/vendors/the-sayinistic-font/stylesheet.css */ \"./src/assets/vendors/the-sayinistic-font/stylesheet.css\");\n/* harmony import */ var _vendors_the_sayinistic_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendors_the_sayinistic_font_stylesheet_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node_modules/swiper/swiper-bundle.min.css */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jarallax/dist/jarallax.css */ \"./node_modules/jarallax/dist/jarallax.css\");\n/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tiny-slider/dist/tiny-slider.css */ \"./node_modules/tiny-slider/dist/tiny-slider.css\");\n/* harmony import */ var tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tiny_slider_dist_tiny_slider_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/styles/responsive.css */ \"./src/styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n// extra css\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_app.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/pages/_app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUNiO0FBQ0c7QUFDQztBQUNOO0FBQ0c7QUFDVTtBQUNSO0FBQ0s7QUFDSjtBQUNYO0FBQ007QUFHMUMsWUFBWTtBQUNnQjtBQUNLO0FBRWpDLE1BQU1DLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDMUMscUJBQ0UsOERBQUNILGdFQUFlO2tCQUNkLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7cUJBQUk7Ozs7O2lCQUNaLENBQ2xCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3NsaW0vLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZXh0UHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC9Db250ZXh0UHJvdmlkZXJcIjtcclxuaW1wb3J0IFwiQC92ZW5kb3JzL2FuaW1hdGUvYW5pbWF0ZS5taW4uY3NzXCI7XHJcbmltcG9ydCBcIkAvdmVuZG9ycy9hbmltYXRlL2N1c3RvbS1hbmltYXRlLmNzc1wiO1xyXG5pbXBvcnQgXCJAL3ZlbmRvcnMvZm9udGF3ZXNvbWUvY3NzL2FsbC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIkAvdmVuZG9ycy9vc2xpbS1pY29ucy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiQC92ZW5kb3JzL3JlZXktZm9udC9zdHlsZXNoZWV0LmNzc1wiO1xyXG5pbXBvcnQgXCJAL3ZlbmRvcnMvdGhlLXNheWluaXN0aWMtZm9udC9zdHlsZXNoZWV0LmNzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwibm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLmNzc1wiO1xyXG5pbXBvcnQgXCJqYXJhbGxheC9kaXN0L2phcmFsbGF4LmNzc1wiO1xyXG5pbXBvcnQgXCJ0aW55LXNsaWRlci9kaXN0L3Rpbnktc2xpZGVyLmNzc1wiO1xyXG5cclxuXHJcbi8vIGV4dHJhIGNzc1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcblxyXG4iXSwibmFtZXMiOlsiQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/jarallax/dist/jarallax.css":
/*!*************************************************!*\
  !*** ./node_modules/jarallax/dist/jarallax.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.css":
/*!************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tiny-slider/dist/tiny-slider.css":
/*!*******************************************************!*\
  !*** ./node_modules/tiny-slider/dist/tiny-slider.css ***!
  \*******************************************************/
/***/ (() => {



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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();