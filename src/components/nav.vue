<template>
	<div class="header">
		<ul>
            <li><a href="#/docs">左侧列表1</a></li>
            <li><a href="">左侧列表2</a></li>
            <li><a href="">左侧列表3</a></li>
            <li><a href="">左侧列表4</a></li>
        </ul>
	</div>
</template>

<script>
export default {
	name: 'kNav',
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
.header {
    float: left;
    width: 200px;
}
</style>
