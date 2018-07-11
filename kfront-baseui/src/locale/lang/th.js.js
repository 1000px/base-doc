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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 58:
=======
/***/ 61:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'ตกลง',
      clear: 'ล้างข้อมูล'
    },
    datepicker: {
      now: 'ตอนนี้',
      today: 'วันนี้',
      cancel: 'ยกเลิก',
      clear: 'ล้างข้อมูล',
      confirm: 'ตกลง',
      selectDate: 'เลือกวันที่',
      selectTime: 'เลือกเวลา',
      startDate: 'วันที่เริ่มต้น',
      startTime: 'เวลาเริ่มต้น',
      endDate: 'วันที่สิ้นสุด',
      endTime: 'เวลาสิ้นสุด',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'ปี',
      month1: 'มกราคม',
      month2: 'กุมภาพันธ์',
      month3: 'มีนาคม',
      month4: 'เมษายน',
      month5: 'พฤษภาคม',
      month6: 'มิถุนายน',
      month7: 'กรกฎาคม',
      month8: 'สิงหาคม',
      month9: 'กันยายน',
      month10: 'ตุลาคม',
      month11: 'พฤศจิกายน',
      month12: 'ธันวาคม',
      // week: 'week',
      weeks: {
        sun: 'อา',
        mon: 'จ',
        tue: 'อ',
        wed: 'พ',
        thu: 'พฤ',
        fri: 'ศ',
        sat: 'ส'
      },
      months: {
        jan: 'มกรา',
        feb: 'กุมภา',
        mar: 'มีนา',
        apr: 'เมษา',
        may: 'พฤษภา',
        jun: 'มิถุนา',
        jul: 'กรกฎา',
        aug: 'สิงหา',
        sep: 'กันยา',
        oct: 'ตุลา',
        nov: 'พฤศจิกา',
        dec: 'ธันวา'
      }
    },
    select: {
      loading: 'กำลังโหลด',
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      noData: 'ไม่พบข้อมูล',
      placeholder: 'เลือก'
    },
    cascader: {
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      loading: 'กำลังโหลด',
      placeholder: 'เลือก'
    },
    pagination: {
      goto: 'ไปที่',
      pagesize: '/หน้า',
      total: 'ทั้งหมด {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'ข้อความ',
      confirm: 'ตกลง',
      cancel: 'ยกเลิก',
      error: 'คุณป้อนข้อมูลไม่ถูกต้อง'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'ลบ',
      preview: 'ตัวอย่าง',
      continue: 'ทำต่อ'
    },
    table: {
      emptyText: 'ไม่พบข้อมูล',
      confirmFilter: 'ยืนยัน',
      resetFilter: 'รีเซ็ต',
      clearFilter: 'ทั้งหมด',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'ไม่พบข้อมูล'
    },
    transfer: {
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      noData: 'ไม่พบข้อมูล',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

/******/ });