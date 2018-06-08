<template>
	<div :class="wrapClasses">
		<slot></slot>
	</div>
</template>
<script>
	const prefixCls = 'ivu-layout';
	export default {
		name: 'KcContent',
		computed: {
			wrapClasses () {
				return `${prefixCls}-content`;
			}
		}
	};
</script>
