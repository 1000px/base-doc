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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 40:
=======
/***/ 43:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'យល់ព្រម',
      clear: 'លុប'
    },
    datepicker: {
      now: 'ឥឡូវ​នេះ',
      today: 'ថ្ងៃនេះ',
      cancel: 'បោះបង់',
      clear: 'លុប',
      confirm: 'យល់ព្រម',
      selectDate: 'ជ្រើសរើសថ្ងៃ',
      selectTime: 'ជ្រើសរើសម៉ោង',
      startDate: 'ថ្ងៃចាប់ផ្តើម',
      startTime: 'ម៉ោងចាប់ផ្តើម',
      endDate: 'ថ្ងៃបញ្ចប់',
      endTime: 'ម៉ោងបញ្ចប់',
      prevYear: 'ឆ្នាំមុន',
      nextYear: 'ឆ្នាំក្រោយ',
      prevMonth: 'ខែមុន',
      nextMonth: 'ខែក្រោយ',
      year: 'ឆ្នាំ',
      month1: 'មករា',
      month2: 'កុម្ភៈ',
      month3: 'មីនា',
      month4: 'មេសា',
      month5: 'ឧសភា',
      month6: 'មិថុនា',
      month7: 'កក្កដា',
      month8: 'សីហា',
      month9: 'កញ្ញា',
      month10: 'តុលា',
      month11: 'វិច្ឆកា',
      month12: 'ធ្នូ',
      // week: 'week',
      weeks: {
        sun: 'អាទិត្យ',
        mon: 'Mon',
        tue: 'អង្គារ',
        wed: 'ពុធ',
        thu: 'ព្រ.ហ',
        fri: 'សុក្រ',
        sat: 'សៅរ៏'
      },
      months: {
        jan: 'មករា',
        feb: 'កុម្ភៈ',
        mar: 'មីនា',
        apr: 'មេសា',
        may: 'ឧសភា',
        jun: 'មិថុនា',
        jul: 'កក្កដា',
        aug: 'សីហា',
        sep: 'កញ្ញា',
        oct: 'តុលា',
        nov: 'វិច្ឆកា',
        dec: 'ធ្នូ'
      }
    },
    select: {
      loading: 'កំពុងផ្ទុក',
      noMatch: 'គ្មានទិន្ន័យដូច',
      noData: 'គ្មានទិន្ន័យ',
      placeholder: 'ជ្រើសរើស'
    },
    cascader: {
      noMatch: 'គ្មានទិន្ន័យដូច',
      loading: 'កំពុងផ្ទុក',
      placeholder: 'ជ្រើសរើស'
    },
    pagination: {
      goto: 'ទៅកាន់',
      pagesize: '/ទំព័រ',
      total: 'សរុប {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'សារ',
      confirm: 'យល់ព្រម',
      cancel: 'បោះបង់',
      error: 'ការបញ្ចូលមិនអនុញ្ញាត'
    },
    upload: {
      deleteTip: 'ចុចលុបដើម្បីដកចេញ',
      delete: 'លុប',
      preview: 'មើល',
      continue: 'បន្ត'
    },
    table: {
      emptyText: 'គ្មានទិន្ន័យ',
      confirmFilter: 'យល់ព្រម',
      resetFilter: 'កំណត់ឡើងវិញ',
      clearFilter: 'ទាំងអស់',
      sumText: 'បូក'
    },
    tree: {
      emptyText: 'គ្មានទិន្ន័យ'
    },
    transfer: {
      noMatch: 'គ្មានទិន្ន័យដូច',
      noData: 'គ្មានទិន្ន័យ',
      titles: ['បញ្ជី ១', 'បញ្ជី ២'],
      filterPlaceholder: 'បញ្ចូលពាក្យ',
      noCheckedFormat: '{total} ធាតុ',
      hasCheckedFormat: '{checked}/{total} បានគូសធីក'
    }
  }
};

/***/ })

/******/ });