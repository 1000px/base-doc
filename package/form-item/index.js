import KcFormItem from '../form/src/form-item';

/* istanbul ignore next */
KcFormItem.install = function(Vue) {
	Vue.component(KcFormItem.name, KcFormItem);
};

export default KcFormItem;
