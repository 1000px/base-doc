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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Bevestig',
      clear: 'Maak skoon'
    },
    datepicker: {
      now: 'Nou',
      today: 'Vandag',
      cancel: 'Kanselleer',
      clear: 'Maak skoon',
      confirm: 'Bevestig',
      selectDate: 'Kies datum',
      selectTime: 'Kies tyd',
      startDate: 'Begindatum',
      startTime: 'Begintyd',
      endDate: 'Einddatum',
      endTime: 'Eindtyd',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Jaar',
      month1: 'Jan',
      month2: 'Feb',
      month3: 'Mrt',
      month4: 'Apr',
      month5: 'Mei',
      month6: 'Jun',
      month7: 'Jul',
      month8: 'Aug',
      month9: 'Sep',
      month10: 'Okt',
      month11: 'Nov',
      month12: 'Des',
      // week: 'week',
      weeks: {
        sun: 'So',
        mon: 'Ma',
        tue: 'Di',
        wed: 'Wo',
        thu: 'Do',
        fri: 'Vr',
        sat: 'Sa'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mrt',
        apr: 'Apr',
        may: 'Mei',
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
      loading: 'Laai',
      noMatch: 'Geen toepaslike data',
      noData: 'Geen data',
      placeholder: 'Kies'
    },
    cascader: {
      noMatch: 'Geen toepaslike data',
      loading: 'Laai',
      placeholder: 'Kies'
    },
    pagination: {
      goto: 'Gaan na',
      pagesize: '/page',
      total: 'Totaal {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Boodskap',
      confirm: 'Bevestig',
      cancel: 'Kanselleer',
      error: 'Ongeldige invoer'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Verwyder',
      preview: 'Voorskou',
      continue: 'Gaan voort'
    },
    table: {
      emptyText: 'Geen Data',
      confirmFilter: 'Bevestig',
      resetFilter: 'Herstel',
      clearFilter: 'Alles',
      sumText: 'Som'
    },
    tree: {
      emptyText: 'Geen Data'
    },
    transfer: {
      noMatch: 'Geen toepaslike data',
      noData: 'Geen data',
      titles: ['Lys 1', 'Lys 2'],
      filterPlaceholder: 'Voer sleutelwoord in',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} gekies'
    }
  }
};

/***/ })

/******/ });