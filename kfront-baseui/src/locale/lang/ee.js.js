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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 28:
=======
/***/ 31:
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
      clear: 'Tühjenda'
    },
    datepicker: {
      now: 'Praegu',
      today: 'Täna',
      cancel: 'Tühista',
      clear: 'Tühjenda',
      confirm: 'OK',
      selectDate: 'Vali kuupäev',
      selectTime: 'Vali kellaaeg',
      startDate: 'Alguskuupäev',
      startTime: 'Algusaeg',
      endDate: 'Lõpukuupäev',
      endTime: 'Lõpuaeg',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Jaanuar',
      month2: 'Veebruar',
      month3: 'Märts',
      month4: 'Aprill',
      month5: 'Mai',
      month6: 'Juuni',
      month7: 'Juuli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktoober',
      month11: 'November',
      month12: 'Detsember',
      // week: 'nädal',
      weeks: {
        sun: 'P',
        mon: 'E',
        tue: 'T',
        wed: 'K',
        thu: 'N',
        fri: 'R',
        sat: 'L'
      },
      months: {
        jan: 'Jaan',
        feb: 'Veeb',
        mar: 'Mär',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Juun',
        jul: 'Juul',
        aug: 'Aug',
        sep: 'Sept',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dets'
      }
    },
    select: {
      loading: 'Laadimine',
      noMatch: 'Sobivad andmed puuduvad',
      noData: 'Andmed puuduvad',
      placeholder: 'Vali'
    },
    cascader: {
      noMatch: 'Sobivad andmed puuduvad',
      loading: 'Laadimine',
      placeholder: 'Vali'
    },
    pagination: {
      goto: 'Mine lehele',
      pagesize: '/page',
      total: 'Kokku {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Teade',
      confirm: 'OK',
      cancel: 'Tühista',
      error: 'Vigane sisend'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Kustuta',
      preview: 'Eelvaate',
      continue: 'Jätka'
    },
    table: {
      emptyText: 'Andmed puuduvad',
      confirmFilter: 'Kinnita',
      resetFilter: 'Taasta',
      clearFilter: 'Kõik',
      sumText: 'Summa'
    },
    tree: {
      emptyText: 'Andmed puuduvad'
    },
    transfer: {
      noMatch: 'Sobivad andmed puuduvad',
      noData: 'Andmed puuduvad',
      titles: ['Loend 1', 'Loend 2'],
      filterPlaceholder: 'Sisesta märksõna',
      noCheckedFormat: '{total} objekti',
      hasCheckedFormat: '{checked}/{total} valitud'
    }
  }
};

/***/ })

/******/ });