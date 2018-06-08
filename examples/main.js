// app入口文件
// 初始化 路由、样式、语言、store、全局配置global-config.json
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from '@/common/ajax/config';
import demoBlock from '@/components/demo-block';
import Lang from '@/lang';
import store from '@/store';
import 'normalize.css';

import KFront from '../package/';
// import locale from './../public/locale/lang/en';

import 'highlight.js/styles/tomorrow.css';
// import '@/assets/styles/common.css';
// import '@/assets/styles/fonts/iconfont.css';

Vue.config.productionTip = false;
Vue.use(Lang);
Vue.use(KFront);
// Vue.use(locale);
Vue.component('demo-block', demoBlock);

axios.get('static/global-config.json').then((res) => {
	Vue.prototype.g_Config = res.data;
	axios.setConfig(Vue.prototype.g_Config);

	/* eslint-disable no-new */
	new Vue({
		el: '#app',
		router,
		store,
		template: '<App/>',
		components: {App}
	});
}).catch((err) => {
	window.alert(err);
});
