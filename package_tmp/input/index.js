import KcInput from './src/input';

/* istanbul ignore next */
KcInput.install = function(Vue) {
	Vue.component(KcInput.name, KcInput);
};

export default KcInput;
