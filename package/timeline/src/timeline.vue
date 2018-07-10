<template>
	<ul :class="classes">
		<slot></slot>
	</ul>
</template>
<script>
	const prefixCls = 'kc-timeline';

	export default {
		name: 'KcTimeline',
		props: {
			pending: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			classes () {
				return [
					`${prefixCls}`,
					{
						[`${prefixCls}-pending`]: this.pending
					}
				];
			}
		}
	};
</script>
