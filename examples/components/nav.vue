<!--
	name: components/nav.vue
	desc: 公共的左侧导航组件
	author: malixiang
-->
<template>
	<div class="left-nav">
		<ul>
            <li v-for="(item, index) in leftList" :key="index">
				<!-- <h2 @click="getMd(item.url, index)" ref="navH">{{item.title}}</h2> -->
                <a :href="item.url">{{item.title}}</a>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
	props: ['leftList'],
	data () {
		return {
			msg: '公共头部，一级导航写在这里'
		};
	},
	methods: {
		showLeftList: function () {
//			console.log(this.leftList);
		},
		getMd: function (url, index) {
			this.$emit('chgCnt', url);
			// for (let i in this.$refs.navH) {
			// 	this.$refs.navH[i].style.color = '#333';
			// }
			// this.$refs.navH[index].style.color = '#409eff';
		}
	},
	updated: function () {
		// this.$refs.navH[0].style.color = '#409eff';
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
