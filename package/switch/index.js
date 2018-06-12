import KcSwitch from './src/component';

/* istanbul ignore next */
KcSwitch.install = function(Vue) {
	Vue.component(KcSwitch.name, KcSwitch);
};

export default KcSwitch;

