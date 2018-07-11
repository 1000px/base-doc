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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 52:
=======
/***/ 55:
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
      clear: 'Șterge'
    },
    datepicker: {
      now: 'Acum',
      today: 'Azi',
      cancel: 'Anulează',
      clear: 'Șterge',
      confirm: 'OK',
      selectDate: 'Selectează data',
      selectTime: 'Selectează ora',
      startDate: 'Data de început',
      startTime: 'Ora de început',
      endDate: 'Data de sfârșit',
      endTime: 'Ora de sfârșit',
      prevYear: 'Anul trecut',
      nextYear: 'Anul următor',
      prevMonth: 'Luna trecută',
      nextMonth: 'Luna următoare',
      year: '',
      month1: 'Ianuarie',
      month2: 'Februarie',
      month3: 'Martie',
      month4: 'Aprilie',
      month5: 'Mai',
      month6: 'Iunie',
      month7: 'Iulie',
      month8: 'August',
      month9: 'Septembrie',
      month10: 'Octombrie',
      month11: 'Noiembrie',
      month12: 'Decembrie',
      // week: 'week',
      weeks: {
        sun: 'Du',
        mon: 'Lu',
        tue: 'Ma',
        wed: 'Mi',
        thu: 'Jo',
        fri: 'Vi',
        sat: 'Sâ'
      },
      months: {
        jan: 'Ian',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Iun',
        jul: 'Iul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Noi',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Se încarcă',
      noMatch: 'Nu există date potrivite',
      noData: 'Nu există date',
      placeholder: 'Selectează'
    },
    cascader: {
      noMatch: 'Nu există date potrivite',
      loading: 'Se încarcă',
      placeholder: 'Selectează'
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/pagina',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Mesaj',
      confirm: 'OK',
      cancel: 'Anulează',
      error: 'Date introduse eronate'
    },
    upload: {
      deleteTip: 'apăsați pe ștergeți pentru a elimina',
      delete: 'șterge',
      preview: 'previzualizare',
      continue: 'continuă'
    },
    table: {
      emptyText: 'Nu există date',
      confirmFilter: 'Confirmă',
      resetFilter: 'Resetează',
      clearFilter: 'Tot',
      sumText: 'Suma'
    },
    tree: {
      emptyText: 'Nu există date'
    },
    transfer: {
      noMatch: 'Nu există date potrivite',
      noData: 'Nu există date',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Introduceți cuvântul cheie',
      noCheckedFormat: '{total} elemente',
      hasCheckedFormat: '{checked}/{total} verificate'
    }
  }
};

/***/ })

/******/ });