import Backtop from './src/backtop';

/* istanbul ignore next */
Backtop.install = function(Vue) {
	Vue.component(Backtop.name, Backtop);
};

export default Backtop;
