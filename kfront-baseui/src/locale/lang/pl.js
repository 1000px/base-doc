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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Wyczyść'
    },
    datepicker: {
      now: 'Teraz',
      today: 'Dzisiaj',
      cancel: 'Anuluj',
      clear: 'Wyczyść',
      confirm: 'OK',
      selectDate: 'Wybierz datę',
      selectTime: 'Wybierz godzinę',
      startDate: 'Data początkowa',
      startTime: 'Godzina początkowa',
      endDate: 'Data końcowa',
      endTime: 'Czas końcowa',
      prevYear: 'Poprzedni rok',
      nextYear: 'Następny rok',
      prevMonth: 'Poprzedni miesiąc',
      nextMonth: 'Następny miesiąc',
      year: 'rok',
      month1: 'styczeń',
      month2: 'luty',
      month3: 'marzec',
      month4: 'kwiecień',
      month5: 'maj',
      month6: 'czerwiec',
      month7: 'lipiec',
      month8: 'sierpień',
      month9: 'wrzesień',
      month10: 'październik',
      month11: 'listopad',
      month12: 'grudzień',
      week: 'tydzień',
      weeks: {
        sun: 'niedz.',
        mon: 'pon.',
        tue: 'wt.',
        wed: 'śr.',
        thu: 'czw.',
        fri: 'pt.',
        sat: 'sob.'
      },
      months: {
        jan: 'STY',
        feb: 'LUT',
        mar: 'MAR',
        apr: 'KWI',
        may: 'MAJ',
        jun: 'CZE',
        jul: 'LIP',
        aug: 'SIE',
        sep: 'WRZ',
        oct: 'PAŹ',
        nov: 'LIS',
        dec: 'GRU'
      }
    },
    select: {
      loading: 'Ładowanie',
      noMatch: 'Brak dopasowań',
      noData: 'Brak danych',
      placeholder: 'Wybierz'
    },
    cascader: {
      noMatch: 'Brak dopasowań',
      loading: 'Ładowanie',
      placeholder: 'Wybierz'
    },
    pagination: {
      goto: 'Idź do',
      pagesize: '/strona',
      total: 'Wszystkich {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Wiadomość',
      confirm: 'OK',
      cancel: 'Anuluj',
      error: 'Wiadomość zawiera niedozwolone znaki'
    },
    upload: {
      deleteTip: 'kliknij kasuj aby usunąć',
      delete: 'Kasuj',
      preview: 'Podgląd',
      continue: 'Kontynuuj'
    },
    table: {
      emptyText: 'Brak danych',
      confirmFilter: 'Potwierdź',
      resetFilter: 'Resetuj',
      clearFilter: 'Wszystko',
      sumText: 'Razem'
    },
    tree: {
      emptyText: 'Brak danych'
    },
    transfer: {
      noMatch: 'Brak dopasowań',
      noData: 'Brak danych',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Wpisz szukaną frazę',
      noCheckedFormat: 'razem: {total}',
      hasCheckedFormat: 'wybranych: {checked}/{total}'
    }
  }
};

/***/ })

/******/ });