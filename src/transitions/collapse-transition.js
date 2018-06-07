import {addClass, removeClass} from '_src/utils/dom';

class Transition {
	beforeEnter(el) {
		console.log(11111);
		addClass(el, 'collapse-transition');
		if (!el.dataset) el.dataset = {};

		el.dataset.oldPaddingTop = el.style.paddingTop;
		el.dataset.oldPaddingBottom = el.style.paddingBottom;

		el.style.height = '0';
		el.style.paddingTop = 0;
		el.style.paddingBottom = 0;
	}

	enter(el) {
		console.log(22222);
		el.dataset.oldOverflow = el.style.overflow;
		if (el.scrollHeight !== 0) {
			el.style.height = el.scrollHeight + 'px';
			el.style.paddingTop = el.dataset.oldPaddingTop;
			el.style.paddingBottom = el.dataset.oldPaddingBottom;
		} else {
			el.style.height = '';
			el.style.paddingTop = el.dataset.oldPaddingTop;
			el.style.paddingBottom = el.dataset.oldPaddingBottom;
		}

		el.style.overflow = 'hidden';
	}

	afterEnter(el) {
		console.log(33333);
		// for safari: remove class then reset height is necessary
		removeClass(el, 'collapse-transition');
		el.style.height = '';
		el.style.overflow = el.dataset.oldOverflow;
	}

	beforeLeave(el) {
		console.log(44444);
		if (!el.dataset) el.dataset = {};
		el.dataset.oldPaddingTop = el.style.paddingTop;
		el.dataset.oldPaddingBottom = el.style.paddingBottom;
		el.dataset.oldOverflow = el.style.overflow;

		el.style.height = el.scrollHeight + 'px';
		el.style.overflow = 'hidden';
	}

	leave(el) {
		console.log(55555);
		if (el.scrollHeight !== 0) {
			// for safari: add class after set height, or it will jump to zero height suddenly, weired
			addClass(el, 'collapse-transition');
			el.style.height = 0;
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
		}
	}

	afterLeave(el) {
		console.log(66666);
		removeClass(el, 'collapse-transition');
		el.style.height = '';
		el.style.overflow = el.dataset.oldOverflow;
		el.style.paddingTop = el.dataset.oldPaddingTop;
		el.style.paddingBottom = el.dataset.oldPaddingBottom;
	}
}

export default {
	name: 'KcCollapseTransition',
	functional: true,
	render(h, {children}) {
		const data = {
			on: new Transition()
		};

		return h('transition', data, children);
	}
};
