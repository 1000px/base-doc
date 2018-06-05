
<script>
  import KcBreadcrumb from './../../../package/breadcrumb/index';
  import KcBreadcrumbItem from './../../../package/breadcrumb-item/index';
  export default {
    components: {
      KcBreadcrumb: KcBreadcrumb,
      KcBreadcrumbItem: KcBreadcrumbItem
    }

  }
</script>
<style>
  .demo .el-breadcrumb{
    margin: 20px 0  20px 0;
  }
 
</style>

    }
## breadcrumb 面包屑

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。


:::demo
```
<div class="demo">
    <kc-breadcrumb separator="/">
        <kc-breadcrumb-item :to="{ path: '/' }">首页</kc-breadcrumb-item>
        <kc-breadcrumb-item><a href="/">活动管理</a></kc-breadcrumb-item>
        <kc-breadcrumb-item>活动列表</kc-breadcrumb-item>
        <kc-breadcrumb-item>活动详情</kc-breadcrumb-item>
    </kc-breadcrumb>
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

