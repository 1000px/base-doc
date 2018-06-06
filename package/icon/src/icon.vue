<template>
	<i :class="'el-icon-' + name"></i>
</template>

<script>
	export default {
		name: 'KcIcon',
		props: {
			name: String
		}
	};
</script>
