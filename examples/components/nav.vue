<!--
	name: components/nav.vue
	desc: 公共的左侧导航组件
	author: malixiang
-->
<template>
	<kc-scrollbar class="left-nav">
		<ul>
			<li v-for="(val, key, index) in _navLeft">
				<h3 v-if="_navLeft[key]['list']">
					<span>{{_navLeft[key]['desc']}}</span>
					<i></i>
					<ul>
						<li v-for="nav in _navLeft[key]['list']">
							<router-link :to="{name: nav.name}" exact>{{nav.desc}}</router-link>
						</li>
					</ul>
				</h3>
				<h4 v-else>
					<span><router-link :to="{name: key}" exact>{{_navLeft[key]['desc']}}</router-link></span>
				</h4>

			</li>
		</ul>

	</kc-scrollbar>

</template>

<script>

	export default {

		props: ['leftNav'],
		data () {
			return {};
		},
		computed: {
			_navLeft: function () {
				let _navMap = {};
				this.leftNav && this.leftNav.length > 0 && this.leftNav.forEach((navItem) => {
					if (navItem['category']) {
						if (!_navMap[navItem['category']]) {
							_navMap[navItem['category']] = {};
							_navMap[navItem['category']]['list'] = [];
							_navMap[navItem['category']]['desc'] = navItem['category-desc'];
						}
						_navMap[navItem['category']]['list'].push(navItem);
					} else {
						_navMap[navItem['name']] = {};
						_navMap[navItem['name']]['desc'] = navItem['desc'];
					}
				});
				return _navMap;
			}
		},
		methods: {
			toTop: function () {
//				console.log(11, this.$el.parentNode.parentNode.parentNode);
				let oScrollBar = document.querySelector('#scrollbar').children[0];
				oScrollBar.scrollTop = 0;
			}
		},
		watch: {
			'$route': 'toTop'
		},
		mounted () {
//			console.log(this._navLeft);
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>

	.left-nav {
		position: fixed !important;
		top: 116px;
		left: 0;
		padding-left: 130px;
		overflow: hidden;
		width: 250px;
		/*height: 100%;*/
		height: calc(100% - 124px);
		padding-top: 18px;

		ul {
			> li {
				h3 {
					font-size: 14px;
					color: #273B55;
					font-weight: bold;
					span {
						/*padding-left: 24px;*/
					}
					ul {
						padding: 10px 0 22px;
						li {
							position: relative;
							/*padding-left: -24px;*/
							height: 37px;
							line-height: 37px;
							> a {
								padding-left: 10px;
								display: block;
								font-family: $typography;
								font-size: 12px;
								color: #273B55;
								font-weight: 500;
								&:hover{
									color: #4999FF;
								}
							}
							.router-link-active {
								color: #6781F2;
								/*opacity: 0.9;
								font-family: $typography;
								font-size: $medium;
								color: #5572F1;
								background: #F6F9FF;
								&::after {
									position: absolute;
									bottom: 0;
									left: 0;
									width: 6px;
									height: 100%;
									display: inline-block;
									content: "";
									background: #6781F2;
									box-shadow: 3px 0 8px 0 rgba(103, 129, 242, 0.41);
									border-radius:0 100px 100px 0;
								}*/
							}
						}
					}
				}
				h4{
					position: relative;
					height: 37px;
					line-height: 37px;
					a{
						display: block;
						padding-left: 24px;
						font-family: $typography;
						font-size: 14px;
						color: #273B55;
						&:hover{
							color: #4999FF;
						}
					}
					.router-link-active {
						color: #6781F2;
						/*opacity: 0.9;
						font-family: $typography;
						font-size: $medium;
						color: #5572F1;
						background: #F6F9FF;
						&::after {
							position: absolute;
							bottom: 0;
							left: 0;
							width: 6px;
							height: 100%;
							display: inline-block;
							content: "";
							background: #6781F2;
							box-shadow: 3px 0 8px 0 rgba(103, 129, 242, 0.41);
							border-radius:0 100px 100px 0;
						}*/
					}
				}
			}
			&::after {
				position: absolute;
				top: 0;
				right: 0;
				width: 0px;
				height: 100%;
				display: inline-block;
				content: "";
				border-right: 1px solid #E0EBF3;
			}
		}
	}
</style>
