import KcDialog from './src/component';

/* istanbul ignore next */
KcDialog.install = function(Vue) {
	Vue.component(KcDialog.name, KcDialog);
};

export default KcDialog;
