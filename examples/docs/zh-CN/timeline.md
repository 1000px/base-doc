## Timeline 时间轴

对一系列信息进行时间排序时，垂直地展示。

### 基础用法

最简单定义一个时间轴的用法。

:::demo
```html
<style>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<kc-timeline>
	<kc-timeline-item>
		<p class="time">1976年</p>
		<p class="content">Apple I 问世</p>
	</kc-timeline-item>
	<kc-timeline-item>
		<p class="time">1984年</p>
		<p class="content">发布 Macintosh</p>
	</kc-timeline-item>
	<kc-timeline-item>
		<p class="time">2007年</p>
		<p class="content">发布 iPhone</p>
	</kc-timeline-item>
	<kc-timeline-item>
		<p class="time">2010年</p>
		<p class="content">发布 iPad</p>
	</kc-timeline-item>
	<kc-timeline-item>
		<p class="time">2011年10月5日</p>
		<p class="content">史蒂夫·乔布斯去世</p>
	</kc-timeline-item>
</kc-timeline>
<script>
    export default {
        
    }
</script>

```
:::

### 圆圈颜色

用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。

:::demo
```html

<kc-timeline>
	<kc-timeline-item color="green">发布1.0版本</kc-timeline-item>
	<kc-timeline-item color="green">发布2.0版本</kc-timeline-item>
	<kc-timeline-item color="red">严重故障</kc-timeline-item>
	<kc-timeline-item color="blue">发布3.0版本</kc-timeline-item>
</kc-timeline>

<script>
    export default {
        
    }
</script>

```
:::

### 幽灵节点

通过添加`pending`属性来标记最后一个为幽灵节点，标识还未完成。

:::demo
```html

<kc-timeline pending>
	<kc-timeline-item>发布1.0版本</kc-timeline-item>
	<kc-timeline-item>发布2.0版本</kc-timeline-item>
	<kc-timeline-item>发布3.0版本</kc-timeline-item>
	<kc-timeline-item color="icon">其他版本</kc-timeline-item>
</kc-timeline>

<script>
    export default {
        
    }
</script>


```
:::

### 自定义事件轴点

接受一个 slot 来自定义轴点的内容，比如一个图标。

:::demo
```html

<kc-timeline>
	<kc-timeline-item color="red">
		<kc-icon name="time" slot="dot" class="timeline-icon"></kc-icon>
		<span>发布里程碑版本</span>
	</kc-timeline-item>
	<kc-timeline-item>发布1.0版本</kc-timeline-item>
	<kc-timeline-item>发布2.0版本</kc-timeline-item>
	<kc-timeline-item>发布3.0版本</kc-timeline-item>
</kc-timeline>
<style>
.timeline-icon{
font-size: 20px;
}
</style>

<script>
    export default {
        
    }
</script>

```
:::

### Timeline props

| 属性         | 说明            | 类型            | 默认值   |
|-------------  |---------------- |---------------|-------- |
| pending   | 指定是否最后一个节点为幽灵节点   | Boolean    | false |

### TimelineItem props

| 属性         | 说明            | 类型            | 默认值   |
|-------------  |---------------- |---------------|-------- |
| color   | 圆圈颜色，可选值为`blue`、`red`、`green`、`icon`，或自定义色值,icon为幽灵节点图标   | String    | blue |

### TimelineItem solt

| 名称         | 说明           
|-------------  |----------------
| dot   | 自定义轴点内容
| 无  | 基本内容
