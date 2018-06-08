import Avatar from './avatar/index.js';
import Badge from './badge';
import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';
import Button from './button';
import ButtonGroup from './button-group';
import Card from './card';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import CheckboxButton from './checkbox-button';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMemu from './dropdown-menu';
import Icon from './icon';
import Input from './input';
import InputNumber from './input-number';
import Radio from './radio';
import RadioButton from './radio-button';
import RadioGroup from './radio-group';
import Row from './row';
import Scrollbar from './scrollbar';
import Tag from './tag';
import Tooltip from './tooltip';

const components = [
	Avatar,
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	Card,
	Carousel,
	CarouselItem,
	Checkbox,
	CheckboxButton,
	CheckboxGroup,
	Col,
	Collapse,
	CollapseItem,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Icon,
	Input,
	Scrollbar,
	InputNumber,
	Radio,
	RadioButton,
	RadioGroup,
	Row,
	Tag,
	Tooltip
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
	Carousel,
	CarouselItem,
	Checkbox,
	CheckboxButton,
	CheckboxGroup,
	Col,
	Collapse,
	CollapseItem,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Icon,
	Input,
	Scrollbar,
	InputNumber,
	Radio,
	RadioButton,
	RadioGroup,
	Row,
	Tag,
	Tooltip
};
