import KcTable from './src/table';

/* istanbul ignore next */
KcTable.install = function(Vue) {
	Vue.component(KcTable.name, KcTable);
};

export default KcTable;
