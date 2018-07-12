<template>
	<transition name="kc-fade-in">
		<div class="kc-backtop" @click="backtop" v-show="disable">
			<div :class="[!blue && 'gray', blue && 'back-top-blue']">
				<kc-icon name="arrow-up" v-if="!blue"></kc-icon>
				<span v-if="blue">UP</span>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'kcBacktop',
		computed: {},
		props: {
			blue: Boolean,
			target: {
				type: Function,
				default: (res) => {
					return {
						res: window
					};
				}
			},
			visibleHeight: {
				type: Number,
				default: 400
			}
		},
		data () {
			return {
				disable: false,
				warnning: false
			};
		},
		methods: {
			backtop () {
				let timer = null;
				let ele = this.target();
				let _this = this;
				cancelAnimationFrame(timer);
				timer = requestAnimationFrame(function fn () {
					if (ele.scrollTop > 0) {
						ele.scrollTop -= 50;
						_this.target.scrollTop = ele.scrollTop;
						timer = requestAnimationFrame(fn);
					} else {
						cancelAnimationFrame(timer);
						_this.disable = false;
					}
				});
//				ele.scrollTop = 0;
				this.$emit('onclick');
			},
			handleScroll () {
				let eleScroll = this.target();
				if (eleScroll.scrollTop < this.visibleHeight) {
					this.disable = false;
				} else {
					this.disable = true;
				}
			}
		},
		mounted () {
			if (this.target().nodeType == 1) {
				this.target().addEventListener('scroll', this.handleScroll);
			}else{
				console.log('BackTop:请传入正确dom元素');
			}
		},
		destroyed () {
			if (this.target().nodeType == 1) {
				this.target().removeEventListener('scroll', this.handleScroll);
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
	.kc-backtop {
		position: fixed;
		right: 50px;
		bottom: 50px;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #fff;
		.gray {
			background: #ccc;
			border-radius: 20px;
		}
		.back-top-blue {
			background: #1088e9;
			border-radius: 4px;
		}
	}

	.disable {
		opacity: 0;
		transition: all .7s;
	}

	.show {
		opacity: 1;
		transition: all .7s;
	}

</style>
