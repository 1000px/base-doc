// 当前单页应用入口组件

<template>
	<div id="app">
		<k-header></k-header>
		<router-view />
	</div>
</template>

<script>
import kHeader from '@/components/header.vue';
export default {
	name: 'app',
	data() {
		return {
		};
	},
	components: {
		kHeader
	}
};
</script>

<style lang="scss">
#app {
	font-family: $typography;
}
</style>
