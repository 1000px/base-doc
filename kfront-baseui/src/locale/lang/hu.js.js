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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Törlés'
    },
    datepicker: {
      now: 'Most',
      today: 'Ma',
      cancel: 'Mégse',
      clear: 'Törlés',
      confirm: 'OK',
      selectDate: 'Dátum',
      selectTime: 'Időpont',
      startDate: 'Dátum-tól',
      startTime: 'Időpont-tól',
      endDate: 'Dátum-ig',
      endTime: 'Időpont-ig',
      prevYear: 'Előző év',
      nextYear: 'Következő év',
      prevMonth: 'Előző hónap',
      nextMonth: 'Következő hónap',
      year: '',
      month1: 'Január',
      month2: 'Február',
      month3: 'Március',
      month4: 'Április',
      month5: 'Május',
      month6: 'Június',
      month7: 'Július',
      month8: 'Augusztus',
      month9: 'Szeptember',
      month10: 'Október',
      month11: 'November',
      month12: 'December',
      weeks: {
        sun: 'Vas',
        mon: 'Hét',
        tue: 'Ked',
        wed: 'Sze',
        thu: 'Csü',
        fri: 'Pén',
        sat: 'Szo'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Már',
        apr: 'Ápr',
        may: 'Máj',
        jun: 'Jún',
        jul: 'Júl',
        aug: 'Aug',
        sep: 'Szep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Betöltés',
      noMatch: 'Nincs találat',
      noData: 'Nincs adat',
      placeholder: 'Válassz'
    },
    cascader: {
      noMatch: 'Nincs találat',
      loading: 'Betöltés',
      placeholder: 'Válassz'
    },
    pagination: {
      goto: 'Ugrás',
      pagesize: '/page',
      total: 'Össz {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Üzenet',
      confirm: 'OK',
      cancel: 'Mégse',
      error: 'Hibás adat'
    },
    upload: {
      deleteTip: 'kattints a törléshez',
      delete: 'Törlés',
      preview: 'Előnézet',
      continue: 'Tovább'
    },
    table: {
      emptyText: 'Nincs adat',
      confirmFilter: 'Megerősít',
      resetFilter: 'Alaphelyet',
      clearFilter: 'Mind',
      sumText: 'Összeg'
    },
    tree: {
      emptyText: 'Nincs adat'
    },
    transfer: {
      noMatch: 'Nincs találat',
      noData: 'Nincs adat',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Kulcsszó',
      noCheckedFormat: '{total} elem',
      hasCheckedFormat: '{checked}/{total} kiválasztva'
    }
  }
};

/***/ })

/******/ });