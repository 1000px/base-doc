// 当前单页应用入口组件

<template>
	<div id="app">
		<k-header v-if="!isIndex"></k-header>
		<router-view/>
	</div>
</template>

<script>
import kHeader from '@/components/header.vue';
export default {
	name: 'app',
	data() {
		return {
			isIndex: false
		};
	},
	watch: {
		$route() {
			// this.$route.path !== '/' ? (this.isIndex = true) : (this.isIndex = false);
		}
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
