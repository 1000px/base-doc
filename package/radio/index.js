import KcRadio from './src/radio';

/* istanbul ignore next */
KcRadio.install = function(Vue) {
	// Vue.component('el-radio', KcRadio);
	Vue.component(KcRadio.name, KcRadio);
};

export default KcRadio;
