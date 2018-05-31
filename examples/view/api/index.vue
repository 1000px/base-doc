<!--
	name: docs/index.vue
	desc: vue-base详细文档
	author: malixiang
-->
<template>
	<div class="api">
		<k-nav :left-nav="splitNav"></k-nav>
		<div class="right-content markcss">
			<router-view/>
		</div>
	</div>
</template>

<script>
import kNav from '@/components/nav';
import navLists from '@/nav-config.json';

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
	components: {
		kNav
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "../../assets/global";
	.right-content{
		@include clearFix;
		@include content;
	}
</style>
