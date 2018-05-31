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

import 'highlight.js/styles/googlecode.css';

Vue.config.productionTip = false;
Vue.use(Lang);
Vue.component('demo-block', demoBlock);
axios.get('static/global-config.json').then((res) => {
	Vue.prototype.g_Config = res.data;
	axios.setConfig(Vue.prototype.g_Config);
	console.log(1000, router);
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
