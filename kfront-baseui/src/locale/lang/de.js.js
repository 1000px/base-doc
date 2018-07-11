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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Leeren'
    },
    datepicker: {
      now: 'Jetzt',
      today: 'Heute',
      cancel: 'Abbrechen',
      clear: 'Leeren',
      confirm: 'OK',
      selectDate: 'Datum wählen',
      selectTime: 'Uhrzeit wählen',
      startDate: 'Startdatum',
      startTime: 'Startzeit',
      endDate: 'Enddatum',
      endTime: 'Endzeit',
      prevYear: 'Letztes Jahr',
      nextYear: 'Nächtes Jahr',
      prevMonth: 'Letzter Monat',
      nextMonth: 'Nächster Monat',
      day: 'Tag',
      week: 'Woche',
      month: 'Monat',
      year: '',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'März',
      month4: 'April',
      month5: 'Mai',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Dezember',
      weeks: {
        sun: 'So',
        mon: 'Mo',
        tue: 'Di',
        wed: 'Mi',
        thu: 'Do',
        fri: 'Fr',
        sat: 'Sa'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mär',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dez'
      }
    },
    select: {
      loading: 'Lädt.',
      noMatch: 'Nichts gefunden.',
      noData: 'Keine Daten',
      placeholder: 'Daten wählen'
    },
    cascader: {
      noMatch: 'Nichts gefunden.',
      loading: 'Lädt.',
      placeholder: 'Daten wählen'
    },
    pagination: {
      goto: 'Gehe zu',
      pagesize: ' pro Seite',
      total: 'Gesamt {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Abbrechen',
      error: 'Fehler'
    },
    upload: {
      deleteTip: 'Klicke löschen zum entfernen',
      delete: 'Löschen',
      preview: 'Vorschau',
      continue: 'Fortsetzen'
    },
    table: {
      emptyText: 'Keine Daten',
      confirmFilter: 'Anwenden',
      resetFilter: 'Zurücksetzen',
      clearFilter: 'Alles ',
      sumText: 'Summe'
    },
    tree: {
      emptyText: 'Keine Einträge'
    },
    transfer: {
      noMatch: 'Nichts gefunden.',
      noData: 'Keine Einträge',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Einträge filtern',
      noCheckedFormat: '{total} Einträge',
      hasCheckedFormat: '{checked}/{total} ausgewählt'
    }
  }
};

/***/ })

/******/ });