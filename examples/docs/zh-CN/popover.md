<script>
  export default {
    data() {
      return {
        visible2: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        gridData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $info: true
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $positive: true
        }],
        gridData3: [{
          tag: '家',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '家',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '家',
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    }
  };
</script>

<style lang="scss">
  .demo-box.demo-popover {
    .kc-popover + .kc-popover {
      margin-left: 10px;
    }
    .kc-input {
      width: 360px;
    }
    .kc-button {
      margin-left: 10px;
      margin-bottom:10px;
    }
	
  }
</style>

## Popover 弹出框
-------------------

### 基础用法
Popover 的属性与 Tooltip 很类似，它们都是基于`Vue-popper`开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

:::demo `trigger`属性用于设置何时触发 Popover，支持四种触发方式：`hover`，`click`，`focus` 和 `manual`。对于触发 Popover 的元素，有两种写法：使用 `slot="reference"` 的具名插槽，或使用自定义指令`v-popover`指向 Popover 的索引`ref`。
```html
<kc-popover
  placement="top-start"
  title="Title"
  width="200"
  trigger="hover"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  <kc-button slot="reference">鼠标划入</kc-button>
</kc-popover>

<kc-popover
  placement="bottom"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  <kc-button slot="reference">click 激活</kc-button>
</kc-popover>

<kc-popover
  ref="popover"
  placement="right"
  title="标题"
  width="200"
  trigger="focus"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</kc-popover>
<kc-button v-popover:popover>focus 激活</kc-button>

```
:::
### 出现位置
:::demo
```html
<div class="box">
  <div class="top">
    <kc-popover class="item" placement="top-end" content="Top Left 提示文字" title="Title" width="200" trigger="hover">
      <kc-button  slot="reference">上左</kc-button>
    </kc-popover>
    <kc-popover class="item"  content="Top Center 提示文字" title="Title" placement="top" width="200" trigger="hover">
      <kc-button  slot="reference">上中</kc-button>
    </kc-popover>
    <kc-popover class="item"  content="Top Right 提示文字" title="Title" placement="top-start" width="200" trigger="hover">
      <kc-button  slot="reference">上右</kc-button>
    </kc-popover>
  </div>
  <div class="left">
    <kc-popover class="item"  content="Left Top 提示文字" title="Title" placement="left-start" width="200" trigger="hover">
      <kc-button  slot="reference">左上</kc-button>
    </kc-popover>
    <kc-popover class="item"  content="Left Center 提示文字" title="Title" placement="left" width="200" trigger="hover">
      <kc-button  slot="reference">左中</kc-button>
    </kc-popover>
    <kc-popover class="item"  content="Left Bottom 提示文字" title="Title" placement="left-end" width="200" trigger="hover">
      <kc-button  slot="reference">左下</kc-button>
    </kc-popover>
  </div>

  <div class="right">
    <kc-popover class="item"  content="Right Top 提示文字" title="Title" placement="right-start" width="200" trigger="hover">
      <kc-button  slot="reference">右上</kc-button> 
    </kc-popover>
    <kc-popover class="item"  content="Right Center 提示文字" title="Title" placement="right" width="200" trigger="hover">
      <kc-button  slot="reference">右中</kc-button>
    </kc-popover>
    <kc-popover class="item"  content="Right Bottom 提示文字" title="Title" placement="right-end" width="200" trigger="hover">
      <kc-button  slot="reference">右下</kc-button>
    </kc-popover>
  </div>
  <div class="bottom">
    <kc-popover class="item"  content="Bottom Left 提示文字" title="Title" placement="bottom-end" width="200" trigger="hover">
      <kc-button  slot="reference">下左</kc-button>
    </kc-popover>
    <kc-popover class="item"  content="Bottom Center 提示文字" title="Title" placement="bottom" width="200" trigger="hover">
      <kc-button  slot="reference">下中</kc-button>
    </kc-popover>
    <kc-popover class="item"  content="Bottom Right 提示文字" title="Title" placement="bottom-start" width="200" trigger="hover">
      <kc-button  slot="reference">下右</kc-button>
    </kc-popover>
  </div>
</div>
<style lang="scss">
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .kc-popover__popper,
    .right .kc-popover__popper {
      padding: 8px 10px;
    }
  }
</style>
```
:::
### 边缘对齐
:::demo
```html
<kc-popover
  placement="top"
  title="Title"
  width="100"
  trigger="hover"
  popper-class="popleft"
  arrow-point-place="start"
  content="这是一段内容,这是一段内容">
   <kc-button slot="reference">popover弹框在目标元素之前</kc-button>
   
</kc-popover>

<kc-popover
  placement="top"
  title="Title"
  width="100"
  trigger="hover"
  popper-class="popleft"
 
  content="这是一段内容,这是一段内容">
  <kc-button slot="reference">popover弹框在目标元素中间</kc-button>
</kc-popover>
<kc-popover
  placement="top"
  title="Title"
  width="100"
  trigger="hover"
  arrow-point-place="end"
  content="这是一段内容,这是一段内容">
  <kc-button slot="reference">popover弹框在目标元素之后</kc-button>
</kc-popover>
<style lang="scss">

</style>
```
:::

### 嵌套操作

当然，你还可以嵌套操作，这相比 Dialog 更为轻量：

:::demo
```html
<kc-popover
  placement="top"
  width="160"
  v-model="visible2">
  <p>这是一段内容这是一段内容确定删除吗？</p>
  <div style="text-align: right; margin: 0">
    <kc-button size="mini" type="text" @click="visible2 = false">取消</kc-button>
    <kc-button type="primary" size="mini" @click="visible2 = false">确定</kc-button>
  </div>
  <kc-button slot="reference">删除</kc-button>
</kc-popover>

<script>
  export default {
    data() {
      return {
        visible2: false,
      };
    }
  }
</script>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | 触发方式 | String  | click/focus/hover/manual |    click    |
|  title              | 标题 | String | — | — |
|  content        |  显示的内容，也可以通过 `slot` 传入 DOM   | String            | — | — |
|  width        |  宽度  | String, Number            | — | 最小宽度 150px |
|  placement        |  出现位置  | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  disabled       |  Popover 是否可用  | Boolean           | — |  false |
|  value(v-model)        |  状态是否可见  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | fade-in-linear |
|  visible-arrow   |  是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper) | Boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class | 为 popper 添加类名 | String | — | — |
| open-delay | 触发方式为 hover 时的显示延迟，单位为毫秒 | Number | — | — |
| arrow-point-place | Tooltip 出现的位置为 top 或 bottom 时，Tooltip 是否在目标元素的开头或者末尾，默认在中间 | string | start/end | — |

### Slot
| 参数 | 说明 |
|--- | ---|
| — | Popover 内嵌 HTML 文本 |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| show | 显示时触发 | — |
| after-enter | 显示动画播放完毕后触发 | — |
| hide | 隐藏时触发 | — |
| after-leave | 隐藏动画播放完毕后触发 | — |
