import KcForm from './src/form';

/* istanbul ignore next */
KcForm.install = function(Vue) {
	Vue.component(KcForm.name, KcForm);
};

export default KcForm;
