<!--
	name: api/index.vue
	desc: 文档详情页
	author: malixiang
-->
<template>
	<kc-scrollbar class="view-box" id="scrollbar">
		<div class="api view-content">
			<k-nav :left-nav="splitNav"></k-nav>
			<div class="right-content markcss" ref="markCon">
				<router-view/>
			</div>
		</div>
		<kc-backtop :target="dom1"></kc-backtop>
	</kc-scrollbar>

</template>

<script>
import kNav from '@/components/nav';
import navLists from '@/nav-config.json';
// import KcScrollbar from '../../../package/scrollbar/src/main';


export default {
	data() {
		return {

		};
	},
	computed: {
		splitNav: () => {
			let menus;
			navLists.forEach((item) => {
				if(item['path'] === '/api') {
					menus = item.items;
				}
			});
			return menus;
		}
	},
	methods: {
		dom1 () {
			return document.querySelector('#scrollbar').children[0];
		}
	},
	components: {
		kNav
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	/*.content{
		@include clearFix;
		@include content;
	}*/
</style>
