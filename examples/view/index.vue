<!--
	name: index.vue
	desc: 首页
	author: malixiang
-->
<template>
	<div class="home">
		<div class="banner">
			<div class="banner-con">
				<div class="banner-con-left">
					<h1>KFront Base UI</h1>
					<p>
						丰富、灵活、实用的组件，为业务产品提供强有力的设计支持，让设计者把创造力专注在最需要的地方。
					</p>
					<div>
						<router-link to="/overview">开始使用 →</router-link>
					</div>
				</div>
				<i class="banner01"></i>
				<p class="banner-intro">一款视觉层面精美，代码层面高质量的 UI 库</p>
			</div>
		</div>
		<div class="home-con">
			<div class="home-con-card">
				<div class="card card-overview">
					<i class="card-img"></i>
					<h3>指南</h3>
					<p>了解开发和设计指南，节约无谓的设计且保持系统一致性、规范性，全面提高产品体验和研发效率。</p>
					<span>
						<router-link to="/overview">了解详情 →</router-link>
					</span>
				</div>
				<div class="card card-api">
					<i class="card-img"></i>
					<h3>API</h3>
					<p>通过组件快速体验交互细节，实用前端框架封装的代码能够快速开发，同时保持项目的可维护性与可靠性。</p>
					<span>
						<router-link to="/api">了解详情 →</router-link>
					</span>
				</div>
				<div class="card card-resources">
					<i class="card-img"></i>
					<h3>资源</h3>
					<p>提供相关资源和模式，为具体的设计问题提供向导和一般解决方案，让设计者聚焦在最有价值的产品功能打磨上。</p>
					<span>
						<router-link to="/overview">了解详情 →</router-link>
					</span>
				</div>
			</div>
			<div class="home-con-list">
				<h4>工程化特征</h4>
				<ul>
					<li>
						<h5>模块化</h5>
						<p>模块化为多人协作提供可能</p>
					</li>
					<li>
						<h5>组件化</h5>
						<p>组件化是在设计层面上，对UI的拆分</p>
					</li>
					<li>
						<h5>规范化</h5>
						<p>项目初期规范化制定的好坏直接影响后期开发质量</p>
					</li>
					<li>
						<h5>自动化</h5>
						<p>任何简单机械的操作都应该让机器去完成</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="home-footer">
			<div class="home-footer-con">
				<ul>
					<li>资源链接</li>
					<li v-for="(item1,index) in rosourceLink" :key="index"><a href="">{{item1.data}}</a></li>
				</ul>
				<ul>
					<li>相关站点</li>
					<li v-for="(item2,index) in station" :key="index"><a href="">{{item2.data}}</a></li>
				</ul>
				<ul>
					<li>帮助中心</li>
					<li v-for="(item3,index) in station" :key="index"><a href="">{{item3.data}}</a></li>
				</ul>
				<ul>
					<li>版权所有�-2018</li>
					<li>苏州科达科技股份有限公司</li>
					<li>Web前端技术部出品</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			rosourceLink: [
				{data: 'Vue2.×', url: '#'},
				{data: 'ElementUI', url: '#'},
				{data: 'webpack', url: '#'},
				{data: 'Sass', url: '#'},
				{data: 'React', url: '#'},
				{data: 'iView', url: '#'}
			],
			station: [
				{data: '地图', url: '#'},
				{data: '3D地图', url: '#'},
				{data: 'Android地图', url: '#'},
				{data: '流媒体', url: '#'},
				{data: '视信通', url: '#'},
				{data: '自动化测试', url: '#'}
			],
			help: [
				{data: '更新日志', url: '#'},
				{data: '反馈建议', url: '#'},
				{data: '浏览器下载', url: '#'}
			]
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.home{
		position: relative;
		top:-80px;
		width: 100%;
		min-width: 1200px;
		font-family: $typography;
		div.banner{
			height: 1634px;
			background: url("../assets/images/backg-banner02.png") top left no-repeat;
			background-size: contain;
			div.banner-con{
				@include clearFix;
				width: 1200px;
				margin: 0 auto;
				padding-top: 232px;
				.banner-con-left{
					width: 500px;
					float: left;
					h1{
						margin-bottom: 58px;
						font-size: 64px;
						font-weight: 400;
						color: #FFFFFF;
						letter-spacing: 0.91px;
						line-height: 40px;
					}
					p{
						height: 80px;
						margin-bottom: 51px;
						font-size: 20px;
						color: #FFFFFF;
						letter-spacing: 0.8px;
						line-height: 40px;
					}
					div{
						width: 231px;
						height: 66px;
						background: #29CC8B;
						box-shadow: 0 2px 13px 0 rgba(26,37,106,0.14);
						border-radius: 100px;
						text-align: center;
						line-height: 66px;
						a{
							font-size: 20px;
							color: #FFFFFF;
						}
					}
				}
				i.banner01{
					position: relative;
					top: -70px;
					float: left;
					width: 700px;
					height: 440px;
					background: url(../assets/images/pic-scene01.png) top left no-repeat;
					background-size: 100%;

				}
				p.banner-intro{
					position: absolute;
					top: 1057px;
					left: 363px;
					width: 371px;
					height: 112px;
					opacity: 0.9;
					font-family: $typography;
					font-size: 28px;
					color: #1F1F20;
					letter-spacing: 1.12px;
					line-height: 56px;
				}
			}
		}
		div.home-con{
			height: 1234px;
			background: url("../assets/images/pic-content.png") top left no-repeat;
			background-size: contain;
			div.home-con-card{
				.card{
					width: 271px;
					height: 267px;
					padding:140px 100px 85px 68px;
					background: #FFFFFF;
					box-shadow: 0 2px 30px 0 rgba(0,0,0,0.06);
					border-radius: 8px;
					i{
						width: 50px;
						height: 50px;
						display: block;
						margin-bottom: 34px;
						border: 1px solid #ccc;
						border-radius: 100%;
					}
					h3{
						margin-bottom: 18px;
						font-size: 24px;
						color: #1F1F20;
						font-weight: normal;
						letter-spacing: 0.96px;
						font-family: $typography;
					}
					p{
						margin-bottom: 18px;
						font-size: 14px;
						color: #626875;
						letter-spacing: 0.56px;
						line-height: 28px;
					}
					span{
						a{
							font-family: $typography;
							font-size: 14px;
							color: #29CC8B;
							letter-spacing: 0.56px;
							line-height: 28px;
						}
					}

				}
				.card-overview{
					position: absolute;
					top: 975px;
					left: 1124px;
				}
				.card-api{
					position: absolute;
					top: 1330px;
					left: 625px;
				}
				.card-resources{
					position: absolute;
					top: 1515px;
					left: 1124px;
				}
			}
			div.home-con-list{
				position: absolute;
				top: 2219px;
				left: 976px;
				h4{
					width: 146px;
					height: 40px;
					margin-bottom: 77px;
					font-size: 28px;
					font-weight: normal;
					color: #1F1F20;
					letter-spacing: 1.12px;
				}
				ul{
					@include clearFix;
					li{
						float: left;
						margin:0 148px 74px 0;
						h5{
							width: 75px;
							height: 33px;
							margin-bottom: 9px;
							font-size: 24px;
							font-weight: normal;
							color: #1F1F20;
							letter-spacing: 0.96px;
						}
						p{
							width: 246px;
							height: 28px;
							font-size: 14px;
							color: #626875;
							letter-spacing: 0.56px;
							line-height: 28px;
						}
					}
				}
			}

		}
		div.home-footer{
			padding: 30px 0 40px;
			@include clearFix;
			background: #0A1C4C;
			div.home-footer-con{
				width: 1200px;
				margin: 0 auto;

				ul{
					float: left;
					margin-right: 255px;
					li{
						opacity: 0.4;
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #FFFFFF;
						letter-spacing: 0.56px;
						line-height: 28px;
						a{
							font-family: PingFangSC-Regular;
							font-size: 14px;
							color: #FFFFFF;
							letter-spacing: 0.56px;
						}
						&:first-child{
							opacity: 0.6;
							font-size: 16px;
							color: #FFFFFF;
							letter-spacing: 0.64px;
						}
					}
					&:last-child{
						margin-right: 0;
					}
				}
			}
		}

	}
</style>
