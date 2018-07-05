## 前端编码规范

### 修订记录

|时间|修订人|修订内容|备注|
|---|---|---|---|
|2017-06-20|梁继飞|完成初稿v1.0|Web前端技术部总编码规范|
|2017-12-08|马理想|补充项目开发规范v1.0.1|引入eslint规范到项目中，结合部门编码规范做相应适配|


### 一、文档说明

本规范规定了使用前端开发语言（html、css、JS）进行编程时排版、注释、命名、编码的规则和建议。

本规范适用于使用JavaScript、HTML、CSS语言编码的部分和产品。

### 二、命名规范

#### 2.1 项目命名

项目名称采用全小写形式，以中划线进行语义分割，例如：project-name

#### 2.2 目录名

参照2.1，有复数结构时，要采用复数命名方式，比如：scripts、styles

#### 2.3 JavaScript文件命名

参照2.1，例如：account-model.js

#### 2.4 CSS、SCSS文件命名

参照2.1，例如：retina-sprites.scss

#### 2.5 HTML文件命名

参照2.1，例如：error-report.html

#### 2.6 其它文件命名

参照2.1

#### 2.7 id命名

id主要用于dom元素中，以单词加下划线的组合进行命名，例如：only_user

#### 2.8 class命名

以单词加中划线的组合进行命名，例如：only-user

> 禁止id关联样式，少用复杂的多级别嵌套，避免使用important，减少使用import

#### 2.9 JS对象代码块命名

采用驼峰，尽可能与后台接口保持一致，例如：addUser()

#### 2.10 JS变量命名

采用驼峰，例如：userName

### 三、HTML

#### 3.1 排版

使用tabs进行缩进

嵌套的节点应该缩进（tabs）

在属性上，使用双引号，不要使用单引号

#### 3.2 文档申明
建议doctype全大写以强调声明，例如：

```html
<!DOCTYPE html>
<html>
</html>
```

#### 3.3 文档语言申明
例如：

```html
<!DOCTYPE html>
<html lang="en-us">
</html>
```

#### 3.4 渲染模式
不同浏览器有不同的渲染模式，目前IE系列推荐使用Edge内核
多内核情况推荐使用webkit（比如360）

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
```

#### 3.5 字符编码
建议使用utf8

```html
<meta charset="utf-8">
```

#### 3.6 引入CSS和JavaScript
根据HTML5规范，通常在引入CSS和JavaScript时不需要指明type,
因为text/css和text/javascript分别是他们的默认值。

> 原则上，尽可能将CSS和JavaScript代码放在单独的文件中，利于前端构建工具压缩打包。

#### 3.7 HTML语义化
尽量遵循HTML标准和语义，但不应该以浪费实用性作为代价。
任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

#### 3.8 属性顺序
HTML属性应该按照特定的顺序出现以保证易读性：

id

class

name

data-*

src,for,type,href

title, alt
aria-*, role

#### 3.9 JavaScript生成标签
在JavaScript文件中生成标签，让内容变得更加难找，更难编辑应该尽量避免这种情况出现。
如果不可避免要使用js生成html标签代码，尽量做到高内聚低耦合，较少的进行重排和重绘。

### 四、CSS

#### 4.1 排版

使用tabs进行缩进

使用组合选择器时，保证每个独立的选择器占用一行

在每个声明的左花括号前增加一个空格

声明块的结尾花括号应该另起一行

分号之后有空格

每条声明占用一行

所有声明以分号结束

逗号分隔取值，逗号之后需要空格

不要在颜色值rgb() rgba() hsl() hsla()和rect()中增加空格

0到1之间的数值，如果不是必须，省略小数点之前的0，比如 .5 而不是 0.5

所有的十六进制都应该小写

所有十六进制尽量短，比如#fff优于#ffffff

为选择器中的属性取值添加引号，例如input[type="text"]

不要为取值为0的属性值添加单位

#### 4.2 声明顺序

属性的声明顺序如下：

Positioning

Box model盒模型

Typographic 排版

Visual 外观

#### 4.3 媒体查询位置

尽量将媒体查询的位置靠近他们的相关规则。不要将他们一起放到某个独立的样式文件中，
或者丢在文档的最底部。这样做只会让大家以后更容易忘记他们。

#### 4.4 属性简写

建议尽量减少属性简写，因为过度使用属性简写往往导致更混乱的代码，其中包括不需要的重写和意想不到的副作用。

#### 4.5 LESS和SCSS中的嵌套

避免不必要的嵌套，即使你可以这么做，但也不意味着应该这样做。

只有在需要给父元素增加样式并且同时存在多个子元素时才需要考虑嵌套。

#### 4.6 class命名

保持class命名为全小写，可以使用中划线。例如：btn-danger

避免多度使用简写

class的命名应该尽量短，但要保证语义清晰

使用有意义的名称，使用结构化或者作用目标相关，而不是抽象的名称

命名时使用最近的父节点或者父class作为前缀

#### 4.7 选择器

使用classes而不是通用元素标签来优化渲染性能

避免在经常出现的组件中使用一些属性选择器，浏览器性能会受到这些情况的影响

减少选择器的长度，每个组合选择器的条目应该尽量控制在3个以内

只在必要的情况下使用后代选择器

#### 4.8 代码组织

以组件为单位组织代码

制定一个一致的注释层级结构

使用一致的空白来分割代码块，这样做在查查看大的文档时更有优势

### 五、JavaScript

#### 5.1 排版

使用tabs进行缩进

方法之间以空行隔断

单行或多行注释前加空行

逻辑块之间加空行增加可读性

使用''

括号前后有空格，花括号起始不另换行，结尾独占一行

花括号必须要，即使代码块中只有一行代码

关键字后加空格，例如： if else for while try等等

#### 5.2 变量命名

标准变量采用小驼峰命名，例如：userName

有些特殊意义的字符串可根据需要全部大写，例如：reportURL

常量采用全大写形式

构造函数采用大驼峰形式命名，例如： new Person()

#### 5.3 变量的声明

所有函数内变量声明放在函数内头部

只使用一个var

一个变量独占一行，行末跟注释

#### 5.4 对象的声明

```javascript
// 不推荐做法
var team = new Team();
team.title = 'kedacom';
team.count = 25;

// 推荐做法
var team = {title: 'kedacom', count: 25};
```
#### 5.5 数组的声明

```javascript
// 不推荐做法
var colors = new Array('red', 'green', 'blue');
var numbers = new Array(1, 2, 3, 4);

// 推荐做法
var colors = ['red', 'green', 'blue'];
var numbers = [1, 2, 3, 4];
```

#### 5.6 函数的声明

函数的调用括号前后不需要空格

#### 5.7 其它

完全避免 == !=的使用，用严格比较条件 === !==

eval非特殊业务，禁用！！！

with非特殊业务，禁用！！！

其它未尽规则，参阅 [七、eslint编码规范]

### 六、注释规范

#### 6.1 要求

有效注释必须有，（达到总代码量30%）

> 注释的原则是有助于对程序的阅读理解，在该加的地方都加，注释不宜太多也不能太少
注释语言不能太多，也不宜太少，注释语言必须准确、易懂、简洁、规范
可用注释统计工具来统计

#### 6.2 文件注释

在每个文件头部，须包含对本文件功能、业务、依赖、作者等的说明

#### 6.3 代码块的注释

在代码块的逻辑不那么容易阅读的时候，需要增加对该代码块的说明

#### 6.4 方法体注释

单独的方法体，务必要有功能说明，以及入参、出参的说明

#### 6.5 变量注释

变量注释建议采用行内注释

当变量足够重要或者变量名可能引起思维阻碍时，需要在该变量就近处给予注释


### 七、eslint编码规范

#### 7.1 关于eslint

功能1 检测代码合法性

功能2 配合流行的前端构建工具，例如：webpack

功能3 代码格式化

#### 7.2 三大通用规则

eslint官方提供了三种预安装包：

eslint-config-google: Google的标准

eslint-config-airbnb: Airbnb标准，它依赖eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-ally

eslint-config-standard: Standard标准，是一些前端工程师自定的标准，KFront-Base中引入的就是该套标准，但做了一定的定制。

#### 7.3 eslint-config-standard

[在线文档](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)

[在线规则详述](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)

KFront-Base中定制的部分，补充如下(相关配置在 .eslintrc.js文件中)：

rules.indent: tab -- 使用tab进行代码缩进

rules.quotes: single -- 单引号引用字符串

rules.semi: always -- 必须使用分号结束

rules.no-tabs: off -- 应该使用tab进行缩进

rules.eqeqeq: off -- 关闭'==='检测 即允许使用'==','!='

rules.no-multiple-empty-lines: off -- 关闭多空行检测，即允许多空行

rules.no-trailing-spaces: off -- 关闭语句后多余空格检测，即允许在语句后存在多余空格

rules.eol-last: off -- 关闭文件末空行检测，即在文件末不必须添加空行

rules.prefer-promise-reject-errors: off -- 关闭使用error对象作为Promise驳回原因
