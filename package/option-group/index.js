import KcOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
KcOptionGroup.install = function(Vue) {
	Vue.component(KcOptionGroup.name, KcOptionGroup);
};

export default KcOptionGroup;
