import KcProgress from './src/progress';

/* istanbul ignore next */
KcProgress.install = function(Vue) {
	Vue.component(KcProgress.name, KcProgress);
};

export default KcProgress;
