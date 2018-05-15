// 当前单页应用入口组件

<template>
	<div id="app">
		<k-header></k-header>
		<div class="frame">
			<k-nav></k-nav>
			<!-- 路由入口 -->
			<router-view/>
		</div>
	</div>
</template>

<script>
import kHeader from '@/components/header.vue';
import kNav from '@/components/nav.vue';
export default {
	name: 'app',
	components: {
		kHeader,
		kNav
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e55;
	margin-top: 60px;
}
</style>
