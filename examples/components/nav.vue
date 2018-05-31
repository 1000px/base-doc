<!--
	name: components/nav.vue
	desc: 公共的左侧导航组件
	author: malixiang
-->
<template>
	<div class="left-nav">
		<ul>
			<li v-for="nav in leftNav" :key="nav.id">
				<router-link :to="{name: nav.name}" exact>{{nav.desc}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['leftNav', 'curPath'],
	data () {
		return {

		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "../assets/global";
.left-nav {
    float: left;
    width: 200px;
	ul{
		padding-right: 30px;
		li{
			height: 40px;
			h2 {
				font-size: 17px;
				color: #333;
				font-weight: 400;
				cursor: pointer;
			}
		}
	}
}
</style>
