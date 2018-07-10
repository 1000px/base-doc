<style lang="scss">
	.demo-avatar{
		margin-bottom:10px;
		>.kc-avatar{
			margin-right: 16px;
		}
	}
	</style>
## avatar 头像
-------------------

### 基础用法

头像有三种尺寸，两种形状可选。

:::demo 
```html
	<div>
		<div class="demo-avatar">
			<kc-avatar icon="info" size="large"></kc-avatar>
			<kc-avatar icon="info"></kc-avatar>
			<kc-avatar icon="info" size="small"></kc-avatar>
		</div>
		<div class="demo-avatar">
			<kc-avatar shape="square" icon="error" size="large"></kc-avatar>
			<kc-avatar shape="square" icon="error"></kc-avatar>
			<kc-avatar shape="square" icon="error" size="small"></kc-avatar>
		</div>
	</div>
```
:::

### 类型
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

:::demo  
```html
	<div class="demo-avatar">
		<kc-avatar icon="info"></kc-avatar>
		<kc-avatar>U</kc-avatar>
		<kc-avatar>USE</kc-avatar>
		<kc-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></kc-avatar>
		<kc-avatar style="color: #f56a00;background-color: #fde3cf">U</kc-avatar>
		<kc-avatar style="background-color: #87d068" icon="success"></kc-avatar>
	</div>
```
:::

### 带徽标的头像
通常用于消息提示。

:::demo  
```html
	<div class="demo-avatar-badge">
		<kc-badge :value="1">
			<kc-avatar shape="square" icon="info"></kc-avatar>
		</kc-badge>
		<kc-badge is-dot :show-zero="true">
			<kc-avatar shape="square" icon="error"></kc-avatar>
		</kc-badge>
	</div>
```
:::

### 自动调整字符大小
对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

:::demo  
```html
	<div class="demo-avatar">
		<kc-avatar :style="{background: color}">{{ user }}</kc-avatar>
		<kc-button size="small" @click="handleChange">Change</kc-button>
	</div>
<script>
    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    
    export default {
        data () {
            return {
                user: UserList[0],
                color: ColorList[0]
            }
        },
        methods: {
            handleChange () {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            }
        }        
    }
</script>
```
:::

### Attributes

| 属性 | 说明 | 类型 | 默认值|
|---------- |-------- |---------- |-------- |
| shape | 指定头像的形状，可选值为 circle、square | String |circle|
| size | 设置头像的大小，可选值为 large、small、default | String |default|
| src | 图片类头像的资源地址 | String | - |
| icon |设置头像的图标类型，参考 Icon 组件| String | - |
