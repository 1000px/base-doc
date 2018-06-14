import KcCascader from './src/main';

/* istanbul ignore next */
KcCascader.install = function(Vue) {
	Vue.component(KcCascader.name, KcCascader);
};

export default KcCascader;
