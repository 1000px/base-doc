import KcColorPicker from './src/main';

/* istanbul ignore next */
KcColorPicker.install = function(Vue) {
	Vue.component(KcColorPicker.name, KcColorPicker);
};

export default KcColorPicker;
