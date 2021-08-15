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

/***/ "./src/components/CreateNodeModal/CreateNodeModal.scss":
/*!*************************************************************!*\
  !*** ./src/components/CreateNodeModal/CreateNodeModal.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orgchart/./src/components/CreateNodeModal/CreateNodeModal.scss?");

/***/ }),

/***/ "./src/components/Edge/Edge.scss":
/*!***************************************!*\
  !*** ./src/components/Edge/Edge.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orgchart/./src/components/Edge/Edge.scss?");

/***/ }),

/***/ "./src/components/Node/Node.scss":
/*!***************************************!*\
  !*** ./src/components/Node/Node.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orgchart/./src/components/Node/Node.scss?");

/***/ }),

/***/ "./src/components/OrgChart/OrgChart.scss":
/*!***********************************************!*\
  !*** ./src/components/OrgChart/OrgChart.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orgchart/./src/components/OrgChart/OrgChart.scss?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orgchart/./src/index.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n\n\nconst chart = new _components__WEBPACK_IMPORTED_MODULE_0__.OrgChart({\n\tdeps: 2,\n});\ndocument.getElementById('root').appendChild(chart);\n\n\n//# sourceURL=webpack://orgchart/./src/app.js?");

/***/ }),

/***/ "./src/components/CreateNodeModal/CreateNodeModal.js":
/*!***********************************************************!*\
  !*** ./src/components/CreateNodeModal/CreateNodeModal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateNodeModal\": () => (/* binding */ CreateNodeModal)\n/* harmony export */ });\n/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modal/Modal */ \"./src/components/Modal/Modal.js\");\n/* harmony import */ var _CreateNodeModal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateNodeModal.scss */ \"./src/components/CreateNodeModal/CreateNodeModal.scss\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ \"./src/models/index.js\");\n\n\n\n\nclass CreateNodeModal extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\t\tthis._attachEventHandlers = this._attachEventHandlers.bind(this);\n\t}\n\n\tconnectedCallback() {\n\t\tthis._render();\n\t\tthis.modal = this.querySelector('#create-node');\n\t\tthis._attachEventHandlers();\n\t}\n\n\t_render() {\n\t\tthis.innerHTML = `\n        <chart-modal modalTitle=\"Create new node\" id=\"create-node\">\n\t\t\t<form action=\"#\" id=\"create-node-form\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div class=\"form-control\">\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" id=\"name\" required />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<div class=\"col-12 col-sm-6\">\n\t\t\t\t\t\t<div class=\"form-control\">\n\t\t\t\t\t\t\t<label for=\"id\">ID</label>\n\t\t\t\t\t\t\t<input type=\"number\" name=\"id\" id=\"id\" required />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-12 col-sm-6\">\n\t\t\t\t\t\t<div class=\"form-control\">\n\t\t\t\t\t\t\t<label for=\"title\">Title</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"title\" id=\"title\" required />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t<img \n\t\t\t\t\t\t\tsrc=\"https://play-lh.googleusercontent.com/kgSwHEst2ENqeYoasBoxvUcPD97c0RdIUxRYy6KlMUjiWlwzvPqg4ZSNGrweAps_g7c\" \n\t\t\t\t\t\t\talt=\"demo-avatar\" id=\"demo-avatar\" \n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<label for=\"title\">Picture</label>\n\t\t\t\t\t\t\t\t\t<input type=\"url\" name=\"picture\" id=\"picture\" required />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<label for=\"dc\">DC</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"dc\" id=\"dc\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"form-footer\">\n                    <button class=\"btn btn-secondary btn-cancel\" type=\"button\">Cancle</button>\n                    <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n                </div>\n\t\t\t</form>\n\t\t</chart-modal>`;\n\t}\n\n\tattributeChangedCallback(name, _, newValue) {\n\t\tconsole.log(name);\n\t}\n\n\t_attachEventHandlers() {\n\t\tconst cancelBtn = this.querySelector('.btn-cancel');\n\t\tconst form = document.querySelector('#create-node-form');\n\t\tconst demo = document.querySelector('#demo-avatar');\n\t\tconst pictureInput = document.querySelector('#picture');\n\t\tconst modal = this.modal;\n\n\t\tif (cancelBtn) {\n\t\t\tcancelBtn.addEventListener('click', () => {\n\t\t\t\tthis.modal.removeAttribute('visible');\n\t\t\t});\n\t\t}\n\n\t\tif (form) {\n\t\t\tform.addEventListener('submit', (event) => {\n\t\t\t\tevent.preventDefault();\n\t\t\t\tconst form = event.target;\n\t\t\t\tconst editingNode = window.editingNode;\n\t\t\t\tif (!form || !editingNode) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tconst { name, id, title, picture } = form.elements;\n\t\t\t\tconst node = new _models__WEBPACK_IMPORTED_MODULE_2__.Node(\n\t\t\t\t\tid.value,\n\t\t\t\t\tname.value,\n\t\t\t\t\ttitle.value,\n\t\t\t\t\tpicture.value\n\t\t\t\t);\n\n\t\t\t\tif (\n\t\t\t\t\teditingNode.data &&\n\t\t\t\t\teditingNode.data.subItems instanceof Array\n\t\t\t\t) {\n\t\t\t\t\teditingNode.data.subItems.push(node);\n\t\t\t\t\teditingNode.renderChildren();\n\t\t\t\t\twindow.saveChartData();\n\t\t\t\t\tthis.modal.removeAttribute('visible');\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\tif (modal) {\n\t\t\tmodal.addEventListener('close', () => {\n\t\t\t\tform && form.reset();\n\t\t\t});\n\t\t}\n\n\t\tif (pictureInput) {\n\t\t\tpictureInput.addEventListener('blur', (event) => {\n\t\t\t\tif (event.target.value) {\n\t\t\t\t\tdemo.setAttribute('src', event.target.value);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n}\n\ncustomElements.define('create-node-modal', CreateNodeModal);\n\n\n//# sourceURL=webpack://orgchart/./src/components/CreateNodeModal/CreateNodeModal.js?");

/***/ }),

/***/ "./src/components/Edge/Edge.js":
/*!*************************************!*\
  !*** ./src/components/Edge/Edge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Edge\": () => (/* binding */ Edge)\n/* harmony export */ });\n/* harmony import */ var _Edge_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edge.scss */ \"./src/components/Edge/Edge.scss\");\n\n\nclass Edge extends HTMLElement {\n\tconstructor(isLeft) {\n\t\tsuper();\n\t\tthis.isLeft = isLeft;\n\t}\n\n\tconnectedCallback() {\n\t\tconst { isLeft } = this;\n\t\tconst classes = ['edge', isLeft ? 'edge_left' : 'edge_right'].join(' ');\n\t\tthis.setAttribute('class', classes);\n\t}\n}\n\ncustomElements.define('chart-edge', Edge);\n\n\n//# sourceURL=webpack://orgchart/./src/components/Edge/Edge.js?");

/***/ }),

/***/ "./src/components/Modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal extends HTMLElement {\n\tget visible() {\n\t\treturn this.hasAttribute('visible');\n\t}\n\n\tset visible(value) {\n\t\tif (value) {\n\t\t\treturn this.setAttribute('visible', '');\n\t\t}\n\n\t\tthis.removeAttribute('visible');\n\t}\n\n\tget modalTitle() {\n\t\treturn this.getAttribute('modalTitle');\n\t}\n\n\tset modalTitle(value) {\n\t\tthis.setAttribute('modalTitle', value);\n\t}\n\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tconnectedCallback() {\n\t\tthis._render();\n\t\tthis._attachEventHandlers();\n\t}\n\n\tstatic get observedAttributes() {\n\t\treturn ['visible', 'modalTitle'];\n\t}\n\n\tattributeChangedCallback(name, _, newValue) {\n\t\tif (!this.shadowRoot) {\n\t\t\treturn;\n\t\t}\n\n\t\tswitch (name) {\n\t\t\tcase 'visible':\n\t\t\t\tif (newValue === null) {\n\t\t\t\t\tthis.dispatchEvent(new CustomEvent('close'));\n\t\t\t\t\treturn this.shadowRoot\n\t\t\t\t\t\t.querySelector('.wrapper')\n\t\t\t\t\t\t.classList.remove('visible');\n\t\t\t\t}\n\n\t\t\t\tthis.shadowRoot\n\t\t\t\t\t.querySelector('.wrapper')\n\t\t\t\t\t.classList.add('visible');\n\t\t\t\tbreak;\n\t\t\tcase 'modalTitle':\n\t\t\t\tthis.shadowRoot.querySelector('.title').textContent = newValue;\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\treturn;\n\t\t}\n\t}\n\n\t_render() {\n\t\tconst wrapperClass = this.visible ? 'wrapper visible' : 'wrapper';\n\t\tconst container = document.createElement('div');\n\t\tcontainer.innerHTML = `\n        <style>\n          .wrapper {\n            position: fixed;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background-color: #33333330;\n            opacity: 0;\n            visibility: hidden;\n            transform: scale(1.1);\n            transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;\n            z-index: 1;\n          }\n          .visible {\n            opacity: 1;\n            visibility: visible;\n            transform: scale(1);\n            transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;\n          }\n          .modal {\n            font-size: 16px;\n            background-color: #fff;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%,-50%);\n            border-radius: 4px;\n          }\n          .title {\n            font-size: 1rem;\n            border-bottom: 1px solid #999999;\n            padding: 1rem;\n          }\n          .button-container {\n            text-align: right;\n          }\n          button {\n            min-width: 80px;\n            background-color: #848e97;\n            border-color: #848e97;\n            border-style: solid;\n            border-radius: 2px;\n            padding: 3px;\n            color:white;\n            cursor: pointer;\n          }\n          span.modal__close {\n              position: absolute;\n              top: 1rem;\n              right: 1rem;\n              cursor: pointer;\n              font-size: 1rem;\n              padding: 4px;\n              border-radius: 50%;\n              background-color: #33333300;\n              transition: all 0.25s ease;\n          }\n          span.modal__close:hover {\n            background-color: #33333310;\n        }\n          button:hover {\n            background-color: #6c757d;\n            border-color: #6c757d;\n          }\n          .content {\n              padding: 1rem;\n          }\n        </style>\n        <link\n\t\t\thref=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n\t\t\trel=\"stylesheet\"\n\t\t/>\n        <div class='${wrapperClass}'>\n          <div class='modal'>\n            <span class=\"material-icons modal__close\">close</span>\n            <div class='title'>${this.modalTitle}</div>\n            <div class='content'>\n              <slot></slot>\n            </div>\n          </div>\n        </div>`;\n\n\t\tconst shadowRoot = this.attachShadow({ mode: 'open' });\n\t\tshadowRoot.appendChild(container);\n\t}\n\n\t_attachEventHandlers() {\n\t\tconst closeButton = this.shadowRoot.querySelector('.modal__close');\n\t\tcloseButton.addEventListener('click', (e) => {\n\t\t\tthis.removeAttribute('visible');\n\t\t});\n\t}\n}\n\ncustomElements.define('chart-modal', Modal);\n\n\n//# sourceURL=webpack://orgchart/./src/components/Modal/Modal.js?");

/***/ }),

/***/ "./src/components/Node/Node.js":
/*!*************************************!*\
  !*** ./src/components/Node/Node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node)\n/* harmony export */ });\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ \"./src/utils.js\");\n/* harmony import */ var _Node_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.scss */ \"./src/components/Node/Node.scss\");\n\n\n\nclass Node extends HTMLElement {\n\tconstructor(data, level, isMostLeft, isMostRight, isHead) {\n\t\tsuper();\n\t\tthis.data = data;\n\t\tthis.isMostLeft = isMostLeft;\n\t\tthis.isMostRight = isMostRight;\n\t\tthis.isHead = isHead;\n\t\tthis.level = level;\n\n\t\tthis.buildNode();\n\t}\n\n\tstatic Head(data) {\n\t\treturn new Node(data, 0, false, false, true);\n\t}\n\n\tstatic Item(data, level, isMostLeft, isMostRight) {\n\t\treturn new Node(data, level, isMostLeft, isMostRight);\n\t}\n\n\tconnectedCallback() {\n\t\tthis._attachEventHandlers();\n\t}\n\n\tbuildChildrenNode = (subItems) => {\n\t\tthis.previousChildrenLength = subItems.length;\n\t\tthis.childrenNode = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createChildren)(subItems);\n\t};\n\n\tupdateChildrenDOM = () => {\n\t\tconst container = this.querySelector('.node');\n\t\tconst oldChildrenContainer = container.querySelector(\n\t\t\t'.children-container'\n\t\t);\n\t\tif (oldChildrenContainer) {\n\t\t\treturn container.replaceChild(\n\t\t\t\tthis.childrenNode,\n\t\t\t\toldChildrenContainer\n\t\t\t);\n\t\t}\n\t\tcontainer.appendChild(this.childrenNode);\n\t};\n\n\ttoggleShowChildren = (event) => {\n\t\tconst { subItems } = this.data;\n\t\tif (!subItems.length) {\n\t\t\treturn;\n\t\t}\n\n\t\tconst orgCardContainer = event.currentTarget.parentNode;\n\t\tconst container = this.querySelector('.node');\n\t\tconst children = container.querySelector('.children-container');\n\n\t\torgCardContainer.classList.toggle('showChildren');\n\t\tif (children) {\n\t\t\treturn container.removeChild(children);\n\t\t}\n\n\t\tif (!this.childrenNode) {\n\t\t\tthis.buildChildrenNode(subItems);\n\t\t}\n\t\tthis.updateChildrenDOM();\n\t};\n\n\trenderChildren = () => {\n\t\tconst { previousChildrenLength, data } = this;\n\t\tconst { subItems } = data;\n\t\tconst children = this.querySelector('.children-container');\n\n\t\tconst shouldRenderChildren =\n\t\t\tchildren && previousChildrenLength !== subItems.length;\n\t\tif (shouldRenderChildren) {\n\t\t\tthis.buildChildrenNode(subItems);\n\t\t\tthis.updateChildrenDOM();\n\t\t}\n\t};\n\n\t_attachEventHandlers = () => {\n\t\tconst addChildBtn = this.querySelector('.org-card__addChildren');\n\t\taddChildBtn.addEventListener('click', (event) => {\n\t\t\tevent.stopPropagation();\n\t\t\twindow.editingNode = this;\n\t\t\tconst modal = document.querySelector('#create-node');\n\t\t\tmodal.setAttribute('visible', true);\n\t\t});\n\t};\n\n\tbuildNode = () => {\n\t\tconst { data, isMostLeft, isMostRight, isHead } = this;\n\t\tconst container = document.createElement('div');\n\t\tcontainer.setAttribute('class', 'node');\n\n\t\tconst edges = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createEgde)(isMostLeft, isMostRight, isHead);\n\t\tedges.forEach((edge) => container.appendChild(edge));\n\n\t\tconst orgCard = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createOrgCard)(data, this.toggleShowChildren, isHead);\n\t\tcontainer.appendChild(orgCard);\n\n\t\t// Show children if its level < deps\n\t\tif (this.level < window.chartDeps) {\n\t\t\tthis.childrenNode = (0,utils__WEBPACK_IMPORTED_MODULE_0__.createChildren)(data.subItems);\n\t\t\tcontainer.appendChild(this.childrenNode);\n\t\t\torgCard.classList.add('showChildren');\n\t\t}\n\n\t\tthis.innerHTML = '';\n\t\tthis.appendChild(container);\n\t};\n}\n\ncustomElements.define('chart-node', Node);\n\n\n//# sourceURL=webpack://orgchart/./src/components/Node/Node.js?");

/***/ }),

/***/ "./src/components/OrgChart/OrgChart.js":
/*!*********************************************!*\
  !*** ./src/components/OrgChart/OrgChart.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrgChart\": () => (/* binding */ OrgChart)\n/* harmony export */ });\n/* harmony import */ var _Node_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Node/Node */ \"./src/components/Node/Node.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants */ \"./src/constants.js\");\n/* harmony import */ var _OrgChart_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrgChart.scss */ \"./src/components/OrgChart/OrgChart.scss\");\n/* harmony import */ var _CreateNodeModal_CreateNodeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CreateNodeModal/CreateNodeModal */ \"./src/components/CreateNodeModal/CreateNodeModal.js\");\n\n\n\n\n\n\n\nclass OrgChart extends HTMLElement {\n\tconstructor(options) {\n\t\tsuper();\n\t\tthis.options = options || constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_CHART_OPTION;\n\t\tthis.data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadData)();\n\t}\n\n\tsaveChartData = () => {\n\t\t(0,_utils__WEBPACK_IMPORTED_MODULE_1__.saveData)(this.data);\n\t};\n\n\tconnectedCallback() {\n\t\tthis._render();\n\t\twindow.saveChartData = this.saveChartData;\n\t}\n\n\t_render = () => {\n\t\tconst { deps } = this.options;\n\t\tif (deps) {\n\t\t\twindow.chartDeps = deps;\n\t\t}\n\n\t\tthis.setAttribute('class', 'org-chart');\n\t\tconst chart = _Node_Node__WEBPACK_IMPORTED_MODULE_0__.Node.Head(this.data);\n\t\tconst modal = new _CreateNodeModal_CreateNodeModal__WEBPACK_IMPORTED_MODULE_4__.CreateNodeModal();\n\t\tthis.innerHTML = '';\n\t\tthis.appendChild(chart);\n\t\tthis.appendChild(modal);\n\t};\n}\n\ncustomElements.define('org-chart', OrgChart);\n\n\n//# sourceURL=webpack://orgchart/./src/components/OrgChart/OrgChart.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* reexport safe */ _Node_Node__WEBPACK_IMPORTED_MODULE_0__.Node),\n/* harmony export */   \"Edge\": () => (/* reexport safe */ _Edge_Edge__WEBPACK_IMPORTED_MODULE_1__.Edge),\n/* harmony export */   \"OrgChart\": () => (/* reexport safe */ _OrgChart_OrgChart__WEBPACK_IMPORTED_MODULE_2__.OrgChart),\n/* harmony export */   \"CreateNodeModal\": () => (/* reexport safe */ _CreateNodeModal_CreateNodeModal__WEBPACK_IMPORTED_MODULE_3__.CreateNodeModal)\n/* harmony export */ });\n/* harmony import */ var _Node_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node/Node */ \"./src/components/Node/Node.js\");\n/* harmony import */ var _Edge_Edge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edge/Edge */ \"./src/components/Edge/Edge.js\");\n/* harmony import */ var _OrgChart_OrgChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrgChart/OrgChart */ \"./src/components/OrgChart/OrgChart.js\");\n/* harmony import */ var _CreateNodeModal_CreateNodeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateNodeModal/CreateNodeModal */ \"./src/components/CreateNodeModal/CreateNodeModal.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://orgchart/./src/components/index.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_CHART_OPTION\": () => (/* binding */ DEFAULT_CHART_OPTION)\n/* harmony export */ });\nconst DEFAULT_CHART_OPTION = {\n    deps: 2\n};\n\n//# sourceURL=webpack://orgchart/./src/constants.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tid: 1,\n\tname: 'Stoddard Everingham',\n\ttitle: 'Financial Analyst',\n\tpicture: 'https://picsum.photos/300/300',\n\tsubItems: [\n\t\t{\n\t\t\tid: 2,\n\t\t\tname: 'Chrissie Osgardby',\n\t\t\ttitle: 'Editor',\n\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\tsubItems: [\n\t\t\t\t{\n\t\t\t\t\tid: 4,\n\t\t\t\t\tname: 'Nil Shinn',\n\t\t\t\t\ttitle: 'Director of Sales',\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\tsubItems: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 7,\n\t\t\t\t\t\t\tname: 'Orlando Fenny',\n\t\t\t\t\t\t\ttitle: 'Recruiting Manager',\n\t\t\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 5,\n\t\t\t\t\tname: 'Davina Jennens',\n\t\t\t\t\ttitle: 'Information Systems Manager',\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\tsubItems: [],\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 6,\n\t\t\t\t\tname: 'Jillene Blakeney',\n\t\t\t\t\ttitle: 'Geologist III',\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\tsubItems: [],\n\t\t\t\t},\n\t\t\t],\n\t\t},\n\t\t{\n\t\t\tid: 3,\n\t\t\tname: 'Odette Lorens',\n\t\t\ttitle: 'Assistant Media Planner',\n\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\tsubItems: [\n\t\t\t\t{\n\t\t\t\t\tid: 8,\n\t\t\t\t\tname: 'Annamarie Klejna',\n\t\t\t\t\ttitle: 'Food Chemist',\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\tsubItems: [],\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tid: 9,\n\t\t\t\t\tname: 'Harcourt Bygreaves',\n\t\t\t\t\ttitle: 'Internal Auditor',\n\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\tsubItems: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 10,\n\t\t\t\t\t\t\tname: 'Effie Gasperi',\n\t\t\t\t\t\t\ttitle: 'Social Worker',\n\t\t\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 11,\n\t\t\t\t\t\t\tname: \"Louis M'Quharge\",\n\t\t\t\t\t\t\ttitle: 'Nurse Practicioner',\n\t\t\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tid: 12,\n\t\t\t\t\t\t\tname: 'Sonnie Mullett',\n\t\t\t\t\t\t\ttitle: 'Biostatistician IV',\n\t\t\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\t\t\tsubItems: [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 13,\n\t\t\t\t\t\t\t\t\tname: 'Keith Towsey',\n\t\t\t\t\t\t\t\t\ttitle: 'Quality Engineer',\n\t\t\t\t\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 14,\n\t\t\t\t\t\t\t\t\tname: 'Griff Garrand',\n\t\t\t\t\t\t\t\t\ttitle: 'Nurse',\n\t\t\t\t\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\t\t\t\t\tsubItems: [\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tid: 19,\n\t\t\t\t\t\t\t\t\t\t\tname: 'Indira Guiver',\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Safety Technician III',\n\t\t\t\t\t\t\t\t\t\t\tpicture:\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tid: 20,\n\t\t\t\t\t\t\t\t\t\t\tname: 'Roddie Raubenheimers',\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Teacher',\n\t\t\t\t\t\t\t\t\t\t\tpicture:\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tid: 21,\n\t\t\t\t\t\t\t\t\t\t\tname: 'Linc Raecroft',\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Computer Systems Analyst I',\n\t\t\t\t\t\t\t\t\t\t\tpicture:\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tid: 22,\n\t\t\t\t\t\t\t\t\t\t\tname: 'Anallise Schutze',\n\t\t\t\t\t\t\t\t\t\t\ttitle: 'Business Systems Development Analyst',\n\t\t\t\t\t\t\t\t\t\t\tpicture:\n\t\t\t\t\t\t\t\t\t\t\t\t'https://picsum.photos/300/300',\n\t\t\t\t\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tid: 15,\n\t\t\t\t\t\t\t\t\tname: 'Fair Glisane',\n\t\t\t\t\t\t\t\t\ttitle: 'Marketing Manager',\n\t\t\t\t\t\t\t\t\tpicture: 'https://picsum.photos/300/300',\n\t\t\t\t\t\t\t\t\tsubItems: [],\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t],\n\t\t},\n\t],\n});\n\n\n//# sourceURL=webpack://orgchart/./src/data.js?");

/***/ }),

/***/ "./src/models/Node.js":
/*!****************************!*\
  !*** ./src/models/Node.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n\tconstructor(id, name, title, picture) {\n\t\tthis.id = id;\n\t\tthis.name = name;\n\t\tthis.title = title;\n\t\tthis.picture = picture;\n\t\tthis.subItems = [];\n\t}\n}\n\n\n//# sourceURL=webpack://orgchart/./src/models/Node.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* reexport safe */ _Node__WEBPACK_IMPORTED_MODULE_0__.Node)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/models/Node.js\");\n\n\n\n//# sourceURL=webpack://orgchart/./src/models/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createOrgCard\": () => (/* binding */ createOrgCard),\n/* harmony export */   \"createEgde\": () => (/* binding */ createEgde),\n/* harmony export */   \"createChildren\": () => (/* binding */ createChildren),\n/* harmony export */   \"loadData\": () => (/* binding */ loadData),\n/* harmony export */   \"saveData\": () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\nconst createOrgCard = (data, onClick, isHead) => {\n\tconst { name, subItems, picture, title } = data;\n\tconst nodeContainer = document.createElement('div');\n\tconst containerClasses = ['org-card__container', !isHead && 'children']\n\t\t.filter(Boolean)\n\t\t.join(' ');\n\tnodeContainer.setAttribute('class', containerClasses);\n\tconst node = document.createElement('div');\n\tnode.setAttribute('class', 'org-card');\n\tif (subItems.length) {\n\t\tnode.addEventListener('click', onClick);\n\t\tnode.classList.add('hasChild');\n\t}\n\tnode.innerHTML = `\n    <img class=\"org-card__picture\" src=\"${picture}\" alt=\"${name}\" />\n    <div class=\"org-card__name\">${name}</div>\n    <div class=\"org-card__title\">${title}</div>\n\t<span class=\"material-icons org-card__addChildren\">control_point</span>\n    <span class=\"material-icons org-card__showChildren\">keyboard_arrow_down</span>\n    `;\n\tnodeContainer.appendChild(node);\n\n\treturn nodeContainer;\n};\n\nconst createEgde = (isMostLeft, isMostRight, isHead) => {\n\tif (isHead || (isMostRight && isMostLeft)) {\n\t\treturn [];\n\t}\n\n\tif (isMostLeft || isMostRight) {\n\t\treturn [new _components__WEBPACK_IMPORTED_MODULE_0__.Edge(isMostRight)];\n\t}\n\n\treturn [new _components__WEBPACK_IMPORTED_MODULE_0__.Edge(true), new _components__WEBPACK_IMPORTED_MODULE_0__.Edge()];\n};\n\nconst createChildren = (children, currentLevel) => {\n\tif (!children.length) {\n\t\treturn null;\n\t}\n\tconst childrenContainer = document.createElement('div');\n\tchildrenContainer.className = 'children-container';\n\tchildren.forEach((child, index) => {\n\t\tconst isMostLeft = index === 0;\n\t\tconst isMostRight = index === children.length - 1;\n\t\tchildrenContainer.appendChild(\n\t\t\t_components__WEBPACK_IMPORTED_MODULE_0__.Node.Item(child, currentLevel + 1, isMostLeft, isMostRight)\n\t\t);\n\t});\n\n\treturn childrenContainer;\n};\n\nconst loadData = () => {\n\ttry {\n\t\tconst localStorage = window.localStorage;\n\t\tif (localStorage && localStorage.getItem('org-data')) {\n\t\t\treturn JSON.parse(localStorage.getItem('org-data'));\n\t\t}\n\n\t\treturn _data__WEBPACK_IMPORTED_MODULE_1__.default;\n\t} catch (err) {\n\t\tconsole.error('Failed to load data from LocalStorage');\n\t\tconsole.info('Load sample data instead');\n\t\treturn _data__WEBPACK_IMPORTED_MODULE_1__.default;\n\t}\n};\n\nconst saveData = (data) => {\n\ttry {\n\t\tconst localStorage = window.localStorage;\n\t\tif (localStorage) {\n\t\t\treturn localStorage.setItem('org-data', JSON.stringify(data));\n\t\t}\n\n\t\tthrow new Error('Failed to save data to LocalStorage');\n\t} catch (err) {\n\t\tconsole.error('Failed to save data to LocalStorage');\n\t}\n};\n\n\n//# sourceURL=webpack://orgchart/./src/utils.js?");

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
/******/ 			// no module.id needed
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