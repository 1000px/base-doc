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
/******/ 	return __webpack_require__(__webpack_require__.s = 419);
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
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _treeStore = __webpack_require__(421);

var _treeStore2 = _interopRequireDefault(_treeStore);

var _util = __webpack_require__(70);

var _treeNode = __webpack_require__(425);

var _treeNode2 = _interopRequireDefault(_treeNode);

var _locale = __webpack_require__(17);

var _emitter = __webpack_require__(4);

var _emitter2 = _interopRequireDefault(_emitter);

var _dom = __webpack_require__(2);

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

exports.default = {
	name: 'KcTree',

	mixins: [_emitter2.default],

	components: {
		KcTreeNode: _treeNode2.default
	},

	data: function data() {
		return {
			store: null,
			root: null,
			currentNode: null,
			treeItems: null,
			checkboxItems: [],
			dragState: {
				showDropIndicator: false,
				draggingNode: null,
				dropNode: null,
				allowDrop: true
			}
		};
	},


	props: {
		data: {
			type: Array
		},
		emptyText: {
			type: String,
			default: function _default() {
				return (0, _locale.t)('el.tree.emptyText');
			}
		},
		renderAfterExpand: {
			type: Boolean,
			default: true
		},
		nodeKey: String,
		checkStrictly: Boolean,
		defaultExpandAll: Boolean,
		expandOnClickNode: {
			type: Boolean,
			default: true
		},
		checkOnClickNode: Boolean,
		checkDescendants: {
			type: Boolean,
			default: false
		},
		autoExpandParent: {
			type: Boolean,
			default: true
		},
		defaultCheckedKeys: Array,
		defaultExpandedKeys: Array,
		renderContent: Function,
		showCheckbox: {
			type: Boolean,
			default: false
		},
		draggable: {
			type: Boolean,
			default: false
		},
		allowDrag: Function,
		allowDrop: Function,
		props: {
			default: function _default() {
				return {
					children: 'children',
					label: 'label',
					icon: 'icon',
					disabled: 'disabled'
				};
			}
		},
		lazy: {
			type: Boolean,
			default: false
		},
		highlightCurrent: Boolean,
		load: Function,
		filterNodeMethod: Function,
		accordion: Boolean,
		indent: {
			type: Number,
			default: 18
		}
	},

	computed: {
		children: {
			set: function set(value) {
				this.data = value;
			},
			get: function get() {
				return this.data;
			}
		},

		treeItemArray: function treeItemArray() {
			return Array.prototype.slice.call(this.treeItems);
		}
	},

	watch: {
		defaultCheckedKeys: function defaultCheckedKeys(newVal) {
			this.store.defaultCheckedKeys = newVal;
			this.store.setDefaultCheckedKey(newVal);
		},
		defaultExpandedKeys: function defaultExpandedKeys(newVal) {
			this.store.defaultExpandedKeys = newVal;
			this.store.setDefaultExpandedKeys(newVal);
		},
		data: function data(newVal) {
			this.store.setData(newVal);
		},
		checkboxItems: function checkboxItems(val) {
			Array.prototype.forEach.call(val, function (checkbox) {
				checkbox.setAttribute('tabindex', -1);
			});
		},
		checkStrictly: function checkStrictly(newVal) {
			this.store.checkStrictly = newVal;
		}
	},

	methods: {
		filter: function filter(value) {
			if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
			this.store.filter(value);
		},
		getNodeKey: function getNodeKey(node) {
			return (0, _util.getNodeKey)(this.nodeKey, node.data);
		},
		getNodePath: function getNodePath(data) {
			if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getNodePath');
			var node = this.store.getNode(data);
			if (!node) return [];
			var path = [node.data];
			var parent = node.parent;
			while (parent && parent !== this.root) {
				path.push(parent.data);
				parent = parent.parent;
			}
			return path.reverse();
		},
		getCheckedNodes: function getCheckedNodes(leafOnly) {
			return this.store.getCheckedNodes(leafOnly);
		},
		getCheckedKeys: function getCheckedKeys(leafOnly) {
			return this.store.getCheckedKeys(leafOnly);
		},
		getCurrentNode: function getCurrentNode() {
			var currentNode = this.store.getCurrentNode();
			return currentNode ? currentNode.data : null;
		},
		getCurrentKey: function getCurrentKey() {
			if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
			var currentNode = this.getCurrentNode();
			return currentNode ? currentNode[this.nodeKey] : null;
		},
		setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
			if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
			this.store.setCheckedNodes(nodes, leafOnly);
		},
		setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
			if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
			this.store.setCheckedKeys(keys, leafOnly);
		},
		setChecked: function setChecked(data, checked, deep) {
			this.store.setChecked(data, checked, deep);
		},
		getHalfCheckedNodes: function getHalfCheckedNodes() {
			return this.store.getHalfCheckedNodes();
		},
		getHalfCheckedKeys: function getHalfCheckedKeys() {
			return this.store.getHalfCheckedKeys();
		},
		setCurrentNode: function setCurrentNode(node) {
			if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
			this.store.setUserCurrentNode(node);
		},
		setCurrentKey: function setCurrentKey(key) {
			if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
			this.store.setCurrentNodeKey(key);
		},
		getNode: function getNode(data) {
			return this.store.getNode(data);
		},
		remove: function remove(data) {
			this.store.remove(data);
		},
		append: function append(data, parentNode) {
			this.store.append(data, parentNode);
		},
		insertBefore: function insertBefore(data, refNode) {
			this.store.insertBefore(data, refNode);
		},
		insertAfter: function insertAfter(data, refNode) {
			this.store.insertAfter(data, refNode);
		},
		handleNodeExpand: function handleNodeExpand(nodeData, node, instance) {
			this.broadcast('KcTreeNode', 'tree-node-expand', node);
			this.$emit('node-expand', nodeData, node, instance);
		},
		updateKeyChildren: function updateKeyChildren(key, data) {
			if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
			this.store.updateChildren(key, data);
		},
		initTabIndex: function initTabIndex() {
			this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
			this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
			var checkedItem = this.$el.querySelectorAll('.is-checked[role=treeitem]');
			if (checkedItem.length) {
				checkedItem[0].setAttribute('tabindex', 0);
				return;
			}
			this.treeItems[0] && this.treeItems[0].setAttribute('tabindex', 0);
		},
		handelKeydown: function handelKeydown(ev) {
			var currentItem = ev.target;
			if (currentItem.className.indexOf('el-tree-node') === -1) return;
			ev.preventDefault();
			var keyCode = ev.keyCode;
			this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
			var currentIndex = this.treeItemArray.indexOf(currentItem);
			var nextIndex = void 0;
			if ([38, 40].indexOf(keyCode) > -1) {
				// up、down
				if (keyCode === 38) {
					// up
					nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
				} else {
					nextIndex = currentIndex < this.treeItemArray.length - 1 ? currentIndex + 1 : 0;
				}
				this.treeItemArray[nextIndex].focus(); // 选中
			}
			if ([37, 39].indexOf(keyCode) > -1) {
				// left、right 展开
				currentItem.click(); // 选中
			}
			var hasInput = currentItem.querySelector('[type="checkbox"]');
			if ([13, 32].indexOf(keyCode) > -1 && hasInput) {
				// space enter选中checkbox
				hasInput.click();
			}
		}
	},

	created: function created() {
		var _this = this;

		this.isTree = true;

		this.store = new _treeStore2.default({
			key: this.nodeKey,
			data: this.data,
			lazy: this.lazy,
			props: this.props,
			load: this.load,
			currentNodeKey: this.currentNodeKey,
			checkStrictly: this.checkStrictly,
			checkDescendants: this.checkDescendants,
			defaultCheckedKeys: this.defaultCheckedKeys,
			defaultExpandedKeys: this.defaultExpandedKeys,
			autoExpandParent: this.autoExpandParent,
			defaultExpandAll: this.defaultExpandAll,
			filterNodeMethod: this.filterNodeMethod
		});

		this.root = this.store.root;

		var dragState = this.dragState;
		this.$on('tree-node-drag-start', function (event, treeNode) {
			if (typeof _this.allowDrag === 'function' && !_this.allowDrag(treeNode.node)) {
				event.preventDefault();
				return false;
			}
			event.dataTransfer.effectAllowed = 'move';

			// wrap in try catch to address IE's error when first param is 'text/plain'
			try {
				// setData is required for draggable to work in FireFox
				// the content has to be '' so dragging a node out of the tree won't open a new tab in FireFox
				event.dataTransfer.setData('text/plain', '');
			} catch (e) {}
			dragState.draggingNode = treeNode;
			_this.$emit('node-drag-start', treeNode.node, event);
		});

		this.$on('tree-node-drag-over', function (event, treeNode) {
			var dropNode = (0, _util.findNearestComponent)(event.target, 'KcTreeNode');
			var oldDropNode = dragState.dropNode;
			if (oldDropNode && oldDropNode !== dropNode) {
				(0, _dom.removeClass)(oldDropNode.$el, 'is-drop-inner');
			}
			var draggingNode = dragState.draggingNode;
			if (!draggingNode || !dropNode) return;

			var dropPrev = true;
			var dropInner = true;
			var dropNext = true;
			if (typeof _this.allowDrop === 'function') {
				dropPrev = _this.allowDrop(draggingNode.node, dropNode.node, 'prev');
				dropInner = _this.allowDrop(draggingNode.node, dropNode.node, 'inner');
				dropNext = _this.allowDrop(draggingNode.node, dropNode.node, 'next');
			}
			dragState.allowDrop = dropInner;
			event.dataTransfer.dropEffect = dropInner ? 'move' : 'none';
			if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
				if (oldDropNode) {
					_this.$emit('node-drag-leave', draggingNode.node, oldDropNode.node, event);
				}
				_this.$emit('node-drag-enter', draggingNode.node, dropNode.node, event);
			}

			if (dropPrev || dropInner || dropNext) {
				dragState.dropNode = dropNode;
			}

			if (dropNode.node.nextSibling === draggingNode.node) {
				dropNext = false;
			}
			if (dropNode.node.previousSibling === draggingNode.node) {
				dropPrev = false;
			}
			if (dropNode.node.contains(draggingNode.node, false)) {
				dropInner = false;
			}
			if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
				dropPrev = false;
				dropInner = false;
				dropNext = false;
			}

			var targetPosition = dropNode.$el.querySelector('.el-tree-node__expand-icon').getBoundingClientRect();
			var treePosition = _this.$el.getBoundingClientRect();

			var dropType = void 0;
			var prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.5 : 1 : -1;
			var nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.5 : 0 : 1;

			var indicatorTop = -9999;
			var distance = event.clientY - targetPosition.top;
			if (distance < targetPosition.height * prevPercent) {
				dropType = 'before';
			} else if (distance > targetPosition.height * nextPercent) {
				dropType = 'after';
			} else if (dropInner) {
				dropType = 'inner';
			} else {
				dropType = 'none';
			}

			var dropIndicator = _this.$refs.dropIndicator;
			if (dropType === 'before') {
				indicatorTop = targetPosition.top - treePosition.top;
			} else if (dropType === 'after') {
				indicatorTop = targetPosition.bottom - treePosition.top;
			}
			dropIndicator.style.top = indicatorTop + 'px';
			dropIndicator.style.left = targetPosition.right - treePosition.left + 'px';

			if (dropType === 'inner') {
				(0, _dom.addClass)(dropNode.$el, 'is-drop-inner');
			} else {
				(0, _dom.removeClass)(dropNode.$el, 'is-drop-inner');
			}

			dragState.showDropIndicator = dropType === 'before' || dropType === 'after';
			dragState.dropType = dropType;
			_this.$emit('node-drag-over', draggingNode.node, dropNode.node, event);
		});

		this.$on('tree-node-drag-end', function (event) {
			var draggingNode = dragState.draggingNode,
			    dropType = dragState.dropType,
			    dropNode = dragState.dropNode;

			event.preventDefault();
			event.dataTransfer.dropEffect = 'move';

			if (draggingNode && dropNode) {
				var data = draggingNode.node.data;
				if (dropType === 'before') {
					draggingNode.node.remove();
					dropNode.node.parent.insertBefore({ data: data }, dropNode.node);
				} else if (dropType === 'after') {
					draggingNode.node.remove();
					dropNode.node.parent.insertAfter({ data: data }, dropNode.node);
				} else if (dropType === 'inner') {
					dropNode.node.insertChild({ data: data });
					draggingNode.node.remove();
				}
				(0, _dom.removeClass)(dropNode.$el, 'is-drop-inner');

				_this.$emit('node-drag-end', draggingNode.node, dropNode.node, dropType, event);
				if (dropType !== 'none') {
					_this.$emit('node-drop', draggingNode.node, dropNode.node, dropType, event);
				}
			}
			if (draggingNode && !dropNode) {
				_this.$emit('node-drag-end', draggingNode.node, null, dropType, event);
			}

			dragState.showDropIndicator = false;
			dragState.draggingNode = null;
			dragState.dropNode = null;
			dragState.allowDrop = true;
		});
	},
	mounted: function mounted() {
		this.initTabIndex();
		this.$el.addEventListener('keydown', this.handelKeydown);
	},
	updated: function updated() {
		this.treeItems = this.$el.querySelectorAll('[role=treeitem]');
		this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
	}
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _collapseTransition = __webpack_require__(51);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

var _checkbox = __webpack_require__(35);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _emitter = __webpack_require__(4);

var _emitter2 = _interopRequireDefault(_emitter);

var _util = __webpack_require__(70);

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
//
//
//
//
//
//
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
	name: 'KcTreeNode',

	componentName: 'KcTreeNode',

	mixins: [_emitter2.default],

	props: {
		node: {
			default: function _default() {
				return {};
			}
		},
		props: {},
		renderContent: Function,
		renderAfterExpand: {
			type: Boolean,
			default: true
		}
	},

	components: {
		KcCollapseTransition: _collapseTransition2.default,
		KcCheckbox: _checkbox2.default,
		NodeContent: {
			props: {
				node: {
					required: true
				}
			},
			render: function render(h) {
				var parent = this.$parent;
				var tree = parent.tree;
				var node = this.node;
				var data = node.data,
				    store = node.store;

				return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, {
					_self: tree.$vnode.context,
					node: node,
					data: data,
					store: store
				}) : tree.$scopedSlots.default ? tree.$scopedSlots.default({ node: node, data: data }) : h(
					'span',
					{ 'class': 'el-tree-node__label' },
					[node.label]
				);
			}
		}
	},

	data: function data() {
		return {
			tree: null,
			expanded: false,
			childNodeRendered: false,
			showCheckbox: false,
			oldChecked: null,
			oldIndeterminate: null
		};
	},


	watch: {
		'node.indeterminate': function nodeIndeterminate(val) {
			this.handleSelectChange(this.node.checked, val);
		},
		'node.checked': function nodeChecked(val) {
			this.handleSelectChange(val, this.node.indeterminate);
		},
		'node.expanded': function nodeExpanded(val) {
			var _this = this;

			this.$nextTick(function () {
				return _this.expanded = val;
			});
			if (val) {
				this.childNodeRendered = true;
			}
		}
	},

	methods: {
		getNodeKey: function getNodeKey(node) {
			return (0, _util.getNodeKey)(this.tree.nodeKey, node.data);
		},
		handleSelectChange: function handleSelectChange(checked, indeterminate) {
			if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
				this.tree.$emit('check-change', this.node.data, checked, indeterminate);
			}
			this.oldChecked = checked;
			this.indeterminate = indeterminate;
		},
		handleClick: function handleClick() {
			var store = this.tree.store;
			store.setCurrentNode(this.node);
			this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
			this.tree.currentNode = this;
			if (this.tree.expandOnClickNode) {
				this.handleExpandIconClick();
			}
			if (this.tree.checkOnClickNode) {
				this.handleCheckChange(null, {
					target: { checked: !this.node.checked }
				});
			}
			this.tree.$emit('node-click', this.node.data, this.node, this);
		},
		handleContextMenu: function handleContextMenu(event) {
			if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
				event.stopPropagation();
				event.preventDefault();
			}
			this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
		},
		handleExpandIconClick: function handleExpandIconClick() {
			if (this.node.isLeaf) return;
			if (this.expanded) {
				this.tree.$emit('node-collapse', this.node.data, this.node, this);
				this.node.collapse();
			} else {
				this.node.expand();
				this.$emit('node-expand', this.node.data, this.node, this);
			}
		},
		handleCheckChange: function handleCheckChange(value, ev) {
			var _this2 = this;

			this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
			this.$nextTick(function () {
				var store = _this2.tree.store;
				_this2.tree.$emit('check', _this2.node.data, {
					checkedNodes: store.getCheckedNodes(),
					checkedKeys: store.getCheckedKeys(),
					halfCheckedNodes: store.getHalfCheckedNodes(),
					halfCheckedKeys: store.getHalfCheckedKeys()
				});
			});
		},
		handleChildNodeExpand: function handleChildNodeExpand(nodeData, node, instance) {
			this.broadcast('KcTreeNode', 'tree-node-expand', node);
			this.tree.$emit('node-expand', nodeData, node, instance);
		},
		handleDragStart: function handleDragStart(event) {
			if (!this.tree.draggable) return;
			this.tree.$emit('tree-node-drag-start', event, this);
		},
		handleDragOver: function handleDragOver(event) {
			if (!this.tree.draggable) return;
			this.tree.$emit('tree-node-drag-over', event, this);
			event.preventDefault();
		},
		handleDrop: function handleDrop(event) {
			event.preventDefault();
		},
		handleDragEnd: function handleDragEnd(event) {
			if (!this.tree.draggable) return;
			this.tree.$emit('tree-node-drag-end', event, this);
		}
	},

	created: function created() {
		var _this3 = this;

		var parent = this.$parent;

		if (parent.isTree) {
			this.tree = parent;
		} else {
			this.tree = parent.tree;
		}

		var tree = this.tree;
		if (!tree) {
			console.warn('Can not find node\'s tree.');
		}

		var props = tree.props || {};
		var childrenKey = props['children'] || 'children';

		this.$watch('node.data.' + childrenKey, function () {
			_this3.node.updateChildren();
		});

		this.showCheckbox = tree.showCheckbox;

		if (this.node.expanded) {
			this.expanded = true;
			this.childNodeRendered = true;
		}

		if (this.tree.accordion) {
			this.$on('tree-node-expand', function (node) {
				if (_this3.node !== node) {
					_this3.node.collapse();
				}
			});
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

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tree = __webpack_require__(420);

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tree2.default.install = function (Vue) {
	Vue.component(_tree2.default.name, _tree2.default);
};

exports.default = _tree2.default;

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

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1a523f64_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tree_vue__ = __webpack_require__(427);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1a523f64_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tree_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__(11);

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(422);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(3);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

var _node = __webpack_require__(423);

var _node2 = _interopRequireDefault(_node);

var _util = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeStore = function () {
	function TreeStore(options) {
		var _this = this;

		(0, _classCallCheck3.default)(this, TreeStore);

		this.currentNode = null;
		this.currentNodeKey = null;

		for (var option in options) {
			if (options.hasOwnProperty(option)) {
				this[option] = options[option];
			}
		}

		this.nodesMap = {};

		this.root = new _node2.default({
			data: this.data,
			store: this
		});

		if (this.lazy && this.load) {
			var loadFn = this.load;
			loadFn(this.root, function (data) {
				_this.root.doCreateChildren(data);
				_this._initDefaultCheckedNodes();
			});
		} else {
			this._initDefaultCheckedNodes();
		}
	}

	(0, _createClass3.default)(TreeStore, [{
		key: 'filter',
		value: function filter(value) {
			var filterNodeMethod = this.filterNodeMethod;
			var traverse = function traverse(node) {
				var childNodes = node.root ? node.root.childNodes : node.childNodes;

				childNodes.forEach(function (child) {
					child.visible = filterNodeMethod.call(child, value, child.data, child);

					traverse(child);
				});

				if (!node.visible && childNodes.length) {
					var allHidden = true;

					childNodes.forEach(function (child) {
						if (child.visible) allHidden = false;
					});

					if (node.root) {
						node.root.visible = allHidden === false;
					} else {
						node.visible = allHidden === false;
					}
				}
				if (!value) return;

				if (node.visible && !node.isLeaf) node.expand();
			};

			traverse(this);
		}
	}, {
		key: 'setData',
		value: function setData(newVal) {
			var instanceChanged = newVal !== this.root.data;
			if (instanceChanged) {
				this.root.setData(newVal);
				this._initDefaultCheckedNodes();
			} else {
				this.root.updateChildren();
			}
		}
	}, {
		key: 'getNode',
		value: function getNode(data) {
			if (data instanceof _node2.default) return data;
			var key = (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object' ? data : (0, _util.getNodeKey)(this.key, data);
			return this.nodesMap[key] || null;
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(data, refData) {
			var refNode = this.getNode(refData);
			refNode.parent.insertBefore({ data: data }, refNode);
		}
	}, {
		key: 'insertAfter',
		value: function insertAfter(data, refData) {
			var refNode = this.getNode(refData);
			refNode.parent.insertAfter({ data: data }, refNode);
		}
	}, {
		key: 'remove',
		value: function remove(data) {
			var node = this.getNode(data);
			if (node) {
				node.parent.removeChild(node);
			}
		}
	}, {
		key: 'append',
		value: function append(data, parentData) {
			var parentNode = parentData ? this.getNode(parentData) : this.root;

			if (parentNode) {
				parentNode.insertChild({ data: data });
			}
		}
	}, {
		key: '_initDefaultCheckedNodes',
		value: function _initDefaultCheckedNodes() {
			var _this2 = this;

			var defaultCheckedKeys = this.defaultCheckedKeys || [];
			var nodesMap = this.nodesMap;

			defaultCheckedKeys.forEach(function (checkedKey) {
				var node = nodesMap[checkedKey];

				if (node) {
					node.setChecked(true, !_this2.checkStrictly);
				}
			});
		}
	}, {
		key: '_initDefaultCheckedNode',
		value: function _initDefaultCheckedNode(node) {
			var defaultCheckedKeys = this.defaultCheckedKeys || [];

			if (defaultCheckedKeys.indexOf(node.key) !== -1) {
				node.setChecked(true, !this.checkStrictly);
			}
		}
	}, {
		key: 'setDefaultCheckedKey',
		value: function setDefaultCheckedKey(newVal) {
			if (newVal !== this.defaultCheckedKeys) {
				this.defaultCheckedKeys = newVal;
				this._initDefaultCheckedNodes();
			}
		}
	}, {
		key: 'registerNode',
		value: function registerNode(node) {
			var key = this.key;
			if (!key || !node || !node.data) return;

			var nodeKey = node.key;
			if (nodeKey !== undefined) this.nodesMap[node.key] = node;
		}
	}, {
		key: 'deregisterNode',
		value: function deregisterNode(node) {
			var key = this.key;
			if (!key || !node || !node.data) return;

			var childNodes = node.childNodes;
			for (var i = 0, j = childNodes.length; i < j; i++) {
				var child = childNodes[i];
				this.deregisterNode(child);
			}

			delete this.nodesMap[node.key];
		}
	}, {
		key: 'getCheckedNodes',
		value: function getCheckedNodes() {
			var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			var checkedNodes = [];
			var traverse = function traverse(node) {
				var childNodes = node.root ? node.root.childNodes : node.childNodes;

				childNodes.forEach(function (child) {
					if (child.checked && (!leafOnly || leafOnly && child.isLeaf)) {
						checkedNodes.push(child.data);
					}

					traverse(child);
				});
			};

			traverse(this);

			return checkedNodes;
		}
	}, {
		key: 'getCheckedKeys',
		value: function getCheckedKeys() {
			var _this3 = this;

			var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			return this.getCheckedNodes(leafOnly).map(function (data) {
				return (data || {})[_this3.key];
			});
		}
	}, {
		key: 'getHalfCheckedNodes',
		value: function getHalfCheckedNodes() {
			var nodes = [];
			var traverse = function traverse(node) {
				var childNodes = node.root ? node.root.childNodes : node.childNodes;

				childNodes.forEach(function (child) {
					if (child.indeterminate) {
						nodes.push(child.data);
					}

					traverse(child);
				});
			};

			traverse(this);

			return nodes;
		}
	}, {
		key: 'getHalfCheckedKeys',
		value: function getHalfCheckedKeys() {
			var _this4 = this;

			return this.getHalfCheckedNodes().map(function (data) {
				return (data || {})[_this4.key];
			});
		}
	}, {
		key: '_getAllNodes',
		value: function _getAllNodes() {
			var allNodes = [];
			var nodesMap = this.nodesMap;
			for (var nodeKey in nodesMap) {
				if (nodesMap.hasOwnProperty(nodeKey)) {
					allNodes.push(nodesMap[nodeKey]);
				}
			}

			return allNodes;
		}
	}, {
		key: 'updateChildren',
		value: function updateChildren(key, data) {
			var node = this.nodesMap[key];
			if (!node) return;
			var childNodes = node.childNodes;
			for (var i = childNodes.length - 1; i >= 0; i--) {
				var child = childNodes[i];
				this.remove(child.data);
			}
			for (var _i = 0, j = data.length; _i < j; _i++) {
				var _child = data[_i];
				this.append(_child, node.data);
			}
		}
	}, {
		key: '_setCheckedKeys',
		value: function _setCheckedKeys(key) {
			var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var checkedKeys = arguments[2];

			var allNodes = this._getAllNodes().sort(function (a, b) {
				return b.level - a.level;
			});
			var cache = (0, _create2.default)(null);
			var keys = (0, _keys2.default)(checkedKeys);
			allNodes.forEach(function (node) {
				return node.setChecked(false, false);
			});
			for (var i = 0, j = allNodes.length; i < j; i++) {
				var node = allNodes[i];
				var nodeKey = node.data[key].toString();
				var checked = keys.indexOf(nodeKey) > -1;
				if (!checked) {
					if (node.checked && !cache[nodeKey]) {
						node.setChecked(false, false);
					}
					continue;
				}

				var parent = node.parent;
				while (parent && parent.level > 0) {
					cache[parent.data[key]] = true;
					parent = parent.parent;
				}

				if (node.isLeaf || this.checkStrictly) {
					node.setChecked(true, false);
					continue;
				}
				node.setChecked(true, true);

				if (leafOnly) {
					(function () {
						node.setChecked(false, false);
						var traverse = function traverse(node) {
							var childNodes = node.childNodes;
							childNodes.forEach(function (child) {
								if (!child.isLeaf) {
									child.setChecked(false, false);
								}
								traverse(child);
							});
						};
						traverse(node);
					})();
				}
			}
		}
	}, {
		key: 'setCheckedNodes',
		value: function setCheckedNodes(array) {
			var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var key = this.key;
			var checkedKeys = {};
			array.forEach(function (item) {
				checkedKeys[(item || {})[key]] = true;
			});

			this._setCheckedKeys(key, leafOnly, checkedKeys);
		}
	}, {
		key: 'setCheckedKeys',
		value: function setCheckedKeys(keys) {
			var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			this.defaultCheckedKeys = keys;
			var key = this.key;
			var checkedKeys = {};
			keys.forEach(function (key) {
				checkedKeys[key] = true;
			});

			this._setCheckedKeys(key, leafOnly, checkedKeys);
		}
	}, {
		key: 'setDefaultExpandedKeys',
		value: function setDefaultExpandedKeys(keys) {
			var _this5 = this;

			keys = keys || [];
			this.defaultExpandedKeys = keys;

			keys.forEach(function (key) {
				var node = _this5.getNode(key);
				if (node) node.expand(null, _this5.autoExpandParent);
			});
		}
	}, {
		key: 'setChecked',
		value: function setChecked(data, checked, deep) {
			var node = this.getNode(data);

			if (node) {
				node.setChecked(!!checked, deep);
			}
		}
	}, {
		key: 'getCurrentNode',
		value: function getCurrentNode() {
			return this.currentNode;
		}
	}, {
		key: 'setCurrentNode',
		value: function setCurrentNode(node) {
			this.currentNode = node;
		}
	}, {
		key: 'setUserCurrentNode',
		value: function setUserCurrentNode(node) {
			var key = node[this.key];
			var currNode = this.nodesMap[key];
			this.setCurrentNode(currNode);
		}
	}, {
		key: 'setCurrentNodeKey',
		value: function setCurrentNodeKey(key) {
			if (key === null) {
				this.currentNode = null;
				return;
			}
			var node = this.getNode(key);
			if (node) {
				this.currentNode = node;
			}
		}
	}]);
	return TreeStore;
}();

exports.default = TreeStore;
;

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/create");

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getChildState = undefined;

var _keys = __webpack_require__(11);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

var _merge = __webpack_require__(6);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getChildState = exports.getChildState = function getChildState(node) {
	var all = true;
	var none = true;
	var allWithoutDisable = true;
	for (var i = 0, j = node.length; i < j; i++) {
		var n = node[i];
		if (n.checked !== true || n.indeterminate) {
			all = false;
			if (!n.disabled) {
				allWithoutDisable = false;
			}
		}
		if (n.checked !== false || n.indeterminate) {
			none = false;
		}
	}

	return { all: all, none: none, allWithoutDisable: allWithoutDisable, half: !all && !none };
};

var reInitChecked = function reInitChecked(node) {
	if (node.childNodes.length === 0) return;

	var _getChildState = getChildState(node.childNodes),
	    all = _getChildState.all,
	    none = _getChildState.none,
	    half = _getChildState.half;

	if (all) {
		node.checked = true;
		node.indeterminate = false;
	} else if (half) {
		node.checked = false;
		node.indeterminate = true;
	} else if (none) {
		node.checked = false;
		node.indeterminate = false;
	}

	var parent = node.parent;
	if (!parent || parent.level === 0) return;

	if (!node.store.checkStrictly) {
		reInitChecked(parent);
	}
};

var getPropertyFromData = function getPropertyFromData(node, prop) {
	var props = node.store.props;
	var data = node.data || {};
	var config = props[prop];

	if (typeof config === 'function') {
		return config(data, node);
	} else if (typeof config === 'string') {
		return data[config];
	} else if (typeof config === 'undefined') {
		var dataProp = data[prop];
		return dataProp === undefined ? '' : dataProp;
	}
};

var nodeIdSeed = 0;

var Node = function () {
	function Node(options) {
		(0, _classCallCheck3.default)(this, Node);

		this.id = nodeIdSeed++;
		this.text = null;
		this.checked = false;
		this.indeterminate = false;
		this.data = null;
		this.expanded = false;
		this.parent = null;
		this.visible = true;

		for (var name in options) {
			if (options.hasOwnProperty(name)) {
				this[name] = options[name];
			}
		}

		// internal
		this.level = 0;
		this.loaded = false;
		this.childNodes = [];
		this.loading = false;

		if (this.parent) {
			this.level = this.parent.level + 1;
		}

		var store = this.store;
		if (!store) {
			throw new Error('[Node]store is required!');
		}
		store.registerNode(this);

		var props = store.props;
		if (props && typeof props.isLeaf !== 'undefined') {
			var isLeaf = getPropertyFromData(this, 'isLeaf');
			if (typeof isLeaf === 'boolean') {
				this.isLeafByUser = isLeaf;
			}
		}

		if (store.lazy !== true && this.data) {
			this.setData(this.data);

			if (store.defaultExpandAll) {
				this.expanded = true;
			}
		} else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
			this.expand();
		}

		if (!this.data) return;
		var defaultExpandedKeys = store.defaultExpandedKeys;
		var key = store.key;
		if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
			this.expand(null, store.autoExpandParent);
		}

		if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
			store.currentNode = this;
		}

		if (store.lazy) {
			store._initDefaultCheckedNode(this);
		}

		this.updateLeafState();
	}

	(0, _createClass3.default)(Node, [{
		key: 'setData',
		value: function setData(data) {
			if (!Array.isArray(data)) {
				(0, _util.markNodeData)(this, data);
			}

			this.data = data;
			this.childNodes = [];

			var children = void 0;
			if (this.level === 0 && this.data instanceof Array) {
				children = this.data;
			} else {
				children = getPropertyFromData(this, 'children') || [];
			}

			for (var i = 0, j = children.length; i < j; i++) {
				this.insertChild({ data: children[i] });
			}
		}
	}, {
		key: 'contains',
		value: function contains(target) {
			var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var walk = function walk(parent) {
				var children = parent.childNodes || [];
				var result = false;
				for (var i = 0, j = children.length; i < j; i++) {
					var child = children[i];
					if (child === target || deep && walk(child)) {
						result = true;
						break;
					}
				}
				return result;
			};

			return walk(this);
		}
	}, {
		key: 'remove',
		value: function remove() {
			var parent = this.parent;
			if (parent) {
				parent.removeChild(this);
			}
		}
	}, {
		key: 'insertChild',
		value: function insertChild(child, index, batch) {
			if (!child) throw new Error('insertChild error: child is required.');

			if (!(child instanceof Node)) {
				if (!batch) {
					var children = this.getChildren(true);
					if (children.indexOf(child.data) === -1) {
						if (typeof index === 'undefined' || index < 0) {
							children.push(child.data);
						} else {
							children.splice(index, 0, child.data);
						}
					}
				}
				(0, _merge2.default)(child, {
					parent: this,
					store: this.store
				});
				child = new Node(child);
			}

			child.level = this.level + 1;

			if (typeof index === 'undefined' || index < 0) {
				this.childNodes.push(child);
			} else {
				this.childNodes.splice(index, 0, child);
			}

			this.updateLeafState();
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(child, ref) {
			var index = void 0;
			if (ref) {
				index = this.childNodes.indexOf(ref);
			}
			this.insertChild(child, index);
		}
	}, {
		key: 'insertAfter',
		value: function insertAfter(child, ref) {
			var index = void 0;
			if (ref) {
				index = this.childNodes.indexOf(ref);
				if (index !== -1) index += 1;
			}
			this.insertChild(child, index);
		}
	}, {
		key: 'removeChild',
		value: function removeChild(child) {
			var children = this.getChildren() || [];
			var dataIndex = children.indexOf(child.data);
			if (dataIndex > -1) {
				children.splice(dataIndex, 1);
			}

			var index = this.childNodes.indexOf(child);

			if (index > -1) {
				this.store && this.store.deregisterNode(child);
				child.parent = null;
				this.childNodes.splice(index, 1);
			}

			this.updateLeafState();
		}
	}, {
		key: 'removeChildByData',
		value: function removeChildByData(data) {
			var targetNode = null;
			this.childNodes.forEach(function (node) {
				if (node.data === data) {
					targetNode = node;
				}
			});

			if (targetNode) {
				this.removeChild(targetNode);
			}
		}
	}, {
		key: 'expand',
		value: function expand(callback, expandParent) {
			var _this = this;

			var done = function done() {
				if (expandParent) {
					var parent = _this.parent;
					while (parent.level > 0) {
						parent.expanded = true;
						parent = parent.parent;
					}
				}
				_this.expanded = true;
				if (callback) callback();
			};

			if (this.shouldLoadData()) {
				this.loadData(function (data) {
					if (data instanceof Array) {
						if (_this.checked) {
							_this.setChecked(true, true);
						} else {
							reInitChecked(_this);
						}
						done();
					}
				});
			} else {
				done();
			}
		}
	}, {
		key: 'doCreateChildren',
		value: function doCreateChildren(array) {
			var _this2 = this;

			var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			array.forEach(function (item) {
				_this2.insertChild((0, _merge2.default)({ data: item }, defaultProps), undefined, true);
			});
		}
	}, {
		key: 'collapse',
		value: function collapse() {
			this.expanded = false;
		}
	}, {
		key: 'shouldLoadData',
		value: function shouldLoadData() {
			return this.store.lazy === true && this.store.load && !this.loaded;
		}
	}, {
		key: 'updateLeafState',
		value: function updateLeafState() {
			if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
				this.isLeaf = this.isLeafByUser;
				return;
			}
			var childNodes = this.childNodes;
			if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
				this.isLeaf = !childNodes || childNodes.length === 0;
				return;
			}
			this.isLeaf = false;
		}
	}, {
		key: 'setChecked',
		value: function setChecked(value, deep, recursion, passValue) {
			var _this3 = this;

			this.indeterminate = value === 'half';
			this.checked = value === true;

			if (this.store.checkStrictly) return;

			if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
				var _getChildState2 = getChildState(this.childNodes),
				    all = _getChildState2.all,
				    allWithoutDisable = _getChildState2.allWithoutDisable;

				if (!this.isLeaf && !all && allWithoutDisable) {
					this.checked = false;
					value = false;
				}

				var handleDescendants = function handleDescendants() {
					if (deep) {
						var childNodes = _this3.childNodes;
						for (var i = 0, j = childNodes.length; i < j; i++) {
							var child = childNodes[i];
							passValue = passValue || value !== false;
							var isCheck = child.disabled ? child.checked : passValue;
							child.setChecked(isCheck, deep, true, passValue);
						}

						var _getChildState3 = getChildState(childNodes),
						    half = _getChildState3.half,
						    _all = _getChildState3.all;

						if (!_all) {
							_this3.checked = _all;
							_this3.indeterminate = half;
						}
					}
				};

				if (this.shouldLoadData()) {
					// Only work on lazy load data.
					this.loadData(function () {
						handleDescendants();
						reInitChecked(_this3);
					}, {
						checked: value !== false
					});
					return;
				} else {
					handleDescendants();
				}
			}

			var parent = this.parent;
			if (!parent || parent.level === 0) return;

			if (!recursion) {
				reInitChecked(parent);
			}
		}
	}, {
		key: 'getChildren',
		value: function getChildren() {
			var forceInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
			// this is data
			if (this.level === 0) return this.data;
			var data = this.data;
			if (!data) return null;

			var props = this.store.props;
			var children = 'children';
			if (props) {
				children = props.children || 'children';
			}

			if (data[children] === undefined) {
				data[children] = null;
			}

			if (forceInit && !data[children]) {
				data[children] = [];
			}

			return data[children];
		}
	}, {
		key: 'updateChildren',
		value: function updateChildren() {
			var _this4 = this;

			var newData = this.getChildren() || [];
			var oldData = this.childNodes.map(function (node) {
				return node.data;
			});

			var newDataMap = {};
			var newNodes = [];

			newData.forEach(function (item, index) {
				if (item[_util.NODE_KEY]) {
					newDataMap[item[_util.NODE_KEY]] = { index: index, data: item };
				} else {
					newNodes.push({ index: index, data: item });
				}
			});

			oldData.forEach(function (item) {
				if (!newDataMap[item[_util.NODE_KEY]]) _this4.removeChildByData(item);
			});

			newNodes.forEach(function (_ref) {
				var index = _ref.index,
				    data = _ref.data;

				_this4.insertChild({ data: data }, index);
			});

			this.updateLeafState();
		}
	}, {
		key: 'loadData',
		value: function loadData(callback) {
			var _this5 = this;

			var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || (0, _keys2.default)(defaultProps).length)) {
				this.loading = true;

				var resolve = function resolve(children) {
					_this5.loaded = true;
					_this5.loading = false;
					_this5.childNodes = [];

					_this5.doCreateChildren(children, defaultProps);

					_this5.updateLeafState();
					if (callback) {
						callback.call(_this5, children);
					}
				};

				this.store.load(this, resolve);
			} else {
				if (callback) {
					callback.call(this);
				}
			}
		}
	}, {
		key: 'label',
		get: function get() {
			return getPropertyFromData(this, 'label');
		}
	}, {
		key: 'icon',
		get: function get() {
			return getPropertyFromData(this, 'icon');
		}
	}, {
		key: 'key',
		get: function get() {
			var nodeKey = this.store.key;
			if (this.data) return this.data[nodeKey];
			return null;
		}
	}, {
		key: 'disabled',
		get: function get() {
			return getPropertyFromData(this, 'disabled');
		}
	}, {
		key: 'nextSibling',
		get: function get() {
			var parent = this.parent;
			if (parent) {
				var index = parent.childNodes.indexOf(this);
				if (index > -1) {
					return parent.childNodes[index + 1];
				}
			}
			return null;
		}
	}, {
		key: 'previousSibling',
		get: function get() {
			var parent = this.parent;
			if (parent) {
				var index = parent.childNodes.indexOf(this);
				if (index > -1) {
					return index > 0 ? parent.childNodes[index - 1] : null;
				}
			}
			return null;
		}
	}]);
	return Node;
}();

exports.default = Node;

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/define-property");

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_node_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_node_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_node_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_node_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_node_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_8ae44562_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tree_node_vue__ = __webpack_require__(426);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_tree_node_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_8ae44562_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_tree_node_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.node.visible),expression:"node.visible"}],ref:"node",staticClass:"el-tree-node",class:{
      'is-expanded': _vm.expanded,
      'is-current': _vm.tree.store.currentNode === _vm.node,
      'is-hidden': !_vm.node.visible,
      'is-focusable': !_vm.node.disabled,
      'is-checked': !_vm.node.disabled && _vm.node.checked
    },attrs:{"role":"treeitem","tabindex":"-1","aria-expanded":_vm.expanded,"aria-disabled":_vm.node.disabled,"aria-checked":_vm.node.checked,"draggable":_vm.tree.draggable},on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)},"contextmenu":function ($event) { return this$1.handleContextMenu($event); },"dragstart":function($event){$event.stopPropagation();return _vm.handleDragStart($event)},"dragover":function($event){$event.stopPropagation();return _vm.handleDragOver($event)},"dragend":function($event){$event.stopPropagation();return _vm.handleDragEnd($event)},"drop":function($event){$event.stopPropagation();return _vm.handleDrop($event)}}},[_c('div',{staticClass:"el-tree-node__content",style:({ 'padding-left': (_vm.node.level - 1) * _vm.tree.indent + 'px' })},[_c('span',{staticClass:"el-tree-node__expand-icon el-icon-caret-right",class:{ 'is-leaf': _vm.node.isLeaf, expanded: !_vm.node.isLeaf && _vm.expanded },on:{"click":function($event){$event.stopPropagation();return _vm.handleExpandIconClick($event)}}}),(_vm.showCheckbox)?_c('kc-checkbox',{attrs:{"indeterminate":_vm.node.indeterminate,"disabled":!!_vm.node.disabled},on:{"change":_vm.handleCheckChange},nativeOn:{"click":function($event){$event.stopPropagation();}},model:{value:(_vm.node.checked),callback:function ($$v) {_vm.$set(_vm.node, "checked", $$v)},expression:"node.checked"}}):_vm._e(),(_vm.node.loading)?_c('span',{staticClass:"el-tree-node__loading-icon el-icon-loading"}):_vm._e(),_c('node-content',{attrs:{"node":_vm.node}})],1),_c('kc-collapse-transition',[(!_vm.renderAfterExpand || _vm.childNodeRendered)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expanded),expression:"expanded"}],staticClass:"el-tree-node__children",attrs:{"role":"group","aria-expanded":_vm.expanded}},_vm._l((_vm.node.childNodes),function(child){return _c('kc-tree-node',{key:_vm.getNodeKey(child),attrs:{"render-content":_vm.renderContent,"render-after-expand":_vm.renderAfterExpand,"node":child},on:{"node-expand":_vm.handleChildNodeExpand}})})):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-tree",class:{
      'el-tree--highlight-current': _vm.highlightCurrent,
      'is-dragging': !!_vm.dragState.draggingNode,
      'is-drop-not-allow': !_vm.dragState.allowDrop,
      'is-drop-inner': _vm.dragState.dropType === 'inner'
    },attrs:{"role":"tree"}},[_vm._l((_vm.root.childNodes),function(child){return _c('kc-tree-node',{key:_vm.getNodeKey(child),attrs:{"node":child,"props":_vm.props,"render-after-expand":_vm.renderAfterExpand,"render-content":_vm.renderContent},on:{"node-expand":_vm.handleNodeExpand}})}),(!_vm.root.childNodes || _vm.root.childNodes.length === 0)?_c('div',{staticClass:"el-tree__empty-block"},[_c('span',{staticClass:"el-tree__empty-text"},[_vm._v(_vm._s(_vm.emptyText))])]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dragState.showDropIndicator),expression:"dragState.showDropIndicator"}],ref:"dropIndicator",staticClass:"el-tree__drop-indicator"})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

var _dom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = function () {
	function Transition() {
		(0, _classCallCheck3.default)(this, Transition);
	}

	(0, _createClass3.default)(Transition, [{
		key: 'beforeEnter',
		value: function beforeEnter(el) {
			(0, _dom.addClass)(el, 'collapse-transition');
			if (!el.dataset) el.dataset = {};

			el.dataset.oldPaddingTop = el.style.paddingTop;
			el.dataset.oldPaddingBottom = el.style.paddingBottom;

			el.style.height = '0';
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
		}
	}, {
		key: 'enter',
		value: function enter(el) {
			el.dataset.oldOverflow = el.style.overflow;
			if (el.scrollHeight !== 0) {
				el.style.height = el.scrollHeight + 'px';
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
			} else {
				el.style.height = '';
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
			}

			el.style.overflow = 'hidden';
		}
	}, {
		key: 'afterEnter',
		value: function afterEnter(el) {
			// for safari: remove class then reset height is necessary
			(0, _dom.removeClass)(el, 'collapse-transition');
			el.style.height = '';
			el.style.overflow = el.dataset.oldOverflow;
		}
	}, {
		key: 'beforeLeave',
		value: function beforeLeave(el) {
			if (!el.dataset) el.dataset = {};
			el.dataset.oldPaddingTop = el.style.paddingTop;
			el.dataset.oldPaddingBottom = el.style.paddingBottom;
			el.dataset.oldOverflow = el.style.overflow;

			el.style.height = el.scrollHeight + 'px';
			el.style.overflow = 'hidden';
		}
	}, {
		key: 'leave',
		value: function leave(el) {
			if (el.scrollHeight !== 0) {
				// for safari: add class after set height, or it will jump to zero height suddenly, weired
				(0, _dom.addClass)(el, 'collapse-transition');
				el.style.height = 0;
				el.style.paddingTop = 0;
				el.style.paddingBottom = 0;
			}
		}
	}, {
		key: 'afterLeave',
		value: function afterLeave(el) {
			(0, _dom.removeClass)(el, 'collapse-transition');
			el.style.height = '';
			el.style.overflow = el.dataset.oldOverflow;
			el.style.paddingTop = el.dataset.oldPaddingTop;
			el.style.paddingBottom = el.dataset.oldPaddingBottom;
		}
	}]);
	return Transition;
}();

exports.default = {
	name: 'KcCollapseTransition',
	functional: true,
	render: function render(h, _ref) {
		var children = _ref.children;

		var data = {
			on: new Transition()
		};

		return h('transition', data, children);
	}
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_checkbox_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_52ecb006_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(57);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_52ecb006_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
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
		'el-img-checkbox', 
		_vm.isChecked ? 'is-checked' : '',
		_vm.inline ? 'el-img-checkbox-inline':'el-img-checkbox-block']},[_c('div',{staticClass:"el-img-checkbox-item"},[_c('label',{staticClass:"el-checkbox",class:[
				_vm.border && _vm.checkboxSize ? 'el-checkbox--' + _vm.checkboxSize : '',
				{ 'is-disabled': _vm.isDisabled },
				{ 'is-bordered': _vm.border },
				{ 'is-checked': _vm.isChecked }
			],attrs:{"role":"checkbox","aria-checked":_vm.indeterminate ? 'mixed': _vm.isChecked,"aria-disabled":_vm.isDisabled,"id":_vm.id}},[_c('span',{staticClass:"el-checkbox__input",class:{
					'is-disabled': _vm.isDisabled,
					'is-checked': _vm.isChecked,
					'is-indeterminate': _vm.indeterminate,
					'is-focus': _vm.focus
				},attrs:{"aria-checked":"mixed"}},[_c('span',{staticClass:"el-checkbox__inner"}),(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","disabled":_vm.isDisabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}})])])]),_c('div',{staticClass:"el-img-checkbox-item"},[_c('img',{staticClass:"checkbox-img",attrs:{"src":_vm.src}})]),_c('div',{staticClass:"el-img-checkbox-item"},[(_vm.title)?_c('div',{staticClass:"el-img-checkbox-item-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),(_vm.description)?_c('div',{staticClass:"el-img-checkbox-item-desc"},[_vm._v(_vm._s(_vm.description))]):_vm._e()])]):_c('label',{staticClass:"el-checkbox",class:[
			_vm.border && _vm.checkboxSize ? 'el-checkbox--' + _vm.checkboxSize : '',
			{ 'is-disabled': _vm.isDisabled },
			{ 'is-bordered': _vm.border },
			{ 'is-checked': _vm.isChecked }
		],attrs:{"role":"checkbox","aria-checked":_vm.indeterminate ? 'mixed': _vm.isChecked,"aria-disabled":_vm.isDisabled,"id":_vm.id}},[_c('span',{staticClass:"el-checkbox__input",class:{
				'is-disabled': _vm.isDisabled,
				'is-checked': _vm.isChecked,
				'is-indeterminate': _vm.indeterminate,
				'is-focus': _vm.focus
			},attrs:{"aria-checked":"mixed"}},[_c('span',{staticClass:"el-checkbox__inner"}),(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","aria-hidden":"true","disabled":_vm.isDisabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}})]),(_vm.$slots.default || _vm.label)?_c('span',{staticClass:"el-checkbox__label"},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2):_vm._e()])}
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findNearestComponent = exports.getNodeKey = exports.markNodeData = exports.NODE_KEY = undefined;

var _defineProperty = __webpack_require__(424);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NODE_KEY = exports.NODE_KEY = '$treeNodeId';

var markNodeData = exports.markNodeData = function markNodeData(node, data) {
	if (data[NODE_KEY]) return;
	(0, _defineProperty2.default)(data, NODE_KEY, {
		value: node.id,
		enumerable: false,
		configurable: false,
		writable: false
	});
};

var getNodeKey = exports.getNodeKey = function getNodeKey(key, data) {
	if (!key) return data[NODE_KEY];
	return data[key];
};

var findNearestComponent = exports.findNearestComponent = function findNearestComponent(element, componentName) {
	var target = element;
	while (target && target.tagName !== 'BODY') {
		if (target.__vue__ && target.__vue__.$options.name === componentName) {
			return target.__vue__;
		}
		target = target.parentNode;
	}
	return null;
};

/***/ })

/******/ });