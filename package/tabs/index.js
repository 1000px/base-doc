import KCTabs from './src/tabs';

/* istanbul ignore next */
KCTabs.install = function(Vue) {
	Vue.component(KCTabs.name, KCTabs);
};

export default KCTabs;
