<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  module.exports = {
    data() {
      return {
        checkList: ['选中且禁用','复选框 A'],
        // checkList2: ['复选框 A'],
        checked: true,
        checked1: false,
        checked2: true,
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: true,
        checked7: true,
        checked8: false,
        checked9: true,
        checked10: false,
        isValid: '可用',
        checkAll: false,
        cities: cityOptions,
        checkedCities: ['上海', '北京'],
        checkedCities1: ['上海', '北京'],
        isIndeterminate: true,
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        checkboxGroup5: [],
        checkboxGroup6: []
      };
    },
    methods: {
      handleChange(ev) {
        console.log(ev);
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>

<style>
  .docs-demo.
  .docs-trans {
    margin-top: 20px;
  }
</style>
## Checkbox 多选框
-------------------

一组备选项中进行多选

### 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

:::demo 在`kc-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

```html
  <kc-checkbox v-model="checked">备选项1</kc-checkbox>
  <kc-checkbox>备选项2</kc-checkbox>

  <script>
    export default {
      data() {
        return {
          checked: true
        };
      }
    };
  </script>
```
:::

### 禁用状态

多选框不可用状态。

:::demo 设置`disabled`属性即可。

```html
  <kc-checkbox v-model="checked1" disabled>备选项1</kc-checkbox>
  <kc-checkbox v-model="checked2" disabled>备选项</kc-checkbox>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::

### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可。 `kc-checkbox` 的 `label`属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
  <kc-checkbox-group v-model="checkList">
    <kc-checkbox label="复选框 A"></kc-checkbox>
    <kc-checkbox label="复选框 B"></kc-checkbox>
    <kc-checkbox label="复选框 C"></kc-checkbox>
    <kc-checkbox label="禁用" disabled></kc-checkbox>
    <kc-checkbox label="选中且禁用" disabled></kc-checkbox>
  </kc-checkbox-group>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
    }
  };
</script>
```
:::



### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的多选框。
```html
  <div>
    <kc-checkbox v-model="checked3" label="备选项1" border></kc-checkbox>
    <kc-checkbox v-model="checked4" label="备选项2" border></kc-checkbox>
    <kc-checkbox v-model="checked7" label="备选项2" border disabled></kc-checkbox>
    <kc-checkbox v-model="checked8" label="备选项2" border disabled></kc-checkbox>
  </div>
<script>
  export default {
    data () {
      return {
        checked3: true,
        checked4: false,
        checked7: true,
        checked8: false
      };
    }
  }
</script>
```
:::

### 带有图片和描述的复选框

:::demo
```html
  <h5>垂直布局</h5>
  <kc-checkbox v-model="checked9" 
    :has-img="true"
    title="复选框"
    description="带有图片和描述的复选框"
    src="http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg">
  </kc-checkbox>

   <h5>水平布局</h5>
  <kc-checkbox v-model="checked10" 
    :has-img="true"
    :inline="true"
    title="复选框"
    description="带有图片和描述的复选框"
    src="http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg">
  </kc-checkbox>
<script>
  export default {
    data () {
      return {
        checked9: true,
        checked10: false
      };
    }
  }
</script>
```
:::

### Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Checkbox 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |
| has-img  | 是否是带有图文组合的复选框    | boolean   |  — | false   |
| inline  | 是否是带有图文组合的水平布局复选框（只有has-img的值为true的时候才生效）    | boolean   |  — | false   |
| title  | 带有图文组合的复选框的标题（只有has-img的值为true的时候才生效）    | string   |  — |  —  |
| description  | 带有图文组合的复选框的描述（只有has-img的值为true的时候才生效）    | string   |  — |  —  |
| src  | 带有图文组合的复选框的图片路径（只有has-img的值为true的时候才生效）    | string   |  — |  —  |

### Checkbox Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效   | string  | medium / small / mini  |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| min     | 可被勾选的 checkbox 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkbox 的最大数量   | number    |       —        |     —    |
| text-color  | 按钮形式的 Checkbox 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Checkbox 激活时的填充色和边框色    | string   | — | #409EFF   |

### Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |

