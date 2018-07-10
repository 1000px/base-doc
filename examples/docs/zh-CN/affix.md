<style>
  .demo-kc-affix{
    display: inline-block;
    color: #fff;
    padding: 10px 30px;
    text-align: center;
    background: rgba(0,153,229,.9);
  }
</style>
### affix 固钉

### 基本用法

简单使用，当元素不可见时，直接固定在最顶端。

:::demo
```html
<kc-affix>
  <span class="demo-kc-affix">固定在最顶部</span>
</kc-affix>
```
:::

### 顶部偏移

:::demo
```html
<kc-affix :offset-top="100">
  <span class="demo-kc-affix">固定在距离顶部 100px 的位置</span>
</kc-affix>
```
:::

### 底部偏移

:::demo
```html
<kc-affix :offset-bottom="50">
  <span class="demo-kc-affix">固定在距离底部 50px 的位置</span>
</kc-affix>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| offset-top | 距离窗口顶部达到指定偏移量后触发 | Number | — | 0 |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 | Number | — | — |