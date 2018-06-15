import KcSteps from './src/steps';

/* istanbul ignore next */
KcSteps.install = function(Vue) {
	Vue.component(KcSteps.name, KcSteps);
};

export default KcSteps;
