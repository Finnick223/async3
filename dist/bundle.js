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

/***/ "./src/data/fetchDatalist.ts":
/*!***********************************!*\
  !*** ./src/data/fetchDatalist.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchDatalist: () => (/* binding */ fetchDatalist)\n/* harmony export */ });\nvar fetchDatalist = function () {\n    fetch('https://dog.ceo/api/breeds/list')\n        .then(function (res) { return res.json(); })\n        .then(function (data) {\n        data.message.forEach(function (item) {\n            var option = document.createElement('option');\n            option.value = item;\n            var breed = document.getElementById('list');\n            if (!breed)\n                throw new Error('input doesnt exist');\n            breed.appendChild(option);\n        });\n    })\n        .catch(function (err) { return err; });\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/data/fetchDatalist.ts?");

/***/ }),

/***/ "./src/data/getDogs.ts":
/*!*****************************!*\
  !*** ./src/data/getDogs.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDogs: () => (/* binding */ getDogs)\n/* harmony export */ });\nvar getDogs = function (breedName) {\n    return fetch(\"https://dog.ceo/api/breed/\".concat(breedName, \"/images\"))\n        .then(function (data) { return data.json(); })\n        .then(function (img) {\n        return img;\n    });\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/data/getDogs.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getElements: () => (/* binding */ getElements)\n/* harmony export */ });\n/* harmony import */ var _data_getDogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/getDogs */ \"./src/data/getDogs.ts\");\n/* harmony import */ var _data_fetchDatalist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/fetchDatalist */ \"./src/data/fetchDatalist.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar getElements = function () {\n    var container = document.querySelector('.container');\n    var submit = document.querySelector('.submit');\n    var input = document.querySelector('.breed');\n    if (!container || !submit || !input)\n        throw new Error('dom elements doesnt exist');\n    return {\n        container: container,\n        submit: submit,\n        input: input,\n    };\n};\nvar renderImage = function (link) {\n    var img = document.createElement('img');\n    img.src = link;\n    img.classList.add('child');\n    var container = getElements().container;\n    container === null || container === void 0 ? void 0 : container.appendChild(img);\n};\nfunction getRndInteger(min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\nvar init = function () {\n    (0,_data_fetchDatalist__WEBPACK_IMPORTED_MODULE_1__.fetchDatalist)();\n    var _a = getElements(), submit = _a.submit, input = _a.input;\n    submit === null || submit === void 0 ? void 0 : submit.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {\n        var images, err_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, (0,_data_getDogs__WEBPACK_IMPORTED_MODULE_0__.getDogs)(String(input.value))];\n                case 1:\n                    images = _a.sent();\n                    // for (const i in images.message) {\n                    // console.log(images.message[i]);\n                    renderImage(images.message[getRndInteger(1, 10)]);\n                    // }\n                    input.value = '';\n                    return [3 /*break*/, 3];\n                case 2:\n                    err_1 = _a.sent();\n                    console.log(err_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); });\n};\ninit();\n\n\n//# sourceURL=webpack://test-webpack/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;