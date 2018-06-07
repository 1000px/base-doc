import KcRadio from './src/radio';

/* istanbul ignore next */
KcRadio.install = function(Vue) {
	Vue.component('el-radio', KcRadio);
};

export default KcRadio;
