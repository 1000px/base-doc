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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dimensionMap = exports.valueEquals = exports.generateId = exports.getValueByPath = undefined;

var _getIterator2 = __webpack_require__(3);

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

var _vue = __webpack_require__(0);

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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(1);

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

/***/ })

/******/ });