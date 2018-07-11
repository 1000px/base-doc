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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 37:
=======
/***/ 40:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Pilih',
      clear: 'Kosongkan'
    },
    datepicker: {
      now: 'Sekarang',
      today: 'Hari ini',
      cancel: 'Batal',
      clear: 'Kosongkan',
      confirm: 'Ya',
      selectDate: 'Pilih tanggal',
      selectTime: 'Pilih waktu',
      startDate: 'Tanggal Mulai',
      startTime: 'Waktu Mulai',
      endDate: 'Tanggal Selesai',
      endTime: 'Waktu Selesai',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Tahun',
      month1: 'Januari',
      month2: 'Februari',
      month3: 'Maret',
      month4: 'April',
      month5: 'Mei',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'Agustus',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Desember',
      // week: 'minggu',
      weeks: {
        sun: 'Min',
        mon: 'Sen',
        tue: 'Sel',
        wed: 'Rab',
        thu: 'Kam',
        fri: 'Jum',
        sat: 'Sab'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mei',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Agu',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des'
      }
    },
    select: {
      loading: 'Memuat',
      noMatch: 'Tidak ada data yg cocok',
      noData: 'Tidak ada data',
      placeholder: 'Pilih'
    },
    cascader: {
      noMatch: 'Tidak ada data yg cocok',
      loading: 'Memuat',
      placeholder: 'Pilih'
    },
    pagination: {
      goto: 'Pergi ke',
      pagesize: '/laman',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Pesan',
      confirm: 'Ya',
      cancel: 'Batal',
      error: 'Masukan ilegal'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Hapus',
      preview: 'Pratinjau',
      continue: 'Lanjutkan'
    },
    table: {
      emptyText: 'Tidak ada data',
      confirmFilter: 'Konfirmasi',
      resetFilter: 'Atur ulang',
      clearFilter: 'Semua',
      sumText: 'Jml'
    },
    tree: {
      emptyText: 'Tidak ada data'
    },
    transfer: {
      noMatch: 'Tidak ada data yg cocok',
      noData: 'Tidak ada data',
      titles: ['Senarai 1', 'Senarai 2'],
      filterPlaceholder: 'Masukan kata kunci',
      noCheckedFormat: '{total} butir',
      hasCheckedFormat: '{checked}/{total} terpilih'
    }
  }
};

/***/ })

/******/ });