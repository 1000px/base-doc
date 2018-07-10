<template>
	<li
		class="kc-dropdown-menu__item"
		:class="{
			'is-disabled': disabled,
			'kc-dropdown-menu__item--divided': divided
		}"
		@click="handleClick"
		:aria-disabled="disabled"
		:tabindex="disabled ? null : -1"
	>
		<slot></slot>
	</li>
</template>
<script>
	import Emitter from '_src/mixins/emitter';

	export default {
		name: 'KcDropdownItem',

		mixins: [Emitter],

		props: {
			command: {},
			disabled: Boolean,
			divided: Boolean
		},

		methods: {
			handleClick(e) {
				this.dispatch('KcDropdown', 'menu-item-click', [this.command, this]);
			}
		}
	};
</script>
