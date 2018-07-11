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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'V redu',
      clear: 'Počisti'
    },
    datepicker: {
      now: 'Zdaj',
      today: 'Danes',
      cancel: 'Prekliči',
      clear: 'Počisti',
      confirm: 'Potrdi',
      selectDate: 'Izberi datum',
      selectTime: 'Izberi čas',
      startDate: 'Začetni datum',
      startTime: 'Začetni čas',
      endDate: 'Končni datum',
      endTime: 'Končni čas',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Leto',
      month1: 'Jan',
      month2: 'Feb',
      month3: 'Mar',
      month4: 'Apr',
      month5: 'Maj',
      month6: 'Jun',
      month7: 'Jul',
      month8: 'Avg',
      month9: 'Sep',
      month10: 'Okt',
      month11: 'Nov',
      month12: 'Dec',
      week: 'teden',
      weeks: {
        sun: 'Ned',
        mon: 'Pon',
        tue: 'Tor',
        wed: 'Sre',
        thu: 'Čet',
        fri: 'Pet',
        sat: 'Sob'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maj',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Avg',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Nalaganje',
      noMatch: 'Ni ustreznih podatkov',
      noData: 'Ni podatkov',
      placeholder: 'Izberi'
    },
    cascader: {
      noMatch: 'Ni ustreznih podatkov',
      loading: 'Nalaganje',
      placeholder: 'Izberi'
    },
    pagination: {
      goto: 'Pojdi na',
      pagesize: '/page',
      total: 'Skupno {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Sporočilo',
      confirm: 'V redu',
      cancel: 'Prekliči',
      error: 'Nedovoljen vnos'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Izbriši',
      preview: 'Predogled',
      continue: 'Nadaljuj'
    },
    table: {
      emptyText: 'Ni podatkov',
      confirmFilter: 'Potrdi',
      resetFilter: 'Ponastavi',
      clearFilter: 'Vse',
      sumText: 'Skupno'
    },
    tree: {
      emptyText: 'Ni podatkov'
    },
    transfer: {
      noMatch: 'Ni ustreznih podatkov',
      noData: 'Ni podatkov',
      titles: ['Seznam 1', 'Seznam 2'],
      filterPlaceholder: 'Vnesi ključno besedo',
      noCheckedFormat: '{total} elementov',
      hasCheckedFormat: '{checked}/{total} izbranih'
    }
  }
};

/***/ })

/******/ });