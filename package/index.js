import Badge from './badge';
import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';
import Button from './button';
import ButtonGroup from './button-group';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMemu from './dropdown-menu';
import Input from './input';
import Row from './row';

const components = [
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Input,
	Row
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
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Input,
	Row
};
