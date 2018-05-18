<template>
	<div class="header">
		<div class="header-con">
			<h1>base-vue</h1>
			<ul class="headerNav">
				<li><span>1.0</span></li>
				<li>资源</li>
				<li><router-link to = "/docs" >API</router-link></li>
				<li><router-link to = "/"  exact>指南</router-link></li>
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
<style lang="scss" scoped>
	@import "../assets/base.scss";
	.header {
		height: 80px;
		margin-bottom: 40px;
		.header-con{
			@include clearFix;
			height: 80px;
			width: 1140px;
			line-height: 80px;
			position: relative;
			margin:0 auto;
		}
		h1 {
			float: left;
			height: 80px;
			line-height: 80px;
			color: #4ab4ffe8;
			font-size: 25px;
		}
		ul {
			float: right;
			li {
				float: right;
				padding: 0 22px;
				color: #888;
				height: 80px;
				line-height: 80px;
				a{
					color: #888;
				}
				span{
					font-size: 13px;
				}
			}
		}
	}
</style>
