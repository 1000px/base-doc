<!--
	name: components/nav.vue
	desc: 公共的左侧导航组件
	author: malixiang
-->
<template>
	<div class="left-nav">
		<ul id="nav-list">
            <li v-for="(item, index) in leftList" :key="index">
				<h2 @click="getMd(item.url,$event)">{{item.title}}</h2>
			</li>
        </ul>
	</div>
</template>

<script>
export default {
	name: 'kNav',
	props: ['leftList'],
	data () {
		return {
			msg: '公共头部，一级导航写在这里'
		};
	},
	methods: {
		showLeftList: function () {
			console.log(this.leftList);
		},
		getMd: function (url) {
			this.$emit('chgCnt', url);
			let oNavList = document.getElementById('nav-list').children;
			for (let i = 0; i < oNavList.length; i++) {
				oNavList[i].children[0].style.color = '#333';
			}
			let oNavListCon = event.currentTarget;
			oNavListCon.style.color = '#409eff';
		}
	},
	updated: function () {
		let oNavList = document.getElementById('nav-list').children[0];
		console.log(oNavList.children[0]);
		oNavList.children[0].style.color = '#409eff';
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "../assets/base.scss";
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
			}
		}
	}
}
</style>
