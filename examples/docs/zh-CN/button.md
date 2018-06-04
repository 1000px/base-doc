<script>
  export default {
	data() {
		return {
			list: null,
				options: [{
				  value: '选项1',
				  label: '黄金糕'
				}, {
				  value: '选项2',
				  label: '双皮奶'
				}, {
				  value: '选项3',
				  label: '蚵仔煎'
				}, {
				  value: '选项4',
				  label: '龙须面'
				}, {
				  value: '选项5',
				  label: '北京烤鸭'
				}]
		}
	}

  }
</script>
<style>
  .demo-box.demo-alert .el-alert {
    margin: 20px 0 0;
  }

  .demo-box.demo-alert .el-alert:first-child {
    margin: 0;
  }
  .demo-box.demo-button {
      .el-row {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-button + .el-button {
        margin-left: 10px;
      }
      .el-button-group {
        .el-button + .el-button {
          margin-left: 0;
        }

        & + .el-button-group {
          margin-left: 10px;
        }
      }
    }
</style>

## button 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。


:::demo
```

  <k-button>默认按钮</k-button>
  <k-button type="primary">主要按钮</k-button>
  <k-button type="success">成功按钮</k-button>
  <k-button type="info">信息按钮</k-button>
  <k-button type="warning">警告按钮</k-button>
  <k-button type="danger">危险按钮</k-button>


```
:::
### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字。也可通过默认 slot 传入 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| center | 文字是否居中 | boolean | — | true |
| close-text | 关闭按钮自定义文本 | string | — | — |
| show-icon | 是否显示图标 | boolean | — | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |
