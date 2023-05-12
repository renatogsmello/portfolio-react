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

/***/ "./pages/Portfolio.js":
/*!****************************!*\
  !*** ./pages/Portfolio.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Cards */ \"./pages/components/Cards.js\");\n\n\n\nfunction Portfolio() {\n    var _this = this;\n    var projects = [\n        {\n            link: \"https://movies-list-plum.vercel.app\",\n            title: \"Favorite Movies List\",\n            img: \"imagens/projects/favorite_movies_list.png\",\n            description: 'O objetivo ser\\xe1 consumir a API de filmes do \"The Movie DataBase\" com JavaScript puro. #7daysOfCode #alura\"',\n            tags: [\n                \"HTML\",\n                \"CSS\",\n                \"Javascript\",\n                \"API\"\n            ]\n        },\n        {\n            link: \"7-days-of-react.vercel.app\",\n            title: \"Casa Verde\",\n            img: \"imagens/projects/casa_verde.png\",\n            description: 'O objetivo ser\\xe1 consumir a API de filmes do \"The Movie DataBase\" com JavaScript puro. #7daysOfCode #alura\"',\n            tags: [\n                \"React\",\n                \"API\"\n            ]\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"Portfolio\",\n            className: \"h-auto bg-green-800 pl-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"-rotate-6 mb-28 font-display lg:text-8xl md:text-6xl md:text-green-400\",\n                        children: \"Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                        lineNumber: 26,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" grid grid-cols-3 gap-8\",\n                        children: projects.map(function(project) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards__WEBPACK_IMPORTED_MODULE_2__.PortfolioCard, {\n                                link: project.link,\n                                title: project.title,\n                                img: project.img,\n                                description: project.description,\n                                tags: project.tags\n                            }, void 0, false, {\n                                fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                                lineNumber: 29,\n                                columnNumber: 8\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                        lineNumber: 27,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n            lineNumber: 24,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDeUI7QUFFbkMsU0FBU0UsU0FBUyxHQUFHOztJQUNuQyxJQUFNQyxRQUFRLEdBQUc7UUFDaEI7WUFDQ0MsSUFBSSxFQUFFLHFDQUFxQztZQUMzQ0MsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QkMsR0FBRyxFQUFFLDJDQUEyQztZQUNoREMsV0FBVyxFQUFFLCtHQUE0RztZQUN6SEMsSUFBSSxFQUFFO2dCQUFDLE1BQU07Z0JBQUUsS0FBSztnQkFBRSxZQUFZO2dCQUFFLEtBQUs7YUFBQztTQUMxQztRQUNEO1lBQ0NKLElBQUksRUFBRSw0QkFBNEI7WUFDbENDLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxHQUFHLEVBQUUsaUNBQWlDO1lBQ3RDQyxXQUFXLEVBQUUsK0dBQTRHO1lBQ3pIQyxJQUFJLEVBQUU7Z0JBQUMsT0FBTztnQkFBRSxLQUFLO2FBQUM7U0FDdEI7S0FDRDtJQUVELHFCQUNDO2tCQUNDLDRFQUFDQyxTQUFPO1lBQUNDLEVBQUUsRUFBQyxXQUFXO1lBQUNDLFNBQVMsRUFBQywwQkFBMEI7c0JBQzNELDRFQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsV0FBVzs7a0NBQ3pCLDhEQUFDRSxJQUFFO3dCQUFDRixTQUFTLEVBQUMsd0VBQXdFO2tDQUFDLFdBQVM7Ozs7OzRCQUFLO2tDQUNyRyw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLHlCQUF5QjtrQ0FDdENSLFFBQVEsQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLE9BQU87aURBQ3JCLDhEQUFDZCw0REFBYTtnQ0FBQ0csSUFBSSxFQUFFVyxPQUFPLENBQUNYLElBQUk7Z0NBQUVDLEtBQUssRUFBRVUsT0FBTyxDQUFDVixLQUFLO2dDQUFFQyxHQUFHLEVBQUVTLE9BQU8sQ0FBQ1QsR0FBRztnQ0FBRUMsV0FBVyxFQUFFUSxPQUFPLENBQUNSLFdBQVc7Z0NBQUVDLElBQUksRUFBRU8sT0FBTyxDQUFDUCxJQUFJOzs7OztxQ0FBSTt5QkFDbkksQ0FBQzs7Ozs7NEJBQ0c7Ozs7OztvQkFDRDs7Ozs7Z0JBQ0c7cUJBQ1IsQ0FDSDtBQUNGLENBQUM7QUFoQ3VCTixLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1BvcnRmb2xpby5qcz81M2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgUG9ydGZvbGlvQ2FyZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FyZHNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG5cdGNvbnN0IHByb2plY3RzID0gW1xuXHRcdHtcblx0XHRcdGxpbms6IFwiaHR0cHM6Ly9tb3ZpZXMtbGlzdC1wbHVtLnZlcmNlbC5hcHBcIixcblx0XHRcdHRpdGxlOiBcIkZhdm9yaXRlIE1vdmllcyBMaXN0XCIsXG5cdFx0XHRpbWc6IFwiaW1hZ2Vucy9wcm9qZWN0cy9mYXZvcml0ZV9tb3ZpZXNfbGlzdC5wbmdcIixcblx0XHRcdGRlc2NyaXB0aW9uOiAnTyBvYmpldGl2byBzZXLDoSBjb25zdW1pciBhIEFQSSBkZSBmaWxtZXMgZG8gXCJUaGUgTW92aWUgRGF0YUJhc2VcIiBjb20gSmF2YVNjcmlwdCBwdXJvLiAjN2RheXNPZkNvZGUgI2FsdXJhXCInLFxuXHRcdFx0dGFnczogW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFzY3JpcHRcIiwgXCJBUElcIl0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsaW5rOiBcIjctZGF5cy1vZi1yZWFjdC52ZXJjZWwuYXBwXCIsXG5cdFx0XHR0aXRsZTogXCJDYXNhIFZlcmRlXCIsXG5cdFx0XHRpbWc6IFwiaW1hZ2Vucy9wcm9qZWN0cy9jYXNhX3ZlcmRlLnBuZ1wiLFxuXHRcdFx0ZGVzY3JpcHRpb246ICdPIG9iamV0aXZvIHNlcsOhIGNvbnN1bWlyIGEgQVBJIGRlIGZpbG1lcyBkbyBcIlRoZSBNb3ZpZSBEYXRhQmFzZVwiIGNvbSBKYXZhU2NyaXB0IHB1cm8uICM3ZGF5c09mQ29kZSAjYWx1cmFcIicsXG5cdFx0XHR0YWdzOiBbXCJSZWFjdFwiLCBcIkFQSVwiXSxcblx0XHR9LFxuXHRdXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJQb3J0Zm9saW9cIiBjbGFzc05hbWU9XCJoLWF1dG8gYmctZ3JlZW4tODAwIHBsLTZcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiLXJvdGF0ZS02IG1iLTI4IGZvbnQtZGlzcGxheSBsZzp0ZXh0LTh4bCBtZDp0ZXh0LTZ4bCBtZDp0ZXh0LWdyZWVuLTQwMFwiPlBvcnRmb2xpbzwvaDE+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgZ3JpZCBncmlkLWNvbHMtMyBnYXAtOFwiPlxuXHRcdFx0XHRcdFx0e3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8UG9ydGZvbGlvQ2FyZCBsaW5rPXtwcm9qZWN0Lmxpbmt9IHRpdGxlPXtwcm9qZWN0LnRpdGxlfSBpbWc9e3Byb2plY3QuaW1nfSBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn0gdGFncz17cHJvamVjdC50YWdzfSAvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0Zm9saW9DYXJkIiwiUG9ydGZvbGlvIiwicHJvamVjdHMiLCJsaW5rIiwidGl0bGUiLCJpbWciLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm1hcCIsInByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Portfolio.js\n"));

/***/ })

});