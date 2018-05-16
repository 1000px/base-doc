<!--
	name: guide/index.vue
	desc: vue-base脚手架快速入门
	author: malixiang
-->
<template>
	<div class="guide">
		<k-nav :leftList="guideList"></k-nav>
		<div class="guide-content">
			<div v-html="contentMd"></div>
		</div>
	</div>
</template>

<script>
// 引入公用组件
import kNav from '@/components/nav';

// 引入数据服务
import {getGuideList, getGuideItem} from '@/service/guide';

// 引入其它服务
import marked from 'marked';

export default {
	name: 'guide',
	data () {
		return {
			msg: 'vue-base脚手架快速引导页',
			guideList: [],
			contentMd: ''
		};
	},
	computed: {

	},
	mounted () {
		getGuideList().then(res => {
			this.guideList = res[10001];
			console.log(10002, this.guideList);
			// 获取当前第一个导航的内容
			getGuideItem().then(res => {
				console.log(10001, res);
				this.contentMd = marked(res);
			}).catch(err => {
				console.log(err);
			});
		}).catch(err => {
			console.log(err);
		});
	},
	components: {
		kNav
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1 {
	font-weight: normal;
	span {
		color: red;
	}
}
</style>
