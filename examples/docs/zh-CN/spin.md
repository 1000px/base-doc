<style lang="scss">
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
    /*loading*/
    .loader{
        width: 30px;
        height: 30px;
        position: relative;
        margin: 0 auto;
    }
    .circular {
        -webkit-animation: rotate 2s linear infinite;
        animation: rotate 2s linear infinite;
        height: 100%;
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
    @-webkit-keyframes
    rotate {  100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes
    rotate {  100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @-webkit-keyframes
    dash {  0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }
    @keyframes
    dash {  0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }
    @-webkit-keyframes
    color {  100%, 0% {
        stroke: #d62d20;
    }
        40% {
            stroke: #0057e7;
        }
        66% {
            stroke: #008744;
        }
        80%, 90% {
            stroke: #ffa700;
        }
    }
    @keyframes
    color {  100%, 0% {
        stroke: #d62d20;
    }
        40% {
            stroke: #0057e7;
        }
        66% {
            stroke: #008744;
        }
        80%, 90% {
            stroke: #ffa700;
        }
    }
    .demo-spin{
    	.demo-spin-article h4{
			font-size: 18px;
		}
		.demo-spin-article p{
			font-size: 15px;
		}
    }
    
</style>
 <script>
 export default {
 	data () {
	 	return {
		 	spinShow: true
	 	}
 	},
 methods: {
	 handleSpinShow () {
		 this.$Spin.show();
		 setTimeout(() => {
			 this.$Spin.hide();
		 }, 3000);
	 },
	 handleSpinCustom () {
		 this.$Spin.show({
			 render: (h) => {
				 return h('div', [
					 h('i', {
					   	'class': "el-icon-loading",
						 props: {
							 type: 'load-c',
							 size: 18
						 }
					 }),
					 h('div', 'Loading')
				 ])
			 }
		 });
		 setTimeout(() => {
			 this.$Spin.hide();
		 }, 3000);
	 }
         }
     }
 </script>
## spin 加载中
当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。

### spin 基础用法
最简单使用 Spin 的方法。
:::demo
```html
<kc-spin></kc-spin>
<script>
    export default {
    }
</script>
```
:::

### spin 各种尺寸

通过设置size属性为large和small将 kc-spin 设置为大和小尺寸，不设置为默认（中）尺寸。
:::demo
```html
<kc-row :gutter="30">
  <kc-col :span="8">
	<kc-spin size="small"></kc-spin>
  </kc-col>
  <kc-col :span="8">
	<kc-spin></kc-spin>
  </kc-col>
  <kc-col :span="8">
	<kc-spin size="large"></kc-spin>
  </kc-col>
</kc-row>
```
:::

### 居中固定

在容器内部垂直居中固定，需要父级有relative或absolute。

:::demo
```html
<style>
    .demo-spin-container{
    	display: inline-block;
        width:100%;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>

<div class="demo-spin-container">
	<kc-spin fix></kc-spin>
</div>
```
:::

### 自定义内容

自定义 kc-spin 的内容，可以是简单的文字，也可以是很复杂的动画。

:::demo 
```html
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>

<kc-row>
	<kc-col class="demo-spin-col" :span="8">
		<kc-spin fix>加载中...</kc-spin>
	</kc-col>
	<kc-col class="demo-spin-col" :span="8">
		<kc-spin fix>
			<i class="el-icon-loading"></i>
			<div>Loading</div>
		</kc-spin>
	</kc-col>
	<kc-col class="demo-spin-col" :span="8">
		<kc-spin fix>
			<div class="loader">
				<svg class="circular" viewBox="25 25 50 50">
					<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
				</svg>
			</div>
		</kc-spin>
	</kc-col>
</kc-row>
```
:::

### 状态切换
:::demo
```html

<div class="demo-spin-article">
  <h4>登金陵凤凰台</h4>
  <span>李白</span>
  <article>
  	<p>凤凰台上凤凰游，凤去台空江自流。</p>
  	<p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
  	<p>三山半落青天外，二水中分白鹭洲。</p>
  	<p>总为浮云能蔽日，长安不见使人愁。</p>
  </article>
  <kc-spin size="large" fix v-if="!spinShow"></kc-spin>
</div>
<br>
切换显示状态：<kc-switch v-model="spinShow" ></kc-switch>
<style>
.demo-spin-article{
	position: relative;
}
</style>
<script>
    export default {
        data () {
            return {
                spinShow: true 
            }
        }
    }
</script>

```
:::

### 整页加载

使用内置的 $Spin 方法可以全局加载。

可以使用 Render 函数自定义显示内容.
:::demo
```html
<div>
	<kc-button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</kc-button>
	<kc-button type="primary" @click="handleSpinCustom">自定义显示内容</kc-button>
</div>

<script>
    export default {
        methods: {
            handleSpinShow () {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('i', {
                                'class': "el-icon-loading",
                                props: {
                                    type: 'load-c',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            }
        }
    }
</script>
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>

```
:::
### Attributes

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------- |
| size  | Spin尺寸，可选值为 `large` 和 `small` 或者不设置    |	String  | — | -  |
| fix  | 是否固定，需要父级有 `relative` 或 `absolute`   | boolean   | false |

