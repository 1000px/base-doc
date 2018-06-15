import KcTree from './src/tree.vue';

/* istanbul ignore next */
KcTree.install = function(Vue) {
	Vue.component(KcTree.name, KcTree);
};

export default KcTree;
