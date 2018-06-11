import KcOption from '../select/src/option';

/* istanbul ignore next */
KcOption.install = function(Vue) {
	Vue.component(KcOption.name, KcOption);
};

export default KcOption;
