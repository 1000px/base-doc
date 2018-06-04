import KButton from './src/button';

/* istanbul ignore next */
KButton.install = function(Vue) {
	Vue.component(KButton.name, KButton);
};

export default KButton;
