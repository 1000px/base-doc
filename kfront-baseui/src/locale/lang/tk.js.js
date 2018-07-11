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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Arassala'
    },
    datepicker: {
      now: 'Şuwagt',
      today: 'Şügün',
      cancel: 'Bes et',
      clear: 'Arassala',
      confirm: 'OK',
      selectDate: 'Güni saýlaň',
      selectTime: 'Wagty saýlaň',
      startDate: 'Başlaýan güni',
      startTime: 'Başlaýan wagty',
      endDate: 'Gutarýan güni',
      endTime: 'Gutarýan wagty',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Ýan',
      month2: 'Few',
      month3: 'Mar',
      month4: 'Apr',
      month5: 'Maý',
      month6: 'Iýn',
      month7: 'Iýl',
      month8: 'Awg',
      month9: 'Sen',
      month10: 'Okt',
      month11: 'Noý',
      month12: 'Dek',
      // week: 'week',
      weeks: {
        sun: 'Ýek',
        mon: 'Duş',
        tue: 'Siş',
        wed: 'Çar',
        thu: 'Pen',
        fri: 'Ann',
        sat: 'Şen'
      },
      months: {
        jan: 'Ýan',
        feb: 'Few',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maý',
        jun: 'Iýn',
        jul: 'Iýl',
        aug: 'Awg',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Noý',
        dec: 'Dek'
      }
    },
    select: {
      loading: 'Indirilýär',
      noMatch: 'Hiçzat tapylmady',
      noData: 'Hiçzat ýok',
      placeholder: 'Saýla'
    },
    cascader: {
      noMatch: 'Hiçzat tapylmady',
      loading: 'Indirilýär',
      placeholder: 'Saýlaň'
    },
    pagination: {
      goto: 'Git',
      pagesize: '/sahypa',
      total: 'Umumy {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Hat',
      confirm: 'OK',
      cancel: 'Bes et',
      error: 'Ýalňyş girizme'
    },
    upload: {
      deleteTip: 'Pozmak üçin "poz" düwmä basyň',
      delete: 'Poz',
      preview: 'Gör',
      continue: 'Dowam et'
    },
    table: {
      emptyText: 'Maglumat ýok',
      confirmFilter: 'Tassykla',
      resetFilter: 'Arassala',
      clearFilter: 'Hemmesi',
      sumText: 'Jemi'
    },
    tree: {
      emptyText: 'Maglumat ýok'
    },
    transfer: {
      noMatch: 'Hiçzat tapylmady',
      noData: 'Hiçzat ýok',
      titles: ['Sanaw 1', 'Sanaw 2'],
      filterPlaceholder: 'Gözleg sözlerini giriziň',
      noCheckedFormat: '{total} sany',
      hasCheckedFormat: '{checked}/{total} saýlanan'
    }
  }
};

/***/ })

/******/ });