<template>
	<div class="header">
		<div class="header-con">
			<h1><router-link to="/">KFront Base</router-link></h1>
			<ul class="headerNav">
				<!--<li><p><span>1.0 ∨</span></p></li>-->
				<li><a>资源</a></li>
				<li><router-link to="/api">组件 </router-link></li>
				<li><router-link to="/overview">指南</router-link></li>
				<li><router-link to="/" exact>首页</router-link></li>
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
		.header-con{
			@include clearFix;
			margin:0 auto;
			width: 90%;
		}
		h1 {
			float: left;
			height: 80px;
			opacity: 0.91;
			a{
				display: block;
				width: 100%;
				height: 100%;
				font-family: Helvetica-Bold;
				font-size: 20px;
				color: #4468F0;
				letter-spacing: 0.29px;
				line-height: 80px;
			}
		}
		ul {
			float: right;

			li {
				position: relative;
				float: right;
				height: 80px;
				padding: 0 22px;
				cursor: pointer;
				opacity: 0.9;
				// font-family: $typography;
				font-size: 16px;
				color: #273B55;
				letter-spacing: 0;
				a{
					display: block;
					width: 100%;
					height: 100%;
					line-height: 80px;
					color: #273B55;
				}
				.router-link-active{
					opacity: 0.9;
					font-family: $typography;
					font-size: $medium;
					color: #5572F1;
					letter-spacing: 0;
					&::after{
						position: absolute;
						bottom:  0;
						left: calc(50% - 24px);
						width: 48px;
						height: 4px;
						display: inline-block;
						content: "";
						// transform: rotate(-90deg);
						background: #6781F2;
						box-shadow: 1px 0 8px 0 rgba(103,129,242,0.41);
						border-radius: 100px;
					}
				}
				/*span{
					padding: 5px 15px;
					border: 1px solid #eee;
					font-size: 13px;
				}*/
			}
		}
	}

</style>
