<!--
	name: docs/index.vue
	desc: vue-base详细文档
	author: malixiang
-->
<template>
	<div class="docs">
		<v-nav></v-nav>
		<div class="right-content">
			<h1>{{msg}}</h1>
		</div>
	</div>
</template>

<script>
import vNav from '@/components/nav';
export default {
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
<style lang="scss" scoped>
	@import "../../assets/global";
	.docs{
		@include clearFix;
		@include content;
	}
</style>
