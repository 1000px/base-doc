## Layout 布局
:::demo
```html
<template>
<div class="layout">
    <kc-layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </kc-layout>

    <kc-layout>
        <Header>Header</Header>
        <kc-layout>
            <Sider hide-trigger>Sider</Sider>
            <Content>Content</Content>
        </kc-layout>
        <Footer>Footer</Footer>
    </kc-layout>

    <kc-layout>
        <Header>Header</Header>
        <kc-layout>
            <Content>Content</Content>
            <Sider hide-trigger>Sider</Sider>
        </kc-layout>
        <Footer>Footer</Footer>
    </kc-layout>

    <kc-layout>
        <Sider hide-trigger>Sider</Sider>
        <kc-layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </kc-layout>
    </kc-layout>
</div>
</template>
<script>
    export default {

    }
</script>
```
:::
