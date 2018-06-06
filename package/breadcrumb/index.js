import KcBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
KcBreadcrumb.install = function(Vue) {
  Vue.component(KcBreadcrumb.name, KcBreadcrumb);
};

export default KcBreadcrumb;
