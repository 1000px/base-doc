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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'موافق',
      clear: 'إزالة'
    },
    datepicker: {
      now: 'الآن',
      today: 'اليوم',
      cancel: 'إلغاء',
      clear: 'إزالة',
      confirm: 'موافق',
      selectDate: 'أختر التاريخ',
      selectTime: 'أختر الوقت',
      startDate: 'تاريخ البدء',
      startTime: 'وقت البدء',
      endDate: 'تاريخ الانتهاء',
      endTime: 'وقت الانتهاء',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'يناير',
      month2: 'فبراير',
      month3: 'مارس',
      month4: 'ابريل',
      month5: 'مايو',
      month6: 'يونيو',
      month7: 'يوليو',
      month8: 'أغسطس',
      month9: 'سبتمبر',
      month10: 'أكتوبر',
      month11: 'نوفمبر',
      month12: 'ديسمبر',
      week: 'أسبوع',
      weeks: {
        sun: 'الأحد',
        mon: 'الأثنين',
        tue: 'الثلاثاء',
        wed: 'الأربعاء',
        thu: 'الخميس',
        fri: 'الجمعة',
        sat: 'السبت'
      },
      months: {
        jan: 'يناير',
        feb: 'فبراير',
        mar: 'مارس',
        apr: 'أبريل',
        may: 'مايو',
        jun: 'يونيو',
        jul: 'يوليو',
        aug: 'أغسطس',
        sep: 'سبتمبر',
        oct: 'أكتوبر',
        nov: 'نوفمبر',
        dec: 'ديسمبر'
      }
    },
    select: {
      loading: 'جار التحميل',
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      placeholder: 'أختر'
    },
    cascader: {
      noMatch: 'لايوجد بيانات مطابقة',
      loading: 'جار التحميل',
      placeholder: 'أختر'
    },
    pagination: {
      goto: 'أذهب إلى',
      pagesize: '/صفحة',
      total: 'الكل {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'الرسالة',
      confirm: 'موافق',
      cancel: 'إلغاء',
      error: 'مدخل غير صحيح'
    },
    upload: {
      delete: 'حذف',
      preview: 'عرض',
      continue: 'إستمرار'
    },
    table: {
      emptyText: 'لايوجد بيانات',
      confirmFilter: 'تأكيد',
      resetFilter: 'حذف',
      clearFilter: 'الكل',
      sumText: 'المجموع'
    },
    tree: {
      emptyText: 'لايوجد بيانات'
    },
    transfer: {
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      titles: ['قائمة 1', 'قائمة 2'],
      filterPlaceholder: 'ادخل كلمة',
      noCheckedFormat: '{total} عناصر',
      hasCheckedFormat: '{checked}/{total} مختار'
    }
  }
};

/***/ })

/******/ });