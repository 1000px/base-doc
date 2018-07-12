
<script >
export default {
    methods: {
     dom () {
        return document.querySelector('#scrollbar').children[0];
      },
	onclick () {
		console.log('onclick')
	}
    }
  }
</script>
<style>
	#blueTop1{
		display:none
	}
</style>

## BackTop 回到顶部
---------------------

返回页面顶部的操作按钮。

### 何时使用

当页面内容区域比较长时；

当用户需要频繁返回顶部查看相关内容时。

### 基本用法
:::demo
```html
<div>
	向下滚动可以看到右下角的灰色按钮。
	<kc-backtop :target="dom" id="blueTop1"></kc-backtop>
</div>

<script >
	export default {
		methods: {
			dom () {
				return document.querySelector('#scrollbar').children[0];
			}
		}
	}
</script>

```
:::

### 自定义样式
可以使用类名 `back-top-blue` 自定义回到顶部按钮的样式，限制宽高：40px * 40px。
:::demo
```html
<div>
	向下滚动可以看到右下角的蓝色按钮。
	<kc-backtop :target="dom" @onclick="onclick" :visible-height=100  blue></kc-backtop>
</div>
<style>
 .back-top-blue {
	 position: fixed;
	 bottom: 100px;
	 width: 40px;
	 height: 40px;
	 background: #1088e9;
	 border-radius: 4px;
 }
</style>
<script >
	export default {
		methods: {
			dom () {
				return document.querySelector('#scrollbar').children[0];
			}
		},
		onclick () {
			console.log('onclick');
		}
	}
</script>

```
:::

### BackTop Attributes

| 参数 | 说明 | 类型 |默认值 |
| ---- | ---- | ---- |---- |
| target | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | Function |window|
| visible-height | 滚动高度达到此参数值才出现 BackTop | number |400|
| onclick | 点击按钮的回调函数 | Function |-|

