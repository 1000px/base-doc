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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Изчисти'
    },
    datepicker: {
      now: 'Сега',
      today: 'Днес',
      cancel: 'Откажи',
      clear: 'Изчисти',
      confirm: 'ОК',
      selectDate: 'Избери дата',
      selectTime: 'Избери час',
      startDate: 'Начална дата',
      startTime: 'Начален час',
      endDate: 'Крайна дата',
      endTime: 'Краен час',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Януари',
      month2: 'Февруари',
      month3: 'Март',
      month4: 'Април',
      month5: 'Май',
      month6: 'Юни',
      month7: 'Юли',
      month8: 'Август',
      month9: 'Септември',
      month10: 'Октомври',
      month11: 'Ноември',
      month12: 'Декември',
      // week: 'Седмица',
      weeks: {
        sun: 'Нед',
        mon: 'Пон',
        tue: 'Вто',
        wed: 'Сря',
        thu: 'Чет',
        fri: 'Пет',
        sat: 'Съб'
      },
      months: {
        jan: 'Яну',
        feb: 'Фев',
        mar: 'Мар',
        apr: 'Апр',
        may: 'Май',
        jun: 'Юни',
        jul: 'Юли',
        aug: 'Авг',
        sep: 'Сеп',
        oct: 'Окт',
        nov: 'Ное',
        dec: 'Дек'
      }
    },
    select: {
      loading: 'Зареждане',
      noMatch: 'Няма намерени',
      noData: 'Няма данни',
      placeholder: 'Избери'
    },
    cascader: {
      noMatch: 'Няма намерени',
      loading: 'Зареждане',
      placeholder: 'Избери'
    },
    pagination: {
      goto: 'Иди на',
      pagesize: '/страница',
      total: 'Общо {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Съобщение',
      confirm: 'ОК',
      cancel: 'Откажи',
      error: 'Невалидни данни'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Изтрий',
      preview: 'Прегледай',
      continue: 'Продължи'
    },
    table: {
      emptyText: 'Няма данни',
      confirmFilter: 'Потвърди',
      resetFilter: 'Изчисти',
      clearFilter: 'Всички',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Няма данни'
    },
    transfer: {
      noMatch: 'Няма намерени',
      noData: 'Няма данни',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

/******/ });