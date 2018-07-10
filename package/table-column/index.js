import KcTableColumn from '../table/src/table-column';

/* istanbul ignore next */
KcTableColumn.install = function(Vue) {
	Vue.component(KcTableColumn.name, KcTableColumn);
};

export default KcTableColumn;
