<template>
	<div class="header">
		<h1>base-vue</h1>
		<div class="edition">

		</div>
		<ul class="headerNav">
			<li>1.0</li>
			<li>资源</li>
			<li><router-link to = "/api-file" >API</router-link></li>
			<li><router-link to = "/guide" >指南</router-link></li>
		</ul>
	</div>
	</div>
</template>

<script>
export default {
	name: 'kHeader',
	data () {
		return {
			msg: '公共头部，一级导航写在这里'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
	color: red;
}
</style>
