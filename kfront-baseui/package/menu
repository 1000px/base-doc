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
/******/ 	return __webpack_require__(__webpack_require__.s = 318);
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emitter = __webpack_require__(3);

var _emitter2 = _interopRequireDefault(_emitter);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

var _ariaMenubar = __webpack_require__(320);

var _ariaMenubar2 = _interopRequireDefault(_ariaMenubar);

var _dom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: 'KcMenu',

	render: function render(h) {
		var component = h(
			'ul',
			{
				attrs: {
					role: 'menubar'
				},
				key: +this.collapse,
				style: { backgroundColor: this.backgroundColor || '' },
				'class': {
					'kc-menu--horizontal': this.mode === 'horizontal',
					'kc-menu--collapse': this.collapse,
					"kc-menu": true
				}
			},
			[this.$slots.default]
		);

		if (this.collapseTransition) {
			return h('kc-menu-collapse-transition', [component]);
		} else {
			return component;
		}
	},


	componentName: 'KcMenu',

	mixins: [_emitter2.default, _migrating2.default],

	provide: function provide() {
		return {
			rootMenu: this
		};
	},


	components: {
		'kc-menu-collapse-transition': {
			functional: true,
			render: function render(createElement, context) {
				var data = {
					props: {
						mode: 'out-in'
					},
					on: {
						beforeEnter: function beforeEnter(el) {
							el.style.opacity = 0.2;
						},
						enter: function enter(el) {
							(0, _dom.addClass)(el, 'kc-opacity-transition');
							el.style.opacity = 1;
						},
						afterEnter: function afterEnter(el) {
							(0, _dom.removeClass)(el, 'kc-opacity-transition');
							el.style.opacity = '';
						},
						beforeLeave: function beforeLeave(el) {
							if (!el.dataset) el.dataset = {};

							if ((0, _dom.hasClass)(el, 'kc-menu--collapse')) {
								(0, _dom.removeClass)(el, 'kc-menu--collapse');
								el.dataset.oldOverflow = el.style.overflow;
								el.dataset.scrollWidth = el.clientWidth;
								(0, _dom.addClass)(el, 'kc-menu--collapse');
							} else {
								(0, _dom.addClass)(el, 'kc-menu--collapse');
								el.dataset.oldOverflow = el.style.overflow;
								el.dataset.scrollWidth = el.clientWidth;
								(0, _dom.removeClass)(el, 'kc-menu--collapse');
							}

							el.style.width = el.scrollWidth + 'px';
							el.style.overflow = 'hidden';
						},
						leave: function leave(el) {
							// addClass(el, 'horizontal-collapse-transition');
							el.style.width = el.dataset.scrollWidth + 'px';
						}
					}
				};
				return createElement('transition', data, context.children);
			}
		}
	},

	props: {
		mode: {
			type: String,
			default: 'vertical'
		},
		defaultActive: {
			type: String,
			default: ''
		},
		defaultOpeneds: Array,
		uniqueOpened: Boolean,
		router: Boolean,
		menuTrigger: {
			type: String,
			default: 'hover'
		},
		collapse: Boolean,
		backgroundColor: String,
		textColor: String,
		activeTextColor: String,
		collapseTransition: {
			type: Boolean,
			default: true
		}
	},
	data: function data() {
		return {
			activeIndex: this.defaultActive,
			openedMenus: this.defaultOpeneds && !this.collapse ? this.defaultOpeneds.slice(0) : [],
			items: {},
			submenus: {}
		};
	},

	computed: {
		hoverBackground: function hoverBackground() {
			return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : '';
		},
		isMenuPopup: function isMenuPopup() {
			return this.mode === 'horizontal' || this.mode === 'vertical' && this.collapse;
		}
	},
	watch: {
		defaultActive: 'updateActiveIndex',

		defaultOpeneds: function defaultOpeneds(value) {
			if (!this.collapse) {
				this.openedMenus = value;
			}
		},
		collapse: function collapse(value) {
			if (value) this.openedMenus = [];
			this.broadcast('KcSubmenu', 'toggle-collapse', value);
		}
	},
	methods: {
		updateActiveIndex: function updateActiveIndex() {
			var item = this.items[this.defaultActive];
			if (item) {
				this.activeIndex = item.index;
				this.initOpenedMenu();
			} else {
				this.activeIndex = null;
			}
		},
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {
					'theme': 'theme is removed.'
				}
			};
		},
		getColorChannels: function getColorChannels(color) {
			color = color.replace('#', '');
			if (/^[0-9a-fA-F]{3}$/.test(color)) {
				color = color.split('');
				for (var i = 2; i >= 0; i--) {
					color.splice(i, 0, color[i]);
				}
				color = color.join('');
			}
			if (/^[0-9a-fA-F]{6}$/.test(color)) {
				return {
					red: parseInt(color.slice(0, 2), 16),
					green: parseInt(color.slice(2, 4), 16),
					blue: parseInt(color.slice(4, 6), 16)
				};
			} else {
				return {
					red: 255,
					green: 255,
					blue: 255
				};
			}
		},
		mixColor: function mixColor(color, percent) {
			var _getColorChannels = this.getColorChannels(color),
			    red = _getColorChannels.red,
			    green = _getColorChannels.green,
			    blue = _getColorChannels.blue;

			if (percent > 0) {
				// shade given color
				red *= 1 - percent;
				green *= 1 - percent;
				blue *= 1 - percent;
			} else {
				// tint given color
				red += (255 - red) * percent;
				green += (255 - green) * percent;
				blue += (255 - blue) * percent;
			}
			return 'rgb(' + Math.round(red) + ', ' + Math.round(green) + ', ' + Math.round(blue) + ')';
		},
		addItem: function addItem(item) {
			this.$set(this.items, item.index, item);
		},
		removeItem: function removeItem(item) {
			delete this.items[item.index];
		},
		addSubmenu: function addSubmenu(item) {
			this.$set(this.submenus, item.index, item);
		},
		removeSubmenu: function removeSubmenu(item) {
			delete this.submenus[item.index];
		},
		openMenu: function openMenu(index, indexPath) {
			var openedMenus = this.openedMenus;
			if (openedMenus.indexOf(index) !== -1) return;
			// 将不在该菜单路径下的其余菜单收起
			// collapse all menu that are not under current menu item
			if (this.uniqueOpened) {
				this.openedMenus = openedMenus.filter(function (index) {
					return indexPath.indexOf(index) !== -1;
				});
			}
			this.openedMenus.push(index);
		},
		closeMenu: function closeMenu(index) {
			var i = this.openedMenus.indexOf(index);
			if (i !== -1) {
				this.openedMenus.splice(i, 1);
			}
		},
		handleSubmenuClick: function handleSubmenuClick(submenu) {
			var index = submenu.index,
			    indexPath = submenu.indexPath;

			var isOpened = this.openedMenus.indexOf(index) !== -1;

			if (isOpened) {
				this.closeMenu(index);
				this.$emit('close', index, indexPath);
			} else {
				this.openMenu(index, indexPath);
				this.$emit('open', index, indexPath);
			}
		},
		handleItemClick: function handleItemClick(item) {
			var _this = this;

			var index = item.index,
			    indexPath = item.indexPath;

			var oldActiveIndex = this.activeIndex;

			this.activeIndex = item.index;
			this.$emit('select', index, indexPath, item);

			if (this.mode === 'horizontal' || this.collapse) {
				this.openedMenus = [];
			}

			if (this.router) {
				this.routeToItem(item, function (error) {
					_this.activeIndex = oldActiveIndex;
					if (error) console.error(error);
				});
			}
		},

		// 初始化展开菜单
		// initialize opened menu
		initOpenedMenu: function initOpenedMenu() {
			var _this2 = this;

			var index = this.activeIndex;
			var activeItem = this.items[index];
			if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

			var indexPath = activeItem.indexPath;

			// 展开该菜单项的路径上所有子菜单
			// expand all submenus of the menu item
			indexPath.forEach(function (index) {
				var submenu = _this2.submenus[index];
				submenu && _this2.openMenu(index, submenu.indexPath);
			});
		},
		routeToItem: function routeToItem(item, onError) {
			var route = item.route || item.index;
			try {
				this.$router.push(route, function () {}, onError);
			} catch (e) {
				console.error(e);
			}
		},
		open: function open(index) {
			var _this3 = this;

			var indexPath = this.submenus[index.toString()].indexPath;

			indexPath.forEach(function (i) {
				return _this3.openMenu(i, indexPath);
			});
		},
		close: function close(index) {
			this.closeMenu(index);
		}
	},
	mounted: function mounted() {
		this.initOpenedMenu();
		this.$on('item-click', this.handleItemClick);
		this.$on('submenu-click', this.handleSubmenuClick);
		if (this.mode === 'horizontal') {
			new _ariaMenubar2.default(this.$el); // eslint-disable-line
		}
		this.$watch('items', this.updateActiveIndex);
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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _menu = __webpack_require__(319);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_menu2.default.install = function (Vue) {
	Vue.component(_menu2.default.name, _menu2.default);
};

exports.default = _menu2.default;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_menu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_menu_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ariaMenuitem = __webpack_require__(321);

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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ariaUtils = __webpack_require__(78);

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

var _ariaSubmenu = __webpack_require__(322);

var _ariaSubmenu2 = _interopRequireDefault(_ariaSubmenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(domNode) {
	this.domNode = domNode;
	this.submenu = null;
	this.init();
};

MenuItem.prototype.init = function () {
	this.domNode.setAttribute('tabindex', '0');
	var menuChild = this.domNode.querySelector('.kc-menu');
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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ariaUtils = __webpack_require__(78);

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

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 78:
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