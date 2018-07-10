import Vue from 'vue';
import KcSpin from './spin.vue';

KcSpin.newInstance = properties => {
	const _props = properties || {};

	const Instance = new Vue({
		data: Object.assign({}, _props, {}),
		render (h) {
			let vnode = '';
			if (this.render) {
				vnode = h(KcSpin, {
					props: {
						fix: true,
						fullscreen: true
					}
				}, [this.render(h)]);
			} else {
				vnode = h(KcSpin, {
					props: {
						size: 'large',
						fix: true,
						fullscreen: true
					}
				});
			}
			return h('div', {
				'class': 'kc-spin-fullscreen kc-spin-fullscreen-wrapper'
			}, [vnode]);
		}
	});

	const component = Instance.$mount();
	document.body.appendChild(component.$el);
	const Spin = Instance.$children[0];

	return {
		show () {
			Spin.visible = true;
		},
		remove (cb) {
			Spin.visible = false;
			setTimeout(function () {
				Spin.$parent.$destroy();
				if (document.getElementsByClassName('kc-spin-fullscreen')[0] !== undefined) {
					document.body.removeChild(document.getElementsByClassName('kc-spin-fullscreen')[0]);
				}
				cb();
			}, 500);
		},
		component: KcSpin
	};
};

export default KcSpin;
