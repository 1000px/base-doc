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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'אישור',
      clear: 'נקה'
    },
    datepicker: {
      now: 'כעת',
      today: 'היום',
      cancel: 'בטל',
      clear: 'נקה',
      confirm: 'אישור',
      selectDate: 'בחר תאריך',
      selectTime: 'בחר זמן',
      startDate: 'תאריך התחלה',
      startTime: 'זמן התחלה',
      endDate: 'תאריך סיום',
      endTime: 'זמן סיום',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'ינואר',
      month2: 'פברואר',
      month3: 'מרץ',
      month4: 'אפריל',
      month5: 'מאי',
      month6: 'יוני',
      month7: 'יולי',
      month8: 'אוגוסט',
      month9: 'ספטמבר',
      month10: 'אוקטובר',
      month11: 'נובמבר',
      month12: 'דצמבר',
      // week: 'week',
      weeks: {
        sun: 'א׳',
        mon: 'ב׳',
        tue: 'ג׳',
        wed: 'ד׳',
        thu: 'ה׳',
        fri: 'ו׳',
        sat: 'שבת'
      },
      months: {
        jan: 'ינואר',
        feb: 'פברואר',
        mar: 'מרץ',
        apr: 'אפריל',
        may: 'מאי',
        jun: 'יוני',
        jul: 'יולי',
        aug: 'אוגוסט',
        sep: 'ספטמבר',
        oct: 'אוקטובר',
        nov: 'נובמבר',
        dec: 'דצמבר'
      }
    },
    select: {
      loading: 'טוען',
      noMatch: 'לא נמצאו נתונים',
      noData: 'ללא נתונים',
      placeholder: 'בחר'
    },
    cascader: {
      noMatch: 'ללא נתונים מתאימים',
      loading: 'טוען',
      placeholder: 'בחר'
    },
    pagination: {
      goto: 'עבור ל',
      pagesize: '/page',
      total: 'כולל {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'הודעה',
      confirm: 'אישור',
      cancel: 'בטל',
      error: 'קלט לא תקין'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'מחק',
      preview: 'תצוגה מקדימה',
      continue: 'המשך'
    },
    table: {
      emptyText: 'אין נתונים',
      confirmFilter: 'אישור',
      resetFilter: 'נקה',
      clearFilter: 'הכל',
      sumText: 'סך'
    },
    tree: {
      emptyText: 'אין נתונים'
    },
    transfer: {
      noMatch: 'אין נתונים מתאימים',
      noData: 'ללא נתונים',
      titles: ['רשימה 1', 'רשימה 2'],
      filterPlaceholder: 'הקלד',
      noCheckedFormat: 'פריטים {total}',
      hasCheckedFormat: ' אישור {checked}/{total}'
    }
  }
};

/***/ })

/******/ });