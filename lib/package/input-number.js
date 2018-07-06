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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _input = __webpack_require__(23);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_input2.default.install = function (Vue) {
	Vue.component(_input2.default.name, _input2.default);
};

exports.default = _input2.default;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(4);

var _emitter2 = _interopRequireDefault(_emitter);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

var _calcTextareaHeight = __webpack_require__(24);

var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcInput',

	componentName: 'KcInput',

	mixins: [_emitter2.default, _migrating2.default],

	inheritAttrs: false,

	inject: {
		elForm: {
			default: ''
		},
		elFormItem: {
			default: ''
		}
	},

	data: function data() {
		return {
			currentValue: this.value === undefined || this.value === null ? '' : this.value,
			textareaCalcStyle: {},
			prefixOffset: null,
			suffixOffset: null,
			hovering: false,
			focused: false,
			isOnComposition: false
		};
	},


	props: {
		value: [String, Number],
		size: String,
		resize: String,
		form: String,
		disabled: Boolean,
		type: {
			type: String,
			default: 'text'
		},
		autosize: {
			type: [Boolean, Object],
			default: false
		},
		autoComplete: {
			type: String,
			default: 'off'
		},
		validateEvent: {
			type: Boolean,
			default: true
		},
		suffixIcon: String,
		prefixIcon: String,
		label: String,
		clearable: {
			type: Boolean,
			default: false
		},
		tabindex: String,
		search: Boolean
	},

	computed: {
		_elFormItemSize: function _elFormItemSize() {
			return (this.elFormItem || {}).elFormItemSize;
		},
		validateState: function validateState() {
			return this.elFormItem ? this.elFormItem.validateState : '';
		},
		needStatusIcon: function needStatusIcon() {
			return this.elForm ? this.elForm.statusIcon : false;
		},
		validateIcon: function validateIcon() {
			return {
				validating: 'el-icon-loading',
				success: 'el-icon-circle-check',
				error: 'el-icon-circle-close'
			}[this.validateState];
		},
		textareaStyle: function textareaStyle() {
			return (0, _merge2.default)({}, this.textareaCalcStyle, { resize: this.resize });
		},
		inputSize: function inputSize() {
			return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
		},
		inputDisabled: function inputDisabled() {
			return this.disabled || (this.elForm || {}).disabled;
		},
		isGroup: function isGroup() {
			return this.$slots.prepend || this.$slots.append;
		},
		showClear: function showClear() {
			return this.clearable && !this.disabled && !this.readonly && this.currentValue !== '' && (this.focused || this.hovering);
		}
	},

	watch: {
		'value': function value(val, oldValue) {
			this.setCurrentValue(val);
		}
	},

	methods: {
		focus: function focus() {
			(this.$refs.input || this.$refs.textarea).focus();
		},
		blur: function blur() {
			(this.$refs.input || this.$refs.textarea).blur();
		},
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {
					'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
					'on-icon-click': 'on-icon-click is removed.'
				},
				events: {
					'click': 'click is removed.'
				}
			};
		},
		handleBlur: function handleBlur(event) {
			this.focused = false;
			this.$emit('blur', event);
			if (this.validateEvent) {
				this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
			}
		},
		select: function select() {
			(this.$refs.input || this.$refs.textarea).select();
		},
		resizeTextarea: function resizeTextarea() {
			if (this.$isServer) return;
			var autosize = this.autosize,
			    type = this.type;

			if (type !== 'textarea') return;
			if (!autosize) {
				this.textareaCalcStyle = {
					minHeight: (0, _calcTextareaHeight2.default)(this.$refs.textarea).minHeight
				};
				return;
			}
			var minRows = autosize.minRows;
			var maxRows = autosize.maxRows;

			this.textareaCalcStyle = (0, _calcTextareaHeight2.default)(this.$refs.textarea, minRows, maxRows);
		},
		handleFocus: function handleFocus(event) {
			this.focused = true;
			this.$emit('focus', event);
		},
		handleComposition: function handleComposition(event) {
			if (event.type === 'compositionend') {
				this.isOnComposition = false;
				this.handleInput(event);
			} else {
				var text = event.target.value;
				var lastCharacter = text[text.length - 1] || '';
				this.isOnComposition = !(0, _shared.isKorean)(lastCharacter);
			}
		},
		handleInput: function handleInput(event) {
			if (this.isOnComposition) return;
			var value = event.target.value;
			this.$emit('input', value);
			this.setCurrentValue(value);
		},
		handleChange: function handleChange(event) {
			this.$emit('change', event.target.value);
		},
		setCurrentValue: function setCurrentValue(value) {
			var _this = this;

			if (value === this.currentValue) return;
			this.$nextTick(function (_) {
				_this.resizeTextarea();
			});
			this.currentValue = value;
			if (this.validateEvent) {
				this.dispatch('ElFormItem', 'el.form.change', [value]);
			}
		},
		calcIconOffset: function calcIconOffset(place) {
			var pendantMap = {
				'suf': 'append',
				'pre': 'prepend'
			};

			var pendant = pendantMap[place];

			if (this.$slots[pendant]) {
				return { transform: 'translateX(' + (place === 'suf' ? '-' : '') + this.$el.querySelector('.el-input-group__' + pendant).offsetWidth + 'px)' };
			}
		},
		clear: function clear() {
			this.$emit('input', '');
			this.$emit('change', '');
			this.$emit('clear');
			this.setCurrentValue('');
			this.focus();
		}
	},

	created: function created() {
		this.$on('inputSelect', this.select);
	},
	mounted: function mounted() {
		this.resizeTextarea();
		if (this.isGroup) {
			this.prefixOffset = this.calcIconOffset('pre');
			this.suffixOffset = this.calcIconOffset('suf');
		}
	}
}; //
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

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_number_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_number_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_number_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_number_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_number_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_e95bfc0a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_number_vue__ = __webpack_require__(152);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_number_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_e95bfc0a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_number_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      'el-input-number',
      _vm.inputNumberSize ? 'el-input-number--' + _vm.inputNumberSize : '',
      { 'is-disabled': _vm.inputNumberDisabled },
      { 'is-without-controls': !_vm.controls },
      { 'is-controls-right': _vm.controlsAtRight }
    ],on:{"dragstart":function($event){$event.preventDefault();}}},[(_vm.controls)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-input-number__decrease",class:{'is-disabled': _vm.minDisabled},attrs:{"role":"button"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.decrease($event)}}},[_c('i',{class:("el-icon-" + (_vm.controlsAtRight ? 'arrow-down' : 'minus'))})]):_vm._e(),(_vm.controls)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-input-number__increase",class:{'is-disabled': _vm.maxDisabled},attrs:{"role":"button"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.increase($event)}}},[_c('i',{class:("el-icon-" + (_vm.controlsAtRight ? 'arrow-up' : 'plus'))})]):_vm._e(),_c('kc-input',{ref:"input",attrs:{"value":_vm.currentValue,"disabled":_vm.inputNumberDisabled,"size":_vm.inputNumberSize,"max":_vm.max,"min":_vm.min,"name":_vm.name,"label":_vm.label},on:{"blur":_vm.handleBlur,"focus":_vm.handleFocus,"change":_vm.handleInputChange},nativeOn:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.increase($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.decrease($event)}]}},[(_vm.$slots.prepend)?_c('template',{slot:"prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.$slots.append)?_c('template',{slot:"append"},[_vm._t("append")],2):_vm._e()],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isDef = isDef;
exports.isKorean = isKorean;
function isDef(val) {
	return val !== undefined && val !== null;
}

function isKorean(text) {
	var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
	return reg.test(text);
}

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

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_8579c246_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(25);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_8579c246_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = calcTextareaHeight;
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
	var style = window.getComputedStyle(targetElement);

	var boxSizing = style.getPropertyValue('box-sizing');

	var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

	var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

	var contextStyle = CONTEXT_STYLE.map(function (name) {
		return name + ':' + style.getPropertyValue(name);
	}).join(';');

	return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetElement) {
	var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	if (!hiddenTextarea) {
		hiddenTextarea = document.createElement('textarea');
		document.body.appendChild(hiddenTextarea);
	}

	var _calculateNodeStyling = calculateNodeStyling(targetElement),
	    paddingSize = _calculateNodeStyling.paddingSize,
	    borderSize = _calculateNodeStyling.borderSize,
	    boxSizing = _calculateNodeStyling.boxSizing,
	    contextStyle = _calculateNodeStyling.contextStyle;

	hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
	hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

	var height = hiddenTextarea.scrollHeight;
	var result = {};

	if (boxSizing === 'border-box') {
		height = height + borderSize;
	} else if (boxSizing === 'content-box') {
		height = height - paddingSize;
	}

	hiddenTextarea.value = '';
	var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

	if (minRows !== null) {
		var minHeight = singleRowHeight * minRows;
		if (boxSizing === 'border-box') {
			minHeight = minHeight + paddingSize + borderSize;
		}
		height = Math.max(minHeight, height);
		result.minHeight = minHeight + 'px';
	}
	if (maxRows !== null) {
		var maxHeight = singleRowHeight * maxRows;
		if (boxSizing === 'border-box') {
			maxHeight = maxHeight + paddingSize + borderSize;
		}
		height = Math.min(maxHeight, height);
	}
	result.height = height + 'px';
	hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
	hiddenTextarea = null;
	return result;
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    _vm.type === 'textarea' ? 'el-textarea' : 'el-input',
    _vm.inputSize ? 'el-input--' + _vm.inputSize : '',
		_vm.search === true ? 'el-input-group__search' : '',
    {
      'is-disabled': _vm.inputDisabled,
      'el-input-group': _vm.$slots.prepend || _vm.$slots.append,
      'el-input-group--append': _vm.$slots.append,
      'el-input-group--prepend': _vm.$slots.prepend,
      'el-input--prefix': _vm.$slots.prefix || _vm.prefixIcon,
      'el-input--suffix': _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable,
    }
    ],on:{"mouseenter":function($event){_vm.hovering = true},"mouseleave":function($event){_vm.hovering = false}}},[(_vm.type !== 'textarea')?[(_vm.$slots.prepend)?_c('div',{staticClass:"el-input-group__prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.type !== 'textarea')?_c('input',_vm._b({ref:"input",staticClass:"el-input__inner",attrs:{"tabindex":_vm.tabindex,"type":_vm.type,"disabled":_vm.inputDisabled,"autocomplete":_vm.autoComplete,"aria-label":_vm.label,"search":_vm.search},domProps:{"value":_vm.currentValue},on:{"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'input',_vm.$attrs,false)):_vm._e(),(_vm.$slots.prefix || _vm.prefixIcon)?_c('span',{staticClass:"el-input__prefix",style:(_vm.prefixOffset)},[_vm._t("prefix"),(_vm.prefixIcon)?_c('i',{staticClass:"el-input__icon",class:_vm.prefixIcon}):_vm._e()],2):_vm._e(),(_vm.$slots.suffix || _vm.suffixIcon || _vm.showClear || _vm.validateState && _vm.needStatusIcon)?_c('span',{staticClass:"el-input__suffix",style:(_vm.suffixOffset)},[_c('span',{staticClass:"el-input__suffix-inner"},[(!_vm.showClear)?[_vm._t("suffix"),(_vm.suffixIcon)?_c('i',{staticClass:"el-input__icon",class:_vm.suffixIcon}):_vm._e()]:_c('i',{staticClass:"el-input__icon el-icon-circle-close el-input__clear",on:{"click":_vm.clear}})],2),(_vm.validateState)?_c('i',{staticClass:"el-input__icon",class:['el-input__validateIcon', _vm.validateIcon]}):_vm._e()]):_vm._e(),(_vm.$slots.append)?_c('div',{staticClass:"el-input-group__append"},[_vm._t("append")],2):_vm._e()]:_c('textarea',_vm._b({ref:"textarea",staticClass:"el-textarea__inner",style:(_vm.textareaStyle),attrs:{"tabindex":_vm.tabindex,"disabled":_vm.inputDisabled,"aria-label":_vm.label},domProps:{"value":_vm.currentValue},on:{"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'textarea',_vm.$attrs,false))],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function _broadcast(componentName, eventName, params) {
	this.$children.forEach(function (child) {
		var name = child.$options.componentName;

		if (name === componentName) {
			child.$emit.apply(child, [eventName].concat(params));
		} else {
			_broadcast.apply(child, [componentName, eventName].concat([params]));
		}
	});
}

exports.default = {
	methods: {
		dispatch: function dispatch(componentName, eventName, params) {
			var parent = this.$parent || this.$root;
			var name = parent.$options.componentName;

			while (parent && (!name || name !== componentName)) {
				parent = parent.$parent;

				if (parent) {
					name = parent.$options.componentName;
				}
			}
			if (parent) {
				parent.$emit.apply(parent, [eventName].concat(params));
			}
		},
		broadcast: function broadcast(componentName, eventName, params) {
			_broadcast.call(this, componentName, eventName, params);
		}
	}
};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (ref) {
	return {
		methods: {
			focus: function focus() {
				this.$refs[ref].focus();
			}
		}
	};
};

;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (target) {
	for (var i = 1, j = arguments.length; i < j; i++) {
		var source = arguments[i] || {};
		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				var value = source[prop];
				if (value !== undefined) {
					target[prop] = value;
				}
			}
		}
	}

	return target;
};

;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(2);

exports.default = {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (new Date() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    (0, _dom.on)(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = new Date();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _input = __webpack_require__(13);

var _input2 = _interopRequireDefault(_input);

var _focus = __webpack_require__(44);

var _focus2 = _interopRequireDefault(_focus);

var _repeatClick = __webpack_require__(63);

var _repeatClick2 = _interopRequireDefault(_repeatClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcInputNumber',
	mixins: [(0, _focus2.default)('input')],
	inject: {
		elForm: {
			default: ''
		},
		elFormItem: {
			default: ''
		}
	},
	directives: {
		repeatClick: _repeatClick2.default
	},
	components: {
		KcInput: _input2.default
	},
	props: {
		step: {
			type: Number,
			default: 1
		},
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		value: {},
		disabled: Boolean,
		size: String,
		controls: {
			type: Boolean,
			default: true
		},
		controlsPosition: {
			type: String,
			default: ''
		},
		name: String,
		label: String
	},
	data: function data() {
		return {
			currentValue: 0
		};
	},

	watch: {
		value: {
			immediate: true,
			handler: function handler(value) {
				var newVal = value === undefined ? value : Number(value);
				if (newVal !== undefined && isNaN(newVal)) return;
				if (newVal >= this.max) newVal = this.max;
				if (newVal <= this.min) newVal = this.min;
				this.currentValue = newVal;
				this.$emit('input', newVal);
			}
		}
	},
	computed: {
		minDisabled: function minDisabled() {
			return this._decrease(this.value, this.step) < this.min;
		},
		maxDisabled: function maxDisabled() {
			return this._increase(this.value, this.step) > this.max;
		},
		precision: function precision() {
			var value = this.value,
			    step = this.step,
			    getPrecision = this.getPrecision;

			return Math.max(getPrecision(value), getPrecision(step));
		},
		controlsAtRight: function controlsAtRight() {
			return this.controlsPosition === 'right';
		},
		_elFormItemSize: function _elFormItemSize() {
			return (this.elFormItem || {}).elFormItemSize;
		},
		inputNumberSize: function inputNumberSize() {
			return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
		},
		inputNumberDisabled: function inputNumberDisabled() {
			return this.disabled || (this.elForm || {}).disabled;
		}
	},
	methods: {
		toPrecision: function toPrecision(num, precision) {
			if (precision === undefined) precision = this.precision;
			return parseFloat(parseFloat(Number(num).toFixed(precision)));
		},
		getPrecision: function getPrecision(value) {
			if (value === undefined) return 0;
			var valueString = value.toString();
			var dotPosition = valueString.indexOf('.');
			var precision = 0;
			if (dotPosition !== -1) {
				precision = valueString.length - dotPosition - 1;
			}
			return precision;
		},
		_increase: function _increase(val, step) {
			if (typeof val !== 'number' && val !== undefined) return this.currentValue;

			var precisionFactor = Math.pow(10, this.precision);
			// Solve the accuracy problem of JS decimal calculation by converting the value to integer.
			return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
		},
		_decrease: function _decrease(val, step) {
			if (typeof val !== 'number' && val !== undefined) return this.currentValue;

			var precisionFactor = Math.pow(10, this.precision);

			return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
		},
		increase: function increase() {
			if (this.inputNumberDisabled || this.maxDisabled) return;
			var value = this.value || 0;
			var newVal = this._increase(value, this.step);
			this.setCurrentValue(newVal);
		},
		decrease: function decrease() {
			if (this.inputNumberDisabled || this.minDisabled) return;
			var value = this.value || 0;
			var newVal = this._decrease(value, this.step);
			this.setCurrentValue(newVal);
		},
		handleBlur: function handleBlur(event) {
			this.$emit('blur', event);
			this.$refs.input.setCurrentValue(this.currentValue);
		},
		handleFocus: function handleFocus(event) {
			this.$emit('focus', event);
		},
		setCurrentValue: function setCurrentValue(newVal) {
			var oldVal = this.currentValue;
			if (newVal >= this.max) newVal = this.max;
			if (newVal <= this.min) newVal = this.min;
			if (oldVal === newVal) {
				this.$refs.input.setCurrentValue(this.currentValue);
				return;
			}
			this.$emit('input', newVal);
			this.$emit('change', newVal, oldVal);
			this.currentValue = newVal;
		},
		handleInputChange: function handleInputChange(value) {
			var newVal = value === '' ? undefined : Number(value);
			if (!isNaN(newVal) || value === '') {
				this.setCurrentValue(newVal);
			}
		}
	},
	mounted: function mounted() {
		var innerInput = this.$refs.input.$refs.input;
		innerInput.setAttribute('role', 'spinbutton');
		innerInput.setAttribute('aria-valuemax', this.max);
		innerInput.setAttribute('aria-valuemin', this.min);
		innerInput.setAttribute('aria-valuenow', this.currentValue);
		innerInput.setAttribute('aria-disabled', this.inputNumberDisabled);
	},
	updated: function updated() {
		if (!this.$refs || !this.$refs.input) return;
		var innerInput = this.$refs.input.$refs.input;
		innerInput.setAttribute('aria-valuenow', this.currentValue);
	}
}; //
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

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _inputNumber = __webpack_require__(151);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_inputNumber2.default.install = function (Vue) {
	Vue.component(_inputNumber2.default.name, _inputNumber2.default);
};

exports.default = _inputNumber2.default;

/***/ })

/******/ });