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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Labi',
      clear: 'Notīrīt'
    },
    datepicker: {
      now: 'Tagad',
      today: 'Šodien',
      cancel: 'Atcelt',
      clear: 'Notīrīt',
      confirm: 'Labi',
      selectDate: 'Izvēlēties datumu',
      selectTime: 'Izvēlēties laiku',
      startDate: 'Sākuma datums',
      startTime: 'Sākuma laiks',
      endDate: 'Beigu datums',
      endTime: 'Beigu laiks',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Janvāris',
      month2: 'Februāris',
      month3: 'Marts',
      month4: 'Aprīlis',
      month5: 'Maijs',
      month6: 'Jūnijs',
      month7: 'Jūlijs',
      month8: 'Augusts',
      month9: 'Septembris',
      month10: 'Oktobris',
      month11: 'Novembris',
      month12: 'Decembris',
      // week: 'nedēļa',
      weeks: {
        sun: 'Sv',
        mon: 'Pr',
        tue: 'Ot',
        wed: 'Tr',
        thu: 'Ce',
        fri: 'Pk',
        sat: 'Se'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jūn',
        jul: 'Jūl',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Ielādē',
      noMatch: 'Nav atbilstošu datu',
      noData: 'Nav datu',
      placeholder: 'Izvēlēties'
    },
    cascader: {
      noMatch: 'Nav atbilstošu datu',
      loading: 'Ielādē',
      placeholder: 'Izvēlēties'
    },
    pagination: {
      goto: 'Iet uz',
      pagesize: '/page',
      total: 'Kopā {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Paziņojums',
      confirm: 'Labi',
      cancel: 'Atcelt',
      error: 'Nederīga ievade'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Dzēst',
      preview: 'Priekšskatīt',
      continue: 'Turpināt'
    },
    table: {
      emptyText: 'Nav datu',
      confirmFilter: 'Apstiprināt',
      resetFilter: 'Reset',
      clearFilter: 'Visi',
      sumText: 'Summa'
    },
    tree: {
      emptyText: 'Nav datu'
    },
    transfer: {
      noMatch: 'Nav atbilstošu datu',
      noData: 'Nav datu',
      titles: ['Saraksts 1', 'Saraksts 2'],
      filterPlaceholder: 'Ievadīt atslēgvārdu',
      noCheckedFormat: '{total} vienības',
      hasCheckedFormat: '{checked}/{total} atzīmēti'
    }
  }
};

/***/ })

/******/ });