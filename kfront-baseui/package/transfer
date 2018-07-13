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
/******/ 	return __webpack_require__(__webpack_require__.s = 413);
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _locale = __webpack_require__(16);

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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _input = __webpack_require__(20);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_input2.default.install = function (Vue) {
	Vue.component(_input2.default.name, _input2.default);
};

exports.default = _input2.default;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

var _calcTextareaHeight = __webpack_require__(21);

var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(17);

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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.i18n = exports.use = exports.t = undefined;

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _zhCN = __webpack_require__(27);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _deepmerge = __webpack_require__(28);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _format = __webpack_require__(29);

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

/***/ 17:
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

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _button = __webpack_require__(33);

var _button2 = _interopRequireDefault(_button);

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(11);

var _locale2 = _interopRequireDefault(_locale);

var _transferPanel = __webpack_require__(415);

var _transferPanel2 = _interopRequireDefault(_transferPanel);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcTransfer',

	mixins: [_emitter2.default, _locale2.default, _migrating2.default],

	components: {
		TransferPanel: _transferPanel2.default,
		KcButton: _button2.default
	},

	props: {
		data: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		titles: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		buttonTexts: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		filterPlaceholder: {
			type: String,
			default: ''
		},
		filterMethod: Function,
		leftDefaultChecked: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		rightDefaultChecked: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		renderContent: Function,
		value: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		format: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		filterable: Boolean,
		props: {
			type: Object,
			default: function _default() {
				return {
					label: 'label',
					key: 'key',
					disabled: 'disabled'
				};
			}
		},
		targetOrder: {
			type: String,
			default: 'original'
		}
	},

	data: function data() {
		return {
			leftChecked: [],
			rightChecked: []
		};
	},


	computed: {
		dataObj: function dataObj() {
			var key = this.props.key;
			return this.data.reduce(function (o, cur) {
				return (o[cur[key]] = cur) && o;
			}, {});
		},
		sourceData: function sourceData() {
			var _this = this;

			return this.data.filter(function (item) {
				return _this.value.indexOf(item[_this.props.key]) === -1;
			});
		},
		targetData: function targetData() {
			var _this2 = this;

			return this.targetOrder === 'original' ? this.data.filter(function (item) {
				return _this2.value.indexOf(item[_this2.props.key]) > -1;
			}) : this.value.map(function (key) {
				return _this2.dataObj[key];
			});
		},
		hasButtonTexts: function hasButtonTexts() {
			return this.buttonTexts.length === 2;
		}
	},

	watch: {
		value: function value(val) {
			this.dispatch('KcFormItem', 'el.form.change', val);
		}
	},

	methods: {
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {
					'footer-format': 'footer-format is renamed to format.'
				}
			};
		},
		onSourceCheckedChange: function onSourceCheckedChange(val, movedKeys) {
			this.leftChecked = val;
			if (movedKeys === undefined) return;
			this.$emit('left-check-change', val, movedKeys);
		},
		onTargetCheckedChange: function onTargetCheckedChange(val, movedKeys) {
			this.rightChecked = val;
			if (movedKeys === undefined) return;
			this.$emit('right-check-change', val, movedKeys);
		},
		addToLeft: function addToLeft() {
			var currentValue = this.value.slice();
			this.rightChecked.forEach(function (item) {
				var index = currentValue.indexOf(item);
				if (index > -1) {
					currentValue.splice(index, 1);
				}
			});
			this.$emit('input', currentValue);
			this.$emit('change', currentValue, 'left', this.rightChecked);
		},
		addToRight: function addToRight() {
			var _this3 = this;

			var currentValue = this.value.slice();
			var itemsToBeMoved = [];
			var key = this.props.key;
			this.data.forEach(function (item) {
				var itemKey = item[key];
				if (_this3.leftChecked.indexOf(itemKey) > -1 && _this3.value.indexOf(itemKey) === -1) {
					itemsToBeMoved.push(itemKey);
				}
			});
			currentValue = this.targetOrder === 'unshift' ? itemsToBeMoved.concat(currentValue) : currentValue.concat(itemsToBeMoved);
			this.$emit('input', currentValue);
			this.$emit('change', currentValue, 'right', this.leftChecked);
		},
		clearQuery: function clearQuery(which) {
			if (which === 'left') {
				this.$refs.leftPanel.query = '';
			} else if (which === 'right') {
				this.$refs.rightPanel.query = '';
			}
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

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkboxGroup = __webpack_require__(62);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

var _checkbox = __webpack_require__(32);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = __webpack_require__(12);

var _input2 = _interopRequireDefault(_input);

var _locale = __webpack_require__(11);

var _locale2 = _interopRequireDefault(_locale);

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
//
//
//
//
//
//
//
//
//
//
//
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
	mixins: [_locale2.default],

	name: 'KcTransferPanel',

	componentName: 'KcTransferPanel',

	components: {
		KcCheckboxGroup: _checkboxGroup2.default,
		KcCheckbox: _checkbox2.default,
		KcInput: _input2.default,
		OptionContent: {
			props: {
				option: Object
			},
			render: function render(h) {
				var getParent = function getParent(vm) {
					if (vm.$options.componentName === 'KcTransferPanel') {
						return vm;
					} else if (vm.$parent) {
						return getParent(vm.$parent);
					} else {
						return vm;
					}
				};
				var panel = getParent(this);
				var transfer = panel.$parent || panel;
				return panel.renderContent ? panel.renderContent(h, this.option) : transfer.$scopedSlots.default ? transfer.$scopedSlots.default({ option: this.option }) : h('span', [' ', this.option[panel.labelProp] || this.option[panel.keyProp], ' ']);
			}
		}
	},

	props: {
		data: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		renderContent: Function,
		placeholder: String,
		title: String,
		filterable: Boolean,
		format: Object,
		filterMethod: Function,
		defaultChecked: Array,
		props: Object
	},

	data: function data() {
		return {
			checked: [],
			allChecked: false,
			query: '',
			inputHover: false,
			checkChangeByUser: true
		};
	},


	watch: {
		checked: function checked(val, oldVal) {
			this.updateAllChecked();
			if (this.checkChangeByUser) {
				var movedKeys = val.concat(oldVal).filter(function (v) {
					return val.indexOf(v) === -1 || oldVal.indexOf(v) === -1;
				});
				this.$emit('checked-change', val, movedKeys);
			} else {
				this.$emit('checked-change', val);
				this.checkChangeByUser = true;
			}
		},
		data: function data() {
			var _this = this;

			var checked = [];
			var filteredDataKeys = this.filteredData.map(function (item) {
				return item[_this.keyProp];
			});
			this.checked.forEach(function (item) {
				if (filteredDataKeys.indexOf(item) > -1) {
					checked.push(item);
				}
			});
			this.checkChangeByUser = false;
			this.checked = checked;
		},
		checkableData: function checkableData() {
			this.updateAllChecked();
		},


		defaultChecked: {
			immediate: true,
			handler: function handler(val, oldVal) {
				var _this2 = this;

				if (oldVal && val.length === oldVal.length && val.every(function (item) {
					return oldVal.indexOf(item) > -1;
				})) return;
				var checked = [];
				var checkableDataKeys = this.checkableData.map(function (item) {
					return item[_this2.keyProp];
				});
				val.forEach(function (item) {
					if (checkableDataKeys.indexOf(item) > -1) {
						checked.push(item);
					}
				});
				this.checkChangeByUser = false;
				this.checked = checked;
			}
		}
	},

	computed: {
		filteredData: function filteredData() {
			var _this3 = this;

			return this.data.filter(function (item) {
				if (typeof _this3.filterMethod === 'function') {
					return _this3.filterMethod(_this3.query, item);
				} else {
					var label = item[_this3.labelProp] || item[_this3.keyProp].toString();
					return label.toLowerCase().indexOf(_this3.query.toLowerCase()) > -1;
				}
			});
		},
		checkableData: function checkableData() {
			var _this4 = this;

			return this.filteredData.filter(function (item) {
				return !item[_this4.disabledProp];
			});
		},
		checkedSummary: function checkedSummary() {
			var checkedLength = this.checked.length;
			var dataLength = this.data.length;
			var _format = this.format,
			    noChecked = _format.noChecked,
			    hasChecked = _format.hasChecked;

			if (noChecked && hasChecked) {
				return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength) : noChecked.replace(/\${total}/g, dataLength);
			} else {
				return checkedLength + '/' + dataLength;
			}
		},
		isIndeterminate: function isIndeterminate() {
			var checkedLength = this.checked.length;
			return checkedLength > 0 && checkedLength < this.checkableData.length;
		},
		hasNoMatch: function hasNoMatch() {
			return this.query.length > 0 && this.filteredData.length === 0;
		},
		inputIcon: function inputIcon() {
			return this.query.length > 0 && this.inputHover ? 'circle-close' : 'search';
		},
		labelProp: function labelProp() {
			return this.props.label || 'label';
		},
		keyProp: function keyProp() {
			return this.props.key || 'key';
		},
		disabledProp: function disabledProp() {
			return this.props.disabled || 'disabled';
		},
		hasFooter: function hasFooter() {
			return !!this.$slots.default;
		}
	},

	methods: {
		updateAllChecked: function updateAllChecked() {
			var _this5 = this;

			var checkableDataKeys = this.checkableData.map(function (item) {
				return item[_this5.keyProp];
			});
			this.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every(function (item) {
				return _this5.checked.indexOf(item) > -1;
			});
		},
		handleAllCheckedChange: function handleAllCheckedChange(value) {
			var _this6 = this;

			this.checked = value ? this.checkableData.map(function (item) {
				return item[_this6.keyProp];
			}) : [];
		},
		clearQuery: function clearQuery() {
			if (this.inputIcon === 'circle-close') {
				this.query = '';
			}
		}
	}
};

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_38702ec0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(22);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_38702ec0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 21:
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

/***/ 22:
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
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ 27:
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

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(5);

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

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

/***/ }),

/***/ 3:
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkbox = __webpack_require__(54);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_checkbox2.default.install = function (Vue) {
	Vue.component(_checkbox2.default.name, _checkbox2.default);
};

exports.default = _checkbox2.default;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _button = __webpack_require__(47);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_button2.default.install = function (Vue) {
	Vue.component(_button2.default.name, _button2.default);
};

exports.default = _button2.default;

/***/ }),

/***/ 34:
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
//
//
//
//
//
//
//
//
//
//
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
	name: 'KcButton',

	inject: {
		elForm: {
			default: ''
		},
		elFormItem: {
			default: ''
		}
	},

	props: {
		type: {
			type: String,
			default: 'default'
		},
		size: String,
		icon: {
			type: String,
			default: ''
		},
		nativeType: {
			type: String,
			default: 'button'
		},
		loading: Boolean,
		disabled: Boolean,
		plain: Boolean,
		autofocus: Boolean,
		round: Boolean,
		circle: Boolean
	},

	computed: {
		_elFormItemSize: function _elFormItemSize() {
			return (this.elFormItem || {}).elFormItemSize;
		},
		buttonSize: function buttonSize() {
			return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
		},
		buttonDisabled: function buttonDisabled() {
			return this.disabled || (this.elForm || {}).disabled;
		}
	},

	methods: {
		handleClick: function handleClick(evt) {
			this.$emit('click', evt);
		}
	}
};

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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcCheckbox',

	mixins: [_emitter2.default],

	inject: {
		elForm: {
			default: ''
		},
		elFormItem: {
			default: ''
		}
	},

	componentName: 'KcCheckbox',

	data: function data() {
		return {
			selfModel: false,
			focus: false,
			isLimitExceeded: false
		};
	},


	computed: {
		model: {
			get: function get() {
				return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
			},
			set: function set(val) {
				if (this.isGroup) {
					this.isLimitExceeded = false;
					this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);

					this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);

					this.isLimitExceeded === false && this.dispatch('KcCheckboxGroup', 'input', [val]);
				} else {
					this.$emit('input', val);
					this.selfModel = val;
				}
			}
		},

		isChecked: function isChecked() {
			if ({}.toString.call(this.model) === '[object Boolean]') {
				return this.model;
			} else if (Array.isArray(this.model)) {
				return this.model.indexOf(this.label) > -1;
			} else if (this.model !== null && this.model !== undefined) {
				return this.model === this.trueLabel;
			}
		},
		isGroup: function isGroup() {
			var parent = this.$parent;
			while (parent) {
				if (parent.$options.componentName !== 'KcCheckboxGroup') {
					parent = parent.$parent;
				} else {
					this._checkboxGroup = parent;
					return true;
				}
			}
			return false;
		},
		store: function store() {
			return this._checkboxGroup ? this._checkboxGroup.value : this.value;
		},
		isDisabled: function isDisabled() {
			return this.isGroup ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled : this.disabled || (this.elForm || {}).disabled;
		},
		_elFormItemSize: function _elFormItemSize() {
			return (this.elFormItem || {}).elFormItemSize;
		},
		checkboxSize: function checkboxSize() {
			var temCheckboxSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
			return this.isGroup ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize : temCheckboxSize;
		}
	},

	props: {
		value: {},
		label: {},
		indeterminate: Boolean,
		disabled: Boolean,
		checked: Boolean,
		name: String,
		trueLabel: [String, Number],
		falseLabel: [String, Number],
		id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
		controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
		border: Boolean,
		size: String,
		hasImg: Boolean,
		vModel: Boolean,
		src: String,
		title: String,
		description: String,
		inline: Boolean
	},

	methods: {
		addToStore: function addToStore() {
			if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
				this.model.push(this.label);
			} else {
				this.model = this.trueLabel || true;
			}
		},
		handleChange: function handleChange(ev) {
			var _this = this;

			if (this.isLimitExceeded) return;
			var value = void 0;
			if (ev.target.checked) {
				value = this.trueLabel === undefined ? true : this.trueLabel;
			} else {
				value = this.falseLabel === undefined ? false : this.falseLabel;
			}
			this.$emit('change', value, ev);
			this.$nextTick(function () {
				if (_this.isGroup) {
					_this.dispatch('KcCheckboxGroup', 'change', [_this._checkboxGroup.value]);
				}
			});
		}
	},

	created: function created() {
		this.checked && this.addToStore();
	},
	mounted: function mounted() {
		// 为indeterminate元素 添加aria-controls 属性
		if (this.indeterminate) {
			this.$el.setAttribute('aria-controls', this.controls);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _main = __webpack_require__(414);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
	Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_6cf43b00_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(417);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_6cf43b00_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_dc38fcb6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_transfer_panel_vue__ = __webpack_require__(416);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_dc38fcb6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_transfer_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-transfer-panel"},[_c('p',{staticClass:"kc-transfer-panel__header"},[_c('kc-checkbox',{attrs:{"indeterminate":_vm.isIndeterminate},on:{"change":_vm.handleAllCheckedChange},model:{value:(_vm.allChecked),callback:function ($$v) {_vm.allChecked=$$v},expression:"allChecked"}},[_c('span',[_vm._v(_vm._s(_vm.checkedSummary))]),_c('label',[_vm._v(_vm._s(_vm.title))])])],1),_c('div',{class:['kc-transfer-panel__body', _vm.hasFooter ? 'is-with-footer' : '']},[(_vm.filterable)?_c('kc-input',{staticClass:"kc-transfer-panel__filter",attrs:{"size":"small","placeholder":_vm.placeholder},nativeOn:{"mouseenter":function($event){_vm.inputHover = true},"mouseleave":function($event){_vm.inputHover = false}},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}},[_c('i',{class:['kc-input__icon', 'kc-icon-' + _vm.inputIcon],attrs:{"slot":"suffix"},on:{"click":_vm.clearQuery},slot:"suffix"})]):_vm._e(),_c('kc-checkbox-group',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasNoMatch && _vm.data.length > 0),expression:"!hasNoMatch && data.length > 0"}],staticClass:"kc-transfer-panel__list",class:{ 'is-filterable': _vm.filterable },model:{value:(_vm.checked),callback:function ($$v) {_vm.checked=$$v},expression:"checked"}},_vm._l((_vm.filteredData),function(item){return _c('kc-checkbox',{key:item[_vm.keyProp],staticClass:"kc-transfer-panel__item",attrs:{"label":item[_vm.keyProp],"disabled":item[_vm.disabledProp]}},[_c('option-content',{attrs:{"option":item}})],1)})),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasNoMatch),expression:"hasNoMatch"}],staticClass:"kc-transfer-panel__empty"},[_vm._v(_vm._s(_vm.t('el.transfer.noMatch')))]),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.length === 0 && !_vm.hasNoMatch),expression:"data.length === 0 && !hasNoMatch"}],staticClass:"kc-transfer-panel__empty"},[_vm._v(_vm._s(_vm.t('el.transfer.noData')))])],1),(_vm.hasFooter)?_c('p',{staticClass:"kc-transfer-panel__footer"},[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-transfer"},[_c('transfer-panel',_vm._b({ref:"leftPanel",attrs:{"data":_vm.sourceData,"title":_vm.titles[0] || _vm.t('el.transfer.titles.0'),"default-checked":_vm.leftDefaultChecked,"placeholder":_vm.filterPlaceholder || _vm.t('el.transfer.filterPlaceholder')},on:{"checked-change":_vm.onSourceCheckedChange}},'transfer-panel',_vm.$props,false),[_vm._t("left-footer")],2),_c('div',{staticClass:"kc-transfer__buttons"},[_c('kc-button',{class:['kc-transfer__button', _vm.hasButtonTexts ? 'is-with-texts' : ''],attrs:{"type":"primary","disabled":_vm.rightChecked.length === 0},nativeOn:{"click":function($event){return _vm.addToLeft($event)}}},[_c('i',{staticClass:"kc-icon-arrow-left"}),(_vm.buttonTexts[0] !== undefined)?_c('span',[_vm._v(_vm._s(_vm.buttonTexts[0]))]):_vm._e()]),_c('kc-button',{class:['kc-transfer__button', _vm.hasButtonTexts ? 'is-with-texts' : ''],attrs:{"type":"primary","disabled":_vm.leftChecked.length === 0},nativeOn:{"click":function($event){return _vm.addToRight($event)}}},[(_vm.buttonTexts[1] !== undefined)?_c('span',[_vm._v(_vm._s(_vm.buttonTexts[1]))]):_vm._e(),_c('i',{staticClass:"kc-icon-arrow-right"})])],1),_c('transfer-panel',_vm._b({ref:"rightPanel",attrs:{"data":_vm.targetData,"title":_vm.titles[1] || _vm.t('el.transfer.titles.1'),"default-checked":_vm.rightDefaultChecked,"placeholder":_vm.filterPlaceholder || _vm.t('el.transfer.filterPlaceholder')},on:{"checked-change":_vm.onTargetCheckedChange}},'transfer-panel',_vm.$props,false),[_vm._t("right-footer")],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_0bfa2cb2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(48);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_0bfa2cb2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"kc-button",class:[
		_vm.type ? 'kc-button--' + _vm.type : '',
		_vm.buttonSize ? 'kc-button--' + _vm.buttonSize : '',
		{
			'is-disabled': _vm.buttonDisabled,
			'is-loading': _vm.loading,
			'is-plain': _vm.plain,
			'is-round': _vm.round,
			'is-circle': _vm.circle
		}
	],attrs:{"disabled":_vm.buttonDisabled || _vm.loading,"autofocus":_vm.autofocus,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('i',{staticClass:"kc-icon-loading"}):_vm._e(),(_vm.icon && !_vm.loading)?_c('i',{class:_vm.icon}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_2d4277a4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(55);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_2d4277a4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasImg===true)?_c('div',{class:[
		'kc-img-checkbox', 
		_vm.isChecked ? 'is-checked' : '',
		_vm.inline ? 'kc-img-checkbox-inline':'kc-img-checkbox-block']},[_c('div',{staticClass:"kc-img-checkbox-item"},[_c('label',{staticClass:"kc-checkbox",class:[
				_vm.border && _vm.checkboxSize ? 'kc-checkbox--' + _vm.checkboxSize : '',
				{ 'is-disabled': _vm.isDisabled },
				{ 'is-bordered': _vm.border },
				{ 'is-checked': _vm.isChecked }
			],attrs:{"role":"checkbox","aria-checked":_vm.indeterminate ? 'mixed': _vm.isChecked,"aria-disabled":_vm.isDisabled,"id":_vm.id}},[_c('span',{staticClass:"kc-checkbox__input",class:{
					'is-disabled': _vm.isDisabled,
					'is-checked': _vm.isChecked,
					'is-indeterminate': _vm.indeterminate,
					'is-focus': _vm.focus
				},attrs:{"aria-checked":"mixed"}},[_c('span',{staticClass:"kc-checkbox__inner"}),(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"kc-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"kc-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","disabled":_vm.isDisabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}})])])]),_c('div',{staticClass:"kc-img-checkbox-item"},[_c('img',{staticClass:"checkbox-img",attrs:{"src":_vm.src}})]),_c('div',{staticClass:"kc-img-checkbox-item"},[(_vm.title)?_c('div',{staticClass:"kc-img-checkbox-item-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),(_vm.description)?_c('div',{staticClass:"kc-img-checkbox-item-desc"},[_vm._v(_vm._s(_vm.description))]):_vm._e()])]):_c('label',{staticClass:"kc-checkbox",class:[
			_vm.border && _vm.checkboxSize ? 'kc-checkbox--' + _vm.checkboxSize : '',
			{ 'is-disabled': _vm.isDisabled },
			{ 'is-bordered': _vm.border },
			{ 'is-checked': _vm.isChecked }
		],attrs:{"role":"checkbox","aria-checked":_vm.indeterminate ? 'mixed': _vm.isChecked,"aria-disabled":_vm.isDisabled,"id":_vm.id}},[_c('span',{staticClass:"kc-checkbox__input",class:{
				'is-disabled': _vm.isDisabled,
				'is-checked': _vm.isChecked,
				'is-indeterminate': _vm.indeterminate,
				'is-focus': _vm.focus
			},attrs:{"aria-checked":"mixed"}},[_c('span',{staticClass:"kc-checkbox__inner"}),(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"kc-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"kc-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","disabled":_vm.isDisabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}})]),(_vm.$slots.default || _vm.label)?_c('span',{staticClass:"kc-checkbox__label"},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcCheckboxGroup',

	componentName: 'KcCheckboxGroup',

	mixins: [_emitter2.default],

	inject: {
		elFormItem: {
			default: ''
		}
	},

	props: {
		value: {},
		disabled: Boolean,
		min: Number,
		max: Number,
		size: String,
		fill: String,
		textColor: String
	},

	computed: {
		_elFormItemSize: function _elFormItemSize() {
			return (this.elFormItem || {}).elFormItemSize;
		},
		checkboxGroupSize: function checkboxGroupSize() {
			return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
		}
	},

	watch: {
		value: function value(_value) {
			this.dispatch('KcFormItem', 'el.form.change', [_value]);
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkboxGroup = __webpack_require__(84);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_checkboxGroup2.default.install = function (Vue) {
	Vue.component(_checkboxGroup2.default.name, _checkboxGroup2.default);
};

exports.default = _checkboxGroup2.default;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1a73fa7a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__ = __webpack_require__(85);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1a73fa7a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-checkbox-group",attrs:{"role":"group","aria-label":"checkbox-group"}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

/******/ });