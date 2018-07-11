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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ({

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Очистити'
    },
    datepicker: {
      now: 'Зараз',
      today: 'Сьогодні',
      cancel: 'Відміна',
      clear: 'Очистити',
      confirm: 'OK',
      selectDate: 'Вибрати дату',
      selectTime: 'Вибрати час',
      startDate: 'Дата початку',
      startTime: 'Час початку',
      endDate: 'Дата завершення',
      endTime: 'Час завершення',
      prevYear: 'Попередній Рік',
      nextYear: 'Наступний Рік',
      prevMonth: 'Попередній Місяць',
      nextMonth: 'Наступний Місяць',
      year: '',
      month1: 'Січень',
      month2: 'Лютий',
      month3: 'Березень',
      month4: 'Квітень',
      month5: 'Травень',
      month6: 'Червень',
      month7: 'Липень',
      month8: 'Серпень',
      month9: 'Вересень',
      month10: 'Жовтень',
      month11: 'Листопад',
      month12: 'Грудень',
      // week: 'week',
      weeks: {
        sun: 'Нд',
        mon: 'Пн',
        tue: 'Вт',
        wed: 'Ср',
        thu: 'Чт',
        fri: 'Пт',
        sat: 'Сб'
      },
      months: {
        jan: 'Січ',
        feb: 'Лют',
        mar: 'Бер',
        apr: 'Кві',
        may: 'Тра',
        jun: 'Чер',
        jul: 'Лип',
        aug: 'Сер',
        sep: 'Вер',
        oct: 'Жов',
        nov: 'Лис',
        dec: 'Гру'
      }
    },
    select: {
      loading: 'Завантаження',
      noMatch: 'Співпадінь не знайдено',
      noData: 'Немає даних',
      placeholder: 'Обрати'
    },
    cascader: {
      noMatch: 'Співпадінь не знайдено',
      loading: 'Завантаження',
      placeholder: 'Обрати'
    },
    pagination: {
      goto: 'Перейти',
      pagesize: 'на сторінці',
      total: 'Всього {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Повідомлення',
      confirm: 'OK',
      cancel: 'Відміна',
      error: 'Неприпустимий ввід даних'
    },
    upload: {
      deleteTip: 'натисніть кнопку щоб видалити',
      delete: 'Видалити',
      preview: 'Перегляд',
      continue: 'Продовжити'
    },
    table: {
      emptyText: 'Немає даних',
      confirmFilter: 'Підтвердити',
      resetFilter: 'Скинути',
      clearFilter: 'Все',
      sumText: 'Сума'
    },
    tree: {
      emptyText: 'Немає даних'
    },
    transfer: {
      noMatch: 'Співпадінь не знайдено',
      noData: 'Обрати',
      titles: ['Список 1', 'Список 2'],
      filterPlaceholder: 'Введіть ключове слово',
      noCheckedFormat: '{total} пунктів',
      hasCheckedFormat: '{checked}/{total} вибрано'
    }
  }
};

/***/ })

/******/ });