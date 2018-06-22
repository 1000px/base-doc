<template>
	<div class="dropdown-menus">
		<span class="el-dropdown-link">
			多级下拉菜单<i class="el-icon-arrow-down el-icon-right"></i>
		</span>
		{{this.$slots.dropdownMultiple}}
	</div>
</template>
<script>

	export default {
		name: 'KcDropdownMultiple',
		props: {
			divided: Boolean
		},
		data () {
			return {
				isCollapse: true
			}
		},
		methods: {
			handleClick(e) {
				// this.dispatch('KcDropdown', 'menu-item-click', [this.command, this]);
			}
		}
	};
</script>
<style lang="scss" scoped>
	.dropdown-menus {
		.el-menu--collapse {
			box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.18);
			padding-left: 0 !important;
			li {
				list-style: none !important;
			}
		}
	}
</style>