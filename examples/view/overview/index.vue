<!--
	name: overview/index.vue
	desc: 概览
	author: malixiang
-->
<template>
	<kc-scrollbar class="view-box" id="scrollbar">
		<div class="overview view-content">
			<k-nav :left-nav="splitNav" :cur-path="path"></k-nav>
			<div class="right-content markcss">
				<router-view/>
			</div>
		</div>
		<kc-backtop :target="dom"></kc-backtop>
	</kc-scrollbar>
</template>

<script>
import kNav from '@/components/nav';
import navLists from '@/nav-config.json';
export default {
	data () {
		return {
			path: '/overview/'
		};
	},
	computed: {
		splitNav: () => {
			let menus;
			navLists.forEach((item) => {
				if(item['path'] === '/overview') {
					menus = item.items;
				}
			});
			return menus;
		}
	},
	methods: {
		dom () {
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

</style>
