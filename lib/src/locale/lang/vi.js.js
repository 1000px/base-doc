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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Xóa'
    },
    datepicker: {
      now: 'Hiện tại',
      today: 'Hôm nay',
      cancel: 'Hủy',
      clear: 'Xóa',
      confirm: 'OK',
      selectDate: 'Chọn ngày',
      selectTime: 'Chọn giờ',
      startDate: 'Ngày bắt đầu',
      startTime: 'Thời gian bắt đầu',
      endDate: 'Ngày kết thúc',
      endTime: 'Thời gian kết thúc',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Năm',
      month1: 'Tháng 1',
      month2: 'Tháng 2',
      month3: 'Tháng 3',
      month4: 'Tháng 4',
      month5: 'Tháng 5',
      month6: 'Tháng 6',
      month7: 'Tháng 7',
      month8: 'Tháng 8',
      month9: 'Tháng 9',
      month10: 'Tháng 10',
      month11: 'Tháng 11',
      month12: 'Tháng 12',
      // week: 'week',
      weeks: {
        sun: 'CN',
        mon: 'T2',
        tue: 'T3',
        wed: 'T4',
        thu: 'T5',
        fri: 'T6',
        sat: 'T7'
      },
      months: {
        jan: 'Th.1',
        feb: 'Th.2',
        mar: 'Th.3',
        apr: 'Th.4',
        may: 'Th.5',
        jun: 'Th.6',
        jul: 'Th.7',
        aug: 'Th.8',
        sep: 'Th.9',
        oct: 'Th.10',
        nov: 'Th.11',
        dec: 'Th.12'
      }
    },
    select: {
      loading: 'Đang tải',
      noMatch: 'Dữ liệu không phù hợp',
      noData: 'Không tìm thấy dữ liệu',
      placeholder: 'Chọn'
    },
    cascader: {
      noMatch: 'Dữ liệu không phù hợp',
      loading: 'Đang tải',
      placeholder: 'Chọn'
    },
    pagination: {
      goto: 'Nhảy tới',
      pagesize: '/trang',
      total: 'Tổng {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Thông báo',
      confirm: 'OK',
      cancel: 'Hủy',
      error: 'Dữ liệu không hợp lệ'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Xóa',
      preview: 'Xem trước',
      continue: 'Tiếp tục'
    },
    table: {
      emptyText: 'Không có dữ liệu',
      confirmFilter: 'Xác nhận',
      resetFilter: 'Làm mới',
      clearFilter: 'Xóa hết',
      sumText: 'Tổng'
    },
    tree: {
      emptyText: 'Không có dữ liệu'
    },
    transfer: {
      noMatch: 'Dữ liệu không phù hợp',
      noData: 'Không tìm thấy dữ liệu',
      titles: ['Danh sách 1', 'Danh sách 2'],
      filterPlaceholder: 'Nhập từ khóa',
      noCheckedFormat: '{total} mục',
      hasCheckedFormat: '{checked}/{total} đã chọn '
    }
  }
};

/***/ })

/******/ });