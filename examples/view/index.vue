<!--
	name: index.vue
	desc: 首页
	author: malixiang
-->
<template>
	<div class="home">
		<!--整体背景-->
		<div class="bg-fixed">
			<div class="bg-banner">
				<div class="bg-banner-masking01"></div>
				<div class="bg-banner-masking02"></div>
				<div class="bg-banner-img"><img src="../assets/images/pic-scene01.png"/></div>
			</div>
			<div class="bg-src">
				<div class="bg-src-left">
					<img src="../assets/images/pic-scene02.png"/>
				</div>
				<div class="bg-src-right"></div>
			</div>
		</div>
		<!--banner+card-->
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
				<p class="banner-intro">一款视觉层面精美，代码层面高质量的 UI 库</p>
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
						<router-link to="/resource">了解详情 →</router-link>
					</span>
					</div>
				</div>
			</div>
		</div>
		<!--下半部列表-->
		<div class="home-con">
			<div class="home-con-list">
				<h4>工程化特征</h4>
				<ul>
					<li>
						<h5>
							模块化
							<i class="con-list-icon1"></i>
						</h5>
						<p>模块化为多人协作提供可能</p>
					</li>
					<li>
						<h5>
							组件化
							<i class="con-list-icon2"></i>
						</h5>
						<p>组件化是在设计层面上，对UI的拆分</p>
					</li>
					<li>
						<h5>
							规范化
							<i class="con-list-icon3"></i>
						</h5>
						<p>项目初期规范化制定的好坏直接影响后期开发质量</p>
					</li>
					<li>
						<h5>
							自动化
							<i class="con-list-icon4"></i>
						</h5>
						<p>任何简单机械的操作都应该让机器去完成</p>
					</li>
				</ul>
			</div>
		</div>
		<!--footer-->
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
					<li>版权所有@-2018</li>
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
		width: 100%;
		min-width: 1200px;
		font-family: $typography;
		// 背景图
		.bg-fixed {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 0;
			// background-image: linear-gradient(44deg, #53bdf5 13%, #4982f2 51%, #3a2fed 100%);
			.bg-banner {
				position: relative;
				width: 100%;
				height: 1554px;
				margin-top: -80px;
				background-image: linear-gradient(-44deg, #53bdf5 6%, #4982f2 51%, #3a2fed 100%);

				.bg-banner-masking01 {
					position: absolute;
					width: 100%;
					height: 100%;
					background: url("../assets/images/pic-waveline01.png") center bottom no-repeat;
				}
				.bg-banner-masking02 {
					position: absolute;
					width: 100%;
					height: 100%;
					background: url("../assets/images/pic-waveline02.png") center bottom no-repeat;
				}
				.bg-banner-img img {
					float: right;
					margin-right: -80px;
					padding-top: 200px;
				}
				.bg-banner-img {
					width: 1200px;
					height: 547px;
					margin: 0 auto;
				}
			}
			.bg-src {
				position: relative;
				width: 100%;
				height: 1095px;
				padding-top: 237px;

				.bg-src-left {
					float: left;
					width: 726px;
					height: 900px;
					background: url("../assets/images/backg-content01.png");
				}
				.bg-src-left img {
					float: right;
					width: 668px;
					height: 628px;
					margin-right: -110px;
					padding-top: 225px;
				}
				.bg-src-right {
					float: right;
					width: 112px;
					height: 577px;
					margin-top: 42px;
					background: url("../assets/images/backg-content02.png");
				}
			}
		}
		div.banner{
			position: relative;
			height: 1634px;
			width: 1200px;
			margin: 0 auto;
			div.banner-con{
				@include clearFix;
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
				p.banner-intro{
					position: absolute;
					top: 977px;
					left: 0;
					width: 371px;
					height: 112px;
					opacity: 0.9;
					font-family: $typography;
					font-size: 28px;
					color: #1F1F20;
					letter-spacing: 1.12px;
					line-height: 56px;
				}
				div.home-con-card{
					.card{
						position: absolute;
						z-index: 99;
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
						top: 895px;
						right: 0;
						i{
							background: url("../assets/images/icon-compass.png") center 100% no-repeat;
							background-size: 100%;
						}
					}
					.card-api{
						top: 1250px;
						right: 499px;
						i{
							background: url("../assets/images/icon-kit.png") center 100% no-repeat;
							background-size: 100%;
						}
					}
					.card-resources{
						top: 1435px;
						right: 0;
						i{
							background: url("../assets/images/icon-resource.png") center no-repeat;
							background-size: 100%;
						}
					}
				}
			}
		}
		div.home-con{
			height: 1234px;
			width: 1200px;
			margin: 0 auto;
			position: relative;
			div.home-con-list{
				position: absolute;
				top: 544px;
				right: 0px;
				background-color: #fff;
				h4{
					width: 146px;
					height: 40px;
					margin:0 0 80px 92px;
					font-size: 28px;
					font-weight: 500;
					color: #1F1F20;
					letter-spacing: 1.12px;
				}
				ul{
					width: 680px;
					@include clearFix;
					li{
						float: left;
						margin:0 0 76px 92px;
						width: 246px;
						h5{
							height: 33px;
							margin-bottom: 9px;
							font-size: 24px;
							font-weight: normal;
							color: #1F1F20;
							letter-spacing: 0.96px;
							i{
								float: left;
								width: 26px;
								height: 26px;
								margin-right: 10px;
							}
							i.con-list-icon1{
								background: url("../assets/images/icon-Modularization.png") center 100% no-repeat;
								background-size: 100%;
							}
							i.con-list-icon2{
								background: url("../assets/images/icon-Component-based.png") center 100% no-repeat;
								background-size: 100%;
							}
							i.con-list-icon3{
								background: url("../assets/images/icon-Normalization.png") center 100% no-repeat;
								background-size: 100%;
							}
							i.con-list-icon4{
								background: url("../assets/images/icon-automation.png") center 100% no-repeat;
								background-size: 100%;
							}
						}
						p{
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
			padding: 40px 0;
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
							margin-bottom: 5px;
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
