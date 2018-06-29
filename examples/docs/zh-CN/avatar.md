## avatar 头像
-------------------

### 基础用法:
:::demo 头像有三种尺寸，两种形状可选。
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

### 类型:
:::demo  支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
```html
	<div class="demo-avatar">
		<kc-avatar icon="info"></kc-avatar>
		<kc-avatar>U</kc-avatar>
		<kc-avatar>USER</kc-avatar>
		<kc-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></kc-avatar>
		<kc-avatar style="color: #f56a00;background-color: #fde3cf">U</kc-avatar>
		<kc-avatar style="background-color: #87d068" icon="person"></kc-avatar>
	</div>
```
:::

### 带徽标的头像:
:::demo  通常用于消息提示。
```html
	<div class="demo-avatar-badge">
		<kc-badge :value="1">
			<kc-avatar shape="square" icon="info"></kc-avatar>
		</kc-badge>
		<kc-badge is-dot>
			<kc-avatar shape="square" icon="error"></kc-avatar>
		</kc-badge>
	</div>
```
:::

### 自动调整字符大小
:::demo  对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。
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
