<!--
	name: components/nav.vue
	desc: 公共的左侧导航组件
	author: malixiang
-->
<template>
	<div class="header">
		<ul>
            <li v-for="(item, index) in leftList" :key="index">
				<button @click="getMd(item.url)">{{item.title}}</button>
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

		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
	color: red;
}
.header {
    float: left;
    width: 200px;
}
</style>
