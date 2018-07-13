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
/******/ 	return __webpack_require__(__webpack_require__.s = 271);
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

var _popupManager = __webpack_require__(15);

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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _popup = __webpack_require__(10);

var _popup2 = _interopRequireDefault(_popup);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcDialog',

	mixins: [_popup2.default, _emitter2.default, _migrating2.default],

	props: {
		title: {
			type: String,
			default: ''
		},

		modal: {
			type: Boolean,
			default: true
		},

		modalAppendToBody: {
			type: Boolean,
			default: true
		},

		appendToBody: {
			type: Boolean,
			default: false
		},

		lockScroll: {
			type: Boolean,
			default: true
		},

		closeOnClickModal: {
			type: Boolean,
			default: true
		},

		closeOnPressEscape: {
			type: Boolean,
			default: true
		},

		showClose: {
			type: Boolean,
			default: true
		},

		width: String,

		fullscreen: Boolean,

		customClass: {
			type: String,
			default: ''
		},

		top: {
			type: String,
			default: '15vh'
		},
		beforeClose: Function,
		center: {
			type: Boolean,
			default: false
		}
	},

	data: function data() {
		return {
			closed: false
		};
	},


	watch: {
		visible: function visible(val) {
			var _this = this;

			if (val) {
				this.closed = false;
				this.$emit('open');
				this.$el.addEventListener('scroll', this.updatePopper);
				this.$nextTick(function () {
					_this.$refs.dialog.scrollTop = 0;
				});
				if (this.appendToBody) {
					document.body.appendChild(this.$el);
				}
			} else {
				this.$el.removeEventListener('scroll', this.updatePopper);
				if (!this.closed) this.$emit('close');
			}
		}
	},

	computed: {
		style: function style() {
			var style = {};
			if (this.width) {
				style.width = this.width;
			}
			if (!this.fullscreen) {
				style.marginTop = this.top;
			}
			return style;
		}
	},

	methods: {
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {
					'size': 'size is removed.'
				}
			};
		},
		handleWrapperClick: function handleWrapperClick() {
			if (!this.closeOnClickModal) return;
			this.handleClose();
		},
		handleClose: function handleClose() {
			if (typeof this.beforeClose === 'function') {
				this.beforeClose(this.hide);
			} else {
				this.hide();
			}
		},
		hide: function hide(cancel) {
			if (cancel !== false) {
				this.$emit('update:visible', false);
				this.$emit('close');
				this.closed = true;
			}
		},
		updatePopper: function updatePopper() {
			this.broadcast('KcSelectDropdown', 'updatePopper');
			this.broadcast('KcDropdownMenu', 'updatePopper');
		}
	},

	mounted: function mounted() {
		if (this.visible) {
			this.rendered = true;
			this.open();
			if (this.appendToBody) {
				document.body.appendChild(this.$el);
			}
		}
	},
	destroyed: function destroyed() {
		// if appendToBody is true, remove DOM node after destroy
		if (this.appendToBody && this.$el && this.$el.parentNode) {
			this.$el.parentNode.removeChild(this.$el);
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

/***/ }),

/***/ 15:
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

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _component = __webpack_require__(272);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_component2.default.install = function (Vue) {
	Vue.component(_component2.default.name, _component2.default);
};

exports.default = _component2.default;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_component_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_component_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_component_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_component_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1af28a9a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_component_vue__ = __webpack_require__(273);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_component_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1af28a9a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_component_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"kc-dialog__wrapper",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.handleWrapperClick($event)}}},[_c('div',{ref:"dialog",staticClass:"kc-dialog",class:[{ 'is-fullscreen': _vm.fullscreen, 'kc-dialog--center': _vm.center }, _vm.customClass],style:(_vm.style)},[_c('div',{staticClass:"kc-dialog__header"},[_vm._t("title",[_c('span',{staticClass:"kc-dialog__title"},[_vm._v(_vm._s(_vm.title))])]),(_vm.showClose)?_c('button',{staticClass:"kc-dialog__headerbtn",attrs:{"type":"button","aria-label":"Close"},on:{"click":_vm.handleClose}},[_c('i',{staticClass:"kc-dialog__close kc-icon kc-icon-close"})]):_vm._e()],2),(_vm.rendered)?_c('div',{staticClass:"kc-dialog__body"},[_vm._t("default")],2):_vm._e(),(_vm.$slots.footer)?_c('div',{staticClass:"kc-dialog__footer"},[_vm._t("footer")],2):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

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