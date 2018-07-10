<template>
	<div class="kc-card" :class="[shadow ? 'is-' + shadow + '-shadow' : 'is-never-shadow', bordered ? '' : 'border-less', type==='inner' ? 'type-inner' : '']">
		<div class="kc-card__header" v-if="$slots.header || header">
			<slot name="header">{{ header }}</slot>
		</div>
		<div class="kc-card__body" :style="bodyStyle">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'KcCard',
		props: {
			header: {},
			bodyStyle: {},
			shadow: {
				type: String
			},
			bordered: {
				type: Boolean,
				default: true
			},
			type: String
		}
	};
</script>
