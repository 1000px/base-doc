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
/******/ 	return __webpack_require__(__webpack_require__.s = 396);
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

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tableColumn = __webpack_require__(397);

var _tableColumn2 = _interopRequireDefault(_tableColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tableColumn2.default.install = function (Vue) {
	Vue.component(_tableColumn2.default.name, _tableColumn2.default);
};

exports.default = _tableColumn2.default;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkbox = __webpack_require__(32);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tag = __webpack_require__(46);

var _tag2 = _interopRequireDefault(_tag);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columnIdSeed = 1;

var defaults = {
	default: {
		order: ''
	},
	selection: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: '',
		className: 'kc-table-column--selection'
	},
	expand: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ''
	},
	index: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: ''
	}
};

var forced = {
	selection: {
		renderHeader: function renderHeader(h, _ref) {
			var store = _ref.store;

			return h('kc-checkbox', {
				attrs: {
					disabled: store.states.data && store.states.data.length === 0,
					indeterminate: store.states.selection.length > 0 && !this.isAllSelected,

					value: this.isAllSelected },
				nativeOn: {
					'click': this.toggleAllSelection
				}
			});
		},
		renderCell: function renderCell(h, _ref2) {
			var row = _ref2.row,
			    column = _ref2.column,
			    store = _ref2.store,
			    $index = _ref2.$index;

			return h('kc-checkbox', {
				nativeOn: {
					'click': function click(event) {
						return event.stopPropagation();
					}
				},
				attrs: {
					value: store.isSelected(row),
					disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
				},
				on: {
					'input': function input() {
						store.commit('rowSelectedChanged', row);
					}
				}
			});
		},
		sortable: false,
		resizable: false
	},
	index: {
		renderHeader: function renderHeader(h, _ref3) {
			var column = _ref3.column;

			return column.label || '#';
		},
		renderCell: function renderCell(h, _ref4) {
			var $index = _ref4.$index,
			    column = _ref4.column;

			var i = $index + 1;
			var index = column.index;

			if (typeof index === 'number') {
				i = $index + index;
			} else if (typeof index === 'function') {
				i = index($index);
			}

			return h('div', [i]);
		},
		sortable: false
	},
	expand: {
		renderHeader: function renderHeader(h, _ref5) {
			var column = _ref5.column;

			return column.label || '';
		},
		renderCell: function renderCell(h, _ref6, proxy) {
			var row = _ref6.row,
			    store = _ref6.store;

			var expanded = store.states.expandRows.indexOf(row) > -1;
			return h(
				'div',
				{ 'class': 'kc-table__expand-icon ' + (expanded ? 'kc-table__expand-icon--expanded' : ''),
					on: {
						'click': function click(e) {
							return proxy.handleExpandClick(row, e);
						}
					}
				},
				[h('i', { 'class': 'kc-icon kc-icon-arrow-right' })]
			);
		},
		sortable: false,
		resizable: false,
		className: 'kc-table__expand-column'
	}
};

var getDefaultColumn = function getDefaultColumn(type, options) {
	var column = {};

	(0, _merge2.default)(column, defaults[type || 'default']);

	for (var name in options) {
		if (options.hasOwnProperty(name)) {
			var value = options[name];
			if (typeof value !== 'undefined') {
				column[name] = value;
			}
		}
	}

	if (!column.minWidth) {
		column.minWidth = 80;
	}

	column.realWidth = column.width === undefined ? column.minWidth : column.width;

	return column;
};

var DEFAULT_RENDER_CELL = function DEFAULT_RENDER_CELL(h, _ref7) {
	var row = _ref7.row,
	    column = _ref7.column,
	    $index = _ref7.$index;

	var property = column.property;
	var value = property && (0, _util.getPropByPath)(row, property).v;
	if (column && column.formatter) {
		return column.formatter(row, column, value, $index);
	}
	return value;
};

var parseWidth = function parseWidth(width) {
	if (width !== undefined) {
		width = parseInt(width, 10);
		if (isNaN(width)) {
			width = null;
		}
	}
	return width;
};

var parseMinWidth = function parseMinWidth(minWidth) {
	if (minWidth !== undefined) {
		minWidth = parseInt(minWidth, 10);
		if (isNaN(minWidth)) {
			minWidth = 80;
		}
	}
	return minWidth;
};

exports.default = {
	name: 'KcTableColumn',

	props: {
		type: {
			type: String,
			default: 'default'
		},
		label: String,
		className: String,
		labelClassName: String,
		property: String,
		prop: String,
		width: {},
		minWidth: {},
		renderHeader: Function,
		sortable: {
			type: [String, Boolean],
			default: false
		},
		sortMethod: Function,
		sortBy: [String, Function, Array],
		resizable: {
			type: Boolean,
			default: true
		},
		context: {},
		columnKey: String,
		align: String,
		headerAlign: String,
		showTooltipWhenOverflow: Boolean,
		showOverflowTooltip: Boolean,
		fixed: [Boolean, String],
		formatter: Function,
		selectable: Function,
		reserveSelection: Boolean,
		filterMethod: Function,
		filteredValue: Array,
		filters: Array,
		filterPlacement: String,
		filterMultiple: {
			type: Boolean,
			default: true
		},
		index: [Number, Function]
	},

	data: function data() {
		return {
			isSubColumn: false,
			columns: []
		};
	},
	beforeCreate: function beforeCreate() {
		this.row = {};
		this.column = {};
		this.$index = 0;
	},


	components: {
		KcCheckbox: _checkbox2.default,
		KcTag: _tag2.default
	},

	computed: {
		owner: function owner() {
			var parent = this.$parent;
			while (parent && !parent.tableId) {
				parent = parent.$parent;
			}
			return parent;
		},
		columnOrTableParent: function columnOrTableParent() {
			var parent = this.$parent;
			while (parent && !parent.tableId && !parent.columnId) {
				parent = parent.$parent;
			}
			return parent;
		}
	},

	created: function created() {
		var _this = this;

		var h = this.$createElement;

		this.customRender = this.$options.render;
		this.$options.render = function (h) {
			return h('div', _this.$slots.default);
		};

		var parent = this.columnOrTableParent;
		var owner = this.owner;
		this.isSubColumn = owner !== parent;
		this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++;

		var type = this.type;

		var width = parseWidth(this.width);
		var minWidth = parseMinWidth(this.minWidth);

		var isColumnGroup = false;

		var column = getDefaultColumn(type, {
			id: this.columnId,
			columnKey: this.columnKey,
			label: this.label,
			className: this.className,
			labelClassName: this.labelClassName,
			property: this.prop || this.property,
			type: type,
			renderCell: null,
			renderHeader: this.renderHeader,
			minWidth: minWidth,
			width: width,
			isColumnGroup: isColumnGroup,
			context: this.context,
			align: this.align ? 'is-' + this.align : null,
			headerAlign: this.headerAlign ? 'is-' + this.headerAlign : this.align ? 'is-' + this.align : null,
			sortable: this.sortable === '' ? true : this.sortable,
			sortMethod: this.sortMethod,
			sortBy: this.sortBy,
			resizable: this.resizable,
			showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
			formatter: this.formatter,
			selectable: this.selectable,
			reserveSelection: this.reserveSelection,
			fixed: this.fixed === '' ? true : this.fixed,
			filterMethod: this.filterMethod,
			filters: this.filters,
			filterable: this.filters || this.filterMethod,
			filterMultiple: this.filterMultiple,
			filterOpened: false,
			filteredValue: this.filteredValue || [],
			filterPlacement: this.filterPlacement || '',
			index: this.index
		});

		(0, _merge2.default)(column, forced[type] || {});

		this.columnConfig = column;

		var renderCell = column.renderCell;
		var _self = this;

		if (type === 'expand') {
			owner.renderExpanded = function (h, data) {
				return _self.$scopedSlots.default ? _self.$scopedSlots.default(data) : _self.$slots.default;
			};

			column.renderCell = function (h, data) {
				return h(
					'div',
					{ 'class': 'cell' },
					[renderCell(h, data, this._renderProxy)]
				);
			};

			return;
		}

		column.renderCell = function (h, data) {
			if (_self.$scopedSlots.default) {
				renderCell = function renderCell() {
					return _self.$scopedSlots.default(data);
				};
			}

			if (!renderCell) {
				renderCell = DEFAULT_RENDER_CELL;
			}

			return _self.showOverflowTooltip || _self.showTooltipWhenOverflow ? h(
				'div',
				{ 'class': 'cell kc-tooltip', style: { width: (data.column.realWidth || data.column.width) - 1 + 'px' } },
				[renderCell(h, data)]
			) : h(
				'div',
				{ 'class': 'cell' },
				[renderCell(h, data)]
			);
		};
	},
	destroyed: function destroyed() {
		if (!this.$parent) return;
		var parent = this.$parent;
		this.owner.store.commit('removeColumn', this.columnConfig, this.isSubColumn ? parent.columnConfig : null);
	},


	watch: {
		label: function label(newVal) {
			if (this.columnConfig) {
				this.columnConfig.label = newVal;
			}
		},
		prop: function prop(newVal) {
			if (this.columnConfig) {
				this.columnConfig.property = newVal;
			}
		},
		property: function property(newVal) {
			if (this.columnConfig) {
				this.columnConfig.property = newVal;
			}
		},
		filters: function filters(newVal) {
			if (this.columnConfig) {
				this.columnConfig.filters = newVal;
			}
		},
		filterMultiple: function filterMultiple(newVal) {
			if (this.columnConfig) {
				this.columnConfig.filterMultiple = newVal;
			}
		},
		align: function align(newVal) {
			if (this.columnConfig) {
				this.columnConfig.align = newVal ? 'is-' + newVal : null;

				if (!this.headerAlign) {
					this.columnConfig.headerAlign = newVal ? 'is-' + newVal : null;
				}
			}
		},
		headerAlign: function headerAlign(newVal) {
			if (this.columnConfig) {
				this.columnConfig.headerAlign = 'is-' + (newVal || this.align);
			}
		},
		width: function width(newVal) {
			if (this.columnConfig) {
				this.columnConfig.width = parseWidth(newVal);
				this.owner.store.scheduleLayout();
			}
		},
		minWidth: function minWidth(newVal) {
			if (this.columnConfig) {
				this.columnConfig.minWidth = parseMinWidth(newVal);
				this.owner.store.scheduleLayout();
			}
		},
		fixed: function fixed(newVal) {
			if (this.columnConfig) {
				this.columnConfig.fixed = newVal;
				this.owner.store.scheduleLayout(true);
			}
		},
		sortable: function sortable(newVal) {
			if (this.columnConfig) {
				this.columnConfig.sortable = newVal;
			}
		},
		index: function index(newVal) {
			if (this.columnConfig) {
				this.columnConfig.index = newVal;
			}
		},
		formatter: function formatter(newVal) {
			if (this.columnConfig) {
				this.columnConfig.formatter = newVal;
			}
		}
	},

	mounted: function mounted() {
		var owner = this.owner;
		var parent = this.columnOrTableParent;
		var columnIndex = void 0;

		if (!this.isSubColumn) {
			columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
		} else {
			columnIndex = [].indexOf.call(parent.$el.children, this.$el);
		}

		owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(4);

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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tag = __webpack_require__(59);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tag2.default.install = function (Vue) {
	Vue.component(_tag2.default.name, _tag2.default);
};

exports.default = _tag2.default;

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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tag_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_c2c9c010_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tag_vue__ = __webpack_require__(60);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_c2c9c010_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tag_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ 60:
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

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ })

/******/ });