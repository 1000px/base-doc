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
/******/ 	__webpack_require__.p = "/lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var aria = aria || {};

aria.Utils = aria.Utils || {};

/**
 * @desc Set focus on descendant nodes until the first focusable element is
 *       found.
 * @param element
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */
aria.Utils.focusFirstDescendant = function (element) {
	for (var i = 0; i < element.childNodes.length; i++) {
		var child = element.childNodes[i];
		if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
			return true;
		}
	}
	return false;
};

/**
 * @desc Find the last descendant node that is focusable.
 * @param element
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */

aria.Utils.focusLastDescendant = function (element) {
	for (var i = element.childNodes.length - 1; i >= 0; i--) {
		var child = element.childNodes[i];
		if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
			return true;
		}
	}
	return false;
};

/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */
aria.Utils.attemptFocus = function (element) {
	if (!aria.Utils.isFocusable(element)) {
		return false;
	}
	aria.Utils.IgnoreUtilFocusChanges = true;
	try {
		element.focus();
	} catch (e) {}
	aria.Utils.IgnoreUtilFocusChanges = false;
	return document.activeElement === element;
};

aria.Utils.isFocusable = function (element) {
	if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
		return true;
	}

	if (element.disabled) {
		return false;
	}

	switch (element.nodeName) {
		case 'A':
			return !!element.href && element.rel !== 'ignore';
		case 'INPUT':
			return element.type !== 'hidden' && element.type !== 'file';
		case 'BUTTON':
		case 'SELECT':
		case 'TEXTAREA':
			return true;
		default:
			return false;
	}
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
aria.Utils.triggerEvent = function (elm, name) {
	var eventName = void 0;

	if (/^mouse|click/.test(name)) {
		eventName = 'MouseEvents';
	} else if (/^key/.test(name)) {
		eventName = 'KeyboardEvent';
	} else {
		eventName = 'HTMLEvents';
	}
	var evt = document.createEvent(eventName);

	for (var _len = arguments.length, opts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		opts[_key - 2] = arguments[_key];
	}

	evt.initEvent.apply(evt, [name].concat(opts));
	elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt);

	return elm;
};

aria.Utils.keys = {
	tab: 9,
	enter: 13,
	space: 32,
	left: 37,
	up: 38,
	right: 39,
	down: 40
};

exports.default = aria.Utils;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(1);

var _typeof3 = _interopRequireDefault(_typeof2);

var _ariaUtils = __webpack_require__(4);

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @constructor
 * @desc Dialog object providing modal focus management.
 *
 * Assumptions: The element serving as the modal container is present in the
 * DOM and hidden. The modal container has role='modal'.
 *
 * @param dialogId
 *          The ID of the element serving as the modal container.
 * @param focusAfterClosed
 *          Either the DOM node or the ID of the DOM node to focus when the
 *          modal closes.
 * @param focusFirst
 *          Optional parameter containing either the DOM node or the ID of the
 *          DOM node to focus when the modal opens. If not specified, the
 *          first focusable element in the modal will receive focus.
 */
var aria = aria || {};
var tabEvent;

aria.Dialog = function (dialog, focusAfterClosed, focusFirst) {
	var _this = this;

	this.dialogNode = dialog;
	if (this.dialogNode === null || this.dialogNode.getAttribute('role') !== 'modal') {
		throw new Error('Dialog() requires a DOM element with ARIA role of modal.');
	}

	if (typeof focusAfterClosed === 'string') {
		this.focusAfterClosed = document.getElementById(focusAfterClosed);
	} else if ((typeof focusAfterClosed === 'undefined' ? 'undefined' : (0, _typeof3.default)(focusAfterClosed)) === 'object') {
		this.focusAfterClosed = focusAfterClosed;
	} else {
		this.focusAfterClosed = null;
	}

	if (typeof focusFirst === 'string') {
		this.focusFirst = document.getElementById(focusFirst);
	} else if ((typeof focusFirst === 'undefined' ? 'undefined' : (0, _typeof3.default)(focusFirst)) === 'object') {
		this.focusFirst = focusFirst;
	} else {
		this.focusFirst = null;
	}

	if (this.focusFirst) {
		this.focusFirst.focus();
	} else {
		_ariaUtils2.default.focusFirstDescendant(this.dialogNode);
	}

	this.lastFocus = document.activeElement;
	tabEvent = function tabEvent(e) {
		_this.trapFocus(e);
	};
	this.addListeners();
};

aria.Dialog.prototype.addListeners = function () {
	document.addEventListener('focus', tabEvent, true);
};

aria.Dialog.prototype.removeListeners = function () {
	document.removeEventListener('focus', tabEvent, true);
};

aria.Dialog.prototype.closeDialog = function () {
	var _this2 = this;

	this.removeListeners();
	if (this.focusAfterClosed) {
		setTimeout(function () {
			_this2.focusAfterClosed.focus();
		});
	}
};

aria.Dialog.prototype.trapFocus = function (event) {
	if (_ariaUtils2.default.IgnoreUtilFocusChanges) {
		return;
	}
	if (this.dialogNode.contains(event.target)) {
		this.lastFocus = event.target;
	} else {
		_ariaUtils2.default.focusFirstDescendant(this.dialogNode);
		if (this.lastFocus === document.activeElement) {
			_ariaUtils2.default.focusLastDescendant(this.dialogNode);
		}
		this.lastFocus = document.activeElement;
	}
};

exports.default = aria.Dialog;

/***/ })

/******/ });