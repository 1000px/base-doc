<template>
	<transition :name="disableTransitions ? '' : 'kc-zoom-in-center'">
    <span
		class="kc-tag"
		:class="[
        type ? 'kc-tag--' + type : '',
        tagSize && `kc-tag--${tagSize}`,
        {'is-hit': hit},
        {'is-selected': selectedStatus}
      ]"
		:style="customColorStyle"
		@click="changeSelectState()">
      <slot></slot>
      <i class="kc-tag__close kc-icon-close"
		 v-if="closable"
		 @click.stop="handleClose"></i>
    </span>
	</transition>
</template>
<script>
	import { hexToRgb, colorNameToRgb } from '_src/utils/util.js';
	export default {
		name: 'KcTag',
		props: {
			text: String,
			closable: Boolean,
			type: String,
			hit: Boolean,
			disableTransitions: Boolean,
			color: String,
			size: String,
			selected: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				selectedStatus: this.selected
			};
		},
		methods: {
			handleClose(event) {
				this.$emit('close', event);
			},
			changeSelectState() {
				this.selectedStatus = !this.selectedStatus;
				this.$emit('click', this.selectedStatus);
			}
		},
		computed: {
			tagSize() {
				return this.size || (this.$ELEMENT || {}).size;
			},
			customColorStyle() {
				let mainColor;
				if (this.color) {
					if (this.color.indexOf('#') > -1) {
						mainColor = hexToRgb(this.color).replace('(', 'a(').replace(')', ', .1)');
					} else {
						mainColor = colorNameToRgb(this.color).replace('(', 'a(').replace(')', ', .1)');
					}
				} else {
					mainColor = this.color;
				}
				if (this.selectedStatus) {
					return {
						color: this.color
					};
				} else {
					return {
						color: this.color,
						backgroundColor: mainColor,
						borderColor: mainColor ? mainColor.replace('.1)', '.2)') : ''
					};
				}
			}
		}
	};
</script>
