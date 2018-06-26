<script>
  export default {
    data() {
      return {
        tags1: ['tag11', 'tag12'],
        tags2: ['tag21', 'tag22'],
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag, index) {
      	if (index === 1) {
    		this.tags1.splice(this.tags1.indexOf(tag), 1)
      	} else if (index === 2) {
    		this.tags2.splice(this.tags2.indexOf(tag), 1)
      	} else {
        	this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        }
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
      	this.inputVisible = false;
        this.inputValue = '';
      },
      
      handleClick(selected) {
      	console.log(selected, '111')
      }
    }
  }
</script>

<style>
  .demo-box.demo-tag {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding: 0 *;
    }
  }
</style>

## Tag 标签

用于标记和选择。

### 基础用法

设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。

:::demo 

```html
<kc-tag>标签一</kc-tag>
<kc-tag>标签二</kc-tag>
<kc-tag
 	v-for="tag in tags1"
 	:key="tag"
 	:type="tag"
 	closable
 	@close="handleClose(tag, 1)">
 	{{ tag }}</kc-tag>
<kc-tag
 	v-for="tag in tags2"
 	:key="tag"
 	:type="tag"
 	closable
 	:disable-transitions="true"
 	@close="handleClose(tag, 2)">
 	{{ tag }}</kc-tag>
<script>
  export default {
  	data() {
  		return {
  			tags1: ['tag11', 'tag12'],
  			tags2: ['tag21', 'tag22']
  		}
  	},
    methods: {
    	handleClose(tag, index) {
    		if (index === 1) {
				this.tags1.splice(this.tags1.indexOf(tag), 1)
			} else if (index === 2) {
				this.tags2.splice(this.tags2.indexOf(tag), 1)
			}
    	}
    }
  }
</script>
```
:::

### 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现

:::demo
```html
<kc-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</kc-tag>
<kc-input
  style="width: 90px"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</kc-input>
<kc-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</kc-button>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
```
:::

### 多彩标签

由type属性来选择tag的类型，也可以通过color属性来自定义背景色。

:::demo
```html
<kc-tag>标签一</kc-tag>
<kc-tag type="success">标签二</kc-tag>
<kc-tag type="info">标签三</kc-tag>
<kc-tag type="warning">标签四</kc-tag>
<kc-tag type="danger">标签五</kc-tag>
<br><br>
<kc-tag color="red">red</kc-tag>
<kc-tag color="orange">orange</kc-tag>
<kc-tag color="gold">gold</kc-tag>
<kc-tag color="green">green</kc-tag>
<kc-tag color="blue">blue</kc-tag>
<kc-tag color="black">black</kc-tag>
<br><br>
<kc-tag color="#f50">#f50</kc-tag>
<kc-tag color="#2db7f5">#2db7f5</kc-tag>
<kc-tag color="#87d068">#87d068</kc-tag>
<kc-tag color="#108ee9">#108ee9</kc-tag>
```
:::

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<kc-tag closable>默认标签</kc-tag>
<kc-tag size="medium" closable>中等标签</kc-tag>
<kc-tag size="small" closable>小型标签</kc-tag>
<kc-tag size="mini" closable>超小标签</kc-tag>
```
:::

### 可选择

可以通过`click`事件，实现 Tag 组件的选中状态，并返回当前的选中状态值`selected`。

:::demo

```html
<kc-tag selected @click="handleClick">标签1</kc-tag>
<kc-tag type="success" @click="handleClick">标签2</kc-tag>
<kc-tag color="red" @click="handleClick">标签3</kc-tag>

<script >
export default {
	methods: {
		handleClick(selected) {
			console.log(selected)
		}
	}
}
</script>
```
:::

### 热门标签

选中感兴趣的话题。

:::demo

```html
<h6 style="display: inline">catogories: </h6>
<kc-tag selected @click="handleClick">Movie</kc-tag>
<kc-tag selected @click="handleClick">Books</kc-tag>
<kc-tag selected @click="handleClick">Music</kc-tag>
<kc-tag selected @click="handleClick">Sports</kc-tag>

<script >
export default {
	methods: {
		handleClick(selected) {
			console.log(selected)
		}
	}
}
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | success/info/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| disable-transitions | 是否禁用渐变动画 | boolean | — | false |
| hit | 是否有边框描边 | boolean | — | false |
| color | 背景色，支持 colorName，rgb，hex 三种颜色类型，不带透明度的颜色 | string | — | — |
| size | 尺寸 | string | medium / small / mini | — |
| selected | 是否选中 | boolean | — | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭 Tag 时触发的事件 | — |
| click | 点击 Tag 时触发的事件 | 标签的选中状态值 selected |

