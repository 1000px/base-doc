import KcButton from './src/button';

/* istanbul ignore next */
KcButton.install = function(Vue) {
	Vue.component(KcButton.name, KcButton);
};

export default KcButton;
