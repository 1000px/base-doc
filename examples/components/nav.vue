<!--
	name: components/nav.vue
	desc: 公共的左侧导航组件
	author: malixiang
-->
<template>
	<div class="left-nav">
		<ul>
			<li v-for="(val, key, index) in _navLeft">
				<h3 v-if="_navLeft[key]['list']">{{_navLeft[key]['desc']}}</h3>
				<h3 v-else><router-link :to="{name: key}" exact>{{_navLeft[key]['desc']}}</router-link></h3>
				<ul>
					<li v-for="nav in _navLeft[key]['list']">
						<router-link :to="{name: nav.name}" exact>{{nav.desc}}</router-link>
					</li>
				</ul>
			</li>
		</ul>

	</div>

</template>

<script>
export default {
	props: ['leftNav'],
	data() {
		return {

		};
	},
	computed: {
		_navLeft: function() {
			let _navMap = {};
			this.leftNav && this.leftNav.length > 0 && this.leftNav.forEach((navItem) => {
				if(navItem['category']) {
					if(!_navMap[navItem['category']]) {
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
	mounted() {
		console.log(this._navLeft);
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.left-nav {
    position: absolute;
	left: 0;
	top: 0;
    width: 200px;
	ul {
		li {
			h3{
				margin-top: 0;
			}
			ul{
				margin-bottom: 20px;
				li{
					padding: 5px 0;
				}
			}
		}
	}
}
</style>
