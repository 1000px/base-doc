<!--
	name: docs/index.vue
	desc: vue-base详细文档
	author: malixiang
-->
<template>
	<div class="docs">
		<v-nav></v-nav>
		<div class="docs-content">
			<h1>{{msg}}</h1>
		</div>
	</div>
</template>

<script>
import vNav from '@/components/nav';
export default {
	name: 'docs',
	path: '/docs',
	data () {
		return {
			msg: 'vue-base详细文档'
		};
	},
	components: {
		vNav
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../../assets/base.scss";
	.docs{
	@include clearFix;
		width: 1140px;
		margin: 0 auto;
		height: 100%;
		padding-top:45px;
	.docs-content{
		padding-left: 200px;
		width: 100%;
	}
	}
</style>
