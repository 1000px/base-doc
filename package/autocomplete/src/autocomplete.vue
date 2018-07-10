<template>
	<div v-if="isConfigOption"
		class="kc-autocomplete"
    v-clickoutside="close"
    aria-haspopup="listbox"
    role="combobox"
    :aria-expanded="suggestionVisible"
    :aria-owns="id"
	>
		<kc-input
			ref="input"
			v-bind="$props"
			@compositionstart.native="handleComposition"
			@compositionupdate.native="handleComposition"
			@compositionend.native="handleComposition"
			@input="handleInputChange"
			@focus="handleInputFocus"
			@blur="handleInputBlur"
			@keydown.up.native.prevent="highlight(highlightedIndex - 1)"
			@keydown.down.native.prevent="highlight(highlightedIndex + 1)"
			@keydown.enter.native="handleKeyEnter"
			@keydown.native.tab="close"
			:label="label"
		>
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </template>
    </kc-input>
		<el-autocomplete-suggestions
			v-if="feedbacks.length > 0"
      visible-arrow
      :class="[popperClass ? popperClass : '']"
      :popper-options="popperOptions"
      ref="suggestions"
      :placement="placement"
      :id="id">
      <li
        v-for="(item, index) in feedbacks"
        :key="index"
        :class="{'highlighted': highlightedIndex === index}"
        @click="select(item)"
        :id="`${id}-item-${index}`"
        role="option"
        :aria-selected="highlightedIndex === index"
      >
        <slot :item="item">
          {{ item }}
        </slot>
      </li>
    </el-autocomplete-suggestions>
	</div>

  <div
		v-else
    class="kc-autocomplete"
    v-clickoutside="close"
    aria-haspopup="listbox"
    role="combobox"
    :aria-expanded="suggestionVisible"
    :aria-owns="id"
  >
    <kc-input
      ref="input"
      v-bind="$props"
      @compositionstart.native="handleComposition"
      @compositionupdate.native="handleComposition"
      @compositionend.native="handleComposition"
      @input="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.up.native.prevent="highlight(highlightedIndex - 1)"
      @keydown.down.native.prevent="highlight(highlightedIndex + 1)"
      @keydown.enter.native="handleKeyEnter"
      @keydown.native.tab="close"
      :label="label"
    >
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </template>
    </kc-input>
    <el-autocomplete-suggestions
			v-if="queryModel"
      visible-arrow
      class="kc-autocomplete-suggestion-query-model"
			style="width:auto;"
			ref="suggestions"
      placement="bottom-end"
      :id="id">

			<div
				class="query-model-group"
				v-for="(item, index) in dataSource"
        :key="index"
			>
        <div class="query-model-title-outer">
					<span class="query-model-title">{{item.title}}</span>
					<span>
						<a
							style="float: right"	
							:href="item.searchUrl" 
							target="_blank"
							class="query-model-search-url"
						>
							{{item.searchUrlText}}
						</a>
					</span>
				</div>
				<div>
					<li
						v-for="(item, index) in item.children"
						:key="index"
						:class="{'highlighted': highlightedIndex === index}"
						@click="select(item)"
						:id="`${id}-item-${index}`"
						role="option"
						:aria-selected="highlightedIndex === index"
					>
						<span>{{item.title}}</span>
						<span style="float:right;">{{item.description}}</span>
					</li>
				</div>
			</div>	

				<!-- <li
					v-else
					class="query-model-single"
					v-for="(item) in queryList"
					:key="item.index"
				>
					<span>{{item.index}}</span>
					<span style="float:right;">{{item.result}}</span>
				</li> -->

    </el-autocomplete-suggestions>
    <el-autocomplete-suggestions
			v-else
      visible-arrow
      :class="[popperClass ? popperClass : '']"
      :popper-options="popperOptions"
      ref="suggestions"
      :placement="placement"
      :id="id">

      <li
        v-for="(item, index) in suggestions"
        :key="index"
        :class="{'highlighted': highlightedIndex === index}"
        @click="select(item)"
        :id="`${id}-item-${index}`"
        role="option"
        :aria-selected="highlightedIndex === index"
      >
        <slot :item="item">
          {{ item[valueKey] }}
        </slot>
      </li>
    </el-autocomplete-suggestions>
  </div>
</template>
<script>
	import debounce from 'throttle-debounce/debounce';
	import KcInput from './../../input';
	import Clickoutside from '_src/utils/clickoutside';
	import ElAutocompleteSuggestions from './autocomplete-suggestions.vue';
	import Emitter from '_src/mixins/emitter';
	import Migrating from '_src/mixins/migrating';
	import { generateId } from '_src/utils/util';
	import Focus from '_src/mixins/focus';

	export default {
		name: 'KcAutocomplete',

		mixins: [Emitter, Focus('input'), Migrating],

		componentName: 'KcAutocomplete',

		components: {
			KcInput,
			ElAutocompleteSuggestions
		},
		directives: { Clickoutside },
		props: {
			valueKey: {
				type: String,
				default: 'value'
			},
			popperClass: String,
			searchUrl: String,
			dataSource: Array,
			searchUrlText: String,
			itemSuffix: Array,
			queryList: Array,
			isConfigOption: Boolean,
			popperOptions: Object,
			placeholder: String,
			disabled: Boolean,
			queryModel: Boolean,
			queryModelLike: Boolean,
			name: String,
			size: String,
			value: String,
			maxlength: Number,
			minlength: Number,
			autofocus: Boolean,
			fetchSuggestions: Function,
			triggerOnFocus: {
				type: Boolean,
				default: true
			},
			customItem: String,
			selectWhenUnmatched: {
				type: Boolean,
				default: false
			},
			prefixIcon: String,
			suffixIcon: String,
			label: String,
			debounce: {
				type: Number,
				default: 300
			},
			placement: {
				type: String,
				default: 'bottom-start'
			}
		},
		data() {
			return {
				activated: false,
				isOnComposition: false,
				suggestions: [],
				feedbacks: [],
				loading: false,
				highlightedIndex: -1
			};
		},
		computed: {
			suggestionVisible() {
				const suggestions = this.suggestions;
				let isValidData = Array.isArray(suggestions) && suggestions.length > 0;
				return (isValidData || this.loading) && this.activated;
			},
			id() {
				return `kc-autocomplete-${generateId()}`;
			}
		},
		watch: {
			suggestionVisible(val) {
				if (this.isConfigOption) {
					this.handleShowSuggestion(false);
					return;
				}
				this.handleShowSuggestion(val);
			}
		},
		methods: {
			getMigratingConfig() {
				return {
					props: {
						'custom-item': 'custom-item is removed, use scoped slot instead.',
						'props': 'props is removed, use value-key instead.'
					}
				};
			},
			getData(queryString) {
				if (this.queryModel) {
					this.loading = false;
					this.suggestions = this.dataSource;
					return;
				}
				this.loading = true;

				this.fetchSuggestions(queryString, (suggestions) => {
					this.loading = false;
					if (this.isConfigOption) {
						this.suggestions = this.feedbacks;
					} else {
						if (Array.isArray(suggestions)) {
							this.suggestions = suggestions;
						} else {
							console.error('autocomplete suggestions must be an array');
						}
					}
				});
			},
			handleComposition(event) {
				if (event.type === 'compositionend') {
					this.isOnComposition = false;
					this.handleChange(event.target.value);
				} else {
					this.isOnComposition = true;
				}
			},
			handleChange(value) {
				this.$emit('input', value);
				if (this.isOnComposition || (!this.triggerOnFocus && !value)) {
					this.suggestions = [];
					return;
				}
				this.debouncedGetData(value);
			},
			handleInputChange(value) {
				if (value.length === 0) {
					this.handleShowSuggestion(false);
				} else {
					if (this.handleCheckEmail(value) > 0) {
						this.handleShowSuggestion(false);
						return;
					}
					let ret = [];
					this.itemSuffix.map(item => {
						let temp = item.indexOf('.com') > 0 ? '@' : '';
						if(item.indexOf('@') > 0) {
							temp = ''
						}
						let option = value +	temp + item;
						ret.push(option);
					});
					this.feedbacks = ret;
					this.handleShowSuggestion(true);
				}
			},
			handleCheckEmail (val) {
				return val.indexOf('@')
			},
			handleFocus(event) {
				if (this.queryModel) {
					this.handleShowSuggestion(true);
					return;
				}
				this.activated = true;
				this.$emit('focus', event);
				if (this.triggerOnFocus) {
					this.debouncedGetData(this.value);
				}
			},
			handleInputFocus(event) {
				this.activated = true;
				this.$emit('focus', event);
				let val = event.target.value;
				if (val.length > 0) {
					this.handleShowSuggestion(true);
				}
			},
			handleBlur(event) {
				this.$emit('blur', event);
			},
			handleInputBlur(event) {
				this.$emit('blur', event);
			},
			close(e) {
				this.activated = false;
				if(this.isConfigOption || this.queryModel) {
					this.handleShowSuggestion(false);
				}
			},
			handleKeyEnter(e) {
				if (this.suggestionVisible && this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
					e.preventDefault();
					this.select(this.suggestions[this.highlightedIndex]);
				} else if (this.selectWhenUnmatched) {
					this.$emit('select', {value: this.value});
					this.$nextTick(_ => {
						this.suggestions = [];
						this.highlightedIndex = -1;
					});
				}
			},
			select(item) {
				if (this.queryModel) {
					this.$refs.input.$refs.input.value = item.title;
				
					this.$nextTick(_ => {
						this.handleShowSuggestion(false);
						this.highlightedIndex = -1;
					});
					return;
				}
				if (this.isConfigOption) {
					this.$refs.input.$refs.input.value = item;
					this.$nextTick(_ => {
						this.handleShowSuggestion(false);
						this.highlightedIndex = -1;
					});
				} else {
					this.$emit('input', item[this.valueKey]);
					this.$emit('select', item);
					this.$nextTick(_ => {
						this.suggestions = [];
						this.highlightedIndex = -1;
					});
				}
			},
			highlight(index) {
				if (!this.suggestionVisible || this.loading) { return; }
				if (index < 0) {
					this.highlightedIndex = -1;
					return;
				}
				if (index >= this.suggestions.length) {
					index = this.suggestions.length - 1;
				}
				const suggestion = this.$refs.suggestions.$el.querySelector('.kc-autocomplete-suggestion__wrap');
				const suggestionList = suggestion.querySelectorAll('.kc-autocomplete-suggestion__list li');

				let highlightItem = suggestionList[index];
				let scrollTop = suggestion.scrollTop;
				let offsetTop = highlightItem.offsetTop;

				if (offsetTop + highlightItem.scrollHeight > (scrollTop + suggestion.clientHeight)) {
					suggestion.scrollTop += highlightItem.scrollHeight;
				}
				if (offsetTop < scrollTop) {
					suggestion.scrollTop -= highlightItem.scrollHeight;
				}
				this.highlightedIndex = index;
				this.$el.querySelector('.kc-input__inner').setAttribute('aria-activedescendant', `${this.id}-item-${this.highlightedIndex}`);
			},
			handleShowSuggestion (isShow) {
				this.broadcast('ElAutocompleteSuggestions', 'visible', [isShow, this.$refs.input.$refs.input.offsetWidth]);
			}
		},
		mounted() {
			if (this.isConfigOption) {
				let ret = []
				if (this.itemSuffix.length > 0) {
					ret = this.itemSuffix;
				}
				this.feedbacks = ret;
			}
			this.debouncedGetData = debounce(this.debounce, (val) => {
				this.getData(val);
			});
			this.$on('item-click', item => {
				this.select(item);
			});
			let $input = this.$el.querySelector('.kc-input__inner');
			$input.setAttribute('role', 'textbox');
			$input.setAttribute('aria-autocomplete', 'list');
			$input.setAttribute('aria-controls', 'id');
			$input.setAttribute('aria-activedescendant', `${this.id}-item-${this.highlightedIndex}`);
		},
		beforeDestroy() {
			this.$refs.suggestions.$destroy();
		}
	};
</script>

