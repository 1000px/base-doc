import Vue from 'vue';
import Router from 'vue-router';
import navApi from '../nav-api.json';
import navOverview from '../nav-overview.json';
import Overview from '@/view/overview';
import Api from '@/view/api';

Vue.use(Router);

let apiRoutes = [];
let overviewRoutes = [];

Object.keys(navApi).forEach(header => {
	apiRoutes = apiRoutes.concat(navApi[header]);
});

Object.keys(navOverview).forEach(header => {
	overviewRoutes = overviewRoutes.concat(navOverview[header]);
});

let addComponent = (router) => {
	router.forEach((route) => {
		if(route.items) {
			addComponent(route.items);
			routes = routes.concat(route.items);
		} else {
			if(route.type === 'pages') {
				route.component = r => require.ensure([], () => {
					r(require(`../view/${route.name}.vue`));
				});
				return;
			}
			route.component = r => require.ensure([], () => {
				console.log(1000, r);
				r(require(`../docs/zh-CN/${route.name}.md`));
			});
		}
	});
};
addComponent(routes);

let moduleRoutes = [
	{
		path: '',
		name: 'default',
		desc: '',
		component: Overview
	}, {
		path: '/overview',
		name: 'overview',
		desc: 'gailan',
		component: Overview
	}, {
		path: '/api',
		name: 'api',
		desc: 'guide and api',
		component: Api
	}
];

routes = routes.concat(moduleRoutes);

export default new Router({
	routes: routes
});
