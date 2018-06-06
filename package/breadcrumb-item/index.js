import KcBreadcrumbItem from '../breadcrumb/src/breadcrumb-item';

/* istanbul ignore next */
KcBreadcrumbItem.install = function(Vue) {
  Vue.component(KcBreadcrumbItem.name, KcBreadcrumbItem);
};

export default KcBreadcrumbItem;
