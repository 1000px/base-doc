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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 26:
=======
/***/ 29:
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
      clear: 'Ryd'
    },
    datepicker: {
      now: 'Nu',
      today: 'I dag',
      cancel: 'Annuller',
      clear: 'Ryd',
      confirm: 'OK',
      selectDate: 'Vælg dato',
      selectTime: 'Vælg tidspunkt',
      startDate: 'Startdato',
      startTime: 'Starttidspunkt',
      endDate: 'Slutdato',
      endTime: 'Sluttidspunkt',
      prevYear: 'Forrige år',
      nextYear: 'Næste år',
      prevMonth: 'Forrige måned',
      nextMonth: 'Næste måned',
      year: '',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'Marts',
      month4: 'April',
      month5: 'Maj',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'December',
      week: 'uge',
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
      loading: 'Henter',
      noMatch: 'Ingen matchende data',
      noData: 'Ingen data',
      placeholder: 'Vælg'
    },
    cascader: {
      noMatch: 'Ingen matchende data',
      loading: 'Henter',
      placeholder: 'Vælg'
    },
    pagination: {
      goto: 'Gå til',
      pagesize: '/side',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Annuller',
      error: 'Ugyldig input'
    },
    upload: {
      deleteTip: 'tryk slet for at fjerne',
      delete: 'Slet',
      preview: 'Forhåndsvisning',
      continue: 'Fortsæt'
    },
    table: {
      emptyText: 'Ingen data',
      confirmFilter: 'Bekræft',
      resetFilter: 'Nulstil',
      clearFilter: 'Alle',
      sumText: 'Sum'
    },
    tree: {
      emptyText: 'Ingen data'
    },
    transfer: {
      noMatch: 'Ingen matchende data',
      noData: 'Ingen data',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Indtast søgeord',
      noCheckedFormat: '{total} emner',
      hasCheckedFormat: '{checked}/{total} valgt'
    }
  }
};

/***/ })

/******/ });