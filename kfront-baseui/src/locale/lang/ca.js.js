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
      confirm: 'Confirmar',
      clear: 'Netejar'
    },
    datepicker: {
      now: 'Ara',
      today: 'Avui',
      cancel: 'Cancel·lar',
      clear: 'Netejar',
      confirm: 'Confirmar',
      selectDate: 'Seleccionar data',
      selectTime: 'Seleccionar hora',
      startDate: 'Data Inici',
      startTime: 'Hora Inici',
      endDate: 'Data Final',
      endTime: 'Hora Final',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Any',
      month1: 'Gener',
      month2: 'Febrer',
      month3: 'Març',
      month4: 'Abril',
      month5: 'Maig',
      month6: 'Juny',
      month7: 'Juliol',
      month8: 'Agost',
      month9: 'Setembre',
      month10: 'Octubre',
      month11: 'Novembre',
      month12: 'Desembre',
      // week: 'setmana',
      weeks: {
        sun: 'Dg',
        mon: 'Dl',
        tue: 'Dt',
        wed: 'Dc',
        thu: 'Dj',
        fri: 'Dv',
        sat: 'Ds'
      },
      months: {
        jan: 'Gen',
        feb: 'Febr',
        mar: 'Març',
        apr: 'Abr',
        may: 'Maig',
        jun: 'Juny',
        jul: 'Jul',
        aug: 'Ag',
        sep: 'Set',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Des'
      }
    },
    select: {
      loading: 'Carregant',
      noMatch: 'No hi ha dades que coincideixin',
      noData: 'Sense Dades',
      placeholder: 'Seleccionar'
    },
    cascader: {
      noMatch: 'No hi ha dades que coincideixin',
      loading: 'Carregant',
      placeholder: 'Seleccionar'
    },
    pagination: {
      goto: 'Anar a',
      pagesize: '/pagina',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'Acceptar',
      cancel: 'Cancel·lar',
      error: 'Entrada invàlida'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Eliminar',
      preview: 'Vista Prèvia',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sense Dades',
      confirmFilter: 'Confirmar',
      resetFilter: 'Netejar',
      clearFilter: 'Tot',
      sumText: 'Tot'
    },
    tree: {
      emptyText: 'Sense Dades'
    },
    transfer: {
      noMatch: 'No hi ha dades que coincideixin',
      noData: 'Sense Dades',
      titles: ['Llista 1', 'Llista 2'],
      filterPlaceholder: 'Introdueix la paraula clau',
      noCheckedFormat: '{total} ítems',
      hasCheckedFormat: '{checked}/{total} seleccionats'
    }
  }
};

/***/ })

/******/ });