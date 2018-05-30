// 当前单页应用入口组件

<template>
	<div id="app">
		<k-header></k-header>
		<router-view/>
	</div>
</template>

<script>
import kHeader from '@/components/header.vue';
import markdownContainer from 'markdown-it-container';
export default {
	name: 'app',
	mounted() {
		console.dir(markdownContainer);
	},
	components: {
		kHeader
	}
};
</script>

<style lang="scss">
#app {
	.active {
		color: #409eff;
	}
}
</style>