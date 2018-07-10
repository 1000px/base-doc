import KcTableColumn from './src/table-column';
import KcTable from './src/table';

/* istanbul ignore next */
export default function(Vue) {
	Vue.component(KcTable.name, KcTable);
	Vue.component(KcTableColumn.name, KcTableColumn);
};

export { KcTable, KcTableColumn };
