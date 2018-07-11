module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/kfront-baseui/";
/******/
/******/ 	// Load entry module and return exports
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 80:
=======
/***/ 83:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

<<<<<<< HEAD
var _defineProperty = __webpack_require__(81);
=======
var _defineProperty = __webpack_require__(84);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SYNC_HOOK_PROP = '$v-sync';

/**
 * v-sync directive
 *
 * Usage:
 *  v-sync:component-prop="context prop name"
 *
 * If your want to sync component's prop "visible" to context prop "myVisible", use like this:
 *  v-sync:visible="myVisible"
 */
exports.default = {
	bind: function bind(el, binding, vnode) {
		var context = vnode.context;
		var component = vnode.child;
		var expression = binding.expression;
		var prop = binding.arg;

		if (!expression || !prop) {
			console.warn('v-sync should specify arg & expression, for example: v-sync:visible="myVisible"');
			return;
		}

		if (!component || !component.$watch) {
			console.warn('v-sync is only available on Vue Component');
			return;
		}

		var unwatchContext = context.$watch(expression, function (val) {
			component[prop] = val;
		});

		var unwatchComponent = component.$watch(prop, function (val) {
			context[expression] = val;
		});

		(0, _defineProperty2.default)(component, SYNC_HOOK_PROP, {
			value: {
				unwatchContext: unwatchContext,
				unwatchComponent: unwatchComponent
			},
			enumerable: false
		});
	},
	unbind: function unbind(el, binding, vnode) {
		var component = vnode.child;
		if (component && component[SYNC_HOOK_PROP]) {
			var _component$SYNC_HOOK_ = component[SYNC_HOOK_PROP],
			    unwatchContext = _component$SYNC_HOOK_.unwatchContext,
			    unwatchComponent = _component$SYNC_HOOK_.unwatchComponent;

			unwatchContext && unwatchContext();
			unwatchComponent && unwatchComponent();
		}
	}
};

/***/ }),

<<<<<<< HEAD
/***/ 81:
=======
/***/ 84:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/define-property");

/***/ })

/******/ });