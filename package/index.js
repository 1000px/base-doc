import Alert from './alert';
import Autocomplete from './autocomplete';
import Avatar from './avatar/index.js';
import Badge from './badge';
import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';
import Button from './button';
import ButtonGroup from './button-group';
import Card from './card';
import Cascader from './cascader';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import CheckboxButton from './checkbox-button';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import CollapseTransition from '_src/transitions/collapse-transition';
import ColorPicker from './color-picker';
import DatePicker from './date-picker';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMemu from './dropdown-menu';
import Form from './form';
import FormItem from './form-item';
import Icon from './icon';
import Input from './input';
import InputNumber from './input-number';
import Layout from './layout';
import Menu from './menu';
import MenuGroup from './menu-item-group';
import MenuItem from './menu-item';
import Pagination from './pagination';
import Radio from './radio';
import Rate from './rate';
import RadioButton from './radio-button';
import RadioGroup from './radio-group';
import Row from './row';
import Select from './select';
import Slider from './slider';
import Switch from './switch';
import Scrollbar from './scrollbar';
import Submenu from './submenu';
import Option from './option';
import OptionGroup from './option-group';
import Tag from './tag';
import TimePicker from './time-picker';
import TimeSelect from './time-select';
import Tooltip from './tooltip';
import Tree from './tree';

const components = [
	Alert,
	Autocomplete,
	Avatar,
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	Cascader,
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
	ColorPicker,
	DatePicker,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Form,
	FormItem,
	Icon,
	Input,
	InputNumber,
	Layout,
	Menu,
	MenuItem,
	MenuGroup,
	Pagination,
	Radio,
	RadioButton,
	RadioGroup,
	Rate,
	Row,
	Select,
	Slider,
	Switch,
	Scrollbar,
	Submenu,
	Option,
	OptionGroup,
	Tag,
	TimePicker,
	TimeSelect,
	Tooltip,
	Tree
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
	Alert,
	Autocomplete,
	Avatar,
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	Cascader,
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
	ColorPicker,
	DatePicker,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Form,
	FormItem,
	Icon,
	Input,
	InputNumber,
	Layout,
	Menu,
	MenuItem,
	MenuGroup,
	Pagination,
	Radio,
	RadioButton,
	RadioGroup,
	Rate,
	Row,
	Select,
	Slider,
	Switch,
	Scrollbar,
	Submenu,
	Option,
	OptionGroup,
	Tag,
	TimePicker,
	TimeSelect,
	Tooltip,
	Tree
};
