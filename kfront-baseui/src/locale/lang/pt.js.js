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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Limpar'
    },
    datepicker: {
      now: 'Agora',
      today: 'Hoje',
      cancel: 'Cancelar',
      clear: 'Limpar',
      confirm: 'Confirmar',
      selectDate: 'Selecione a data',
      selectTime: 'Selecione a hora',
      startDate: 'Data de inicio',
      startTime: 'Hora de inicio',
      endDate: 'Data de fim',
      endTime: 'Hora de fim',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Janeiro',
      month2: 'Fevereiro',
      month3: 'Março',
      month4: 'Abril',
      month5: 'Maio',
      month6: 'Junho',
      month7: 'Julho',
      month8: 'Agosto',
      month9: 'Setembro',
      month10: 'Outubro',
      month11: 'Novembro',
      month12: 'Dezembro',
      // week: 'semana',
      weeks: {
        sun: 'Dom',
        mon: 'Seg',
        tue: 'Ter',
        wed: 'Qua',
        thu: 'Qui',
        fri: 'Sex',
        sat: 'Sab'
      },
      months: {
        jan: 'Jan',
        feb: 'Fev',
        mar: 'Mar',
        apr: 'Abr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Ago',
        sep: 'Set',
        oct: 'Out',
        nov: 'Nov',
        dec: 'Dez'
      }
    },
    select: {
      loading: 'A carregar',
      noMatch: 'Sem correspondência',
      noData: 'Sem dados',
      placeholder: 'Selecione'
    },
    cascader: {
      noMatch: 'Sem correspondência',
      loading: 'A carregar',
      placeholder: 'Selecione'
    },
    pagination: {
      goto: 'Ir para',
      pagesize: '/pagina',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Mensagem',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      error: 'Erro!'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Apagar',
      preview: 'Previsualizar',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sem dados',
      confirmFilter: 'Confirmar',
      resetFilter: 'Limpar',
      clearFilter: 'Todos',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Sem dados'
    },
    transfer: {
      noMatch: 'Sem correspondência',
      noData: 'Sem dados',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

/******/ });