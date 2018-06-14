<script>
  export default {
    data () {
      return {
        itemIcon: 'el-icon-setting'
      }
    }
  }
</script>
<style>
  .markcss a:link,
  .markcss a:visited {
    color: #575A5F !important;
  }

</style>
## breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

### 基本用法

:::demo
```html
  <kc-breadcrumb>
    <kc-breadcrumb-item :to="{ path: '/' }">首页</kc-breadcrumb-item>
    <kc-breadcrumb-item><a href="/">活动管理</a></kc-breadcrumb-item>
    <kc-breadcrumb-item>活动列表</kc-breadcrumb-item>
    <kc-breadcrumb-item>活动详情</kc-breadcrumb-item>
  </kc-breadcrumb>
```
:::

### 分隔符

:::demo
```html
  <kc-breadcrumb separator=">" >
    <kc-breadcrumb-item :to="{ path: '/' }">首页</kc-breadcrumb-item>
    <kc-breadcrumb-item><a href="/">活动管理</a></kc-breadcrumb-item>
    <kc-breadcrumb-item>活动列表</kc-breadcrumb-item>
    <kc-breadcrumb-item>活动详情</kc-breadcrumb-item>
  </kc-breadcrumb>
```
:::

### 图标分隔符

图标放在文字的前面。

:::demo
```html
  <kc-breadcrumb>
    <kc-breadcrumb-item item-icon="el-icon-menu">首页</kc-breadcrumb-item>
    <kc-breadcrumb-item>活动管理</kc-breadcrumb-item>
    <kc-breadcrumb-item>活动列表</kc-breadcrumb-item>
    <kc-breadcrumb-item>活动详情</kc-breadcrumb-item>
  </kc-breadcrumb>
```
:::

### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |
| separator-class | 图标分隔符 class | string | — | - |

### Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
| tem-icon   | 面包屑单个项目前面的icon的class | string | — | — |

