import Vue from 'vue';
import Router from 'vue-router';
import Guide from '@/view/guide';
import Docs from '@/view/docs';
import Alert from '@/docs/zh-CN/alert.md';
import navConf from '../nav.config.json';
let routes = [];

Object.keys(navConf).forEach(header => {
	routes = routes.concat(navConf[header]);
});
console.log(routes);

Vue.use(Router);

export default new Router({
	routes: [{
		path: '',
		name: 'guide',
		component: Guide,
		children: [
			{
				path: 'alert',
				name: 'alert',
				component: Alert
			}
		]
	}, {
		path: '/docs',
		name: 'docs',
		component: Docs
	}],
	linkActiveClass: 'active'
});
