import Vue from 'vue';
import Router from 'vue-router';
import Nav from '../nav-config.json';

Vue.use(Router);

let routes = [];
Nav.forEach((routerItem) => {
	routes.push(routerItem);
	if(routerItem['items'] && routerItem['items'].length) {
		routes[routes.length - 1].children = routerItem['items'];
	}
});

let addComponent = (routers) => {
	routers.forEach((route) => {
		route.component = r => require.ensure([], () => {
			r(require(`../view${route.path}`));
		});
		if(route.children && route.children.length) {
			route.children.forEach((child) => {
				child.component = r => require.ensure([], () => {
					r(require(`../docs/zh-CN/${child.name}.md`));
				});
			});
		}
	});
};
addComponent(routes);

export default new Router({
	routes: routes,
	linkActiveClass: 'active'
});
