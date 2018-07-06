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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Pulisci'
    },
    datepicker: {
      now: 'Ora',
      today: 'Oggi',
      cancel: 'Cancella',
      clear: 'Pulisci',
      confirm: 'OK',
      selectDate: 'Seleziona data',
      selectTime: 'Seleziona ora',
      startDate: 'Data inizio',
      startTime: 'Ora inizio',
      endDate: 'Data fine',
      endTime: 'Ora fine',
      prevYear: 'Anno precedente',
      nextYear: 'Anno successivo',
      prevMonth: 'Mese precedente',
      nextMonth: 'Mese successivo',
      year: 'Anno',
      month1: 'Gennaio',
      month2: 'Febbraio',
      month3: 'Marzo',
      month4: 'Aprile',
      month5: 'Maggio',
      month6: 'Giugno',
      month7: 'Luglio',
      month8: 'Agosto',
      month9: 'Settembre',
      month10: 'Ottobre',
      month11: 'Novembre',
      month12: 'Dicembre',
      // week: 'settimana',
      weeks: {
        sun: 'Dom',
        mon: 'Lun',
        tue: 'Mar',
        wed: 'Mer',
        thu: 'Gio',
        fri: 'Ven',
        sat: 'Sab'
      },
      months: {
        jan: 'Gen',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mag',
        jun: 'Giu',
        jul: 'Lug',
        aug: 'Ago',
        sep: 'Set',
        oct: 'Ott',
        nov: 'Nov',
        dec: 'Dic'
      }
    },
    select: {
      loading: 'Caricamento',
      noMatch: 'Nessuna corrispondenza',
      noData: 'Nessun dato',
      placeholder: 'Seleziona'
    },
    cascader: {
      noMatch: 'Nessuna corrispondenza',
      loading: 'Caricamento',
      placeholder: 'Seleziona'
    },
    pagination: {
      goto: 'Vai a',
      pagesize: '/page',
      total: 'Totale {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Cancella',
      error: 'Input non valido'
    },
    upload: {
      deleteTip: 'Premi cancella per rimuovere',
      delete: 'Cancella',
      preview: 'Anteprima',
      continue: 'Continua'
    },
    table: {
      emptyText: 'Nessun dato',
      confirmFilter: 'Conferma',
      resetFilter: 'Reset',
      clearFilter: 'Tutti',
      sumText: 'Somma'
    },
    tree: {
      emptyText: 'Nessun dato'
    },
    transfer: {
      noMatch: 'Nessuna corrispondenza',
      noData: 'Nessun dato',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Inserisci filtro',
      noCheckedFormat: '{total} elementi',
      hasCheckedFormat: '{checked}/{total} selezionati'
    }
  }
};

/***/ })

/******/ });