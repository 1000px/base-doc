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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Valyti'
    },
    datepicker: {
      now: 'Dabar',
      today: 'Šiandien',
      cancel: 'Atšaukti',
      clear: 'Valyti',
      confirm: 'OK',
      selectDate: 'Pasirink datą',
      selectTime: 'Pasirink laiką',
      startDate: 'Data nuo',
      startTime: 'Laikas nuo',
      endDate: 'Data iki',
      endTime: 'Laikas iki',
      prevYear: 'Metai atgal',
      nextYear: 'Metai į priekį',
      prevMonth: 'Mėn. atgal',
      nextMonth: 'Mėn. į priekį',
      year: '',
      month1: 'Sausis',
      month2: 'Vasaris',
      month3: 'Kovas',
      month4: 'Balandis',
      month5: 'Gegužė',
      month6: 'Birželis',
      month7: 'Liepa',
      month8: 'Rugpjūtis',
      month9: 'Rugsėjis',
      month10: 'Spalis',
      month11: 'Lapkritis',
      month12: 'Gruodis',
      // week: 'savaitė',
      weeks: {
        sun: 'S.',
        mon: 'Pr.',
        tue: 'A.',
        wed: 'T.',
        thu: 'K.',
        fri: 'Pn.',
        sat: 'Š.'
      },
      months: {
        jan: 'Sau',
        feb: 'Vas',
        mar: 'Kov',
        apr: 'Bal',
        may: 'Geg',
        jun: 'Bir',
        jul: 'Lie',
        aug: 'Rugp',
        sep: 'Rugs',
        oct: 'Spa',
        nov: 'Lap',
        dec: 'Gruo'
      }
    },
    select: {
      loading: 'Kraunasi',
      noMatch: 'Duomenų nerasta',
      noData: 'Nėra duomenų',
      placeholder: 'Pasirink'
    },
    cascader: {
      noMatch: 'Duomenų nerasta',
      loading: 'Kraunasi',
      placeholder: 'Pasirink'
    },
    pagination: {
      goto: 'Eiti į',
      pagesize: '/p',
      total: 'Viso {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Žinutė',
      confirm: 'OK',
      cancel: 'Atšaukti',
      error: 'Klaida įvestuose duomenyse'
    },
    upload: {
      deleteTip: 'spauskite "Trinti" norėdami pašalinti',
      delete: 'Trinti',
      preview: 'Peržiūrėti',
      continue: 'Toliau'
    },
    table: {
      emptyText: 'Duomenų nerasta',
      confirmFilter: 'Patvirtinti',
      resetFilter: 'Atstatyti',
      clearFilter: 'Išvalyti',
      sumText: 'Suma'
    },
    tree: {
      emptyText: 'Nėra duomenų'
    },
    transfer: {
      noMatch: 'Duomenų nerasta',
      noData: 'Nėra duomenų',
      titles: ['Sąrašas 1', 'Sąrašas 2'],
      filterPlaceholder: 'Įvesk raktažodį',
      noCheckedFormat: 'Viso: {total}',
      hasCheckedFormat: 'Pažymėta {checked} iš {total}'
    }
  }
};

/***/ })

/******/ });