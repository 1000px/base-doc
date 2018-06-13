import KcPagination from './src/pagination';

/* istanbul ignore next */
KcPagination.install = function(Vue) {
	Vue.component(KcPagination.name, KcPagination);
};

export default KcPagination;
