import KcMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
KcMenuItem.install = function(Vue) {
	Vue.component(KcMenuItem.name, KcMenuItem);
};

export default KcMenuItem;
