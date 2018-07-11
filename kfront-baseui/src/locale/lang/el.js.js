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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Εντάξει',
      clear: 'Καθαρισμός'
    },
    datepicker: {
      now: 'Τώρα',
      today: 'Σήμερα',
      cancel: 'Ακύρωση',
      clear: 'Καθαρισμός',
      confirm: 'Εντάξει',
      selectDate: 'Επιλέξτε ημέρα',
      selectTime: 'Επιλέξτε ώρα',
      startDate: 'Ημερομηνία Έναρξης',
      startTime: 'Ωρα Έναρξης',
      endDate: 'Ημερομηνία Λήξης',
      endTime: 'Ωρα Λήξης',
      prevYear: 'Προηγούμενο Έτος',
      nextYear: 'Επόμενο Έτος',
      prevMonth: 'Προηγούμενος Μήνας',
      nextMonth: 'Επόμενος Μήνας',
      year: 'Έτος',
      month1: 'Ιανουάριος',
      month2: 'Φεβρουάριος',
      month3: 'Μάρτιος',
      month4: 'Απρίλιος',
      month5: 'Μάιος',
      month6: 'Ιούνιος',
      month7: 'Ιούλιος',
      month8: 'Αύγουστος',
      month9: 'Σεπτέμβριος',
      month10: 'Οκτώβριος',
      month11: 'Νοέμβριος',
      month12: 'Δεκέμβριος',
      // week: 'εβδομάδα',
      weeks: {
        sun: 'Κυρ',
        mon: 'Δευ',
        tue: 'Τρι',
        wed: 'Τετ',
        thu: 'Πεμ',
        fri: 'Παρ',
        sat: 'Σαβ'
      },
      months: {
        jan: 'Ιαν',
        feb: 'Φεβ',
        mar: 'Μαρ',
        apr: 'Απρ',
        may: 'Μαϊ',
        jun: 'Ιουν',
        jul: 'Ιουλ',
        aug: 'Αυγ',
        sep: 'Σεπ',
        oct: 'Οκτ',
        nov: 'Νοε',
        dec: 'Δεκ'
      }
    },
    select: {
      loading: 'Φόρτωση',
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      noData: 'Χωρίς δεδομένα',
      placeholder: 'Επιλογή'
    },
    cascader: {
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      loading: 'Φόρτωση',
      placeholder: 'Επιλογή'
    },
    pagination: {
      goto: 'Μετάβαση σε',
      pagesize: '/σελίδα',
      total: 'Σύνολο {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Μήνυμα',
      confirm: 'Εντάξει',
      cancel: 'Ακύρωση',
      error: 'Άκυρη εισαγωγή'
    },
    upload: {
      deleteTip: 'Πάτησε Διαγραφή για αφαίρεση',
      delete: 'Διαγραφή',
      preview: 'Προεπισκόπηση',
      continue: 'Συνέχεια'
    },
    table: {
      emptyText: 'Χωρίς Δεδομένα',
      confirmFilter: 'Επιβεβαίωση',
      resetFilter: 'Επαναφορά',
      clearFilter: 'Όλα',
      sumText: 'Σύνολο'
    },
    tree: {
      emptyText: 'Χωρίς Δεδομένα'
    },
    transfer: {
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      noData: 'Χωρίς δεδομένα',
      titles: ['Λίστα 1', 'Λίστα 2'],
      filterPlaceholder: 'Αναζήτηση',
      noCheckedFormat: '{total} Αντικείμενα',
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

/******/ });