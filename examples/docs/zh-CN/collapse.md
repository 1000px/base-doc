<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        activeName: '2',
        activeNames1: ['1', '2'],
        activeName1: '1',
		customStyle: {
			background: '#f7f7f7',
			borderRadius: '4px',
			marginBottom: '24px',
			border: 0,
			overflow: 'hidden',
		}
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style>
  .demo-collapse {
    .kc-collapse-item__header {
      .header-icon {
        margin-left: 5px;
      }
    }
  }
</style>

## Collapse 折叠面板
-------------------

通过折叠面板收纳内容区域

### 基础用法

可同时展开多个面板，面板之间不影响

:::demo
```html
<kc-collapse v-model="activeNames" @change="handleChange">
  <kc-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </kc-collapse-item>
  <kc-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </kc-collapse-item>
  <kc-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </kc-collapse-item>
  <kc-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </kc-collapse-item>
</kc-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
```
:::

### 手风琴效果

每次只能展开一个面板

:::demo 通过 `accordion` 属性来设置是否以手风琴模式显示。当不传value(v-model)时，默认打开第一个(如第二个例子)。
```html
<kc-collapse v-model="activeName" accordion>
  <kc-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </kc-collapse-item>
  <kc-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </kc-collapse-item>
  <kc-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </kc-collapse-item>
  <kc-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </kc-collapse-item>
</kc-collapse>
<br>
<h5>不传value值时，默认打开第一个</h5>
<kc-collapse accordion>
  <kc-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </kc-collapse-item>
  <kc-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </kc-collapse-item>
  <kc-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </kc-collapse-item>
  <kc-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </kc-collapse-item>
</kc-collapse>
<script>
  export default {
    data() {
      return {
        activeName: '2'
      };
    }
  }
</script>
```
:::

### 面板嵌套

面板可以嵌套面板

:::demo
```html
<kc-collapse v-model="activeNames1">
	<kc-collapse-item title="一级面板" name="1">
		<kc-collapse v-model="activeName1">
          <kc-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </kc-collapse-item>
		</kc-collapse>
	</kc-collapse-item>
	<kc-collapse-item title="二级面板" name="2">
		<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
	</kc-collapse-item>
</kc-collapse>
<script>
  export default {
    data() {
      return {
        activeNames1: ['1', '2'],
        activeName1: '1' // 取值类型 string/array
      };
    }
  }
</script>
```
:::

### 简洁风格

一套没有边框和头部背景色的简洁样式

:::demo
```html
<kc-collapse v-model="activeNames" :bordered="false">
  <kc-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </kc-collapse-item>
  <kc-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </kc-collapse-item>
  <kc-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </kc-collapse-item>
  <kc-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </kc-collapse-item>
</kc-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    }
  }
</script>
```
:::
### 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。
还可以通过'custom-style' 属性自定义各个面板的样式，可以结合bordered使用

:::demo
```html
<kc-collapse :bordered="false" accordion>
  <kc-collapse-item :custom-style="customStyle">
    <template slot="title">
      一致性 Consistency<i class="header-icon kc-icon-info"></i>
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </kc-collapse-item>
  <kc-collapse-item title="反馈 Feedback" :custom-style="customStyle">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </kc-collapse-item>
  <kc-collapse-item title="效率 Efficiency" :custom-style="customStyle">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </kc-collapse-item>
  <kc-collapse-item title="可控 Controllability" :custom-style="customStyle">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </kc-collapse-item>
</kc-collapse>
<script>
	export default {
		data() {
			return {
				customStyle: {
					background: '#f7f7f7',
					borderRadius: 4,
					marginBottom: 24,
					border: 0,
					overflow: 'hidden',
				}
			}
		}
	}
</script>
```
:::

### 隐藏箭头

可以通过show-arrow隐藏组件的箭头图标

:::demo
```html
<kc-collapse v-model="activeNames">
  <kc-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </kc-collapse-item>
  <kc-collapse-item title="反馈 Feedback" name="2" :show-arrow="false">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </kc-collapse-item>
</kc-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    }
  }
</script>
```
:::

### Collapse Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| accordion | 是否手风琴模式 | boolean | — | false |
| value | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`) | string/array | — | 默认值无，当accordion模式下时，默认打开第一个 |
| bordered | 是否呈现边框和头部背景色，取值false时是简洁风格 | boolean | — | true |

### Collapse Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 当前激活面板改变时触发(如果是手风琴模式，参数 `activeNames` 类型为`string`，否则为`array`) | (activeNames: array\|string) |

### Collapse Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 唯一标志符 | string/number | — | — |
| title | 面板标题 | string | — | — |
| show-arrow | 隐藏箭头图标 | boolean | — | true |
| custom-style | 自定义各个面板的样式，可以结合bordered使用 | object | — | — |
