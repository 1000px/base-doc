<template>
	<li class="el-menu-item-group">
		<div class="el-menu-item-group__title" :style="{paddingLeft: levelPadding + 'px'}">
			<template v-if="!$slots.title">{{title}}</template>
			<slot v-else name="title"></slot>
		</div>
		<ul style="padding-left:0;">
			<slot></slot>
		</ul>
	</li>
</template>
<script>
	export default {
		name: 'KcMenuItemGroup',

		componentName: 'KcMenuItemGroup',

		inject: ['rootMenu'],
		props: {
			title: {
				type: String
			}
		},
		data() {
			return {
				paddingLeft: 20
			};
		},
		computed: {
			levelPadding() {
				let padding = 0;
				let parent = this.$parent;
				if (this.rootMenu.collapse) return 20;
				while (parent && parent.$options.componentName !== 'KcMenu') {
					if (parent.$options.componentName === 'KcSubmenu') {
						padding += 20;
					}
					parent = parent.$parent;
				}
				return padding;
			}
		}
	};
</script>

