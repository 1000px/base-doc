<style>
  .demo-badge.demo-box .el-dropdown {
    vertical-align: middle;
  }
.avatar-bg {
	width: 40px;
	height: 40px;
	border-radius: 4px;
	background-color: #eee;
}
</style>

## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```html
<kc-badge :value="12" class="item">
	<div class="avatar-bg"></div>
</kc-badge>
<kc-badge :value="0" :show-zero="true" class="item">
	<div class="avatar-bg"></div>
</kc-badge>
<kc-badge :value="0" class="item">
	<div class="avatar-bg"></div>
</kc-badge>

<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### 封顶数字
可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。max默认最大值为99

```html
<kc-badge :value="10" class="item">
	<div class="avatar-bg"></div>
</kc-badge>
<kc-badge :value="100" class="item">
	<div class="avatar-bg"></div>
</kc-badge>
<kc-badge :value="100" :max="10" class="item">
	<div class="avatar-bg"></div>
</kc-badge>
<kc-badge :value="1000" :max="999" class="item">
	<div class="avatar-bg"></div>
</kc-badge>

<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### 独立使用
可以没有 slot 独立展示。

:::demo

```html
<kc-badge :value="25" class="item"></kc-badge>
<kc-badge :value="4" class="item"></kc-badge>
<kc-badge :value="100" :max="99" class="item"></kc-badge>

<style>
.item {
  margin-right: 40px;
}
.write-bg {
  backgroundColor: '#fff';
  color: #999;
  boxShadow: '0 0 0 1px #d9d9d9 inset'
}
</style>
```
:::

### 小红点
以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`is-dot`属性，它接受一个`Boolean`。

```html
<kc-badge is-dot :value="10" class="item">
	<kc-icon name="bell"></kc-icon>
</kc-badge>
<kc-badge is-dot :value="0" class="item">
	<kc-icon name="bell"></kc-icon>
</kc-badge>
<kc-badge is-dot :value="100" class="item">
	<a>链接</a>
</kc-badge>
<kc-badge is-dot :value="0" :show-zero="true" class="item">
	<kc-icon name="bell"></kc-icon>
</kc-badge>
<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### 动态
展示动态变化的效果。

:::demo value 的值可以动态获取，且 badge 支持通过属性 hidden 做的显隐设置

```html
<kc-badge :value="value">
	<div class="avatar-bg"></div>
</kc-badge>
<kc-button-group class="change-value">
<kc-button @click="value+=1">+</kc-button>
<kc-button @click="value-=1">-</kc-button>
</kc-button-group>
<kc-badge is-dot :value="1" :hidden="badge2Hidden">
	<div class="avatar-bg"></div>
</kc-badge>
<kc-button class="change-value" @click="badge2Hidden=!badge2Hidden">红点显隐</kc-button>

<script>
	export default {
		data() {
			return {
				value: 2,
				badge2Hidden: false
			}
		}
	}
</script>
```
:::

### 自定义内容
可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```html
<kc-badge value="new" class="item">
  <kc-button size="small">评论</kc-button>
</kc-badge>
<kc-badge value="hot" class="item">
  <kc-button size="small">回复</kc-button>
</kc-badge>

<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### 状态点
用于表示状态的小圆点。

:::demo 通过定义`status`实现不同颜色值表示不同状态。

```html
<div>
	<kc-badge is-dot status="success" value="1"></kc-badge>
	<kc-badge is-dot status="error" value="1"></kc-badge>
	<kc-badge is-dot status="default" value="1"></kc-badge>
	<kc-badge is-dot status="processing" value="1"></kc-badge>
	<kc-badge is-dot status="warning" value="1"></kc-badge>
</div>
<br>
<kc-badge is-dot status="success" value="1"></kc-badge><span class="status-text">Success</span>
<br>
<kc-badge is-dot status="error" value="1"></kc-badge><span class="status-text">Error</span>
<br>
<kc-badge is-dot status="default" value="1"></kc-badge><span class="status-text">Default</span>
<br>
<kc-badge is-dot status="processing" value="1"></kc-badge><span class="status-text">Processing</span>
<br>
<kc-badge is-dot status="warning" value="1"></kc-badge><span class="status-text">Warning</span>
<style>
.item {
  margin-right: 40px;
}
.status-text {
margin-left: 8px;
vertical-align: middle;
}
</style>
```
:::

<style scoped>
  .item {
    margin-right: 40px;
  }
  .change-value {
  	margin: 0 30px 0 20px
  }
</style>

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | 显示值，大于max时显示为${max}+，为0时隐藏(show-zero为默认值时)      | string, number          |          —             |    —     |
| max          |  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     99    |
| is-dot       | 小圆点    | boolean  |  —  |  false |
| hidden | 隐藏 badge | boolean | — | false |
|status	 | 设置badge为状态点 | Enum{ 'success', 'processing', 'default', 'error', 'warming' } | — | — |
| show-zero | 设置当value为0时，是否展示badge | boolean | — | false |

