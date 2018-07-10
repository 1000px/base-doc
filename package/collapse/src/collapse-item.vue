<template>
	<div class="kc-collapse-item" :class="{'is-active': isActive}" :style="customStyle">
		<div
			role="tab"
			:aria-expanded="isActive"
			:aria-controls="`kc-collapse-content-${id}`"
			:aria-describedby="`kc-collapse-content-${id}`">
			<div
				class="kc-collapse-item__header"
				@click="handleHeaderClick"
				role="button"
				:id="`kc-collapse-head-${id}`"
				tabindex="0"
				@keyup.space.enter.stop="handleEnterClick"
				:class="{
				  'focusing': focusing,
				  'is-active': isActive,
				  'no-arrow': !showArrow
				}"
				@focus="handleFocus"
				@blur="focusing = false">
				<i v-if="showArrow" class="kc-collapse-item__arrow kc-icon-arrow-right"
				   :class="{'is-active': isActive}">
				</i>
				<slot name="title">{{title}}</slot>
			</div>
		</div>
		<kc-collapse-transition>
			<div
				class="kc-collapse-item__wrap"
				v-show="isActive"
				role="tabpanel"
				:aria-hidden="!isActive"
				:aria-labelledby="`kc-collapse-head-${id}`"
				:id="`kc-collapse-content-${id}`">
				<div class="kc-collapse-item__content">
					<slot></slot>
				</div>
			</div>
		</kc-collapse-transition>
	</div>
</template>
<script>
	import KcCollapseTransition from '_src/transitions/collapse-transition';
	import Emitter from '_src/mixins/emitter';
	import {generateId} from '_src/utils/util';

	export default {
		name: 'KcCollapseItem',

		componentName: 'KcCollapseItem',

		mixins: [Emitter],

		components: {KcCollapseTransition},

		data() {
			return {
				contentWrapStyle: {
					height: 'auto',
					display: 'block'
				},
				contentHeight: 0,
				focusing: false,
				isClick: false
			};
		},

		inject: ['collapse'],

		props: {
			title: String,
			name: {
				type: [String, Number],
				default() {
					return this._uid;
				}
			},
			showArrow: {
				type: Boolean,
				default: true
			},
			customStyle: {
				type: Object,
				default() {
					return {}
				}
			}
		},

		computed: {
			isActive() {
				return this.collapse.activeNames.indexOf(this.name) > -1;
			},
			id() {
				return generateId();
			}
		},

		methods: {
			handleFocus() {
				setTimeout(() => {
					if (!this.isClick) {
						this.focusing = true;
					} else {
						this.isClick = false;
					}
				}, 50);
			},
			handleHeaderClick() {
				this.dispatch('KcCollapse', 'item-click', this);
				this.focusing = false;
				this.isClick = true;
			},
			handleEnterClick() {
				this.dispatch('KcCollapse', 'item-click', this);
			}
		}
	};
</script>
