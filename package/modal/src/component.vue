<template>
	<transition name="modal-fade">
		<div class="kc-modal__wrapper" v-show="visible" @click.self="handleWrapperClick">
			<div
				class="kc-modal"
				:class="[{ 'is-fullscreen': fullscreen, 'kc-modal--center': center }, customClass]"
				ref="modal"
				:style="style">
				<div class="kc-modal__header">
					<slot name="title">
						<span class="kc-modal__title">{{ title }}</span>
					</slot>
					<button
						type="button"
						class="kc-modal__headerbtn"
						aria-label="Close"
						v-if="showClose"
						@click="handleClose">
						<i class="kc-modal__close kc-icon kc-icon-close"></i>
					</button>
				</div>
				<div class="kc-modal__body" v-if="rendered">
					<slot></slot>
				</div>
				<div class="kc-modal__footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Popup from '_src/utils/popup';
	import Migrating from '_src/mixins/migrating';
	import emitter from '_src/mixins/emitter';

	export default {
		name: 'KcModal',

		mixins: [Popup, emitter, Migrating],

		props: {
			title: {
				type: String,
				default: ''
			},

			modal: {
				type: Boolean,
				default: true
			},

			modalAppendToBody: {
				type: Boolean,
				default: true
			},

			appendToBody: {
				type: Boolean,
				default: false
			},

			lockScroll: {
				type: Boolean,
				default: true
			},

			closeOnClickModal: {
				type: Boolean,
				default: true
			},

			closeOnPressEscape: {
				type: Boolean,
				default: true
			},

			showClose: {
				type: Boolean,
				default: true
			},

			width: String,

			fullscreen: Boolean,

			customClass: {
				type: String,
				default: ''
			},

			top: {
				type: String,
				default: '15vh'
			},
			beforeClose: Function,
			center: {
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
				closed: false
			};
		},

		watch: {
			visible(val) {
				if (val) {
					this.closed = false;
					this.$emit('open');
					this.$el.addEventListener('scroll', this.updatePopper);
					this.$nextTick(() => {
						this.$refs.modal.scrollTop = 0;
					});
					if (this.appendToBody) {
						document.body.appendChild(this.$el);
					}
				} else {
					this.$el.removeEventListener('scroll', this.updatePopper);
					if (!this.closed) this.$emit('close');
				}
			}
		},

		computed: {
			style() {
				let style = {};
				if (this.width) {
					style.width = this.width;
				}
				if (!this.fullscreen) {
					style.marginTop = this.top;
				}
				return style;
			}
		},

		methods: {
			getMigratingConfig() {
				return {
					props: {
						'size': 'size is removed.'
					}
				};
			},
			handleWrapperClick() {
				if (!this.closeOnClickModal) return;
				this.handleClose();
			},
			handleClose() {
				if (typeof this.beforeClose === 'function') {
					this.beforeClose(this.hide);
				} else {
					this.hide();
				}
			},
			hide(cancel) {
				if (cancel !== false) {
					this.$emit('update:visible', false);
					this.$emit('close');
					this.closed = true;
				}
			},
			updatePopper() {
				this.broadcast('KcSelectDropdown', 'updatePopper');
				this.broadcast('KcDropdownMenu', 'updatePopper');
			}
		},

		mounted() {
			if (this.visible) {
				this.rendered = true;
				this.open();
				if (this.appendToBody) {
					document.body.appendChild(this.$el);
				}
			}
		},

		destroyed() {
			// if appendToBody is true, remove DOM node after destroy
			if (this.appendToBody && this.$el && this.$el.parentNode) {
				this.$el.parentNode.removeChild(this.$el);
			}
		}
	};
</script>
