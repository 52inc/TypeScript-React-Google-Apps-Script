function getSheetsData() {
}
function addSheet(sheetTitle) {
}
function deleteSheet(sheetIndex) {
}
function setActiveSheet(sheetName) {
}!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var getSheets = function() {
        return SpreadsheetApp.getActive().getSheets();
    }, getSheetsData = function() {
        var activeSheetName = SpreadsheetApp.getActive().getSheetName();
        return getSheets().map(function(sheet, index) {
            var sheetName = sheet.getName();
            return {
                text: sheetName,
                sheetIndex: index,
                isActive: sheetName === activeSheetName
            };
        });
    }, global = {
        onOpen: function() {
            SpreadsheetApp.getUi().createMenu("Custom scripts").addItem("Edit sheets [sample React project]", "openDialog").addToUi();
        },
        openDialog: function() {
            var html = HtmlService.createHtmlOutputFromFile("dialog").setWidth(400).setHeight(600);
            SpreadsheetApp.getUi().showModalDialog(html, "Sheet Editor");
        }
    };
    global.getSheetsData = getSheetsData, global.addSheet = function(sheetTitle) {
        return SpreadsheetApp.getActive().insertSheet(sheetTitle), getSheetsData();
    }, global.deleteSheet = function(sheetIndex) {
        var sheets = getSheets();
        return SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]), getSheetsData();
    }, global.setActiveSheet = function(sheetName) {
        return SpreadsheetApp.getActive().getSheetByName(sheetName).activate(), getSheetsData();
    };
} ]));