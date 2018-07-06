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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ({

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Onayla',
      clear: 'Temizle'
    },
    datepicker: {
      now: 'Şimdi',
      today: 'Bugün',
      cancel: 'İptal',
      clear: 'Temizle',
      confirm: 'Onayla',
      selectDate: 'Tarih seç',
      selectTime: 'Saat seç',
      startDate: 'Başlangıç Tarihi',
      startTime: 'Başlangıç Saati',
      endDate: 'Bitiş Tarihi',
      endTime: 'Bitiş Saati',
      prevYear: 'Önceki Yıl',
      nextYear: 'Sonraki Yıl',
      prevMonth: 'Önceki Ay',
      nextMonth: 'Sonraki Ay',
      year: '',
      month1: 'Ocak',
      month2: 'Şubat',
      month3: 'Mart',
      month4: 'Nisan',
      month5: 'Mayıs',
      month6: 'Haziran',
      month7: 'Temmuz',
      month8: 'Ağustos',
      month9: 'Eylül',
      month10: 'Ekim',
      month11: 'Kasım',
      month12: 'Aralık',
      // week: 'week',
      weeks: {
        sun: 'Paz',
        mon: 'Pzt',
        tue: 'Sal',
        wed: 'Çar',
        thu: 'Per',
        fri: 'Cum',
        sat: 'Cmt'
      },
      months: {
        jan: 'Oca',
        feb: 'Şub',
        mar: 'Mar',
        apr: 'Nis',
        may: 'May',
        jun: 'Haz',
        jul: 'Tem',
        aug: 'Ağu',
        sep: 'Eyl',
        oct: 'Eki',
        nov: 'Kas',
        dec: 'Ara'
      }
    },
    select: {
      loading: 'Yükleniyor',
      noMatch: 'Eşleşen veri bulunamadı',
      noData: 'Veri yok',
      placeholder: 'Seç'
    },
    cascader: {
      noMatch: 'Eşleşen veri bulunamadı',
      loading: 'Yükleniyor',
      placeholder: 'Seç'
    },
    pagination: {
      goto: 'Git',
      pagesize: '/sayfa',
      total: 'Toplam {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Mesaj',
      confirm: 'Onayla',
      cancel: 'İptal',
      error: 'İllegal giriş'
    },
    upload: {
      deleteTip: 'kaldırmak için delete tuşuna bas',
      delete: 'Sil',
      preview: 'Görüntüle',
      continue: 'Devam'
    },
    table: {
      emptyText: 'Veri yok',
      confirmFilter: 'Onayla',
      resetFilter: 'Sıfırla',
      clearFilter: 'Hepsi',
      sumText: 'Sum'
    },
    tree: {
      emptyText: 'Veri yok'
    },
    transfer: {
      noMatch: 'Eşleşen veri bulunamadı',
      noData: 'Veri yok',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Anahtar kelimeleri gir',
      noCheckedFormat: '{total} adet',
      hasCheckedFormat: '{checked}/{total} seçildi'
    }
  }
};

/***/ })

/******/ });