<template>
	<div class="kc-badge">
		<slot></slot>
		<transition name="kc-zoom-in-center">
			<sup
				v-show="!hidden && (content || showZero)"
				v-text="isDot ? '' : content"
				class="kc-badge__content"
				:class="[{ 'is-fixed': $slots.default, 'is-dot': isDot }, status ? 'status-'+status : '']">
			</sup>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'KcBadge',

	props: {
		value: {},
		max: Number,
		isDot: Boolean,
		hidden: Boolean,
		status: String,
		showZero: Boolean
	},

	computed: {
		content() {
			const value = this.value;
			const max = this.max ? this.max : 99;

			if (typeof value === 'number' && typeof max === 'number') {
				return max < value ? `${max}+` : value;
			}
			return value;
		}
	}
};
</script>
