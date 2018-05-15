<!--
	name: docs/index.vue
	desc: vue-base详细文档
	author: malixiang
-->
<template>
	<div class="docs">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
export default {
	name: 'docs',
	path: '/docs',
	data () {
		return {
			msg: 'vue-base详细文档'
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
