<template>
	<ul class="kc-select-group__wrap" v-show="visible">
		<li class="kc-select-group__title">{{ label }}</li>
		<li>
			<ul class="kc-select-group">
				<slot></slot>
			</ul>
		</li>
	</ul>
</template>

<script type="text/babel">
	import Emitter from '_src/mixins/emitter';

	export default {
		mixins: [Emitter],

		name: 'KcOptionGroup',

		componentName: 'KcOptionGroup',

		props: {
			label: String,
			disabled: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
				visible: true
			};
		},

		watch: {
			disabled(val) {
				this.broadcast('KcOption', 'handleGroupDisabled', val);
			}
		},

		methods: {
			queryChange() {
				this.visible = this.$children &&
					Array.isArray(this.$children) &&
					this.$children.some(option => option.visible === true);
			}
		},

		created() {
			this.$on('queryChange', this.queryChange);
		},

		mounted() {
			if (this.disabled) {
				this.broadcast('KcOption', 'handleGroupDisabled', this.disabled);
			}
		}
	};
</script>
