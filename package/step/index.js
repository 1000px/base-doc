import KcStep from '../steps/src/step';

/* istanbul ignore next */
KcStep.install = function(Vue) {
	Vue.component(KcStep.name, KcStep);
};

export default KcStep;
