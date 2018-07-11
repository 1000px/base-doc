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
/******/ 	return __webpack_require__(__webpack_require__.s = 384);
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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkbox = __webpack_require__(35);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _debounce = __webpack_require__(27);

var _debounce2 = _interopRequireDefault(_debounce);

var _resizeEvent = __webpack_require__(26);

var _mousewheel = __webpack_require__(386);

var _mousewheel2 = _interopRequireDefault(_mousewheel);

var _locale = __webpack_require__(12);

var _locale2 = _interopRequireDefault(_locale);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

var _tableStore = __webpack_require__(388);

var _tableStore2 = _interopRequireDefault(_tableStore);

var _tableLayout = __webpack_require__(389);

var _tableLayout2 = _interopRequireDefault(_tableLayout);

var _tableBody = __webpack_require__(390);

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableHeader = __webpack_require__(391);

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _tableFooter = __webpack_require__(395);

var _tableFooter2 = _interopRequireDefault(_tableFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableIdSeed = 1; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'KcTable',

	mixins: [_locale2.default, _migrating2.default],

	directives: {
		Mousewheel: _mousewheel2.default
	},

	props: {
		data: {
			type: Array,
			default: function _default() {
				return [];
			}
		},

		size: String,

		width: [String, Number],

		height: [String, Number],

		maxHeight: [String, Number],

		fit: {
			type: Boolean,
			default: true
		},

		stripe: Boolean,

		border: Boolean,

		rowKey: [String, Function],

		context: {},

		showHeader: {
			type: Boolean,
			default: true
		},

		showSummary: Boolean,

		sumText: String,

		summaryMethod: Function,

		rowClassName: [String, Function],

		rowStyle: [Object, Function],

		cellClassName: [String, Function],

		cellStyle: [Object, Function],

		headerRowClassName: [String, Function],

		headerRowStyle: [Object, Function],

		headerCellClassName: [String, Function],

		headerCellStyle: [Object, Function],

		highlightCurrentRow: Boolean,

		currentRowKey: [String, Number],

		emptyText: String,

		expandRowKeys: Array,

		defaultExpandAll: Boolean,

		defaultSort: Object,

		tooltipEffect: String,

		spanMethod: Function,

		selectOnIndeterminate: {
			type: Boolean,
			default: true
		}
	},

	components: {
		TableHeader: _tableHeader2.default,
		TableFooter: _tableFooter2.default,
		TableBody: _tableBody2.default,
		KcCheckbox: _checkbox2.default
	},

	methods: {
		getMigratingConfig: function getMigratingConfig() {
			return {
				events: {
					expand: 'expand is renamed to expand-change'
				}
			};
		},
		setCurrentRow: function setCurrentRow(row) {
			this.store.commit('setCurrentRow', row);
		},
		toggleRowSelection: function toggleRowSelection(row, selected) {
			this.store.toggleRowSelection(row, selected);
			this.store.updateAllSelected();
		},
		toggleRowExpansion: function toggleRowExpansion(row, expanded) {
			this.store.toggleRowExpansion(row, expanded);
		},
		clearSelection: function clearSelection() {
			this.store.clearSelection();
		},
		clearFilter: function clearFilter() {
			this.store.clearFilter();
		},
		clearSort: function clearSort() {
			this.store.clearSort();
		},
		handleMouseLeave: function handleMouseLeave() {
			this.store.commit('setHoverRow', null);
			if (this.hoverState) this.hoverState = null;
		},
		updateScrollY: function updateScrollY() {
			this.layout.updateScrollY();
			this.layout.updateColumnsWidth();
		},
		handleFixedMousewheel: function handleFixedMousewheel(event, data) {
			var bodyWrapper = this.bodyWrapper;
			if (Math.abs(data.spinY) > 0) {
				var currentScrollTop = bodyWrapper.scrollTop;
				if (data.pixelY < 0 && currentScrollTop !== 0) {
					event.preventDefault();
				}
				if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
					event.preventDefault();
				}
				bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
			} else {
				bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
			}
		},
		handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
			var pixelX = data.pixelX,
			    pixelY = data.pixelY;

			if (Math.abs(pixelX) >= Math.abs(pixelY)) {
				event.preventDefault();
				this.bodyWrapper.scrollLeft += data.pixelX / 5;
			}
		},
		bindEvents: function bindEvents() {
			var _$refs = this.$refs,
			    headerWrapper = _$refs.headerWrapper,
			    footerWrapper = _$refs.footerWrapper;

			var refs = this.$refs;
			var self = this;

			this.bodyWrapper.addEventListener('scroll', function () {
				if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
				if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
				if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
				if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
				var maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1;
				var scrollLeft = this.scrollLeft;
				if (scrollLeft >= maxScrollLeftPosition) {
					self.scrollPosition = 'right';
				} else if (scrollLeft === 0) {
					self.scrollPosition = 'left';
				} else {
					self.scrollPosition = 'middle';
				}
			});

			if (this.fit) {
				(0, _resizeEvent.addResizeListener)(this.$el, this.resizeListener);
			}
		},
		resizeListener: function resizeListener() {
			if (!this.$ready) return;
			var shouldUpdateLayout = false;
			var el = this.$el;
			var _resizeState = this.resizeState,
			    oldWidth = _resizeState.width,
			    oldHeight = _resizeState.height;


			var width = el.offsetWidth;
			if (oldWidth !== width) {
				shouldUpdateLayout = true;
			}

			var height = el.offsetHeight;
			if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
				shouldUpdateLayout = true;
			}

			if (shouldUpdateLayout) {
				this.resizeState.width = width;
				this.resizeState.height = height;
				this.doLayout();
			}
		},
		doLayout: function doLayout() {
			this.layout.updateColumnsWidth();
			if (this.shouldUpdateHeight) {
				this.layout.updateElsHeight();
			}
		}
	},

	created: function created() {
		var _this = this;

		this.tableId = 'kc-table_' + tableIdSeed++;
		this.debouncedUpdateLayout = (0, _debounce2.default)(50, function () {
			return _this.doLayout();
		});
	},


	computed: {
		tableSize: function tableSize() {
			return this.size || (this.$ELEMENT || {}).size;
		},
		bodyWrapper: function bodyWrapper() {
			return this.$refs.bodyWrapper;
		},
		shouldUpdateHeight: function shouldUpdateHeight() {
			return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
		},
		selection: function selection() {
			return this.store.states.selection;
		},
		columns: function columns() {
			return this.store.states.columns;
		},
		tableData: function tableData() {
			return this.store.states.data;
		},
		fixedColumns: function fixedColumns() {
			return this.store.states.fixedColumns;
		},
		rightFixedColumns: function rightFixedColumns() {
			return this.store.states.rightFixedColumns;
		},
		bodyWidth: function bodyWidth() {
			var _layout = this.layout,
			    bodyWidth = _layout.bodyWidth,
			    scrollY = _layout.scrollY,
			    gutterWidth = _layout.gutterWidth;

			return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
		},
		bodyHeight: function bodyHeight() {
			if (this.height) {
				return {
					height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
				};
			} else if (this.maxHeight) {
				return {
					'max-height': (this.showHeader ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight : this.maxHeight - this.layout.footerHeight) + 'px'
				};
			}
			return {};
		},
		fixedBodyHeight: function fixedBodyHeight() {
			if (this.height) {
				return {
					height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
				};
			} else if (this.maxHeight) {
				var maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

				if (this.showHeader) {
					maxHeight -= this.layout.headerHeight;
				}

				maxHeight -= this.layout.footerHeight;

				return {
					'max-height': maxHeight + 'px'
				};
			}

			return {};
		},
		fixedHeight: function fixedHeight() {
			if (this.maxHeight) {
				if (this.showSummary) {
					return {
						bottom: 0
					};
				}
				return {
					bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
				};
			} else {
				if (this.showSummary) {
					return {
						height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
					};
				}
				return {
					height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
				};
			}
		}
	},

	watch: {
		height: {
			immediate: true,
			handler: function handler(value) {
				this.layout.setHeight(value);
			}
		},

		maxHeight: {
			immediate: true,
			handler: function handler(value) {
				this.layout.setMaxHeight(value);
			}
		},

		currentRowKey: function currentRowKey(newVal) {
			this.store.setCurrentRowKey(newVal);
		},


		data: {
			immediate: true,
			handler: function handler(value) {
				var _this2 = this;

				this.store.commit('setData', value);
				if (this.$ready) {
					this.$nextTick(function () {
						_this2.doLayout();
					});
				}
			}
		},

		expandRowKeys: {
			immediate: true,
			handler: function handler(newVal) {
				if (newVal) {
					this.store.setExpandRowKeys(newVal);
				}
			}
		}
	},

	destroyed: function destroyed() {
		if (this.resizeListener) (0, _resizeEvent.removeResizeListener)(this.$el, this.resizeListener);
	},
	mounted: function mounted() {
		var _this3 = this;

		this.bindEvents();
		this.store.updateColumns();
		this.doLayout();

		this.resizeState = {
			width: this.$el.offsetWidth,
			height: this.$el.offsetHeight
		};

		// init filters
		this.store.states.columns.forEach(function (column) {
			if (column.filteredValue && column.filteredValue.length) {
				_this3.store.commit('filterChange', {
					column: column,
					values: column.filteredValue,
					silent: true
				});
			}
		});

		this.$ready = true;
	},
	data: function data() {
		var store = new _tableStore2.default(this, {
			rowKey: this.rowKey,
			defaultExpandAll: this.defaultExpandAll,
			selectOnIndeterminate: this.selectOnIndeterminate
		});
		var layout = new _tableLayout2.default({
			store: store,
			table: this,
			fit: this.fit,
			showHeader: this.showHeader
		});
		return {
			layout: layout,
			store: store,
			isHidden: false,
			renderExpanded: null,
			resizeProxyVisible: false,
			resizeState: {
				width: null,
				height: null
			},
			// 是否拥有多级表头
			isGroup: false,
			scrollPosition: 'left'
		};
	}
};

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getRowIdentity = exports.getColumnByCell = exports.getColumnById = exports.orderBy = exports.getCell = undefined;

var _typeof2 = __webpack_require__(3);

var _typeof3 = _interopRequireDefault(_typeof2);

var _util = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCell = exports.getCell = function getCell(event) {
	var cell = event.target;

	while (cell && cell.tagName.toUpperCase() !== 'HTML') {
		if (cell.tagName.toUpperCase() === 'TD') {
			return cell;
		}
		cell = cell.parentNode;
	}

	return null;
};

var isObject = function isObject(obj) {
	return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
};

var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
	if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
		return array;
	}
	if (typeof reverse === 'string') {
		reverse = reverse === 'descending' ? -1 : 1;
	} else {
		reverse = reverse && reverse < 0 ? -1 : 1;
	}
	var getKey = sortMethod ? null : function (value, index) {
		if (sortBy) {
			if (!Array.isArray(sortBy)) {
				sortBy = [sortBy];
			}
			return sortBy.map(function (by) {
				if (typeof by === 'string') {
					return (0, _util.getValueByPath)(value, by);
				} else {
					return by(value, index, array);
				}
			});
		}
		if (sortKey !== '$key') {
			if (isObject(value) && '$value' in value) value = value.$value;
		}
		return [isObject(value) ? (0, _util.getValueByPath)(value, sortKey) : value];
	};
	var compare = function compare(a, b) {
		if (sortMethod) {
			return sortMethod(a.value, b.value);
		}
		for (var i = 0, len = a.key.length; i < len; i++) {
			if (a.key[i] < b.key[i]) {
				return -1;
			}
			if (a.key[i] > b.key[i]) {
				return 1;
			}
		}
		return 0;
	};
	return array.map(function (value, index) {
		return {
			value: value,
			index: index,
			key: getKey ? getKey(value, index) : null
		};
	}).sort(function (a, b) {
		var order = compare(a, b);
		if (!order) {
			// make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
			order = a.index - b.index;
		}
		return order * reverse;
	}).map(function (item) {
		return item.value;
	});
};

var getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
	var column = null;
	table.columns.forEach(function (item) {
		if (item.id === columnId) {
			column = item;
		}
	});
	return column;
};

var getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
	var matches = (cell.className || '').match(/kc-table_[^\s]+/gm);
	if (matches) {
		return getColumnById(table, matches[0]);
	}
	return null;
};

var getRowIdentity = exports.getRowIdentity = function getRowIdentity(row, rowKey) {
	if (!row) throw new Error('row is required when get row identity');
	if (typeof rowKey === 'string') {
		if (rowKey.indexOf('.') < 0) {
			return row[rowKey];
		}
		var key = rowKey.split('.');
		var current = row;
		for (var i = 0; i < key.length; i++) {
			current = current[key[i]];
		}
		return current;
	} else if (typeof rowKey === 'function') {
		return rowKey.call(null, row);
	}
};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vuePopper = __webpack_require__(15);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _popup = __webpack_require__(10);

var _locale = __webpack_require__(12);

var _locale2 = _interopRequireDefault(_locale);

var _clickoutside = __webpack_require__(20);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _dropdown = __webpack_require__(393);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _checkbox = __webpack_require__(35);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = __webpack_require__(64);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcTableFilterPanel',

	mixins: [_vuePopper2.default, _locale2.default],

	directives: {
		Clickoutside: _clickoutside2.default
	},

	components: {
		KcCheckbox: _checkbox2.default,
		KcCheckboxGroup: _checkboxGroup2.default
	},

	props: {
		placement: {
			type: String,
			default: 'bottom-end'
		}
	},

	customRender: function customRender(h) {
		return h(
			'div',
			{ 'class': 'kc-table-filter' },
			[h('div', { 'class': 'kc-table-filter__content' }), h(
				'div',
				{ 'class': 'kc-table-filter__bottom' },
				[h(
					'button',
					{
						on: {
							'click': this.handleConfirm
						}
					},
					[this.t('el.table.confirmFilter')]
				), h(
					'button',
					{
						on: {
							'click': this.handleReset
						}
					},
					[this.t('el.table.resetFilter')]
				)]
			)]
		);
	},


	methods: {
		isActive: function isActive(filter) {
			return filter.value === this.filterValue;
		},
		handleOutsideClick: function handleOutsideClick() {
			var _this = this;

			setTimeout(function () {
				_this.showPopper = false;
			}, 16);
		},
		handleConfirm: function handleConfirm() {
			this.confirmFilter(this.filteredValue);
			this.handleOutsideClick();
		},
		handleReset: function handleReset() {
			this.filteredValue = [];
			this.confirmFilter(this.filteredValue);
			this.handleOutsideClick();
		},
		handleSelect: function handleSelect(filterValue) {
			this.filterValue = filterValue;

			if (typeof filterValue !== 'undefined' && filterValue !== null) {
				this.confirmFilter(this.filteredValue);
			} else {
				this.confirmFilter([]);
			}

			this.handleOutsideClick();
		},
		confirmFilter: function confirmFilter(filteredValue) {
			this.table.store.commit('filterChange', {
				column: this.column,
				values: filteredValue
			});
			this.table.store.updateAllSelected();
		}
	},

	data: function data() {
		return {
			table: null,
			cell: null,
			column: null
		};
	},


	computed: {
		filters: function filters() {
			return this.column && this.column.filters;
		},


		filterValue: {
			get: function get() {
				return (this.column.filteredValue || [])[0];
			},
			set: function set(value) {
				if (this.filteredValue) {
					if (typeof value !== 'undefined' && value !== null) {
						this.filteredValue.splice(0, 1, value);
					} else {
						this.filteredValue.splice(0, 1);
					}
				}
			}
		},

		filteredValue: {
			get: function get() {
				if (this.column) {
					return this.column.filteredValue || [];
				}
				return [];
			},
			set: function set(value) {
				if (this.column) {
					this.column.filteredValue = value;
				}
			}
		},

		multiple: function multiple() {
			if (this.column) {
				return this.column.filterMultiple;
			}
			return true;
		}
	},

	mounted: function mounted() {
		var _this2 = this;

		this.popperElm = this.$el;
		this.referenceElm = this.cell;
		this.table.bodyWrapper.addEventListener('scroll', function () {
			_this2.updatePopper();
		});

		this.$watch('showPopper', function (value) {
			if (_this2.column) _this2.column.filterOpened = value;
			if (value) {
				_dropdown2.default.open(_this2);
			} else {
				_dropdown2.default.close(_this2);
			}
		});
	},

	watch: {
		showPopper: function showPopper(val) {
			if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < _popup.PopupManager.zIndex) {
				this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
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
//
//
//

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

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

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

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkbox = __webpack_require__(56);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_checkbox2.default.install = function (Vue) {
	Vue.component(_checkbox2.default.name, _checkbox2.default);
};

exports.default = _checkbox2.default;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _table = __webpack_require__(385);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_table2.default.install = function (Vue) {
	Vue.component(_table2.default.name, _table2.default);
};

exports.default = _table2.default;

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_4a51d7d8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_table_vue__ = __webpack_require__(396);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_4a51d7d8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizeWheel = __webpack_require__(387);

var _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = (0, _normalizeWheel2.default)(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

exports.default = {
  bind: function bind(el, binding) {
    mousewheel(el, binding.value);
  }
};

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = require("normalize-wheel");

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getIterator2 = __webpack_require__(7);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(11);

var _keys2 = _interopRequireDefault(_keys);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _debounce = __webpack_require__(27);

var _debounce2 = _interopRequireDefault(_debounce);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(187);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortData = function sortData(data, states) {
	var sortingColumn = states.sortingColumn;
	if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
		return data;
	}
	return (0, _util.orderBy)(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};

var getKeysMap = function getKeysMap(array, rowKey) {
	var arrayMap = {};
	(array || []).forEach(function (row, index) {
		arrayMap[(0, _util.getRowIdentity)(row, rowKey)] = { row: row, index: index };
	});
	return arrayMap;
};

var toggleRowSelection = function toggleRowSelection(states, row, selected) {
	var changed = false;
	var selection = states.selection;
	var index = selection.indexOf(row);
	if (typeof selected === 'undefined') {
		if (index === -1) {
			selection.push(row);
			changed = true;
		} else {
			selection.splice(index, 1);
			changed = true;
		}
	} else {
		if (selected && index === -1) {
			selection.push(row);
			changed = true;
		} else if (!selected && index > -1) {
			selection.splice(index, 1);
			changed = true;
		}
	}

	return changed;
};

var toggleRowExpansion = function toggleRowExpansion(states, row, expanded) {
	var changed = false;
	var expandRows = states.expandRows;
	if (typeof expanded !== 'undefined') {
		var index = expandRows.indexOf(row);
		if (expanded) {
			if (index === -1) {
				expandRows.push(row);
				changed = true;
			}
		} else {
			if (index !== -1) {
				expandRows.splice(index, 1);
				changed = true;
			}
		}
	} else {
		var _index = expandRows.indexOf(row);
		if (_index === -1) {
			expandRows.push(row);
			changed = true;
		} else {
			expandRows.splice(_index, 1);
			changed = true;
		}
	}

	return changed;
};

var TableStore = function TableStore(table) {
	var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (!table) {
		throw new Error('Table is required.');
	}
	this.table = table;

	this.states = {
		rowKey: null,
		_columns: [],
		originColumns: [],
		columns: [],
		fixedColumns: [],
		rightFixedColumns: [],
		leafColumns: [],
		fixedLeafColumns: [],
		rightFixedLeafColumns: [],
		leafColumnsLength: 0,
		fixedLeafColumnsLength: 0,
		rightFixedLeafColumnsLength: 0,
		isComplex: false,
		filteredData: null,
		data: null,
		sortingColumn: null,
		sortProp: null,
		sortOrder: null,
		isAllSelected: false,
		selection: [],
		reserveSelection: false,
		selectable: null,
		currentRow: null,
		hoverRow: null,
		filters: {},
		expandRows: [],
		defaultExpandAll: false,
		selectOnIndeterminate: false
	};

	for (var prop in initialState) {
		if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
			this.states[prop] = initialState[prop];
		}
	}
};

TableStore.prototype.mutations = {
	setData: function setData(states, data) {
		var _this = this;

		var dataInstanceChanged = states._data !== data;
		states._data = data;

		(0, _keys2.default)(states.filters).forEach(function (columnId) {
			var values = states.filters[columnId];
			if (!values || values.length === 0) return;
			var column = (0, _util.getColumnById)(_this.states, columnId);
			if (column && column.filterMethod) {
				data = data.filter(function (row) {
					return values.some(function (value) {
						return column.filterMethod.call(null, value, row, column);
					});
				});
			}
		});

		states.filteredData = data;
		states.data = sortData(data || [], states);

		this.updateCurrentRow();

		var rowKey = states.rowKey;

		if (!states.reserveSelection) {
			if (dataInstanceChanged) {
				this.clearSelection();
			} else {
				this.cleanSelection();
			}
			this.updateAllSelected();
		} else {
			if (rowKey) {
				var selection = states.selection;
				var selectedMap = getKeysMap(selection, rowKey);

				states.data.forEach(function (row) {
					var rowId = (0, _util.getRowIdentity)(row, rowKey);
					var rowInfo = selectedMap[rowId];
					if (rowInfo) {
						selection[rowInfo.index] = row;
					}
				});

				this.updateAllSelected();
			} else {
				console.warn('WARN: rowKey is required when reserve-selection is enabled.');
			}
		}

		var defaultExpandAll = states.defaultExpandAll;
		if (defaultExpandAll) {
			this.states.expandRows = (states.data || []).slice(0);
		} else if (rowKey) {
			// update expandRows to new rows according to rowKey
			var ids = getKeysMap(this.states.expandRows, rowKey);
			var expandRows = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (0, _getIterator3.default)(states.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var row = _step.value;

					var rowId = (0, _util.getRowIdentity)(row, rowKey);
					if (ids[rowId]) {
						expandRows.push(row);
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

			this.states.expandRows = expandRows;
		} else {
			// clear the old rows
			this.states.expandRows = [];
		}

		_vue2.default.nextTick(function () {
			return _this.table.updateScrollY();
		});
	},
	changeSortCondition: function changeSortCondition(states, options) {
		var _this2 = this;

		states.data = sortData(states.filteredData || states._data || [], states);

		if (!options || !options.silent) {
			this.table.$emit('sort-change', {
				column: this.states.sortingColumn,
				prop: this.states.sortProp,
				order: this.states.sortOrder
			});
		}

		_vue2.default.nextTick(function () {
			return _this2.table.updateScrollY();
		});
	},
	filterChange: function filterChange(states, options) {
		var _this3 = this;

		var column = options.column,
		    values = options.values,
		    silent = options.silent;

		if (values && !Array.isArray(values)) {
			values = [values];
		}

		var prop = column.property;
		var filters = {};

		if (prop) {
			states.filters[column.id] = values;
			filters[column.columnKey || column.id] = values;
		}

		var data = states._data;

		(0, _keys2.default)(states.filters).forEach(function (columnId) {
			var values = states.filters[columnId];
			if (!values || values.length === 0) return;
			var column = (0, _util.getColumnById)(_this3.states, columnId);
			if (column && column.filterMethod) {
				data = data.filter(function (row) {
					return values.some(function (value) {
						return column.filterMethod.call(null, value, row, column);
					});
				});
			}
		});

		states.filteredData = data;
		states.data = sortData(data, states);

		if (!silent) {
			this.table.$emit('filter-change', filters);
		}

		_vue2.default.nextTick(function () {
			return _this3.table.updateScrollY();
		});
	},
	insertColumn: function insertColumn(states, column, index, parent) {
		var array = states._columns;
		if (parent) {
			array = parent.children;
			if (!array) array = parent.children = [];
		}

		if (typeof index !== 'undefined') {
			array.splice(index, 0, column);
		} else {
			array.push(column);
		}

		if (column.type === 'selection') {
			states.selectable = column.selectable;
			states.reserveSelection = column.reserveSelection;
		}

		if (this.table.$ready) {
			this.updateColumns(); // hack for dynamics insert column
			this.scheduleLayout();
		}
	},
	removeColumn: function removeColumn(states, column, parent) {
		var array = states._columns;
		if (parent) {
			array = parent.children;
			if (!array) array = parent.children = [];
		}
		if (array) {
			array.splice(array.indexOf(column), 1);
		}

		if (this.table.$ready) {
			this.updateColumns(); // hack for dynamics remove column
			this.scheduleLayout();
		}
	},
	setHoverRow: function setHoverRow(states, row) {
		states.hoverRow = row;
	},
	setCurrentRow: function setCurrentRow(states, row) {
		var oldCurrentRow = states.currentRow;
		states.currentRow = row;

		if (oldCurrentRow !== row) {
			this.table.$emit('current-change', row, oldCurrentRow);
		}
	},
	rowSelectedChanged: function rowSelectedChanged(states, row) {
		var changed = toggleRowSelection(states, row);
		var selection = states.selection;

		if (changed) {
			var table = this.table;
			table.$emit('selection-change', selection ? selection.slice() : []);
			table.$emit('select', selection, row);
		}

		this.updateAllSelected();
	},


	toggleAllSelection: (0, _debounce2.default)(10, function (states) {
		var data = states.data || [];
		if (data.length === 0) return;
		var selection = this.states.selection;
		// when only some rows are selected (but not all), select or deselect all of them
		// depending on the value of selectOnIndeterminate
		var value = states.selectOnIndeterminate ? !states.isAllSelected : !(states.isAllSelected || selection.length);
		var selectionChanged = false;

		data.forEach(function (item, index) {
			if (states.selectable) {
				if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
					selectionChanged = true;
				}
			} else {
				if (toggleRowSelection(states, item, value)) {
					selectionChanged = true;
				}
			}
		});

		var table = this.table;
		if (selectionChanged) {
			table.$emit('selection-change', selection ? selection.slice() : []);
		}
		table.$emit('select-all', selection);
		states.isAllSelected = value;
	})
};

var doFlattenColumns = function doFlattenColumns(columns) {
	var result = [];
	columns.forEach(function (column) {
		if (column.children) {
			result.push.apply(result, doFlattenColumns(column.children));
		} else {
			result.push(column);
		}
	});
	return result;
};

TableStore.prototype.updateColumns = function () {
	var states = this.states;
	var _columns = states._columns || [];
	states.fixedColumns = _columns.filter(function (column) {
		return column.fixed === true || column.fixed === 'left';
	});
	states.rightFixedColumns = _columns.filter(function (column) {
		return column.fixed === 'right';
	});

	if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
		_columns[0].fixed = true;
		states.fixedColumns.unshift(_columns[0]);
	}

	var notFixedColumns = _columns.filter(function (column) {
		return !column.fixed;
	});
	states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

	var leafColumns = doFlattenColumns(notFixedColumns);
	var fixedLeafColumns = doFlattenColumns(states.fixedColumns);
	var rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

	states.leafColumnsLength = leafColumns.length;
	states.fixedLeafColumnsLength = fixedLeafColumns.length;
	states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

	states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
	states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
};

TableStore.prototype.isSelected = function (row) {
	return (this.states.selection || []).indexOf(row) > -1;
};

TableStore.prototype.clearSelection = function () {
	var states = this.states;
	states.isAllSelected = false;
	var oldSelection = states.selection;
	if (states.selection.length) {
		states.selection = [];
	}
	if (oldSelection.length > 0) {
		this.table.$emit('selection-change', states.selection ? states.selection.slice() : []);
	}
};

TableStore.prototype.setExpandRowKeys = function (rowKeys) {
	var expandRows = [];
	var data = this.states.data;
	var rowKey = this.states.rowKey;
	if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
	var keysMap = getKeysMap(data, rowKey);
	rowKeys.forEach(function (key) {
		var info = keysMap[key];
		if (info) {
			expandRows.push(info.row);
		}
	});

	this.states.expandRows = expandRows;
};

TableStore.prototype.toggleRowSelection = function (row, selected) {
	var changed = toggleRowSelection(this.states, row, selected);
	if (changed) {
		this.table.$emit('selection-change', this.states.selection ? this.states.selection.slice() : []);
	}
};

TableStore.prototype.toggleRowExpansion = function (row, expanded) {
	var changed = toggleRowExpansion(this.states, row, expanded);
	if (changed) {
		this.table.$emit('expand-change', row, this.states.expandRows);
		this.scheduleLayout();
	}
};

TableStore.prototype.isRowExpanded = function (row) {
	var _states = this.states,
	    _states$expandRows = _states.expandRows,
	    expandRows = _states$expandRows === undefined ? [] : _states$expandRows,
	    rowKey = _states.rowKey;

	if (rowKey) {
		var expandMap = getKeysMap(expandRows, rowKey);
		return !!expandMap[(0, _util.getRowIdentity)(row, rowKey)];
	}
	return expandRows.indexOf(row) !== -1;
};

TableStore.prototype.cleanSelection = function () {
	var selection = this.states.selection || [];
	var data = this.states.data;
	var rowKey = this.states.rowKey;
	var deleted = void 0;
	if (rowKey) {
		deleted = [];
		var selectedMap = getKeysMap(selection, rowKey);
		var dataMap = getKeysMap(data, rowKey);
		for (var key in selectedMap) {
			if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
				deleted.push(selectedMap[key].row);
			}
		}
	} else {
		deleted = selection.filter(function (item) {
			return data.indexOf(item) === -1;
		});
	}

	deleted.forEach(function (deletedItem) {
		selection.splice(selection.indexOf(deletedItem), 1);
	});

	if (deleted.length) {
		this.table.$emit('selection-change', selection ? selection.slice() : []);
	}
};

TableStore.prototype.clearFilter = function () {
	var states = this.states;
	var _table$$refs = this.table.$refs,
	    tableHeader = _table$$refs.tableHeader,
	    fixedTableHeader = _table$$refs.fixedTableHeader,
	    rightFixedTableHeader = _table$$refs.rightFixedTableHeader;

	var panels = {};

	if (tableHeader) panels = (0, _merge2.default)(panels, tableHeader.filterPanels);
	if (fixedTableHeader) panels = (0, _merge2.default)(panels, fixedTableHeader.filterPanels);
	if (rightFixedTableHeader) panels = (0, _merge2.default)(panels, rightFixedTableHeader.filterPanels);

	var keys = (0, _keys2.default)(panels);
	if (!keys.length) return;

	keys.forEach(function (key) {
		panels[key].filteredValue = [];
	});

	states.filters = {};

	this.commit('filterChange', {
		column: {},
		values: [],
		silent: true
	});
};

TableStore.prototype.clearSort = function () {
	var states = this.states;
	if (!states.sortingColumn) return;
	states.sortingColumn.order = null;
	states.sortProp = null;
	states.sortOrder = null;

	this.commit('changeSortCondition', {
		silent: true
	});
};

TableStore.prototype.updateAllSelected = function () {
	var states = this.states;
	var selection = states.selection,
	    rowKey = states.rowKey,
	    selectable = states.selectable,
	    data = states.data;

	if (!data || data.length === 0) {
		states.isAllSelected = false;
		return;
	}

	var selectedMap = void 0;
	if (rowKey) {
		selectedMap = getKeysMap(states.selection, rowKey);
	}

	var isSelected = function isSelected(row) {
		if (selectedMap) {
			return !!selectedMap[(0, _util.getRowIdentity)(row, rowKey)];
		} else {
			return selection.indexOf(row) !== -1;
		}
	};

	var isAllSelected = true;
	var selectedCount = 0;
	for (var i = 0, j = data.length; i < j; i++) {
		var item = data[i];
		var isRowSelectable = selectable && selectable.call(null, item, i);
		if (!isSelected(item)) {
			if (!selectable || isRowSelectable) {
				isAllSelected = false;
				break;
			}
		} else {
			selectedCount++;
		}
	}

	if (selectedCount === 0) isAllSelected = false;

	states.isAllSelected = isAllSelected;
};

TableStore.prototype.scheduleLayout = function (updateColumns) {
	if (updateColumns) {
		this.updateColumns();
	}
	this.table.debouncedUpdateLayout();
};

TableStore.prototype.setCurrentRowKey = function (key) {
	var states = this.states;
	var rowKey = states.rowKey;
	if (!rowKey) throw new Error('[Table] row-key should not be empty.');
	var data = states.data || [];
	var keysMap = getKeysMap(data, rowKey);
	var info = keysMap[key];
	if (info) {
		states.currentRow = info.row;
	}
};

TableStore.prototype.updateCurrentRow = function () {
	var states = this.states;
	var table = this.table;
	var data = states.data || [];
	var oldCurrentRow = states.currentRow;

	if (data.indexOf(oldCurrentRow) === -1) {
		states.currentRow = null;

		if (states.currentRow !== oldCurrentRow) {
			table.$emit('current-change', null, oldCurrentRow);
		}
	}
};

TableStore.prototype.commit = function (name) {
	var mutations = this.mutations;
	if (mutations[name]) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		mutations[name].apply(this, [this.states].concat(args));
	} else {
		throw new Error('Action not found: ' + name);
	}
};

exports.default = TableStore;

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

var _scrollbarWidth = __webpack_require__(9);

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableLayout = function () {
	function TableLayout(options) {
		(0, _classCallCheck3.default)(this, TableLayout);

		this.observers = [];
		this.table = null;
		this.store = null;
		this.columns = null;
		this.fit = true;
		this.showHeader = true;

		this.height = null;
		this.scrollX = false;
		this.scrollY = false;
		this.bodyWidth = null;
		this.fixedWidth = null;
		this.rightFixedWidth = null;
		this.tableHeight = null;
		this.headerHeight = 44; // Table Header Height
		this.appendHeight = 0; // Append Slot Height
		this.footerHeight = 44; // Table Footer Height
		this.viewportHeight = null; // Table Height - Scroll Bar Height
		this.bodyHeight = null; // Table Height - Table Header Height
		this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
		this.gutterWidth = (0, _scrollbarWidth2.default)();

		for (var name in options) {
			if (options.hasOwnProperty(name)) {
				this[name] = options[name];
			}
		}

		if (!this.table) {
			throw new Error('table is required for Table Layout');
		}
		if (!this.store) {
			throw new Error('store is required for Table Layout');
		}
	}

	(0, _createClass3.default)(TableLayout, [{
		key: 'updateScrollY',
		value: function updateScrollY() {
			var height = this.height;
			if (typeof height !== 'string' && typeof height !== 'number') return;
			var bodyWrapper = this.table.bodyWrapper;
			if (this.table.$el && bodyWrapper) {
				var body = bodyWrapper.querySelector('.kc-table__body');
				this.scrollY = body.offsetHeight > this.bodyHeight;
			}
		}
	}, {
		key: 'setHeight',
		value: function setHeight(value) {
			var _this = this;

			var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

			if (_vue2.default.prototype.$isServer) return;
			var el = this.table.$el;
			if (typeof value === 'string' && /^\d+$/.test(value)) {
				value = Number(value);
			}
			this.height = value;

			if (!el && (value || value === 0)) return _vue2.default.nextTick(function () {
				return _this.setHeight(value, prop);
			});

			if (typeof value === 'number') {
				el.style[prop] = value + 'px';

				this.updateElsHeight();
			} else if (typeof value === 'string') {
				el.style[prop] = value;
				this.updateElsHeight();
			}
		}
	}, {
		key: 'setMaxHeight',
		value: function setMaxHeight(value) {
			return this.setHeight(value, 'max-height');
		}
	}, {
		key: 'updateElsHeight',
		value: function updateElsHeight() {
			var _this2 = this;

			if (!this.table.$ready) return _vue2.default.nextTick(function () {
				return _this2.updateElsHeight();
			});
			var _table$$refs = this.table.$refs,
			    headerWrapper = _table$$refs.headerWrapper,
			    appendWrapper = _table$$refs.appendWrapper,
			    footerWrapper = _table$$refs.footerWrapper;

			this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;

			if (this.showHeader && !headerWrapper) return;
			var headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
			if (this.showHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
				return _vue2.default.nextTick(function () {
					return _this2.updateElsHeight();
				});
			}
			var tableHeight = this.tableHeight = this.table.$el.clientHeight;
			if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
				var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
				this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
			}
			this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;

			var noData = !this.table.data || this.table.data.length === 0;
			this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;

			this.updateScrollY();
			this.notifyObservers('scrollable');
		}
	}, {
		key: 'getFlattenColumns',
		value: function getFlattenColumns() {
			var flattenColumns = [];
			var columns = this.table.columns;
			columns.forEach(function (column) {
				if (column.isColumnGroup) {
					flattenColumns.push.apply(flattenColumns, column.columns);
				} else {
					flattenColumns.push(column);
				}
			});

			return flattenColumns;
		}
	}, {
		key: 'updateColumnsWidth',
		value: function updateColumnsWidth() {
			if (_vue2.default.prototype.$isServer) return;
			var fit = this.fit;
			var bodyWidth = this.table.$el.clientWidth;
			var bodyMinWidth = 0;

			var flattenColumns = this.getFlattenColumns();
			var flexColumns = flattenColumns.filter(function (column) {
				return typeof column.width !== 'number';
			});

			flattenColumns.forEach(function (column) {
				// Clean those columns whose width changed from flex to unflex
				if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
			});

			if (flexColumns.length > 0 && fit) {
				flattenColumns.forEach(function (column) {
					bodyMinWidth += column.width || column.minWidth || 80;
				});

				var scrollYWidth = this.scrollY ? this.gutterWidth : 0;

				if (bodyMinWidth <= bodyWidth - scrollYWidth) {
					// DON'T HAVE SCROLL BAR
					this.scrollX = false;

					var totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

					if (flexColumns.length === 1) {
						flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
					} else {
						var allColumnsWidth = flexColumns.reduce(function (prev, column) {
							return prev + (column.minWidth || 80);
						}, 0);
						var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
						var noneFirstWidth = 0;

						flexColumns.forEach(function (column, index) {
							if (index === 0) return;
							var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
							noneFirstWidth += flexWidth;
							column.realWidth = (column.minWidth || 80) + flexWidth;
						});

						flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
					}
				} else {
					// HAVE HORIZONTAL SCROLL BAR
					this.scrollX = true;
					flexColumns.forEach(function (column) {
						column.realWidth = column.minWidth;
					});
				}

				this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
				this.table.resizeState.width = this.bodyWidth;
			} else {
				flattenColumns.forEach(function (column) {
					if (!column.width && !column.minWidth) {
						column.realWidth = 80;
					} else {
						column.realWidth = column.width || column.minWidth;
					}

					bodyMinWidth += column.realWidth;
				});
				this.scrollX = bodyMinWidth > bodyWidth;

				this.bodyWidth = bodyMinWidth;
			}

			var fixedColumns = this.store.states.fixedColumns;

			if (fixedColumns.length > 0) {
				var fixedWidth = 0;
				fixedColumns.forEach(function (column) {
					fixedWidth += column.realWidth || column.width;
				});

				this.fixedWidth = fixedWidth;
			}

			var rightFixedColumns = this.store.states.rightFixedColumns;
			if (rightFixedColumns.length > 0) {
				var rightFixedWidth = 0;
				rightFixedColumns.forEach(function (column) {
					rightFixedWidth += column.realWidth || column.width;
				});

				this.rightFixedWidth = rightFixedWidth;
			}

			this.notifyObservers('columns');
		}
	}, {
		key: 'addObserver',
		value: function addObserver(observer) {
			this.observers.push(observer);
		}
	}, {
		key: 'removeObserver',
		value: function removeObserver(observer) {
			var index = this.observers.indexOf(observer);
			if (index !== -1) {
				this.observers.splice(index, 1);
			}
		}
	}, {
		key: 'notifyObservers',
		value: function notifyObservers(event) {
			var _this3 = this;

			var observers = this.observers;
			observers.forEach(function (observer) {
				switch (event) {
					case 'columns':
						observer.onColumnsChange(_this3);
						break;
					case 'scrollable':
						observer.onScrollableChange(_this3);
						break;
					default:
						throw new Error('Table Layout don\'t have event ' + event + '.');
				}
			});
		}
	}]);
	return TableLayout;
}();

exports.default = TableLayout;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(3);

var _typeof3 = _interopRequireDefault(_typeof2);

var _util = __webpack_require__(187);

var _dom = __webpack_require__(2);

var _checkbox = __webpack_require__(35);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tooltip = __webpack_require__(54);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _debounce = __webpack_require__(27);

var _debounce2 = _interopRequireDefault(_debounce);

var _layoutObserver = __webpack_require__(93);

var _layoutObserver2 = _interopRequireDefault(_layoutObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcTableBody',

	mixins: [_layoutObserver2.default],

	components: {
		KcCheckbox: _checkbox2.default,
		KcTooltip: _tooltip2.default
	},

	props: {
		store: {
			required: true
		},
		stripe: Boolean,
		context: {},
		rowClassName: [String, Function],
		rowStyle: [Object, Function],
		fixed: String,
		highlight: Boolean
	},

	render: function render(h) {
		var _this = this;

		var columnsHidden = this.columns.map(function (column, index) {
			return _this.isColumnHidden(index);
		});
		return h(
			'table',
			{
				'class': 'kc-table__body',
				attrs: { cellspacing: '0',
					cellpadding: '0',
					border: '0' }
			},
			[h('colgroup', [this._l(this.columns, function (column) {
				return h('col', {
					attrs: { name: column.id }
				});
			})]), h('tbody', [this._l(this.data, function (row, $index) {
				return [h(
					'tr',
					{
						style: _this.rowStyle ? _this.getRowStyle(row, $index) : null,
						key: _this.table.rowKey ? _this.getKeyOfRow(row, $index) : $index,
						on: {
							'dblclick': function dblclick($event) {
								return _this.handleDoubleClick($event, row);
							},
							'click': function click($event) {
								return _this.handleClick($event, row);
							},
							'contextmenu': function contextmenu($event) {
								return _this.handleContextMenu($event, row);
							},
							'mouseenter': function mouseenter(_) {
								return _this.handleMouseEnter($index);
							},
							'mouseleave': function mouseleave(_) {
								return _this.handleMouseLeave();
							}
						},

						'class': [_this.getRowClass(row, $index)] },
					[_this._l(_this.columns, function (column, cellIndex) {
						var _getSpan = _this.getSpan(row, column, $index, cellIndex),
						    rowspan = _getSpan.rowspan,
						    colspan = _getSpan.colspan;

						if (!rowspan || !colspan) {
							return '';
						} else {
							if (rowspan === 1 && colspan === 1) {
								return h(
									'td',
									{
										style: _this.getCellStyle($index, cellIndex, row, column),
										'class': _this.getCellClass($index, cellIndex, row, column),
										on: {
											'mouseenter': function mouseenter($event) {
												return _this.handleCellMouseEnter($event, row);
											},
											'mouseleave': _this.handleCellMouseLeave
										}
									},
									[column.renderCell.call(_this._renderProxy, h, {
										row: row,
										column: column,
										$index: $index,
										store: _this.store,
										_self: _this.context || _this.table.$vnode.context
									}, columnsHidden[cellIndex])]
								);
							} else {
								return h(
									'td',
									{
										style: _this.getCellStyle($index, cellIndex, row, column),
										'class': _this.getCellClass($index, cellIndex, row, column),
										attrs: { rowspan: rowspan,
											colspan: colspan
										},
										on: {
											'mouseenter': function mouseenter($event) {
												return _this.handleCellMouseEnter($event, row);
											},
											'mouseleave': _this.handleCellMouseLeave
										}
									},
									[column.renderCell.call(_this._renderProxy, h, {
										row: row,
										column: column,
										$index: $index,
										store: _this.store,
										_self: _this.context || _this.table.$vnode.context
									}, columnsHidden[cellIndex])]
								);
							}
						}
					})]
				), _this.store.isRowExpanded(row) ? h('tr', [h(
					'td',
					{
						attrs: { colspan: _this.columns.length },
						'class': 'kc-table__expanded-cell' },
					[_this.table.renderExpanded ? _this.table.renderExpanded(h, { row: row, $index: $index, store: _this.store }) : '']
				)]) : ''];
			}).concat(h('kc-tooltip', {
				attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
				ref: 'tooltip' }))])]
		);
	},


	watch: {
		'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
			if (!this.store.states.isComplex) return;
			var el = this.$el;
			if (!el) return;
			var tr = el.querySelector('tbody').children;
			var rows = [].filter.call(tr, function (row) {
				return (0, _dom.hasClass)(row, 'kc-table__row');
			});
			var oldRow = rows[oldVal];
			var newRow = rows[newVal];
			if (oldRow) {
				(0, _dom.removeClass)(oldRow, 'hover-row');
			}
			if (newRow) {
				(0, _dom.addClass)(newRow, 'hover-row');
			}
		},
		'store.states.currentRow': function storeStatesCurrentRow(newVal, oldVal) {
			if (!this.highlight) return;
			var el = this.$el;
			if (!el) return;
			var data = this.store.states.data;
			var tr = el.querySelector('tbody').children;
			var rows = [].filter.call(tr, function (row) {
				return (0, _dom.hasClass)(row, 'kc-table__row');
			});
			var oldRow = rows[data.indexOf(oldVal)];
			var newRow = rows[data.indexOf(newVal)];
			if (oldRow) {
				(0, _dom.removeClass)(oldRow, 'current-row');
			} else {
				[].forEach.call(rows, function (row) {
					return (0, _dom.removeClass)(row, 'current-row');
				});
			}
			if (newRow) {
				(0, _dom.addClass)(newRow, 'current-row');
			}
		}
	},

	computed: {
		table: function table() {
			return this.$parent;
		},
		data: function data() {
			return this.store.states.data;
		},
		columnsCount: function columnsCount() {
			return this.store.states.columns.length;
		},
		leftFixedLeafCount: function leftFixedLeafCount() {
			return this.store.states.fixedLeafColumnsLength;
		},
		rightFixedLeafCount: function rightFixedLeafCount() {
			return this.store.states.rightFixedLeafColumnsLength;
		},
		leftFixedCount: function leftFixedCount() {
			return this.store.states.fixedColumns.length;
		},
		rightFixedCount: function rightFixedCount() {
			return this.store.states.rightFixedColumns.length;
		},
		columns: function columns() {
			return this.store.states.columns;
		}
	},

	data: function data() {
		return {
			tooltipContent: ''
		};
	},
	created: function created() {
		this.activateTooltip = (0, _debounce2.default)(50, function (tooltip) {
			return tooltip.handleShowPopper();
		});
	},


	methods: {
		getKeyOfRow: function getKeyOfRow(row, index) {
			var rowKey = this.table.rowKey;
			if (rowKey) {
				return (0, _util.getRowIdentity)(row, rowKey);
			}
			return index;
		},
		isColumnHidden: function isColumnHidden(index) {
			if (this.fixed === true || this.fixed === 'left') {
				return index >= this.leftFixedLeafCount;
			} else if (this.fixed === 'right') {
				return index < this.columnsCount - this.rightFixedLeafCount;
			} else {
				return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
			}
		},
		getSpan: function getSpan(row, column, rowIndex, columnIndex) {
			var rowspan = 1;
			var colspan = 1;

			var fn = this.table.spanMethod;
			if (typeof fn === 'function') {
				var result = fn({
					row: row,
					column: column,
					rowIndex: rowIndex,
					columnIndex: columnIndex
				});

				if (Array.isArray(result)) {
					rowspan = result[0];
					colspan = result[1];
				} else if ((typeof result === 'undefined' ? 'undefined' : (0, _typeof3.default)(result)) === 'object') {
					rowspan = result.rowspan;
					colspan = result.colspan;
				}
			}

			return {
				rowspan: rowspan,
				colspan: colspan
			};
		},
		getRowStyle: function getRowStyle(row, rowIndex) {
			var rowStyle = this.table.rowStyle;
			if (typeof rowStyle === 'function') {
				return rowStyle.call(null, {
					row: row,
					rowIndex: rowIndex
				});
			}
			return rowStyle;
		},
		getRowClass: function getRowClass(row, rowIndex) {
			var classes = ['kc-table__row'];

			if (this.stripe && rowIndex % 2 === 1) {
				classes.push('kc-table__row--striped');
			}
			var rowClassName = this.table.rowClassName;
			if (typeof rowClassName === 'string') {
				classes.push(rowClassName);
			} else if (typeof rowClassName === 'function') {
				classes.push(rowClassName.call(null, {
					row: row,
					rowIndex: rowIndex
				}));
			}

			if (this.store.states.expandRows.indexOf(row) > -1) {
				classes.push('expanded');
			}

			return classes.join(' ');
		},
		getCellStyle: function getCellStyle(rowIndex, columnIndex, row, column) {
			var cellStyle = this.table.cellStyle;
			if (typeof cellStyle === 'function') {
				return cellStyle.call(null, {
					rowIndex: rowIndex,
					columnIndex: columnIndex,
					row: row,
					column: column
				});
			}
			return cellStyle;
		},
		getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
			var classes = [column.id, column.align, column.className];

			if (this.isColumnHidden(columnIndex)) {
				classes.push('is-hidden');
			}

			var cellClassName = this.table.cellClassName;
			if (typeof cellClassName === 'string') {
				classes.push(cellClassName);
			} else if (typeof cellClassName === 'function') {
				classes.push(cellClassName.call(null, {
					rowIndex: rowIndex,
					columnIndex: columnIndex,
					row: row,
					column: column
				}));
			}

			return classes.join(' ');
		},
		handleCellMouseEnter: function handleCellMouseEnter(event, row) {
			var table = this.table;
			var cell = (0, _util.getCell)(event);

			if (cell) {
				var column = (0, _util.getColumnByCell)(table, cell);
				var hoverState = table.hoverState = { cell: cell, column: column, row: row };
				table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
			}

			// 判断是否text-overflow, 如果是就显示tooltip
			var cellChild = event.target.querySelector('.cell');
			if (!(0, _dom.hasClass)(cellChild, 'kc-tooltip')) {
				return;
			}
			// use range width instead of scrollWidth to determine whether the text is overflowing
			// to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
			var range = document.createRange();
			range.setStart(cellChild, 0);
			range.setEnd(cellChild, cellChild.childNodes.length);
			var rangeWidth = range.getBoundingClientRect().width;
			var padding = (parseInt((0, _dom.getStyle)(cellChild, 'paddingLeft'), 10) || 0) + (parseInt((0, _dom.getStyle)(cellChild, 'paddingRight'), 10) || 0);
			if (rangeWidth + padding > cellChild.offsetWidth && this.$refs.tooltip) {
				var tooltip = this.$refs.tooltip;
				// TODO 会引起整个 Table 的重新渲染，需要优化
				this.tooltipContent = cell.textContent || cell.innerText;
				tooltip.referenceElm = cell;
				tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
				tooltip.doDestroy();
				tooltip.setExpectedState(true);
				this.activateTooltip(tooltip);
			}
		},
		handleCellMouseLeave: function handleCellMouseLeave(event) {
			var tooltip = this.$refs.tooltip;
			if (tooltip) {
				tooltip.setExpectedState(false);
				tooltip.handleClosePopper();
			}
			var cell = (0, _util.getCell)(event);
			if (!cell) return;

			var oldHoverState = this.table.hoverState || {};
			this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
		},
		handleMouseEnter: function handleMouseEnter(index) {
			this.store.commit('setHoverRow', index);
		},
		handleMouseLeave: function handleMouseLeave() {
			this.store.commit('setHoverRow', null);
		},
		handleContextMenu: function handleContextMenu(event, row) {
			this.handleEvent(event, row, 'contextmenu');
		},
		handleDoubleClick: function handleDoubleClick(event, row) {
			this.handleEvent(event, row, 'dblclick');
		},
		handleClick: function handleClick(event, row) {
			this.store.commit('setCurrentRow', row);
			this.handleEvent(event, row, 'click');
		},
		handleEvent: function handleEvent(event, row, name) {
			var table = this.table;
			var cell = (0, _util.getCell)(event);
			var column = void 0;
			if (cell) {
				column = (0, _util.getColumnByCell)(table, cell);
				if (column) {
					table.$emit('cell-' + name, row, column, cell, event);
				}
			}
			table.$emit('row-' + name, row, event, column);
		},
		handleExpandClick: function handleExpandClick(row, e) {
			e.stopPropagation();
			this.store.toggleRowExpansion(row);
		}
	}
};

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dom = __webpack_require__(2);

var _checkbox = __webpack_require__(35);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tag = __webpack_require__(48);

var _tag2 = _interopRequireDefault(_tag);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _filterPanel = __webpack_require__(392);

var _filterPanel2 = _interopRequireDefault(_filterPanel);

var _layoutObserver = __webpack_require__(93);

var _layoutObserver2 = _interopRequireDefault(_layoutObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllColumns = function getAllColumns(columns) {
	var result = [];
	columns.forEach(function (column) {
		if (column.children) {
			result.push(column);
			result.push.apply(result, getAllColumns(column.children));
		} else {
			result.push(column);
		}
	});
	return result;
};

var convertToRows = function convertToRows(originColumns) {
	var maxLevel = 1;
	var traverse = function traverse(column, parent) {
		if (parent) {
			column.level = parent.level + 1;
			if (maxLevel < column.level) {
				maxLevel = column.level;
			}
		}
		if (column.children) {
			var colSpan = 0;
			column.children.forEach(function (subColumn) {
				traverse(subColumn, column);
				colSpan += subColumn.colSpan;
			});
			column.colSpan = colSpan;
		} else {
			column.colSpan = 1;
		}
	};

	originColumns.forEach(function (column) {
		column.level = 1;
		traverse(column);
	});

	var rows = [];
	for (var i = 0; i < maxLevel; i++) {
		rows.push([]);
	}

	var allColumns = getAllColumns(originColumns);

	allColumns.forEach(function (column) {
		if (!column.children) {
			column.rowSpan = maxLevel - column.level + 1;
		} else {
			column.rowSpan = 1;
		}
		rows[column.level - 1].push(column);
	});

	return rows;
};

exports.default = {
	name: 'KcTableHeader',

	mixins: [_layoutObserver2.default],

	render: function render(h) {
		var _this = this;

		var originColumns = this.store.states.originColumns;
		var columnRows = convertToRows(originColumns, this.columns);
		// 是否拥有多级表头
		var isGroup = columnRows.length > 1;
		if (isGroup) this.$parent.isGroup = true;
		return h(
			'table',
			{
				'class': 'kc-table__header',
				attrs: { cellspacing: '0',
					cellpadding: '0',
					border: '0' }
			},
			[h('colgroup', [this._l(this.columns, function (column) {
				return h('col', {
					attrs: { name: column.id }
				});
			}), this.hasGutter ? h('col', {
				attrs: { name: 'gutter' }
			}) : '']), h(
				'thead',
				{ 'class': [{ 'is-group': isGroup, 'has-gutter': this.hasGutter }] },
				[this._l(columnRows, function (columns, rowIndex) {
					return h(
						'tr',
						{
							style: _this.getHeaderRowStyle(rowIndex),
							'class': _this.getHeaderRowClass(rowIndex)
						},
						[_this._l(columns, function (column, cellIndex) {
							return h(
								'th',
								{
									attrs: {
										colspan: column.colSpan,
										rowspan: column.rowSpan
									},
									on: {
										'mousemove': function mousemove($event) {
											return _this.handleMouseMove($event, column);
										},
										'mouseout': _this.handleMouseOut,
										'mousedown': function mousedown($event) {
											return _this.handleMouseDown($event, column);
										},
										'click': function click($event) {
											return _this.handleHeaderClick($event, column);
										},
										'contextmenu': function contextmenu($event) {
											return _this.handleHeaderContextMenu($event, column);
										}
									},

									style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
									'class': _this.getHeaderCellClass(rowIndex, cellIndex, columns, column) },
								[h(
									'div',
									{ 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
									[column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : column.label, column.sortable ? h(
										'span',
										{ 'class': 'caret-wrapper', on: {
												'click': function click($event) {
													return _this.handleSortClick($event, column);
												}
											}
										},
										[h('i', { 'class': 'sort-caret ascending', on: {
												'click': function click($event) {
													return _this.handleSortClick($event, column, 'ascending');
												}
											}
										}), h('i', { 'class': 'sort-caret descending', on: {
												'click': function click($event) {
													return _this.handleSortClick($event, column, 'descending');
												}
											}
										})]
									) : '', column.filterable ? h(
										'span',
										{ 'class': 'kc-table__column-filter-trigger', on: {
												'click': function click($event) {
													return _this.handleFilterClick($event, column);
												}
											}
										},
										[h('i', { 'class': ['kc-icon-arrow-down', column.filterOpened ? 'kc-icon-arrow-up' : ''] })]
									) : '']
								)]
							);
						}), _this.hasGutter ? h('th', { 'class': 'gutter' }) : '']
					);
				})]
			)]
		);
	},


	props: {
		fixed: String,
		store: {
			required: true
		},
		border: Boolean,
		defaultSort: {
			type: Object,
			default: function _default() {
				return {
					prop: '',
					order: ''
				};
			}
		}
	},

	components: {
		KcCheckbox: _checkbox2.default,
		KcTag: _tag2.default
	},

	computed: {
		table: function table() {
			return this.$parent;
		},
		isAllSelected: function isAllSelected() {
			return this.store.states.isAllSelected;
		},
		columnsCount: function columnsCount() {
			return this.store.states.columns.length;
		},
		leftFixedCount: function leftFixedCount() {
			return this.store.states.fixedColumns.length;
		},
		rightFixedCount: function rightFixedCount() {
			return this.store.states.rightFixedColumns.length;
		},
		leftFixedLeafCount: function leftFixedLeafCount() {
			return this.store.states.fixedLeafColumnsLength;
		},
		rightFixedLeafCount: function rightFixedLeafCount() {
			return this.store.states.rightFixedLeafColumnsLength;
		},
		columns: function columns() {
			return this.store.states.columns;
		},
		hasGutter: function hasGutter() {
			return !this.fixed && this.tableLayout.gutterWidth;
		}
	},

	created: function created() {
		this.filterPanels = {};
	},
	mounted: function mounted() {
		var _this2 = this;

		if (this.defaultSort.prop) {
			var states = this.store.states;
			states.sortProp = this.defaultSort.prop;
			states.sortOrder = this.defaultSort.order || 'ascending';
			this.$nextTick(function (_) {
				for (var i = 0, length = _this2.columns.length; i < length; i++) {
					var column = _this2.columns[i];
					if (column.property === states.sortProp) {
						column.order = states.sortOrder;
						states.sortingColumn = column;
						break;
					}
				}

				if (states.sortingColumn) {
					_this2.store.commit('changeSortCondition');
				}
			});
		}
	},
	beforeDestroy: function beforeDestroy() {
		var panels = this.filterPanels;
		for (var prop in panels) {
			if (panels.hasOwnProperty(prop) && panels[prop]) {
				panels[prop].$destroy(true);
			}
		}
	},


	methods: {
		isCellHidden: function isCellHidden(index, columns) {
			var start = 0;
			for (var i = 0; i < index; i++) {
				start += columns[i].colSpan;
			}
			var after = start + columns[index].colSpan - 1;
			if (this.fixed === true || this.fixed === 'left') {
				return after >= this.leftFixedLeafCount;
			} else if (this.fixed === 'right') {
				return start < this.columnsCount - this.rightFixedLeafCount;
			} else {
				return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
			}
		},
		getHeaderRowStyle: function getHeaderRowStyle(rowIndex) {
			var headerRowStyle = this.table.headerRowStyle;
			if (typeof headerRowStyle === 'function') {
				return headerRowStyle.call(null, { rowIndex: rowIndex });
			}
			return headerRowStyle;
		},
		getHeaderRowClass: function getHeaderRowClass(rowIndex) {
			var classes = [];

			var headerRowClassName = this.table.headerRowClassName;
			if (typeof headerRowClassName === 'string') {
				classes.push(headerRowClassName);
			} else if (typeof headerRowClassName === 'function') {
				classes.push(headerRowClassName.call(null, { rowIndex: rowIndex }));
			}

			return classes.join(' ');
		},
		getHeaderCellStyle: function getHeaderCellStyle(rowIndex, columnIndex, row, column) {
			var headerCellStyle = this.table.headerCellStyle;
			if (typeof headerCellStyle === 'function') {
				return headerCellStyle.call(null, {
					rowIndex: rowIndex,
					columnIndex: columnIndex,
					row: row,
					column: column
				});
			}
			return headerCellStyle;
		},
		getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
			var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

			if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
				classes.push('is-hidden');
			}

			if (!column.children) {
				classes.push('is-leaf');
			}

			if (column.sortable) {
				classes.push('is-sortable');
			}

			var headerCellClassName = this.table.headerCellClassName;
			if (typeof headerCellClassName === 'string') {
				classes.push(headerCellClassName);
			} else if (typeof headerCellClassName === 'function') {
				classes.push(headerCellClassName.call(null, {
					rowIndex: rowIndex,
					columnIndex: columnIndex,
					row: row,
					column: column
				}));
			}

			return classes.join(' ');
		},
		toggleAllSelection: function toggleAllSelection() {
			this.store.commit('toggleAllSelection');
		},
		handleFilterClick: function handleFilterClick(event, column) {
			event.stopPropagation();
			var target = event.target;
			var cell = target.tagName === 'TH' ? target : target.parentNode;
			cell = cell.querySelector('.kc-table__column-filter-trigger') || cell;
			var table = this.$parent;

			var filterPanel = this.filterPanels[column.id];

			if (filterPanel && column.filterOpened) {
				filterPanel.showPopper = false;
				return;
			}

			if (!filterPanel) {
				filterPanel = new _vue2.default(_filterPanel2.default);
				this.filterPanels[column.id] = filterPanel;
				if (column.filterPlacement) {
					filterPanel.placement = column.filterPlacement;
				}
				filterPanel.table = table;
				filterPanel.cell = cell;
				filterPanel.column = column;
				!this.$isServer && filterPanel.$mount(document.createElement('div'));
			}

			setTimeout(function () {
				filterPanel.showPopper = true;
			}, 16);
		},
		handleHeaderClick: function handleHeaderClick(event, column) {
			if (!column.filters && column.sortable) {
				this.handleSortClick(event, column);
			} else if (column.filters && !column.sortable) {
				this.handleFilterClick(event, column);
			}

			this.$parent.$emit('header-click', column, event);
		},
		handleHeaderContextMenu: function handleHeaderContextMenu(event, column) {
			this.$parent.$emit('header-contextmenu', column, event);
		},
		handleMouseDown: function handleMouseDown(event, column) {
			var _this3 = this;

			if (this.$isServer) return;
			if (column.children && column.children.length > 0) return;
			/* istanbul ignore if */
			if (this.draggingColumn && this.border) {
				this.dragging = true;

				this.$parent.resizeProxyVisible = true;

				var table = this.$parent;
				var tableEl = table.$el;
				var tableLeft = tableEl.getBoundingClientRect().left;
				var columnEl = this.$el.querySelector('th.' + column.id);
				var columnRect = columnEl.getBoundingClientRect();
				var minLeft = columnRect.left - tableLeft + 30;

				(0, _dom.addClass)(columnEl, 'noclick');

				this.dragState = {
					startMouseLeft: event.clientX,
					startLeft: columnRect.right - tableLeft,
					startColumnLeft: columnRect.left - tableLeft,
					tableLeft: tableLeft
				};

				var resizeProxy = table.$refs.resizeProxy;
				resizeProxy.style.left = this.dragState.startLeft + 'px';

				document.onselectstart = function () {
					return false;
				};
				document.ondragstart = function () {
					return false;
				};

				var handleMouseMove = function handleMouseMove(event) {
					var deltaLeft = event.clientX - _this3.dragState.startMouseLeft;
					var proxyLeft = _this3.dragState.startLeft + deltaLeft;

					resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
				};

				var handleMouseUp = function handleMouseUp() {
					if (_this3.dragging) {
						var _dragState = _this3.dragState,
						    startColumnLeft = _dragState.startColumnLeft,
						    startLeft = _dragState.startLeft;

						var finalLeft = parseInt(resizeProxy.style.left, 10);
						var columnWidth = finalLeft - startColumnLeft;
						column.width = column.realWidth = columnWidth;
						table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

						_this3.store.scheduleLayout();

						document.body.style.cursor = '';
						_this3.dragging = false;
						_this3.draggingColumn = null;
						_this3.dragState = {};

						table.resizeProxyVisible = false;
					}

					document.removeEventListener('mousemove', handleMouseMove);
					document.removeEventListener('mouseup', handleMouseUp);
					document.onselectstart = null;
					document.ondragstart = null;

					setTimeout(function () {
						(0, _dom.removeClass)(columnEl, 'noclick');
					}, 0);
				};

				document.addEventListener('mousemove', handleMouseMove);
				document.addEventListener('mouseup', handleMouseUp);
			}
		},
		handleMouseMove: function handleMouseMove(event, column) {
			if (column.children && column.children.length > 0) return;
			var target = event.target;
			while (target && target.tagName !== 'TH') {
				target = target.parentNode;
			}

			if (!column || !column.resizable) return;

			if (!this.dragging && this.border) {
				var rect = target.getBoundingClientRect();

				var bodyStyle = document.body.style;
				if (rect.width > 12 && rect.right - event.pageX < 8) {
					bodyStyle.cursor = 'col-resize';
					if ((0, _dom.hasClass)(target, 'is-sortable')) {
						target.style.cursor = 'col-resize';
					}
					this.draggingColumn = column;
				} else if (!this.dragging) {
					bodyStyle.cursor = '';
					if ((0, _dom.hasClass)(target, 'is-sortable')) {
						target.style.cursor = 'pointer';
					}
					this.draggingColumn = null;
				}
			}
		},
		handleMouseOut: function handleMouseOut() {
			if (this.$isServer) return;
			document.body.style.cursor = '';
		},
		toggleOrder: function toggleOrder(order) {
			return !order ? 'ascending' : order === 'ascending' ? 'descending' : null;
		},
		handleSortClick: function handleSortClick(event, column, givenOrder) {
			event.stopPropagation();
			var order = givenOrder || this.toggleOrder(column.order);

			var target = event.target;
			while (target && target.tagName !== 'TH') {
				target = target.parentNode;
			}

			if (target && target.tagName === 'TH') {
				if ((0, _dom.hasClass)(target, 'noclick')) {
					(0, _dom.removeClass)(target, 'noclick');
					return;
				}
			}

			if (!column.sortable) return;

			var states = this.store.states;
			var sortProp = states.sortProp;
			var sortOrder = void 0;
			var sortingColumn = states.sortingColumn;

			if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
				if (sortingColumn) {
					sortingColumn.order = null;
				}
				states.sortingColumn = column;
				sortProp = column.property;
			}

			if (!order) {
				sortOrder = column.order = null;
				states.sortingColumn = null;
				sortProp = null;
			} else {
				sortOrder = column.order = order;
			}

			states.sortProp = sortProp;
			states.sortOrder = sortOrder;

			this.store.commit('changeSortCondition');
		}
	},

	data: function data() {
		return {
			draggingColumn: null,
			dragging: false,
			dragState: {}
		};
	}
};

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_78929a8e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__ = __webpack_require__(394);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_78929a8e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropdowns = [];

!_vue2.default.prototype.$isServer && document.addEventListener('click', function (event) {
	dropdowns.forEach(function (dropdown) {
		var target = event.target;
		if (!dropdown || !dropdown.$el) return;
		if (target === dropdown.$el || dropdown.$el.contains(target)) {
			return;
		}
		dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
	});
});

exports.default = {
	open: function open(instance) {
		if (instance) {
			dropdowns.push(instance);
		}
	},
	close: function close(instance) {
		var index = dropdowns.indexOf(instance);
		if (index !== -1) {
			dropdowns.splice(instance, 1);
		}
	}
};

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"kc-zoom-in-top"}},[(_vm.multiple)?_c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleOutsideClick),expression:"handleOutsideClick"},{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"kc-table-filter"},[_c('div',{staticClass:"kc-table-filter__content"},[_c('kc-checkbox-group',{staticClass:"kc-table-filter__checkbox-group",model:{value:(_vm.filteredValue),callback:function ($$v) {_vm.filteredValue=$$v},expression:"filteredValue"}},_vm._l((_vm.filters),function(filter){return _c('kc-checkbox',{key:filter.value,attrs:{"label":filter.value}},[_vm._v(_vm._s(filter.text)+"\n\t\t\t\t")])}))],1),_c('div',{staticClass:"kc-table-filter__bottom"},[_c('button',{class:{ 'is-disabled': _vm.filteredValue.length === 0 },attrs:{"disabled":_vm.filteredValue.length === 0},on:{"click":_vm.handleConfirm}},[_vm._v(_vm._s(_vm.t('el.table.confirmFilter'))+"\n\t\t\t")]),_c('button',{on:{"click":_vm.handleReset}},[_vm._v(_vm._s(_vm.t('el.table.resetFilter')))])])]):_c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleOutsideClick),expression:"handleOutsideClick"},{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"kc-table-filter"},[_c('ul',{staticClass:"kc-table-filter__list"},[_c('li',{staticClass:"kc-table-filter__list-item",class:{ 'is-active': _vm.filterValue === undefined || _vm.filterValue === null },on:{"click":function($event){_vm.handleSelect(null)}}},[_vm._v(_vm._s(_vm.t('el.table.clearFilter'))+"\n\t\t\t")]),_vm._l((_vm.filters),function(filter){return _c('li',{key:filter.value,staticClass:"kc-table-filter__list-item",class:{ 'is-active': _vm.isActive(filter) },attrs:{"label":filter.value},on:{"click":function($event){_vm.handleSelect(filter.value)}}},[_vm._v(_vm._s(filter.text)+"\n\t\t\t")])})],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _layoutObserver = __webpack_require__(93);

var _layoutObserver2 = _interopRequireDefault(_layoutObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcTableFooter',

	mixins: [_layoutObserver2.default],

	render: function render(h) {
		var _this = this;

		var sums = [];
		this.columns.forEach(function (column, index) {
			if (index === 0) {
				sums[index] = _this.sumText;
				return;
			}
			var values = _this.store.states.data.map(function (item) {
				return Number(item[column.property]);
			});
			var precisions = [];
			var notNumber = true;
			values.forEach(function (value) {
				if (!isNaN(value)) {
					notNumber = false;
					var decimal = ('' + value).split('.')[1];
					precisions.push(decimal ? decimal.length : 0);
				}
			});
			var precision = Math.max.apply(null, precisions);
			if (!notNumber) {
				sums[index] = values.reduce(function (prev, curr) {
					var value = Number(curr);
					if (!isNaN(value)) {
						return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
					} else {
						return prev;
					}
				}, 0);
			} else {
				sums[index] = '';
			}
		});

		return h(
			'table',
			{
				'class': 'kc-table__footer',
				attrs: { cellspacing: '0',
					cellpadding: '0',
					border: '0' }
			},
			[h('colgroup', [this._l(this.columns, function (column) {
				return h('col', {
					attrs: { name: column.id }
				});
			}), this.hasGutter ? h('col', {
				attrs: { name: 'gutter' }
			}) : '']), h(
				'tbody',
				{ 'class': [{ 'has-gutter': this.hasGutter }] },
				[h('tr', [this._l(this.columns, function (column, cellIndex) {
					return h(
						'td',
						{
							attrs: {
								colspan: column.colSpan,
								rowspan: column.rowSpan
							},
							'class': [column.id, column.headerAlign, column.className || '', _this.isCellHidden(cellIndex, _this.columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName] },
						[h(
							'div',
							{ 'class': ['cell', column.labelClassName] },
							[_this.summaryMethod ? _this.summaryMethod({ columns: _this.columns, data: _this.store.states.data })[cellIndex] : sums[cellIndex]]
						)]
					);
				}), this.hasGutter ? h('th', { 'class': 'gutter' }) : ''])]
			)]
		);
	},


	props: {
		fixed: String,
		store: {
			required: true
		},
		summaryMethod: Function,
		sumText: String,
		border: Boolean,
		defaultSort: {
			type: Object,
			default: function _default() {
				return {
					prop: '',
					order: ''
				};
			}
		}
	},

	computed: {
		table: function table() {
			return this.$parent;
		},
		isAllSelected: function isAllSelected() {
			return this.store.states.isAllSelected;
		},
		columnsCount: function columnsCount() {
			return this.store.states.columns.length;
		},
		leftFixedCount: function leftFixedCount() {
			return this.store.states.fixedColumns.length;
		},
		rightFixedCount: function rightFixedCount() {
			return this.store.states.rightFixedColumns.length;
		},
		columns: function columns() {
			return this.store.states.columns;
		},
		hasGutter: function hasGutter() {
			return !this.fixed && this.tableLayout.gutterWidth;
		}
	},

	methods: {
		isCellHidden: function isCellHidden(index, columns) {
			if (this.fixed === true || this.fixed === 'left') {
				return index >= this.leftFixedCount;
			} else if (this.fixed === 'right') {
				var before = 0;
				for (var i = 0; i < index; i++) {
					before += columns[i].colSpan;
				}
				return before < this.columnsCount - this.rightFixedCount;
			} else {
				return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
			}
		}
	}
};

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-table",class:[{
      'kc-table--fit': _vm.fit,
      'kc-table--striped': _vm.stripe,
      'kc-table--border': _vm.border || _vm.isGroup,
      'kc-table--hidden': _vm.isHidden,
      'kc-table--group': _vm.isGroup,
      'kc-table--fluid-height': _vm.maxHeight,
      'kc-table--scrollable-x': _vm.layout.scrollX,
      'kc-table--scrollable-y': _vm.layout.scrollY,
      'kc-table--enable-row-hover': !_vm.store.states.isComplex,
      'kc-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100
    }, _vm.tableSize ? ("kc-table--" + _vm.tableSize) : ''],on:{"mouseleave":function($event){_vm.handleMouseLeave($event)}}},[_c('div',{ref:"hiddenColumns",staticClass:"hidden-columns"},[_vm._t("default")],2),(_vm.showHeader)?_c('div',{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleHeaderFooterMousewheel),expression:"handleHeaderFooterMousewheel"}],ref:"headerWrapper",staticClass:"kc-table__header-wrapper"},[_c('table-header',{ref:"tableHeader",style:({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),attrs:{"store":_vm.store,"border":_vm.border,"default-sort":_vm.defaultSort}})],1):_vm._e(),_c('div',{ref:"bodyWrapper",staticClass:"kc-table__body-wrapper",class:[_vm.layout.scrollX ? ("is-scrolling-" + _vm.scrollPosition) : 'is-scrolling-none'],style:([_vm.bodyHeight])},[_c('table-body',{style:({
           width: _vm.bodyWidth
        }),attrs:{"context":_vm.context,"store":_vm.store,"stripe":_vm.stripe,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle,"highlight":_vm.highlightCurrentRow}}),(!_vm.data || _vm.data.length === 0)?_c('div',{ref:"emptyBlock",staticClass:"kc-table__empty-block",style:({
          width: _vm.bodyWidth
        })},[_c('span',{staticClass:"kc-table__empty-text"},[_vm._t("empty",[_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))])],2)]):_vm._e(),(_vm.$slots.append)?_c('div',{ref:"appendWrapper",staticClass:"kc-table__append-wrapper"},[_vm._t("append")],2):_vm._e()],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"},{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleHeaderFooterMousewheel),expression:"handleHeaderFooterMousewheel"}],ref:"footerWrapper",staticClass:"kc-table__footer-wrapper"},[_c('table-footer',{style:({
          width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
        }),attrs:{"store":_vm.store,"border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"default-sort":_vm.defaultSort}})],1):_vm._e(),(_vm.fixedColumns.length > 0)?_c('div',{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleFixedMousewheel),expression:"handleFixedMousewheel"}],ref:"fixedWrapper",staticClass:"kc-table__fixed",style:([{
        width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
      },
      _vm.fixedHeight])},[(_vm.showHeader)?_c('div',{ref:"fixedHeaderWrapper",staticClass:"kc-table__fixed-header-wrapper"},[_c('table-header',{ref:"fixedTableHeader",style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"left","border":_vm.border,"store":_vm.store}})],1):_vm._e(),_c('div',{ref:"fixedBodyWrapper",staticClass:"kc-table__fixed-body-wrapper",style:([{
          top: _vm.layout.headerHeight + 'px'
        },
        _vm.fixedBodyHeight])},[_c('table-body',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"left","store":_vm.store,"stripe":_vm.stripe,"highlight":_vm.highlightCurrentRow,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle}}),(_vm.$slots.append)?_c('div',{staticClass:"kc-table__append-gutter",style:({
            height: _vm.layout.appendHeight + 'px'
          })}):_vm._e()],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"}],ref:"fixedFooterWrapper",staticClass:"kc-table__fixed-footer-wrapper"},[_c('table-footer',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"left","border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"store":_vm.store}})],1):_vm._e()]):_vm._e(),(_vm.rightFixedColumns.length > 0)?_c('div',{directives:[{name:"mousewheel",rawName:"v-mousewheel",value:(_vm.handleFixedMousewheel),expression:"handleFixedMousewheel"}],ref:"rightFixedWrapper",staticClass:"kc-table__fixed-right",style:([{
        width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '',
        right: _vm.layout.scrollY ? (_vm.border ? _vm.layout.gutterWidth : (_vm.layout.gutterWidth || 0)) + 'px' : ''
      },
      _vm.fixedHeight])},[(_vm.showHeader)?_c('div',{ref:"rightFixedHeaderWrapper",staticClass:"kc-table__fixed-header-wrapper"},[_c('table-header',{ref:"rightFixedTableHeader",style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"right","border":_vm.border,"store":_vm.store}})],1):_vm._e(),_c('div',{ref:"rightFixedBodyWrapper",staticClass:"kc-table__fixed-body-wrapper",style:([{
          top: _vm.layout.headerHeight + 'px'
        },
        _vm.fixedBodyHeight])},[_c('table-body',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"right","store":_vm.store,"stripe":_vm.stripe,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle,"highlight":_vm.highlightCurrentRow}})],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"}],ref:"rightFixedFooterWrapper",staticClass:"kc-table__fixed-footer-wrapper"},[_c('table-footer',{style:({
            width: _vm.bodyWidth
          }),attrs:{"fixed":"right","border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"store":_vm.store}})],1):_vm._e()]):_vm._e(),(_vm.rightFixedColumns.length > 0)?_c('div',{ref:"rightFixedPatch",staticClass:"kc-table__fixed-right-patch",style:({
        width: _vm.layout.scrollY ? _vm.layout.gutterWidth + 'px' : '0',
        height: _vm.layout.headerHeight + 'px'
      })}):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.resizeProxyVisible),expression:"resizeProxyVisible"}],ref:"resizeProxy",staticClass:"kc-table__column-resize-proxy"})])}
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(3);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isVNode = isVNode;
exports.getFirstComponentChild = getFirstComponentChild;
exports.getComponentChildrenCount = getComponentChildrenCount;

var _util = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVNode(node) {
	return node !== null && (typeof node === 'undefined' ? 'undefined' : (0, _typeof3.default)(node)) === 'object' && (0, _util.hasOwn)(node, 'componentOptions');
};

function getFirstComponentChild(children) {
	return children && children.filter(function (c) {
		return c && c.tag;
	})[0];
};

function getComponentChildrenCount(children) {
	var tagChildren = children && children.filter(function (c) {
		return c && c.tag;
	});
	return tagChildren.length;
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(4);

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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(5);

exports.default = {
	name: 'KcTag',
	props: {
		text: String,
		closable: Boolean,
		type: String,
		hit: Boolean,
		disableTransitions: Boolean,
		color: String,
		size: String,
		selected: {
			type: Boolean,
			default: false
		}
	},
	data: function data() {
		return {
			selectedStatus: this.selected
		};
	},

	methods: {
		handleClose: function handleClose(event) {
			this.$emit('close', event);
		},
		changeSelectState: function changeSelectState() {
			this.selectedStatus = !this.selectedStatus;
			this.$emit('click', this.selectedStatus);
		}
	},
	computed: {
		tagSize: function tagSize() {
			return this.size || (this.$ELEMENT || {}).size;
		},
		customColorStyle: function customColorStyle() {
			var mainColor = void 0;
			if (this.color) {
				if (this.color.indexOf('#') > -1) {
					mainColor = (0, _util.hexToRgb)(this.color).replace('(', 'a(').replace(')', ', .1)');
				} else {
					mainColor = (0, _util.colorNameToRgb)(this.color).replace('(', 'a(').replace(')', ', .1)');
				}
			} else {
				mainColor = this.color;
			}
			if (this.selectedStatus) {
				return {
					color: this.color
				};
			} else {
				return {
					color: this.color,
					backgroundColor: mainColor,
					borderColor: mainColor ? mainColor.replace('.1)', '.2)') : ''
				};
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

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tag = __webpack_require__(61);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tag2.default.install = function (Vue) {
	Vue.component(_tag2.default.name, _tag2.default);
};

exports.default = _tag2.default;

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

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _main = __webpack_require__(68);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
	Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_43fa10a0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(57);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_43fa10a0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 57:
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

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(4);

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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_695ccae7_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tag_vue__ = __webpack_require__(62);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_695ccae7_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tag_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.disableTransitions ? '' : 'kc-zoom-in-center'}},[_c('span',{staticClass:"kc-tag",class:[
        _vm.type ? 'kc-tag--' + _vm.type : '',
        _vm.tagSize && ("kc-tag--" + _vm.tagSize),
        {'is-hit': _vm.hit},
        {'is-selected': _vm.selectedStatus}
      ],style:(_vm.customColorStyle),on:{"click":function($event){_vm.changeSelectState()}}},[_vm._t("default"),(_vm.closable)?_c('i',{staticClass:"kc-tag__close kc-icon-close",on:{"click":function($event){$event.stopPropagation();return _vm.handleClose($event)}}}):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkboxGroup = __webpack_require__(86);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_checkboxGroup2.default.install = function (Vue) {
	Vue.component(_checkboxGroup2.default.name, _checkboxGroup2.default);
};

exports.default = _checkboxGroup2.default;

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vuePopper = __webpack_require__(15);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _debounce = __webpack_require__(27);

var _debounce2 = _interopRequireDefault(_debounce);

var _dom = __webpack_require__(2);

var _vdom = __webpack_require__(41);

var _util = __webpack_require__(5);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcTooltip',

	mixins: [_vuePopper2.default],

	props: {
		openDelay: {
			type: Number,
			default: 0
		},
		disabled: Boolean,
		manual: Boolean,
		effect: {
			type: String,
			default: 'dark'
		},
		arrowOffset: {
			type: Number,
			default: 0
		},
		popperClass: String,
		content: String,
		visibleArrow: {
			default: true
		},
		transition: {
			type: String,
			default: 'kc-fade-in-linear'
		},
		popperOptions: {
			default: function _default() {
				return {
					boundariesPadding: 10,
					gpuAcceleration: false
				};
			}
		},
		enterable: {
			type: Boolean,
			default: true
		},
		hideAfter: {
			type: Number,
			default: 0
		}
	},

	data: function data() {
		return {
			timeoutPending: null,
			focusing: false
		};
	},

	computed: {
		tooltipId: function tooltipId() {
			return 'kc-tooltip-' + (0, _util.generateId)();
		}
	},
	beforeCreate: function beforeCreate() {
		var _this = this;

		if (this.$isServer) return;

		this.popperVM = new _vue2.default({
			data: { node: '' },
			render: function render(h) {
				return this.node;
			}
		}).$mount();

		this.debounceClose = (0, _debounce2.default)(200, function () {
			return _this.handleClosePopper();
		});
	},
	render: function render(h) {
		var _this2 = this;

		if (this.popperVM) {
			this.popperVM.node = h(
				'transition',
				{
					attrs: {
						name: this.transition
					},
					on: {
						'afterLeave': this.doDestroy
					}
				},
				[h(
					'div',
					{
						on: {
							'mouseleave': function mouseleave() {
								_this2.setExpectedState(false);_this2.debounceClose();
							},
							'mouseenter': function mouseenter() {
								_this2.setExpectedState(true);
							}
						},

						ref: 'popper',
						attrs: { role: 'tooltip',
							id: this.tooltipId,
							'aria-hidden': this.disabled || !this.showPopper ? 'true' : 'false'
						},
						directives: [{
							name: 'show',
							value: !this.disabled && this.showPopper
						}],

						'class': ['kc-tooltip__popper', 'is-' + this.effect, this.popperClass] },
					[this.$slots.content || this.content]
				)]
			);
		}

		if (!this.$slots.default || !this.$slots.default.length) return this.$slots.default;

		var vnode = '';
		var count = (0, _vdom.getComponentChildrenCount)(this.$slots.default);
		if (count > 1) {
			vnode = h('span', [this.$slots.default]);
		} else {
			vnode = (0, _vdom.getFirstComponentChild)(this.$slots.default);
		}

		if (!vnode) return vnode;

		var data = vnode.data = vnode.data || {};
		data.staticClass = this.concatClass(data.staticClass, 'kc-tooltip');

		return vnode;
	},
	mounted: function mounted() {
		var _this3 = this;

		this.referenceElm = this.$el;
		if (this.$el.nodeType === 1) {
			this.$el.setAttribute('aria-describedby', this.tooltipId);
			this.$el.setAttribute('tabindex', 0);
			(0, _dom.on)(this.referenceElm, 'mouseenter', this.show);
			(0, _dom.on)(this.referenceElm, 'mouseleave', this.hide);
			(0, _dom.on)(this.referenceElm, 'focus', function () {
				if (!_this3.$slots.default || !_this3.$slots.default.length) {
					_this3.handleFocus();
					return;
				}
				var instance = _this3.$slots.default[0].componentInstance;
				if (instance && instance.focus) {
					instance.focus();
				} else {
					_this3.handleFocus();
				}
			});
			(0, _dom.on)(this.referenceElm, 'blur', this.handleBlur);
			(0, _dom.on)(this.referenceElm, 'click', this.removeFocusing);
		}
	},

	watch: {
		focusing: function focusing(val) {
			if (val) {
				(0, _dom.addClass)(this.referenceElm, 'focusing');
			} else {
				(0, _dom.removeClass)(this.referenceElm, 'focusing');
			}
		}
	},
	methods: {
		show: function show() {
			this.setExpectedState(true);
			this.handleShowPopper();
		},
		hide: function hide() {
			this.setExpectedState(false);
			this.debounceClose();
		},
		handleFocus: function handleFocus() {
			this.focusing = true;
			this.show();
		},
		handleBlur: function handleBlur() {
			this.focusing = false;
			this.hide();
		},
		removeFocusing: function removeFocusing() {
			this.focusing = false;
		},
		concatClass: function concatClass(a, b) {
			if (a && a.indexOf(b) > -1) return a;
			return a ? b ? a + ' ' + b : a : b || '';
		},
		handleShowPopper: function handleShowPopper() {
			var _this4 = this;

			if (!this.expectedState || this.manual) return;
			clearTimeout(this.timeout);
			this.timeout = setTimeout(function () {
				_this4.showPopper = true;
			}, this.openDelay);

			if (this.hideAfter > 0) {
				this.timeoutPending = setTimeout(function () {
					_this4.showPopper = false;
				}, this.hideAfter);
			}
		},
		handleClosePopper: function handleClosePopper() {
			if (this.enterable && this.expectedState || this.manual) return;
			clearTimeout(this.timeout);

			if (this.timeoutPending) {
				clearTimeout(this.timeoutPending);
			}
			this.showPopper = false;

			if (this.disabled) {
				this.doDestroy();
			}
		},
		setExpectedState: function setExpectedState(expectedState) {
			if (expectedState === false) {
				clearTimeout(this.timeoutPending);
			}
			this.expectedState = expectedState;
		}
	},

	destroyed: function destroyed() {
		var reference = this.referenceElm;
		(0, _dom.off)(reference, 'mouseenter', this.show);
		(0, _dom.off)(reference, 'mouseleave', this.hide);
		(0, _dom.off)(reference, 'focus', this.handleFocus);
		(0, _dom.off)(reference, 'blur', this.handleBlur);
		(0, _dom.off)(reference, 'click', this.removeFocusing);
	}
};

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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1ab8ce87_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__ = __webpack_require__(87);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1ab8ce87_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-checkbox-group",attrs:{"role":"group","aria-label":"checkbox-group"}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	created: function created() {
		this.tableLayout.addObserver(this);
	},
	destroyed: function destroyed() {
		this.tableLayout.removeObserver(this);
	},


	computed: {
		tableLayout: function tableLayout() {
			var layout = this.layout;
			if (!layout && this.table) {
				layout = this.table.layout;
			}
			if (!layout) {
				throw new Error('Can not find table layout.');
			}
			return layout;
		}
	},

	mounted: function mounted() {
		this.onColumnsChange(this.tableLayout);
		this.onScrollableChange(this.tableLayout);
	},
	updated: function updated() {
		if (this.__updated__) return;
		this.onColumnsChange(this.tableLayout);
		this.onScrollableChange(this.tableLayout);
		this.__updated__ = true;
	},


	methods: {
		onColumnsChange: function onColumnsChange() {
			var cols = this.$el.querySelectorAll('colgroup > col');
			if (!cols.length) return;
			var flattenColumns = this.tableLayout.getFlattenColumns();
			var columnsMap = {};
			flattenColumns.forEach(function (column) {
				columnsMap[column.id] = column;
			});
			for (var i = 0, j = cols.length; i < j; i++) {
				var col = cols[i];
				var name = col.getAttribute('name');
				var column = columnsMap[name];
				if (column) {
					col.setAttribute('width', column.realWidth || column.width);
				}
			}
		},
		onScrollableChange: function onScrollableChange(layout) {
			var cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
			for (var i = 0, j = cols.length; i < j; i++) {
				var col = cols[i];
				col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
			}
			var ths = this.$el.querySelectorAll('th.gutter');
			for (var _i = 0, _j = ths.length; _i < _j; _i++) {
				var th = ths[_i];
				th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0';
				th.style.display = layout.scrollY ? '' : 'none';
			}
		}
	}
};

/***/ })

/******/ });