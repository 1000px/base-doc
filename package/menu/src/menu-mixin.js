export default {
	inject: ['rootMenu'],
	computed: {
		indexPath() {
			const path = [this.index];
			let parent = this.$parent;
			while (parent.$options.componentName !== 'KcMenu') {
				if (parent.index) {
					path.unshift(parent.index);
				}
				parent = parent.$parent;
			}
			return path;
		},
		parentMenu() {
			let parent = this.$parent;
			while (
        parent &&
        ['KcMenu', 'KcSubmenu'].indexOf(parent.$options.componentName) === -1
      ) {
				parent = parent.$parent;
			}
			return parent;
		},
		paddingStyle() {
			if (this.rootMenu.mode !== 'vertical') return {};

			let padding = 20;
			let parent = this.$parent;

			if (this.rootMenu.collapse) {
				padding = 20;
			} else {
				while (parent && parent.$options.componentName !== 'KcMenu') {
					if (parent.$options.componentName === 'KcSubmenu') {
						padding += 20;
					}
					parent = parent.$parent;
				}
			}
			return {paddingLeft: padding + 'px'};
		}
	}
};
