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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 56:
=======
/***/ 59:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Töm'
    },
    datepicker: {
      now: 'Nu',
      today: 'Idag',
      cancel: 'Avbryt',
      clear: 'Töm',
      confirm: 'OK',
      selectDate: 'Välj datum',
      selectTime: 'Välj tid',
      startDate: 'Startdatum',
      startTime: 'Starttid',
      endDate: 'Slutdatum',
      endTime: 'Sluttid',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'År',
      month1: 'Januari',
      month2: 'Februari',
      month3: 'Mars',
      month4: 'April',
      month5: 'Maj',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'Augusti',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'December',
      // week: 'week',
      weeks: {
        sun: 'Sön',
        mon: 'Mån',
        tue: 'Tis',
        wed: 'Ons',
        thu: 'Tor',
        fri: 'Fre',
        sat: 'Lör'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maj',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Laddar',
      noMatch: 'Hittade inget',
      noData: 'Ingen data',
      placeholder: 'Välj'
    },
    cascader: {
      noMatch: 'Hittade inget',
      loading: 'Laddar',
      placeholder: 'Välj'
    },
    pagination: {
      goto: 'Gå till',
      pagesize: '/sida',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Meddelande',
      confirm: 'OK',
      cancel: 'Avbryt',
      error: 'Felaktig inmatning'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Radera',
      preview: 'Förhandsvisa',
      continue: 'Fortsätt'
    },
    table: {
      emptyText: 'Inga Data',
      confirmFilter: 'Bekräfta',
      resetFilter: 'Återställ',
      clearFilter: 'Alla',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Inga Data'
    },
    transfer: {
      noMatch: 'Hittade inget',
      noData: 'Ingen data',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

/******/ });