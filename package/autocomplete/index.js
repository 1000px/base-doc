import KcAutocomplete from './src/autocomplete';

/* istanbul ignore next */
KcAutocomplete.install = function(Vue) {
	Vue.component(KcAutocomplete.name, KcAutocomplete);
};

export default KcAutocomplete;
