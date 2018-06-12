import KcDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
KcDropdownMenu.install = function(Vue) {
	Vue.component(KcDropdownMenu.name, KcDropdownMenu);
};

export default KcDropdownMenu;
