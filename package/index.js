import Alert from './alert';
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
import Cascader from './cascader';
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
import Modal from './modal';
import Message from './message/index.js';
import MessageBox from './message-box/index.js';
import Notification from './notification';
import Menu from './menu';
import MenuGroup from './menu-item-group';
import MenuItem from './menu-item';
import Option from './option';
import OptionGroup from './option-group';
import Pagination from './pagination';
import Popover from './popover';
import Progress from './progress';
import Radio from './radio';
import RadioButton from './radio-button';
import RadioGroup from './radio-group';
import Rate from './rate';
import Row from './row';
import Scrollbar from './scrollbar';
import Select from './select';
import Slider from './slider';
import Spin from './spin';
import Switch from './switch';
import Submenu from './submenu';
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
	Card,
	Carousel,
	CarouselItem,
	Cascader,
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
	Modal,
	Menu,
	MenuItem,
	MenuGroup,
	Option,
	OptionGroup,
	Pagination,
	Popover,
	Progress,
	Radio,
	RadioButton,
	RadioGroup,
	Rate,
	Row,
	Scrollbar,
	Select,
	Slider,
	Spin,
	Switch,
	Submenu,
	Tag,
	TimePicker,
	TimeSelect,
	Tooltip,
	Tree
];
const install = function (Vue) {
	if (install.installed) return;
	components.map(component => Vue.component(component.name, component));

	Vue.prototype.$msgbox = MessageBox;
	Vue.prototype.$alert = MessageBox.alert;
	Vue.prototype.$confirm = MessageBox.confirm;
	Vue.prototype.$prompt = MessageBox.prompt;
	Vue.prototype.$notify = Notification;
	Vue.prototype.$message = Message;
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
	Card,
	Carousel,
	CarouselItem,
	Cascader,
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
	Message,
	MessageBox,
	Modal,
	Notification,
	Menu,
	MenuItem,
	MenuGroup,
	Option,
	OptionGroup,
	Pagination,
	Popover,
	Progress,
	Radio,
	RadioButton,
	RadioGroup,
	Rate,
	Row,
	Select,
	Slider,
	Switch,
	Scrollbar,
	Spin,
	Submenu,
	Tag,
	TimePicker,
	TimeSelect,
	Tooltip,
	Tree
};
