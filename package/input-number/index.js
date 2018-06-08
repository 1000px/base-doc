import KcInputNumber from './src/input-number';

/* istanbul ignore next */
KcInputNumber.install = function(Vue) {
	Vue.component(KcInputNumber.name, KcInputNumber);
};

export default KcInputNumber;
