<template>
	<transition name="kc-zoom-in-top" @after-leave="doDestroy">
		<div
			class="kc-color-dropdown"
			v-show="showPopper">
			<div class="kc-color-dropdown__main-wrapper">
				<hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
				<sv-panel ref="sl" :color="color"></sv-panel>
			</div>
			<alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
			<predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
			<div class="kc-color-dropdown__btns">
        <span class="kc-color-dropdown__value">
          <kc-input
			  v-model="customInput"
			  @keyup.native.enter="handleConfirm"
			  @blur="handleConfirm"
			  size="mini">
          </kc-input>
        </span>
				<kc-button
					size="mini"
					type="text"
					class="kc-color-dropdown__link-btn"
					@click="$emit('clear')">
					{{ t('el.colorpicker.clear') }}
				</kc-button>
				<kc-button
					plain
					size="mini"
					class="kc-color-dropdown__btn"
					@click="confirmValue">
					{{ t('el.colorpicker.confirm') }}
				</kc-button>
			</div>
		</div>
	</transition>
</template>

<script>
	import SvPanel from './sv-panel';
	import HueSlider from './hue-slider';
	import AlphaSlider from './alpha-slider';
	import Predefine from './predefine';
	import Popper from '_src/utils/vue-popper';
	import Locale from '_src/mixins/locale';
	import KcInput from './../../../input';
	import KcButton from './../../../button';

	export default {
		name: 'kc-color-picker-dropdown',

		mixins: [Popper, Locale],

		components: {
			SvPanel,
			HueSlider,
			AlphaSlider,
			KcInput,
			KcButton,
			Predefine
		},

		props: {
			color: {
				required: true
			},
			showAlpha: Boolean,
			predefine: Array
		},

		data() {
			return {
				customInput: ''
			};
		},

		computed: {
			currentColor() {
				const parent = this.$parent;
				return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
			}
		},

		methods: {
			confirmValue() {
				this.$emit('pick');
			},

			handleConfirm() {
				this.color.fromString(this.customInput);
			}
		},

		mounted() {
			this.$parent.popperElm = this.popperElm = this.$el;
			this.referenceElm = this.$parent.$el;
		},

		watch: {
			showPopper(val) {
				if (val === true) {
					this.$nextTick(() => {
						const {sl, hue, alpha} = this.$refs;
						sl && sl.update();
						hue && hue.update();
						alpha && alpha.update();
					});
				}
			},

			currentColor(val) {
				this.customInput = val;
			}
		}
	};
</script>
