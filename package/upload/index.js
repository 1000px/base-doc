import KcUpload from './src';

/* istanbul ignore next */
KcUpload.install = function(Vue) {
	Vue.component(KcUpload.name, KcUpload);
};

export default KcUpload;
