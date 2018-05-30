import Vue from 'vue';
import Router from 'vue-router';
import Guide from '@/view/guide';
import Docs from '@/view/docs';
import Alert from '@/docs/zh-CN/alert.md';

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
