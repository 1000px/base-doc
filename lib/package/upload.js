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
/******/ 	return __webpack_require__(__webpack_require__.s = 428);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_progress_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_progress_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_progress_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_progress_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_2a1469ca_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_progress_vue__ = __webpack_require__(171);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_progress_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_2a1469ca_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_progress_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-progress",class:[
      'el-progress--' + _vm.type,
      _vm.status ? 'is-' + _vm.status : '',
      {
        'el-progress--without-text': !_vm.showText,
        'el-progress--text-inside': _vm.textInside,
      }
    ],attrs:{"role":"progressbar","aria-valuenow":_vm.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},[(_vm.type === 'line')?_c('div',{staticClass:"el-progress-bar"},[_c('div',{staticClass:"el-progress-bar__outer",style:({height: _vm.strokeWidth + 'px'})},[_c('div',{staticClass:"el-progress-bar__inner",style:(_vm.barStyle)},[(_vm.showText && _vm.textInside)?_c('div',{staticClass:"el-progress-bar__innerText"},[_vm._v(_vm._s(_vm.percentage)+"%")]):_vm._e()])])]):_c('div',{staticClass:"el-progress-circle",style:({height: _vm.width + 'px', width: _vm.width + 'px'})},[_c('svg',{attrs:{"viewBox":"0 0 100 100"}},[_c('path',{staticClass:"el-progress-circle__track",attrs:{"d":_vm.trackPath,"stroke":"#e5e9f2","stroke-width":_vm.relativeStrokeWidth,"fill":"none"}}),_c('path',{staticClass:"el-progress-circle__path",style:(_vm.circlePathStyle),attrs:{"d":_vm.trackPath,"stroke-linecap":"round","stroke":_vm.stroke,"stroke-width":_vm.relativeStrokeWidth,"fill":"none"}})])]),(_vm.showText && !_vm.textInside)?_c('div',{staticClass:"el-progress__text",style:({fontSize: _vm.progressTextSize + 'px'})},[(!_vm.status)?[_vm._v(_vm._s(_vm.percentage)+"%")]:_c('i',{class:_vm.iconClass})],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _uploadList = __webpack_require__(430);

var _uploadList2 = _interopRequireDefault(_uploadList);

var _upload = __webpack_require__(432);

var _upload2 = _interopRequireDefault(_upload);

var _iframeUpload = __webpack_require__(435);

var _iframeUpload2 = _interopRequireDefault(_iframeUpload);

var _progress = __webpack_require__(83);

var _progress2 = _interopRequireDefault(_progress);

var _migrating = __webpack_require__(8);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

exports.default = {
	name: 'kcUpload',

	mixins: [_migrating2.default],

	components: {
		KcProgress: _progress2.default,
		UploadList: _uploadList2.default,
		Upload: _upload2.default,
		IframeUpload: _iframeUpload2.default
	},

	provide: function provide() {
		return {
			uploader: this
		};
	},


	inject: {
		elForm: {
			default: ''
		}
	},

	props: {
		action: {
			type: String,
			required: true
		},
		headers: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		data: Object,
		multiple: Boolean,
		name: {
			type: String,
			default: 'file'
		},
		drag: Boolean,
		dragger: Boolean,
		withCredentials: Boolean,
		showFileList: {
			type: Boolean,
			default: true
		},
		accept: String,
		type: {
			type: String,
			default: 'select'
		},
		beforeUpload: Function,
		beforeRemove: Function,
		onRemove: {
			type: Function,
			default: noop
		},
		onChange: {
			type: Function,
			default: noop
		},
		onPreview: {
			type: Function
		},
		onSuccess: {
			type: Function,
			default: noop
		},
		onProgress: {
			type: Function,
			default: noop
		},
		onError: {
			type: Function,
			default: noop
		},
		fileList: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		autoUpload: {
			type: Boolean,
			default: true
		},
		listType: {
			type: String,
			default: 'text' // text,picture,picture-card
		},
		httpRequest: Function,
		disabled: Boolean,
		limit: Number,
		onExceed: {
			type: Function,
			default: noop
		}
	},

	data: function data() {
		return {
			uploadFiles: [],
			dragOver: false,
			draging: false,
			tempIndex: 1
		};
	},


	computed: {
		uploadDisabled: function uploadDisabled() {
			return this.disabled || (this.elForm || {}).disabled;
		}
	},

	watch: {
		fileList: {
			immediate: true,
			handler: function handler(fileList) {
				var _this = this;

				this.uploadFiles = fileList.map(function (item) {
					item.uid = item.uid || Date.now() + _this.tempIndex++;
					item.status = item.status || 'success';
					return item;
				});
			}
		}
	},

	methods: {
		handleStart: function handleStart(rawFile) {
			rawFile.uid = Date.now() + this.tempIndex++;
			var file = {
				status: 'ready',
				name: rawFile.name,
				size: rawFile.size,
				percentage: 0,
				uid: rawFile.uid,
				raw: rawFile
			};

			try {
				file.url = URL.createObjectURL(rawFile);
			} catch (err) {
				console.error(err);
				return;
			}

			this.uploadFiles.push(file);
			this.onChange(file, this.uploadFiles);
		},
		handleProgress: function handleProgress(ev, rawFile) {
			var file = this.getFile(rawFile);
			this.onProgress(ev, file, this.uploadFiles);
			file.status = 'uploading';
			file.percentage = ev.percent || 0;
		},
		handleSuccess: function handleSuccess(res, rawFile) {
			var file = this.getFile(rawFile);

			if (file) {
				file.status = 'success';
				file.response = res;

				this.onSuccess(res, file, this.uploadFiles);
				this.onChange(file, this.uploadFiles);
			}
		},
		handleError: function handleError(err, rawFile) {
			var file = this.getFile(rawFile);
			var fileList = this.uploadFiles;

			file.status = 'fail';

			fileList.splice(fileList.indexOf(file), 1);

			this.onError(err, file, this.uploadFiles);
			this.onChange(file, this.uploadFiles);
		},
		handleRemove: function handleRemove(file, raw) {
			var _this2 = this;

			if (raw) {
				file = this.getFile(raw);
			}
			var doRemove = function doRemove() {
				_this2.abort(file);
				var fileList = _this2.uploadFiles;
				fileList.splice(fileList.indexOf(file), 1);
				_this2.onRemove(file, fileList);
			};

			if (!this.beforeRemove) {
				doRemove();
			} else if (typeof this.beforeRemove === 'function') {
				var before = this.beforeRemove(file, this.uploadFiles);
				if (before && before.then) {
					before.then(function () {
						console.log(1111);
						doRemove();
					}, noop);
				} else if (before !== false) {
					doRemove();
				}
			}
		},
		getFile: function getFile(rawFile) {
			var fileList = this.uploadFiles;
			var target = void 0;
			fileList.every(function (item) {
				target = rawFile.uid === item.uid ? item : null;
				return !target;
			});
			return target;
		},
		abort: function abort(file) {
			this.$refs['upload-inner'].abort(file);
		},
		clearFiles: function clearFiles() {
			this.uploadFiles = [];
		},
		submit: function submit() {
			var _this3 = this;

			this.uploadFiles.filter(function (file) {
				return file.status === 'ready';
			}).forEach(function (file) {
				_this3.$refs['upload-inner'].upload(file.raw);
			});
		},
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {
					'default-file-list': 'default-file-list is renamed to file-list.',
					'show-upload-list': 'show-upload-list is renamed to show-file-list.',
					'thumbnail-mode': 'thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan'
				}
			};
		}
	},

	render: function render(h) {
		var uploadList = void 0;

		if (this.showFileList) {
			uploadList = h(_uploadList2.default, {
				attrs: {
					disabled: this.uploadDisabled,
					listType: this.listType,
					files: this.uploadFiles,

					handlePreview: this.onPreview },
				on: {
					'remove': this.handleRemove
				}
			});
		}

		var uploadData = {
			props: {
				type: this.type,
				drag: this.drag,
				action: this.action,
				multiple: this.multiple,
				'before-upload': this.beforeUpload,
				'with-credentials': this.withCredentials,
				headers: this.headers,
				name: this.name,
				data: this.data,
				accept: this.accept,
				fileList: this.uploadFiles,
				autoUpload: this.autoUpload,
				listType: this.listType,
				disabled: this.uploadDisabled,
				limit: this.limit,
				'on-exceed': this.onExceed,
				'on-start': this.handleStart,
				'on-progress': this.handleProgress,
				'on-success': this.handleSuccess,
				'on-error': this.handleError,
				'on-preview': this.onPreview,
				'on-remove': this.handleRemove,
				'http-request': this.httpRequest
			},
			ref: 'upload-inner'
		};

		var trigger = this.$slots.trigger || this.$slots.default;
		var uploadComponent = typeof FormData !== 'undefined' || this.$isServer ? h(
			'upload',
			uploadData,
			[trigger]
		) : h(
			'iframeUpload',
			uploadData,
			[trigger]
		);

		return h('div', [this.listType === 'picture-card' ? uploadList : '', this.$slots.trigger ? [uploadComponent, this.$slots.default] : uploadComponent, this.$slots.tip, this.listType !== 'picture-card' ? uploadList : '']);
	}
};

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _locale = __webpack_require__(12);

var _locale2 = _interopRequireDefault(_locale);

var _progress = __webpack_require__(83);

var _progress2 = _interopRequireDefault(_progress);

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

exports.default = {
	mixins: [_locale2.default],

	data: function data() {
		return {
			focusing: false
		};
	},

	components: { KcProgress: _progress2.default },

	props: {
		files: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		disabled: {
			type: Boolean,
			default: false
		},
		handlePreview: Function,
		listType: String
	},
	methods: {
		parsePercentage: function parsePercentage(val) {
			return parseInt(val, 10);
		},
		handleClick: function handleClick(file) {
			this.handlePreview && this.handlePreview(file);
		}
	}
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__(95);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _keys = __webpack_require__(11);

var _keys2 = _interopRequireDefault(_keys);

var _ajax = __webpack_require__(433);

var _ajax2 = _interopRequireDefault(_ajax);

var _uploadDragger = __webpack_require__(201);

var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	inject: ['uploader'],
	components: {
		UploadDragger: _uploadDragger2.default
	},
	props: {
		type: String,
		action: {
			type: String,
			required: true
		},
		name: {
			type: String,
			default: 'file'
		},
		data: Object,
		headers: Object,
		withCredentials: Boolean,
		multiple: Boolean,
		accept: String,
		onStart: Function,
		onProgress: Function,
		onSuccess: Function,
		onError: Function,
		beforeUpload: Function,
		drag: Boolean,
		onPreview: {
			type: Function,
			default: function _default() {}
		},
		onRemove: {
			type: Function,
			default: function _default() {}
		},
		fileList: Array,
		autoUpload: Boolean,
		listType: String,
		httpRequest: {
			type: Function,
			default: _ajax2.default
		},
		disabled: Boolean,
		limit: Number,
		onExceed: Function
	},

	data: function data() {
		return {
			mouseover: false,
			reqs: {}
		};
	},


	methods: {
		isImage: function isImage(str) {
			return str.indexOf('image') !== -1;
		},
		handleChange: function handleChange(ev) {
			var files = ev.target.files;

			if (!files) return;
			this.uploadFiles(files);
		},
		uploadFiles: function uploadFiles(files) {
			var _this = this;

			if (this.limit && this.fileList.length + files.length > this.limit) {
				this.onExceed && this.onExceed(files, this.fileList);
				return;
			}

			var postFiles = Array.prototype.slice.call(files);
			if (!this.multiple) {
				postFiles = postFiles.slice(0, 1);
			}

			if (postFiles.length === 0) {
				return;
			}

			postFiles.forEach(function (rawFile) {
				_this.onStart(rawFile);
				if (_this.autoUpload) _this.upload(rawFile);
			});
		},
		upload: function upload(rawFile, file) {
			var _this2 = this;

			this.$refs.input.value = null;

			if (!this.beforeUpload) {
				return this.post(rawFile);
			}

			var before = this.beforeUpload(rawFile);
			if (before && before.then) {
				before.then(function (processedFile) {
					var fileType = Object.prototype.toString.call(processedFile);
					if (fileType === '[object File]' || fileType === '[object Blob]') {
						_this2.post(processedFile);
					} else {
						_this2.post(rawFile);
					}
				}, function () {
					_this2.onRemove(null, rawFile);
				});
			} else if (before !== false) {
				this.post(rawFile);
			} else {
				this.onRemove(null, rawFile);
			}
		},
		abort: function abort(file) {
			var reqs = this.reqs;

			if (file) {
				var uid = file;
				if (file.uid) uid = file.uid;
				if (reqs[uid]) {
					reqs[uid].abort();
				}
			} else {
				(0, _keys2.default)(reqs).forEach(function (uid) {
					if (reqs[uid]) reqs[uid].abort();
					delete reqs[uid];
				});
			}
		},
		post: function post(rawFile) {
			var _this3 = this;

			var uid = rawFile.uid;

			var options = {
				headers: this.headers,
				withCredentials: this.withCredentials,
				file: rawFile,
				data: this.data,
				filename: this.name,
				action: this.action,
				onProgress: function onProgress(e) {
					_this3.onProgress(e, rawFile);
				},
				onSuccess: function onSuccess(res) {
					_this3.onSuccess(res, rawFile);
					delete _this3.reqs[uid];
				},
				onError: function onError(err) {
					_this3.onError(err, rawFile);
					delete _this3.reqs[uid];
				}
			};
			var req = this.httpRequest(options);
			this.reqs[uid] = req;
			if (req && req.then) {
				req.then(options.onSuccess, options.onError);
			}
		},
		handleClick: function handleClick() {
			if (!this.disabled) {
				this.$refs.input.value = null;
				this.$refs.input.click();
			}
		},
		handleKeydown: function handleKeydown(e) {
			if (e.target !== e.currentTarget) return;
			if (e.keyCode === 13 || e.keyCode === 32) {
				this.handleClick();
			}
		}
	},

	render: function render(h) {
		var handleClick = this.handleClick,
		    drag = this.drag,
		    name = this.name,
		    handleChange = this.handleChange,
		    multiple = this.multiple,
		    accept = this.accept,
		    listType = this.listType,
		    uploadFiles = this.uploadFiles,
		    disabled = this.disabled,
		    handleKeydown = this.handleKeydown;

		var data = {
			class: {
				'el-upload': true
			},
			on: {
				click: handleClick,
				keydown: handleKeydown
			}
		};
		data.class['el-upload--' + listType] = true;
		return h(
			'div',
			(0, _babelHelperVueJsxMergeProps2.default)([data, {
				attrs: { tabindex: '0' }
			}]),
			[drag ? h(
				'upload-dragger',
				{
					attrs: { disabled: disabled },
					on: {
						'file': uploadFiles
					}
				},
				[this.$slots.default]
			) : this.$slots.default, h('input', { 'class': 'el-upload__input', attrs: { type: 'file', name: name, multiple: multiple, accept: accept },
				ref: 'input', on: {
					'change': handleChange
				}
			})]
		);
	}
};

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_64e11028_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_upload_dragger_vue__ = __webpack_require__(434);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_64e11028_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_upload_dragger_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 202:
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

exports.default = {
	name: 'KcUploadDrag',
	props: {
		disabled: Boolean
	},
	inject: {
		uploader: {
			default: ''
		}
	},
	data: function data() {
		return {
			dragover: false
		};
	},

	methods: {
		onDragover: function onDragover() {
			if (!this.disabled) {
				this.dragover = true;
			}
		},
		onDrop: function onDrop(e) {
			if (this.disabled || !this.uploader) return;
			var accept = this.uploader.accept;
			this.dragover = false;
			if (!accept) {
				this.$emit('file', e.dataTransfer.files);
				return;
			}
			this.$emit('file', [].slice.call(e.dataTransfer.files).filter(function (file) {
				var type = file.type,
				    name = file.name;

				var extension = name.indexOf('.') > -1 ? '.' + name.split('.').pop() : '';
				var baseType = type.replace(/\/.*$/, '');
				return accept.split(',').map(function (type) {
					return type.trim();
				}).filter(function (type) {
					return type;
				}).some(function (acceptedType) {
					if (/\..+$/.test(acceptedType)) {
						return extension === acceptedType;
					}
					if (/\/\*$/.test(acceptedType)) {
						return baseType === acceptedType.replace(/\/\*$/, '');
					}
					if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
						return type === acceptedType;
					}
					return false;
				});
			}));
		}
	}
};

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _uploadDragger = __webpack_require__(201);

var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		UploadDragger: _uploadDragger2.default
	},
	props: {
		type: String,
		data: {},
		action: {
			type: String,
			required: true
		},
		name: {
			type: String,
			default: 'file'
		},
		withCredentials: Boolean,
		accept: String,
		onStart: Function,
		onProgress: Function,
		onSuccess: Function,
		onError: Function,
		beforeUpload: Function,
		onPreview: {
			type: Function,
			default: function _default() {}
		},
		onRemove: {
			type: Function,
			default: function _default() {}
		},
		drag: Boolean,
		listType: String,
		disabled: Boolean,
		limit: Number,
		onExceed: Function
	},

	data: function data() {
		return {
			mouseover: false,
			domain: '',
			file: null,
			submitting: false
		};
	},


	methods: {
		isImage: function isImage(str) {
			return str.indexOf('image') !== -1;
		},
		handleClick: function handleClick() {
			if (!this.disabled) {
				this.$refs.input.click();
			}
		},
		handleChange: function handleChange(ev) {
			var file = ev.target.value;
			if (file) {
				this.uploadFiles(file);
			}
		},
		uploadFiles: function uploadFiles(file) {
			if (this.limit && this.$parent.uploadFiles.length + file.length > this.limit) {
				this.onExceed && this.onExceed(this.fileList);
				return;
			}

			if (this.submitting) return;
			this.submitting = true;
			this.file = file;
			this.onStart(file);

			var formNode = this.getFormNode();
			var dataSpan = this.getFormDataNode();
			var data = this.data;
			if (typeof data === 'function') {
				data = data(file);
			}
			var inputs = [];
			for (var key in data) {
				if (data.hasOwnProperty(key)) {
					inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
				}
			}
			dataSpan.innerHTML = inputs.join('');
			formNode.submit();
			dataSpan.innerHTML = '';
		},
		getFormNode: function getFormNode() {
			return this.$refs.form;
		},
		getFormDataNode: function getFormDataNode() {
			return this.$refs.data;
		}
	},

	created: function created() {
		this.frameName = 'frame-' + Date.now();
	},
	mounted: function mounted() {
		var self = this;
		!this.$isServer && window.addEventListener('message', function (event) {
			if (!self.file) return;
			var targetOrigin = new URL(self.action).origin;
			if (event.origin !== targetOrigin) return;
			var response = event.data;
			if (response.result === 'success') {
				self.onSuccess(response, self.file);
			} else if (response.result === 'failed') {
				self.onError(response, self.file);
			}
			self.submitting = false;
			self.file = null;
		}, false);
	},
	render: function render(h) {
		var drag = this.drag,
		    uploadFiles = this.uploadFiles,
		    listType = this.listType,
		    frameName = this.frameName,
		    disabled = this.disabled;

		var oClass = { 'el-upload': true };
		oClass['el-upload--' + listType] = true;

		return h(
			'div',
			{
				'class': oClass,
				on: {
					'click': this.handleClick
				},
				nativeOn: {
					'drop': this.onDrop,
					'dragover': this.handleDragover,
					'dragleave': this.handleDragleave
				}
			},
			[h('iframe', {
				on: {
					'load': this.onload
				},

				ref: 'iframe',
				attrs: { name: frameName
				}
			}), h(
				'form',
				{
					ref: 'form',
					attrs: { action: this.action,
						target: frameName,
						enctype: 'multipart/form-data',
						method: 'POST' }
				},
				[h('input', {
					'class': 'el-upload__input',
					attrs: { type: 'file',

						name: 'file',

						accept: this.accept },
					ref: 'input', on: {
						'change': this.handleChange
					}
				}), h('input', {
					attrs: {
						type: 'hidden',
						name: 'documentDomain'
					},
					domProps: {
						'value': this.$isServer ? '' : document.domain
					}
				}), h('span', { ref: 'data' })]
			), drag ? h(
				'upload-dragger',
				{
					on: {
						'file': uploadFiles
					},
					attrs: {
						disabled: disabled }
				},
				[' ', this.$slots.default]
			) : this.$slots.default]
		);
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

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _src = __webpack_require__(429);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_src2.default.install = function (Vue) {
	Vue.component(_src2.default.name, _src2.default);
};

exports.default = _src2.default;

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_list_vue__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_list_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1746c022_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_upload_list_vue__ = __webpack_require__(431);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_1746c022_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_upload_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{class:[
    'el-upload-list',
    'el-upload-list--' + _vm.listType,
    { 'is-disabled': _vm.disabled }
  ],attrs:{"tag":"ul","name":"el-list"}},_vm._l((_vm.files),function(file,index){return _c('li',{key:index,class:['el-upload-list__item', 'is-' + file.status, _vm.focusing ? 'focusing' : ''],attrs:{"tabindex":"0"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete"])){ return null; }!_vm.disabled && _vm.$emit('remove', file)},"focus":function($event){_vm.focusing = true},"blur":function($event){_vm.focusing = false},"click":function($event){_vm.focusing = false}}},[(file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(_vm.listType) > -1)?_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"alt":""}}):_vm._e(),_c('a',{staticClass:"el-upload-list__item-name",on:{"click":function($event){_vm.handleClick(file)}}},[_c('i',{staticClass:"el-icon-document"}),_vm._v(_vm._s(file.name)+"\n    ")]),_c('label',{staticClass:"el-upload-list__item-status-label"},[_c('i',{class:{
        'el-icon-upload-success': true,
        'el-icon-circle-check': _vm.listType === 'text',
        'el-icon-check': ['picture-card', 'picture'].indexOf(_vm.listType) > -1
      }})]),(!_vm.disabled)?_c('i',{staticClass:"el-icon-close",on:{"click":function($event){_vm.$emit('remove', file)}}}):_vm._e(),(!_vm.disabled)?_c('i',{staticClass:"el-icon-close-tip"},[_vm._v(_vm._s(_vm.t('el.upload.deleteTip')))]):_vm._e(),(file.status === 'uploading')?_c('kc-progress',{attrs:{"type":_vm.listType === 'picture-card' ? 'circle' : 'line',"stroke-width":_vm.listType === 'picture-card' ? 6 : 2,"percentage":_vm.parsePercentage(file.percentage)}}):_vm._e(),(_vm.listType === 'picture-card')?_c('span',{staticClass:"el-upload-list__item-actions"},[(_vm.handlePreview && _vm.listType === 'picture-card')?_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){_vm.handlePreview(file)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),(!_vm.disabled)?_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){_vm.$emit('remove', file)}}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()]):_vm._e()],1)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_upload_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__(11);

var _keys2 = _interopRequireDefault(_keys);

exports.default = upload;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getError(action, option, xhr) {
	var msg = void 0;
	if (xhr.response) {
		msg = '' + (xhr.response.error || xhr.response);
	} else if (xhr.responseText) {
		msg = '' + xhr.responseText;
	} else {
		msg = 'fail to post ' + action + ' ' + xhr.status;
	}

	var err = new Error(msg);
	err.status = xhr.status;
	err.method = 'post';
	err.url = action;
	return err;
}

function getBody(xhr) {
	var text = xhr.responseText || xhr.response;
	if (!text) {
		return text;
	}

	try {
		return JSON.parse(text);
	} catch (e) {
		return text;
	}
}

function upload(option) {
	if (typeof XMLHttpRequest === 'undefined') {
		return;
	}

	var xhr = new XMLHttpRequest();
	var action = option.action;

	if (xhr.upload) {
		xhr.upload.onprogress = function progress(e) {
			if (e.total > 0) {
				e.percent = e.loaded / e.total * 100;
			}
			option.onProgress(e);
		};
	}

	var formData = new FormData();

	if (option.data) {
		(0, _keys2.default)(option.data).forEach(function (key) {
			formData.append(key, option.data[key]);
		});
	}

	formData.append(option.filename, option.file);

	xhr.onerror = function error(e) {
		option.onError(e);
	};

	xhr.onload = function onload() {
		if (xhr.status < 200 || xhr.status >= 300) {
			return option.onError(getError(action, option, xhr));
		}

		option.onSuccess(getBody(xhr));
	};

	xhr.open('post', action, true);

	if (option.withCredentials && 'withCredentials' in xhr) {
		xhr.withCredentials = true;
	}

	var headers = option.headers || {};

	for (var item in headers) {
		if (headers.hasOwnProperty(item) && headers[item] !== null) {
			xhr.setRequestHeader(item, headers[item]);
		}
	}
	xhr.send(formData);
	return xhr;
}

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-upload-dragger",class:{
    'is-dragover': _vm.dragover
  },on:{"drop":function($event){$event.preventDefault();return _vm.onDrop($event)},"dragover":function($event){$event.preventDefault();return _vm.onDragover($event)},"dragleave":function($event){$event.preventDefault();_vm.dragover = false}}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue___default.a,
  __vue_template__,
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _progress = __webpack_require__(170);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_progress2.default.install = function (Vue) {
	Vue.component(_progress2.default.name, _progress2.default);
};

exports.default = _progress2.default;

/***/ }),

/***/ 84:
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
//
//
//
//
//
//
//
//
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
	name: 'KcProgress',
	props: {
		type: {
			type: String,
			default: 'line',
			validator: function validator(val) {
				return ['line', 'circle'].indexOf(val) > -1;
			}
		},
		percentage: {
			type: Number,
			default: 0,
			required: true,
			validator: function validator(val) {
				return val >= 0 && val <= 100;
			}
		},
		status: {
			type: String
		},
		strokeWidth: {
			type: Number,
			default: 6
		},
		textInside: {
			type: Boolean,
			default: false
		},
		width: {
			type: Number,
			default: 126
		},
		showText: {
			type: Boolean,
			default: true
		},
		color: {
			type: String,
			default: ''
		}
	},
	computed: {
		barStyle: function barStyle() {
			var style = {};
			style.width = this.percentage + '%';
			style.backgroundColor = this.color;
			return style;
		},
		relativeStrokeWidth: function relativeStrokeWidth() {
			return (this.strokeWidth / this.width * 100).toFixed(1);
		},
		trackPath: function trackPath() {
			var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

			return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2;
		},
		perimeter: function perimeter() {
			var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
			return 2 * Math.PI * radius;
		},
		circlePathStyle: function circlePathStyle() {
			var perimeter = this.perimeter;
			return {
				strokeDasharray: perimeter + 'px,' + perimeter + 'px',
				strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
				transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
			};
		},
		stroke: function stroke() {
			var ret = void 0;
			if (this.color) {
				ret = this.color;
			} else {
				switch (this.status) {
					case 'success':
						ret = '#13ce66';
						break;
					case 'exception':
						ret = '#ff4949';
						break;
					default:
						ret = '#20a0ff';
				}
			}
			return ret;
		},
		iconClass: function iconClass() {
			if (this.type === 'line') {
				return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-close';
			} else {
				return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
			}
		},
		progressTextSize: function progressTextSize() {
			return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
		}
	}
};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = require("babel-helper-vue-jsx-merge-props");

/***/ })

/******/ });