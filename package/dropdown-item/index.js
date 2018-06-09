import KcDropdownItem from '../dropdown/src/dropdown-item';

/* istanbul ignore next */
KcDropdownItem.install = function(Vue) {
	Vue.component(KcDropdownItem.name, KcDropdownItem);
};

export default KcDropdownItem;
