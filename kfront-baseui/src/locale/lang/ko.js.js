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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 41:
=======
/***/ 44:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: '확인',
      clear: '초기화'
    },
    datepicker: {
      now: '지금',
      today: '오늘',
      cancel: '취소',
      clear: '초기화',
      confirm: '확인',
      selectDate: '날짜 선택',
      selectTime: '시간 선택',
      startDate: '시작 날짜',
      startTime: '시작 시간',
      endDate: '종료 날짜',
      endTime: '종료 시간',
      prevYear: '지난해',
      nextYear: '다음해',
      prevMonth: '지난달',
      nextMonth: '다음달',
      year: '년',
      month1: '1월',
      month2: '2월',
      month3: '3월',
      month4: '4월',
      month5: '5월',
      month6: '6월',
      month7: '7월',
      month8: '8월',
      month9: '9월',
      month10: '10월',
      month11: '11월',
      month12: '12월',
      // week: 'week',
      weeks: {
        sun: '일',
        mon: '월',
        tue: '화',
        wed: '수',
        thu: '목',
        fri: '금',
        sat: '토'
      },
      months: {
        jan: '1월',
        feb: '2월',
        mar: '3월',
        apr: '4월',
        may: '5월',
        jun: '6월',
        jul: '7월',
        aug: '8월',
        sep: '9월',
        oct: '10월',
        nov: '11월',
        dec: '12월'
      }
    },
    select: {
      loading: '불러오는 중',
      noMatch: '맞는 데이터가 없습니다',
      noData: '데이터 없음',
      placeholder: '선택'
    },
    cascader: {
      noMatch: '맞는 데이터가 없습니다',
      loading: '불러오는 중',
      placeholder: '선택'
    },
    pagination: {
      goto: '이동',
      pagesize: '/page',
      total: '총 {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: '메시지',
      confirm: '확인',
      cancel: '취소',
      error: '올바르지 않은 입력'
    },
    upload: {
      deleteTip: '클릭시 삭제됩니다',
      delete: '삭제',
      preview: '미리보기',
      continue: '계속하기'
    },
    table: {
      emptyText: '데이터 없음',
      confirmFilter: '확인',
      resetFilter: '초기화',
      clearFilter: '전체',
      sumText: '합'
    },
    tree: {
      emptyText: '데이터 없음'
    },
    transfer: {
      noMatch: '맞는 데이터가 없습니다',
      noData: '데이터 없음',
      titles: ['리스트 1', '리스트 2'],
      filterPlaceholder: ' 입력하세요',
      noCheckedFormat: '{total} 항목',
      hasCheckedFormat: '{checked}/{total} 선택됨'
    }
  }
};

/***/ })

/******/ });