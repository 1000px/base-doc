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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'باشد',
      clear: 'حذف'
    },
    datepicker: {
      now: 'اکنون',
      today: 'امروز',
      cancel: 'لغو',
      clear: 'حذف',
      confirm: 'باشه',
      selectDate: 'انتخاب تاریخ',
      selectTime: 'انتخاب زمان',
      startDate: 'تاریخ شروع',
      startTime: 'زمان شروع',
      endDate: 'تاریخ پایان',
      endTime: 'زمان پایان',
      prevYear: 'سال قبل',
      nextYear: 'سال بعد',
      prevMonth: 'ماه قبل',
      nextMonth: 'ماه بعد',
      year: 'سال',
      month1: 'ژانویه',
      month2: 'فوریه',
      month3: 'مارس',
      month4: 'آوریل',
      month5: 'مه',
      month6: 'ژوئن',
      month7: 'جولای',
      month8: 'اوت',
      month9: 'سپتامبر',
      month10: 'اکتبر',
      month11: 'نوامبر',
      month12: 'دسامبر',
      // week: 'week',
      weeks: {
        sun: 'یکشنبه',
        mon: 'دوشنبه',
        tue: 'سه​شنبه',
        wed: 'چهارشنبه',
        thu: 'پنج​شنبه',
        fri: 'جمعه',
        sat: 'شنبه'
      },
      months: {
        jan: 'ژانویه',
        feb: 'فوریه',
        mar: 'مارس',
        apr: 'آوریل',
        may: 'مه',
        jun: 'ژوئن',
        jul: 'جولای',
        aug: 'اوت',
        sep: 'سپتامبر',
        oct: 'اکتبر',
        nov: 'نوامبر',
        dec: 'دسامبر'
      }
    },
    select: {
      loading: 'بارگیری',
      noMatch: 'هیچ داده‌ای پیدا نشد',
      noData: 'اطلاعاتی وجود ندارد',
      placeholder: 'انتخاب کنید'
    },
    cascader: {
      noMatch: 'هیچ داده‌ای پیدا نشد',
      loading: 'بارگیری',
      placeholder: 'انتخاب کنید'
    },
    pagination: {
      goto: 'برو به',
      pagesize: '/صفحه',
      total: 'مجموع {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'پیام',
      confirm: 'باشه',
      cancel: 'لغو',
      error: 'ورودی غیر مجاز'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'حذف',
      preview: 'پیش‌نمایش',
      continue: 'ادامه'
    },
    table: {
      emptyText: 'اطلاعاتی وجود ندارد',
      confirmFilter: 'تایید',
      resetFilter: 'حذف',
      clearFilter: 'همه',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'اطلاعاتی وجود ندارد'
    },
    transfer: {
      noMatch: 'هیچ داده‌ای پیدا نشد',
      noData: 'اطلاعاتی وجود ندارد',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'کلید واژه هارو وارد کن',
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

/******/ });