<!--
	name: guide/index.vue
	desc: vue-base脚手架快速入门
	author: malixiang
-->
<template>
	<div class="guide">
		<v-nav></v-nav>
		<div class="guide-content">
			<h1>{{msg}}</h1>
		</div>
	</div>
</template>

<script>
import vNav from '@/components/nav';
export default {
	name: 'guide',
	data () {
		return {
			msg: 'vue-base脚手架快速引导页'
		};
	},
	components: {
		vNav
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
}
</style>
