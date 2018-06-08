<template>
	<div :class="wrapClasses">
		<slot></slot>
	</div>
</template>
<script>
	const prefixCls = 'ivu-layout';
	export default {
		name: 'KcHeader',
		computed: {
			wrapClasses () {
				return `${prefixCls}-header`;
			}
		}
	};
</script>
