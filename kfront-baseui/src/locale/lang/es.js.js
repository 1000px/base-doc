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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Despejar'
    },
    datepicker: {
      now: 'Ahora',
      today: 'Hoy',
      cancel: 'Cancelar',
      clear: 'Despejar',
      confirm: 'Confirmar',
      selectDate: 'Seleccionar fecha',
      selectTime: 'Seleccionar hora',
      startDate: 'Fecha Incial',
      startTime: 'Hora Inicial',
      endDate: 'Fecha Final',
      endTime: 'Hora Final',
      prevYear: 'Año Anterior',
      nextYear: 'Próximo Año',
      prevMonth: 'Mes Anterior',
      nextMonth: 'Próximo Mes',
      year: '',
      month1: 'enero',
      month2: 'febrero',
      month3: 'marzo',
      month4: 'abril',
      month5: 'mayo',
      month6: 'junio',
      month7: 'julio',
      month8: 'agosto',
      month9: 'septiembre',
      month10: 'octubre',
      month11: 'noviembre',
      month12: 'diciembre',
      // week: 'semana',
      weeks: {
        sun: 'dom',
        mon: 'lun',
        tue: 'mar',
        wed: 'mié',
        thu: 'jue',
        fri: 'vie',
        sat: 'sáb'
      },
      months: {
        jan: 'ene',
        feb: 'feb',
        mar: 'mar',
        apr: 'abr',
        may: 'may',
        jun: 'jun',
        jul: 'jul',
        aug: 'ago',
        sep: 'sep',
        oct: 'oct',
        nov: 'nov',
        dec: 'dic'
      }
    },
    select: {
      loading: 'Cargando',
      noMatch: 'No hay datos que coincidan',
      noData: 'Sin datos',
      placeholder: 'Seleccionar'
    },
    cascader: {
      noMatch: 'No hay datos que coincidan',
      loading: 'Cargando',
      placeholder: 'Seleccionar'
    },
    pagination: {
      goto: 'Ir a',
      pagesize: '/página',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'Aceptar',
      cancel: 'Cancelar',
      error: 'Entrada inválida'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Eliminar',
      preview: 'Vista Previa',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sin Datos',
      confirmFilter: 'Confirmar',
      resetFilter: 'Reiniciar',
      clearFilter: 'Despejar',
      sumText: 'Suma'
    },
    tree: {
      emptyText: 'Sin Datos'
    },
    transfer: {
      noMatch: 'No hay datos que coincidan',
      noData: 'Sin datos',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Ingresar palabra clave',
      noCheckedFormat: '{total} artículos',
      hasCheckedFormat: '{checked}/{total} revisados'
    }
  }
};

/***/ })

/******/ });