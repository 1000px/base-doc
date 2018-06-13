import KcMenu from './src/menu';

/* istanbul ignore next */
KcMenu.install = function(Vue) {
	Vue.component(KcMenu.name, KcMenu);
};

export default KcMenu;
