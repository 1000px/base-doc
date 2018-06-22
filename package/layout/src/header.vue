<template>
	<div class="layoutC" :class="wrapClasses">
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
<style lang="scss">

</style>
