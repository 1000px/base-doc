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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Effacer'
    },
    datepicker: {
      now: 'Maintenant',
      today: 'Auj.',
      cancel: 'Annuler',
      clear: 'Effacer',
      confirm: 'OK',
      selectDate: 'Choisir date',
      selectTime: 'Choisir horaire',
      startDate: 'Date début',
      startTime: 'Horaire début',
      endDate: 'Date fin',
      endTime: 'Horaire fin',
      prevYear: 'Année précédente',
      nextYear: 'Année suivante',
      prevMonth: 'Mois précédent',
      nextMonth: 'Mois suivant',
      year: '', // In french, like in english, we don't say "Année" after the year number.
      month1: 'Janvier',
      month2: 'Février',
      month3: 'Mars',
      month4: 'Avril',
      month5: 'Mai',
      month6: 'Juin',
      month7: 'Juillet',
      month8: 'Août',
      month9: 'Septembre',
      month10: 'Octobre',
      month11: 'Novembre',
      month12: 'Décembre',
      // week: 'Semaine',
      weeks: {
        sun: 'Dim',
        mon: 'Lun',
        tue: 'Mar',
        wed: 'Mer',
        thu: 'Jeu',
        fri: 'Ven',
        sat: 'Sam'
      },
      months: {
        jan: 'Jan',
        feb: 'Fév',
        mar: 'Mar',
        apr: 'Avr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aoû',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Déc'
      }
    },
    select: {
      loading: 'Chargement',
      noMatch: 'Aucune correspondance',
      noData: 'Aucune donnée',
      placeholder: 'Choisir'
    },
    cascader: {
      noMatch: 'Aucune correspondance',
      loading: 'Chargement',
      placeholder: 'Choisir'
    },
    pagination: {
      goto: 'Aller à',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'Confirmer',
      cancel: 'Annuler',
      error: 'Erreur'
    },
    upload: {
      deleteTip: 'Cliquer sur supprimer pour retirer le fichier',
      delete: 'Supprimer',
      preview: 'Aperçu',
      continue: 'Continuer'
    },
    table: {
      emptyText: 'Aucune donnée',
      confirmFilter: 'Confirmer',
      resetFilter: 'Réinitialiser',
      clearFilter: 'Tous',
      sumText: 'Somme'
    },
    tree: {
      emptyText: 'Aucune donnée'
    },
    transfer: {
      noMatch: 'Aucune correspondance',
      noData: 'Aucune donnée',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Entrer un mot clef',
      noCheckedFormat: '{total} elements',
      hasCheckedFormat: '{checked}/{total} coché(s)'
    }
  }
};

/***/ })

/******/ });