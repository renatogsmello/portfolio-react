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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Cards */ \"./pages/components/Cards.js\");\n\n\n\nfunction Portfolio() {\n    var _this = this;\n    var projects = [\n        {\n            id: 1,\n            link: \"https://movies-list-plum.vercel.app\",\n            title: \"Favorite Movies List\",\n            img: \"imagens/projects/favorite_movies_list.png\",\n            description: 'O objetivo ser\\xe1 consumir a API de filmes do \"The Movie DataBase\" com JavaScript puro. #7daysOfCode #alura',\n            tags: [\n                \"HTML\",\n                \"CSS\",\n                \"Javascript\",\n                \"API\"\n            ]\n        },\n        {\n            id: 2,\n            link: \"https://7-days-of-react.vercel.app\",\n            title: \"Casa Verde\",\n            img: \"imagens/projects/casa_verde.png\",\n            description: \"Cria\\xe7\\xe3o e consumo de API para envio de email e catalogo de produtos em um projeto React #7daysOfCode #alura\",\n            tags: [\n                \"React\",\n                \"API\"\n            ]\n        },\n        {\n            id: 3,\n            link: \"https://logica-javascript.vercel.app/lista-compras.html\",\n            title: \"Lista de Compras\",\n            img: \"imagens/projects/lista_compras.png\",\n            description: \"Cria\\xe7\\xe3o de uma lista de compras din\\xe2mica utilizando Arrays no Javascript puro #7daysOfCode #alura\",\n            tags: [\n                \"HTML\",\n                \"CSS\",\n                \"Javascript\"\n            ]\n        },\n        {\n            id: 4,\n            link: \"https://logica-javascript.vercel.app/calculator.html\",\n            title: \"Calculadora\",\n            img: \"imagens/projects/calculadora.png\",\n            description: \"Cria\\xe7\\xe3o de uma calculadora que resolve as opera\\xe7\\xf5es de adi\\xe7\\xe3o, subtra\\xe7\\xe3o, multiplica\\xe7\\xe3o e divis\\xe3o no Javascript puro #7daysOfCode #alura\",\n            tags: [\n                \"HTML\",\n                \"CSS\",\n                \"Javascript\"\n            ]\n        },\n        {\n            id: 5,\n            link: \"https://calendario-aniversarios.vercel.app\",\n            title: \"Calculadora\",\n            img: \"imagens/projects/calendario_aniversarios.png\",\n            description: \"Cria de uma lista de aniversariantes e salva os dados no localStorage #7daysOfCode #alura\",\n            tags: [\n                \"HTML\",\n                \"CSS\",\n                \"Javascript\",\n                \"localStorage\"\n            ]\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"Portfolio\",\n            className: \"h-auto bg-green-800 pl-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"-rotate-6 mb-28 font-display lg:text-8xl md:text-6xl md:text-green-400\",\n                        children: \"Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                        lineNumber: 53,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-8\",\n                        children: projects.map(function(project) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards__WEBPACK_IMPORTED_MODULE_2__.PortfolioCard, {\n                                id: project.id,\n                                link: project.link,\n                                title: project.title,\n                                img: project.img,\n                                description: project.description,\n                                tags: project.tags\n                            }, void 0, false, {\n                                fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                                lineNumber: 56,\n                                columnNumber: 8\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                        lineNumber: 54,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/renatomello/Projetos/portfolio-react/pages/Portfolio.js\",\n            lineNumber: 51,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDeUI7QUFFbkMsU0FBU0UsU0FBUyxHQUFHOztJQUNuQyxJQUFNQyxRQUFRLEdBQUc7UUFDaEI7WUFDQ0MsRUFBRSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFLHFDQUFxQztZQUMzQ0MsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QkMsR0FBRyxFQUFFLDJDQUEyQztZQUNoREMsV0FBVyxFQUFFLDhHQUEyRztZQUN4SEMsSUFBSSxFQUFFO2dCQUFDLE1BQU07Z0JBQUUsS0FBSztnQkFBRSxZQUFZO2dCQUFFLEtBQUs7YUFBQztTQUMxQztRQUNEO1lBQ0NMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxvQ0FBb0M7WUFDMUNDLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxHQUFHLEVBQUUsaUNBQWlDO1lBQ3RDQyxXQUFXLEVBQUUsbUhBQTZHO1lBQzFIQyxJQUFJLEVBQUU7Z0JBQUMsT0FBTztnQkFBRSxLQUFLO2FBQUM7U0FDdEI7UUFDRDtZQUNDTCxFQUFFLEVBQUUsQ0FBQztZQUNMQyxJQUFJLEVBQUUseURBQXlEO1lBQy9EQyxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCQyxHQUFHLEVBQUUsb0NBQW9DO1lBQ3pDQyxXQUFXLEVBQUUsNEdBQW1HO1lBQ2hIQyxJQUFJLEVBQUU7Z0JBQUMsTUFBTTtnQkFBRSxLQUFLO2dCQUFFLFlBQVk7YUFBQztTQUNuQztRQUNEO1lBQ0NMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxzREFBc0Q7WUFDNURDLEtBQUssRUFBRSxhQUFhO1lBQ3BCQyxHQUFHLEVBQUUsa0NBQWtDO1lBQ3ZDQyxXQUFXLEVBQ1YsMktBQTBJO1lBQzNJQyxJQUFJLEVBQUU7Z0JBQUMsTUFBTTtnQkFBRSxLQUFLO2dCQUFFLFlBQVk7YUFBQztTQUNuQztRQUNEO1lBQ0NMLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSw0Q0FBNEM7WUFDbERDLEtBQUssRUFBRSxhQUFhO1lBQ3BCQyxHQUFHLEVBQUUsOENBQThDO1lBQ25EQyxXQUFXLEVBQUUsMkZBQTJGO1lBQ3hHQyxJQUFJLEVBQUU7Z0JBQUMsTUFBTTtnQkFBRSxLQUFLO2dCQUFFLFlBQVk7Z0JBQUUsY0FBYzthQUFDO1NBQ25EO0tBQ0Q7SUFFRCxxQkFDQztrQkFDQyw0RUFBQ0MsU0FBTztZQUFDTixFQUFFLEVBQUMsV0FBVztZQUFDTyxTQUFTLEVBQUMsMEJBQTBCO3NCQUMzRCw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLG1CQUFtQjs7a0NBQ2pDLDhEQUFDRSxJQUFFO3dCQUFDRixTQUFTLEVBQUMsd0VBQXdFO2tDQUFDLFdBQVM7Ozs7OzRCQUFLO2tDQUNyRyw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLHdCQUF3QjtrQ0FDckNSLFFBQVEsQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLE9BQU87aURBQ3JCLDhEQUFDZCw0REFBYTtnQ0FDYkcsRUFBRSxFQUFFVyxPQUFPLENBQUNYLEVBQUU7Z0NBQ2RDLElBQUksRUFBRVUsT0FBTyxDQUFDVixJQUFJO2dDQUNsQkMsS0FBSyxFQUFFUyxPQUFPLENBQUNULEtBQUs7Z0NBQ3BCQyxHQUFHLEVBQUVRLE9BQU8sQ0FBQ1IsR0FBRztnQ0FDaEJDLFdBQVcsRUFBRU8sT0FBTyxDQUFDUCxXQUFXO2dDQUNoQ0MsSUFBSSxFQUFFTSxPQUFPLENBQUNOLElBQUk7Ozs7O3FDQUNqQjt5QkFDRixDQUFDOzs7Ozs0QkFDRzs7Ozs7O29CQUNEOzs7OztnQkFDRztxQkFDUixDQUNIO0FBQ0YsQ0FBQztBQWxFdUJQLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9ydGZvbGlvLmpzPzUzYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBQb3J0Zm9saW9DYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcblx0Y29uc3QgcHJvamVjdHMgPSBbXG5cdFx0e1xuXHRcdFx0aWQ6IDEsXG5cdFx0XHRsaW5rOiBcImh0dHBzOi8vbW92aWVzLWxpc3QtcGx1bS52ZXJjZWwuYXBwXCIsXG5cdFx0XHR0aXRsZTogXCJGYXZvcml0ZSBNb3ZpZXMgTGlzdFwiLFxuXHRcdFx0aW1nOiBcImltYWdlbnMvcHJvamVjdHMvZmF2b3JpdGVfbW92aWVzX2xpc3QucG5nXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogJ08gb2JqZXRpdm8gc2Vyw6EgY29uc3VtaXIgYSBBUEkgZGUgZmlsbWVzIGRvIFwiVGhlIE1vdmllIERhdGFCYXNlXCIgY29tIEphdmFTY3JpcHQgcHVyby4gIzdkYXlzT2ZDb2RlICNhbHVyYScsXG5cdFx0XHR0YWdzOiBbXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSmF2YXNjcmlwdFwiLCBcIkFQSVwiXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiAyLFxuXHRcdFx0bGluazogXCJodHRwczovLzctZGF5cy1vZi1yZWFjdC52ZXJjZWwuYXBwXCIsXG5cdFx0XHR0aXRsZTogXCJDYXNhIFZlcmRlXCIsXG5cdFx0XHRpbWc6IFwiaW1hZ2Vucy9wcm9qZWN0cy9jYXNhX3ZlcmRlLnBuZ1wiLFxuXHRcdFx0ZGVzY3JpcHRpb246IFwiQ3JpYcOnw6NvIGUgY29uc3VtbyBkZSBBUEkgcGFyYSBlbnZpbyBkZSBlbWFpbCBlIGNhdGFsb2dvIGRlIHByb2R1dG9zIGVtIHVtIHByb2pldG8gUmVhY3QgIzdkYXlzT2ZDb2RlICNhbHVyYVwiLFxuXHRcdFx0dGFnczogW1wiUmVhY3RcIiwgXCJBUElcIl0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogMyxcblx0XHRcdGxpbms6IFwiaHR0cHM6Ly9sb2dpY2EtamF2YXNjcmlwdC52ZXJjZWwuYXBwL2xpc3RhLWNvbXByYXMuaHRtbFwiLFxuXHRcdFx0dGl0bGU6IFwiTGlzdGEgZGUgQ29tcHJhc1wiLFxuXHRcdFx0aW1nOiBcImltYWdlbnMvcHJvamVjdHMvbGlzdGFfY29tcHJhcy5wbmdcIixcblx0XHRcdGRlc2NyaXB0aW9uOiBcIkNyaWHDp8OjbyBkZSB1bWEgbGlzdGEgZGUgY29tcHJhcyBkaW7Dom1pY2EgdXRpbGl6YW5kbyBBcnJheXMgbm8gSmF2YXNjcmlwdCBwdXJvICM3ZGF5c09mQ29kZSAjYWx1cmFcIixcblx0XHRcdHRhZ3M6IFtcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhc2NyaXB0XCJdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IDQsXG5cdFx0XHRsaW5rOiBcImh0dHBzOi8vbG9naWNhLWphdmFzY3JpcHQudmVyY2VsLmFwcC9jYWxjdWxhdG9yLmh0bWxcIixcblx0XHRcdHRpdGxlOiBcIkNhbGN1bGFkb3JhXCIsXG5cdFx0XHRpbWc6IFwiaW1hZ2Vucy9wcm9qZWN0cy9jYWxjdWxhZG9yYS5wbmdcIixcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcIkNyaWHDp8OjbyBkZSB1bWEgY2FsY3VsYWRvcmEgcXVlIHJlc29sdmUgYXMgb3BlcmHDp8O1ZXMgZGUgYWRpw6fDo28sIHN1YnRyYcOnw6NvLCBtdWx0aXBsaWNhw6fDo28gZSBkaXZpc8OjbyBubyBKYXZhc2NyaXB0IHB1cm8gIzdkYXlzT2ZDb2RlICNhbHVyYVwiLFxuXHRcdFx0dGFnczogW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFzY3JpcHRcIl0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogNSxcblx0XHRcdGxpbms6IFwiaHR0cHM6Ly9jYWxlbmRhcmlvLWFuaXZlcnNhcmlvcy52ZXJjZWwuYXBwXCIsXG5cdFx0XHR0aXRsZTogXCJDYWxjdWxhZG9yYVwiLFxuXHRcdFx0aW1nOiBcImltYWdlbnMvcHJvamVjdHMvY2FsZW5kYXJpb19hbml2ZXJzYXJpb3MucG5nXCIsXG5cdFx0XHRkZXNjcmlwdGlvbjogXCJDcmlhIGRlIHVtYSBsaXN0YSBkZSBhbml2ZXJzYXJpYW50ZXMgZSBzYWx2YSBvcyBkYWRvcyBubyBsb2NhbFN0b3JhZ2UgIzdkYXlzT2ZDb2RlICNhbHVyYVwiLFxuXHRcdFx0dGFnczogW1wiSFRNTFwiLCBcIkNTU1wiLCBcIkphdmFzY3JpcHRcIiwgXCJsb2NhbFN0b3JhZ2VcIl0sXG5cdFx0fSxcblx0XVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzZWN0aW9uIGlkPVwiUG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwiaC1hdXRvIGJnLWdyZWVuLTgwMCBwbC02XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiLXJvdGF0ZS02IG1iLTI4IGZvbnQtZGlzcGxheSBsZzp0ZXh0LTh4bCBtZDp0ZXh0LTZ4bCBtZDp0ZXh0LWdyZWVuLTQwMFwiPlBvcnRmb2xpbzwvaDE+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC04XCI+XG5cdFx0XHRcdFx0XHR7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxQb3J0Zm9saW9DYXJkXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e3Byb2plY3QuaWR9XG5cdFx0XHRcdFx0XHRcdFx0bGluaz17cHJvamVjdC5saW5rfVxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdGltZz17cHJvamVjdC5pbWd9XG5cdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0dGFncz17cHJvamVjdC50YWdzfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvPlxuXHQpXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0Zm9saW9DYXJkIiwiUG9ydGZvbGlvIiwicHJvamVjdHMiLCJpZCIsImxpbmsiLCJ0aXRsZSIsImltZyIsImRlc2NyaXB0aW9uIiwidGFncyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm1hcCIsInByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Portfolio.js\n"));

/***/ })

});