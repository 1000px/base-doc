import KcTimePicker from './../date-picker/src/picker/time-picker';

/* istanbul ignore next */
KcTimePicker.install = function(Vue) {
	Vue.component(KcTimePicker.name, KcTimePicker);
};

export default KcTimePicker;
