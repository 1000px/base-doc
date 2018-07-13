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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Тийм',
      clear: 'Цэвэрлэх'
    },
    datepicker: {
      now: 'Одоо',
      today: 'Өнөөдөр',
      cancel: 'Болих',
      clear: 'Цэвэрлэх',
      confirm: 'Тийм',
      selectDate: 'Огноог сонго',
      selectTime: 'Цагийг сонго',
      startDate: 'Эхлэх огноо',
      startTime: 'Эхлэх цаг',
      endDate: 'Дуусах огноо',
      endTime: 'Дуусах цаг',
      prevYear: 'Өмнөх жил',
      nextYear: 'Дараа жил',
      prevMonth: 'Өмнөх сар',
      nextMonth: 'Дараа сар',
      year: 'он',
      month1: '1 сар',
      month2: '2 сар',
      month3: '3 сар',
      month4: '4 сар',
      month5: '5 сар',
      month6: '6 сар',
      month7: '7 сар',
      month8: '8 сар',
      month9: '9 сар',
      month10: '10 сар',
      month11: '11 сар',
      month12: '12 сар',
      week: 'Долоо хоног',
      weeks: {
        sun: 'Ням',
        mon: 'Дав',
        tue: 'Мяг',
        wed: 'Лха',
        thu: 'Пүр',
        fri: 'Баа',
        sat: 'Бям'
      },
      months: {
        jan: '1 сар',
        feb: '2 сар',
        mar: '3 сар',
        apr: '4 сар',
        may: '5 сар',
        jun: '6 сар',
        jul: '7 сар',
        aug: '8 сар',
        sep: '9 сар',
        oct: '10 сар',
        nov: '11 сар',
        dec: '12 сар'
      }
    },
    select: {
      loading: 'Ачаалж байна',
      noMatch: 'Тохирох өгөгдөл байхгүй',
      noData: 'Өгөгдөл байхгүй',
      placeholder: 'Сонгох'
    },
    cascader: {
      noMatch: 'Тохирох өгөгдөл байхгүй',
      loading: 'Ачаалж байна',
      placeholder: 'Сонгох'
    },
    pagination: {
      goto: 'Очих',
      pagesize: '/хуудас',
      total: 'Нийт {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Зурвас',
      confirm: 'Тийм',
      cancel: 'Болих',
      error: 'Буруу утга'
    },
    upload: {
      deleteTip: 'Устгахын дарж арилга',
      delete: 'Устгах',
      preview: 'Өмнөх',
      continue: 'Үргэлжлүүлэх'
    },
    table: {
      emptyText: 'Өгөгдөл байхгүй',
      confirmFilter: 'Зөвшөөрөх',
      resetFilter: 'Цэвэрлэх',
      clearFilter: 'Бүгд',
      sumText: 'Нийт'
    },
    tree: {
      emptyText: 'Өгөгдөл байхгүй'
    },
    transfer: {
      noMatch: 'Тохирох өгөгдөл байхгүй',
      noData: 'Өгөгдөл байхгүй',
      titles: ['Жагсаалт 1', 'Жагсаалт 2'],
      filterPlaceholder: 'Утга оруул',
      noCheckedFormat: '{total} өгөгдөл',
      hasCheckedFormat: '{checked}/{total} сонгосон'
    }
  }
};

/***/ })

/******/ });