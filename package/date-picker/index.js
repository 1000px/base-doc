import KcDatePicker from './src/picker/date-picker';

/* istanbul ignore next */
KcDatePicker.install = function install(Vue) {
	Vue.component(KcDatePicker.name, KcDatePicker);
};

export default KcDatePicker;
