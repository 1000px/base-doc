import Badge from './badge';
import Button from './button';
import ButtonGroup from './button-group';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMemu from './dropdown-menu';
import Input from './input';
import Row from './row';

const components = [
	Badge,
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
	Button,
	ButtonGroup,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Input,
	Row
};
