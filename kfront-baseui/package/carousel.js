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
/******/ 	return __webpack_require__(__webpack_require__.s = 226);
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

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _throttle = __webpack_require__(228);

var _throttle2 = _interopRequireDefault(_throttle);

var _resizeEvent = __webpack_require__(23);

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

exports.default = {
	name: 'KcCarousel',

	props: {
		initialIndex: {
			type: Number,
			default: 0
		},
		height: String,
		trigger: {
			type: String,
			default: 'hover'
		},
		autoplay: {
			type: Boolean,
			default: true
		},
		interval: {
			type: Number,
			default: 3000
		},
		indicatorPosition: String,
		indicator: {
			type: Boolean,
			default: true
		},
		arrow: {
			type: String,
			default: 'hover'
		},
		type: String
	},

	data: function data() {
		return {
			items: [],
			activeIndex: -1,
			containerWidth: 0,
			timer: null,
			hover: false
		};
	},


	computed: {
		hasLabel: function hasLabel() {
			return this.items.some(function (item) {
				return item.label.toString().length > 0;
			});
		}
	},

	watch: {
		items: function items(val) {
			if (val.length > 0) this.setActiveItem(this.initialIndex);
		},
		activeIndex: function activeIndex(val, oldVal) {
			this.resetItemPosition(oldVal);
			this.$emit('change', val, oldVal);
		},
		autoplay: function autoplay(val) {
			val ? this.startTimer() : this.pauseTimer();
		}
	},

	methods: {
		handleMouseEnter: function handleMouseEnter() {
			this.hover = true;
			this.pauseTimer();
		},
		handleMouseLeave: function handleMouseLeave() {
			this.hover = false;
			this.startTimer();
		},
		itemInStage: function itemInStage(item, index) {
			var length = this.items.length;
			if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
				return 'left';
			} else if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
				return 'right';
			}
			return false;
		},
		handleButtonEnter: function handleButtonEnter(arrow) {
			var _this = this;

			this.items.forEach(function (item, index) {
				if (arrow === _this.itemInStage(item, index)) {
					item.hover = true;
				}
			});
		},
		handleButtonLeave: function handleButtonLeave() {
			this.items.forEach(function (item) {
				item.hover = false;
			});
		},
		updateItems: function updateItems() {
			this.items = this.$children.filter(function (child) {
				return child.$options.name === 'KcCarouselItem';
			});
		},
		resetItemPosition: function resetItemPosition(oldIndex) {
			var _this2 = this;

			this.items.forEach(function (item, index) {
				item.translateItem(index, _this2.activeIndex, oldIndex);
			});
		},
		playSlides: function playSlides() {
			if (this.activeIndex < this.items.length - 1) {
				this.activeIndex++;
			} else {
				this.activeIndex = 0;
			}
		},
		pauseTimer: function pauseTimer() {
			clearInterval(this.timer);
		},
		startTimer: function startTimer() {
			if (this.interval <= 0 || !this.autoplay) return;
			this.timer = setInterval(this.playSlides, this.interval);
		},
		setActiveItem: function setActiveItem(index) {
			if (typeof index === 'string') {
				var filteredItems = this.items.filter(function (item) {
					return item.name === index;
				});
				if (filteredItems.length > 0) {
					index = this.items.indexOf(filteredItems[0]);
				}
			}
			index = Number(index);
			if (isNaN(index) || index !== Math.floor(index)) {
				"production" !== 'production' && console.warn('[Element Warn][Carousel]index must be an integer.');
				return;
			}
			var length = this.items.length;
			var oldIndex = this.activeIndex;
			if (index < 0) {
				this.activeIndex = length - 1;
			} else if (index >= length) {
				this.activeIndex = 0;
			} else {
				this.activeIndex = index;
			}
			if (oldIndex === this.activeIndex) {
				this.resetItemPosition(oldIndex);
			}
		},
		prev: function prev() {
			this.setActiveItem(this.activeIndex - 1);
		},
		next: function next() {
			this.setActiveItem(this.activeIndex + 1);
		},
		handleIndicatorClick: function handleIndicatorClick(index) {
			this.activeIndex = index;
		},
		handleIndicatorHover: function handleIndicatorHover(index) {
			if (this.trigger === 'hover' && index !== this.activeIndex) {
				this.activeIndex = index;
			}
		}
	},

	created: function created() {
		var _this3 = this;

		this.throttledArrowClick = (0, _throttle2.default)(300, true, function (index) {
			_this3.setActiveItem(index);
		});
		this.throttledIndicatorHover = (0, _throttle2.default)(300, function (index) {
			_this3.handleIndicatorHover(index);
		});
	},
	mounted: function mounted() {
		var _this4 = this;

		this.updateItems();
		this.$nextTick(function () {
			(0, _resizeEvent.addResizeListener)(_this4.$el, _this4.resetItemPosition);
			if (_this4.initialIndex < _this4.items.length && _this4.initialIndex >= 0) {
				_this4.activeIndex = _this4.initialIndex;
			}
			_this4.startTimer();
		});
	},
	beforeDestroy: function beforeDestroy() {
		if (this.$el) (0, _resizeEvent.removeResizeListener)(this.$el, this.resetItemPosition);
	}
};

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _main = __webpack_require__(227);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
	Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_c9444230_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(229);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_11e9b50b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(231);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
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
<<<<<<< HEAD
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_c9444230_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
=======
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_11e9b50b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/throttle");

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kc-carousel",class:{ 'kc-carousel--card': _vm.type === 'card' },on:{"mouseenter":function($event){$event.stopPropagation();return _vm.handleMouseEnter($event)},"mouseleave":function($event){$event.stopPropagation();return _vm.handleMouseLeave($event)}}},[_c('div',{staticClass:"kc-carousel__container",style:({ height: _vm.height })},[_c('transition',{attrs:{"name":"carousel-arrow-left"}},[(_vm.arrow !== 'never')?_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.arrow === 'always' || _vm.hover),expression:"arrow === 'always' || hover"}],staticClass:"kc-carousel__arrow kc-carousel__arrow--left",attrs:{"type":"button"},on:{"mouseenter":function($event){_vm.handleButtonEnter('left')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();_vm.throttledArrowClick(_vm.activeIndex - 1)}}},[_c('i',{staticClass:"kc-icon-arrow-left"})]):_vm._e()]),_c('transition',{attrs:{"name":"carousel-arrow-right"}},[(_vm.arrow !== 'never')?_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.arrow === 'always' || _vm.hover),expression:"arrow === 'always' || hover"}],staticClass:"kc-carousel__arrow kc-carousel__arrow--right",attrs:{"type":"button"},on:{"mouseenter":function($event){_vm.handleButtonEnter('right')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();_vm.throttledArrowClick(_vm.activeIndex + 1)}}},[_c('i',{staticClass:"kc-icon-arrow-right"})]):_vm._e()]),_vm._t("default")],2),(_vm.indicatorPosition !== 'none')?_c('ul',{staticClass:"kc-carousel__indicators",class:{ 'kc-carousel__indicators--labels': _vm.hasLabel, 'kc-carousel__indicators--outside': _vm.indicatorPosition === 'outside' || _vm.type === 'card' }},_vm._l((_vm.items),function(item,index){return _c('li',{staticClass:"kc-carousel__indicator",class:{ 'is-active': index === _vm.activeIndex },on:{"mouseenter":function($event){_vm.throttledIndicatorHover(index)},"click":function($event){$event.stopPropagation();_vm.handleIndicatorClick(index)}}},[_c('button',{staticClass:"kc-carousel__button"},[(_vm.hasLabel)?_c('span',[_vm._v(_vm._s(item.label))]):_vm._e()])])})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeResizeListener = exports.addResizeListener = undefined;

var _getIterator2 = __webpack_require__(7);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _resizeObserverPolyfill = __webpack_require__(31);

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

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ })

/******/ });