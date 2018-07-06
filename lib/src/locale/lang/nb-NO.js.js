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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Tøm'
    },
    datepicker: {
      now: 'Nå',
      today: 'I dag',
      cancel: 'Avbryt',
      clear: 'Tøm',
      confirm: 'OK',
      selectDate: 'Velg dato',
      selectTime: 'Velg tidspunkt',
      startDate: 'Start Dato',
      startTime: 'Start Tidspunkt',
      endDate: 'Sluttdato',
      endTime: 'Sluttidspunkt',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'Mars',
      month4: 'April',
      month5: 'Mai',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Desember',
      // week: 'week',
      weeks: {
        sun: 'Søn',
        mon: 'Man',
        tue: 'Tir',
        wed: 'Ons',
        thu: 'Tor',
        fri: 'Fre',
        sat: 'Lør'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des'
      }
    },
    select: {
      loading: 'Laster',
      noMatch: 'Ingen samsvarende data',
      noData: 'Ingen data',
      placeholder: 'Velg'
    },
    cascader: {
      noMatch: 'Ingen samsvarende data',
      loading: 'Laster',
      placeholder: 'Velg'
    },
    pagination: {
      goto: 'Gå til',
      pagesize: '/side',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Avbryt',
      error: 'Ugyldig input'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Slett',
      preview: 'Forhåndsvisning',
      continue: 'Fortsett'
    },
    table: {
      emptyText: 'Ingen Data',
      confirmFilter: 'Bekreft',
      resetFilter: 'Tilbakestill',
      clearFilter: 'Alle',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Ingen Data'
    },
    transfer: {
      noMatch: 'Ingen samsvarende data',
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