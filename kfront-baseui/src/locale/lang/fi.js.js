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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 33:
=======
/***/ 36:
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
      clear: 'Tyhjennä'
    },
    datepicker: {
      now: 'Nyt',
      today: 'Tänään',
      cancel: 'Peruuta',
      clear: 'Tyhjennä',
      confirm: 'OK',
      selectDate: 'Valitse päivä',
      selectTime: 'Valitse aika',
      startDate: 'Aloituspäivä',
      startTime: 'Aloitusaika',
      endDate: 'Lopetuspäivä',
      endTime: 'Lopetusaika',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'tammikuu',
      month2: 'helmikuu',
      month3: 'maaliskuu',
      month4: 'huhtikuu',
      month5: 'toukokuu',
      month6: 'kesäkuu',
      month7: 'heinäkuu',
      month8: 'elokuu',
      month9: 'syyskuu',
      month10: 'lokakuu',
      month11: 'marraskuu',
      month12: 'joulukuu',
      // week: 'week',
      weeks: {
        sun: 'su',
        mon: 'ma',
        tue: 'ti',
        wed: 'ke',
        thu: 'to',
        fri: 'pe',
        sat: 'la'
      },
      months: {
        jan: 'tam',
        feb: 'hel',
        mar: 'maa',
        apr: 'huh',
        may: 'tou',
        jun: 'kes',
        jul: 'hei',
        aug: 'elo',
        sep: 'syy',
        oct: 'lok',
        nov: 'mar',
        dec: 'jou'
      }
    },
    select: {
      loading: 'Lataa',
      noMatch: 'Ei vastaavia tietoja',
      noData: 'Ei tietoja',
      placeholder: 'Valitse'
    },
    cascader: {
      noMatch: 'Ei vastaavia tietoja',
      loading: 'Lataa',
      placeholder: 'Valitse'
    },
    pagination: {
      goto: 'Mene',
      pagesize: '/sivu',
      total: 'Yhteensä {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Viesti',
      confirm: 'OK',
      cancel: 'Peruuta',
      error: 'Virheellinen syöte'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Poista',
      preview: 'Esikatsele',
      continue: 'Jatka'
    },
    table: {
      emptyText: 'Ei tietoja',
      confirmFilter: 'Vahvista',
      resetFilter: 'Tyhjennä',
      clearFilter: 'Kaikki',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Ei tietoja'
    },
    transfer: {
      noMatch: 'Ei vastaavia tietoja',
      noData: 'Ei tietoja',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

/******/ });