import Vue from 'vue';
import Router from 'vue-router';
import Guide from '@/view/guide';
import Docs from '@/view/docs';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '',
		name: 'guide',
		component: Guide
	}, {
		path: '/docs',
		name: 'docs',
		component: Docs
	}]
});
