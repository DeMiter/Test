(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/Test/i18n/i18n.properties":
/*!*****************************************************!*\
  !*** ./build.definitions/Test/i18n/i18n.properties ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/Test/Rules/AppUpdateFailure.js":
/*!**********************************************************!*\
  !*** ./build.definitions/Test/Rules/AppUpdateFailure.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/Test/Actions/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/Test/Rules/AppUpdateSuccess.js":
/*!**********************************************************!*\
  !*** ./build.definitions/Test/Rules/AppUpdateSuccess.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/Test/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/Test/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/Test/Rules/EwmLogon/EwmLogon.js":
/*!***********************************************************!*\
  !*** ./build.definitions/Test/Rules/EwmLogon/EwmLogon.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EwmLogon)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function EwmLogon(clientAPI) {
  clientAPI.executeAction("/Test/Actions/EwmLogonToResource.action");
}

/***/ }),

/***/ "./build.definitions/Test/Rules/EwmLogon/EwmLogonFailure.js":
/*!******************************************************************!*\
  !*** ./build.definitions/Test/Rules/EwmLogon/EwmLogonFailure.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EwmLogonFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function EwmLogonFailure(clientAPI) {}

/***/ }),

/***/ "./build.definitions/Test/Rules/EwmLogon/EwmLogonSuccess.js":
/*!******************************************************************!*\
  !*** ./build.definitions/Test/Rules/EwmLogon/EwmLogonSuccess.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EwmLogonSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function EwmLogonSuccess(clientAPI) {}

/***/ }),

/***/ "./build.definitions/Test/Rules/OnWillUpdate.js":
/*!******************************************************!*\
  !*** ./build.definitions/Test/Rules/OnWillUpdate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/Test/Actions/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/Test/Rules/ResetAppSettingsAndLogout.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/Test/Rules/ResetAppSettingsAndLogout.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
  let logger = context.getLogger();
  let platform = context.nativescript.platformModule;
  let appSettings = context.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return context.getPageProxy().executeAction('/Test/Actions/Logout.action');
  }
}

/***/ }),

/***/ "./build.definitions/Test/Styles/Styles.css":
/*!**************************************************!*\
  !*** ./build.definitions/Test/Styles/Styles.css ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", "",{"version":3,"sources":["webpack://./build.definitions/Test/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/Test/Styles/Styles.less":
/*!***************************************************!*\
  !*** ./build.definitions/Test/Styles/Styles.less ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", "",{"version":3,"sources":["webpack://./build.definitions/Test/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/Test/Styles/Styles.light.css":
/*!********************************************************!*\
  !*** ./build.definitions/Test/Styles/Styles.light.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/Test/Styles/Styles.light.nss":
/*!********************************************************!*\
  !*** ./build.definitions/Test/Styles/Styles.light.nss ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/api.js ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-1.2301.1/tools/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \**************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/Test/Pages/EwmLogon.page":
/*!****************************************************!*\
  !*** ./build.definitions/Test/Pages/EwmLogon.page ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Page","_Name":"EwmLogon","Controls":[{"_Name":"FormCellContainer0","_Type":"Control.Type.FormCellContainer","Sections":[{"Controls":[{"Value":"BS01","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"Warehouse","IsEditable":true,"IsVisible":true,"Caption":"Warehouse","PlaceHolder":"Scan Warehouse","AlternateInput":"Barcode"},{"Value":"DIMITROV","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"Resource","IsEditable":true,"IsVisible":true,"Caption":"Resource","PlaceHolder":"Scan Resource","AlternateInput":"Barcode"},{"_Type":"Control.Type.FormCell.Button","_Name":"ContinueButton","IsVisible":true,"Title":"Call","TextAlignment":"center","ButtonType":"Primary","OnPress":"/Test/Rules/EwmLogon/EwmLogon.js"}],"Visible":true}]}],"Caption":"EwmLogon"}

/***/ }),

/***/ "./build.definitions/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_Detail.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_Detail.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ExecutionStatusTextsType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"ExecutionStatusTexts","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{SystemStatusName}","Subhead":"{SystemStatus}","BodyText":"","Footnote":"{SystemStatusShortName}","Description":"{Language}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"SystemStatus","Value":"{SystemStatus}"},{"KeyName":"Language","Value":"{Language}"},{"KeyName":"SystemStatusName","Value":"{SystemStatusName}"},{"KeyName":"SystemStatusShortName","Value":"{SystemStatusShortName}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ExecutionStatusTexts_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_List.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_List.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"ExecutionStatusTexts","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{Language}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_Detail.action","StatusImage":"","Title":"{SystemStatusName}","Footnote":"{SystemStatusShortName}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{SystemStatus}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"ExecutionStatusTexts","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"ExecutionStatusTexts_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_Detail.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_Detail.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"LoadingHandlingUnitsType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"LoadingHandlingUnits","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductName}","Subhead":"{HandlingUnitNumber}","BodyText":"","Footnote":"{PackagingMaterial}","Description":"{EWMWarehouse}","StatusText":"{LoadingLogicalPosition}","StatusImage":"","SubstatusImage":"","SubstatusText":"{DestinationStorageBin}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"HandlingUnitNumber","Value":"{HandlingUnitNumber}"},{"KeyName":"EWMWarehouse","Value":"{EWMWarehouse}"},{"KeyName":"PackagingMaterial","Value":"{PackagingMaterial}"},{"KeyName":"LoadingLogicalPosition","Value":"{LoadingLogicalPosition}"},{"KeyName":"DestinationStorageBin","Value":"{DestinationStorageBin}"},{"KeyName":"SourceStorageBin","Value":"{SourceStorageBin}"},{"KeyName":"Status","Value":"{Status}"},{"KeyName":"ProductName","Value":"{ProductName}"},{"KeyName":"ProductDescription","Value":"{ProductDescription}"},{"KeyName":"IntrLogsOpFinalStorageBin","Value":"{IntrLogsOpFinalStorageBin}"},{"KeyName":"IntrLogsOpHandoverPoint","Value":"{IntrLogsOpHandoverPoint}"},{"KeyName":"EWMProductionSupplyArea","Value":"{EWMProductionSupplyArea}"},{"KeyName":"IntrLogsOpLoadgSrceStorageBin","Value":"{IntrLogsOpLoadgSrceStorageBin}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"LoadingHandlingUnits_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_List.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_List.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"LoadingHandlingUnits","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{EWMWarehouse}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_Detail.action","StatusImage":"","Title":"{ProductName}","Footnote":"{PackagingMaterial}","PreserveIconStackSpacing":false,"StatusText":"{LoadingLogicalPosition}","Subhead":"{HandlingUnitNumber}","SubstatusText":"{DestinationStorageBin}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"LoadingHandlingUnits","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"LoadingHandlingUnits_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/LoadingTours/LoadingTours_Detail.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/Test/Pages/LoadingTours/LoadingTours_Detail.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"LoadingToursType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"LoadingTours","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{IntrLogsOpTourExternalID}","Subhead":"{EWMWarehouse}","BodyText":"","Footnote":"{IntralogisticsOperationsLoader}","Description":"{IntralogisticsOperationsTour}","StatusText":"{WarehouseResource}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PlannedDepartureUTCDateTime}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"EWMWarehouse","Value":"{EWMWarehouse}"},{"KeyName":"IntralogisticsOperationsTour","Value":"{IntralogisticsOperationsTour}"},{"KeyName":"IntrLogsOpTourExternalID","Value":"{IntrLogsOpTourExternalID}"},{"KeyName":"IntralogisticsOperationsLoader","Value":"{IntralogisticsOperationsLoader}"},{"KeyName":"WarehouseResource","Value":"{WarehouseResource}"},{"KeyName":"PlannedDepartureUTCDateTime","Value":"{PlannedDepartureUTCDateTime}"},{"KeyName":"IntrLogsOpTourExecutionStatus","Value":"{IntrLogsOpTourExecutionStatus}"},{"KeyName":"IntrLogsOpRouteVersion","Value":"{IntrLogsOpRouteVersion}"},{"KeyName":"IntrLogsOpRouteVersIsSelfLoadg","Value":"{IntrLogsOpRouteVersIsSelfLoadg}"},{"KeyName":"IntralogisticsOperationsRoute","Value":"{IntralogisticsOperationsRoute}"},{"KeyName":"Description","Value":"{Description}"},{"KeyName":"StartPointStorageType","Value":"{StartPointStorageType}"},{"KeyName":"StartPointStorageSection","Value":"{StartPointStorageSection}"},{"KeyName":"StartPointStorageBin","Value":"{StartPointStorageBin}"},{"KeyName":"NumberOfHandlingUnit","Value":"{NumberOfHandlingUnit}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"LoadingTours_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/LoadingTours/LoadingTours_List.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/Test/Pages/LoadingTours/LoadingTours_List.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"LoadingTours","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{IntralogisticsOperationsTour}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/LoadingTours/NavToLoadingTours_Detail.action","StatusImage":"","Title":"{IntrLogsOpTourExternalID}","Footnote":"{IntralogisticsOperationsLoader}","PreserveIconStackSpacing":false,"StatusText":"{WarehouseResource}","Subhead":"{EWMWarehouse}","SubstatusText":"{PlannedDepartureUTCDateTime}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"LoadingTours","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"LoadingTours_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/Main.page":
/*!************************************************!*\
  !*** ./build.definitions/Test/Pages/Main.page ***!
  \************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Main","Controls":[{"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Buttons":[{"OnPress":"/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_List.action","Alignment":"Center","Title":"ExecutionStatusTexts","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/Users/NavToUsers_List.action","Alignment":"Center","Title":"Users","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_List.action","Alignment":"Center","Title":"LoadingHandlingUnits","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/LoadingTours/NavToLoadingTours_List.action","Alignment":"Center","Title":"LoadingTours","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/Routes/NavToRoutes_List.action","Alignment":"Center","Title":"Routes","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/RouteVersions/NavToRouteVersions_List.action","Alignment":"Center","Title":"RouteVersions","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/UnloadingTours/NavToUnloadingTours_List.action","Alignment":"Center","Title":"UnloadingTours","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_List.action","Alignment":"Center","Title":"UnloadingHandlingUnits","ButtonType":"Text","Semantic":"Tint"},{"OnPress":"/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_List.action","Alignment":"Center","Title":"UnloadingTourStops","ButtonType":"Text","Semantic":"Tint"}],"_Name":"SectionButtonTable0","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","ToolBar":{"Items":[{"_Name":"LogoutToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Logout","OnPress":"/Test/Actions/LogoutMessage.action"},{"_Name":"UpdateToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Update","Enabled":true,"Clickable":true,"OnPress":"/Test/Actions/AppUpdateProgressBanner.action","Visible":"$(PLT,true,true,false)"}]},"PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/RouteVersions/RouteVersions_Detail.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/Test/Pages/RouteVersions/RouteVersions_Detail.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"RouteVersionsType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"RouteVersions","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{IntrLogsOpRouteVersion}","Subhead":"{RouteVersValdtyStartDateTime}","BodyText":"","Footnote":"{IntrLogsOpRouteVersionIsBlkd}","Description":"{IntrLogsOpRouteVersionStatus}","StatusText":"{IntrLogsOpRouteVersIsSelfLoadg}","StatusImage":"","SubstatusImage":"","SubstatusText":"{AvgTransportDuration}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"IntrLogsOpRouteVersion","Value":"{IntrLogsOpRouteVersion}"},{"KeyName":"RouteVersValdtyStartDateTime","Value":"{RouteVersValdtyStartDateTime}"},{"KeyName":"IntrLogsOpRouteVersionStatus","Value":"{IntrLogsOpRouteVersionStatus}"},{"KeyName":"IntrLogsOpRouteVersionIsBlkd","Value":"{IntrLogsOpRouteVersionIsBlkd}"},{"KeyName":"IntrLogsOpRouteVersIsSelfLoadg","Value":"{IntrLogsOpRouteVersIsSelfLoadg}"},{"KeyName":"AvgTransportDuration","Value":"{AvgTransportDuration}"},{"KeyName":"AvgTransportTimeUnit","Value":"{AvgTransportTimeUnit}"},{"KeyName":"PlngCalendarPerdcLotSizing","Value":"{PlngCalendarPerdcLotSizing}"},{"KeyName":"PlanningCalendar","Value":"{PlanningCalendar}"},{"KeyName":"PackagingMaterial","Value":"{PackagingMaterial}"},{"KeyName":"NumberOfHandlingUnit","Value":"{NumberOfHandlingUnit}"},{"KeyName":"RsceIsRqdForLoadg","Value":"{RsceIsRqdForLoadg}"},{"KeyName":"UnitPositionIsRqdForLoadg","Value":"{UnitPositionIsRqdForLoadg}"},{"KeyName":"UnitPositionForLoadgMinValue","Value":"{UnitPositionForLoadgMinValue}"},{"KeyName":"UnitPositionForLoadgMaxValue","Value":"{UnitPositionForLoadgMaxValue}"},{"KeyName":"StartPointIsRqdForLoadg","Value":"{StartPointIsRqdForLoadg}"},{"KeyName":"RsceIsRqdForUnldg","Value":"{RsceIsRqdForUnldg}"},{"KeyName":"IntrLogsOpConfirmationMethod","Value":"{IntrLogsOpConfirmationMethod}"},{"KeyName":"UnldgStopSqncIsChangable","Value":"{UnldgStopSqncIsChangable}"},{"KeyName":"IntrLogsOpPrfrdUnldgDirection","Value":"{IntrLogsOpPrfrdUnldgDirection}"},{"KeyName":"RsrcGrp","Value":"{RsrcGrp}"},{"KeyName":"IntrLogsOpCycleTime","Value":"{IntrLogsOpCycleTime}"},{"KeyName":"IntrLogsOpCycleTimeUnit","Value":"{IntrLogsOpCycleTimeUnit}"},{"KeyName":"StartBufferDuration","Value":"{StartBufferDuration}"},{"KeyName":"StartBufferTimeUnit","Value":"{StartBufferTimeUnit}"},{"KeyName":"EndBufferDuration","Value":"{EndBufferDuration}"},{"KeyName":"EndBufferTimeUnit","Value":"{EndBufferTimeUnit}"},{"KeyName":"IntrLogsOpDepartureTimeType","Value":"{IntrLogsOpDepartureTimeType}"},{"KeyName":"IntrLogsOpPlanningHorizon","Value":"{IntrLogsOpPlanningHorizon}"},{"KeyName":"IntrLogsOpPlanningHorizonUnit","Value":"{IntrLogsOpPlanningHorizonUnit}"},{"KeyName":"AvgLoadingDuration","Value":"{AvgLoadingDuration}"},{"KeyName":"AvgLoadingTimeUnit","Value":"{AvgLoadingTimeUnit}"},{"KeyName":"IntrLogsOpShift1CycleTime","Value":"{IntrLogsOpShift1CycleTime}"},{"KeyName":"IntrLogsOpShift2CycleTime","Value":"{IntrLogsOpShift2CycleTime}"},{"KeyName":"IntrLogsOpShift3CycleTime","Value":"{IntrLogsOpShift3CycleTime}"},{"KeyName":"IntrLogsOpShift4CycleTime","Value":"{IntrLogsOpShift4CycleTime}"},{"KeyName":"IntrLogsOpShift5CycleTime","Value":"{IntrLogsOpShift5CycleTime}"},{"KeyName":"IntrLogsOpTourCrtnPrecondition","Value":"{IntrLogsOpTourCrtnPrecondition}"},{"KeyName":"IntrLogsOpLowerTimeLimit","Value":"{IntrLogsOpLowerTimeLimit}"},{"KeyName":"IntrLogsOpLowerTimeLimitUnit","Value":"{IntrLogsOpLowerTimeLimitUnit}"},{"KeyName":"IntrLogsOpUpperTimeLimit","Value":"{IntrLogsOpUpperTimeLimit}"},{"KeyName":"IntrLogsOpUpperTimeLimitUnit","Value":"{IntrLogsOpUpperTimeLimitUnit}"},{"KeyName":"CreationDateTime","Value":"{CreationDateTime}"},{"KeyName":"CreatedByUser","Value":"{CreatedByUser}"},{"KeyName":"LastChangeDateTime","Value":"{LastChangeDateTime}"},{"KeyName":"LastChangedByUser","Value":"{LastChangedByUser}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"RouteVersions_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/RouteVersions/RouteVersions_List.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/Test/Pages/RouteVersions/RouteVersions_List.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"RouteVersions","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{IntrLogsOpRouteVersionStatus}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/RouteVersions/NavToRouteVersions_Detail.action","StatusImage":"","Title":"{IntrLogsOpRouteVersion}","Footnote":"{IntrLogsOpRouteVersionIsBlkd}","PreserveIconStackSpacing":false,"StatusText":"{IntrLogsOpRouteVersIsSelfLoadg}","Subhead":"{RouteVersValdtyStartDateTime}","SubstatusText":"{AvgTransportDuration}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"RouteVersions","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"RouteVersions_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/Routes/Routes_Detail.page":
/*!****************************************************************!*\
  !*** ./build.definitions/Test/Pages/Routes/Routes_Detail.page ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"RoutesType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"Routes","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{Warehouse}","Subhead":"{IntralogisticsOperationsRoute}","BodyText":"","Footnote":"{IntrLogsOpRouteParamGroup}","Description":"{IntrLogsOpRouteType}","StatusText":"{StartPointStorageType}","StatusImage":"","SubstatusImage":"","SubstatusText":"{StartPointStorageSection}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Warehouse","Value":"{Warehouse}"},{"KeyName":"IntralogisticsOperationsRoute","Value":"{IntralogisticsOperationsRoute}"},{"KeyName":"IntrLogsOpRouteType","Value":"{IntrLogsOpRouteType}"},{"KeyName":"IntrLogsOpRouteParamGroup","Value":"{IntrLogsOpRouteParamGroup}"},{"KeyName":"StartPointStorageType","Value":"{StartPointStorageType}"},{"KeyName":"StartPointStorageSection","Value":"{StartPointStorageSection}"},{"KeyName":"StartPointStorageBin","Value":"{StartPointStorageBin}"},{"KeyName":"EndPointStorageType","Value":"{EndPointStorageType}"},{"KeyName":"EndPointStorageSection","Value":"{EndPointStorageSection}"},{"KeyName":"EndPointStorageBin","Value":"{EndPointStorageBin}"},{"KeyName":"IntrLogsOpRouteLifecycleSts","Value":"{IntrLogsOpRouteLifecycleSts}"},{"KeyName":"IntrLogsOpRouteProposalProfile","Value":"{IntrLogsOpRouteProposalProfile}"},{"KeyName":"LifeCycleStatusDateTime","Value":"{LifeCycleStatusDateTime}"},{"KeyName":"CreationDateTime","Value":"{CreationDateTime}"},{"KeyName":"CreatedByUser","Value":"{CreatedByUser}"},{"KeyName":"LastChangeDateTime","Value":"{LastChangeDateTime}"},{"KeyName":"LastChangedByUser","Value":"{LastChangedByUser}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Routes_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/Routes/Routes_List.page":
/*!**************************************************************!*\
  !*** ./build.definitions/Test/Pages/Routes/Routes_List.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Routes","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{IntrLogsOpRouteType}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/Routes/NavToRoutes_Detail.action","StatusImage":"","Title":"{Warehouse}","Footnote":"{IntrLogsOpRouteParamGroup}","PreserveIconStackSpacing":false,"StatusText":"{StartPointStorageType}","Subhead":"{IntralogisticsOperationsRoute}","SubstatusText":"{StartPointStorageSection}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Routes","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Routes_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_Detail.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_Detail.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"UnloadingHandlingUnitsType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"UnloadingHandlingUnits","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductName}","Subhead":"{HandlingUnitNumber}","BodyText":"","Footnote":"{IntrLogsOpTourLoadgPlanStatus}","Description":"{LoadingLogicalPosition}","StatusText":"{EWMProductionSupplyArea}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PackagingMaterial}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"HandlingUnitNumber","Value":"{HandlingUnitNumber}"},{"KeyName":"LoadingLogicalPosition","Value":"{LoadingLogicalPosition}"},{"KeyName":"IntrLogsOpTourLoadgPlanStatus","Value":"{IntrLogsOpTourLoadgPlanStatus}"},{"KeyName":"EWMProductionSupplyArea","Value":"{EWMProductionSupplyArea}"},{"KeyName":"PackagingMaterial","Value":"{PackagingMaterial}"},{"KeyName":"IntrLogsOpHandoverPoint","Value":"{IntrLogsOpHandoverPoint}"},{"KeyName":"DestinationStorageBin","Value":"{DestinationStorageBin}"},{"KeyName":"ProductName","Value":"{ProductName}"},{"KeyName":"ProductDescription","Value":"{ProductDescription}"},{"KeyName":"IntrLogsOpFinalStorageBin","Value":"{IntrLogsOpFinalStorageBin}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"UnloadingHandlingUnits_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_List.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_List.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"UnloadingHandlingUnits","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{LoadingLogicalPosition}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_Detail.action","StatusImage":"","Title":"{ProductName}","Footnote":"{IntrLogsOpTourLoadgPlanStatus}","PreserveIconStackSpacing":false,"StatusText":"{EWMProductionSupplyArea}","Subhead":"{HandlingUnitNumber}","SubstatusText":"{PackagingMaterial}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"UnloadingHandlingUnits","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"UnloadingHandlingUnits_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/UnloadingTourStops/UnloadingTourStops_Detail.page":
/*!****************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/UnloadingTourStops/UnloadingTourStops_Detail.page ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"UnloadingTourStopsType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"UnloadingTourStops","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{IntralogisticsOperationsStop}","Subhead":"{IntrLogsOpStopType}","BodyText":"","Footnote":"{ExecutionStopSequenceNumber}","Description":"{RouteStopSequenceNumber}","StatusText":"{IntrLogsOpStopStatus}","StatusImage":"","SubstatusImage":"","SubstatusText":"{IntrLogsOpHandoverPoint}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"IntralogisticsOperationsStop","Value":"{IntralogisticsOperationsStop}"},{"KeyName":"IntrLogsOpStopType","Value":"{IntrLogsOpStopType}"},{"KeyName":"RouteStopSequenceNumber","Value":"{RouteStopSequenceNumber}"},{"KeyName":"ExecutionStopSequenceNumber","Value":"{ExecutionStopSequenceNumber}"},{"KeyName":"IntrLogsOpStopStatus","Value":"{IntrLogsOpStopStatus}"},{"KeyName":"IntrLogsOpHandoverPoint","Value":"{IntrLogsOpHandoverPoint}"},{"KeyName":"DestinationStorageBin","Value":"{DestinationStorageBin}"},{"KeyName":"IntrLogsOpConfirmationMethod","Value":"{IntrLogsOpConfirmationMethod}"},{"KeyName":"NumberOfHandlingUnit","Value":"{NumberOfHandlingUnit}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"UnloadingTourStops_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/UnloadingTourStops/UnloadingTourStops_List.page":
/*!**************************************************************************************!*\
  !*** ./build.definitions/Test/Pages/UnloadingTourStops/UnloadingTourStops_List.page ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"UnloadingTourStops","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{RouteStopSequenceNumber}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_Detail.action","StatusImage":"","Title":"{IntralogisticsOperationsStop}","Footnote":"{ExecutionStopSequenceNumber}","PreserveIconStackSpacing":false,"StatusText":"{IntrLogsOpStopStatus}","Subhead":"{IntrLogsOpStopType}","SubstatusText":"{IntrLogsOpHandoverPoint}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"UnloadingTourStops","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"UnloadingTourStops_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/UnloadingTours/UnloadingTours_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/Test/Pages/UnloadingTours/UnloadingTours_Detail.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"UnloadingToursType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"UnloadingTours","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{IntrLogsOpTourExternalID}","Subhead":"{EWMWarehouse}","BodyText":"","Footnote":"{WarehouseResource}","Description":"{IntralogisticsOperationsTour}","StatusText":"{IntralogisticsOperationsDriver}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PlannedDepartureUTCDateTime}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"EWMWarehouse","Value":"{EWMWarehouse}"},{"KeyName":"IntralogisticsOperationsTour","Value":"{IntralogisticsOperationsTour}"},{"KeyName":"IntrLogsOpTourExternalID","Value":"{IntrLogsOpTourExternalID}"},{"KeyName":"WarehouseResource","Value":"{WarehouseResource}"},{"KeyName":"IntralogisticsOperationsDriver","Value":"{IntralogisticsOperationsDriver}"},{"KeyName":"PlannedDepartureUTCDateTime","Value":"{PlannedDepartureUTCDateTime}"},{"KeyName":"ILOPlannedArrivalUTCDateTime","Value":"{ILOPlannedArrivalUTCDateTime}"},{"KeyName":"IntrLogsOpTourExecutionStatus","Value":"{IntrLogsOpTourExecutionStatus}"},{"KeyName":"IntralogisticsOperationsRoute","Value":"{IntralogisticsOperationsRoute}"},{"KeyName":"Description","Value":"{Description}"},{"KeyName":"EndPointStorageType","Value":"{EndPointStorageType}"},{"KeyName":"EndPointStorageSection","Value":"{EndPointStorageSection}"},{"KeyName":"EndPointStorageBin","Value":"{EndPointStorageBin}"},{"KeyName":"IntrLogsOpRouteVersion","Value":"{IntrLogsOpRouteVersion}"},{"KeyName":"UnldgStopSqncIsChangeable","Value":"{UnldgStopSqncIsChangeable}"},{"KeyName":"IntrLogsOpNextTourStop","Value":"{IntrLogsOpNextTourStop}"},{"KeyName":"IntrLogsOpNextStopType","Value":"{IntrLogsOpNextStopType}"},{"KeyName":"ILONextTourStopExecSqncNmbr","Value":"{ILONextTourStopExecSqncNmbr}"},{"KeyName":"ILONextTourStopHandoverPoint","Value":"{ILONextTourStopHandoverPoint}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"UnloadingTours_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/UnloadingTours/UnloadingTours_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/Test/Pages/UnloadingTours/UnloadingTours_List.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"UnloadingTours","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{IntralogisticsOperationsTour}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/UnloadingTours/NavToUnloadingTours_Detail.action","StatusImage":"","Title":"{IntrLogsOpTourExternalID}","Footnote":"{WarehouseResource}","PreserveIconStackSpacing":false,"StatusText":"{IntralogisticsOperationsDriver}","Subhead":"{EWMWarehouse}","SubstatusText":"{PlannedDepartureUTCDateTime}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"UnloadingTours","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"UnloadingTours_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/Users/Users_Detail.page":
/*!**************************************************************!*\
  !*** ./build.definitions/Test/Pages/Users/Users_Detail.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"UsersType Detail","DesignTimeTarget":{"Service":"/Test/Services/RTOP.service","EntitySet":"Users","QueryOptions":""},"ActionBar":{"Items":[]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{IntralogisticsOperationsUser}","Subhead":"","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"IntralogisticsOperationsUser","Value":"{IntralogisticsOperationsUser}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Users_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Test/Pages/Users/Users_List.page":
/*!************************************************************!*\
  !*** ./build.definitions/Test/Pages/Users/Users_List.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Users","ActionBar":{"Items":[]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/Test/Actions/Users/NavToUsers_Detail.action","StatusImage":"","Title":"{IntralogisticsOperationsUser}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Users","Service":"/Test/Services/RTOP.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Users_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/Test/Pages/EwmLogon.page","OnLaunch":["/Test/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/Test/Rules/OnWillUpdate.js","OnDidUpdate":"/Test/Actions/Service/InitializeOnline.action","Styles":"/Test/Styles/Styles.css","Version":"/Test/Globals/AppDefinition_Version.global","Localization":"/Test/i18n/i18n.properties","_SchemaVersion":"6.3","_Name":"Test","StyleSheets":{"Styles":{"css":"/Test/Styles/Styles.light.css","ios":"/Test/Styles/Styles.light.nss","android":"/Test/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/Test/Styles/Styles.light.nss","android":"/Test/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/Test/Actions/AppUpdate.action":
/*!*********************************************************!*\
  !*** ./build.definitions/Test/Actions/AppUpdate.action ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/Test/Rules/AppUpdateFailure.js","OnSuccess":"/Test/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/Test/Actions/AppUpdateFailureMessage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/Test/Actions/AppUpdateFailureMessage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/Test/Actions/AppUpdateProgressBanner.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/Test/Actions/AppUpdateProgressBanner.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/Test/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/Test/Actions/AppUpdateSuccessMessage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/Test/Actions/AppUpdateSuccessMessage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/Test/Actions/CloseModalPage_Cancel.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/Test/Actions/CloseModalPage_Cancel.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/Test/Actions/CloseModalPage_Complete.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/Test/Actions/CloseModalPage_Complete.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/Test/Actions/ClosePage.action":
/*!*********************************************************!*\
  !*** ./build.definitions/Test/Actions/ClosePage.action ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/Test/Actions/EwmLogonToResource.action":
/*!******************************************************************!*\
  !*** ./build.definitions/Test/Actions/EwmLogonToResource.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.RestService.SendRequest","ActionResult":{"_Name":"EwmLogonActionResult"},"ShowActivityIndicator":true,"OnSuccess":"/Test/Rules/EwmLogon/EwmLogonSuccess.js","OnFailure":"/Test/Rules/EwmLogon/EwmLogonFailure.js","Target":{"Service":"/Test/Services/RTOP.service","Path":"Users('')/SAP__self.LogonToWarehouseResource","RequestProperties":{"Method":"POST","Body":{"EWMWarehouse":"BS01","WarehouseResource":"DIMITROV"}}}}

/***/ }),

/***/ "./build.definitions/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_Detail.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_Detail.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_List.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_List.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_Detail.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_Detail.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_List.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_List.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/LoadingTours/NavToLoadingTours_Detail.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/LoadingTours/NavToLoadingTours_Detail.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/LoadingTours/LoadingTours_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/LoadingTours/NavToLoadingTours_List.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/Test/Actions/LoadingTours/NavToLoadingTours_List.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/LoadingTours/LoadingTours_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/Logout.action":
/*!******************************************************!*\
  !*** ./build.definitions/Test/Actions/Logout.action ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/Test/Actions/LogoutMessage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/Test/Actions/LogoutMessage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/Test/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/Test/Actions/OnWillUpdate.action":
/*!************************************************************!*\
  !*** ./build.definitions/Test/Actions/OnWillUpdate.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/Test/Actions/RouteVersions/NavToRouteVersions_Detail.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/RouteVersions/NavToRouteVersions_Detail.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/RouteVersions/RouteVersions_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/RouteVersions/NavToRouteVersions_List.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/RouteVersions/NavToRouteVersions_List.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/RouteVersions/RouteVersions_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/Routes/NavToRoutes_Detail.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/Test/Actions/Routes/NavToRoutes_Detail.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/Routes/Routes_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/Routes/NavToRoutes_List.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/Test/Actions/Routes/NavToRoutes_List.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/Routes/Routes_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/Service/InitializeOnline.action":
/*!************************************************************************!*\
  !*** ./build.definitions/Test/Actions/Service/InitializeOnline.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/Test/Services/RTOP.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/Test/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/Test/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/Test/Actions/Service/InitializeOnlineFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/Test/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_Detail.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_Detail.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_List.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_List.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_Detail.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_Detail.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/UnloadingTourStops/UnloadingTourStops_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_List.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_List.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/UnloadingTourStops/UnloadingTourStops_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/UnloadingTours/NavToUnloadingTours_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/UnloadingTours/NavToUnloadingTours_Detail.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/UnloadingTours/UnloadingTours_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/UnloadingTours/NavToUnloadingTours_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/Test/Actions/UnloadingTours/NavToUnloadingTours_List.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/UnloadingTours/UnloadingTours_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/Users/NavToUsers_Detail.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/Test/Actions/Users/NavToUsers_Detail.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/Users/Users_Detail.page"}

/***/ }),

/***/ "./build.definitions/Test/Actions/Users/NavToUsers_List.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/Test/Actions/Users/NavToUsers_List.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/Test/Pages/Users/Users_List.page"}

/***/ }),

/***/ "./build.definitions/Test/Globals/AppDefinition_Version.global":
/*!*********************************************************************!*\
  !*** ./build.definitions/Test/Globals/AppDefinition_Version.global ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/Test/Services/RTOP.service":
/*!******************************************************!*\
  !*** ./build.definitions/Test/Services/RTOP.service ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"RTOP","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"/","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "1.1\n"

/***/ }),

/***/ "./build.definitions/Test/Styles/Styles.light.json":
/*!*********************************************************!*\
  !*** ./build.definitions/Test/Styles/Styles.light.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/Test/jsconfig.json":
/*!**********************************************!*\
  !*** ./build.definitions/Test/jsconfig.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let test_actions_appupdate_action = __webpack_require__(/*! ./Test/Actions/AppUpdate.action */ "./build.definitions/Test/Actions/AppUpdate.action")
let test_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./Test/Actions/AppUpdateFailureMessage.action */ "./build.definitions/Test/Actions/AppUpdateFailureMessage.action")
let test_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./Test/Actions/AppUpdateProgressBanner.action */ "./build.definitions/Test/Actions/AppUpdateProgressBanner.action")
let test_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./Test/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/Test/Actions/AppUpdateSuccessMessage.action")
let test_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./Test/Actions/CloseModalPage_Cancel.action */ "./build.definitions/Test/Actions/CloseModalPage_Cancel.action")
let test_actions_closemodalpage_complete_action = __webpack_require__(/*! ./Test/Actions/CloseModalPage_Complete.action */ "./build.definitions/Test/Actions/CloseModalPage_Complete.action")
let test_actions_closepage_action = __webpack_require__(/*! ./Test/Actions/ClosePage.action */ "./build.definitions/Test/Actions/ClosePage.action")
let test_actions_ewmlogontoresource_action = __webpack_require__(/*! ./Test/Actions/EwmLogonToResource.action */ "./build.definitions/Test/Actions/EwmLogonToResource.action")
let test_actions_executionstatustexts_navtoexecutionstatustexts_detail_action = __webpack_require__(/*! ./Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_Detail.action */ "./build.definitions/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_Detail.action")
let test_actions_executionstatustexts_navtoexecutionstatustexts_list_action = __webpack_require__(/*! ./Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_List.action */ "./build.definitions/Test/Actions/ExecutionStatusTexts/NavToExecutionStatusTexts_List.action")
let test_actions_loadinghandlingunits_navtoloadinghandlingunits_detail_action = __webpack_require__(/*! ./Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_Detail.action */ "./build.definitions/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_Detail.action")
let test_actions_loadinghandlingunits_navtoloadinghandlingunits_list_action = __webpack_require__(/*! ./Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_List.action */ "./build.definitions/Test/Actions/LoadingHandlingUnits/NavToLoadingHandlingUnits_List.action")
let test_actions_loadingtours_navtoloadingtours_detail_action = __webpack_require__(/*! ./Test/Actions/LoadingTours/NavToLoadingTours_Detail.action */ "./build.definitions/Test/Actions/LoadingTours/NavToLoadingTours_Detail.action")
let test_actions_loadingtours_navtoloadingtours_list_action = __webpack_require__(/*! ./Test/Actions/LoadingTours/NavToLoadingTours_List.action */ "./build.definitions/Test/Actions/LoadingTours/NavToLoadingTours_List.action")
let test_actions_logout_action = __webpack_require__(/*! ./Test/Actions/Logout.action */ "./build.definitions/Test/Actions/Logout.action")
let test_actions_logoutmessage_action = __webpack_require__(/*! ./Test/Actions/LogoutMessage.action */ "./build.definitions/Test/Actions/LogoutMessage.action")
let test_actions_onwillupdate_action = __webpack_require__(/*! ./Test/Actions/OnWillUpdate.action */ "./build.definitions/Test/Actions/OnWillUpdate.action")
let test_actions_routes_navtoroutes_detail_action = __webpack_require__(/*! ./Test/Actions/Routes/NavToRoutes_Detail.action */ "./build.definitions/Test/Actions/Routes/NavToRoutes_Detail.action")
let test_actions_routes_navtoroutes_list_action = __webpack_require__(/*! ./Test/Actions/Routes/NavToRoutes_List.action */ "./build.definitions/Test/Actions/Routes/NavToRoutes_List.action")
let test_actions_routeversions_navtorouteversions_detail_action = __webpack_require__(/*! ./Test/Actions/RouteVersions/NavToRouteVersions_Detail.action */ "./build.definitions/Test/Actions/RouteVersions/NavToRouteVersions_Detail.action")
let test_actions_routeversions_navtorouteversions_list_action = __webpack_require__(/*! ./Test/Actions/RouteVersions/NavToRouteVersions_List.action */ "./build.definitions/Test/Actions/RouteVersions/NavToRouteVersions_List.action")
let test_actions_service_initializeonline_action = __webpack_require__(/*! ./Test/Actions/Service/InitializeOnline.action */ "./build.definitions/Test/Actions/Service/InitializeOnline.action")
let test_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./Test/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/Test/Actions/Service/InitializeOnlineFailureMessage.action")
let test_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./Test/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/Test/Actions/Service/InitializeOnlineSuccessMessage.action")
let test_actions_unloadinghandlingunits_navtounloadinghandlingunits_detail_action = __webpack_require__(/*! ./Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_Detail.action */ "./build.definitions/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_Detail.action")
let test_actions_unloadinghandlingunits_navtounloadinghandlingunits_list_action = __webpack_require__(/*! ./Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_List.action */ "./build.definitions/Test/Actions/UnloadingHandlingUnits/NavToUnloadingHandlingUnits_List.action")
let test_actions_unloadingtours_navtounloadingtours_detail_action = __webpack_require__(/*! ./Test/Actions/UnloadingTours/NavToUnloadingTours_Detail.action */ "./build.definitions/Test/Actions/UnloadingTours/NavToUnloadingTours_Detail.action")
let test_actions_unloadingtours_navtounloadingtours_list_action = __webpack_require__(/*! ./Test/Actions/UnloadingTours/NavToUnloadingTours_List.action */ "./build.definitions/Test/Actions/UnloadingTours/NavToUnloadingTours_List.action")
let test_actions_unloadingtourstops_navtounloadingtourstops_detail_action = __webpack_require__(/*! ./Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_Detail.action */ "./build.definitions/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_Detail.action")
let test_actions_unloadingtourstops_navtounloadingtourstops_list_action = __webpack_require__(/*! ./Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_List.action */ "./build.definitions/Test/Actions/UnloadingTourStops/NavToUnloadingTourStops_List.action")
let test_actions_users_navtousers_detail_action = __webpack_require__(/*! ./Test/Actions/Users/NavToUsers_Detail.action */ "./build.definitions/Test/Actions/Users/NavToUsers_Detail.action")
let test_actions_users_navtousers_list_action = __webpack_require__(/*! ./Test/Actions/Users/NavToUsers_List.action */ "./build.definitions/Test/Actions/Users/NavToUsers_List.action")
let test_globals_appdefinition_version_global = __webpack_require__(/*! ./Test/Globals/AppDefinition_Version.global */ "./build.definitions/Test/Globals/AppDefinition_Version.global")
let test_i18n_i18n_properties = __webpack_require__(/*! ./Test/i18n/i18n.properties */ "./build.definitions/Test/i18n/i18n.properties")
let test_jsconfig_json = __webpack_require__(/*! ./Test/jsconfig.json */ "./build.definitions/Test/jsconfig.json")
let test_pages_ewmlogon_page = __webpack_require__(/*! ./Test/Pages/EwmLogon.page */ "./build.definitions/Test/Pages/EwmLogon.page")
let test_pages_executionstatustexts_executionstatustexts_detail_page = __webpack_require__(/*! ./Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_Detail.page */ "./build.definitions/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_Detail.page")
let test_pages_executionstatustexts_executionstatustexts_list_page = __webpack_require__(/*! ./Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_List.page */ "./build.definitions/Test/Pages/ExecutionStatusTexts/ExecutionStatusTexts_List.page")
let test_pages_loadinghandlingunits_loadinghandlingunits_detail_page = __webpack_require__(/*! ./Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_Detail.page */ "./build.definitions/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_Detail.page")
let test_pages_loadinghandlingunits_loadinghandlingunits_list_page = __webpack_require__(/*! ./Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_List.page */ "./build.definitions/Test/Pages/LoadingHandlingUnits/LoadingHandlingUnits_List.page")
let test_pages_loadingtours_loadingtours_detail_page = __webpack_require__(/*! ./Test/Pages/LoadingTours/LoadingTours_Detail.page */ "./build.definitions/Test/Pages/LoadingTours/LoadingTours_Detail.page")
let test_pages_loadingtours_loadingtours_list_page = __webpack_require__(/*! ./Test/Pages/LoadingTours/LoadingTours_List.page */ "./build.definitions/Test/Pages/LoadingTours/LoadingTours_List.page")
let test_pages_main_page = __webpack_require__(/*! ./Test/Pages/Main.page */ "./build.definitions/Test/Pages/Main.page")
let test_pages_routes_routes_detail_page = __webpack_require__(/*! ./Test/Pages/Routes/Routes_Detail.page */ "./build.definitions/Test/Pages/Routes/Routes_Detail.page")
let test_pages_routes_routes_list_page = __webpack_require__(/*! ./Test/Pages/Routes/Routes_List.page */ "./build.definitions/Test/Pages/Routes/Routes_List.page")
let test_pages_routeversions_routeversions_detail_page = __webpack_require__(/*! ./Test/Pages/RouteVersions/RouteVersions_Detail.page */ "./build.definitions/Test/Pages/RouteVersions/RouteVersions_Detail.page")
let test_pages_routeversions_routeversions_list_page = __webpack_require__(/*! ./Test/Pages/RouteVersions/RouteVersions_List.page */ "./build.definitions/Test/Pages/RouteVersions/RouteVersions_List.page")
let test_pages_unloadinghandlingunits_unloadinghandlingunits_detail_page = __webpack_require__(/*! ./Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_Detail.page */ "./build.definitions/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_Detail.page")
let test_pages_unloadinghandlingunits_unloadinghandlingunits_list_page = __webpack_require__(/*! ./Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_List.page */ "./build.definitions/Test/Pages/UnloadingHandlingUnits/UnloadingHandlingUnits_List.page")
let test_pages_unloadingtours_unloadingtours_detail_page = __webpack_require__(/*! ./Test/Pages/UnloadingTours/UnloadingTours_Detail.page */ "./build.definitions/Test/Pages/UnloadingTours/UnloadingTours_Detail.page")
let test_pages_unloadingtours_unloadingtours_list_page = __webpack_require__(/*! ./Test/Pages/UnloadingTours/UnloadingTours_List.page */ "./build.definitions/Test/Pages/UnloadingTours/UnloadingTours_List.page")
let test_pages_unloadingtourstops_unloadingtourstops_detail_page = __webpack_require__(/*! ./Test/Pages/UnloadingTourStops/UnloadingTourStops_Detail.page */ "./build.definitions/Test/Pages/UnloadingTourStops/UnloadingTourStops_Detail.page")
let test_pages_unloadingtourstops_unloadingtourstops_list_page = __webpack_require__(/*! ./Test/Pages/UnloadingTourStops/UnloadingTourStops_List.page */ "./build.definitions/Test/Pages/UnloadingTourStops/UnloadingTourStops_List.page")
let test_pages_users_users_detail_page = __webpack_require__(/*! ./Test/Pages/Users/Users_Detail.page */ "./build.definitions/Test/Pages/Users/Users_Detail.page")
let test_pages_users_users_list_page = __webpack_require__(/*! ./Test/Pages/Users/Users_List.page */ "./build.definitions/Test/Pages/Users/Users_List.page")
let test_rules_appupdatefailure_js = __webpack_require__(/*! ./Test/Rules/AppUpdateFailure.js */ "./build.definitions/Test/Rules/AppUpdateFailure.js")
let test_rules_appupdatesuccess_js = __webpack_require__(/*! ./Test/Rules/AppUpdateSuccess.js */ "./build.definitions/Test/Rules/AppUpdateSuccess.js")
let test_rules_ewmlogon_ewmlogon_js = __webpack_require__(/*! ./Test/Rules/EwmLogon/EwmLogon.js */ "./build.definitions/Test/Rules/EwmLogon/EwmLogon.js")
let test_rules_ewmlogon_ewmlogonfailure_js = __webpack_require__(/*! ./Test/Rules/EwmLogon/EwmLogonFailure.js */ "./build.definitions/Test/Rules/EwmLogon/EwmLogonFailure.js")
let test_rules_ewmlogon_ewmlogonsuccess_js = __webpack_require__(/*! ./Test/Rules/EwmLogon/EwmLogonSuccess.js */ "./build.definitions/Test/Rules/EwmLogon/EwmLogonSuccess.js")
let test_rules_onwillupdate_js = __webpack_require__(/*! ./Test/Rules/OnWillUpdate.js */ "./build.definitions/Test/Rules/OnWillUpdate.js")
let test_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./Test/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/Test/Rules/ResetAppSettingsAndLogout.js")
let test_services_rtop_service = __webpack_require__(/*! ./Test/Services/RTOP.service */ "./build.definitions/Test/Services/RTOP.service")
let test_styles_styles_css = __webpack_require__(/*! ./Test/Styles/Styles.css */ "./build.definitions/Test/Styles/Styles.css")
let test_styles_styles_less = __webpack_require__(/*! ./Test/Styles/Styles.less */ "./build.definitions/Test/Styles/Styles.less")
let test_styles_styles_light_css = __webpack_require__(/*! ./Test/Styles/Styles.light.css */ "./build.definitions/Test/Styles/Styles.light.css")
let test_styles_styles_light_json = __webpack_require__(/*! ./Test/Styles/Styles.light.json */ "./build.definitions/Test/Styles/Styles.light.json")
let test_styles_styles_light_nss = __webpack_require__(/*! ./Test/Styles/Styles.light.nss */ "./build.definitions/Test/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	test_actions_appupdate_action : test_actions_appupdate_action,
	test_actions_appupdatefailuremessage_action : test_actions_appupdatefailuremessage_action,
	test_actions_appupdateprogressbanner_action : test_actions_appupdateprogressbanner_action,
	test_actions_appupdatesuccessmessage_action : test_actions_appupdatesuccessmessage_action,
	test_actions_closemodalpage_cancel_action : test_actions_closemodalpage_cancel_action,
	test_actions_closemodalpage_complete_action : test_actions_closemodalpage_complete_action,
	test_actions_closepage_action : test_actions_closepage_action,
	test_actions_ewmlogontoresource_action : test_actions_ewmlogontoresource_action,
	test_actions_executionstatustexts_navtoexecutionstatustexts_detail_action : test_actions_executionstatustexts_navtoexecutionstatustexts_detail_action,
	test_actions_executionstatustexts_navtoexecutionstatustexts_list_action : test_actions_executionstatustexts_navtoexecutionstatustexts_list_action,
	test_actions_loadinghandlingunits_navtoloadinghandlingunits_detail_action : test_actions_loadinghandlingunits_navtoloadinghandlingunits_detail_action,
	test_actions_loadinghandlingunits_navtoloadinghandlingunits_list_action : test_actions_loadinghandlingunits_navtoloadinghandlingunits_list_action,
	test_actions_loadingtours_navtoloadingtours_detail_action : test_actions_loadingtours_navtoloadingtours_detail_action,
	test_actions_loadingtours_navtoloadingtours_list_action : test_actions_loadingtours_navtoloadingtours_list_action,
	test_actions_logout_action : test_actions_logout_action,
	test_actions_logoutmessage_action : test_actions_logoutmessage_action,
	test_actions_onwillupdate_action : test_actions_onwillupdate_action,
	test_actions_routes_navtoroutes_detail_action : test_actions_routes_navtoroutes_detail_action,
	test_actions_routes_navtoroutes_list_action : test_actions_routes_navtoroutes_list_action,
	test_actions_routeversions_navtorouteversions_detail_action : test_actions_routeversions_navtorouteversions_detail_action,
	test_actions_routeversions_navtorouteversions_list_action : test_actions_routeversions_navtorouteversions_list_action,
	test_actions_service_initializeonline_action : test_actions_service_initializeonline_action,
	test_actions_service_initializeonlinefailuremessage_action : test_actions_service_initializeonlinefailuremessage_action,
	test_actions_service_initializeonlinesuccessmessage_action : test_actions_service_initializeonlinesuccessmessage_action,
	test_actions_unloadinghandlingunits_navtounloadinghandlingunits_detail_action : test_actions_unloadinghandlingunits_navtounloadinghandlingunits_detail_action,
	test_actions_unloadinghandlingunits_navtounloadinghandlingunits_list_action : test_actions_unloadinghandlingunits_navtounloadinghandlingunits_list_action,
	test_actions_unloadingtours_navtounloadingtours_detail_action : test_actions_unloadingtours_navtounloadingtours_detail_action,
	test_actions_unloadingtours_navtounloadingtours_list_action : test_actions_unloadingtours_navtounloadingtours_list_action,
	test_actions_unloadingtourstops_navtounloadingtourstops_detail_action : test_actions_unloadingtourstops_navtounloadingtourstops_detail_action,
	test_actions_unloadingtourstops_navtounloadingtourstops_list_action : test_actions_unloadingtourstops_navtounloadingtourstops_list_action,
	test_actions_users_navtousers_detail_action : test_actions_users_navtousers_detail_action,
	test_actions_users_navtousers_list_action : test_actions_users_navtousers_list_action,
	test_globals_appdefinition_version_global : test_globals_appdefinition_version_global,
	test_i18n_i18n_properties : test_i18n_i18n_properties,
	test_jsconfig_json : test_jsconfig_json,
	test_pages_ewmlogon_page : test_pages_ewmlogon_page,
	test_pages_executionstatustexts_executionstatustexts_detail_page : test_pages_executionstatustexts_executionstatustexts_detail_page,
	test_pages_executionstatustexts_executionstatustexts_list_page : test_pages_executionstatustexts_executionstatustexts_list_page,
	test_pages_loadinghandlingunits_loadinghandlingunits_detail_page : test_pages_loadinghandlingunits_loadinghandlingunits_detail_page,
	test_pages_loadinghandlingunits_loadinghandlingunits_list_page : test_pages_loadinghandlingunits_loadinghandlingunits_list_page,
	test_pages_loadingtours_loadingtours_detail_page : test_pages_loadingtours_loadingtours_detail_page,
	test_pages_loadingtours_loadingtours_list_page : test_pages_loadingtours_loadingtours_list_page,
	test_pages_main_page : test_pages_main_page,
	test_pages_routes_routes_detail_page : test_pages_routes_routes_detail_page,
	test_pages_routes_routes_list_page : test_pages_routes_routes_list_page,
	test_pages_routeversions_routeversions_detail_page : test_pages_routeversions_routeversions_detail_page,
	test_pages_routeversions_routeversions_list_page : test_pages_routeversions_routeversions_list_page,
	test_pages_unloadinghandlingunits_unloadinghandlingunits_detail_page : test_pages_unloadinghandlingunits_unloadinghandlingunits_detail_page,
	test_pages_unloadinghandlingunits_unloadinghandlingunits_list_page : test_pages_unloadinghandlingunits_unloadinghandlingunits_list_page,
	test_pages_unloadingtours_unloadingtours_detail_page : test_pages_unloadingtours_unloadingtours_detail_page,
	test_pages_unloadingtours_unloadingtours_list_page : test_pages_unloadingtours_unloadingtours_list_page,
	test_pages_unloadingtourstops_unloadingtourstops_detail_page : test_pages_unloadingtourstops_unloadingtourstops_detail_page,
	test_pages_unloadingtourstops_unloadingtourstops_list_page : test_pages_unloadingtourstops_unloadingtourstops_list_page,
	test_pages_users_users_detail_page : test_pages_users_users_detail_page,
	test_pages_users_users_list_page : test_pages_users_users_list_page,
	test_rules_appupdatefailure_js : test_rules_appupdatefailure_js,
	test_rules_appupdatesuccess_js : test_rules_appupdatesuccess_js,
	test_rules_ewmlogon_ewmlogon_js : test_rules_ewmlogon_ewmlogon_js,
	test_rules_ewmlogon_ewmlogonfailure_js : test_rules_ewmlogon_ewmlogonfailure_js,
	test_rules_ewmlogon_ewmlogonsuccess_js : test_rules_ewmlogon_ewmlogonsuccess_js,
	test_rules_onwillupdate_js : test_rules_onwillupdate_js,
	test_rules_resetappsettingsandlogout_js : test_rules_resetappsettingsandlogout_js,
	test_services_rtop_service : test_services_rtop_service,
	test_styles_styles_css : test_styles_styles_css,
	test_styles_styles_less : test_styles_styles_less,
	test_styles_styles_light_css : test_styles_styles_light_css,
	test_styles_styles_light_json : test_styles_styles_light_json,
	test_styles_styles_light_nss : test_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map