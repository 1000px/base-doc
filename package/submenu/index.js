import KcSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
KcSubmenu.install = function(Vue) {
	Vue.component(KcSubmenu.name, KcSubmenu);
};

export default KcSubmenu;
