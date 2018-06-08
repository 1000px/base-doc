import KcDropdown from './src/dropdown';

/* istanbul ignore next */
KcDropdown.install = function(Vue) {
	Vue.component(KcDropdown.name, KcDropdown);
};

export default KcDropdown;
