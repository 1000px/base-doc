<template>
	<div class="layoutC" :class="wrapClasses">
		<slot></slot>
	</div>
</template>
<script>
	const prefixCls = 'ivu-layout';
	export default {
		name: 'KcFooter',
		computed: {
			wrapClasses () {
				return `${prefixCls}-footer`;
			}
		}
	};
</script>
