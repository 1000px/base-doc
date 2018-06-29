<script>
  import dateUtil from '_src/utils/date'
  export default {
    data() {
      return {
        currentDate: dateUtil.format(new Date(), 'yyyy-MM-dd HH:mm')
      };
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .item {
    margin-bottom: 8px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix {
    @utils-clearfix;
  }

  .box-card {
    width: 300px;
  }
  .box-card1 {
    width: auto;
  }
</style>
## Card 卡片
-------------------

将信息聚合在卡片容器中展示。

### 基础用法


包含标题，内容和操作。

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。
```html
<kc-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <kc-button style="float: right; padding: 1px 0 0" type="text">操作按钮</kc-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</kc-card>

<style>
  .item {
    margin-bottom: 8px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### 无边框

在有色背景上使用无边框卡片

:::demo Card 可以通过设置`bordered`值为 false 来去除卡片的外边框。
```html
<div style="background-color: #ECECEC; padding: 30px;">
<kc-card class="box-card" :bordered="false">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</kc-card>

</div>
<style>
  .item {
    margin-bottom: 8px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### 简单卡片

卡片可以只有内容区域。

:::demo
```html
<kc-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</kc-card>

<style>
  .item {
    // padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### 带图片

可配置定义更丰富的内容展示。

:::demo 配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。
```html
<kc-row>
  <kc-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <kc-card :body-style="{ padding: '0px' }">
      <img src="/examples/assets/images/hamburger.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <kc-button type="text" class="button">操作按钮</kc-button>
        </div>
      </div>
    </kc-card>
  </kc-col>
</kc-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
```
:::

### 卡片阴影

可对阴影的显示进行配置。

:::demo 通过`shadow`属性设置卡片阴影出现的时机：`always`、`hover`或`never`。
```html
<kc-row :gutter="12">
  <kc-col :span="8">
    <kc-card shadow="always">
      总是显示
    </kc-card>
  </kc-col>
  <kc-col :span="8">
    <kc-card shadow="hover">
      鼠标悬浮时显示
    </kc-card>
  </kc-col>
  <kc-col :span="8">
    <kc-card shadow="never">
      从不显示
    </kc-card>
  </kc-col>
</kc-row>
```
:::

### 卡片嵌套

卡片内部可以放置卡片，展示多层级的结构的信息

:::demo
```html
<kc-card class="box-card1">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
  </div>
  <h5>嵌套卡片</h5>
  <kc-card class="box-card1" type="inner">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <kc-button style="float: right; padding: 1px 0 0" type="text">操作按钮</kc-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </kc-card>
  <kc-card class="box-card1" type="inner">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <kc-button style="float: right; padding: 1px 0 0" type="text">操作按钮</kc-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </kc-card>
</kc-card>

<style>
  .item {
    margin-bottom: 8px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| body-style | 设置 body 的样式| object| — | { padding: '20px' } |
| shadow | 设置阴影显示时机 | string | always / hover / never | always |
| bordered | 是否有边框 | boolean | — | true |
| type | 卡片类型，嵌套卡片时可选用 | string | inner | — |
