"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_Jarallax_Jarallax_js";
exports.ids = ["src_components_Jarallax_Jarallax_js"];
exports.modules = {

/***/ "./src/components/Jarallax/Jarallax.js":
/*!*********************************************!*\
  !*** ./src/components/Jarallax/Jarallax.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jarallax */ \"jarallax\");\n/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Optional video extension\n(0,jarallax__WEBPACK_IMPORTED_MODULE_1__.jarallaxVideo)();\n/**\n * @param {JarallaxOptions&{className?: string, children: ReactNode}} props\n */ const Jarallax = ({ className = \"\", children, ...props })=>{\n    const element = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // Init Jarallax.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const { current } = element;\n        if (current) {\n            (0,jarallax__WEBPACK_IMPORTED_MODULE_1__.jarallax)(current, props);\n        }\n        // Destroy Jarallax.\n        return ()=>{\n            if (current) {\n                (0,jarallax__WEBPACK_IMPORTED_MODULE_1__.jarallax)(current, \"destroy\");\n            }\n        };\n    }, [\n        props\n    ]);\n    // Update options.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const { current } = element;\n        if (current) {\n            (0,jarallax__WEBPACK_IMPORTED_MODULE_1__.jarallax)(current, \"destroy\");\n            (0,jarallax__WEBPACK_IMPORTED_MODULE_1__.jarallax)(current, props);\n        }\n    }, [\n        props\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: element,\n        className: `${className} jarallax`,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/oguzhansaman/OguzhanSaman.github.io/src/components/Jarallax/Jarallax.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jarallax);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9KYXJhbGxheC9KYXJhbGxheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNGO0FBRWpELDJCQUEyQjtBQUMzQkMsdURBQWFBO0FBRWI7O0NBRUMsR0FFRCxNQUFNSSxXQUFXLENBQUMsRUFBRUMsWUFBWSxFQUFFLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxPQUFPO0lBQ3RELE1BQU1DLFVBQVVMLDZDQUFNQTtJQUV0QixpQkFBaUI7SUFDakJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR0Q7UUFDcEIsSUFBSUMsU0FBUztZQUNYVixrREFBUUEsQ0FBQ1UsU0FBU0Y7UUFDcEI7UUFFQSxvQkFBb0I7UUFDcEIsT0FBTztZQUNMLElBQUlFLFNBQVM7Z0JBQ1hWLGtEQUFRQSxDQUFDVSxTQUFTO1lBQ3BCO1FBQ0Y7SUFDRixHQUFHO1FBQUNGO0tBQU07SUFFVixrQkFBa0I7SUFDbEJMLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR0Q7UUFDcEIsSUFBSUMsU0FBUztZQUNYVixrREFBUUEsQ0FBQ1UsU0FBUztZQUNsQlYsa0RBQVFBLENBQUNVLFNBQVNGO1FBQ3BCO0lBQ0YsR0FBRztRQUFDQTtLQUFNO0lBRVYscUJBQ0UsOERBQUNHO1FBQUlDLEtBQUtIO1FBQVNILFdBQVcsQ0FBQyxFQUFFQSxVQUFVLFNBQVMsQ0FBQztrQkFDbERDOzs7Ozs7QUFHUDtBQUVBLGlFQUFlRixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3NsaW0vLi9zcmMvY29tcG9uZW50cy9KYXJhbGxheC9KYXJhbGxheC5qcz8yZTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGphcmFsbGF4LCBqYXJhbGxheFZpZGVvIH0gZnJvbSBcImphcmFsbGF4XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gT3B0aW9uYWwgdmlkZW8gZXh0ZW5zaW9uXG5qYXJhbGxheFZpZGVvKCk7XG5cbi8qKlxuICogQHBhcmFtIHtKYXJhbGxheE9wdGlvbnMme2NsYXNzTmFtZT86IHN0cmluZywgY2hpbGRyZW46IFJlYWN0Tm9kZX19IHByb3BzXG4gKi9cblxuY29uc3QgSmFyYWxsYXggPSAoeyBjbGFzc05hbWUgPSBcIlwiLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gdXNlUmVmKCk7XG5cbiAgLy8gSW5pdCBKYXJhbGxheC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IGVsZW1lbnQ7XG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIGphcmFsbGF4KGN1cnJlbnQsIHByb3BzKTtcbiAgICB9XG5cbiAgICAvLyBEZXN0cm95IEphcmFsbGF4LlxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBqYXJhbGxheChjdXJyZW50LCBcImRlc3Ryb3lcIik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3Byb3BzXSk7XG5cbiAgLy8gVXBkYXRlIG9wdGlvbnMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSBlbGVtZW50O1xuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICBqYXJhbGxheChjdXJyZW50LCBcImRlc3Ryb3lcIik7XG4gICAgICBqYXJhbGxheChjdXJyZW50LCBwcm9wcyk7XG4gICAgfVxuICB9LCBbcHJvcHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtlbGVtZW50fSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gamFyYWxsYXhgfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEphcmFsbGF4O1xuIl0sIm5hbWVzIjpbImphcmFsbGF4IiwiamFyYWxsYXhWaWRlbyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSmFyYWxsYXgiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiZWxlbWVudCIsImN1cnJlbnQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Jarallax/Jarallax.js\n");

/***/ })

};
;