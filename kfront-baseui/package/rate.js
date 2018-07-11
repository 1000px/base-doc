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
/******/ 	return __webpack_require__(__webpack_require__.s = 352);
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dom = __webpack_require__(2);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
	name: 'KcRate',

	mixins: [_migrating2.default],

	inject: {
		elForm: {
			default: ''
		}
	},

	data: function data() {
		return {
			pointerAtLeftHalf: true,
			currentValue: this.value,
			hoverIndex: -1
		};
	},


	props: {
		value: {
			type: Number,
			default: 0
		},
		lowThreshold: {
			type: Number,
			default: 2
		},
		highThreshold: {
			type: Number,
			default: 4
		},
		max: {
			type: Number,
			default: 5
		},
		colors: {
			type: Array,
			default: function _default() {
				return ['#F7BA2A', '#F7BA2A', '#F7BA2A'];
			}
		},
		voidColor: {
			type: String,
			default: '#C6D1DE'
			// default: '#E9E9E9'
		},
		disabledVoidColor: {
			type: String,
			default: '#EFF2F7'
		},
		iconClasses: {
			type: Array,
			default: function _default() {
				return ['kc-icon-star-on', 'kc-icon-star-on', 'kc-icon-star-on'];
			}
		},
		voidIconClass: {
			type: String,
			default: 'kc-icon-star-off'
		},
		disabledVoidIconClass: {
			type: String,
			default: 'kc-icon-star-on'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		allowHalf: {
			type: Boolean,
			default: false
		},
		showText: {
			type: Boolean,
			default: false
		},
		showScore: {
			type: Boolean,
			default: false
		},
		textColor: {
			type: String,
			default: '#1f2d3d'
		},
		texts: {
			type: Array,
			default: function _default() {
				return ['极差', '失望', '一般', '满意', '惊喜'];
			}
		},
		scoreTemplate: {
			type: String,
			default: '{value}'
		}
	},

	computed: {
		text: function text() {
			var result = '';
			if (this.showScore) {
				result = this.scoreTemplate.replace(/\{\s*value\s*\}/, this.rateDisabled ? this.value : this.currentValue);
			} else if (this.showText) {
				result = this.texts[Math.ceil(this.currentValue) - 1];
			}
			return result;
		},
		decimalStyle: function decimalStyle() {
			var width = '';
			if (this.rateDisabled) {
				width = (this.valueDecimal < 50 ? 0 : 50) + '%';
			}
			if (this.allowHalf) {
				width = '50%';
			}
			return {
				color: this.activeColor,
				width: width
			};
		},
		valueDecimal: function valueDecimal() {
			return this.value * 100 - Math.floor(this.value) * 100;
		},
		decimalIconClass: function decimalIconClass() {
			return this.getValueFromMap(this.value, this.classMap);
		},
		voidClass: function voidClass() {
			return this.rateDisabled ? this.classMap.disabledVoidClass : this.classMap.voidClass;
		},
		activeClass: function activeClass() {
			return this.getValueFromMap(this.currentValue, this.classMap);
		},
		colorMap: function colorMap() {
			return {
				lowColor: this.colors[0],
				mediumColor: this.colors[1],
				highColor: this.colors[2],
				voidColor: this.voidColor,
				disabledVoidColor: this.disabledVoidColor
			};
		},
		activeColor: function activeColor() {
			return this.getValueFromMap(this.currentValue, this.colorMap);
		},
		classes: function classes() {
			var result = [];
			var i = 0;
			var threshold = this.currentValue;
			if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
				threshold--;
			}
			for (; i < threshold; i++) {
				result.push(this.activeClass);
			}
			for (; i < this.max; i++) {
				result.push(this.voidClass);
			}
			return result;
		},
		classMap: function classMap() {
			return {
				lowClass: this.iconClasses[0],
				mediumClass: this.iconClasses[1],
				highClass: this.iconClasses[2],
				voidClass: this.voidIconClass,
				disabledVoidClass: this.disabledVoidIconClass
			};
		},
		rateDisabled: function rateDisabled() {
			return this.disabled || (this.elForm || {}).disabled;
		}
	},

	watch: {
		value: function value(val) {
			this.currentValue = val;
			this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
		}
	},

	methods: {
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {
					'text-template': 'text-template is renamed to score-template.'
				}
			};
		},
		getValueFromMap: function getValueFromMap(value, map) {
			var result = '';
			if (value <= this.lowThreshold) {
				result = map.lowColor || map.lowClass;
			} else if (value >= this.highThreshold) {
				result = map.highColor || map.highClass;
			} else {
				result = map.mediumColor || map.mediumClass;
			}
			return result;
		},
		showDecimalIcon: function showDecimalIcon(item) {
			var showWhenDisabled = this.rateDisabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value;
			/* istanbul ignore next */
			var showWhenAllowHalf = this.allowHalf && this.pointerAtLeftHalf && item - 0.5 <= this.currentValue && item > this.currentValue;
			return showWhenDisabled || showWhenAllowHalf;
		},
		getIconStyle: function getIconStyle(item) {
			var voidColor = this.rateDisabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor;
			return {
				color: item <= this.currentValue ? this.activeColor : voidColor
			};
		},
		selectValue: function selectValue(value) {
			if (this.rateDisabled) {
				return;
			}
			if (this.allowHalf && this.pointerAtLeftHalf) {
				this.$emit('input', this.currentValue);
				this.$emit('change', this.currentValue);
			} else {
				this.$emit('input', value);
				this.$emit('change', value);
			}
		},
		handleKey: function handleKey(e) {
			if (this.rateDisabled) {
				return;
			}
			var currentValue = this.currentValue;
			var keyCode = e.keyCode;
			if (keyCode === 38 || keyCode === 39) {
				// left / down
				if (this.allowHalf) {
					currentValue += 0.5;
				} else {
					currentValue += 1;
				}
				e.stopPropagation();
				e.preventDefault();
			} else if (keyCode === 37 || keyCode === 40) {
				if (this.allowHalf) {
					currentValue -= 0.5;
				} else {
					currentValue -= 1;
				}
				e.stopPropagation();
				e.preventDefault();
			}
			currentValue = currentValue < 0 ? 0 : currentValue;
			currentValue = currentValue > this.max ? this.max : currentValue;

			this.$emit('input', currentValue);
			this.$emit('change', currentValue);
		},
		setCurrentValue: function setCurrentValue(value, event) {
			if (this.rateDisabled) {
				return;
			}
			/* istanbul ignore if */
			if (this.allowHalf) {
				var target = event.target;
				if ((0, _dom.hasClass)(target, 'kc-rate__item')) {
					target = target.querySelector('.kc-rate__icon');
				}
				if ((0, _dom.hasClass)(target, 'kc-rate__decimal')) {
					target = target.parentNode;
				}
				this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth;
				this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value;
			} else {
				this.currentValue = value;
			}
			this.hoverIndex = value;
		},
		resetCurrentValue: function resetCurrentValue() {
			if (this.rateDisabled) {
				return;
			}
			if (this.allowHalf) {
				this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
			}
			this.currentValue = this.value;
			this.hoverIndex = -1;
		}
	},

	created: function created() {
		if (!this.value) {
			this.$emit('input', 0);
		}
	}
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStyle = exports.once = exports.off = exports.on = undefined;

var _typeof2 = __webpack_require__(3);

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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _main = __webpack_require__(353);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
	Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_11f35942_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(354);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_11f35942_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-rate",attrs:{"role":"slider","aria-valuenow":_vm.currentValue,"aria-valuetext":_vm.text,"aria-valuemin":"0","aria-valuemax":_vm.max,"tabindex":"0"},on:{"keydown":_vm.handleKey}},[_vm._l((_vm.max),function(item){return _c('span',{staticClass:"kc-rate__item",style:({ cursor: _vm.rateDisabled ? 'auto' : 'pointer' }),on:{"mousemove":function($event){_vm.setCurrentValue(item, $event)},"mouseleave":_vm.resetCurrentValue,"click":function($event){_vm.selectValue(item)}}},[_c('i',{staticClass:"kc-rate__icon",class:[_vm.classes[item - 1], { 'hover': _vm.hoverIndex === item }],style:(_vm.getIconStyle(item))},[(_vm.showDecimalIcon(item))?_c('i',{staticClass:"kc-rate__decimal",class:_vm.decimalIconClass,style:(_vm.decimalStyle)}):_vm._e()])])}),(_vm.showText || _vm.showScore)?_c('span',{staticClass:"kc-rate__text",style:({ color: _vm.textColor })},[_vm._v(_vm._s(_vm.text))]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
exports.default = {
	mounted: function mounted() {
		if (true) return;
		if (!this.$vnode) return;

		var _getMigratingConfig = this.getMigratingConfig(),
		    _getMigratingConfig$p = _getMigratingConfig.props,
		    props = _getMigratingConfig$p === undefined ? {} : _getMigratingConfig$p,
		    _getMigratingConfig$e = _getMigratingConfig.events,
		    events = _getMigratingConfig$e === undefined ? {} : _getMigratingConfig$e;

		var _$vnode = this.$vnode,
		    data = _$vnode.data,
		    componentOptions = _$vnode.componentOptions;

		var definedProps = data.attrs || {};
		var definedEvents = componentOptions.listeners || {};

		for (var propName in definedProps) {
			if (definedProps.hasOwnProperty(propName) && props[propName]) {
				console.warn('[Element Migrating][' + this.$options.name + '][Attribute]: ' + props[propName]);
			}
		}

		for (var eventName in definedEvents) {
			if (definedEvents.hasOwnProperty(eventName) && events[eventName]) {
				console.warn('[Element Migrating][' + this.$options.name + '][Event]: ' + events[eventName]);
			}
		}
	},

	methods: {
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {},
				events: {}
			};
		}
	}
};

/***/ })

/******/ });