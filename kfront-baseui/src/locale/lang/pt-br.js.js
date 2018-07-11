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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 51:
=======
/***/ 54:
>>>>>>> 23a74fde13bcd1dcb466eff602c21d0b6017ecb4
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
      startDate: 'Data inicial',
      startTime: 'Hora inicial',
      endDate: 'Data final',
      endTime: 'Hora final',
      prevYear: 'Ano anterior',
      nextYear: 'Próximo ano',
      prevMonth: 'Mês anterior',
      nextMonth: 'Próximo mês',
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
      loading: 'Carregando',
      noMatch: 'Sem resultados',
      noData: 'Sem dados',
      placeholder: 'Selecione'
    },
    cascader: {
      noMatch: 'Sem resultados',
      loading: 'Carregando',
      placeholder: 'Selecione'
    },
    pagination: {
      goto: 'Ir para',
      pagesize: '/página',
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
      deleteTip: 'aperte delete para apagar',
      delete: 'Apagar',
      preview: 'Pré-visualizar',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sem dados',
      confirmFilter: 'Confirmar',
      resetFilter: 'Limpar',
      clearFilter: 'Todos',
      sumText: 'Total'
    },
    tree: {
      emptyText: 'Sem dados'
    },
    transfer: {
      noMatch: 'Sem resultados',
      noData: 'Sem dados',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Digite uma palavra-chave',
      noCheckedFormat: '{total} itens',
      hasCheckedFormat: '{checked}/{total} selecionados'
    }
  }
};

/***/ })

/******/ });