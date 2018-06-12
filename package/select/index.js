import KcSelect from './src/select';

/* istanbul ignore next */
KcSelect.install = function(Vue) {
	Vue.component(KcSelect.name, KcSelect);
};

export default KcSelect;
