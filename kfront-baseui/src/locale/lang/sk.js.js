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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Zmazať'
    },
    datepicker: {
      now: 'Teraz',
      today: 'Dnes',
      cancel: 'Zrušiť',
      clear: 'Zmazať',
      confirm: 'OK',
      selectDate: 'Vybrať dátum',
      selectTime: 'Vybrať čas',
      startDate: 'Dátum začiatku',
      startTime: 'Čas začiatku',
      endDate: 'Dátum konca',
      endTime: 'Čas konca',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      day: 'Deň',
      week: 'Týždeň',
      month: 'Mesiac',
      year: 'Rok',
      month1: 'Január',
      month2: 'Február',
      month3: 'Marec',
      month4: 'Apríl',
      month5: 'Máj',
      month6: 'Jún',
      month7: 'Júl',
      month8: 'August',
      month9: 'September',
      month10: 'Október',
      month11: 'November',
      month12: 'December',
      weeks: {
        sun: 'Ne',
        mon: 'Po',
        tue: 'Ut',
        wed: 'St',
        thu: 'Št',
        fri: 'Pi',
        sat: 'So'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Máj',
        jun: 'Jún',
        jul: 'Júl',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Načítavanie',
      noMatch: 'Žiadna zhoda',
      noData: 'Žiadne dáta',
      placeholder: 'Vybrať'
    },
    cascader: {
      noMatch: 'Žiadna zhoda',
      loading: 'Načítavanie',
      placeholder: 'Vybrať'
    },
    pagination: {
      goto: 'Choď na',
      pagesize: 'na stranu',
      total: 'Všetko {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Správa',
      confirm: 'OK',
      cancel: 'Zrušiť',
      error: 'Neplatný vstup'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Vymazať',
      preview: 'Prehliadať',
      continue: 'Pokračovať'
    },
    table: {
      emptyText: 'Žiadne dáta',
      confirmFilter: 'Potvrdiť',
      resetFilter: 'Zresetovať',
      clearFilter: 'Všetko',
      sumText: 'Spolu'
    },
    tree: {
      emptyText: 'Žiadne dáta'
    },
    transfer: {
      noMatch: 'Žiadna zhoda',
      noData: 'Žiadne dáta',
      titles: ['Zoznam 1', 'Zoznam 2'],
      filterPlaceholder: 'Filtrovať podľa',
      noCheckedFormat: '{total} položiek',
      hasCheckedFormat: '{checked}/{total} označených'
    }
  }
};

/***/ })

/******/ });