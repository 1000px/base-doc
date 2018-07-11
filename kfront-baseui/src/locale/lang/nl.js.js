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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Bevestig',
      clear: 'Wissen'
    },
    datepicker: {
      now: 'Nu',
      today: 'Vandaag',
      cancel: 'Annuleren',
      clear: 'Legen',
      confirm: 'Bevestig',
      selectDate: 'Selecteer datum',
      selectTime: 'Selecteer tijd',
      startDate: 'Startdatum',
      startTime: 'Starttijd',
      endDate: 'Einddatum',
      endTime: 'Eindtijd',
      prevYear: 'Vorig jaar',
      nextYear: 'Volgend jaar',
      prevMonth: 'Vorige maand',
      nextMonth: 'Volgende maand',
      year: '',
      month1: 'januari',
      month2: 'februari',
      month3: 'maart',
      month4: 'april',
      month5: 'mei',
      month6: 'juni',
      month7: 'juli',
      month8: 'augustus',
      month9: 'september',
      month10: 'oktober',
      month11: 'november',
      month12: 'december',
      // week: 'week',
      weeks: {
        sun: 'Zo',
        mon: 'Ma',
        tue: 'Di',
        wed: 'Wo',
        thu: 'Do',
        fri: 'Vr',
        sat: 'Za'
      },
      months: {
        jan: 'jan',
        feb: 'feb',
        mar: 'maa',
        apr: 'apr',
        may: 'mei',
        jun: 'jun',
        jul: 'jul',
        aug: 'aug',
        sep: 'sep',
        oct: 'okt',
        nov: 'nov',
        dec: 'dec'
      }
    },
    select: {
      loading: 'Laden',
      noMatch: 'Geen overeenkomende resultaten',
      noData: 'Geen data',
      placeholder: 'Selecteer'
    },
    cascader: {
      noMatch: 'Geen overeenkomende resultaten',
      loading: 'Laden',
      placeholder: 'Selecteer'
    },
    pagination: {
      goto: 'Ga naar',
      pagesize: '/pagina',
      total: 'Totaal {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Bericht',
      confirm: 'Bevestig',
      cancel: 'Annuleren',
      error: 'Ongeldige invoer'
    },
    upload: {
      deleteTip: 'Kies verwijder om te wissen',
      delete: 'Verwijder',
      preview: 'Voorbeeld',
      continue: 'Doorgaan'
    },
    table: {
      emptyText: 'Geen data',
      confirmFilter: 'Bevestigen',
      resetFilter: 'Reset',
      clearFilter: 'Alles',
      sumText: 'Som'
    },
    tree: {
      emptyText: 'Geen data'
    },
    transfer: {
      noMatch: 'Geen overeenkomende resultaten',
      noData: 'Geen data',
      titles: ['Lijst 1', 'Lijst 2'],
      filterPlaceholder: 'Geef zoekwoerd',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} geselecteerd'
    }
  }
};

/***/ })

/******/ });