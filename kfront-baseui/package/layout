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
/******/ 	return __webpack_require__(__webpack_require__.s = 298);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(51)("45b0d318", content, true, {});

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, ".layoutCon{background:#0f8de9;min-height:120px;line-height:120px}", ""]);

// exports


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layoutCon",class:_vm.wrapClasses},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layoutC",class:_vm.wrapClasses},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(51)("197df100", content, true, {});

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layoutC",class:_vm.wrapClasses},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(25);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

var prefixCls = 'kc-layout';

exports.default = {
	name: 'KcLayout',
	data: function data() {
		return {
			hasSider: false
		};
	},

	computed: {
		wrapClasses: function wrapClasses() {
			return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-has-sider', this.hasSider)];
		}
	},
	methods: {
		findSider: function findSider() {
			return this.$children.some(function (child) {
				return child.$options.name === 'Sider';
			});
		}
	},
	mounted: function mounted() {
		this.hasSider = this.findSider();
	}
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layoutC",class:_vm.wrapClasses,style:(_vm.wrapStyles)},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.showZeroTrigger),expression:"showZeroTrigger"}],class:_vm.zeroWidthTriggerClasses,on:{"click":_vm.toggleCollapse}},[_c('i',{staticClass:"kc-icon kc-icon-navicon-round"})]),_c('div',{class:_vm.childClasses},[_vm._t("default")],2),_vm._t("trigger",[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showBottomTrigger),expression:"showBottomTrigger"}],class:_vm.triggerClasses,style:({width: _vm.siderWidth + 'px'}),on:{"click":_vm.toggleCollapse}},[_c('i',{class:_vm.triggerIconClasses})])])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStyle = exports.once = exports.off = exports.on = undefined;

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer; /* istanbul ignore next */

var SPECIAL_CHARS_REGEXP = /([:-_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
	return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
	return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
		return offset ? letter.toUpperCase() : letter;
	}).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = exports.on = function () {
	if (!isServer && document.addEventListener) {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.addEventListener(event, handler, false);
			}
		};
	} else {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.attachEvent('on' + event, handler);
			}
		};
	}
}();

/* istanbul ignore next */
var off = exports.off = function () {
	if (!isServer && document.removeEventListener) {
		return function (element, event, handler) {
			if (element && event) {
				element.removeEventListener(event, handler, false);
			}
		};
	} else {
		return function (element, event, handler) {
			if (element && event) {
				element.detachEvent('on' + event, handler);
			}
		};
	}
}();

/* istanbul ignore next */
var once = exports.once = function once(el, event, fn) {
	var listener = function listener() {
		if (fn) {
			fn.apply(this, arguments);
		}
		off(el, event, listener);
	};
	on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
	if (!el || !cls) return false;
	if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
	if (el.classList) {
		return el.classList.contains(cls);
	} else {
		return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}
};

/* istanbul ignore next */
function addClass(el, cls) {
	if (!el) return;
	var curClass = el.className;
	var classes = (cls || '').split(' ');

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.add(clsName);
		} else if (!hasClass(el, clsName)) {
			curClass += ' ' + clsName;
		}
	}
	if (!el.classList) {
		el.className = curClass;
	}
};

/* istanbul ignore next */
function removeClass(el, cls) {
	if (!el || !cls) return;
	var classes = cls.split(' ');
	var curClass = ' ' + el.className + ' ';

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.remove(clsName);
		} else if (hasClass(el, clsName)) {
			curClass = curClass.replace(' ' + clsName + ' ', ' ');
		}
	}
	if (!el.classList) {
		el.className = trim(curClass);
	}
};

/* istanbul ignore next */
var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
	if (isServer) return;
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'styleFloat';
	}
	try {
		switch (styleName) {
			case 'opacity':
				try {
					return element.filters.item('alpha').opacity / 100;
				} catch (e) {
					return 1.0;
				}
			default:
				return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
		}
	} catch (e) {
		return element.style[styleName];
	}
} : function (element, styleName) {
	if (isServer) return;
	if (!element || !styleName) return null;
	styleName = camelCase(styleName);
	if (styleName === 'float') {
		styleName = 'cssFloat';
	}
	try {
		var computed = document.defaultView.getComputedStyle(element, '');
		return element.style[styleName] || computed ? computed[styleName] : null;
	} catch (e) {
		return element.style[styleName];
	}
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
	if (!element || !styleName) return;

	if ((typeof styleName === 'undefined' ? 'undefined' : (0, _typeof3.default)(styleName)) === 'object') {
		for (var prop in styleName) {
			if (styleName.hasOwnProperty(prop)) {
				setStyle(element, prop, styleName[prop]);
			}
		}
	} else {
		styleName = camelCase(styleName);
		if (styleName === 'opacity' && ieVersion < 9) {
			element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
		} else {
			element.style[styleName] = value;
		}
	}
};

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(299);

var _layout2 = _interopRequireDefault(_layout);

var _header = __webpack_require__(96);

var _header2 = _interopRequireDefault(_header);

var _sider = __webpack_require__(98);

var _sider2 = _interopRequireDefault(_sider);

var _content = __webpack_require__(94);

var _content2 = _interopRequireDefault(_content);

var _footer = __webpack_require__(95);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_layout2.default.KcHeader = _header2.default;
_layout2.default.KcSider = _sider2.default;
_layout2.default.KcContent = _content2.default;
_layout2.default.KcFooter = _footer2.default;

exports.default = _layout2.default;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_layout_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_layout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_layout_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_layout_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_layout_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_267e496c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_layout_vue__ = __webpack_require__(300);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_layout_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_267e496c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapClasses},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dimensionMap = exports.valueEquals = exports.generateId = exports.getValueByPath = undefined;

var _getIterator2 = __webpack_require__(7);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.noop = noop;
exports.hasOwn = hasOwn;
exports.oneOf = oneOf;
exports.toObject = toObject;
exports.getPropByPath = getPropByPath;
exports.findComponentDownward = findComponentDownward;
exports.setMatchMedia = setMatchMedia;
exports.rgbToHex = rgbToHex;
exports.hexToRgb = hexToRgb;
exports.hslToRgb = hslToRgb;
exports.rgbToHsl = rgbToHsl;
exports.colorNameToRgb = colorNameToRgb;
exports.getScrollBarSize = getScrollBarSize;

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {};

function hasOwn(obj, key) {
	return hasOwnProperty.call(obj, key);
};

function extend(to, _from) {
	for (var key in _from) {
		to[key] = _from[key];
	}
	return to;
};

// 判断参数是否是其中之一
function oneOf(value, validList) {
	for (var i = 0; i < validList.length; i++) {
		if (value === validList[i]) {
			return true;
		}
	}
	return false;
};

function toObject(arr) {
	var res = {};
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			extend(res, arr[i]);
		}
	}
	return res;
};

var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
	prop = prop || '';
	var paths = prop.split('.');
	var current = object;
	var result = null;
	for (var i = 0, j = paths.length; i < j; i++) {
		var path = paths[i];
		if (!current) break;

		if (i === j - 1) {
			result = current[path];
			break;
		}
		current = current[path];
	}
	return result;
};

function getPropByPath(obj, path, strict) {
	var tempObj = obj;
	path = path.replace(/\[(\w+)\]/g, '.$1');
	path = path.replace(/^\./, '');

	var keyArr = path.split('.');
	var i = 0;
	for (var len = keyArr.length; i < len - 1; ++i) {
		if (!tempObj && !strict) break;
		var key = keyArr[i];
		if (key in tempObj) {
			tempObj = tempObj[key];
		} else {
			if (strict) {
				throw new Error('please transfer a valid prop path to form item!');
			}
			break;
		}
	}
	return {
		o: tempObj,
		k: keyArr[i],
		v: tempObj ? tempObj[keyArr[i]] : null
	};
};

var generateId = exports.generateId = function generateId() {
	return Math.floor(Math.random() * 10000);
};

var valueEquals = exports.valueEquals = function valueEquals(a, b) {
	// see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
	if (a === b) return true;
	if (!(a instanceof Array)) return false;
	if (!(b instanceof Array)) return false;
	if (a.length !== b.length) return false;
	for (var i = 0; i !== a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

// Find component downward
function findComponentDownward(context, componentName) {
	var childrens = context.$children;
	var children = null;

	if (childrens.length) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _getIterator3.default)(childrens), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var child = _step.value;

				var name = child.$options.name;
				if (name === componentName) {
					children = child;
					break;
				} else {
					children = findComponentDownward(child, componentName);
					if (children) break;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
	return children;
}

var dimensionMap = exports.dimensionMap = {
	xs: '480px',
	sm: '768px',
	md: '992px',
	lg: '1200px',
	xl: '1600px'
};

function setMatchMedia() {
	if (typeof window !== 'undefined') {
		var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
			return {
				media: mediaQuery,
				matches: false,
				on: function on() {},
				off: function off() {}
			};
		};
		window.matchMedia = window.matchMedia || matchMediaPolyfill;
	}
};

function rgbToHex(color) {
	// 十六进制颜色值的正则表达式
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	// 如果是rgb颜色表示
	if (/^(rgb|RGB)/.test(color)) {
		var aColor = color.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
		var strHex = '#';
		for (var i = 0; i < aColor.length; i++) {
			var hex = Number(aColor[i]).toString(16);
			if (hex.length < 2) {
				hex = '0' + hex;
			}
			strHex += hex;
		}
		if (strHex.length !== 7) {
			strHex = color;
		}
		return strHex;
	} else if (reg.test(color)) {
		var aNum = color.replace(/#/, '').split('');
		if (aNum.length === 6) {
			return color;
		} else if (aNum.length === 3) {
			var numHex = '#';
			for (var _i = 0; _i < aNum.length; _i += 1) {
				numHex += aNum[_i] + aNum[_i];
			}
			return numHex;
		}
	}
	return color;
};

function hexToRgb(color) {
	var sColor = color.toLowerCase();
	// 十六进制颜色值的正则表达式
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	// 如果是16进制颜色
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			var sColorNew = '#';
			for (var i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
			}
			sColor = sColorNew;
		}
		// 处理六位的颜色值
		var sColorChange = [];
		for (var _i2 = 1; _i2 < 7; _i2 += 2) {
			sColorChange.push(parseInt('0x' + sColor.slice(_i2, _i2 + 2)));
		}
		return 'RGB(' + sColorChange.join(',') + ')';
	}
	return sColor;
};

/**
 * HSL颜色值转换为RGB.
 * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space.
 * h, s, 和 l 设定在 [0, 1] 之间
 * 返回的 r, g, 和 b 在 [0, 255]之间
 *
 * @param   Number  h       色相
 * @param   Number  s       饱和度
 * @param   Number  l       亮度
 * @return  Array           RGB色值数值
 */
function hslToRgb(h, s, l) {
	var r = void 0,
	    g = void 0,
	    b = void 0;

	if (s == 0) {
		r = g = b = l; // achromatic
	} else {
		var hue2rgb = function hue2rgb(p, q, t) {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * RGB 颜色值转换为 HSL.
 * 转换公式参考自 http://en.wikipedia.org/wiki/HSL_color_space.
 * r, g, 和 b 需要在 [0, 255] 范围内
 * 返回的 h, s, 和 l 在 [0, 1] 之间
 *
 * @param   Number  r       红色色值
 * @param   Number  g       绿色色值
 * @param   Number  b       蓝色色值
 * @return  Array           HSL各值数组
 */
function rgbToHsl(r, g, b) {
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b),
	    min = Math.min(r, g, b);
	var h = void 0,
	    s = void 0,
	    l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return [h, s, l];
}

/**
 * 颜色名称转rgb
 * @param color 颜色名称
 * @return {*}
 */
function colorNameToRgb(color) {
	var div = document.createElement('div');
	div.style.backgroundColor = color;
	document.body.appendChild(div);
	var c = window.getComputedStyle(div).backgroundColor;
	document.body.removeChild(div);
	return c;
};

// For Modal scrollBar hidden

var isServer = _vue2.default.prototype.$isServer;
var cached = void 0;

function getScrollBarSize(fresh) {
	if (isServer) return 0;
	if (fresh || cached === undefined) {
		var inner = document.createElement('div');
		inner.style.width = '100%';
		inner.style.height = '200px';

		var outer = document.createElement('div');
		var outerStyle = outer.style;

		outerStyle.position = 'absolute';
		outerStyle.top = 0;
		outerStyle.left = 0;
		outerStyle.pointerEvents = 'none';
		outerStyle.visibility = 'hidden';
		outerStyle.width = '200px';
		outerStyle.height = '150px';
		outerStyle.overflow = 'hidden';

		outer.appendChild(inner);

		document.body.appendChild(outer);

		var widthContained = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var widthScroll = inner.offsetWidth;

		if (widthContained === widthScroll) {
			widthScroll = outer.clientWidth;
		}

		document.body.removeChild(outer);

		cached = widthContained - widthScroll;
	}
	return cached;
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(63)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//

var prefixCls = 'kc-layout';
exports.default = {
	name: 'KcContent',
	computed: {
		wrapClasses: function wrapClasses() {
			return prefixCls + '-content';
		}
	}
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//

var prefixCls = 'kc-layout';
exports.default = {
	name: 'KcFooter',
	computed: {
		wrapClasses: function wrapClasses() {
			return prefixCls + '-footer';
		}
	}
};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//

var prefixCls = 'kc-layout';
exports.default = {
	name: 'KcHeader',
	computed: {
		wrapClasses: function wrapClasses() {
			return prefixCls + '-header';
		}
	}
};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dom = __webpack_require__(2);

var _util = __webpack_require__(4);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var prefixCls = 'kc-layout-sider';
(0, _util.setMatchMedia)();
exports.default = {
	name: 'KcSider',
	props: {
		value: { // if it's collpased now
			type: Boolean,
			default: false
		},
		width: {
			type: [Number, String],
			default: 200
		},
		collapsedWidth: {
			type: [Number, String],
			default: 64
		},
		hideTrigger: {
			type: Boolean,
			default: false
		},
		breakpoint: {
			type: String,
			validator: function validator(val) {
				return (0, _util.oneOf)(val, ['xs', 'sm', 'md', 'lg', 'xl']);
			}
		},
		collapsible: {
			type: Boolean,
			default: false
		},
		defaultCollapsed: {
			type: Boolean,
			default: false
		},
		reverseArrow: {
			type: Boolean,
			default: false
		}
	},
	data: function data() {
		return {
			prefixCls: prefixCls,
			mediaMatched: false
		};
	},

	computed: {
		wrapClasses: function wrapClasses() {
			return ['' + prefixCls, this.siderWidth ? '' : prefixCls + '-zero-width', this.value ? prefixCls + '-collapsed' : ''];
		},
		wrapStyles: function wrapStyles() {
			return {
				width: this.siderWidth + 'px',
				minWidth: this.siderWidth + 'px',
				maxWidth: this.siderWidth + 'px',
				flex: '0 0 ' + this.siderWidth + 'px'
			};
		},
		triggerClasses: function triggerClasses() {
			return [prefixCls + '-trigger', this.value ? prefixCls + '-trigger-collapsed' : ''];
		},
		childClasses: function childClasses() {
			return this.prefixCls + '-children';
		},
		zeroWidthTriggerClasses: function zeroWidthTriggerClasses() {
			return [prefixCls + '-zero-width-trigger', this.reverseArrow ? prefixCls + '-zero-width-trigger-left' : ''];
		},
		triggerIconClasses: function triggerIconClasses() {
			return ['kc-icon', 'kc-icon-chevron-' + (this.reverseArrow ? 'right' : 'left'), prefixCls + '-trigger-icon'];
		},
		siderWidth: function siderWidth() {
			return this.collapsible ? this.value ? this.mediaMatched ? 0 : parseInt(this.collapsedWidth) : parseInt(this.width) : this.width;
		},
		showZeroTrigger: function showZeroTrigger() {
			return this.collapsible ? this.mediaMatched && !this.hideTrigger || parseInt(this.collapsedWidth) === 0 && this.value && !this.hideTrigger : false;
		},
		showBottomTrigger: function showBottomTrigger() {
			return this.collapsible ? !this.mediaMatched && !this.hideTrigger : false;
		}
	},
	methods: {
		toggleCollapse: function toggleCollapse() {
			var value = this.collapsible ? !this.value : false;
			this.$emit('input', value);
		},
		matchMedia: function matchMedia() {
			var matchMedia = void 0;
			if (window.matchMedia) {
				matchMedia = window.matchMedia;
			}
			var mediaMatched = this.mediaMatched;
			this.mediaMatched = matchMedia('(max-width: ' + _util.dimensionMap[this.breakpoint] + ')').matches;

			if (this.mediaMatched !== mediaMatched) {
				this.$emit('input', this.mediaMatched);
			}
		},
		onWindowResize: function onWindowResize() {
			this.matchMedia();
		}
	},
	watch: {
		value: function value(stat) {
			this.$emit('on-collapse', stat);
		}
	},
	mounted: function mounted() {
		if (this.defaultCollapsed) {
			this.$emit('input', this.defaultCollapsed);
		}
		if (this.breakpoint !== undefined) {
			(0, _dom.on)(window, 'resize', this.onWindowResize);
			this.matchMedia();
		}
	},
	beforeDestroy: function beforeDestroy() {
		if (this.breakpoint !== undefined) {
			(0, _dom.off)(window, 'resize', this.onWindowResize);
		}
	}
};

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_content_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_content_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_content_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_content_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_196fd915_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_content_vue__ = __webpack_require__(128);
function injectStyle (ssrContext) {
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_content_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_196fd915_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_content_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_footer_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_footer_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_footer_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_53f79435_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__(143);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_footer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_53f79435_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_header_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_485b382a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__(148);
function injectStyle (ssrContext) {
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_485b382a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sider_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sider_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sider_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sider_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_761953a6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_sider_vue__ = __webpack_require__(152);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_761953a6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_sider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

/******/ });