import KcSlider from './src/main';

/* istanbul ignore next */
KcSlider.install = function(Vue) {
	Vue.component(KcSlider.name, KcSlider);
};

export default KcSlider;
