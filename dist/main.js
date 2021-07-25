/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n\\tfont-family: 'Montserrat', sans-serif;\\r\\n\\tfont-size: 16px;\\r\\n}\\r\\n\\r\\n#root {\\r\\n\\twidth: fit-content;\\r\\n\\tmin-width: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://orgchart/./src/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Edge/Edge.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Edge/Edge.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".edge {\\r\\n    width: 50%;\\r\\n    height: 1px;\\r\\n    background-color: #cccccc;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n}\\r\\n\\r\\n.edge_left {\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.edge_right {\\r\\n    right: 0\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://orgchart/./src/components/Edge/Edge.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Node/Node.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Node/Node.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".node {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tflex-direction: column;\\r\\n\\tposition: relative;\\r\\n}\\r\\n\\r\\n.children-container {\\r\\n\\tdisplay: flex;\\r\\n}\\r\\n\\r\\n.org-card__container {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tflex-direction: column;\\r\\n}\\r\\n\\r\\n.org-card__container.showChildren:after,\\r\\n.org-card__container.children:before {\\r\\n\\tcontent: '';\\r\\n\\theight: 0.5rem;\\r\\n\\twidth: 1px;\\r\\n\\tbackground-color: #888888;\\r\\n}\\r\\n\\r\\n.org-card {\\r\\n\\twidth: 12rem;\\r\\n\\theight: 16rem;\\r\\n\\tmargin: 0 1rem;\\r\\n\\tborder-radius: 0.5rem;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tbox-shadow: 1px 1px 12px 4px #11111108;\\r\\n\\tpadding: 1rem;\\r\\n\\tborder: 1px solid #dddddd;\\r\\n\\tuser-select: none;\\r\\n\\tposition: relative;\\r\\n}\\r\\n\\r\\n.org-card.hasChild {\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.org-card.hasChild .org-card__showChildren {\\r\\n\\topacity: 1;\\r\\n\\ttransition: all 0.1s ease;\\r\\n\\tposition: absolute;\\r\\n\\tbottom: 0;\\r\\n\\tleft: 50%;\\r\\n\\ttransform: translate(-50%, -50%);\\r\\n}\\r\\n\\r\\n.org-card__container.showChildren .org-card.hasChild > .org-card__showChildren,\\r\\n.org-card:not(.hasChild) .org-card__showChildren {\\r\\n\\topacity: 0;\\r\\n}\\r\\n\\r\\n.org-card__picture {\\r\\n\\tborder-radius: 50%;\\r\\n\\theight: 6rem;\\r\\n\\tmargin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.org-card__name,\\r\\n.org-card__title {\\r\\n\\ttext-align: center;\\r\\n\\tmargin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.org-card__name {\\r\\n\\tfont-size: 1rem;\\r\\n\\tfont-weight: 500;\\r\\n}\\r\\n\\r\\n.org-card__title {\\r\\n\\tfont-size: 12px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://orgchart/./src/components/Node/Node.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/OrgChart/OrgChart.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/OrgChart/OrgChart.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".org-chart {\\r\\n\\tpadding: 2rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://orgchart/./src/components/OrgChart/OrgChart.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://orgchart/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://orgchart/./src/App.css?");

/***/ }),

/***/ "./src/components/Edge/Edge.css":
/*!**************************************!*\
  !*** ./src/components/Edge/Edge.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Edge_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Edge.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Edge/Edge.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Edge_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Edge_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_Edge_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_Edge_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://orgchart/./src/components/Edge/Edge.css?");

/***/ }),

/***/ "./src/components/Node/Node.css":
/*!**************************************!*\
  !*** ./src/components/Node/Node.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Node_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Node.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Node/Node.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Node_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Node_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_Node_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_Node_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://orgchart/./src/components/Node/Node.css?");

/***/ }),

/***/ "./src/components/OrgChart/OrgChart.css":
/*!**********************************************!*\
  !*** ./src/components/OrgChart/OrgChart.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_OrgChart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./OrgChart.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/OrgChart/OrgChart.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_OrgChart_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_OrgChart_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_OrgChart_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_OrgChart_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://orgchart/./src/components/OrgChart/OrgChart.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://orgchart/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://orgchart/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://orgchart/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://orgchart/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://orgchart/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://orgchart/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n\r\n\r\n\r\nconst data = {\r\n\tid: 1,\r\n\tname: 'Stoddard Everingham',\r\n\ttitle: 'Financial Analyst',\r\n\tpicture: 'https://picsum.photos/300/300',\r\n\tsubItems: [\r\n\t\t{\r\n\t\t\tid: 2,\r\n\t\t\tname: 'Chrissie Osgardby',\r\n\t\t\ttitle: 'Editor',\r\n\t\t\tpicture: 'https://picsum.photos/300/300',\r\n\t\t\tsubItems: [\r\n\t\t\t\t{\r\n\t\t\t\t\tid: 4,\r\n\t\t\t\t\tname: 'Nil Shinn',\r\n\t\t\t\t\ttitle: 'Director of Sales',\r\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\r\n\t\t\t\t\tsubItems: [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tid: 7,\r\n\t\t\t\t\t\t\tname: 'Orlando Fenny',\r\n\t\t\t\t\t\t\ttitle: 'Recruiting Manager',\r\n\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t],\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tid: 5,\r\n\t\t\t\t\tname: 'Davina Jennens',\r\n\t\t\t\t\ttitle: 'Information Systems Manager',\r\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\r\n\t\t\t\t\tsubItems: [],\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tid: 6,\r\n\t\t\t\t\tname: 'Jillene Blakeney',\r\n\t\t\t\t\ttitle: 'Geologist III',\r\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\r\n\t\t\t\t\tsubItems: [],\r\n\t\t\t\t},\r\n\t\t\t],\r\n\t\t},\r\n\t\t{\r\n\t\t\tid: 3,\r\n\t\t\tname: 'Odette Lorens',\r\n\t\t\ttitle: 'Assistant Media Planner',\r\n\t\t\tpicture: 'https://picsum.photos/300/300',\r\n\t\t\tsubItems: [\r\n\t\t\t\t{\r\n\t\t\t\t\tid: 8,\r\n\t\t\t\t\tname: 'Annamarie Klejna',\r\n\t\t\t\t\ttitle: 'Food Chemist',\r\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\r\n\t\t\t\t\tsubItems: [],\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tid: 9,\r\n\t\t\t\t\tname: 'Harcourt Bygreaves',\r\n\t\t\t\t\ttitle: 'Internal Auditor',\r\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\r\n\t\t\t\t\tsubItems: [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tid: 10,\r\n\t\t\t\t\t\t\tname: 'Effie Gasperi',\r\n\t\t\t\t\t\t\ttitle: 'Social Worker',\r\n\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tid: 11,\r\n\t\t\t\t\t\t\tname: \"Louis M'Quharge\",\r\n\t\t\t\t\t\t\ttitle: 'Nurse Practicioner',\r\n\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tid: 12,\r\n\t\t\t\t\t\t\tname: 'Sonnie Mullett',\r\n\t\t\t\t\t\t\ttitle: 'Biostatistician IV',\r\n\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\tsubItems: [\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\tid: 13,\r\n\t\t\t\t\t\t\t\t\tname: 'Keith Towsey',\r\n\t\t\t\t\t\t\t\t\ttitle: 'Quality Engineer',\r\n\t\t\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\tid: 14,\r\n\t\t\t\t\t\t\t\t\tname: 'Griff Garrand',\r\n\t\t\t\t\t\t\t\t\ttitle: 'Nurse',\r\n\t\t\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\t\t\tsubItems: [\r\n\t\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t\tid: 19,\r\n\t\t\t\t\t\t\t\t\t\t\tname: 'Indira Guiver',\r\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Safety Technician III',\r\n\t\t\t\t\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t\tid: 20,\r\n\t\t\t\t\t\t\t\t\t\t\tname: 'Roddie Raubenheimers',\r\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Teacher',\r\n\t\t\t\t\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t\tid: 21,\r\n\t\t\t\t\t\t\t\t\t\t\tname: 'Linc Raecroft',\r\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Computer Systems Analyst I',\r\n\t\t\t\t\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t\tid: 22,\r\n\t\t\t\t\t\t\t\t\t\t\tname: 'Anallise Schutze',\r\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Business Systems Development Analyst',\r\n\t\t\t\t\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t],\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\tid: 15,\r\n\t\t\t\t\t\t\t\t\tname: 'Fair Glisane',\r\n\t\t\t\t\t\t\t\t\ttitle: 'Marketing Manager',\r\n\t\t\t\t\t\t\t\t\tpicture:\r\n\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\r\n\t\t\t\t\t\t\t\t\tsubItems: [],\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t],\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t],\r\n\t\t\t\t},\r\n\t\t\t],\r\n\t\t},\r\n\t],\r\n};\r\n\r\nconst chart = new _components__WEBPACK_IMPORTED_MODULE_0__.OrgChart(data, {\r\n\tdeps: 2\r\n});\r\ndocument.getElementById('root').appendChild(chart);\r\n\n\n//# sourceURL=webpack://orgchart/./src/app.js?");

/***/ }),

/***/ "./src/components/Edge/Edge.js":
/*!*************************************!*\
  !*** ./src/components/Edge/Edge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Edge\": () => (/* binding */ Edge)\n/* harmony export */ });\n/* harmony import */ var _Edge_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edge.css */ \"./src/components/Edge/Edge.css\");\n\r\n\r\nclass Edge extends HTMLElement {\r\n    constructor(isLeft) {\r\n        super();\r\n        this.isLeft = isLeft;\r\n    }\r\n\r\n    connectedCallback() {\r\n        const {isLeft} = this;\r\n        const classes = [\r\n            'edge',\r\n            isLeft ? 'edge_left' : 'edge_right'\r\n        ].join(' ');\r\n        this.setAttribute('class', classes);\r\n    }\r\n}\r\n\r\ncustomElements.define('chart-edge', Edge);\n\n//# sourceURL=webpack://orgchart/./src/components/Edge/Edge.js?");

/***/ }),

/***/ "./src/components/Node/Node.js":
/*!*************************************!*\
  !*** ./src/components/Node/Node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node)\n/* harmony export */ });\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ \"./src/utils.js\");\n/* harmony import */ var _Node_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.css */ \"./src/components/Node/Node.css\");\n\r\n\r\n\r\nclass Node extends HTMLElement {\r\n\tconstructor(data, level, isMostLeft, isMostRight, isHead) {\r\n\t\tsuper();\r\n\t\tthis.data = data;\r\n\t\tthis.isMostLeft = isMostLeft;\r\n\t\tthis.isMostRight = isMostRight;\r\n\t\tthis.isHead = isHead;\r\n\t\tthis.level = level;\r\n\t}\r\n\r\n\tstatic Head(data) {\r\n\t\treturn new Node(data, 0, false, false, true)\r\n\t}\r\n\r\n\tstatic Item(data, level, isMostLeft, isMostRight) {\r\n\t\treturn new Node(data, level, isMostLeft, isMostRight)\r\n\t}\r\n\r\n\tconnectedCallback() {\r\n\t\tthis.buildNode();\r\n\t};\r\n\r\n\ttoggleShowChildren = (event) => {\r\n\t\tconst {subItems} = this.data;\r\n\t\tif (!subItems.length) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tconst orgCardContainer = event.currentTarget.parentNode;\r\n\t\tconst container = this.querySelector('.node');\r\n\t\tconst children = container.querySelector('.children-container');\r\n\r\n\t\torgCardContainer.classList.toggle('showChildren');\r\n\t\tif (children) {\r\n\t\t\treturn container.removeChild(children);\r\n\t\t}\r\n\r\n\t\tif (!this.childrenNode) {\r\n\t\t\tthis.childrenNode = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createChildren)(subItems);\r\n\t\t}\r\n\r\n\t\tcontainer.appendChild(this.childrenNode);\r\n\t};\r\n\r\n\tbuildNode = () => {\r\n\t\tconst {data, isMostLeft, isMostRight, isHead} = this;\r\n\t\tconst container = document.createElement('div');\r\n\t\tcontainer.setAttribute('class', 'node');\r\n\r\n\t\tconst edges = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createEgde)(isMostLeft, isMostRight, isHead);\r\n\t\tedges.forEach((edge) => container.appendChild(edge));\r\n\r\n\t\tconst orgCard = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createOrgCard)(data, this.toggleShowChildren, isHead);\r\n\t\tcontainer.appendChild(orgCard);\r\n\r\n\t\t// Show children if its level < deps\r\n\t\tif (this.level < window.chartDeps) {\r\n\t\t\tthis.childrenNode = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createChildren)(data.subItems);\r\n\t\t\tcontainer.appendChild(this.childrenNode);\r\n\t\t\torgCard.classList.add('showChildren');\r\n\t\t}\r\n\r\n\t\tthis.innerHTML = '';\r\n\t\tthis.appendChild(container);\r\n\t};\r\n}\r\n\r\ncustomElements.define('chart-node', Node);\r\n\n\n//# sourceURL=webpack://orgchart/./src/components/Node/Node.js?");

/***/ }),

/***/ "./src/components/OrgChart/OrgChart.js":
/*!*********************************************!*\
  !*** ./src/components/OrgChart/OrgChart.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrgChart\": () => (/* binding */ OrgChart)\n/* harmony export */ });\n/* harmony import */ var _Node_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node/Node */ \"./src/components/Node/Node.js\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants */ \"./src/constants.js\");\n/* harmony import */ var _OrgChart_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrgChart.css */ \"./src/components/OrgChart/OrgChart.css\");\n\r\n\r\n\r\n\r\nclass OrgChart extends HTMLElement {\r\n    constructor(data, options) {\r\n        super();\r\n        this.data = data;\r\n        this.options = options || constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CHART_OPTION;\r\n    }\r\n\r\n    connectedCallback() {\r\n        const {deps} = this.options;\r\n        if (deps) {\r\n            window.chartDeps = deps\r\n        };\r\n\r\n        this.setAttribute('class', 'org-chart');\r\n        const chart = _Node_Node__WEBPACK_IMPORTED_MODULE_0__.Node.Head(this.data);\r\n        this.innerHTML = '';\r\n        this.appendChild(chart);\r\n    }\r\n}\r\n\r\ncustomElements.define('org-chart', OrgChart);\r\n\n\n//# sourceURL=webpack://orgchart/./src/components/OrgChart/OrgChart.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* reexport safe */ _Node_Node__WEBPACK_IMPORTED_MODULE_0__.Node),\n/* harmony export */   \"Edge\": () => (/* reexport safe */ _Edge_Edge__WEBPACK_IMPORTED_MODULE_1__.Edge),\n/* harmony export */   \"OrgChart\": () => (/* reexport safe */ _OrgChart_OrgChart__WEBPACK_IMPORTED_MODULE_2__.OrgChart)\n/* harmony export */ });\n/* harmony import */ var _Node_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node/Node */ \"./src/components/Node/Node.js\");\n/* harmony import */ var _Edge_Edge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edge/Edge */ \"./src/components/Edge/Edge.js\");\n/* harmony import */ var _OrgChart_OrgChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrgChart/OrgChart */ \"./src/components/OrgChart/OrgChart.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://orgchart/./src/components/index.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_CHART_OPTION\": () => (/* binding */ DEFAULT_CHART_OPTION)\n/* harmony export */ });\nconst DEFAULT_CHART_OPTION = {\r\n    deps: 2\r\n};\n\n//# sourceURL=webpack://orgchart/./src/constants.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createOrgCard\": () => (/* binding */ createOrgCard),\n/* harmony export */   \"createEgde\": () => (/* binding */ createEgde),\n/* harmony export */   \"createChildren\": () => (/* binding */ createChildren)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n\r\n\r\nconst createOrgCard = (data, onClick, isHead) => {\r\n    const {name, subItems, picture, title} = data;\r\n    const nodeContainer = document.createElement('div');\r\n    const containerClasses = [\r\n        'org-card__container',\r\n        !isHead && 'children'\r\n    ].filter(Boolean).join(' ');\r\n    nodeContainer.setAttribute('class', containerClasses)\r\n    const node = document.createElement('div');\r\n    node.setAttribute('class', 'org-card')\r\n    if (subItems.length) {\r\n        node.addEventListener('click', onClick);\r\n        node.classList.add('hasChild')\r\n    }\r\n    node.innerHTML = `\r\n    <img class=\"org-card__picture\" src=\"${picture}\" alt=\"${name}\" />\r\n    <div class=\"org-card__name\">${name}</div>\r\n    <div class=\"org-card__title\">${title}</div>\r\n    <span class=\"material-icons org-card__showChildren\">keyboard_arrow_down</span>\r\n    `\r\n    nodeContainer.appendChild(node);\r\n\r\n    return nodeContainer;\r\n}\r\n\r\nconst createEgde = (isMostLeft, isMostRight, isHead) => {\r\n    if (isHead || (isMostRight && isMostLeft)) {\r\n        return [];\r\n    }\r\n\r\n    if (isMostLeft || isMostRight) {\r\n        return [new _components__WEBPACK_IMPORTED_MODULE_0__.Edge(isMostRight)]\r\n    }\r\n\r\n    return [new _components__WEBPACK_IMPORTED_MODULE_0__.Edge(true), new _components__WEBPACK_IMPORTED_MODULE_0__.Edge()]\r\n}\r\n\r\nconst createChildren = (children, currentLevel) => {\r\n    if (!children.length) {\r\n        return null;\r\n    }\r\n    const childrenContainer = document.createElement('div');\r\n    childrenContainer.className = 'children-container';\r\n    children.forEach((child, index) => {\r\n        const isMostLeft = index === 0;\r\n        const isMostRight = index === (children.length - 1);\r\n        childrenContainer.appendChild(_components__WEBPACK_IMPORTED_MODULE_0__.Node.Item(child, currentLevel + 1, isMostLeft, isMostRight));\r\n    })\r\n\r\n    return childrenContainer\r\n}\n\n//# sourceURL=webpack://orgchart/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;