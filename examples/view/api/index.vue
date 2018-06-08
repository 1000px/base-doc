<!--
	name: api/index.vue
	desc: 文档详情页
	author: malixiang
-->
<template>
	<div>
		<div class="api view-content">
			<k-nav :left-nav="splitNav"></k-nav>
			<div class="right-content markcss" ref="markCon">
				<div class="scrollBox">
					<router-view/>
				</div>
			</div>
		</div>
		<div class="sm-nav" @mouseenter="enter" @mouseleave="leave">
			<ul>
				<li v-for="(item, index) in smNav" :key="index" >
					<a :href="('#'+item.innerText)">{{item.innerText}}</a>
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
import kNav from '@/components/nav';
import navLists from '@/nav-config.json';
import KcScrollbar from '../../../package/scrollbar/src/main';


export default {
	data() {
		return {
			smNav: [{innerText: '目'}, {innerText: '录'}]
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
		enter: function () {
//			console.log(this.$refs.markCon.$el.querySelectorAll('h3'));
			let hList = this.$refs.markCon.querySelectorAll('h3');

			if (hList.length > 0) {
				this.smNav = hList;
				for(let i = 0; i < hList.length; i++) {
					hList[i].id = hList[i].innerText;
				}
			}
		},
		leave: function () {
			this.smNav = [{innerText: '目'}, {innerText: '录'}];
		}
	},
	components: {
		KcScrollbar,
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
