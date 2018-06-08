import KcTooltip from './src/main';

/* istanbul ignore next */
KcTooltip.install = function(Vue) {
	Vue.component(KcTooltip.name, KcTooltip);
};

export default KcTooltip;
