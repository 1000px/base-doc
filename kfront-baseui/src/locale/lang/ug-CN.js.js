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
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 62:
=======
/***/ 65:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'جەزىملەش',
      clear: 'قۇرۇقداش'
    },
    datepicker: {
      now: 'ھازىرقى ۋاقىت',
      today: 'بۈگۈن',
      cancel: 'بىكار قىلىش',
      clear: 'قۇرۇقداش',
      confirm: 'جەزىملەش',
      selectDate: 'چىسلا تاللاڭ',
      selectTime: 'ۋاقىت تاللاڭ',
      startDate: 'باشلانغان چىسلا',
      startTime: 'باشلانغان ۋاقىت',
      endDate: 'ئاخىرلاشقان چىسلا',
      endTime: 'ئاخىرلاشقان ۋاقىت',
      prevYear: 'ئالدىنقى يىل',
      nextYear: 'كىيىنكى يىل',
      prevMonth: 'ئالدىنقى ئاي',
      nextMonth: 'كىيىنكى ئاي',
      year: 'يىل',
      month1: '1-ئاي',
      month2: '2-ئاي',
      month3: '3-ئاي',
      month4: '4-ئاي',
      month5: '5-ئاي',
      month6: '6-ئاي',
      month7: '7-ئاي',
      month8: '8-ئاي',
      month9: '9-ئاي',
      month10: '10-ئاي',
      month11: '11-ئاي',
      month12: '12-ئاي',
      // week: '周次',
      weeks: {
        sun: 'يەكشەنبە',
        mon: 'دۈشەنبە',
        tue: 'سەيشەنبە',
        wed: 'چارشەنبە',
        thu: 'پەيشەنبە',
        fri: 'جۈمە',
        sat: 'شەنبە'
      },
      months: {
        jan: '1-ئاي',
        feb: '2-ئاي',
        mar: '3-ئاي',
        apr: '4-ئاي',
        may: '5-ئاي',
        jun: '6-ئاي',
        jul: '7-ئاي',
        aug: '8-ئاي',
        sep: '9-ئاي',
        oct: '10-ئاي',
        nov: '11-ئاي',
        dec: '12-ئاي'
      }
    },
    select: {
      loading: 'يۈكلىنىۋاتىدۇ',
      noMatch: 'ئۇچۇر تېپىلمىدى',
      noData: 'ئۇچۇر يوق',
      placeholder: 'تاللاڭ'
    },
    cascader: {
      noMatch: 'ئۇچۇر تېپىلمىدى',
      loading: 'يۈكلىنىۋاتىدۇ',
      placeholder: 'تاللاڭ'
    },
    pagination: {
      goto: 'كىيىنكى بەت',
      pagesize: 'تال/بەت',
      total: 'جەمئىي {total} تال',
      pageClassifier: 'بەت'
    },
    messagebox: {
      title: 'ئەسكەرتىش',
      confirm: 'جەزىملەش',
      cancel: 'بىكار قىلىش',
      error: 'كىرگۈزگەن ئۇچۇرىڭىزدا خاتالىق بار!'
    },
    upload: {
      deleteTip: 'delete كۇنپكىسىنى بېسىپ ئۆچۈرەلەيسىز',
      delete: 'ئۆچۈرۈش',
      preview: 'رەسىمنى كۆرۈش',
      continue: 'رەسىم يوللاش'
    },
    table: {
      emptyText: 'ئۇچۇر يوق',
      confirmFilter: 'سۈزگۈچ',
      resetFilter: 'قايتا تولدۇرۇش',
      clearFilter: 'ھەممە',
      sumText: 'جەمئىي'
    },
    tree: {
      emptyText: 'ئۇچۇر يوق'
    },
    transfer: {
      noMatch: 'ئۇچۇر تېپىلمىدى',
      noData: 'ئۇچۇر يوق',
      titles: ['جەدۋەل 1', 'جەدۋەل 2'],
      filterPlaceholder: 'ئىزدىمەكچى بولغان مەزمۇننى كىرگۈزۈڭ',
      noCheckedFormat: 'جەمئىي {total} تۈر',
      hasCheckedFormat: 'تاللانغىنى {checked}/{total} تۈر'
    }
  }
};

/***/ })

/******/ });