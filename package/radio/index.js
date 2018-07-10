import KcRadio from './src/radio';

/* istanbul ignore next */
KcRadio.install = function(Vue) {
	// Vue.component('kc-radio', KcRadio);
	Vue.component(KcRadio.name, KcRadio);
};

export default KcRadio;
