<script>
  import Alert from './../../../package/alert/index';
  export default {
    components: {
		alert: Alert
	},
    methods: {
      close() {
         alert('Hello World!');
      }
    }
  }
</script>
<style>
  .demo .w-alert {
    margin: 20px 0 20px 0;
  }
  .w-alert {
    width: 600px;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: flex;
    align-items: center;
    transition: opacity .2s;
  }
  .w-alert__content {
    display: table-cell;
    padding: 0 8px;
  }
  .w-alert__closebtn {
    font-size: 12px;
    color: #c0c4cc;
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
  }
  .w-alert--success {
    background: #F0F9EC;
    border: 1px solid #D5EEC9;
    border-radius: 4px;
  }
  .w-alert--info {
    background: #EDF9FF;
    border: 1px solid #CAE4FF;
    border-radius: 4px;
  }
  .w-alert--warning {
    background: #FFF8ED;
    border: 1px solid #FFE4B0;
    border-radius: 4px;
  }
  .w-alert--error {
    background: #FFF0F0;
    border: 1px solid #FFD8D8;
    border-radius: 4px;
  }
  .w-alert--success .w-alert__title,
  .w-alert--success .w-alert__description {
    color: #63C532;
  }
  .w-alert--info .w-alert__title,
  .w-alert--info .w-alert__description {
    color: #4999FF;
  }
  .w-alert--warning .w-alert__title,
  .w-alert--warning .w-alert__description {
    color: #FAAD14;
  }
  .w-alert--error .w-alert__title,
  .w-alert--error .w-alert__description {
    color: #F36464;;
  }
</style>

## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

:::demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<div class="demo">
    <alert
      title="成功提示的文案"
      type="success">
    </alert>
    <alert
      title="消息提示的文案"
      type="info">
    </alert>
    <alert
      title="警告提示的文案"
      type="warning">
    </alert>
    <alert
      title="错误提示的文案"
      type="error">
    </alert>
</div>
```
:::

### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

:::demo
```html
<div class="demo">
    <alert
      title="成功提示的文案"
      type="success"
      close-text="关闭"
      @close="close">
    </alert>
    <alert
      title="消息提示的文案"
      type="info">
    </alert>
    <alert
      title="警告提示的文案"
      type="warning">
    </alert>
    <alert
      title="错误提示的文案"
      type="error">
    </alert>
</div>
```
:::

### 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

:::demo
```html
<div class="demo">
    <alert
      title="成功提示的文案"
      description="成功提示的辅助描述信息"
      type="success">
    </alert>
    <alert
      title="消息提示的文案"
      description="消息提示的辅助描述信息"
      type="info">
    </alert>
    <alert
      title="警告提示的文案"
      description="警告提示的辅助描述信息"
      type="warning">
    </alert>
    <alert
      title="错误提示的文案"
      description="错误提示的辅助描述信息"
      type="error">
    </alert>
</div>
```
:::

### 含有辅助性文字介绍-可关闭

含有辅助性文字介绍的警告提示，亦可关闭。

:::demo
```html
<div class="demo">
    <alert
      title="成功提示的文案"
      description="成功提示的辅助描述信息"
      type="success">
    </alert>
    <alert
      title="消息提示的文案"
      description="消息提示的辅助描述信息"
      type="info">
    </alert>
    <alert
      title="警告提示的文案"
      description="警告提示的辅助描述信息"
      type="warning">
    </alert>
    <alert
      title="错误提示的文案"
      description="错误提示的辅助描述信息"
      type="error">
    </alert>
</div>
```
:::

### 带有icon

表示某种状态时提升可读性。

:::demo
```html
<div class="demo">
    <alert
      title="成功提示的文案"
      type="success"
      show-icon
      >
    </alert>
    <alert
      title="消息提示的文案"
      type="info"
      show-icon
      >
    </alert>
    <alert
      title="警告提示的文案"
      type="warning"
      show-icon
      >
    </alert>
    <alert
      title="错误提示的文案"
      type="error"
      show-icon
      >
    </alert>
</div>
```
:::

### 带有icon和辅助性文字介绍

含有辅助性文字介绍的警告提示，亦可关闭。

:::demo
```html
<div class="demo">
    <alert
      title="成功提示的文案"
      description="成功提示的辅助描述信息"
      type="success"
      show-icon
      >
    </alert>
    <alert
      title="消息提示的文案"
      description="消息提示的辅助描述信息"
      type="info"
      show-icon
      >
    </alert>
    <alert
      title="警告提示的文案"
      description="警告提示的辅助描述信息"
      type="warning"
      show-icon
      >
    </alert>
    <alert
      title="错误提示的文案"
      description="错误提示的辅助描述信息"
      type="error"
      show-icon
      >
    </alert>
</div>
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
