<template>
	<div class="left-nav">
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
<style lang="scss" scoped>
	@import "../assets/base.scss";
.left-nav {
    float: left;
    width: 200px;
	ul{
		padding-right: 30px;
		li{
			height: 40px;
			line-height: 40px;
		}
	}
}
</style>
