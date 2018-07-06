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
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ariaUtils = __webpack_require__(4);

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

var _ariaSubmenu = __webpack_require__(8);

var _ariaSubmenu2 = _interopRequireDefault(_ariaSubmenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(domNode) {
	this.domNode = domNode;
	this.submenu = null;
	this.init();
};

MenuItem.prototype.init = function () {
	this.domNode.setAttribute('tabindex', '0');
	var menuChild = this.domNode.querySelector('.el-menu');
	if (menuChild) {
		this.submenu = new _ariaSubmenu2.default(this, menuChild);
	}
	this.addListeners();
};

MenuItem.prototype.addListeners = function () {
	var _this = this;

	var keys = _ariaUtils2.default.keys;
	this.domNode.addEventListener('keydown', function (event) {
		var prevDef = false;
		switch (event.keyCode) {
			case keys.down:
				_ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
				_this.submenu && _this.submenu.gotoSubIndex(0);
				prevDef = true;
				break;
			case keys.up:
				_ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
				_this.submenu && _this.submenu.gotoSubIndex(_this.submenu.subMenuItems.length - 1);
				prevDef = true;
				break;
			case keys.tab:
				_ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseleave');
				break;
			case keys.enter:
			case keys.space:
				prevDef = true;
				event.currentTarget.click();
				break;
		}
		if (prevDef) {
			event.preventDefault();
		}
	});
};

exports.default = MenuItem;

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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ariaMenuitem = __webpack_require__(15);

var _ariaMenuitem2 = _interopRequireDefault(_ariaMenuitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(domNode) {
	this.domNode = domNode;
	this.init();
};

Menu.prototype.init = function () {
	var menuChildren = this.domNode.childNodes;
	[].filter.call(menuChildren, function (child) {
		return child.nodeType === 1;
	}).forEach(function (child) {
		new _ariaMenuitem2.default(child); // eslint-disable-line
	});
};
exports.default = Menu;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ariaUtils = __webpack_require__(4);

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = function SubMenu(parent, domNode) {
	this.domNode = domNode;
	this.parent = parent;
	this.subMenuItems = [];
	this.subIndex = 0;
	this.init();
};

SubMenu.prototype.init = function () {
	this.subMenuItems = this.domNode.querySelectorAll('li');
	this.addListeners();
};

SubMenu.prototype.gotoSubIndex = function (idx) {
	if (idx === this.subMenuItems.length) {
		idx = 0;
	} else if (idx < 0) {
		idx = this.subMenuItems.length - 1;
	}
	this.subMenuItems[idx].focus();
	this.subIndex = idx;
};

SubMenu.prototype.addListeners = function () {
	var _this = this;

	var keys = _ariaUtils2.default.keys;
	var parentNode = this.parent.domNode;
	Array.prototype.forEach.call(this.subMenuItems, function (el) {
		el.addEventListener('keydown', function (event) {
			var prevDef = false;
			switch (event.keyCode) {
				case keys.down:
					_this.gotoSubIndex(_this.subIndex + 1);
					prevDef = true;
					break;
				case keys.up:
					_this.gotoSubIndex(_this.subIndex - 1);
					prevDef = true;
					break;
				case keys.tab:
					_ariaUtils2.default.triggerEvent(parentNode, 'mouseleave');
					break;
				case keys.enter:
				case keys.space:
					prevDef = true;
					event.currentTarget.click();
					break;
			}
			if (prevDef) {
				event.preventDefault();
				event.stopPropagation();
			}
			return false;
		});
	});
};

exports.default = SubMenu;

/***/ })

/******/ });