import KcRate from './src/main';

/* istanbul ignore next */
KcRate.install = function(Vue) {
	Vue.component(KcRate.name, KcRate);
};

export default KcRate;
