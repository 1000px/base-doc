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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Қабылдау',
      clear: 'Тазалау'
    },
    datepicker: {
      now: 'Қазір',
      today: 'Бүгін',
      cancel: 'Болдырмау',
      clear: 'Тазалау',
      confirm: 'Қабылдау',
      selectDate: 'Күнді таңдаңыз',
      selectTime: 'Сағатты таңдаңыз',
      startDate: 'Басталу күні',
      startTime: 'Басталу сағаты',
      endDate: 'Аяқталу күні',
      endTime: 'Аяқталу сағаты',
      prevYear: 'Алдыңғы жыл',
      nextYear: 'Келесі жыл',
      prevMonth: 'Алдыңғы ай',
      nextMonth: 'Келесі ай',
      year: 'Жыл',
      month1: 'Қаңтар',
      month2: 'Ақпан',
      month3: 'Наурыз',
      month4: 'Сәуір',
      month5: 'Мамыр',
      month6: 'Маусым',
      month7: 'Шілде',
      month8: 'Тамыз',
      month9: 'Қыркүйек',
      month10: 'Қазан',
      month11: 'Қараша',
      month12: 'Желтоқсан',
      week: 'Апта',
      weeks: {
        sun: 'Жек',
        mon: 'Дүй',
        tue: 'Сей',
        wed: 'Сәр',
        thu: 'Бей',
        fri: 'Жұм',
        sat: 'Сен'
      },
      months: {
        jan: 'Қаң',
        feb: 'Ақп',
        mar: 'Нау',
        apr: 'Сәу',
        may: 'Мам',
        jun: 'Мау',
        jul: 'Шіл',
        aug: 'Там',
        sep: 'Қыр',
        oct: 'Қаз',
        nov: 'Қар',
        dec: 'Жел'
      }
    },
    select: {
      loading: 'Жүктелуде',
      noMatch: 'Сәйкес деректер жоқ',
      noData: 'Деректер жоқ',
      placeholder: 'Таңдаңыз'
    },
    cascader: {
      noMatch: 'Сәйкес деректер жоқ',
      loading: 'Жүктелуде',
      placeholder: 'Таңдаңыз'
    },
    pagination: {
      goto: 'Бару',
      pagesize: '/page',
      total: 'Барлығы {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Хабар',
      confirm: 'Қабылдау',
      cancel: 'Болдырмау',
      error: 'Жарамсыз енгізулер'
    },
    upload: {
      deleteTip: 'Өшіруді басып өшіріңіз',
      delete: 'Өшіру',
      preview: 'Алдын ала қарау',
      continue: 'Жалғастыру'
    },
    table: {
      emptyText: 'Деректер жоқ',
      confirmFilter: 'Қабылдау',
      resetFilter: 'Қалпына келтіру',
      clearFilter: 'Барлығы',
      sumText: 'Сомасы'
    },
    tree: {
      emptyText: 'Деректер жоқ'
    },
    transfer: {
      noMatch: 'Сәйкес деректер жоқ',
      noData: 'Деректер жоқ',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Кілт сөзді енгізіңіз',
      noCheckedFormat: '{total} элэмэнт',
      hasCheckedFormat: '{checked}/{total} құсбелгісі қойылды'
    }
  }
};

/***/ })

/******/ });