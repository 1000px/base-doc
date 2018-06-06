import Avatar from './avatar/index.js';
import Badge from './badge';
import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';
import Button from './button';
import ButtonGroup from './button-group';
import Card from './card';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import CheckboxButton from './checkbox-button';
import Col from './col';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMemu from './dropdown-menu';
import Icon from './icon';
import Input from './input';
import Row from './row';

const components = [
	Avatar,
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	Card,
	Checkbox,
	CheckboxButton,
	CheckboxGroup,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Icon,
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
	Avatar,
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	Card,
	Checkbox,
	CheckboxButton,
	CheckboxGroup,
	Col,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Icon,
	Input,
	Row
};
