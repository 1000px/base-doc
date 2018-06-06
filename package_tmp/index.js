import Button from './button/index.js';
import Input from './input/index.js';

const components = [
	Button,
	Input
];
const install = function(Vue) {
	if (install.installed) return;
	components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	Button,
	Input
};
