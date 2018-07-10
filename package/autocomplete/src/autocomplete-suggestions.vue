<template>
	<transition name="kc-zoom-in-top" @after-leave="doDestroy">
		<div
			v-show="showPopper"
			class="kc-autocomplete-suggestion"
			:class="{ 'is-loading': parent.loading }"
			:style="{ width: dropdownWidth }"
			role="region"
		>
			<kc-scrollbar
				tag="ul"
				wrap-class="kc-autocomplete-suggestion__wrap"
				view-class="kc-autocomplete-suggestion__list"
			>
			<li v-if="parent.loading"><i class="kc-icon-loading"></i></li>
			<slot v-else>
			</slot>
			</kc-scrollbar>
		</div>
	</transition>
</template>
<script>
	import Popper from '_src/utils/vue-popper';
	import Emitter from '_src/mixins/emitter';
	import KcScrollbar from './../../scrollbar';

	export default {
		components: { KcScrollbar },
		mixins: [Popper, Emitter],

		componentName: 'KcAutocompleteSuggestions',

		data() {
			return {
				parent: this.$parent,
				dropdownWidth: '',
			};
		},

		props: {
			options: {
				default() {
					return {
						gpuAcceleration: false
					};
				}
			},
			id: String
		},

		methods: {
			select(item) {
				this.dispatch('KcAutocomplete', 'item-click', item);
			}
		},

		updated() {
			this.$nextTick(_ => {
				this.popperJS && this.updatePopper();
			});
		},

		mounted() {
			this.$parent.popperElm = this.popperElm = this.$el;
			this.referenceElm = this.$parent.$refs.input.$refs.input;
			this.referenceList = this.$el.querySelector('.kc-autocomplete-suggestion__list');
			this.referenceList.setAttribute('role', 'listbox');
			this.referenceList.setAttribute('id', this.id);
		},

		created() {
			this.$on('visible', (val, inputWidth) => {
				this.dropdownWidth = inputWidth + 'px';
				this.showPopper = val;
			});
		}
	};
</script>
