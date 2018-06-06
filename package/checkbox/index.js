import KcCheckbox from './src/checkbox';

/* istanbul ignore next */
KcCheckbox.install = function(Vue) {
	Vue.component(KcCheckbox.name, KcCheckbox);
};

export default KcCheckbox;
