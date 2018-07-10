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
/******/ 	return __webpack_require__(__webpack_require__.s = 247);
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

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _color = __webpack_require__(122);

var _color2 = _interopRequireDefault(_color);

var _pickerDropdown = __webpack_require__(249);

var _pickerDropdown2 = _interopRequireDefault(_pickerDropdown);

var _clickoutside = __webpack_require__(20);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcColorPicker',

	props: {
		value: String,
		showAlpha: Boolean,
		colorFormat: String,
		disabled: Boolean,
		size: String,
		popperClass: String,
		predefine: Array
	},

	inject: {
		elForm: {
			default: ''
		},
		elFormItem: {
			default: ''
		}
	},

	directives: { Clickoutside: _clickoutside2.default },

	computed: {
		displayedColor: function displayedColor() {
			if (!this.value && !this.showPanelColor) {
				return 'transparent';
			}

			return this.displayedRgb(this.color, this.showAlpha);
		},
		_elFormItemSize: function _elFormItemSize() {
			return (this.elFormItem || {}).elFormItemSize;
		},
		colorSize: function colorSize() {
			return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
		},
		colorDisabled: function colorDisabled() {
			return this.disabled || (this.elForm || {}).disabled;
		}
	},

	watch: {
		value: function value(val) {
			if (!val) {
				this.showPanelColor = false;
			} else if (val && val !== this.color.value) {
				this.color.fromString(val);
			}
		},

		color: {
			deep: true,
			handler: function handler() {
				this.showPanelColor = true;
			}
		},
		displayedColor: function displayedColor(val) {
			var currentValueColor = new _color2.default({
				enableAlpha: this.showAlpha,
				format: this.colorFormat
			});
			currentValueColor.fromString(this.value);

			var currentValueColorRgb = this.displayedRgb(currentValueColor, this.showAlpha);
			if (val !== currentValueColorRgb) {
				this.$emit('active-change', val);
			}
		}
	},

	methods: {
		handleTrigger: function handleTrigger() {
			if (this.colorDisabled) return;
			this.isOpen = !this.isOpen;
			this.showPicker = !this.showPicker;
		},
		confirmValue: function confirmValue(value) {
			this.$emit('input', this.color.value);
			this.$emit('change', this.color.value);
			this.showPicker = false;
		},
		clearValue: function clearValue() {
			this.$emit('input', null);
			this.$emit('change', null);
			this.showPanelColor = false;
			this.showPicker = false;
			this.resetColor();
		},
		hide: function hide() {
			this.showPicker = false;
			this.resetColor();
		},
		resetColor: function resetColor() {
			var _this = this;

			this.$nextTick(function (_) {
				if (_this.value) {
					_this.color.fromString(_this.value);
				} else {
					_this.showPanelColor = false;
				}
			});
		},
		displayedRgb: function displayedRgb(color, showAlpha) {
			if (!(color instanceof _color2.default)) {
				throw Error('color should be instance of Color Class');
			}

			var _color$toRgb = color.toRgb(),
			    r = _color$toRgb.r,
			    g = _color$toRgb.g,
			    b = _color$toRgb.b;

			return showAlpha ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + color.get('alpha') / 100 + ')' : 'rgb(' + r + ', ' + g + ', ' + b + ')';
		}
	},

	mounted: function mounted() {
		var value = this.value;
		if (value) {
			this.color.fromString(value);
		}
		this.popperElm = this.$refs.dropdown.$el;
	},
	data: function data() {
		var color = new _color2.default({
			enableAlpha: this.showAlpha,
			format: this.colorFormat
		});
		return {
			color: color,
			showPicker: false,
			showPanelColor: false,
			isOpen: false
		};
	},


	components: {
		PickerDropdown: _pickerDropdown2.default
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

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(3);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hsv2hsl = function hsv2hsl(hue, sat, val) {
	return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
};

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
var isOnePointZero = function isOnePointZero(n) {
	return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
};

var isPercentage = function isPercentage(n) {
	return typeof n === 'string' && n.indexOf('%') !== -1;
};

// Take input from [0, n] and return it as [0, 1]
var bound01 = function bound01(value, max) {
	if (isOnePointZero(value)) value = '100%';

	var processPercent = isPercentage(value);
	value = Math.min(max, Math.max(0, parseFloat(value)));

	// Automatically convert percentage into number
	if (processPercent) {
		value = parseInt(value * max, 10) / 100;
	}

	// Handle floating point rounding errors
	if (Math.abs(value - max) < 0.000001) {
		return 1;
	}

	// Convert into [0, 1] range if it isn't already
	return value % max / parseFloat(max);
};

var INT_HEX_MAP = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

var toHex = function toHex(_ref) {
	var r = _ref.r,
	    g = _ref.g,
	    b = _ref.b;

	var hexOne = function hexOne(value) {
		value = Math.min(Math.round(value), 255);
		var high = Math.floor(value / 16);
		var low = value % 16;
		return '' + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low);
	};

	if (isNaN(r) || isNaN(g) || isNaN(b)) return '';

	return '#' + hexOne(r) + hexOne(g) + hexOne(b);
};

var HEX_INT_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

var parseHexChannel = function parseHexChannel(hex) {
	if (hex.length === 2) {
		return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
	}

	return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};

var hsl2hsv = function hsl2hsv(hue, sat, light) {
	sat = sat / 100;
	light = light / 100;
	var smin = sat;
	var lmin = Math.max(light, 0.01);
	var sv = void 0;
	var v = void 0;

	light *= 2;
	sat *= light <= 1 ? light : 2 - light;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (light + sat) / 2;
	sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);

	return {
		h: hue,
		s: sv * 100,
		v: v * 100
	};
};

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
var rgb2hsv = function rgb2hsv(r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);

	var max = Math.max(r, g, b);
	var min = Math.min(r, g, b);
	var h = void 0,
	    s = void 0;
	var v = max;

	var d = max - min;
	s = max === 0 ? 0 : d / max;

	if (max === min) {
		h = 0; // achromatic
	} else {
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

	return { h: h * 360, s: s * 100, v: v * 100 };
};

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
var hsv2rgb = function hsv2rgb(h, s, v) {
	h = bound01(h, 360) * 6;
	s = bound01(s, 100);
	v = bound01(v, 100);

	var i = Math.floor(h);
	var f = h - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
	var mod = i % 6;
	var r = [v, q, p, p, t, v][mod];
	var g = [t, v, v, q, p, p][mod];
	var b = [p, p, t, v, v, q][mod];

	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255)
	};
};

var Color = function () {
	function Color(options) {
		(0, _classCallCheck3.default)(this, Color);

		this._hue = 0;
		this._saturation = 100;
		this._value = 100;
		this._alpha = 100;

		this.enableAlpha = false;
		this.format = 'hex';
		this.value = '';

		options = options || {};

		for (var option in options) {
			if (options.hasOwnProperty(option)) {
				this[option] = options[option];
			}
		}

		this.doOnChange();
	}

	(0, _createClass3.default)(Color, [{
		key: 'set',
		value: function set(prop, value) {
			if (arguments.length === 1 && (typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop)) === 'object') {
				for (var p in prop) {
					if (prop.hasOwnProperty(p)) {
						this.set(p, prop[p]);
					}
				}

				return;
			}

			this['_' + prop] = value;
			this.doOnChange();
		}
	}, {
		key: 'get',
		value: function get(prop) {
			return this['_' + prop];
		}
	}, {
		key: 'toRgb',
		value: function toRgb() {
			return hsv2rgb(this._hue, this._saturation, this._value);
		}
	}, {
		key: 'fromString',
		value: function fromString(value) {
			var _this = this;

			if (!value) {
				this._hue = 0;
				this._saturation = 100;
				this._value = 100;

				this.doOnChange();
				return;
			}

			var fromHSV = function fromHSV(h, s, v) {
				_this._hue = Math.max(0, Math.min(360, h));
				_this._saturation = Math.max(0, Math.min(100, s));
				_this._value = Math.max(0, Math.min(100, v));

				_this.doOnChange();
			};

			if (value.indexOf('hsl') !== -1) {
				var parts = value.replace(/hsla|hsl|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
					return val !== '';
				}).map(function (val, index) {
					return index > 2 ? parseFloat(val) : parseInt(val, 10);
				});

				if (parts.length === 4) {
					this._alpha = Math.floor(parseFloat(parts[3]) * 100);
				} else if (parts.length === 3) {
					this._alpha = 100;
				}
				if (parts.length >= 3) {
					var _hsl2hsv = hsl2hsv(parts[0], parts[1], parts[2]),
					    h = _hsl2hsv.h,
					    s = _hsl2hsv.s,
					    v = _hsl2hsv.v;

					fromHSV(h, s, v);
				}
			} else if (value.indexOf('hsv') !== -1) {
				var _parts = value.replace(/hsva|hsv|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
					return val !== '';
				}).map(function (val, index) {
					return index > 2 ? parseFloat(val) : parseInt(val, 10);
				});

				if (_parts.length === 4) {
					this._alpha = Math.floor(parseFloat(_parts[3]) * 100);
				} else if (_parts.length === 3) {
					this._alpha = 100;
				}
				if (_parts.length >= 3) {
					fromHSV(_parts[0], _parts[1], _parts[2]);
				}
			} else if (value.indexOf('rgb') !== -1) {
				var _parts2 = value.replace(/rgba|rgb|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
					return val !== '';
				}).map(function (val, index) {
					return index > 2 ? parseFloat(val) : parseInt(val, 10);
				});

				if (_parts2.length === 4) {
					this._alpha = Math.floor(parseFloat(_parts2[3]) * 100);
				} else if (_parts2.length === 3) {
					this._alpha = 100;
				}
				if (_parts2.length >= 3) {
					var _rgb2hsv = rgb2hsv(_parts2[0], _parts2[1], _parts2[2]),
					    _h = _rgb2hsv.h,
					    _s = _rgb2hsv.s,
					    _v = _rgb2hsv.v;

					fromHSV(_h, _s, _v);
				}
			} else if (value.indexOf('#') !== -1) {
				var hex = value.replace('#', '').trim();
				var r = void 0,
				    g = void 0,
				    b = void 0;

				if (hex.length === 3) {
					r = parseHexChannel(hex[0] + hex[0]);
					g = parseHexChannel(hex[1] + hex[1]);
					b = parseHexChannel(hex[2] + hex[2]);
				} else if (hex.length === 6 || hex.length === 8) {
					r = parseHexChannel(hex.substring(0, 2));
					g = parseHexChannel(hex.substring(2, 4));
					b = parseHexChannel(hex.substring(4, 6));
				}

				if (hex.length === 8) {
					this._alpha = Math.floor(parseHexChannel(hex.substring(6)) / 255 * 100);
				} else if (hex.length === 3 || hex.length === 6) {
					this._alpha = 100;
				}

				var _rgb2hsv2 = rgb2hsv(r, g, b),
				    _h2 = _rgb2hsv2.h,
				    _s2 = _rgb2hsv2.s,
				    _v2 = _rgb2hsv2.v;

				fromHSV(_h2, _s2, _v2);
			}
		}
	}, {
		key: 'compare',
		value: function compare(color) {
			return Math.abs(color._hue - this._hue) < 2 && Math.abs(color._saturation - this._saturation) < 1 && Math.abs(color._value - this._value) < 1 && Math.abs(color._alpha - this._alpha) < 1;
		}
	}, {
		key: 'doOnChange',
		value: function doOnChange() {
			var _hue = this._hue,
			    _saturation = this._saturation,
			    _value = this._value,
			    _alpha = this._alpha,
			    format = this.format;


			if (this.enableAlpha) {
				switch (format) {
					case 'hsl':
						var hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
						this.value = 'hsla(' + _hue + ', ' + Math.round(hsl[1] * 100) + '%, ' + Math.round(hsl[2] * 100) + '%, ' + _alpha / 100 + ')';
						break;
					case 'hsv':
						this.value = 'hsva(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%, ' + _alpha / 100 + ')';
						break;
					default:
						var _hsv2rgb = hsv2rgb(_hue, _saturation, _value),
						    r = _hsv2rgb.r,
						    g = _hsv2rgb.g,
						    b = _hsv2rgb.b;

						this.value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + _alpha / 100 + ')';
				}
			} else {
				switch (format) {
					case 'hsl':
						var _hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
						this.value = 'hsl(' + _hue + ', ' + Math.round(_hsl[1] * 100) + '%, ' + Math.round(_hsl[2] * 100) + '%)';
						break;
					case 'hsv':
						this.value = 'hsv(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%)';
						break;
					case 'rgb':
						var _hsv2rgb2 = hsv2rgb(_hue, _saturation, _value),
						    _r = _hsv2rgb2.r,
						    _g = _hsv2rgb2.g,
						    _b = _hsv2rgb2.b;

						this.value = 'rgb(' + _r + ', ' + _g + ', ' + _b + ')';
						break;
					default:
						this.value = toHex(hsv2rgb(_hue, _saturation, _value));
				}
			}
		}
	}]);
	return Color;
}();

exports.default = Color;
;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svPanel = __webpack_require__(250);

var _svPanel2 = _interopRequireDefault(_svPanel);

var _hueSlider = __webpack_require__(252);

var _hueSlider2 = _interopRequireDefault(_hueSlider);

var _alphaSlider = __webpack_require__(254);

var _alphaSlider2 = _interopRequireDefault(_alphaSlider);

var _predefine = __webpack_require__(256);

var _predefine2 = _interopRequireDefault(_predefine);

var _vuePopper = __webpack_require__(15);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _locale = __webpack_require__(12);

var _locale2 = _interopRequireDefault(_locale);

var _input = __webpack_require__(13);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(36);

var _button2 = _interopRequireDefault(_button);

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

exports.default = {
	name: 'kc-color-picker-dropdown',

	mixins: [_vuePopper2.default, _locale2.default],

	components: {
		SvPanel: _svPanel2.default,
		HueSlider: _hueSlider2.default,
		AlphaSlider: _alphaSlider2.default,
		KcInput: _input2.default,
		KcButton: _button2.default,
		Predefine: _predefine2.default
	},

	props: {
		color: {
			required: true
		},
		showAlpha: Boolean,
		predefine: Array
	},

	data: function data() {
		return {
			customInput: ''
		};
	},


	computed: {
		currentColor: function currentColor() {
			var parent = this.$parent;
			return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
		}
	},

	methods: {
		confirmValue: function confirmValue() {
			this.$emit('pick');
		},
		handleConfirm: function handleConfirm() {
			this.color.fromString(this.customInput);
		}
	},

	mounted: function mounted() {
		this.$parent.popperElm = this.popperElm = this.$el;
		this.referenceElm = this.$parent.$el;
	},


	watch: {
		showPopper: function showPopper(val) {
			var _this = this;

			if (val === true) {
				this.$nextTick(function () {
					var _$refs = _this.$refs,
					    sl = _$refs.sl,
					    hue = _$refs.hue,
					    alpha = _$refs.alpha;

					sl && sl.update();
					hue && hue.update();
					alpha && alpha.update();
				});
			}
		},
		currentColor: function currentColor(val) {
			this.customInput = val;
		}
	}
};

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _draggable = __webpack_require__(88);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'kc-sl-panel',

	props: {
		color: {
			required: true
		}
	},

	computed: {
		colorValue: function colorValue() {
			var hue = this.color.get('hue');
			var value = this.color.get('value');
			return { hue: hue, value: value };
		}
	},

	watch: {
		colorValue: function colorValue() {
			this.update();
		}
	},

	methods: {
		update: function update() {
			var saturation = this.color.get('saturation');
			var value = this.color.get('value');

			var el = this.$el;

			var _el$getBoundingClient = el.getBoundingClientRect(),
			    width = _el$getBoundingClient.width,
			    height = _el$getBoundingClient.height;

			if (!height) height = width * 3 / 4;

			this.cursorLeft = saturation * width / 100;
			this.cursorTop = (100 - value) * height / 100;

			this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)';
		},
		handleDrag: function handleDrag(event) {
			var el = this.$el;
			var rect = el.getBoundingClientRect();

			var left = event.clientX - rect.left;
			var top = event.clientY - rect.top;
			left = Math.max(0, left);
			left = Math.min(left, rect.width);

			top = Math.max(0, top);
			top = Math.min(top, rect.height);

			this.cursorLeft = left;
			this.cursorTop = top;
			this.color.set({
				saturation: left / rect.width * 100,
				value: 100 - top / rect.height * 100
			});
		}
	},

	mounted: function mounted() {
		var _this = this;

		(0, _draggable2.default)(this.$el, {
			drag: function drag(event) {
				_this.handleDrag(event);
			},
			end: function end(event) {
				_this.handleDrag(event);
			}
		});

		this.update();
	},
	data: function data() {
		return {
			cursorTop: 0,
			cursorLeft: 0,
			background: 'hsl(0, 100%, 50%)'
		};
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

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _draggable = __webpack_require__(88);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'kc-color-hue-slider',

	props: {
		color: {
			required: true
		},

		vertical: Boolean
	},

	data: function data() {
		return {
			thumbLeft: 0,
			thumbTop: 0
		};
	},


	computed: {
		hueValue: function hueValue() {
			var hue = this.color.get('hue');
			return hue;
		}
	},

	watch: {
		hueValue: function hueValue() {
			this.update();
		}
	},

	methods: {
		handleClick: function handleClick(event) {
			var thumb = this.$refs.thumb;
			var target = event.target;

			if (target !== thumb) {
				this.handleDrag(event);
			}
		},
		handleDrag: function handleDrag(event) {
			var rect = this.$el.getBoundingClientRect();
			var thumb = this.$refs.thumb;

			var hue = void 0;

			if (!this.vertical) {
				var left = event.clientX - rect.left;
				left = Math.min(left, rect.width - thumb.offsetWidth / 2);
				left = Math.max(thumb.offsetWidth / 2, left);

				hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
			} else {
				var top = event.clientY - rect.top;
				top = Math.min(top, rect.height - thumb.offsetHeight / 2);
				top = Math.max(thumb.offsetHeight / 2, top);

				hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
			}

			this.color.set('hue', hue);
		},
		getThumbLeft: function getThumbLeft() {
			if (this.vertical) return 0;
			var el = this.$el;
			var hue = this.color.get('hue');

			if (!el) return 0;
			var thumb = this.$refs.thumb;
			return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
		},
		getThumbTop: function getThumbTop() {
			if (!this.vertical) return 0;
			var el = this.$el;
			var hue = this.color.get('hue');

			if (!el) return 0;
			var thumb = this.$refs.thumb;
			return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
		},
		update: function update() {
			this.thumbLeft = this.getThumbLeft();
			this.thumbTop = this.getThumbTop();
		}
	},

	mounted: function mounted() {
		var _this = this;

		var _$refs = this.$refs,
		    bar = _$refs.bar,
		    thumb = _$refs.thumb;


		var dragConfig = {
			drag: function drag(event) {
				_this.handleDrag(event);
			},
			end: function end(event) {
				_this.handleDrag(event);
			}
		};

		(0, _draggable2.default)(bar, dragConfig);
		(0, _draggable2.default)(thumb, dragConfig);
		this.update();
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

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _draggable = __webpack_require__(88);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'kc-color-alpha-slider',

	props: {
		color: {
			required: true
		},
		vertical: Boolean
	},

	watch: {
		'color._alpha': function color_alpha() {
			this.update();
		},
		'color.value': function colorValue() {
			this.update();
		}
	},

	methods: {
		handleClick: function handleClick(event) {
			var thumb = this.$refs.thumb;
			var target = event.target;

			if (target !== thumb) {
				this.handleDrag(event);
			}
		},
		handleDrag: function handleDrag(event) {
			var rect = this.$el.getBoundingClientRect();
			var thumb = this.$refs.thumb;


			if (!this.vertical) {
				var left = event.clientX - rect.left;
				left = Math.max(thumb.offsetWidth / 2, left);
				left = Math.min(left, rect.width - thumb.offsetWidth / 2);

				this.color.set('alpha', Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100));
			} else {
				var top = event.clientY - rect.top;
				top = Math.max(thumb.offsetHeight / 2, top);
				top = Math.min(top, rect.height - thumb.offsetHeight / 2);

				this.color.set('alpha', Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 100));
			}
		},
		getThumbLeft: function getThumbLeft() {
			if (this.vertical) return 0;
			var el = this.$el;
			var alpha = this.color._alpha;

			if (!el) return 0;
			var thumb = this.$refs.thumb;
			return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
		},
		getThumbTop: function getThumbTop() {
			if (!this.vertical) return 0;
			var el = this.$el;
			var alpha = this.color._alpha;

			if (!el) return 0;
			var thumb = this.$refs.thumb;
			return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
		},
		getBackground: function getBackground() {
			if (this.color && this.color.value) {
				var _color$toRgb = this.color.toRgb(),
				    r = _color$toRgb.r,
				    g = _color$toRgb.g,
				    b = _color$toRgb.b;

				return 'linear-gradient(to right, rgba(' + r + ', ' + g + ', ' + b + ', 0) 0%, rgba(' + r + ', ' + g + ', ' + b + ', 1) 100%)';
			}
			return null;
		},
		update: function update() {
			this.thumbLeft = this.getThumbLeft();
			this.thumbTop = this.getThumbTop();
			this.background = this.getBackground();
		}
	},

	data: function data() {
		return {
			thumbLeft: 0,
			thumbTop: 0,
			background: null
		};
	},
	mounted: function mounted() {
		var _this = this;

		var _$refs = this.$refs,
		    bar = _$refs.bar,
		    thumb = _$refs.thumb;


		var dragConfig = {
			drag: function drag(event) {
				_this.handleDrag(event);
			},
			end: function end(event) {
				_this.handleDrag(event);
			}
		};

		(0, _draggable2.default)(bar, dragConfig);
		(0, _draggable2.default)(thumb, dragConfig);
		this.update();
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

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _color = __webpack_require__(122);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	props: {
		colors: { type: Array, required: true },
		color: { required: true }
	},
	data: function data() {
		return {
			rgbaColors: this.parseColors(this.colors, this.color)
		};
	},

	methods: {
		handleSelect: function handleSelect(index) {
			this.color.fromString(this.colors[index]);
		},
		parseColors: function parseColors(colors, color) {
			return colors.map(function (value) {
				var c = new _color2.default();
				c.enableAlpha = true;
				c.format = 'rgba';
				c.fromString(value);
				c.selected = c.value === color.value;
				return c;
			});
		}
	},
	watch: {
		'$parent.currentColor': function $parentCurrentColor(val) {
			var color = new _color2.default();
			color.fromString(val);

			this.rgbaColors.forEach(function (item) {
				item.selected = color.compare(item);
			});
		},
		colors: function colors(newVal) {
			this.rgbaColors = this.parseColors(newVal, this.color);
		},
		color: function color(newVal) {
			this.rgbaColors = this.parseColors(this.colors, newVal);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_input_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_b8b27ae0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(25);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_b8b27ae0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
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

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _main = __webpack_require__(248);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
	Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_17b332ae_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(259);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_17b332ae_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_58023ed8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_picker_dropdown_vue__ = __webpack_require__(258);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_58023ed8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_picker_dropdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sv_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_687ea902_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_sv_panel_vue__ = __webpack_require__(251);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_sv_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_687ea902_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_sv_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-color-svpanel",style:({
        backgroundColor: _vm.background
      })},[_c('div',{staticClass:"kc-color-svpanel__white"}),_c('div',{staticClass:"kc-color-svpanel__black"}),_c('div',{staticClass:"kc-color-svpanel__cursor",style:({
        top: _vm.cursorTop + 'px',
        left: _vm.cursorLeft + 'px'
      })},[_c('div')])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_hue_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_23e58db4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_hue_slider_vue__ = __webpack_require__(253);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_hue_slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_23e58db4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_hue_slider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-color-hue-slider",class:{ 'is-vertical': _vm.vertical }},[_c('div',{ref:"bar",staticClass:"kc-color-hue-slider__bar",on:{"click":_vm.handleClick}}),_c('div',{ref:"thumb",staticClass:"kc-color-hue-slider__thumb",style:({
           left: _vm.thumbLeft + 'px',
           top: _vm.thumbTop + 'px'
         })})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_3c408126_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_alpha_slider_vue__ = __webpack_require__(255);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_3c408126_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_alpha_slider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-color-alpha-slider",class:{ 'is-vertical': _vm.vertical }},[_c('div',{ref:"bar",staticClass:"kc-color-alpha-slider__bar",style:({
           background: _vm.background
         }),on:{"click":_vm.handleClick}}),_c('div',{ref:"thumb",staticClass:"kc-color-alpha-slider__thumb",style:({
           left: _vm.thumbLeft + 'px',
           top: _vm.thumbTop + 'px'
         })})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_predefine_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_predefine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_predefine_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_predefine_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_predefine_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_dc0643ce_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_predefine_vue__ = __webpack_require__(257);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_predefine_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_dc0643ce_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_predefine_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-color-predefine"},[_c('div',{staticClass:"kc-color-predefine__colors"},_vm._l((_vm.rgbaColors),function(item,index){return _c('div',{key:_vm.colors[index],staticClass:"kc-color-predefine__color-selector",class:{selected: item.selected, 'is-alpha': item._alpha < 100},on:{"click":function($event){_vm.handleSelect(index)}}},[_c('div',{style:({'background-color': item.value})})])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"kc-zoom-in-top"},on:{"after-leave":_vm.doDestroy}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"kc-color-dropdown"},[_c('div',{staticClass:"kc-color-dropdown__main-wrapper"},[_c('hue-slider',{ref:"hue",staticStyle:{"float":"right"},attrs:{"color":_vm.color,"vertical":""}}),_c('sv-panel',{ref:"sl",attrs:{"color":_vm.color}})],1),(_vm.showAlpha)?_c('alpha-slider',{ref:"alpha",attrs:{"color":_vm.color}}):_vm._e(),(_vm.predefine)?_c('predefine',{attrs:{"color":_vm.color,"colors":_vm.predefine}}):_vm._e(),_c('div',{staticClass:"kc-color-dropdown__btns"},[_c('span',{staticClass:"kc-color-dropdown__value"},[_c('kc-input',{attrs:{"size":"mini"},on:{"blur":_vm.handleConfirm},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleConfirm($event)}},model:{value:(_vm.customInput),callback:function ($$v) {_vm.customInput=$$v},expression:"customInput"}})],1),_c('kc-button',{staticClass:"kc-color-dropdown__link-btn",attrs:{"size":"mini","type":"text"},on:{"click":function($event){_vm.$emit('clear')}}},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.t('el.colorpicker.clear'))+"\n\t\t\t\t")]),_c('kc-button',{staticClass:"kc-color-dropdown__btn",attrs:{"plain":"","size":"mini"},on:{"click":_vm.confirmValue}},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.t('el.colorpicker.confirm'))+"\n\t\t\t\t")])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.hide),expression:"hide"}],class:[
      'kc-color-picker',
      _vm.colorDisabled ? 'is-disabled' : '',
      _vm.colorSize ? ("kc-color-picker--" + _vm.colorSize) : ''
    ]},[(_vm.colorDisabled)?_c('div',{staticClass:"kc-color-picker__mask"}):_vm._e(),_c('div',{staticClass:"kc-color-picker__trigger",on:{"click":_vm.handleTrigger}},[_c('span',{staticClass:"kc-color-picker__color",class:{ 'is-alpha': _vm.showAlpha }},[_c('span',{staticClass:"kc-color-picker__color-inner",style:({
            backgroundColor: _vm.displayedColor
          })}),(!_vm.value && !_vm.showPanelColor)?_c('span',{staticClass:"kc-color-picker__empty kc-icon-close"}):_vm._e()]),(_vm.isOpen===false)?_c('span',{staticClass:"kc-color-picker__icon kc-icon-arrow-down"}):_c('span',{staticClass:"kc-color-picker__icon kc-icon-arrow-up"})]),_c('picker-dropdown',{ref:"dropdown",class:['kc-color-picker__panel', _vm.popperClass || ''],attrs:{"color":_vm.color,"show-alpha":_vm.showAlpha,"predefine":_vm.predefine},on:{"pick":_vm.confirmValue,"clear":_vm.clearValue},model:{value:(_vm.showPicker),callback:function ($$v) {_vm.showPicker=$$v},expression:"showPicker"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _button = __webpack_require__(49);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_button2.default.install = function (Vue) {
	Vue.component(_button2.default.name, _button2.default);
};

exports.default = _button2.default;

/***/ }),

/***/ 37:
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

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

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

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_button_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_e05b7f22_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(50);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_e05b7f22_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ 50:
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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (element, options) {
	if (_vue2.default.prototype.$isServer) return;
	var moveFn = function moveFn(event) {
		if (options.drag) {
			options.drag(event);
		}
	};
	var upFn = function upFn(event) {
		document.removeEventListener('mousemove', moveFn);
		document.removeEventListener('mouseup', upFn);
		document.onselectstart = null;
		document.ondragstart = null;

		isDragging = false;

		if (options.end) {
			options.end(event);
		}
	};
	element.addEventListener('mousedown', function (event) {
		if (isDragging) return;
		document.onselectstart = function () {
			return false;
		};
		document.ondragstart = function () {
			return false;
		};

		document.addEventListener('mousemove', moveFn);
		document.addEventListener('mouseup', upFn);
		isDragging = true;

		if (options.start) {
			options.start(event);
		}
	});
};

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDragging = false;

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

/***/ })

/******/ });