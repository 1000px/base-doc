import KcTimeSelect from './../date-picker/src/picker/time-select';

/* istanbul ignore next */ 
KcTimeSelect.install = function(Vue) {
	Vue.component(KcTimeSelect.name, KcTimeSelect);
};

export default KcTimeSelect;
