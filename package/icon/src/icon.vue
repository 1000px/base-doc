<template>
	<i :class="'kc-icon-' + name"></i>
</template>

<script>
	export default {
		name: 'KcIcon',
		props: {
			name: String
		}
	};
</script>
