import Slider from './slider/index.js';

const components = [
	Slider
];

const install = function(Vue, opts = {}) {
	// locale.use(opts.locale);
	// locale.i18n(opts.i18n);

	components.map(component => {
		Vue.component(component.name, component);
	});

	// Vue.use(Loading.directive);

	/* Vue.prototype.$ELEMENT = {
		size: opts.size || '',
		zIndex: opts.zIndex || 2000
	}; */

	/* Vue.prototype.$loading = Loading.service;
	Vue.prototype.$msgbox = MessageBox;
	Vue.prototype.$alert = MessageBox.alert;
	Vue.prototype.$confirm = MessageBox.confirm;
	Vue.prototype.$prompt = MessageBox.prompt;
	Vue.prototype.$notify = Notification;
	Vue.prototype.$message = Message; */
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

module.exports = {
	Slider
};

