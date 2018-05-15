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
h1 {
	font-weight: normal;
}
</style>
