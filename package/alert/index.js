/**
 * @author malixiang
 * @time 2018.05.30
 */
import Alert from './src/alert.vue';

Alert.install = function (Vue) {
	Vue.component(Alert.name, Alert);
};

export default Alert;