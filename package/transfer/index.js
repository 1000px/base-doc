import KcTransfer from './src/main';

/* istanbul ignore next */
KcTransfer.install = function(Vue) {
	Vue.component(KcTransfer.name, KcTransfer);
};

export default KcTransfer;
