<!--
	name: guide/index.vue
	desc: vue-base脚手架快速入门
	author: malixiang
-->
<template>
	<div class="guide">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
export default {
	name: 'guide',
	path: '/guide',
	data () {
		return {
			msg: 'vue-base脚手架快速引导页'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
}
</style>
