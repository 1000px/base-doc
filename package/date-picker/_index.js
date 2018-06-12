import KcDatePicker from './src/picker/date-picker';
import KcTimePicker from './src/picker/time-picker';
import KcTimeSelect from './src/picker/time-select';

/* istanbul ignore next */
export default function install(Vue) {
	Vue.component(KcDatePicker.name, KcDatePicker);
	Vue.component(KcTimePicker.name, KcTimePicker);
	Vue.component(KcTimeSelect.name, KcTimeSelect);
};

export { KcDatePicker, KcTimePicker, KcTimeSelect };
