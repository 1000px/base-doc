<template>
	<div v-if="hasImg===true" :class="[
		'kc-img-radio', 
		model === label ? 'is-checked' : '',
		inline ? 'kc-img-radio-inline':'kc-img-radio-block']">
			<div class="kc-img-radio-item">
				<label
					class="kc-radio"
					:class="[
						border && radioSize ? 'kc-radio--' + radioSize : '',
						{ 'is-disabled': isDisabled },
						{ 'is-focus': focus },
						{ 'is-bordered': border },
						{ 'is-checked': model === label }
					]"
					role="radio"
					:aria-checked="model === label"
					:aria-disabled="isDisabled"
					:tabindex="tabIndex"
					@keydown.space.stop.prevent="model = label"
				>
					<span class="kc-radio__input"
						:class="{
							'is-disabled': isDisabled,
							'is-checked': model === label
						}"
				>
						<span class="kc-radio__inner"></span>
						<input
						class="kc-radio__original"
						:value="label"
						type="radio"
						aria-hidden="true"
						v-model="model"
						@focus="focus = true"
						@blur="focus = false"
						@change="handleChange"
						:name="name"
						:disabled="isDisabled"
						tabindex="-1"
					>
					</span>
					<span class="kc-radio__label">
						<slot></slot>
						<template v-if="!$slots.default">{{label}}</template>
					</span>
				</label>
			</div>
			<div class="kc-img-radio-item">
				<img :src="src" class="radio-img">
			</div>
			<div class="kc-img-radio-item">
				<div v-if="title" class="kc-img-radio-item-title">{{title}}</div>
				<div v-if="description" class="kc-img-radio-item-desc">{{description}}</div>
			</div>
	</div>

	<label
		v-else
		class="kc-radio"
		:class="[
      border && radioSize ? 'kc-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
		role="radio"
		:aria-checked="model === label"
		:aria-disabled="isDisabled"
		:tabindex="tabIndex"
		@keydown.space.stop.prevent="model = label"
	>
    <span class="kc-radio__input"
		  :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
	>
      <span class="kc-radio__inner"></span>
      <input
		  class="kc-radio__original"
		  :value="label"
		  type="radio"
		  aria-hidden="true"
		  v-model="model"
		  @focus="focus = true"
		  @blur="focus = false"
		  @change="handleChange"
		  :name="name"
		  :disabled="isDisabled"
		  tabindex="-1"
	  >
    </span>
		<span class="kc-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
	</label>
</template>
<script>
	import Emitter from '_src/mixins/emitter';

	export default {
		name: 'KcRadio',

		mixins: [Emitter],

		inject: {
			elForm: {
				default: ''
			},

			elFormItem: {
				default: ''
			}
		},

		componentName: 'KcRadio',

		props: {
			value: {},
			label: {},
			disabled: Boolean,
			name: String,
			border: Boolean,
			size: String,
			hasImg: Boolean,
			src: String,
			title: String,
			description: String,
			inline: Boolean
		},

		data() {
			return {
				focus: false
			};
		},
		computed: {
			isGroup() {
				let parent = this.$parent;
				while (parent) {
					if (parent.$options.componentName !== 'KcRadioGroup') {
						parent = parent.$parent;
					} else {
						this._radioGroup = parent;
						return true;
					}
				}
				return false;
			},
			model: {
				get() {
					return this.isGroup ? this._radioGroup.value : this.value;
				},
				set(val) {
					if (this.isGroup) {
						this.dispatch('KcRadioGroup', 'input', [val]);
					} else {
						this.$emit('input', val);
					}
				}
			},
			_elFormItemSize() {
				return (this.elFormItem || {}).elFormItemSize;
			},
			radioSize() {
				const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
				return this.isGroup
					? this._radioGroup.radioGroupSize || temRadioSize
					: temRadioSize;
			},
			isDisabled() {
				return this.isGroup
					? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
					: this.disabled || (this.elForm || {}).disabled;
			},
			tabIndex() {
				return !this.isDisabled ? (this.isGroup ? (this.model === this.label ? 0 : -1) : 0) : -1;
			}
		},

		methods: {
			handleChange() {
				this.$nextTick(() => {
					this.$emit('change', this.model);
					this.isGroup && this.dispatch('KcRadioGroup', 'handleChange', this.model);
				});
			}
		}
	};
</script>
