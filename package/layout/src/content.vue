<template>
	<div class="layoutCon" :class="wrapClasses">
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
<style lang="scss">
.layoutCon{
	background: #0f8de9;
	min-height: 120px;
	line-height: 120px;
}
</style>
