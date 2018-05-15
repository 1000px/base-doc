<template>
	<div class="header">
		<h1>头部导航</h1>
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
