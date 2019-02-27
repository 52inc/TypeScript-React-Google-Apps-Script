(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/code.ts":
/*!****************************!*\
  !*** ./src/server/code.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sheets_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheets-utilities */ \"./src/server/sheets-utilities.ts\");\n\nvar global = {};\nglobal.onOpen = _sheets_utilities__WEBPACK_IMPORTED_MODULE_0__[\"onOpen\"];\nglobal.openDialog = _sheets_utilities__WEBPACK_IMPORTED_MODULE_0__[\"openDialog\"];\nglobal.getSheetsData = _sheets_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getSheetsData\"];\nglobal.addSheet = _sheets_utilities__WEBPACK_IMPORTED_MODULE_0__[\"addSheet\"];\nglobal.deleteSheet = _sheets_utilities__WEBPACK_IMPORTED_MODULE_0__[\"deleteSheet\"];\nglobal.setActiveSheet = _sheets_utilities__WEBPACK_IMPORTED_MODULE_0__[\"setActiveSheet\"];\n\n\n//# sourceURL=webpack:///./src/server/code.ts?");

/***/ }),

/***/ "./src/server/sheets-utilities.ts":
/*!****************************************!*\
  !*** ./src/server/sheets-utilities.ts ***!
  \****************************************/
/*! exports provided: onOpen, openDialog, getSheetsData, addSheet, deleteSheet, setActiveSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onOpen\", function() { return onOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openDialog\", function() { return openDialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSheetsData\", function() { return getSheetsData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSheet\", function() { return addSheet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSheet\", function() { return deleteSheet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setActiveSheet\", function() { return setActiveSheet; });\nvar onOpen = function () {\n    SpreadsheetApp.getUi()\n        .createMenu(\"Custom scripts\")\n        .addItem(\"Edit sheets [sample React project]\", \"openDialog\")\n        .addToUi();\n};\nvar openDialog = function () {\n    var html = HtmlService.createHtmlOutputFromFile(\"dialog\")\n        .setWidth(400)\n        .setHeight(600);\n    SpreadsheetApp\n        .getUi()\n        .showModalDialog(html, \"Sheet Editor\");\n};\nvar getSheets = function () { return SpreadsheetApp\n    .getActive()\n    .getSheets(); };\nvar getActiveSheetName = function () { return SpreadsheetApp\n    .getActive()\n    .getSheetName(); };\nvar getSheetsData = function () {\n    var activeSheetName = getActiveSheetName();\n    return getSheets().map(function (sheet, index) {\n        var sheetName = sheet.getName();\n        return {\n            text: sheetName,\n            sheetIndex: index,\n            isActive: sheetName === activeSheetName\n        };\n    });\n};\nvar addSheet = function (sheetTitle) {\n    SpreadsheetApp\n        .getActive()\n        .insertSheet(sheetTitle);\n    return getSheetsData();\n};\nvar deleteSheet = function (sheetIndex) {\n    var sheets = getSheets();\n    SpreadsheetApp\n        .getActive()\n        .deleteSheet(sheets[sheetIndex]);\n    return getSheetsData();\n};\nvar setActiveSheet = function (sheetName) {\n    SpreadsheetApp\n        .getActive()\n        .getSheetByName(sheetName)\n        .activate();\n    return getSheetsData();\n};\n\n\n\n//# sourceURL=webpack:///./src/server/sheets-utilities.ts?");

/***/ })

/******/ })));