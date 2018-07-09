<script>
  export default {
    data() {
      return {
        activeName: 'second',
         activeName1: 'first',
        activeName2: 'first',
        editableTabsValue: '2',
        editableTabsValue2: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        tabPosition: 'top'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
<style type=scss>

</style>
## Tabs 标签页
-------------------

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

```html

  <kc-tabs v-model="activeName" @tab-click="handleClick">
    <kc-tab-pane label="用户管理" name="first">用户管理</kc-tab-pane>
    <kc-tab-pane label="配置管理" name="second">配置管理</kc-tab-pane>
    <kc-tab-pane label="角色管理" name="third">角色管理</kc-tab-pane>
    <kc-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</kc-tab-pane>
  </kc-tabs>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 禁用某一项

可禁用标签页中某一项。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

```html

  <kc-tabs v-model="activeName1" @tab-click="handleClick">
    <kc-tab-pane label="用户管理" name="first">用户管理</kc-tab-pane>
    <kc-tab-pane label="配置管理" name="second" disabled >配置管理</kc-tab-pane>
    <kc-tab-pane label="角色管理" name="third" disabled >角色管理</kc-tab-pane>
    <kc-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</kc-tab-pane>
  </kc-tabs>

<script>
  export default {
    data() {
      return {
        activeName1: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 选项卡样式

选项卡样式的标签页。

:::demo 只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

```html

  <kc-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <kc-tab-pane label="用户管理" name="first">用户管理</kc-tab-pane>
    <kc-tab-pane label="配置管理" name="second">配置管理</kc-tab-pane>
    <kc-tab-pane label="角色管理" name="third">角色管理</kc-tab-pane>
    <kc-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</kc-tab-pane>
  </kc-tabs>

<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 卡片化

卡片化的标签页。

:::demo 将`type`设置为`border-card`。
```html
<kc-tabs type="border-card">
  <kc-tab-pane label="用户管理">用户管理</kc-tab-pane>
  <kc-tab-pane label="配置管理">配置管理</kc-tab-pane>
  <kc-tab-pane label="角色管理">角色管理</kc-tab-pane>
  <kc-tab-pane label="定时任务补偿">定时任务补偿</kc-tab-pane>
</kc-tabs>
```
:::

### 位置

可以通过 `tab-position` 设置标签的位置

:::demo 标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

```html

  <kc-radio-group v-model="tabPosition" text-color="#4999FF" fill="#E6F1FC" style="margin-bottom: 30px; "plain>
    <kc-radio-button label="top">top</kc-radio-button>
    <kc-radio-button label="right">right</kc-radio-button>
    <kc-radio-button label="bottom">bottom</kc-radio-button>
    <kc-radio-button label="left">left</kc-radio-button>
  </kc-radio-group>

  <kc-tabs :tab-position="tabPosition" style="height: 200px;">
    <kc-tab-pane label="用户管理">用户管理</kc-tab-pane>
    <kc-tab-pane label="配置管理">配置管理</kc-tab-pane>
    <kc-tab-pane label="角色管理">角色管理</kc-tab-pane>
    <kc-tab-pane label="定时任务补偿">定时任务补偿</kc-tab-pane>
  </kc-tabs>

<script>
  export default {
    data() {
      return {
        tabPosition: 'top'
      };
    }
  };
</script>
```
:::

### 自定义标签页

可以通过具名 `slot` 来实现自定义标签页的内容

:::demo
```html
<kc-tabs type="border-card">
  <kc-tab-pane>
    <span slot="label"><i class="kc-icon-date"></i> 我的行程</span>
    我的行程
  </kc-tab-pane>
  <kc-tab-pane label="消息中心">消息中心</kc-tab-pane>
  <kc-tab-pane label="角色管理">角色管理</kc-tab-pane>
  <kc-tab-pane label="定时任务补偿">定时任务补偿</kc-tab-pane>
</kc-tabs>
```
:::

### 动态增减标签页

增减标签页按钮只能在选项卡样式的标签页下使用

:::demo
```html
<kc-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <kc-tab-pane
    :key="item.name"
    v-for="(item, index) in editableTabs"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </kc-tab-pane>
</kc-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
```
:::

### 自定义增加标签页触发器

:::demo
```html
<div style="margin-bottom: 20px;">
  <kc-button
    size="small"
    @click="addTab(editableTabsValue2)"
  >
    add tab
  </kc-button>
</div>
<kc-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
  <kc-tab-pane
    v-for="(item, index) in editableTabs2"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </kc-tab-pane>
</kc-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
```
:::

### Tabs Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 风格类型   | string   | card/border-card  |     —    |
| closable  | 标签是否可关闭   | boolean   | — |  false  |
| addable  | 标签是否可增加   | boolean   | — |  false  |
| editable  | 标签是否同时可增加和关闭   | boolean   | — |  false  |
| value  | 绑定值，选中选项卡的 name  | string   |  —  |  第一个选项卡的 name |
| tab-position  | 选项卡所在位置 | string   |  top/right/bottom/left  |  top |

### Tabs Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| tab-click  | tab 被选中时触发 | 被选中的标签 tab 实例 |
| tab-remove  | 点击 tab 移除按钮后触发  | 被删除的标签的 name |
| tab-add  | 点击 tabs 的新增按钮后触发  | — |
| edit  | 点击 tabs 的新增按钮或 tab 被关闭后触发  | (targetName, action) |

### Tab-pane Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   | — |    —     |
| disabled | 是否禁用 | boolean | — | false |
| name      | 与选项卡 activeName 对应的标识符，表示选项卡别名 | string | — | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable  | 标签是否可关闭   | boolean   | — |  false  |
