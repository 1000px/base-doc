import Autocomplete from './autocomplete';
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
import CollapseTransition from '_src/transitions/collapse-transition';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMemu from './dropdown-menu';
import Form from './form';
import FormItem from './form-item';
import Icon from './icon';
import Input from './input';
import InputNumber from './input-number';
import Layout from './layout';
import Radio from './radio';
import RadioButton from './radio-button';
import RadioGroup from './radio-group';
import Row from './row';
import Select from './select';
import Switch from './switch';
import Scrollbar from './scrollbar';
import Option from './option';
import OptionGroup from './option-group';
import Tag from './tag';
import Tooltip from './tooltip';

const components = [
	Autocomplete,
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
	CollapseTransition,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Form,
	FormItem,
	Icon,
	Input,
	InputNumber,
	Layout,
	Radio,
	RadioButton,
	RadioGroup,
	Row,
	Select,
	Switch,
	Scrollbar,
	Option,
	OptionGroup,
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
	Autocomplete,
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
	CollapseTransition,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Form,
	FormItem,
	Icon,
	Input,
	InputNumber,
	Layout,
	Radio,
	RadioButton,
	RadioGroup,
	Row,
	Select,
	Switch,
	Scrollbar,
	Option,
	OptionGroup,
	Tag,
	Tooltip
};
