<template>
  <transition-group
    tag="ul"
    :class="[
      'kc-upload-list',
      'kc-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="kc-list"
  >
    <li
      v-for="(file, index) in files"
      :class="['kc-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="index"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <img
        class="kc-upload-list__item-thumbnail"
        v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
        :src="file.url" alt=""
      >
      <a class="kc-upload-list__item-name" @click="handleClick(file)">
        <i class="kc-icon-document"></i>{{file.name}}
      </a>
      <label class="kc-upload-list__item-status-label">
        <i :class="{
          'kc-icon-upload-success': true,
          'kc-icon-circle-check': listType === 'text',
          'kc-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
        }"></i>
      </label>
      <i class="kc-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
      <i class="kc-icon-close-tip" v-if="!disabled">{{ t('el.upload.deleteTip') }}</i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
      <kc-progress
        v-if="file.status === 'uploading'"
        :type="listType === 'picture-card' ? 'circle' : 'line'"
        :stroke-width="listType === 'picture-card' ? 6 : 2"
        :percentage="parsePercentage(file.percentage)">
      </kc-progress>
      <span class="kc-upload-list__item-actions" v-if="listType === 'picture-card'">
        <span
          class="kc-upload-list__item-preview"
          v-if="handlePreview && listType === 'picture-card'"
          @click="handlePreview(file)"
        >
          <i class="kc-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="kc-upload-list__item-delete"
          @click="$emit('remove', file)"
        >
          <i class="kc-icon-delete"></i>
        </span>
      </span>
    </li>
  </transition-group>
</template>
<script>
  import Locale from '_src/mixins/locale';
  import KcProgress from './../../progress';

  export default {
  	mixins: [Locale],

  	data() {
  		return {
  			focusing: false
      };
    },
  	components: { KcProgress },

  	props: {
  		files: {
  			type: Array,
  			default() {
  				return [];
  }
  },
  		disabled: {
  			type: Boolean,
  			default: false
  },
  		handlePreview: Function,
  		listType: String
  },
  	methods: {
  		parsePercentage(val) {
  			return parseInt(val, 10);
  },
  		handleClick(file) {
  			this.handlePreview && this.handlePreview(file);
  }
  }
  };
</script>
