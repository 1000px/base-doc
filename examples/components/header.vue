<template>
	<div class="header">
		<div class="header-con">
			<h1><router-link to="/">KFront Base</router-link></h1>
			<ul class="headerNav">
				<li><p><span>1.0 ∨</span></p></li>
				<li>资源</li>
				<li><router-link to="/api">API</router-link></li>
				<li><router-link to="/overview">指南</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.header {
		height: 80px;
		margin-bottom: 40px;

		.header-con{
			@include clearFix;
			position: relative;
			margin:0 auto;
			height: 80px;
			/*width: 1140px;*/
			line-height: 80px;
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
				height: 80px;
				line-height: 80px;
				color: #888;
				cursor: pointer;
				a{
					color: #888;
				}
				span{
					padding: 5px 15px;
					border: 1px solid #eee;
					font-size: 13px;
				}
			}
		}
	}
</style>
