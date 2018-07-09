<template>
	<transition name="kc-alert-fade">
		<div
			class="kc-alert"
			:class="[typeClass, center ? 'is-center' : '']"
			v-show="visible"
			role="alert"
		>
			<i class="kc-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
			<div class="kc-alert__content">
				<span class="kc-alert__title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
				<slot>
					<p class="kc-alert__description" v-if="description">{{ description }}</p>
				</slot>
				<i class="kc-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'kc-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
			</div>
		</div>
	</transition>
</template>

<script type="text/babel">
	const TYPE_CLASSES_MAP = {
		'success': 'kc-icon-success',
		'warning': 'kc-icon-warning',
		'error': 'kc-icon-error'
	};
	export default {
		name: 'KcAlert',

		props: {
			title: {
				type: String,
				default: '',
				required: true
			},
			description: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'info'
			},
			closable: {
				type: Boolean,
				default: true
			},
			closeText: {
				type: String,
				default: ''
			},
			showIcon: Boolean,
			center: Boolean
		},

		data() {
			return {
				visible: true
			};
		},

		methods: {
			close() {
				this.visible = false;
				this.$emit('close');
			}
		},

		computed: {
			typeClass() {
				return `kc-alert--${this.type}`;
			},

			iconClass() {
				return TYPE_CLASSES_MAP[this.type] || 'kc-icon-info';
			},

			isBigIcon() {
				return this.description || this.$slots.default ? 'is-big' : '';
			},

			isBoldTitle() {
				return this.description || this.$slots.default ? 'is-bold' : '';
			}
		}
	};
</script>
