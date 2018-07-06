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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Vymazat'
    },
    datepicker: {
      now: 'Teď',
      today: 'Dnes',
      cancel: 'Zrušit',
      clear: 'Vymazat',
      confirm: 'OK',
      selectDate: 'Vybrat datum',
      selectTime: 'Vybrat čas',
      startDate: 'Datum začátku',
      startTime: 'Čas začátku',
      endDate: 'Datum konce',
      endTime: 'Čas konce',
      prevYear: 'Předchozí rok',
      nextYear: 'Příští rok',
      prevMonth: 'Předchozí měsíc',
      nextMonth: 'Příští měsíc',
      day: 'Den',
      week: 'Týden',
      month: 'Měsíc',
      year: 'Rok',
      month1: 'Leden',
      month2: 'Únor',
      month3: 'Březen',
      month4: 'Duben',
      month5: 'Květen',
      month6: 'Červen',
      month7: 'Červenec',
      month8: 'Srpen',
      month9: 'Září',
      month10: 'Říjen',
      month11: 'Listopad',
      month12: 'Prosinec',
      weeks: {
        sun: 'Ne',
        mon: 'Po',
        tue: 'Út',
        wed: 'St',
        thu: 'Čt',
        fri: 'Pá',
        sat: 'So'
      },
      months: {
        jan: 'Led',
        feb: 'Úno',
        mar: 'Bře',
        apr: 'Dub',
        may: 'Kvě',
        jun: 'Čer',
        jul: 'Čvc',
        aug: 'Srp',
        sep: 'Zář',
        oct: 'Říj',
        nov: 'Lis',
        dec: 'Pro'
      }
    },
    select: {
      loading: 'Načítání',
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      placeholder: 'Vybrat'
    },
    cascader: {
      noMatch: 'Žádná shoda',
      loading: 'Načítání',
      placeholder: 'Vybrat'
    },
    pagination: {
      goto: 'Jít na',
      pagesize: 'na stranu',
      total: 'Celkem {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Zpráva',
      confirm: 'OK',
      cancel: 'Zrušit',
      error: 'Neplatný vstup'
    },
    upload: {
      deleteTip: 'Stisknout pro smazání',
      delete: 'Vymazat',
      preview: 'Náhled',
      continue: 'Pokračovat'
    },
    table: {
      emptyText: 'Žádná data',
      confirmFilter: 'Potvrdit',
      resetFilter: 'Resetovat',
      clearFilter: 'Vše',
      sumText: 'Celkem'
    },
    tree: {
      emptyText: 'Žádná data'
    },
    transfer: {
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      titles: ['Seznam 1', 'Seznam 2'],
      filterPlaceholder: 'Klíčové slovo',
      noCheckedFormat: '{total} položek',
      hasCheckedFormat: '{checked}/{total} vybráno'
    }
  }
};

/***/ })

/******/ });