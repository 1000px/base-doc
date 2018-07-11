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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 42:
=======
/***/ 45:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Temam',
      clear: 'Paqij bike'
    },
    datepicker: {
      now: 'Niha',
      today: 'Îro',
      cancel: 'Betal bike',
      clear: 'Paqij bike',
      confirm: 'Temam',
      selectDate: 'Dîrokê bibijêre',
      selectTime: 'Demê bibijêre',
      startDate: 'Dîroka Destpêkê',
      startTime: 'Dema Destpêkê',
      endDate: 'Dîroka Dawî',
      endTime: 'Dema Dawî',
      prevYear: 'Sala Pêş',
      nextYear: 'Sala Paş',
      prevMonth: 'Meha Pêş',
      nextMonth: 'Meha Paş',
      year: 'Sal',
      month1: 'Rêbendan',
      month2: 'Reşemeh',
      month3: 'Adar',
      month4: 'Avrêl',
      month5: 'Gulan',
      month6: 'Pûşber',
      month7: 'Tîrmeh',
      month8: 'Gilavêj',
      month9: 'Rezber',
      month10: 'Kewçêr',
      month11: 'Sarmawaz',
      month12: 'Berfanbar',
      // week: 'week',
      weeks: {
        sun: 'Yek',
        mon: 'Duş',
        tue: 'Sêş',
        wed: 'Çar',
        thu: 'Pên',
        fri: 'În',
        sat: 'Şem'
      },
      months: {
        jan: 'Rêb',
        feb: 'Reş',
        mar: 'Ada',
        apr: 'Avr',
        may: 'Gul',
        jun: 'Pûş',
        jul: 'Tîr',
        aug: 'Gil',
        sep: 'Rez',
        oct: 'Kew',
        nov: 'Sar',
        dec: 'Ber'
      }
    },
    select: {
      loading: 'Bardibe',
      noMatch: 'Li hembere ve agahî tune',
      noData: 'Agahî tune',
      placeholder: 'Bibijêre'
    },
    cascader: {
      noMatch: 'Li hembere ve agahî tune',
      loading: 'Bardibe',
      placeholder: 'Bibijêre'
    },
    pagination: {
      goto: 'Biçe',
      pagesize: '/rupel',
      total: 'Tevahî {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Peyam',
      confirm: 'Temam',
      cancel: 'Betal bike',
      error: 'Beyana çewt'
    },
    upload: {
      deleteTip: 'ji bo rake pêl "delete" bike',
      delete: 'Rake',
      preview: 'Pêşdîtin',
      continue: 'Berdewam'
    },
    table: {
      emptyText: 'Agahî tune',
      confirmFilter: 'Piştrast bike',
      resetFilter: 'Jê bibe',
      clearFilter: 'Hemû',
      sumText: 'Kom'
    },
    tree: {
      emptyText: 'Agahî tune'
    },
    transfer: {
      noMatch: 'Li hembere ve agahî tune',
      noData: 'Agahî tune',
      titles: ['Lîste 1', 'Lîste 2'],
      filterPlaceholder: 'Binivîse',
      noCheckedFormat: '{total} lib',
      hasCheckedFormat: '{checked}/{total} bijartin'
    }
  }
};

/***/ })

/******/ });