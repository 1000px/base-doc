<style>
.layout{
	border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.qwe{
margin:10px 0;
height:300px;
}
</style>

## Layout 布局
:::demo
```html
<div class="layout">
<!--<div class="qwe">-->
	<kc-layout>
        <kc-header>kc-header</kc-header>
        <kc-layout>
			<kc-sider hide-trigger>kc-sider</kc-sider>
			<kc-content>kc-content</kc-content>
		</kc-layout>
            
        <kc-footer>Footer</kc-footer>
    </kc-layout>
    <!--</div>-->
</div>
```
:::

:::demo
```html
<div class="layout">

	<kc-layout>
        <kc-header>kc-header</kc-header>
        <kc-content>kc-content</kc-content>
        <kc-footer>Footer</kc-footer>
    </kc-layout>

	
</div>
```

:::
