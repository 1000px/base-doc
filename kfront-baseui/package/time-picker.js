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
/******/ 	return __webpack_require__(__webpack_require__.s = 402);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PopupManager = undefined;

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

var _popupManager = __webpack_require__(16);

var _popupManager2 = _interopRequireDefault(_popupManager);

var _scrollbarWidth = __webpack_require__(9);

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _dom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idSeed = 1;

var scrollBarWidth = void 0;

var getDOM = function getDOM(dom) {
	if (dom.nodeType === 3) {
		dom = dom.nextElementSibling || dom.nextSibling;
		getDOM(dom);
	}
	return dom;
};

exports.default = {
	props: {
		visible: {
			type: Boolean,
			default: false
		},
		openDelay: {},
		closeDelay: {},
		zIndex: {},
		modal: {
			type: Boolean,
			default: false
		},
		modalFade: {
			type: Boolean,
			default: true
		},
		modalClass: {},
		modalAppendToBody: {
			type: Boolean,
			default: false
		},
		lockScroll: {
			type: Boolean,
			default: true
		},
		closeOnPressEscape: {
			type: Boolean,
			default: false
		},
		closeOnClickModal: {
			type: Boolean,
			default: false
		}
	},

	beforeMount: function beforeMount() {
		this._popupId = 'popup-' + idSeed++;
		_popupManager2.default.register(this._popupId, this);
	},
	beforeDestroy: function beforeDestroy() {
		_popupManager2.default.deregister(this._popupId);
		_popupManager2.default.closeModal(this._popupId);

		this.restoreBodyStyle();
	},
	data: function data() {
		return {
			opened: false,
			bodyPaddingRight: null,
			computedBodyPaddingRight: 0,
			withoutHiddenClass: true,
			rendered: false
		};
	},


	watch: {
		visible: function visible(val) {
			var _this = this;

			if (val) {
				if (this._opening) return;
				if (!this.rendered) {
					this.rendered = true;
					_vue2.default.nextTick(function () {
						_this.open();
					});
				} else {
					this.open();
				}
			} else {
				this.close();
			}
		}
	},

	methods: {
		open: function open(options) {
			var _this2 = this;

			if (!this.rendered) {
				this.rendered = true;
			}

			var props = (0, _merge2.default)({}, this.$props || this, options);

			if (this._closeTimer) {
				clearTimeout(this._closeTimer);
				this._closeTimer = null;
			}
			clearTimeout(this._openTimer);

			var openDelay = Number(props.openDelay);
			if (openDelay > 0) {
				this._openTimer = setTimeout(function () {
					_this2._openTimer = null;
					_this2.doOpen(props);
				}, openDelay);
			} else {
				this.doOpen(props);
			}
		},
		doOpen: function doOpen(props) {
			if (this.$isServer) return;
			if (this.willOpen && !this.willOpen()) return;
			if (this.opened) return;

			this._opening = true;

			var dom = getDOM(this.$el);

			var modal = props.modal;

			var zIndex = props.zIndex;
			if (zIndex) {
				_popupManager2.default.zIndex = zIndex;
			}

			if (modal) {
				if (this._closing) {
					_popupManager2.default.closeModal(this._popupId);
					this._closing = false;
				}
				_popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
				if (props.lockScroll) {
					this.withoutHiddenClass = !(0, _dom.hasClass)(document.body, 'kc-popup-parent--hidden');
					if (this.withoutHiddenClass) {
						this.bodyPaddingRight = document.body.style.paddingRight;
						this.computedBodyPaddingRight = parseInt((0, _dom.getStyle)(document.body, 'paddingRight'), 10);
					}
					scrollBarWidth = (0, _scrollbarWidth2.default)();
					var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
					var bodyOverflowY = (0, _dom.getStyle)(document.body, 'overflowY');
					if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
						document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + 'px';
					}
					(0, _dom.addClass)(document.body, 'kc-popup-parent--hidden');
				}
			}

			if (getComputedStyle(dom).position === 'static') {
				dom.style.position = 'absolute';
			}

			dom.style.zIndex = _popupManager2.default.nextZIndex();
			this.opened = true;

			this.onOpen && this.onOpen();

			this.doAfterOpen();
		},
		doAfterOpen: function doAfterOpen() {
			this._opening = false;
		},
		close: function close() {
			var _this3 = this;

			if (this.willClose && !this.willClose()) return;

			if (this._openTimer !== null) {
				clearTimeout(this._openTimer);
				this._openTimer = null;
			}
			clearTimeout(this._closeTimer);

			var closeDelay = Number(this.closeDelay);

			if (closeDelay > 0) {
				this._closeTimer = setTimeout(function () {
					_this3._closeTimer = null;
					_this3.doClose();
				}, closeDelay);
			} else {
				this.doClose();
			}
		},
		doClose: function doClose() {
			this._closing = true;

			this.onClose && this.onClose();

			if (this.lockScroll) {
				setTimeout(this.restoreBodyStyle, 200);
			}

			this.opened = false;

			this.doAfterClose();
		},
		doAfterClose: function doAfterClose() {
			_popupManager2.default.closeModal(this._popupId);
			this._closing = false;
		},
		restoreBodyStyle: function restoreBodyStyle() {
			if (this.modal && this.withoutHiddenClass) {
				document.body.style.paddingRight = this.bodyPaddingRight;
				(0, _dom.removeClass)(document.body, 'kc-popup-parent--hidden');
			}
			this.withoutHiddenClass = true;
		}
	}
};
exports.PopupManager = _popupManager2.default;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _locale = __webpack_require__(17);

exports.default = {
	methods: {
		t: function t() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _locale.t.apply(this, args);
		}
	}
};

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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-time-spinner",class:{ 'has-seconds': _vm.showSeconds }},[(!_vm.arrowControl)?[_c('kc-scrollbar',{ref:"hours",staticClass:"kc-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"kc-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('hours')},"mousemove":function($event){_vm.adjustCurrentSpinner('hours')}}},_vm._l((_vm.hoursList),function(disabled,hour){return _c('li',{staticClass:"kc-time-spinner__item",class:{ 'active': hour === _vm.hours, 'disabled': disabled },on:{"click":function($event){_vm.handleClick('hours', { value: hour, disabled: disabled })}}},[_vm._v(_vm._s(('0' + (_vm.amPmMode ? (hour % 12 || 12) : hour )).slice(-2))+_vm._s(_vm.amPm(hour)))])})),_c('kc-scrollbar',{ref:"minutes",staticClass:"kc-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"kc-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('minutes')},"mousemove":function($event){_vm.adjustCurrentSpinner('minutes')}}},_vm._l((60),function(minute,key){return _c('li',{staticClass:"kc-time-spinner__item",class:{ 'active': key === _vm.minutes },on:{"click":function($event){_vm.handleClick('minutes', { value: key, disabled: false })}}},[_vm._v(_vm._s(('0' + key).slice(-2)))])})),_c('kc-scrollbar',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSeconds),expression:"showSeconds"}],ref:"seconds",staticClass:"kc-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"kc-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('seconds')},"mousemove":function($event){_vm.adjustCurrentSpinner('seconds')}}},_vm._l((60),function(second,key){return _c('li',{staticClass:"kc-time-spinner__item",class:{ 'active': key === _vm.seconds },on:{"click":function($event){_vm.handleClick('seconds', { value: key, disabled: false })}}},[_vm._v(_vm._s(('0' + key).slice(-2)))])}))]:_vm._e(),(_vm.arrowControl)?[_c('div',{staticClass:"kc-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('hours')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"kc-time-spinner__arrow kc-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"kc-time-spinner__arrow kc-icon-arrow-down"}),_c('ul',{ref:"hours",staticClass:"kc-time-spinner__list"},_vm._l((_vm.arrowHourList),function(hour){return _c('li',{staticClass:"kc-time-spinner__item",class:{ 'active': hour === _vm.hours, 'disabled': _vm.hoursList[hour] }},[_vm._v(_vm._s(hour === undefined ? '' : ('0' + (_vm.amPmMode ? (hour % 12 || 12) : hour )).slice(-2) + _vm.amPm(hour)))])}))]),_c('div',{staticClass:"kc-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('minutes')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"kc-time-spinner__arrow kc-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"kc-time-spinner__arrow kc-icon-arrow-down"}),_c('ul',{ref:"minutes",staticClass:"kc-time-spinner__list"},_vm._l((_vm.arrowMinuteList),function(minute){return _c('li',{staticClass:"kc-time-spinner__item",class:{ 'active': minute === _vm.minutes }},[_vm._v("\n          "+_vm._s(minute === undefined ? '' : ('0' + minute).slice(-2))+"\n        ")])}))]),(_vm.showSeconds)?_c('div',{staticClass:"kc-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('seconds')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"kc-time-spinner__arrow kc-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"kc-time-spinner__arrow kc-icon-arrow-down"}),_c('ul',{ref:"seconds",staticClass:"kc-time-spinner__list"},_vm._l((_vm.arrowSecondList),function(second){return _c('li',{staticClass:"kc-time-spinner__item",class:{ 'active': second === _vm.seconds }},[_vm._v("\n          "+_vm._s(second === undefined ? '' : ('0' + second).slice(-2))+"\n        ")])}))]):_vm._e()]:_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"kc-zoom-in-top"},on:{"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"kc-time-panel kc-popper",class:_vm.popperClass},[_c('div',{staticClass:"kc-time-panel__content",class:{ 'has-seconds': _vm.showSeconds }},[_c('time-spinner',{ref:"spinner",attrs:{"arrow-control":_vm.useArrow,"show-seconds":_vm.showSeconds,"am-pm-mode":_vm.amPmMode,"date":_vm.date},on:{"change":_vm.handleChange,"select-range":_vm.setSelectionRange}})],1),_c('div',{staticClass:"kc-time-panel__footer"},[_c('button',{staticClass:"kc-time-panel__btn cancel",attrs:{"type":"button"},on:{"click":_vm.handleCancel}},[_vm._v(_vm._s(_vm.t('el.datepicker.cancel'))+"\n\t\t\t")]),_c('button',{staticClass:"kc-time-panel__btn",class:{confirm: !_vm.disabled},attrs:{"type":"button"},on:{"click":function($event){_vm.handleConfirm()}}},[_vm._v(_vm._s(_vm.t('el.datepicker.confirm'))+"\n\t\t\t")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
				validating: 'kc-icon-loading',
				success: 'kc-icon-circle-check',
				error: 'kc-icon-circle-close'
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
				this.dispatch('KcFormItem', 'el.form.blur', [this.currentValue]);
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
				this.dispatch('KcFormItem', 'el.form.change', [value]);
			}
		},
		calcIconOffset: function calcIconOffset(place) {
			var pendantMap = {
				'suf': 'append',
				'pre': 'prepend'
			};

			var pendant = pendantMap[place];

			if (this.$slots[pendant]) {
				return { transform: 'translateX(' + (place === 'suf' ? '-' : '') + this.$el.querySelector('.kc-input-group__' + pendant).offsetWidth + 'px)' };
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _popup = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopperJS = _vue2.default.prototype.$isServer ? function () {} : __webpack_require__(21);

var stop = function stop(e) {
	return e.stopPropagation();
};

/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
exports.default = {
	props: {
		transformOrigin: {
			type: [Boolean, String],
			default: true
		},
		placement: {
			type: String,
			default: 'bottom'
		},
		arrowPointPlace: String,
		boundariesPadding: {
			type: Number,
			default: 5
		},
		reference: {},
		popper: {},
		offset: {
			default: 0
		},
		value: Boolean,
		visibleArrow: Boolean,
		arrowOffset: {
			type: Number,
			default: 35
		},
		appendToBody: {
			type: Boolean,
			default: true
		},
		popperOptions: {
			type: Object,
			default: function _default() {
				return {
					gpuAcceleration: false
				};
			}
		}
	},

	data: function data() {
		return {
			showPopper: false,
			currentPlacement: ''
		};
	},


	watch: {
		value: {
			immediate: true,
			handler: function handler(val) {
				this.showPopper = val;
				this.$emit('input', val);
			}
		},

		showPopper: function showPopper(val) {
			if (this.disabled) {
				return;
			}
			val ? this.updatePopper() : this.destroyPopper();
			this.$emit('input', val);
		}
	},

	methods: {
		createPopper: function createPopper() {
			var _this = this;

			if (this.$isServer) return;
			this.currentPlacement = this.currentPlacement || this.placement;
			if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
				return;
			}

			var options = this.popperOptions;
			var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
			var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

			if (!reference && this.$slots.reference && this.$slots.reference[0]) {
				reference = this.referenceElm = this.$slots.reference[0].elm;
			}

			if (!popper || !reference) return;
			if (this.visibleArrow) this.appendArrow(popper);
			if (this.appendToBody) document.body.appendChild(this.popperElm);
			if (this.popperJS && this.popperJS.destroy) {
				this.popperJS.destroy();
			}

			options.placement = this.currentPlacement;
			options.offset = this.offset;
			options.arrowOffset = this.arrowOffset;
			options.arrowPointPlace = this.arrowPointPlace;
			this.popperJS = new PopperJS(reference, popper, options); //此处报错被注释

			// let Popper = PopperJS.Popper
			// this.popperJS = new Popper(reference, popper, options);
			this.popperJS.onCreate(function (_) {
				_this.$emit('created', _this);
				_this.resetTransformOrigin();
				_this.$nextTick(_this.updatePopper);
			});
			if (typeof options.onUpdate === 'function') {
				this.popperJS.onUpdate(options.onUpdate);
			}
			this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
			this.popperElm.addEventListener('click', stop);
		},
		updatePopper: function updatePopper() {
			var popperJS = this.popperJS;
			if (popperJS) {
				popperJS.update();
				if (popperJS._popper) {
					popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
				}
			} else {
				this.createPopper();
			}
		},
		doDestroy: function doDestroy(forceDestroy) {
			/* istanbul ignore if */
			if (!this.popperJS || this.showPopper && !forceDestroy) return;
			this.popperJS.destroy();
			this.popperJS = null;
		},
		destroyPopper: function destroyPopper() {
			if (this.popperJS) {
				this.resetTransformOrigin();
			}
		},
		resetTransformOrigin: function resetTransformOrigin() {
			if (!this.transformOrigin) return;
			var placementMap = {
				top: 'bottom',
				bottom: 'top',
				left: 'right',
				right: 'left'
			};
			var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
			var origin = placementMap[placement];
			this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string' ? this.transformOrigin : ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
		},
		appendArrow: function appendArrow(element) {
			var hash = void 0;
			if (this.appended) {
				return;
			}

			this.appended = true;

			for (var item in element.attributes) {
				if (/^_v-/.test(element.attributes[item].name)) {
					hash = element.attributes[item].name;
					break;
				}
			}

			var arrow = document.createElement('div');

			if (hash) {
				arrow.setAttribute(hash, '');
			}
			arrow.setAttribute('x-arrow', '');
			arrow.className = 'popper__arrow';
			element.appendChild(arrow);
		}
	},

	beforeDestroy: function beforeDestroy() {
		this.doDestroy(true);
		if (this.popperElm && this.popperElm.parentNode === document.body) {
			this.popperElm.removeEventListener('click', stop);
			document.body.removeChild(this.popperElm);
		}
	},


	// call destroy in keep-alive mode
	deactivated: function deactivated() {
		this.$options.beforeDestroy[0].call(this);
	}
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _dom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasModal = false;
var hasInitZIndex = false;
var zIndex = 2000;

var getModal = function getModal() {
	if (_vue2.default.prototype.$isServer) return;
	var modalDom = PopupManager.modalDom;
	if (modalDom) {
		hasModal = true;
	} else {
		hasModal = false;
		modalDom = document.createElement('div');
		PopupManager.modalDom = modalDom;

		modalDom.addEventListener('touchmove', function (event) {
			event.preventDefault();
			event.stopPropagation();
		});

		modalDom.addEventListener('click', function () {
			PopupManager.doOnModalClick && PopupManager.doOnModalClick();
		});
	}

	return modalDom;
};

var instances = {};

var PopupManager = {
	modalFade: true,

	getInstance: function getInstance(id) {
		return instances[id];
	},

	register: function register(id, instance) {
		if (id && instance) {
			instances[id] = instance;
		}
	},

	deregister: function deregister(id) {
		if (id) {
			instances[id] = null;
			delete instances[id];
		}
	},

	nextZIndex: function nextZIndex() {
		return PopupManager.zIndex++;
	},

	modalStack: [],

	doOnModalClick: function doOnModalClick() {
		var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
		if (!topItem) return;

		var instance = PopupManager.getInstance(topItem.id);
		if (instance && instance.closeOnClickModal) {
			instance.close();
		}
	},

	openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
		if (_vue2.default.prototype.$isServer) return;
		if (!id || zIndex === undefined) return;
		this.modalFade = modalFade;

		var modalStack = this.modalStack;

		for (var i = 0, j = modalStack.length; i < j; i++) {
			var item = modalStack[i];
			if (item.id === id) {
				return;
			}
		}

		var modalDom = getModal();

		(0, _dom.addClass)(modalDom, 'v-modal');
		if (this.modalFade && !hasModal) {
			(0, _dom.addClass)(modalDom, 'v-modal-enter');
		}
		if (modalClass) {
			var classArr = modalClass.trim().split(/\s+/);
			classArr.forEach(function (item) {
				return (0, _dom.addClass)(modalDom, item);
			});
		}
		setTimeout(function () {
			(0, _dom.removeClass)(modalDom, 'v-modal-enter');
		}, 200);

		if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
			dom.parentNode.appendChild(modalDom);
		} else {
			document.body.appendChild(modalDom);
		}

		if (zIndex) {
			modalDom.style.zIndex = zIndex;
		}
		modalDom.tabIndex = 0;
		modalDom.style.display = '';

		this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
	},

	closeModal: function closeModal(id) {
		var modalStack = this.modalStack;
		var modalDom = getModal();

		if (modalStack.length > 0) {
			var topItem = modalStack[modalStack.length - 1];
			if (topItem.id === id) {
				if (topItem.modalClass) {
					var classArr = topItem.modalClass.trim().split(/\s+/);
					classArr.forEach(function (item) {
						return (0, _dom.removeClass)(modalDom, item);
					});
				}

				modalStack.pop();
				if (modalStack.length > 0) {
					modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
				}
			} else {
				for (var i = modalStack.length - 1; i >= 0; i--) {
					if (modalStack[i].id === id) {
						modalStack.splice(i, 1);
						break;
					}
				}
			}
		}

		if (modalStack.length === 0) {
			if (this.modalFade) {
				(0, _dom.addClass)(modalDom, 'v-modal-leave');
			}
			setTimeout(function () {
				if (modalStack.length === 0) {
					if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
					modalDom.style.display = 'none';
					PopupManager.modalDom = undefined;
				}
				(0, _dom.removeClass)(modalDom, 'v-modal-leave');
			}, 200);
		}
	}
};

Object.defineProperty(PopupManager, 'zIndex', {
	configurable: true,
	get: function get() {
		if (!hasInitZIndex) {
			zIndex = (_vue2.default.prototype.$ELEMENT || {}).zIndex || zIndex;
			hasInitZIndex = true;
		}
		return zIndex;
	},
	set: function set(value) {
		zIndex = value;
	}
});

var getTopPopup = function getTopPopup() {
	if (_vue2.default.prototype.$isServer) return;
	if (PopupManager.modalStack.length > 0) {
		var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
		if (!topPopup) return;
		var instance = PopupManager.getInstance(topPopup.id);

		return instance;
	}
};

if (!_vue2.default.prototype.$isServer) {
	// handle `esc` key when the popup is shown
	window.addEventListener('keydown', function (event) {
		if (event.keyCode === 27) {
			var topPopup = getTopPopup();

			if (topPopup && topPopup.closeOnPressEscape) {
				topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
			}
		}
	});
}

exports.default = PopupManager;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.i18n = exports.use = exports.t = undefined;

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _zhCN = __webpack_require__(30);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _deepmerge = __webpack_require__(31);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _format = __webpack_require__(32);

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = (0, _format2.default)(_vue2.default);
var lang = _zhCN2.default;
var merged = false;
var i18nHandler = function i18nHandler() {
	var vuei18n = (0, _getPrototypeOf2.default)(this || _vue2.default).$t;
	if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
		if (!merged) {
			merged = true;
			_vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }));
		}
		return vuei18n.apply(this, arguments);
	}
};

var t = exports.t = function t(path, options) {
	var value = i18nHandler.apply(this, arguments);
	if (value !== null && value !== undefined) return value;

	var array = path.split('.');
	var current = lang;

	for (var i = 0, j = array.length; i < j; i++) {
		var property = array[i];
		value = current[property];
		if (i === j - 1) return format(value, options);
		if (!value) return '';
		current = value;
	}
	return '';
};

var use = exports.use = function use(l) {
	lang = l || lang;
};

var i18n = exports.i18n = function i18n(fn) {
	i18nHandler = fn || i18nHandler;
};

exports.default = { use: use, t: t, i18n: i18n };

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(33);

var _locale = __webpack_require__(12);

var _locale2 = _interopRequireDefault(_locale);

var _timeSpinner = __webpack_require__(91);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_TIME = (0, _util.parseDate)('00:00:00', 'HH:mm:ss'); //
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

var MAX_TIME = (0, _util.parseDate)('23:59:59', 'HH:mm:ss');

var minTimeOfDay = function minTimeOfDay(date) {
	return (0, _util.modifyDate)(MIN_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

var maxTimeOfDay = function maxTimeOfDay(date) {
	return (0, _util.modifyDate)(MAX_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

// increase time by amount of milliseconds, but within the range of day
var advanceTime = function advanceTime(date, amount) {
	return new Date(Math.min(date.getTime() + amount, maxTimeOfDay(date).getTime()));
};

exports.default = {
	mixins: [_locale2.default],

	components: { TimeSpinner: _timeSpinner2.default },

	computed: {
		showSeconds: function showSeconds() {
			return (this.format || '').indexOf('ss') !== -1;
		},
		offset: function offset() {
			return this.showSeconds ? 11 : 8;
		},
		spinner: function spinner() {
			return this.selectionRange[0] < this.offset ? this.$refs.minSpinner : this.$refs.maxSpinner;
		},
		btnDisabled: function btnDisabled() {
			return this.minDate.getTime() > this.maxDate.getTime();
		},
		amPmMode: function amPmMode() {
			if ((this.format || '').indexOf('A') !== -1) return 'A';
			if ((this.format || '').indexOf('a') !== -1) return 'a';
			return '';
		}
	},

	data: function data() {
		return {
			popperClass: '',
			minDate: new Date(),
			maxDate: new Date(),
			value: [],
			oldValue: [new Date(), new Date()],
			defaultValue: null,
			format: 'HH:mm:ss',
			visible: false,
			selectionRange: [0, 2],
			arrowControl: false
		};
	},


	watch: {
		value: function value(_value) {
			if (Array.isArray(_value)) {
				this.minDate = new Date(_value[0]);
				this.maxDate = new Date(_value[1]);
			} else {
				if (Array.isArray(this.defaultValue)) {
					this.minDate = new Date(this.defaultValue[0]);
					this.maxDate = new Date(this.defaultValue[1]);
				} else if (this.defaultValue) {
					this.minDate = new Date(this.defaultValue);
					this.maxDate = advanceTime(new Date(this.defaultValue), 60 * 60 * 1000);
				} else {
					this.minDate = new Date();
					this.maxDate = advanceTime(new Date(), 60 * 60 * 1000);
				}
			}
		},
		visible: function visible(val) {
			var _this = this;

			if (val) {
				this.oldValue = this.value;
				this.$nextTick(function () {
					return _this.$refs.minSpinner.emitSelectRange('hours');
				});
			}
		}
	},

	methods: {
		handleClear: function handleClear() {
			this.$emit('pick', null);
		},
		handleCancel: function handleCancel() {
			this.$emit('pick', this.oldValue);
		},
		handleMinChange: function handleMinChange(date) {
			this.minDate = (0, _util.clearMilliseconds)(date);
			this.handleChange();
		},
		handleMaxChange: function handleMaxChange(date) {
			this.maxDate = (0, _util.clearMilliseconds)(date);
			this.handleChange();
		},
		handleChange: function handleChange() {
			if (this.isValidValue([this.minDate, this.maxDate])) {
				this.$refs.minSpinner.selectableRange = [[minTimeOfDay(this.minDate), this.maxDate]];
				this.$refs.maxSpinner.selectableRange = [[this.minDate, maxTimeOfDay(this.maxDate)]];
				this.$emit('pick', [this.minDate, this.maxDate], true);
			}
		},
		setMinSelectionRange: function setMinSelectionRange(start, end) {
			this.$emit('select-range', start, end, 'min');
			this.selectionRange = [start, end];
		},
		setMaxSelectionRange: function setMaxSelectionRange(start, end) {
			this.$emit('select-range', start, end, 'max');
			this.selectionRange = [start + this.offset, end + this.offset];
		},
		handleConfirm: function handleConfirm() {
			var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			var minSelectableRange = this.$refs.minSpinner.selectableRange;
			var maxSelectableRange = this.$refs.maxSpinner.selectableRange;

			this.minDate = (0, _util.limitTimeRange)(this.minDate, minSelectableRange, this.format);
			this.maxDate = (0, _util.limitTimeRange)(this.maxDate, maxSelectableRange, this.format);

			this.$emit('pick', [this.minDate, this.maxDate], visible);
		},
		adjustSpinners: function adjustSpinners() {
			this.$refs.minSpinner.adjustSpinners();
			this.$refs.maxSpinner.adjustSpinners();
		},
		changeSelectionRange: function changeSelectionRange(step) {
			var list = this.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
			var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
			var index = list.indexOf(this.selectionRange[0]);
			var next = (index + step + list.length) % list.length;
			var half = list.length / 2;
			if (next < half) {
				this.$refs.minSpinner.emitSelectRange(mapping[next]);
			} else {
				this.$refs.maxSpinner.emitSelectRange(mapping[next - half]);
			}
		},
		isValidValue: function isValidValue(date) {
			return Array.isArray(date) && (0, _util.timeWithinRange)(this.minDate, this.$refs.minSpinner.selectableRange) && (0, _util.timeWithinRange)(this.maxDate, this.$refs.maxSpinner.selectableRange);
		},
		handleKeydown: function handleKeydown(event) {
			var keyCode = event.keyCode;
			var mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

			// Left or Right
			if (keyCode === 37 || keyCode === 39) {
				var step = mapping[keyCode];
				this.changeSelectionRange(step);
				event.preventDefault();
				return;
			}

			// Up or Down
			if (keyCode === 38 || keyCode === 40) {
				var _step = mapping[keyCode];
				this.spinner.scrollDown(_step);
				event.preventDefault();
			}
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _dom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeList = [];
var ctx = '@@clickoutsideContext';

var startClick = void 0;
var seed = 0;

!_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mousedown', function (e) {
	return startClick = e;
});

!_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mouseup', function (e) {
	nodeList.forEach(function (node) {
		return node[ctx].documentHandler(e, startClick);
	});
});

function createDocumentHandler(el, binding, vnode) {
	return function () {
		var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;

		if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
			vnode.context[el[ctx].methodName]();
		} else {
			el[ctx].bindingFn && el[ctx].bindingFn();
		}
	};
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
exports.default = {
	bind: function bind(el, binding, vnode) {
		nodeList.push(el);
		var id = seed++;
		el[ctx] = {
			id: id,
			documentHandler: createDocumentHandler(el, binding, vnode),
			methodName: binding.expression,
			bindingFn: binding.value
		};
	},
	update: function update(el, binding, vnode) {
		el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
		el[ctx].methodName = binding.expression;
		el[ctx].bindingFn = binding.value;
	},
	unbind: function unbind(el) {
		var len = nodeList.length;

		for (var i = 0; i < len; i++) {
			if (nodeList[i][ctx].id === el[ctx].id) {
				nodeList.splice(i, 1);
				break;
			}
		}
		delete el[ctx];
	}
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _getOwnPropertyDescriptor = __webpack_require__(22);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _keys = __webpack_require__(11);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(3);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

//
// Cross module loader
// Supported: Node, AMD, Browser globals
//
;(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.Popper = factory();
	}
})(undefined, function () {

	'use strict';

	var root = window;

	// default options
	var DEFAULTS = {
		// placement of the popper
		placement: 'bottom',

		gpuAcceleration: true,

		// shift popper from its origin by the given amount of pixels (can be negative)
		offset: 0,

		// the element which will act as boundary of the popper
		boundariesElement: 'viewport',

		// amount of pixel used to define a minimum distance between the boundaries and the popper
		boundariesPadding: 5,

		// popper will try to prevent overflow following this order,
		// by default, then, it could overflow on the left and on top of the boundariesElement
		preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

		// the behavior used by flip to change the placement of the popper
		flipBehavior: 'flip',

		arrowElement: '[x-arrow]',

		arrowOffset: 0,

		// list of functions used to modify the offsets before they are applied to the popper
		modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

		modifiersIgnored: [],

		forceAbsolute: false
	};

	/**
  * Create a new Popper.js instance
  * @constructor Popper
  * @param {HTMLElement} reference - The reference element used to position the popper
  * @param {HTMLElement|Object} popper
  *      The HTML element used as popper, or a configuration used to generate the popper.
  * @param {String} [popper.tagName='div'] The tag name of the generated popper.
  * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
  * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
  * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
  * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
  * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
  * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
  * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
  * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
  * @param {Object} options
  * @param {String} [options.placement=bottom]
  *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
  *      left(-start, -end)`
  *
  * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
  *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
  *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
  *      reference element.
  *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
  *
  * @param {Boolean} [options.gpuAcceleration=true]
  *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
  *      browser to use the GPU to accelerate the rendering.
  *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
  *
  * @param {Number} [options.offset=0]
  *      Amount of pixels the popper will be shifted (can be negative).
  *
  * @param {String|Element} [options.boundariesElement='viewport']
  *      The element which will define the boundaries of the popper position, the popper will never be placed outside
  *      of the defined boundaries (except if `keepTogether` is enabled)
  *
  * @param {Number} [options.boundariesPadding=5]
  *      Additional padding for the boundaries
  *
  * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
  *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
  *      this means that the last ones will never overflow
  *
  * @param {String|Array} [options.flipBehavior='flip']
  *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
  *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
  *      its axis (`right - left`, `top - bottom`).
  *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
  *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
  *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
  *
  * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
  *      List of functions used to modify the data before they are applied to the popper, add your custom functions
  *      to this array to edit the offsets and placement.
  *      The function should reflect the @params and @returns of preventOverflow
  *
  * @param {Array} [options.modifiersIgnored=[]]
  *      Put here any built-in modifier name you want to exclude from the modifiers list
  *      The function should reflect the @params and @returns of preventOverflow
  *
  * @param {Boolean} [options.removeOnDestroy=false]
  *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
  */
	function Popper(reference, popper, options) {
		this._reference = reference.jquery ? reference[0] : reference;
		this.state = {};

		// if the popper variable is a configuration object, parse it to generate an HTMLElement
		// generate a default popper if is not defined
		var isNotDefined = typeof popper === 'undefined' || popper === null;
		var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
		if (isNotDefined || isConfig) {
			this._popper = this.parse(isConfig ? popper : {});
		}
		// otherwise, use the given HTMLElement as popper
		else {
				this._popper = popper.jquery ? popper[0] : popper;
			}

		// with {} we create a new object with the options inside it
		this._options = (0, _assign2.default)({}, DEFAULTS, options);

		// refactoring modifiers' list
		this._options.modifiers = this._options.modifiers.map(function (modifier) {
			// remove ignored modifiers
			if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

			// set the x-placement attribute before everything else because it could be used to add margins to the popper
			// margins needs to be calculated to get the correct popper offsets
			if (modifier === 'applyStyle') {
				this._popper.setAttribute('x-placement', this._options.placement);
			}

			// return predefined modifier identified by string or keep the custom one
			return this.modifiers[modifier] || modifier;
		}.bind(this));

		// make sure to apply the popper position before any computation
		this.state.position = this._getPosition(this._popper, this._reference);
		setStyle(this._popper, { position: this.state.position, top: 0 });

		// fire the first update to position the popper in the right place
		this.update();

		// setup event listeners, they will take care of update the position in specific situations
		this._setupEventListeners();
		return this;
	}

	//
	// Methods
	//
	/**
  * Destroy the popper
  * @method
  * @memberof Popper
  */
	Popper.prototype.destroy = function () {
		this._popper.removeAttribute('x-placement');
		this._popper.style.left = '';
		this._popper.style.position = '';
		this._popper.style.top = '';
		this._popper.style[getSupportedPropertyName('transform')] = '';
		this._removeEventListeners();

		// remove the popper if user explicity asked for the deletion on destroy
		if (this._options.removeOnDestroy) {
			this._popper.remove();
		}
		return this;
	};

	/**
  * Updates the position of the popper, computing the new offsets and applying the new style
  * @method
  * @memberof Popper
  */
	Popper.prototype.update = function () {
		var data = { instance: this, styles: {} };

		// store placement inside the data object, modifiers will be able to edit `placement` if needed
		// and refer to _originalPlacement to know the original value
		data.placement = this._options.placement;
		data._originalPlacement = this._options.placement;
		data.arrowPointPlace = this._options.arrowPointPlace;

		// compute the popper and reference offsets and put them inside data.offsets
		data.offsets = this._getOffsets(this._popper, this._reference, data.placement, data.arrowPointPlace);

		// get boundaries
		data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

		data = this.runModifiers(data, this._options.modifiers);

		if (typeof this.state.updateCallback === 'function') {
			this.state.updateCallback(data);
		}
	};

	/**
  * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
  * @method
  * @memberof Popper
  * @param {Function} callback
  */
	Popper.prototype.onCreate = function (callback) {
		// the createCallbacks return as first argument the popper instance
		callback(this);
		return this;
	};

	/**
  * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
  * used to style popper and its arrow.
  * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
  * @method
  * @memberof Popper
  * @param {Function} callback
  */
	Popper.prototype.onUpdate = function (callback) {
		this.state.updateCallback = callback;
		return this;
	};

	/**
  * Helper used to generate poppers from a configuration file
  * @method
  * @memberof Popper
  * @param config {Object} configuration
  * @returns {HTMLElement} popper
  */
	Popper.prototype.parse = function (config) {
		var defaultConfig = {
			tagName: 'div',
			classNames: ['popper'],
			attributes: [],
			parent: root.document.body,
			content: '',
			contentType: 'text',
			arrowTagName: 'div',
			arrowClassNames: ['popper__arrow'],
			arrowAttributes: ['x-arrow']
		};
		config = (0, _assign2.default)({}, defaultConfig, config);

		var d = root.document;

		var popper = d.createElement(config.tagName);
		addClassNames(popper, config.classNames);
		addAttributes(popper, config.attributes);
		if (config.contentType === 'node') {
			popper.appendChild(config.content.jquery ? config.content[0] : config.content);
		} else if (config.contentType === 'html') {
			popper.innerHTML = config.content;
		} else {
			popper.textContent = config.content;
		}

		if (config.arrowTagName) {
			var arrow = d.createElement(config.arrowTagName);
			addClassNames(arrow, config.arrowClassNames);
			addAttributes(arrow, config.arrowAttributes);
			popper.appendChild(arrow);
		}

		var parent = config.parent.jquery ? config.parent[0] : config.parent;

		// if the given parent is a string, use it to match an element
		// if more than one element is matched, the first one will be used as parent
		// if no elements are matched, the script will throw an error
		if (typeof parent === 'string') {
			parent = d.querySelectorAll(config.parent);
			if (parent.length > 1) {
				console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
			}
			if (parent.length === 0) {
				throw 'ERROR: the given `parent` doesn\'t exists!';
			}
			parent = parent[0];
		}
		// if the given parent is a DOM nodes list or an array of nodes with more than one element,
		// the first one will be used as parent
		if (parent.length > 1 && parent instanceof Element === false) {
			console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
			parent = parent[0];
		}

		// append the generated popper to its parent
		parent.appendChild(popper);

		return popper;

		/**
   * Adds class names to the given element
   * @function
   * @ignore
   * @param {HTMLElement} target
   * @param {Array} classes
   */
		function addClassNames(element, classNames) {
			classNames.forEach(function (className) {
				element.classList.add(className);
			});
		}

		/**
   * Adds attributes to the given element
   * @function
   * @ignore
   * @param {HTMLElement} target
   * @param {Array} attributes
   * @example
   * addAttributes(element, [ 'data-info:foobar' ]);
   */
		function addAttributes(element, attributes) {
			attributes.forEach(function (attribute) {
				element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
			});
		}
	};

	/**
  * Helper used to get the position which will be applied to the popper
  * @method
  * @memberof Popper
  * @param config {HTMLElement} popper element
  * @param reference {HTMLElement} reference element
  * @returns {String} position
  */
	Popper.prototype._getPosition = function (popper, reference) {
		var container = getOffsetParent(reference);

		if (this._options.forceAbsolute) {
			return 'absolute';
		}

		// Decide if the popper will be fixed
		// If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
		var isParentFixed = isFixed(reference, container);
		return isParentFixed ? 'fixed' : 'absolute';
	};

	/**
  * Get offsets to the popper
  * @method
  * @memberof Popper
  * @access private
  * @param {Element} popper - the popper element
  * @param {Element} reference - the reference element (the popper will be relative to this)
  * @returns {Object} An object containing the offsets which will be applied to the popper
  */
	Popper.prototype._getOffsets = function (popper, reference, placement, arrowPointPlace) {
		placement = placement.split('-')[0];
		var popperOffsets = {};

		popperOffsets.position = this.state.position;
		var isParentFixed = popperOffsets.position === 'fixed';

		//
		// Get reference element position
		//
		var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

		//
		// Get popper sizes
		//
		var popperRect = getOuterSizes(popper);

		//
		// Compute offsets of popper
		//

		// depending by the popper placement we have to compute its offsets slightly differently
		if (['right', 'left'].indexOf(placement) !== -1) {
			popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
			if (placement === 'left') {
				popperOffsets.left = referenceOffsets.left - popperRect.width;
			} else {
				popperOffsets.left = referenceOffsets.right;
			}
		} else {
			var rewidth = arrowPointPlace === 'start' ? 0 : arrowPointPlace === 'end' ? referenceOffsets.width : referenceOffsets.width / 2;
			popperOffsets.left = referenceOffsets.left + rewidth - popperRect.width / 2;
			if (placement === 'top') {
				popperOffsets.top = referenceOffsets.top - popperRect.height;
			} else {
				popperOffsets.top = referenceOffsets.bottom;
			}
		}

		// Add width and height to our offsets object
		popperOffsets.width = popperRect.width;
		popperOffsets.height = popperRect.height;

		return {
			popper: popperOffsets,
			reference: referenceOffsets
		};
	};

	/**
  * Setup needed event listeners used to update the popper position
  * @method
  * @memberof Popper
  * @access private
  */
	Popper.prototype._setupEventListeners = function () {
		// NOTE: 1 DOM access here
		this.state.updateBound = this.update.bind(this);
		root.addEventListener('resize', this.state.updateBound);
		// if the boundariesElement is window we don't need to listen for the scroll event
		if (this._options.boundariesElement !== 'window') {
			var target = getScrollParent(this._reference);
			// here it could be both `body` or `documentElement` thanks to Firefox, we then check both
			if (target === root.document.body || target === root.document.documentElement) {
				target = root;
			}
			target.addEventListener('scroll', this.state.updateBound);
			this.state.scrollTarget = target;
		}
	};

	/**
  * Remove event listeners used to update the popper position
  * @method
  * @memberof Popper
  * @access private
  */
	Popper.prototype._removeEventListeners = function () {
		// NOTE: 1 DOM access here
		root.removeEventListener('resize', this.state.updateBound);
		if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
			this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
			this.state.scrollTarget = null;
		}
		this.state.updateBound = null;
	};

	/**
  * Computed the boundaries limits and return them
  * @method
  * @memberof Popper
  * @access private
  * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
  * @param {Number} padding - Boundaries padding
  * @param {Element} boundariesElement - Element used to define the boundaries
  * @returns {Object} Coordinates of the boundaries
  */
	Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
		// NOTE: 1 DOM access here
		var boundaries = {};
		var width, height;
		if (boundariesElement === 'window') {
			var body = root.document.body,
			    html = root.document.documentElement;

			height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
			width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

			boundaries = {
				top: 0,
				right: width,
				bottom: height,
				left: 0
			};
		} else if (boundariesElement === 'viewport') {
			var offsetParent = getOffsetParent(this._popper);
			var scrollParent = getScrollParent(this._popper);
			var offsetParentRect = getOffsetRect(offsetParent);

			// Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
			var getScrollTopValue = function getScrollTopValue(element) {
				return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
			};
			var getScrollLeftValue = function getScrollLeftValue(element) {
				return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
			};

			// if the popper is fixed we don't have to substract scrolling from the boundaries
			var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
			var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);

			boundaries = {
				top: 0 - (offsetParentRect.top - scrollTop),
				right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
				bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
				left: 0 - (offsetParentRect.left - scrollLeft)
			};
		} else {
			if (getOffsetParent(this._popper) === boundariesElement) {
				boundaries = {
					top: 0,
					left: 0,
					right: boundariesElement.clientWidth,
					bottom: boundariesElement.clientHeight
				};
			} else {
				boundaries = getOffsetRect(boundariesElement);
			}
		}
		boundaries.left += padding;
		boundaries.right -= padding;
		boundaries.top = boundaries.top + padding;
		boundaries.bottom = boundaries.bottom - padding;
		return boundaries;
	};

	/**
  * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
  * @method
  * @memberof Popper
  * @access public
  * @param {Object} data
  * @param {Array} modifiers
  * @param {Function} ends
  */
	Popper.prototype.runModifiers = function (data, modifiers, ends) {
		var modifiersToRun = modifiers.slice();
		if (ends !== undefined) {
			modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
		}

		modifiersToRun.forEach(function (modifier) {
			if (isFunction(modifier)) {
				data = modifier.call(this, data);
			}
		}.bind(this));

		return data;
	};

	/**
  * Helper used to know if the given modifier depends from another one.
  * @method
  * @memberof Popper
  * @param {String} requesting - name of requesting modifier
  * @param {String} requested - name of requested modifier
  * @returns {Boolean}
  */
	Popper.prototype.isModifierRequired = function (requesting, requested) {
		var index = getArrayKeyIndex(this._options.modifiers, requesting);
		return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
			return modifier === requested;
		}).length;
	};

	//
	// Modifiers
	//

	/**
  * Modifiers list
  * @namespace Popper.modifiers
  * @memberof Popper
  * @type {Object}
  */
	Popper.prototype.modifiers = {};

	/**
  * Apply the computed styles_tmp to the popper element
  * @method
  * @memberof Popper.modifiers
  * @argument {Object} data - The data object generated by `update` method
  * @returns {Object} The same data object
  */
	Popper.prototype.modifiers.applyStyle = function (data) {
		// apply the final offsets to the popper
		// NOTE: 1 DOM access here
		var styles = {
			position: data.offsets.popper.position
		};

		// round top and left to avoid blurry text
		var left = Math.round(data.offsets.popper.left);
		var top = Math.round(data.offsets.popper.top);

		// if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
		// we automatically use the supported prefixed version if needed
		var prefixedProperty;
		if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
			styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
			styles.top = 0;
			styles.left = 0;
		}
		// othwerise, we use the standard `left` and `top` properties
		else {
				styles.left = left;
				styles.top = top;
			}

		// any property present in `data.styles_tmp` will be applied to the popper,
		// in this way we can make the 3rd party modifiers add custom styles_tmp to it
		// Be aware, modifiers could override the properties defined in the previous
		// lines of this modifier!
		(0, _assign2.default)(styles, data.styles);

		setStyle(this._popper, styles);

		// set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
		// NOTE: 1 DOM access here
		this._popper.setAttribute('x-placement', data.placement);

		// if the arrow modifier is required and the arrow style has been computed, apply the arrow style
		if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
			setStyle(data.arrowElement, data.offsets.arrow);
		}

		return data;
	};

	/**
  * Modifier used to shift the popper on the start or end of its reference element side
  * @method
  * @memberof Popper.modifiers
  * @argument {Object} data - The data object generated by `update` method
  * @returns {Object} The data object, properly modified
  */
	Popper.prototype.modifiers.shift = function (data) {
		var placement = data.placement;
		var basePlacement = placement.split('-')[0];
		var shiftVariation = placement.split('-')[1];

		// if shift shiftVariation is specified, run the modifier
		if (shiftVariation) {
			var reference = data.offsets.reference;
			var popper = getPopperClientRect(data.offsets.popper);

			var shiftOffsets = {
				y: {
					start: { top: reference.top },
					end: { top: reference.top + reference.height - popper.height }
				},
				x: {
					start: { left: reference.left },
					end: { left: reference.left + reference.width - popper.width }
				}
			};

			var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

			data.offsets.popper = (0, _assign2.default)(popper, shiftOffsets[axis][shiftVariation]);
		}

		return data;
	};

	/**
  * Modifier used to make sure the popper does not overflows from it's boundaries
  * @method
  * @memberof Popper.modifiers
  * @argument {Object} data - The data object generated by `update` method
  * @returns {Object} The data object, properly modified
  */
	Popper.prototype.modifiers.preventOverflow = function (data) {
		var order = this._options.preventOverflowOrder;
		var popper = getPopperClientRect(data.offsets.popper);

		var check = {
			left: function left() {
				var left = popper.left;
				if (popper.left < data.boundaries.left) {
					left = Math.max(popper.left, data.boundaries.left);
				}
				return { left: left };
			},
			right: function right() {
				var left = popper.left;
				if (popper.right > data.boundaries.right) {
					left = Math.min(popper.left, data.boundaries.right - popper.width);
				}
				return { left: left };
			},
			top: function top() {
				var top = popper.top;
				if (popper.top < data.boundaries.top) {
					top = Math.max(popper.top, data.boundaries.top);
				}
				return { top: top };
			},
			bottom: function bottom() {
				var top = popper.top;
				if (popper.bottom > data.boundaries.bottom) {
					top = Math.min(popper.top, data.boundaries.bottom - popper.height);
				}
				return { top: top };
			}
		};

		order.forEach(function (direction) {
			data.offsets.popper = (0, _assign2.default)(popper, check[direction]());
		});

		return data;
	};

	/**
  * Modifier used to make sure the popper is always near its reference
  * @method
  * @memberof Popper.modifiers
  * @argument {Object} data - The data object generated by _update method
  * @returns {Object} The data object, properly modified
  */
	Popper.prototype.modifiers.keepTogether = function (data) {
		var popper = getPopperClientRect(data.offsets.popper);
		var reference = data.offsets.reference;
		var f = Math.floor;

		if (popper.right < f(reference.left)) {
			data.offsets.popper.left = f(reference.left) - popper.width;
		}
		if (popper.left > f(reference.right)) {
			data.offsets.popper.left = f(reference.right);
		}
		if (popper.bottom < f(reference.top)) {
			data.offsets.popper.top = f(reference.top) - popper.height;
		}
		if (popper.top > f(reference.bottom)) {
			data.offsets.popper.top = f(reference.bottom);
		}

		return data;
	};

	/**
  * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
  * Requires the `preventOverflow` modifier before it in order to work.
  * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
  * @method
  * @memberof Popper.modifiers
  * @argument {Object} data - The data object generated by _update method
  * @returns {Object} The data object, properly modified
  */
	Popper.prototype.modifiers.flip = function (data) {
		// check if preventOverflow is in the list of modifiers before the flip modifier.
		// otherwise flip would not work as expected.
		if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
			console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
			return data;
		}

		if (data.flipped && data.placement === data._originalPlacement) {
			// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
			return data;
		}

		var placement = data.placement.split('-')[0];
		var placementOpposite = getOppositePlacement(placement);
		var variation = data.placement.split('-')[1] || '';

		var flipOrder = [];
		if (this._options.flipBehavior === 'flip') {
			flipOrder = [placement, placementOpposite];
		} else {
			flipOrder = this._options.flipBehavior;
		}

		flipOrder.forEach(function (step, index) {
			if (placement !== step || flipOrder.length === index + 1) {
				return;
			}

			placement = data.placement.split('-')[0];
			placementOpposite = getOppositePlacement(placement);

			var popperOffsets = getPopperClientRect(data.offsets.popper);

			// this boolean is used to distinguish right and bottom from top and left
			// they need different computations to get flipped
			var a = ['right', 'bottom'].indexOf(placement) !== -1;

			// using Math.floor because the reference offsets may contain decimals we are not going to consider here
			if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
				// we'll use this boolean to detect any flip loop
				data.flipped = true;
				data.placement = flipOrder[index + 1];
				if (variation) {
					data.placement += '-' + variation;
				}
				data.arrowPointPlace = this._options.arrowPointPlace;
				data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement, data.arrowPointPlace).popper;

				data = this.runModifiers(data, this._options.modifiers, this._flip);
			}
		}.bind(this));
		return data;
	};

	/**
  * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
  * The offsets will shift the popper on the side of its reference element.
  * @method
  * @memberof Popper.modifiers
  * @argument {Object} data - The data object generated by _update method
  * @returns {Object} The data object, properly modified
  */
	Popper.prototype.modifiers.offset = function (data) {
		var offset = this._options.offset;
		var popper = data.offsets.popper;

		if (data.placement.indexOf('left') !== -1) {
			popper.top -= offset;
		} else if (data.placement.indexOf('right') !== -1) {
			popper.top += offset;
		} else if (data.placement.indexOf('top') !== -1) {
			popper.left -= offset;
		} else if (data.placement.indexOf('bottom') !== -1) {
			popper.left += offset;
		}
		return data;
	};

	/**
  * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
  * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
  * @method
  * @memberof Popper.modifiers
  * @argument {Object} data - The data object generated by _update method
  * @returns {Object} The data object, properly modified
  */
	Popper.prototype.modifiers.arrow = function (data) {
		var arrow = this._options.arrowElement;
		var arrowOffset = this._options.arrowOffset;

		// if the arrowElement is a string, suppose it's a CSS selector
		if (typeof arrow === 'string') {
			arrow = this._popper.querySelector(arrow);
		}

		// if arrow element is not found, don't run the modifier
		if (!arrow) {
			return data;
		}

		// the arrow element must be child of its popper
		if (!this._popper.contains(arrow)) {
			console.warn('WARNING: `arrowElement` must be child of its popper element!');
			return data;
		}

		// arrow depends on keepTogether in order to work
		if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
			console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
			return data;
		}

		var arrowStyle = {};
		var placement = data.placement.split('-')[0];
		var popper = getPopperClientRect(data.offsets.popper);
		var reference = data.offsets.reference;
		var isVertical = ['left', 'right'].indexOf(placement) !== -1;

		var len = isVertical ? 'height' : 'width';
		var side = isVertical ? 'top' : 'left';
		var translate = isVertical ? 'translateY' : 'translateX';
		var altSide = isVertical ? 'left' : 'top';
		var opSide = isVertical ? 'bottom' : 'right';
		var arrowSize = getOuterSizes(arrow)[len];

		//
		// extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
		//

		// top/left side
		if (reference[opSide] - arrowSize < popper[side]) {
			data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
		}
		// bottom/right side
		if (reference[side] + arrowSize > popper[opSide]) {
			data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
		}

		// compute center of the popper
		var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);

		var sideValue = center - popper[side];

		// prevent arrow from being placed not contiguously to its popper
		sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
		arrowStyle[side] = sideValue;
		arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

		data.offsets.arrow = arrowStyle;
		data.arrowElement = arrow;

		return data;
	};

	//
	// Helpers
	//

	/**
  * Get the outer sizes of the given element (offset size + margins)
  * @function
  * @ignore
  * @argument {Element} element
  * @returns {Object} object containing width and height properties
  */
	function getOuterSizes(element) {
		// NOTE: 1 DOM access here
		var _display = element.style.display,
		    _visibility = element.style.visibility;
		element.style.display = 'block';
		element.style.visibility = 'hidden';
		var calcWidthToForceRepaint = element.offsetWidth;

		// original method
		var styles = root.getComputedStyle(element);
		var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
		var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
		var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

		// reset element styles_tmp
		element.style.display = _display;
		element.style.visibility = _visibility;
		return result;
	}

	/**
  * Get the opposite placement of the given one/
  * @function
  * @ignore
  * @argument {String} placement
  * @returns {String} flipped placement
  */
	function getOppositePlacement(placement) {
		var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
		return placement.replace(/left|right|bottom|top/g, function (matched) {
			return hash[matched];
		});
	}

	/**
  * Given the popper offsets, generate an output similar to getBoundingClientRect
  * @function
  * @ignore
  * @argument {Object} popperOffsets
  * @returns {Object} ClientRect like output
  */
	function getPopperClientRect(popperOffsets) {
		var offsets = (0, _assign2.default)({}, popperOffsets);
		offsets.right = offsets.left + offsets.width;
		offsets.bottom = offsets.top + offsets.height;
		return offsets;
	}

	/**
  * Given an array and the key to find, returns its index
  * @function
  * @ignore
  * @argument {Array} arr
  * @argument keyToFind
  * @returns index or null
  */
	function getArrayKeyIndex(arr, keyToFind) {
		var i = 0,
		    key;
		for (key in arr) {
			if (arr[key] === keyToFind) {
				return i;
			}
			i++;
		}
		return null;
	}

	/**
  * Get CSS computed property of the given element
  * @function
  * @ignore
  * @argument {Eement} element
  * @argument {String} property
  */
	function getStyleComputedProperty(element, property) {
		// NOTE: 1 DOM access here
		var css = root.getComputedStyle(element, null);
		return css[property];
	}

	/**
  * Returns the offset parent of the given element
  * @function
  * @ignore
  * @argument {Element} element
  * @returns {Element} offset parent
  */
	function getOffsetParent(element) {
		// NOTE: 1 DOM access here
		var offsetParent = element.offsetParent;
		return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	}

	/**
  * Returns the scrolling parent of the given element
  * @function
  * @ignore
  * @argument {Element} element
  * @returns {Element} offset parent
  */
	function getScrollParent(element) {
		var parent = element.parentNode;

		if (!parent) {
			return element;
		}

		if (parent === root.document) {
			// Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
			// greater than 0 and return the proper element
			if (root.document.body.scrollTop || root.document.body.scrollLeft) {
				return root.document.body;
			} else {
				return root.document.documentElement;
			}
		}

		// Firefox want us to check `-x` and `-y` variations as well
		if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
			// If the detected scrollParent is body, we perform an additional check on its parentNode
			// in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
			// fixes issue #65
			return parent;
		}
		return getScrollParent(element.parentNode);
	}

	/**
  * Check if the given element is fixed or is inside a fixed parent
  * @function
  * @ignore
  * @argument {Element} element
  * @argument {Element} customContainer
  * @returns {Boolean} answer to "isFixed?"
  */
	function isFixed(element) {
		if (element === root.document.body) {
			return false;
		}
		if (getStyleComputedProperty(element, 'position') === 'fixed') {
			return true;
		}
		return element.parentNode ? isFixed(element.parentNode) : element;
	}

	/**
  * Set the style to the given popper
  * @function
  * @ignore
  * @argument {Element} element - Element to apply the style to
  * @argument {Object} styles_tmp - Object with a list of properties and values which will be applied to the element
  */
	function setStyle(element, styles) {
		function is_numeric(n) {
			return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
		}

		(0, _keys2.default)(styles).forEach(function (prop) {
			var unit = '';
			// add unit if the value is numeric and is one of the following
			if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
				unit = 'px';
			}
			element.style[prop] = styles[prop] + unit;
		});
	}

	/**
  * Check if the given variable is a function
  * @function
  * @ignore
  * @argument {*} functionToCheck - variable to check
  * @returns {Boolean} answer to: is a function?
  */
	function isFunction(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}

	/**
  * Get the position of the given element, relative to its offset parent
  * @function
  * @ignore
  * @param {Element} element
  * @return {Object} position - Coordinates of the element and its `scrollTop`
  */
	function getOffsetRect(element) {
		var elementRect = {
			width: element.offsetWidth,
			height: element.offsetHeight,
			left: element.offsetLeft,
			top: element.offsetTop
		};

		elementRect.right = elementRect.left + elementRect.width;
		elementRect.bottom = elementRect.top + elementRect.height;

		// position
		return elementRect;
	}

	/**
  * Get bounding client rect of given element
  * @function
  * @ignore
  * @param {HTMLElement} element
  * @return {Object} client rect
  */
	function getBoundingClientRect(element) {
		var rect = element.getBoundingClientRect();

		// whether the IE version is lower than 11
		var isIE = navigator.userAgent.indexOf('MSIE') != -1;

		// fix ie document bounding top always 0 bug
		var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

		return {
			left: rect.left,
			top: rectTop,
			right: rect.right,
			bottom: rect.bottom,
			width: rect.right - rect.left,
			height: rect.bottom - rectTop
		};
	}

	/**
  * Given an element and one of its parents, return the offset
  * @function
  * @ignore
  * @param {HTMLElement} element
  * @param {HTMLElement} parent
  * @return {Object} rect
  */
	function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
		var elementRect = getBoundingClientRect(element);
		var parentRect = getBoundingClientRect(parent);

		if (fixed) {
			var scrollParent = getScrollParent(parent);
			parentRect.top += scrollParent.scrollTop;
			parentRect.bottom += scrollParent.scrollTop;
			parentRect.left += scrollParent.scrollLeft;
			parentRect.right += scrollParent.scrollLeft;
		}

		var rect = {
			top: elementRect.top - parentRect.top,
			left: elementRect.left - parentRect.left,
			bottom: elementRect.top - parentRect.top + elementRect.height,
			right: elementRect.left - parentRect.left + elementRect.width,
			width: elementRect.width,
			height: elementRect.height
		};
		return rect;
	}

	/**
  * Get the prefixed supported property name
  * @function
  * @ignore
  * @argument {String} property (camelCase)
  * @returns {String} prefixed property (camelCase)
  */
	function getSupportedPropertyName(property) {
		var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

		for (var i = 0; i < prefixes.length; i++) {
			var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
			if (typeof root.document.body.style[toCheck] !== 'undefined') {
				return toCheck;
			}
		}
		return null;
	}

	/**
  * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
  * objects to a target object. It will return the target object.
  * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
  * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  * @function
  * @ignore
  */
	if (!_assign2.default) {
		Object.defineProperty(Object, 'assign', {
			enumerable: false,
			configurable: true,
			writable: true,
			value: function value(target) {
				if (target === undefined || target === null) {
					throw new TypeError('Cannot convert first argument to object');
				}

				var to = Object(target);
				for (var i = 1; i < arguments.length; i++) {
					var nextSource = arguments[i];
					if (nextSource === undefined || nextSource === null) {
						continue;
					}
					nextSource = Object(nextSource);

					var keysArray = (0, _keys2.default)(nextSource);
					for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
						var nextKey = keysArray[nextIndex];
						var desc = (0, _getOwnPropertyDescriptor2.default)(nextSource, nextKey);
						if (desc !== undefined && desc.enumerable) {
							to[nextKey] = nextSource[nextKey];
						}
					}
				}
				return to;
			}
		});
	}

	return Popper;
});

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-descriptor");

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b8b27ae0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(25);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_b8b27ae0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
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
    _vm.type === 'textarea' ? 'kc-textarea' : 'kc-input',
    _vm.inputSize ? 'kc-input--' + _vm.inputSize : '',
		_vm.search === true ? 'kc-input-group__search' : '',
    {
      'is-disabled': _vm.inputDisabled,
      'kc-input-group': _vm.$slots.prepend || _vm.$slots.append,
      'kc-input-group--append': _vm.$slots.append,
      'kc-input-group--prepend': _vm.$slots.prepend,
      'kc-input--prefix': _vm.$slots.prefix || _vm.prefixIcon,
      'kc-input--suffix': _vm.$slots.suffix || _vm.suffixIcon || _vm.clearable,
    }
    ],on:{"mouseenter":function($event){_vm.hovering = true},"mouseleave":function($event){_vm.hovering = false}}},[(_vm.type !== 'textarea')?[(_vm.$slots.prepend)?_c('div',{staticClass:"kc-input-group__prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.type !== 'textarea')?_c('input',_vm._b({ref:"input",staticClass:"kc-input__inner",attrs:{"tabindex":_vm.tabindex,"type":_vm.type,"disabled":_vm.inputDisabled,"autocomplete":_vm.autoComplete,"aria-label":_vm.label,"search":_vm.search},domProps:{"value":_vm.currentValue},on:{"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'input',_vm.$attrs,false)):_vm._e(),(_vm.$slots.prefix || _vm.prefixIcon)?_c('span',{staticClass:"kc-input__prefix",style:(_vm.prefixOffset)},[_vm._t("prefix"),(_vm.prefixIcon)?_c('i',{staticClass:"kc-input__icon",class:_vm.prefixIcon}):_vm._e()],2):_vm._e(),(_vm.$slots.suffix || _vm.suffixIcon || _vm.showClear || _vm.validateState && _vm.needStatusIcon)?_c('span',{staticClass:"kc-input__suffix",style:(_vm.suffixOffset)},[_c('span',{staticClass:"kc-input__suffix-inner"},[(!_vm.showClear)?[_vm._t("suffix"),(_vm.suffixIcon)?_c('i',{staticClass:"kc-input__icon",class:_vm.suffixIcon}):_vm._e()]:_c('i',{staticClass:"kc-input__icon kc-icon-circle-close kc-input__clear",on:{"click":_vm.clear}})],2),(_vm.validateState)?_c('i',{staticClass:"kc-input__icon",class:['kc-input__validateIcon', _vm.validateIcon]}):_vm._e()]):_vm._e(),(_vm.$slots.append)?_c('div',{staticClass:"kc-input-group__append"},[_vm._t("append")],2):_vm._e()]:_c('textarea',_vm._b({ref:"textarea",staticClass:"kc-textarea__inner",style:(_vm.textareaStyle),attrs:{"tabindex":_vm.tabindex,"disabled":_vm.inputDisabled,"aria-label":_vm.label},domProps:{"value":_vm.currentValue},on:{"compositionstart":_vm.handleComposition,"compositionupdate":_vm.handleComposition,"compositionend":_vm.handleComposition,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'textarea',_vm.$attrs,false))],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeResizeListener = exports.addResizeListener = undefined;

var _getIterator2 = __webpack_require__(7);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _resizeObserverPolyfill = __webpack_require__(34);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = typeof window === 'undefined';

/* istanbul ignore next */
var resizeHandler = function resizeHandler(entries) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _getIterator3.default)(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var entry = _step.value;

			var listeners = entry.target.__resizeListeners__ || [];
			if (listeners.length) {
				listeners.forEach(function (fn) {
					fn();
				});
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
};

/* istanbul ignore next */
var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
	if (isServer) return;
	if (!element.__resizeListeners__) {
		element.__resizeListeners__ = [];
		element.__ro__ = new _resizeObserverPolyfill2.default(resizeHandler);
		element.__ro__.observe(element);
	}
	element.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
	if (!element || !element.__resizeListeners__) return;
	element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	if (!element.__resizeListeners__.length) {
		element.__ro__.disconnect();
	}
};

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: '确定',
      clear: '清空'
    },
    datepicker: {
      now: '此刻',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '确定',
      selectDate: '选择日期',
      selectTime: '选择时间',
      startDate: '开始日期',
      startTime: '开始时间',
      endDate: '结束日期',
      endTime: '结束时间',
      prevYear: '前一年',
      nextYear: '后一年',
      prevMonth: '上个月',
      nextMonth: '下个月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月'
      }
    },
    select: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '无数据',
      placeholder: '请选择'
    },
    cascader: {
      noMatch: '无匹配数据',
      loading: '加载中',
      placeholder: '请选择'
    },
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
    upload: {
      deleteTip: '按 delete 键可删除',
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传'
    },
    table: {
      emptyText: '暂无数据',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: '合计'
    },
    tree: {
      emptyText: '暂无数据'
    },
    transfer: {
      noMatch: '无匹配数据',
      noData: '无数据',
      titles: ['列表 1', '列表 2'],
      filterPlaceholder: '请输入搜索内容',
      noCheckedFormat: '共 {total} 项',
      hasCheckedFormat: '已选 {checked}/{total} 项'
    }
  }
};

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(3);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function (Vue) {

	/**
  * template
  *
  * @param {String} string
  * @param {Array} ...args
  * @return {String}
  */

	function template(string) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		if (args.length === 1 && (0, _typeof3.default)(args[0]) === 'object') {
			args = args[0];
		}

		if (!args || !args.hasOwnProperty) {
			args = {};
		}

		return string.replace(RE_NARGS, function (match, prefix, i, index) {
			var result = void 0;

			if (string[index - 1] === '{' && string[index + match.length] === '}') {
				return i;
			} else {
				result = (0, _util.hasOwn)(args, i) ? args[i] : null;
				if (result === null || result === undefined) {
					return '';
				}

				return result;
			}
		});
	}

	return template;
};

var _util = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.extractTimeFormat = exports.extractDateFormat = exports.nextYear = exports.prevYear = exports.nextMonth = exports.prevMonth = exports.changeYearMonthAndClampDate = exports.timeWithinRange = exports.limitTimeRange = exports.clearMilliseconds = exports.clearTime = exports.modifyWithDefaultTime = exports.modifyTime = exports.modifyDate = exports.range = exports.getRangeHours = exports.getWeekNumber = exports.getStartDateOfMonth = exports.nextDate = exports.prevDate = exports.getFirstDayOfMonth = exports.getDayCountOfYear = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.isDateObject = exports.isDate = exports.toDate = undefined;

var _date = __webpack_require__(89);

var _date2 = _interopRequireDefault(_date);

var _locale = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
var getI18nSettings = function getI18nSettings() {
	return {
		dayNamesShort: weeks.map(function (week) {
			return (0, _locale.t)('el.datepicker.weeks.' + week);
		}),
		dayNames: weeks.map(function (week) {
			return (0, _locale.t)('el.datepicker.weeks.' + week);
		}),
		monthNamesShort: months.map(function (month) {
			return (0, _locale.t)('el.datepicker.months.' + month);
		}),
		monthNames: months.map(function (month, index) {
			return (0, _locale.t)('el.datepicker.month' + (index + 1));
		}),
		amPm: ['am', 'pm']
	};
};

var newArray = function newArray(start, end) {
	var result = [];
	for (var i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
};

var toDate = exports.toDate = function toDate(date) {
	return isDate(date) ? new Date(date) : null;
};

var isDate = exports.isDate = function isDate(date) {
	if (date === null || date === undefined) return false;
	if (isNaN(new Date(date).getTime())) return false;
	if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
	return true;
};

var isDateObject = exports.isDateObject = function isDateObject(val) {
	return val instanceof Date;
};

var formatDate = exports.formatDate = function formatDate(date, format) {
	date = toDate(date);
	if (!date) return '';
	return _date2.default.format(date, format || 'yyyy-MM-dd', getI18nSettings());
};

var parseDate = exports.parseDate = function parseDate(string, format) {
	return _date2.default.parse(string, format || 'yyyy-MM-dd', getI18nSettings());
};

var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
	if (month === 3 || month === 5 || month === 8 || month === 10) {
		return 30;
	}

	if (month === 1) {
		if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
			return 29;
		} else {
			return 28;
		}
	}

	return 31;
};

var getDayCountOfYear = exports.getDayCountOfYear = function getDayCountOfYear(year) {
	var isLeapYear = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
	return isLeapYear ? 366 : 365;
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
	var temp = new Date(date.getTime());
	temp.setDate(1);
	return temp.getDay();
};

// see: https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
// {prev, next} Date should work for Daylight Saving Time
// Adding 24 * 60 * 60 * 1000 does not work in the above scenario
var prevDate = exports.prevDate = function prevDate(date) {
	var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

var nextDate = exports.nextDate = function nextDate(date) {
	var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

var getStartDateOfMonth = exports.getStartDateOfMonth = function getStartDateOfMonth(year, month) {
	var result = new Date(year, month, 1);
	var day = result.getDay();

	if (day === 0) {
		return prevDate(result, 7);
	} else {
		return prevDate(result, day);
	}
};

var getWeekNumber = exports.getWeekNumber = function getWeekNumber(src) {
	if (!isDate(src)) return null;
	var date = new Date(src.getTime());
	date.setHours(0, 0, 0, 0);
	// Thursday in current week decides the year.
	date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	// January 4 is always in week 1.
	var week1 = new Date(date.getFullYear(), 0, 4);
	// Adjust to Thursday in week 1 and count number of weeks from date to week 1.
	// Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
	return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

var getRangeHours = exports.getRangeHours = function getRangeHours(ranges) {
	var hours = [];
	var disabledHours = [];

	(ranges || []).forEach(function (range) {
		var value = range.map(function (date) {
			return date.getHours();
		});

		disabledHours = disabledHours.concat(newArray(value[0], value[1]));
	});

	if (disabledHours.length) {
		for (var i = 0; i < 24; i++) {
			hours[i] = disabledHours.indexOf(i) === -1;
		}
	} else {
		for (var _i = 0; _i < 24; _i++) {
			hours[_i] = false;
		}
	}

	return hours;
};

var range = exports.range = function range(n) {
	// see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
	return Array.apply(null, { length: n }).map(function (_, n) {
		return n;
	});
};

var modifyDate = exports.modifyDate = function modifyDate(date, y, m, d) {
	return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

var modifyTime = exports.modifyTime = function modifyTime(date, h, m, s) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
};

var modifyWithDefaultTime = exports.modifyWithDefaultTime = function modifyWithDefaultTime(date, time) {
	if (date == null || !time) {
		return date;
	}
	time = parseDate(time, 'HH:mm:ss');
	return modifyTime(date, time.getHours(), time.getMinutes(), time.getSeconds());
};

var clearTime = exports.clearTime = function clearTime(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

var clearMilliseconds = exports.clearMilliseconds = function clearMilliseconds(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
};

var limitTimeRange = exports.limitTimeRange = function limitTimeRange(date, ranges) {
	var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'HH:mm:ss';

	// TODO: refactory a more elegant solution
	if (ranges.length === 0) return date;
	var normalizeDate = function normalizeDate(date) {
		return _date2.default.parse(_date2.default.format(date, format), format);
	};
	var ndate = normalizeDate(date);
	var nranges = ranges.map(function (range) {
		return range.map(normalizeDate);
	});
	if (nranges.some(function (nrange) {
		return ndate >= nrange[0] && ndate <= nrange[1];
	})) return date;

	var minDate = nranges[0][0];
	var maxDate = nranges[0][0];

	nranges.forEach(function (nrange) {
		minDate = new Date(Math.min(nrange[0], minDate));
		maxDate = new Date(Math.max(nrange[1], minDate));
	});

	var ret = ndate < minDate ? minDate : maxDate;
	// preserve Year/Month/Date
	return modifyDate(ret, date.getFullYear(), date.getMonth(), date.getDate());
};

var timeWithinRange = exports.timeWithinRange = function timeWithinRange(date, selectableRange, format) {
	var limitedDate = limitTimeRange(date, selectableRange, format);
	return limitedDate.getTime() === date.getTime();
};

var changeYearMonthAndClampDate = exports.changeYearMonthAndClampDate = function changeYearMonthAndClampDate(date, year, month) {
	// clamp date to the number of days in `year`, `month`
	// eg: (2010-1-31, 2010, 2) => 2010-2-28
	var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
	return modifyDate(date, year, month, monthDate);
};

var prevMonth = exports.prevMonth = function prevMonth(date) {
	var year = date.getFullYear();
	var month = date.getMonth();
	return month === 0 ? changeYearMonthAndClampDate(date, year - 1, 11) : changeYearMonthAndClampDate(date, year, month - 1);
};

var nextMonth = exports.nextMonth = function nextMonth(date) {
	var year = date.getFullYear();
	var month = date.getMonth();
	return month === 11 ? changeYearMonthAndClampDate(date, year + 1, 0) : changeYearMonthAndClampDate(date, year, month + 1);
};

var prevYear = exports.prevYear = function prevYear(date) {
	var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	var year = date.getFullYear();
	var month = date.getMonth();
	return changeYearMonthAndClampDate(date, year - amount, month);
};

var nextYear = exports.nextYear = function nextYear(date) {
	var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	var year = date.getFullYear();
	var month = date.getMonth();
	return changeYearMonthAndClampDate(date, year + amount, month);
};

var extractDateFormat = exports.extractDateFormat = function extractDateFormat(format) {
	return format.replace(/\W?m{1,2}|\W?ZZ/g, '').replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '').trim();
};

var extractTimeFormat = exports.extractTimeFormat = function extractTimeFormat(format) {
	return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '').trim();
};

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _main = __webpack_require__(45);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
	Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

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

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _timePicker = __webpack_require__(403);

var _timePicker2 = _interopRequireDefault(_timePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_timePicker2.default.install = function (Vue) {
	Vue.component(_timePicker2.default.name, _timePicker2.default);
};

exports.default = _timePicker2.default;

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _picker = __webpack_require__(66);

var _picker2 = _interopRequireDefault(_picker);

var _time = __webpack_require__(73);

var _time2 = _interopRequireDefault(_time);

var _timeRange = __webpack_require__(404);

var _timeRange2 = _interopRequireDefault(_timeRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	mixins: [_picker2.default],

	name: 'KcTimePicker',

	props: {
		isRange: Boolean,
		arrowControl: Boolean
	},

	data: function data() {
		return {
			type: ''
		};
	},


	watch: {
		isRange: function isRange(_isRange) {
			if (this.picker) {
				this.unmountPicker();
				this.type = _isRange ? 'timerange' : 'time';
				this.panel = _isRange ? _timeRange2.default : _time2.default;
				this.mountPicker();
			} else {
				this.type = _isRange ? 'timerange' : 'time';
				this.panel = _isRange ? _timeRange2.default : _time2.default;
			}
		}
	},

	created: function created() {
		this.type = this.isRange ? 'timerange' : 'time';
		this.panel = this.isRange ? _timeRange2.default : _time2.default;
	}
};

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_range_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_range_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_range_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_range_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_2a4d2088_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_time_range_vue__ = __webpack_require__(405);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_range_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_2a4d2088_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_time_range_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"kc-zoom-in-top"},on:{"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"kc-time-range-picker kc-picker-panel kc-popper",class:_vm.popperClass},[_c('div',{staticClass:"kc-time-range-picker__content"},[_c('div',{staticClass:"kc-time-range-picker__cell"},[_c('div',{staticClass:"kc-time-range-picker__header"},[_vm._v(_vm._s(_vm.t('el.datepicker.startTime')))]),_c('div',{staticClass:"kc-time-range-picker__body kc-time-panel__content",class:{ 'has-seconds': _vm.showSeconds, 'is-arrow': _vm.arrowControl }},[_c('time-spinner',{ref:"minSpinner",attrs:{"show-seconds":_vm.showSeconds,"am-pm-mode":_vm.amPmMode,"arrow-control":_vm.arrowControl,"date":_vm.minDate},on:{"change":_vm.handleMinChange,"select-range":_vm.setMinSelectionRange}})],1)]),_c('div',{staticClass:"kc-time-range-picker__cell"},[_c('div',{staticClass:"kc-time-range-picker__header"},[_vm._v(_vm._s(_vm.t('el.datepicker.endTime')))]),_c('div',{staticClass:"kc-time-range-picker__body kc-time-panel__content",class:{ 'has-seconds': _vm.showSeconds, 'is-arrow': _vm.arrowControl }},[_c('time-spinner',{ref:"maxSpinner",attrs:{"show-seconds":_vm.showSeconds,"am-pm-mode":_vm.amPmMode,"arrow-control":_vm.arrowControl,"date":_vm.maxDate},on:{"change":_vm.handleMaxChange,"select-range":_vm.setMaxSelectionRange}})],1)])]),_c('div',{staticClass:"kc-time-panel__footer"},[_c('button',{staticClass:"kc-time-panel__btn cancel",attrs:{"type":"button"},on:{"click":function($event){_vm.handleCancel()}}},[_vm._v(_vm._s(_vm.t('el.datepicker.cancel'))+"\n\t\t\t")]),_c('button',{staticClass:"kc-time-panel__btn confirm",attrs:{"type":"button","disabled":_vm.btnDisabled},on:{"click":function($event){_vm.handleConfirm()}}},[_vm._v(_vm._s(_vm.t('el.datepicker.confirm'))+"\n\t\t\t")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _resizeEvent = __webpack_require__(26);

var _scrollbarWidth = __webpack_require__(9);

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _util = __webpack_require__(5);

var _bar = __webpack_require__(46);

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

exports.default = {
	name: 'KcScrollbar',

	components: { Bar: _bar2.default },

	props: {
		native: Boolean,
		wrapStyle: {},
		wrapClass: {},
		viewClass: {},
		viewStyle: {},
		noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
		tag: {
			type: String,
			default: 'div'
		}
	},

	data: function data() {
		return {
			sizeWidth: '0',
			sizeHeight: '0',
			moveX: 0,
			moveY: 0
		};
	},


	computed: {
		wrap: function wrap() {
			return this.$refs.wrap;
		}
	},

	render: function render(h) {
		var gutter = (0, _scrollbarWidth2.default)();
		var style = this.wrapStyle;

		if (gutter) {
			var gutterWith = '-' + gutter + 'px';
			var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';
			if (Array.isArray(this.wrapStyle)) {
				style = (0, _util.toObject)(this.wrapStyle);
				style.marginRight = style.marginBottom = gutterWith;
			} else if (typeof this.wrapStyle === 'string') {
				style += gutterStyle;
			} else {
				style = gutterStyle;
			}
		}

		var view = h(this.tag, {
			class: ['kc-scrollbar__view', this.viewClass],
			style: this.viewStyle,
			ref: 'resize'
		}, this.$slots.default);
		var wrap = h(
			'div',
			{
				ref: 'wrap',
				style: style,
				on: {
					'scroll': this.handleScroll
				},

				'class': [this.wrapClass, 'kc-scrollbar__wrap', gutter ? '' : 'kc-scrollbar__wrap--hidden-default'] },
			[[view]]
		);

		var nodes = void 0;

		if (!this.native) {
			nodes = [wrap, h(_bar2.default, {
				attrs: {
					move: this.moveX,
					size: this.sizeWidth }
			}), h(_bar2.default, {
				attrs: {
					vertical: true,
					move: this.moveY,
					size: this.sizeHeight }
			})];
		} else {
			nodes = [h(
				'div',
				{
					ref: 'wrap',
					'class': [this.wrapClass, 'kc-scrollbar__wrap'],
					style: style },
				[[view]]
			)];
		}
		return h('div', { class: 'kc-scrollbar' }, nodes);
	},


	methods: {
		handleScroll: function handleScroll() {
			var wrap = this.wrap;

			this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
			this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
		},
		update: function update() {
			var heightPercentage = void 0,
			    widthPercentage = void 0;
			var wrap = this.wrap;
			if (!wrap) return;

			heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
			widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

			this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
			this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
		}
	},

	mounted: function mounted() {
		if (this.native) return;
		this.$nextTick(this.update);
		!this.noresize && (0, _resizeEvent.addResizeListener)(this.$refs.resize, this.update);
	},
	beforeDestroy: function beforeDestroy() {
		if (this.native) return;
		!this.noresize && (0, _resizeEvent.removeResizeListener)(this.$refs.resize, this.update);
	}
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dom = __webpack_require__(2);

var _util = __webpack_require__(47);

/* istanbul ignore next */
exports.default = {
	name: 'Bar',

	props: {
		vertical: Boolean,
		size: String,
		move: Number
	},

	computed: {
		bar: function bar() {
			return _util.BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
		},
		wrap: function wrap() {
			return this.$parent.wrap;
		}
	},

	render: function render(h) {
		var size = this.size,
		    move = this.move,
		    bar = this.bar;


		return h(
			'div',
			{
				'class': ['kc-scrollbar__bar', 'is-' + bar.key],
				on: {
					'mousedown': this.clickTrackHandler
				}
			},
			[h('div', {
				ref: 'thumb',
				'class': 'kc-scrollbar__thumb',
				on: {
					'mousedown': this.clickThumbHandler
				},

				style: (0, _util.renderThumbStyle)({ size: size, move: move, bar: bar }) })]
		);
	},


	methods: {
		clickThumbHandler: function clickThumbHandler(e) {
			this.startDrag(e);
			this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
		},
		clickTrackHandler: function clickTrackHandler(e) {
			var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
			var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
			var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

			this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
		},
		startDrag: function startDrag(e) {
			e.stopImmediatePropagation();
			this.cursorDown = true;

			(0, _dom.on)(document, 'mousemove', this.mouseMoveDocumentHandler);
			(0, _dom.on)(document, 'mouseup', this.mouseUpDocumentHandler);
			document.onselectstart = function () {
				return false;
			};
		},
		mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
			if (this.cursorDown === false) return;
			var prevPage = this[this.bar.axis];

			if (!prevPage) return;

			var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
			var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
			var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

			this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
		},
		mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
			this.cursorDown = false;
			this[this.bar.axis] = 0;
			(0, _dom.off)(document, 'mousemove', this.mouseMoveDocumentHandler);
			document.onselectstart = null;
		}
	},

	destroyed: function destroyed() {
		(0, _dom.off)(document, 'mouseup', this.mouseUpDocumentHandler);
	}
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.renderThumbStyle = renderThumbStyle;
var BAR_MAP = exports.BAR_MAP = {
	vertical: {
		offset: 'offsetHeight',
		scroll: 'scrollTop',
		scrollSize: 'scrollHeight',
		size: 'height',
		key: 'vertical',
		axis: 'Y',
		client: 'clientY',
		direction: 'top'
	},
	horizontal: {
		offset: 'offsetWidth',
		scroll: 'scrollLeft',
		scrollSize: 'scrollWidth',
		size: 'width',
		key: 'horizontal',
		axis: 'X',
		client: 'clientX',
		direction: 'left'
	}
};

function renderThumbStyle(_ref) {
	var move = _ref.move,
	    size = _ref.size,
	    bar = _ref.bar;

	var style = {};
	var translate = 'translate' + bar.axis + '(' + move + '%)';

	style[bar.size] = size;
	style.transform = translate;
	style.msTransform = translate;
	style.webkitTransform = translate;

	return style;
};

/***/ }),

/***/ 5:
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(67);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _clickoutside = __webpack_require__(20);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _util = __webpack_require__(33);

var _vuePopper = __webpack_require__(15);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _emitter = __webpack_require__(4);

var _emitter2 = _interopRequireDefault(_emitter);

var _input = __webpack_require__(13);

var _input2 = _interopRequireDefault(_input);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewPopper = {
	props: {
		appendToBody: _vuePopper2.default.props.appendToBody,
		offset: _vuePopper2.default.props.offset,
		boundariesPadding: _vuePopper2.default.props.boundariesPadding,
		arrowOffset: _vuePopper2.default.props.arrowOffset
	},
	methods: _vuePopper2.default.methods,
	data: function data() {
		return (0, _merge2.default)({ visibleArrow: true }, _vuePopper2.default.data);
	},

	beforeDestroy: _vuePopper2.default.beforeDestroy
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

var DEFAULT_FORMATS = {
	date: 'yyyy-MM-dd',
	month: 'yyyy-MM',
	datetime: 'yyyy-MM-dd HH:mm:ss',
	time: 'HH:mm:ss',
	week: 'yyyywWW',
	timerange: 'HH:mm:ss',
	daterange: 'yyyy-MM-dd',
	datetimerange: 'yyyy-MM-dd HH:mm:ss',
	year: 'yyyy'
};
var HAVE_TRIGGER_TYPES = ['date', 'datetime', 'time', 'time-select', 'week', 'month', 'year', 'daterange', 'timerange', 'datetimerange', 'dates'];
var DATE_FORMATTER = function DATE_FORMATTER(value, format) {
	if (format === 'timestamp') return value.getTime();
	return (0, _util.formatDate)(value, format);
};
var DATE_PARSER = function DATE_PARSER(text, format) {
	if (format === 'timestamp') return new Date(Number(text));
	return (0, _util.parseDate)(text, format);
};
var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
	if (Array.isArray(value) && value.length === 2) {
		var start = value[0];
		var end = value[1];

		if (start && end) {
			return [DATE_FORMATTER(start, format), DATE_FORMATTER(end, format)];
		}
	}
	return '';
};
var RANGE_PARSER = function RANGE_PARSER(array, format, separator) {
	if (!Array.isArray(array)) {
		array = array.split(separator);
	}
	if (array.length === 2) {
		var range1 = array[0];
		var range2 = array[1];

		return [DATE_PARSER(range1, format), DATE_PARSER(range2, format)];
	}
	return [];
};
var TYPE_VALUE_RESOLVER_MAP = {
	default: {
		formatter: function formatter(value) {
			if (!value) return '';
			return '' + value;
		},
		parser: function parser(text) {
			if (text === undefined || text === '') return null;
			return text;
		}
	},
	week: {
		formatter: function formatter(value, format) {
			var week = (0, _util.getWeekNumber)(value);
			var month = value.getMonth();
			var trueDate = new Date(value);
			if (week === 1 && month === 11) {
				trueDate.setHours(0, 0, 0, 0);
				trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
			}
			var date = (0, _util.formatDate)(trueDate, format);

			date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? '0' + week : week) : date.replace(/W/, week);
			return date;
		},
		parser: function parser(text) {
			var array = (text || '').split('w');
			if (array.length === 2) {
				var year = Number(array[0]);
				var month = Number(array[1]);

				if (!isNaN(year) && !isNaN(month) && month < 54) {
					return text;
				}
			}
			return null;
		}
	},
	date: {
		formatter: DATE_FORMATTER,
		parser: DATE_PARSER
	},
	datetime: {
		formatter: DATE_FORMATTER,
		parser: DATE_PARSER
	},
	daterange: {
		formatter: RANGE_FORMATTER,
		parser: RANGE_PARSER
	},
	datetimerange: {
		formatter: RANGE_FORMATTER,
		parser: RANGE_PARSER
	},
	timerange: {
		formatter: RANGE_FORMATTER,
		parser: RANGE_PARSER
	},
	time: {
		formatter: DATE_FORMATTER,
		parser: DATE_PARSER
	},
	month: {
		formatter: DATE_FORMATTER,
		parser: DATE_PARSER
	},
	year: {
		formatter: DATE_FORMATTER,
		parser: DATE_PARSER
	},
	number: {
		formatter: function formatter(value) {
			if (!value) return '';
			return '' + value;
		},
		parser: function parser(text) {
			var result = Number(text);

			if (!isNaN(text)) {
				return result;
			} else {
				return null;
			}
		}
	},
	dates: {
		formatter: function formatter(value, format) {
			return value.map(function (date) {
				return DATE_FORMATTER(date, format);
			});
		},
		parser: function parser(value, format) {
			return (typeof value === 'string' ? value.split(', ') : value).map(function (date) {
				return date instanceof Date ? date : DATE_PARSER(date, format);
			});
		}
	}
};
var PLACEMENT_MAP = {
	left: 'bottom-start',
	center: 'bottom',
	right: 'bottom-end'
};

var parseAsFormatAndType = function parseAsFormatAndType(value, customFormat, type) {
	var rangeSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';

	if (!value) return null;
	var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;
	var format = customFormat || DEFAULT_FORMATS[type];
	return parser(value, format, rangeSeparator);
};

var formatAsFormatAndType = function formatAsFormatAndType(value, customFormat, type) {
	if (!value) return null;
	var formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;
	var format = customFormat || DEFAULT_FORMATS[type];
	return formatter(value, format);
};

/*
    * Considers:
    *   1. Date object
    *   2. date string
    *   3. array of 1 or 2
    */
var valueEquals = function valueEquals(a, b) {
	// considers Date object and string
	var dateEquals = function dateEquals(a, b) {
		var aIsDate = a instanceof Date;
		var bIsDate = b instanceof Date;
		if (aIsDate && bIsDate) {
			return a.getTime() === b.getTime();
		}
		if (!aIsDate && !bIsDate) {
			return a === b;
		}
		return false;
	};

	var aIsArray = a instanceof Array;
	var bIsArray = b instanceof Array;
	if (aIsArray && bIsArray) {
		if (a.length !== b.length) {
			return false;
		}
		return a.every(function (item, index) {
			return dateEquals(item, b[index]);
		});
	}
	if (!aIsArray && !bIsArray) {
		return dateEquals(a, b);
	}
	return false;
};

var isString = function isString(val) {
	return typeof val === 'string' || val instanceof String;
};

var validator = function validator(val) {
	// either: String, Array of String, null / undefined
	return val === null || val === undefined || isString(val) || Array.isArray(val) && val.length === 2 && val.every(isString);
};

exports.default = {
	mixins: [_emitter2.default, NewPopper],

	inject: {
		elForm: {
			default: ''
		},
		elFormItem: {
			default: ''
		}
	},

	props: {
		size: String,
		format: String,
		valueFormat: String,
		readonly: Boolean,
		placeholder: String,
		startPlaceholder: String,
		endPlaceholder: String,
		prefixIcon: String,
		clearIcon: {
			type: String,
			default: 'kc-icon-circle-close'
		},
		name: {
			default: '',
			validator: validator
		},
		disabled: Boolean,
		clearable: {
			type: Boolean,
			default: true
		},
		id: {
			default: '',
			validator: validator
		},
		popperClass: String,
		editable: {
			type: Boolean,
			default: true
		},
		align: {
			type: String,
			default: 'left'
		},
		value: {},
		defaultValue: {},
		defaultTime: {},
		rangeSeparator: {
			default: '-'
		},
		pickerOptions: {},
		unlinkPanels: Boolean
	},

	components: { KcInput: _input2.default },

	directives: { Clickoutside: _clickoutside2.default },

	data: function data() {
		return {
			pickerVisible: false,
			showClose: false,
			userInput: null,
			valueOnOpen: null, // value when picker opens, used to determine whether to emit change
			unwatchPickerOptions: null
		};
	},


	watch: {
		pickerVisible: function pickerVisible(val) {
			if (this.readonly || this.pickerDisabled) return;
			if (val) {
				this.showPicker();
				this.valueOnOpen = Array.isArray(this.value) ? [].concat((0, _toConsumableArray3.default)(this.value)) : this.value;
			} else {
				this.hidePicker();
				this.emitChange(this.value);
				this.userInput = null;
				this.dispatch('KcFormItem', 'el.form.blur');
				this.$emit('blur', this);
				this.blur();
			}
		},

		parsedValue: {
			immediate: true,
			handler: function handler(val) {
				if (this.picker) {
					this.picker.value = val;
					this.picker.selectedDate = Array.isArray(val) ? val : [];
				}
			}
		},
		defaultValue: function defaultValue(val) {
			// NOTE: should eventually move to jsx style picker + panel ?
			if (this.picker) {
				this.picker.defaultValue = val;
			}
		}
	},

	computed: {
		ranged: function ranged() {
			return this.type.indexOf('range') > -1;
		},
		reference: function reference() {
			var reference = this.$refs.reference;
			return reference.$el || reference;
		},
		refInput: function refInput() {
			if (this.reference) {
				return [].slice.call(this.reference.querySelectorAll('input'));
			}
			return [];
		},
		valueIsEmpty: function valueIsEmpty() {
			var val = this.value;
			if (Array.isArray(val)) {
				for (var i = 0, len = val.length; i < len; i++) {
					if (val[i]) {
						return false;
					}
				}
			} else {
				if (val) {
					return false;
				}
			}
			return true;
		},
		triggerClass: function triggerClass() {
			return this.prefixIcon || (this.type.indexOf('time') !== -1 ? 'kc-icon-time' : 'kc-icon-date');
		},
		selectionMode: function selectionMode() {
			if (this.type === 'week') {
				return 'week';
			} else if (this.type === 'month') {
				return 'month';
			} else if (this.type === 'year') {
				return 'year';
			} else if (this.type === 'dates') {
				return 'dates';
			}

			return 'day';
		},
		haveTrigger: function haveTrigger() {
			if (typeof this.showTrigger !== 'undefined') {
				return this.showTrigger;
			}
			return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
		},
		displayValue: function displayValue() {
			var formattedValue = formatAsFormatAndType(this.parsedValue, this.format, this.type, this.rangeSeparator);
			if (Array.isArray(this.userInput)) {
				return [this.userInput[0] || formattedValue && formattedValue[0] || '', this.userInput[1] || formattedValue && formattedValue[1] || ''];
			} else if (this.userInput !== null) {
				return this.userInput;
			} else if (formattedValue) {
				return this.type === 'dates' ? formattedValue.join(', ') : formattedValue;
			} else {
				return '';
			}
		},
		parsedValue: function parsedValue() {
			var isParsed = (0, _util.isDateObject)(this.value) || Array.isArray(this.value) && this.value.every(_util.isDateObject);
			if (this.valueFormat && !isParsed) {
				return parseAsFormatAndType(this.value, this.valueFormat, this.type, this.rangeSeparator) || this.value;
			} else {
				return this.value;
			}
		},
		_elFormItemSize: function _elFormItemSize() {
			return (this.elFormItem || {}).elFormItemSize;
		},
		pickerSize: function pickerSize() {
			return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
		},
		pickerDisabled: function pickerDisabled() {
			return this.disabled || (this.elForm || {}).disabled;
		},
		firstInputId: function firstInputId() {
			var obj = {};
			var id = void 0;
			if (this.ranged) {
				id = this.id && this.id[0];
			} else {
				id = this.id;
			}
			if (id) obj.id = id;
			return obj;
		},
		secondInputId: function secondInputId() {
			var obj = {};
			var id = void 0;
			if (this.ranged) {
				id = this.id && this.id[1];
			}
			if (id) obj.id = id;
			return obj;
		}
	},

	created: function created() {
		// vue-popper
		this.popperOptions = {
			boundariesPadding: 0,
			gpuAcceleration: false
		};
		this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;

		this.$on('fieldReset', this.handleFieldReset);
	},


	methods: {
		focus: function focus() {
			if (!this.ranged) {
				this.$refs.reference.focus();
			} else {
				this.handleFocus();
			}
		},
		blur: function blur() {
			this.refInput.forEach(function (input) {
				return input.blur();
			});
		},


		// {parse, formatTo} Value deals maps component value with internal Date
		parseValue: function parseValue(value) {
			var isParsed = (0, _util.isDateObject)(value) || Array.isArray(value) && value.every(_util.isDateObject);
			if (this.valueFormat && !isParsed) {
				return parseAsFormatAndType(value, this.valueFormat, this.type, this.rangeSeparator) || value;
			} else {
				return value;
			}
		},
		formatToValue: function formatToValue(date) {
			var isFormattable = (0, _util.isDateObject)(date) || Array.isArray(date) && date.every(_util.isDateObject);
			if (this.valueFormat && isFormattable) {
				return formatAsFormatAndType(date, this.valueFormat, this.type, this.rangeSeparator);
			} else {
				return date;
			}
		},


		// {parse, formatTo} String deals with user input
		parseString: function parseString(value) {
			var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
			return parseAsFormatAndType(value, this.format, type);
		},
		formatToString: function formatToString(value) {
			var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
			return formatAsFormatAndType(value, this.format, type);
		},
		handleMouseEnter: function handleMouseEnter() {
			if (this.readonly || this.pickerDisabled) return;
			if (!this.valueIsEmpty && this.clearable) {
				this.showClose = true;
			}
		},
		handleChange: function handleChange() {
			if (this.userInput) {
				var value = this.parseString(this.displayValue);
				if (value) {
					this.picker.value = value;
					if (this.isValidValue(value)) {
						this.emitInput(value);
						this.userInput = null;
					}
				}
			}
			if (this.userInput === '') {
				this.emitInput(null);
				this.emitChange(null);
				this.userInput = null;
			}
		},
		handleStartInput: function handleStartInput(event) {
			if (this.userInput) {
				this.userInput = [event.target.value, this.userInput[1]];
			} else {
				this.userInput = [event.target.value, null];
			}
		},
		handleEndInput: function handleEndInput(event) {
			if (this.userInput) {
				this.userInput = [this.userInput[0], event.target.value];
			} else {
				this.userInput = [null, event.target.value];
			}
		},
		handleStartChange: function handleStartChange(event) {
			var value = this.parseString(this.userInput && this.userInput[0]);
			if (value) {
				this.userInput = [this.formatToString(value), this.displayValue[1]];
				var newValue = [value, this.picker.value && this.picker.value[1]];
				this.picker.value = newValue;
				if (this.isValidValue(newValue)) {
					this.emitInput(newValue);
					this.userInput = null;
				}
			}
		},
		handleEndChange: function handleEndChange(event) {
			var value = this.parseString(this.userInput && this.userInput[1]);
			if (value) {
				this.userInput = [this.displayValue[0], this.formatToString(value)];
				var newValue = [this.picker.value && this.picker.value[0], value];
				this.picker.value = newValue;
				if (this.isValidValue(newValue)) {
					this.emitInput(newValue);
					this.userInput = null;
				}
			}
		},
		handleClickIcon: function handleClickIcon(event) {
			if (this.readonly || this.pickerDisabled) return;
			if (this.showClose) {
				this.valueOnOpen = this.value;
				event.stopPropagation();
				this.emitInput(null);
				this.emitChange(null);
				this.showClose = false;
				if (this.picker && typeof this.picker.handleClear === 'function') {
					this.picker.handleClear();
				}
			} else {
				this.pickerVisible = !this.pickerVisible;
			}
		},
		handleClose: function handleClose() {
			if (!this.pickerVisible) return;
			this.pickerVisible = false;
			var type = this.type,
			    valueOnOpen = this.valueOnOpen,
			    valueFormat = this.valueFormat,
			    rangeSeparator = this.rangeSeparator;

			if (type === 'dates' && this.picker) {
				this.picker.selectedDate = parseAsFormatAndType(valueOnOpen, valueFormat, type, rangeSeparator) || valueOnOpen;
				this.emitInput(this.picker.selectedDate);
			}
		},
		handleFieldReset: function handleFieldReset(initialValue) {
			this.userInput = initialValue;
		},
		handleFocus: function handleFocus() {
			var type = this.type;

			if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
				this.pickerVisible = true;
			}
			this.$emit('focus', this);
		},
		handleKeydown: function handleKeydown(event) {
			var _this = this;

			var keyCode = event.keyCode;

			// ESC
			if (keyCode === 27) {
				this.pickerVisible = false;
				event.stopPropagation();
				return;
			}

			// Tab
			if (keyCode === 9) {
				if (!this.ranged) {
					this.handleChange();
					this.pickerVisible = this.picker.visible = false;
					this.blur();
					event.stopPropagation();
				} else {
					// user may change focus between two input
					setTimeout(function () {
						if (_this.refInput.indexOf(document.activeElement) === -1) {
							_this.pickerVisible = false;
							_this.blur();
							event.stopPropagation();
						}
					}, 0);
				}
				return;
			}

			// Enter
			if (keyCode === 13) {
				if (this.userInput === '' || this.isValidValue(this.parseString(this.displayValue))) {
					this.handleChange();
					this.pickerVisible = this.picker.visible = false;
					this.blur();
				}
				event.stopPropagation();
				return;
			}

			// if user is typing, do not let picker handle key input
			if (this.userInput) {
				event.stopPropagation();
				return;
			}

			// delegate other keys to panel
			if (this.picker && this.picker.handleKeydown) {
				this.picker.handleKeydown(event);
			}
		},
		handleRangeClick: function handleRangeClick() {
			var type = this.type;

			if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
				this.pickerVisible = true;
			}
			this.$emit('focus', this);
		},
		hidePicker: function hidePicker() {
			if (this.picker) {
				this.picker.resetView && this.picker.resetView();
				this.pickerVisible = this.picker.visible = false;
				this.destroyPopper();
			}
		},
		showPicker: function showPicker() {
			var _this2 = this;

			if (this.$isServer) return;
			if (!this.picker) {
				this.mountPicker();
			}
			this.pickerVisible = this.picker.visible = true;

			this.updatePopper();

			this.picker.value = this.parsedValue;
			this.picker.resetView && this.picker.resetView();

			this.$nextTick(function () {
				_this2.picker.adjustSpinners && _this2.picker.adjustSpinners();
			});
		},
		mountPicker: function mountPicker() {
			var _this3 = this;

			this.picker = new _vue2.default(this.panel).$mount();
			this.picker.defaultValue = this.defaultValue;
			this.picker.defaultTime = this.defaultTime;
			this.picker.popperClass = this.popperClass;
			this.popperElm = this.picker.$el;
			this.picker.width = this.reference.getBoundingClientRect().width;
			this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
			this.picker.selectionMode = this.selectionMode;
			this.picker.unlinkPanels = this.unlinkPanels;
			this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;
			this.picker.selectedDate = Array.isArray(this.value) && this.value || [];
			this.$watch('format', function (format) {
				_this3.picker.format = format;
			});

			var updateOptions = function updateOptions() {
				var options = _this3.pickerOptions;

				if (options && options.selectableRange) {
					var ranges = options.selectableRange;
					var parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
					var format = DEFAULT_FORMATS.timerange;

					ranges = Array.isArray(ranges) ? ranges : [ranges];
					_this3.picker.selectableRange = ranges.map(function (range) {
						return parser(range, format, _this3.rangeSeparator);
					});
				}

				for (var option in options) {
					if (options.hasOwnProperty(option) &&
					// 忽略 time-picker 的该配置项
					option !== 'selectableRange') {
						_this3.picker[option] = options[option];
					}
				}

				// main format must prevail over undocumented pickerOptions.format
				if (_this3.format) {
					_this3.picker.format = _this3.format;
				}
			};
			updateOptions();
			this.unwatchPickerOptions = this.$watch('pickerOptions', function () {
				return updateOptions();
			}, { deep: true });

			this.$el.appendChild(this.picker.$el);
			this.picker.resetView && this.picker.resetView();

			this.picker.$on('dodestroy', this.doDestroy);
			this.picker.$on('pick', function () {
				var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

				_this3.userInput = null;
				_this3.pickerVisible = _this3.picker.visible = visible;
				_this3.emitInput(date);
				_this3.picker.resetView && _this3.picker.resetView();
			});

			this.picker.$on('select-range', function (start, end, pos) {
				if (_this3.refInput.length === 0) return;
				if (!pos || pos === 'min') {
					_this3.refInput[0].setSelectionRange(start, end);
					_this3.refInput[0].focus();
				} else if (pos === 'max') {
					_this3.refInput[1].setSelectionRange(start, end);
					_this3.refInput[1].focus();
				}
			});
		},
		unmountPicker: function unmountPicker() {
			if (this.picker) {
				this.picker.$destroy();
				this.picker.$off();
				if (typeof this.unwatchPickerOptions === 'function') {
					this.unwatchPickerOptions();
				}
				this.picker.$el.parentNode.removeChild(this.picker.$el);
			}
		},
		emitChange: function emitChange(val) {
			// determine user real change only
			if (!valueEquals(val, this.valueOnOpen)) {
				this.$emit('change', val);
				this.dispatch('KcFormItem', 'el.form.change', val);
				this.valueOnOpen = val;
			}
		},
		emitInput: function emitInput(val) {
			var formatted = this.formatToValue(val);
			if (!valueEquals(this.value, formatted)) {
				this.$emit('input', formatted);
			}
		},
		isValidValue: function isValidValue(value) {
			if (!this.picker) {
				this.mountPicker();
			}
			if (this.picker.isValidValue) {
				return value && this.picker.isValidValue(value);
			} else {
				return true;
			}
		}
	}
};

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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_picker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_picker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_picker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_c34d5852_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(90);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_c34d5852_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_ed0b1b86_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_time_vue__ = __webpack_require__(133);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_ed0b1b86_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_time_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(33);

var _locale = __webpack_require__(12);

var _locale2 = _interopRequireDefault(_locale);

var _timeSpinner = __webpack_require__(91);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	mixins: [_locale2.default],

	components: {
		TimeSpinner: _timeSpinner2.default
	},

	props: {
		visible: Boolean,
		timeArrowControl: Boolean
	},

	watch: {
		visible: function visible(val) {
			var _this = this;

			if (val) {
				this.oldValue = this.value;
				this.$nextTick(function () {
					return _this.$refs.spinner.emitSelectRange('hours');
				});
			} else {
				this.needInitAdjust = true;
			}
		},
		value: function value(newVal) {
			var _this2 = this;

			var date = void 0;
			if (newVal instanceof Date) {
				date = (0, _util.limitTimeRange)(newVal, this.selectableRange, this.format);
			} else if (!newVal) {
				date = this.defaultValue ? new Date(this.defaultValue) : new Date();
			}

			this.date = date;
			if (this.visible && this.needInitAdjust) {
				this.$nextTick(function (_) {
					return _this2.adjustSpinners();
				});
				this.needInitAdjust = false;
			}
		},
		selectableRange: function selectableRange(val) {
			this.$refs.spinner.selectableRange = val;
		},
		defaultValue: function defaultValue(val) {
			if (!(0, _util.isDate)(this.value)) {
				this.date = val ? new Date(val) : new Date();
			}
		}
	},

	data: function data() {
		return {
			popperClass: '',
			format: 'HH:mm:ss',
			value: '',
			defaultValue: null,
			date: new Date(),
			oldValue: new Date(),
			selectableRange: [],
			selectionRange: [0, 2],
			disabled: false,
			arrowControl: false,
			needInitAdjust: true
		};
	},


	computed: {
		showSeconds: function showSeconds() {
			return (this.format || '').indexOf('ss') !== -1;
		},
		useArrow: function useArrow() {
			return this.arrowControl || this.timeArrowControl || false;
		},
		amPmMode: function amPmMode() {
			if ((this.format || '').indexOf('A') !== -1) return 'A';
			if ((this.format || '').indexOf('a') !== -1) return 'a';
			return '';
		}
	},

	methods: {
		handleCancel: function handleCancel() {
			this.$emit('pick', this.oldValue, false);
		},
		handleChange: function handleChange(date) {
			// this.visible avoids edge cases, when use scrolls during panel closing animation
			if (this.visible) {
				this.date = (0, _util.clearMilliseconds)(date);
				// if date is out of range, do not emit
				if (this.isValidValue(this.date)) {
					this.$emit('pick', this.date, true);
				}
			}
		},
		setSelectionRange: function setSelectionRange(start, end) {
			this.$emit('select-range', start, end);
			this.selectionRange = [start, end];
		},
		handleConfirm: function handleConfirm() {
			var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
			var first = arguments[1];

			if (first) return;
			var date = (0, _util.clearMilliseconds)((0, _util.limitTimeRange)(this.date, this.selectableRange, this.format));
			this.$emit('pick', date, visible, first);
		},
		handleKeydown: function handleKeydown(event) {
			var keyCode = event.keyCode;
			var mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

			// Left or Right
			if (keyCode === 37 || keyCode === 39) {
				var step = mapping[keyCode];
				this.changeSelectionRange(step);
				event.preventDefault();
				return;
			}

			// Up or Down
			if (keyCode === 38 || keyCode === 40) {
				var _step = mapping[keyCode];
				this.$refs.spinner.scrollDown(_step);
				event.preventDefault();
			}
		},
		isValidValue: function isValidValue(date) {
			return (0, _util.timeWithinRange)(date, this.selectableRange, this.format);
		},
		adjustSpinners: function adjustSpinners() {
			return this.$refs.spinner.adjustSpinners();
		},
		changeSelectionRange: function changeSelectionRange(step) {
			var list = [0, 3].concat(this.showSeconds ? [6] : []);
			var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
			var index = list.indexOf(this.selectionRange[0]);
			var next = (index + step + list.length) % list.length;
			this.$refs.spinner.emitSelectRange(mapping[next]);
		}
	},

	mounted: function mounted() {
		var _this3 = this;

		this.$nextTick(function () {
			return _this3.handleConfirm(true, true);
		});
		this.$emit('mounted');
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

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(33);

var _scrollbar = __webpack_require__(38);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _repeatClick = __webpack_require__(63);

var _repeatClick2 = _interopRequireDefault(_repeatClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: { KcScrollbar: _scrollbar2.default },

	directives: {
		repeatClick: _repeatClick2.default
	},

	props: {
		date: {},
		defaultValue: {}, // reserved for future use
		showSeconds: {
			type: Boolean,
			default: true
		},
		arrowControl: Boolean,
		amPmMode: {
			type: String,
			default: '' // 'a': am/pm; 'A': AM/PM
		}
	},

	computed: {
		hours: function hours() {
			return this.date.getHours();
		},
		minutes: function minutes() {
			return this.date.getMinutes();
		},
		seconds: function seconds() {
			return this.date.getSeconds();
		},
		hoursList: function hoursList() {
			return (0, _util.getRangeHours)(this.selectableRange);
		},
		arrowHourList: function arrowHourList() {
			var hours = this.hours;
			return [hours > 0 ? hours - 1 : undefined, hours, hours < 23 ? hours + 1 : undefined];
		},
		arrowMinuteList: function arrowMinuteList() {
			var minutes = this.minutes;
			return [minutes > 0 ? minutes - 1 : undefined, minutes, minutes < 59 ? minutes + 1 : undefined];
		},
		arrowSecondList: function arrowSecondList() {
			var seconds = this.seconds;
			return [seconds > 0 ? seconds - 1 : undefined, seconds, seconds < 59 ? seconds + 1 : undefined];
		}
	},

	data: function data() {
		return {
			selectableRange: [],
			currentScrollbar: null
		};
	},
	mounted: function mounted() {
		var _this = this;

		this.$nextTick(function () {
			!_this.arrowControl && _this.bindScrollEvent();
		});
	},


	methods: {
		increase: function increase() {
			this.scrollDown(1);
		},
		decrease: function decrease() {
			this.scrollDown(-1);
		},
		modifyDateField: function modifyDateField(type, value) {
			switch (type) {
				case 'hours':
					this.$emit('change', (0, _util.modifyTime)(this.date, value, this.minutes, this.seconds));break;
				case 'minutes':
					this.$emit('change', (0, _util.modifyTime)(this.date, this.hours, value, this.seconds));break;
				case 'seconds':
					this.$emit('change', (0, _util.modifyTime)(this.date, this.hours, this.minutes, value));break;
			}
		},
		handleClick: function handleClick(type, _ref) {
			var value = _ref.value,
			    disabled = _ref.disabled;

			if (!disabled) {
				this.modifyDateField(type, value);
				this.emitSelectRange(type);
				this.adjustSpinner(type, value);
			}
		},
		emitSelectRange: function emitSelectRange(type) {
			if (type === 'hours') {
				this.$emit('select-range', 0, 2);
			} else if (type === 'minutes') {
				this.$emit('select-range', 3, 5);
			} else if (type === 'seconds') {
				this.$emit('select-range', 6, 8);
			}
			this.currentScrollbar = type;
		},
		bindScrollEvent: function bindScrollEvent() {
			var _this2 = this;

			var bindFuntion = function bindFuntion(type) {
				_this2.$refs[type].wrap.onscroll = function (e) {
					// TODO: scroll is emitted when set scrollTop programatically
					// should find better solutions in the future!
					_this2.handleScroll(type, e);
				};
			};
			bindFuntion('hours');
			bindFuntion('minutes');
			bindFuntion('seconds');
		},
		handleScroll: function handleScroll(type) {
			var value = Math.min(Math.floor((this.$refs[type].wrap.scrollTop - 80) / 32 + 3), type === 'hours' ? 23 : 59);
			this.modifyDateField(type, value);
		},


		// NOTE: used by datetime / date-range panel
		//       renamed from adjustScrollTop
		//       should try to refactory it
		adjustSpinners: function adjustSpinners() {
			this.adjustSpinner('hours', this.hours);
			this.adjustSpinner('minutes', this.minutes);
			this.adjustSpinner('seconds', this.seconds);
		},
		adjustCurrentSpinner: function adjustCurrentSpinner(type) {
			this.adjustSpinner(type, this[type]);
		},
		adjustSpinner: function adjustSpinner(type, value) {
			if (this.arrowControl) return;
			var el = this.$refs[type].wrap;
			if (el) {
				el.scrollTop = Math.max(0, (value - 2.5) * 32 + 80);
			}
		},
		scrollDown: function scrollDown(step) {
			if (!this.currentScrollbar) {
				this.emitSelectRange('hours');
			}

			var label = this.currentScrollbar;
			var hoursList = this.hoursList;
			var now = this[label];

			if (this.currentScrollbar === 'hours') {
				var total = Math.abs(step);
				step = step > 0 ? 1 : -1;
				var length = hoursList.length;
				while (length-- && total) {
					now = (now + step + hoursList.length) % hoursList.length;
					if (hoursList[now]) {
						continue;
					}
					total--;
				}
				if (hoursList[now]) return;
			} else {
				now = (now + step + 60) % 60;
			}

			this.modifyDateField(label, now);
			this.adjustSpinner(label, now);
		},
		amPm: function amPm(hour) {
			var shouldShowAmPm = this.amPmMode.toLowerCase() === 'a';
			if (!shouldShowAmPm) return '';
			var isCapital = this.amPmMode === 'A';
			var content = hour < 12 ? ' am' : ' pm';
			if (isCapital) content = content.toUpperCase();
			return content;
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

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/* Modified from https://github.com/taylorhakes/fecha
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Taylor Hakes
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*eslint-disable*/
// 把 YYYY-MM-DD 改成了 yyyy-MM-dd
(function (main) {
	'use strict';

	/**
  * Parse or format dates
  * @class fecha
  */

	var fecha = {};
	var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
	var twoDigits = /\d\d?/;
	var threeDigits = /\d{3}/;
	var fourDigits = /\d{4}/;
	var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	var noop = function noop() {};

	function shorten(arr, sLen) {
		var newArr = [];
		for (var i = 0, len = arr.length; i < len; i++) {
			newArr.push(arr[i].substr(0, sLen));
		}
		return newArr;
	}

	function monthUpdate(arrName) {
		return function (d, v, i18n) {
			var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
			if (~index) {
				d.month = index;
			}
		};
	}

	function pad(val, len) {
		val = String(val);
		len = len || 2;
		while (val.length < len) {
			val = '0' + val;
		}
		return val;
	}

	var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var monthNamesShort = shorten(monthNames, 3);
	var dayNamesShort = shorten(dayNames, 3);
	fecha.i18n = {
		dayNamesShort: dayNamesShort,
		dayNames: dayNames,
		monthNamesShort: monthNamesShort,
		monthNames: monthNames,
		amPm: ['am', 'pm'],
		DoFn: function DoFn(D) {
			return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
		}
	};

	var formatFlags = {
		D: function D(dateObj) {
			return dateObj.getDay();
		},
		DD: function DD(dateObj) {
			return pad(dateObj.getDay());
		},
		Do: function Do(dateObj, i18n) {
			return i18n.DoFn(dateObj.getDate());
		},
		d: function d(dateObj) {
			return dateObj.getDate();
		},
		dd: function dd(dateObj) {
			return pad(dateObj.getDate());
		},
		ddd: function ddd(dateObj, i18n) {
			return i18n.dayNamesShort[dateObj.getDay()];
		},
		dddd: function dddd(dateObj, i18n) {
			return i18n.dayNames[dateObj.getDay()];
		},
		M: function M(dateObj) {
			return dateObj.getMonth() + 1;
		},
		MM: function MM(dateObj) {
			return pad(dateObj.getMonth() + 1);
		},
		MMM: function MMM(dateObj, i18n) {
			return i18n.monthNamesShort[dateObj.getMonth()];
		},
		MMMM: function MMMM(dateObj, i18n) {
			return i18n.monthNames[dateObj.getMonth()];
		},
		yy: function yy(dateObj) {
			return String(dateObj.getFullYear()).substr(2);
		},
		yyyy: function yyyy(dateObj) {
			return dateObj.getFullYear();
		},
		h: function h(dateObj) {
			return dateObj.getHours() % 12 || 12;
		},
		hh: function hh(dateObj) {
			return pad(dateObj.getHours() % 12 || 12);
		},
		H: function H(dateObj) {
			return dateObj.getHours();
		},
		HH: function HH(dateObj) {
			return pad(dateObj.getHours());
		},
		m: function m(dateObj) {
			return dateObj.getMinutes();
		},
		mm: function mm(dateObj) {
			return pad(dateObj.getMinutes());
		},
		s: function s(dateObj) {
			return dateObj.getSeconds();
		},
		ss: function ss(dateObj) {
			return pad(dateObj.getSeconds());
		},
		S: function S(dateObj) {
			return Math.round(dateObj.getMilliseconds() / 100);
		},
		SS: function SS(dateObj) {
			return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
		},
		SSS: function SSS(dateObj) {
			return pad(dateObj.getMilliseconds(), 3);
		},
		a: function a(dateObj, i18n) {
			return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
		},
		A: function A(dateObj, i18n) {
			return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
		},
		ZZ: function ZZ(dateObj) {
			var o = dateObj.getTimezoneOffset();
			return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
		}
	};

	var parseFlags = {
		d: [twoDigits, function (d, v) {
			d.day = v;
		}],
		M: [twoDigits, function (d, v) {
			d.month = v - 1;
		}],
		yy: [twoDigits, function (d, v) {
			var da = new Date(),
			    cent = +('' + da.getFullYear()).substr(0, 2);
			d.year = '' + (v > 68 ? cent - 1 : cent) + v;
		}],
		h: [twoDigits, function (d, v) {
			d.hour = v;
		}],
		m: [twoDigits, function (d, v) {
			d.minute = v;
		}],
		s: [twoDigits, function (d, v) {
			d.second = v;
		}],
		yyyy: [fourDigits, function (d, v) {
			d.year = v;
		}],
		S: [/\d/, function (d, v) {
			d.millisecond = v * 100;
		}],
		SS: [/\d{2}/, function (d, v) {
			d.millisecond = v * 10;
		}],
		SSS: [threeDigits, function (d, v) {
			d.millisecond = v;
		}],
		D: [twoDigits, noop],
		ddd: [word, noop],
		MMM: [word, monthUpdate('monthNamesShort')],
		MMMM: [word, monthUpdate('monthNames')],
		a: [word, function (d, v, i18n) {
			var val = v.toLowerCase();
			if (val === i18n.amPm[0]) {
				d.isPm = false;
			} else if (val === i18n.amPm[1]) {
				d.isPm = true;
			}
		}],
		ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
			var parts = (v + '').match(/([\+\-]|\d\d)/gi),
			    minutes;

			if (parts) {
				minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
				d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
			}
		}]
	};
	parseFlags.DD = parseFlags.D;
	parseFlags.dddd = parseFlags.ddd;
	parseFlags.Do = parseFlags.dd = parseFlags.d;
	parseFlags.mm = parseFlags.m;
	parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
	parseFlags.MM = parseFlags.M;
	parseFlags.ss = parseFlags.s;
	parseFlags.A = parseFlags.a;

	// Some common format strings
	fecha.masks = {
		'default': 'ddd MMM dd yyyy HH:mm:ss',
		shortDate: 'M/D/yy',
		mediumDate: 'MMM d, yyyy',
		longDate: 'MMMM d, yyyy',
		fullDate: 'dddd, MMMM d, yyyy',
		shortTime: 'HH:mm',
		mediumTime: 'HH:mm:ss',
		longTime: 'HH:mm:ss.SSS'
	};

	/***
  * Format a date
  * @method format
  * @param {Date|number} dateObj
  * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
  */
	fecha.format = function (dateObj, mask, i18nSettings) {
		var i18n = i18nSettings || fecha.i18n;

		if (typeof dateObj === 'number') {
			dateObj = new Date(dateObj);
		}

		if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
			throw new Error('Invalid Date in fecha.format');
		}

		mask = fecha.masks[mask] || mask || fecha.masks['default'];

		return mask.replace(token, function ($0) {
			return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
		});
	};

	/**
  * Parse a date string into an object, changes - into /
  * @method parse
  * @param {string} dateStr Date string
  * @param {string} format Date parse format
  * @returns {Date|boolean}
  */
	fecha.parse = function (dateStr, format, i18nSettings) {
		var i18n = i18nSettings || fecha.i18n;

		if (typeof format !== 'string') {
			throw new Error('Invalid format in fecha.parse');
		}

		format = fecha.masks[format] || format;

		// Avoid regular expression denial of service, fail early for really long strings
		// https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
		if (dateStr.length > 1000) {
			return false;
		}

		var isValid = true;
		var dateInfo = {};
		format.replace(token, function ($0) {
			if (parseFlags[$0]) {
				var info = parseFlags[$0];
				var index = dateStr.search(info[0]);
				if (!~index) {
					isValid = false;
				} else {
					dateStr.replace(info[0], function (result) {
						info[1](dateInfo, result, i18n);
						dateStr = dateStr.substr(index + result.length);
						return result;
					});
				}
			}

			return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
		});

		if (!isValid) {
			return false;
		}

		var today = new Date();
		if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
			dateInfo.hour = +dateInfo.hour + 12;
		} else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
			dateInfo.hour = 0;
		}

		var date;
		if (dateInfo.timezoneOffset != null) {
			dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
			date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
		} else {
			date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
		}
		return date;
	};

	/* istanbul ignore next */
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = fecha;
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return fecha;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		main.fecha = fecha;
	}
})(undefined);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	if (_vue2.default.prototype.$isServer) return 0;
	if (scrollBarWidth !== undefined) return scrollBarWidth;

	var outer = document.createElement('div');
	outer.className = 'kc-scrollbar__wrap';
	outer.style.visibility = 'hidden';
	outer.style.width = '100px';
	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	document.body.appendChild(outer);

	var widthNoScroll = outer.offsetWidth;
	outer.style.overflow = 'scroll';

	var inner = document.createElement('div');
	inner.style.width = '100%';
	outer.appendChild(inner);

	var widthWithScroll = inner.offsetWidth;
	outer.parentNode.removeChild(outer);
	scrollBarWidth = widthNoScroll - widthWithScroll;

	return scrollBarWidth;
};

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollBarWidth = void 0;

;

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.ranged)?_c('kc-input',_vm._b({directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClose),expression:"handleClose"}],ref:"reference",staticClass:"kc-date-editor",class:'kc-date-editor--' + _vm.type,attrs:{"readonly":!_vm.editable || _vm.readonly || _vm.type === 'dates',"disabled":_vm.pickerDisabled,"size":_vm.pickerSize,"name":_vm.name,"placeholder":_vm.placeholder,"value":_vm.displayValue,"validateEvent":false},on:{"focus":_vm.handleFocus,"input":function (value) { return _vm.userInput = value; },"change":_vm.handleChange},nativeOn:{"keydown":function($event){return _vm.handleKeydown($event)},"mouseenter":function($event){return _vm.handleMouseEnter($event)},"mouseleave":function($event){_vm.showClose = false}}},'kc-input',_vm.firstInputId,false),[_c('i',{staticClass:"kc-input__icon",class:_vm.triggerClass,attrs:{"slot":"prefix"},on:{"click":_vm.handleFocus},slot:"prefix"}),(_vm.haveTrigger)?_c('i',{staticClass:"kc-input__icon",class:[_vm.showClose ? '' + _vm.clearIcon : ''],attrs:{"slot":"suffix"},on:{"click":_vm.handleClickIcon},slot:"suffix"}):_vm._e()]):_c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClose),expression:"handleClose"}],ref:"reference",staticClass:"kc-date-editor kc-range-editor kc-input__inner",class:[
      'kc-date-editor--' + _vm.type,
      _vm.pickerSize ? ("kc-range-editor--" + _vm.pickerSize) : '',
      _vm.pickerDisabled ? 'is-disabled' : '',
      _vm.pickerVisible ? 'is-active' : ''
    ],on:{"click":_vm.handleRangeClick,"mouseenter":_vm.handleMouseEnter,"mouseleave":function($event){_vm.showClose = false},"keydown":_vm.handleKeydown}},[_c('i',{class:['kc-input__icon', 'kc-range__icon', _vm.triggerClass]}),_c('input',_vm._b({staticClass:"kc-range-input",attrs:{"placeholder":_vm.startPlaceholder,"disabled":_vm.pickerDisabled,"readonly":!_vm.editable || _vm.readonly,"name":_vm.name && _vm.name[0]},domProps:{"value":_vm.displayValue && _vm.displayValue[0]},on:{"input":_vm.handleStartInput,"change":_vm.handleStartChange,"focus":_vm.handleFocus}},'input',_vm.firstInputId,false)),_c('span',{staticClass:"kc-range-separator"},[_vm._v(_vm._s(_vm.rangeSeparator))]),_c('input',_vm._b({staticClass:"kc-range-input",attrs:{"placeholder":_vm.endPlaceholder,"disabled":_vm.pickerDisabled,"readonly":!_vm.editable || _vm.readonly,"name":_vm.name && _vm.name[1]},domProps:{"value":_vm.displayValue && _vm.displayValue[1]},on:{"input":_vm.handleEndInput,"change":_vm.handleEndChange,"focus":_vm.handleFocus}},'input',_vm.secondInputId,false)),(_vm.haveTrigger)?_c('i',{staticClass:"kc-input__icon kc-range__close-icon",class:[_vm.showClose ? '' + _vm.clearIcon : ''],on:{"click":_vm.handleClickIcon}}):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_78fb0601_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__ = __webpack_require__(132);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_78fb0601_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

/******/ });