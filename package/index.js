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
import Content from './content';
import DatePicker from './date-picker';
import Dialog from './dialog';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';
import DropdownMemu from './dropdown-menu';
import Footer from './footer';
import DropdownMultiple from './dropdown-multiple';
import Form from './form';
import FormItem from './form-item';
import Header from './header';
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
import Sider from './sider';
import Spin from './spin';
import Step from './step';
import Steps from './steps';
import Switch from './switch';
import Submenu from './submenu';
import Tabs from './tabs';
import Table from './table';
import TableColumn from './table-column';
import TabPane from './tab-pane';
import Tag from './tag';
import TimePicker from './time-picker';
import TimeSelect from './time-select';
import Tooltip from './tooltip';
import Transfer from './transfer';
import Tree from './tree';
import Upload from './upload';

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
	Content,
	DatePicker,
	Dialog,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Footer,
	DropdownMultiple,
	Form,
	FormItem,
	Header,
	Icon,
	Input,
	InputNumber,
	Layout,
	Sider,
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
	Step,
	Steps,
	Switch,
	Submenu,
	Table,
	TableColumn,
	Tabs,
	TabPane,
	Tag,
	TimePicker,
	TimeSelect,
	Tooltip,
	Transfer,
	Tree,
	Upload
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
	Vue.prototype.$Spin = Spin;
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
	Content,
	DatePicker,
	Dialog,
	Dropdown,
	DropdownItem,
	DropdownMemu,
	Footer,
	DropdownMultiple,
	Form,
	Header,
	FormItem,
	Icon,
	Input,
	InputNumber,
	Layout,
	Sider,
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
	Step,
	Steps,
	Switch,
	Scrollbar,
	Spin,
	Submenu,
	Table,
	TableColumn,
	Tabs,
	TabPane,
	Tag,
	TimePicker,
	TimeSelect,
	Tooltip,
	Transfer,
	Tree,
	Upload
};
