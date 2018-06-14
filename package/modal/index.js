import KcModal from './src/component';

/* istanbul ignore next */
KcModal.install = function(Vue) {
	Vue.component(KcModal.name, KcModal);
};

export default KcModal;
