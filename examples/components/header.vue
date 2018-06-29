<template>
	<div class="header" :class="{indexStyle: indexStyle, moduleStyle: moduleStyle}">
		<div class="header-con">
			<h1><router-link to="/">KFront Base UI</router-link></h1>
			<ul class="headerNav">
				<!--<li><p><span>1.0 ∨</span></p></li>-->
				<li><router-link to="/resource">资源 </router-link></li>
				<li><router-link to="/api">API </router-link></li>
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
			indexStyle: true,
			moduleStyle: false
		};
	},
	watch: {
		'$route' (to, from) {
			// console.log(to.path.split('/')[1]);
			let aaq = this.$route.path.split('/')[1];

			if (aaq == '') {
				this.indexStyle = true;
				this.moduleStyle = false;
				// this.$refs.qqq.style.background == 'red';
			}else {
				this.indexStyle = false;
				this.moduleStyle = true;
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
	.header {
		height: 72px;
		.header-con{
			@include clearFix;

			/*width: 90%;*/
		}
		h1 {
			float: left;
			/*height: 80px;*/
			height: 100%;
			opacity: 0.91;
			a{
				display: block;
				width: 100%;
				height: 100%;
				font-family: $typography;
				font-size: 20px;
				color: #4468F0;
				letter-spacing: 0.29px;
				line-height: 72px;
			}
		}
		ul {
			float: right;
			li {
				position: relative;
				float: right;
				height: 100%;
				/*height: 80px;*/
				/*padding: 0 22px;*/
				cursor: pointer;
				opacity: 0.9;
				// font-family: $typography;
				font-size: 16px;
				color: #273B55;
				letter-spacing: 0;
				a{
					display: block;
					padding:0 38px;
					font-size: 16px;
					line-height: 72px;
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
			}
		}

	}
	.indexStyle{
		position: relative;
		z-index: 99;
		width: 1200px;
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0) ;
		color: #fff;
		transition: width .3s;
		.header-con{
			width: 100%;
		}
		h1{
			a{
				color: #fff;
				opacity: 0.9;
			}
		}
		ul{
			li{
				a{
					color: #fff;
					opacity: 0.6;
				}
				a.router-link-active{
					color: #fff;
					opacity: 0.9;
					&::after{
						background: #fff;
					}
				}
			}
		}
	}
	.moduleStyle{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		transition: width .3s;
		box-shadow: 0 11px 14px 0 rgba(68,73,94,0.06);
		background-color: rgba(255, 255, 255,1) ;
		background-image: none;
		.header-con{
			padding: 0 95px 0 130px;
		}
	}

</style>
