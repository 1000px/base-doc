<style lang="scss">
@mixin clearFix {
	zoom: 1;
	&:after {
		content: '';
		display: block;
		clear: both;
	}
}
		
		

	div.dev-list{
		
		height: 72px;
		padding: 24px;
		
		margin-bottom: 30px;
		border: 1px solid #E0EBF3;
		border-radius: 4px;
		i{
			float: left;
			width: 36px;
			height: 36px;
			margin-right: 15px;
			padding-top: 8px;
			>a{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		i.res-icon1{
			background: url("../../assets/images/logo-antdesign.png") no-repeat center bottom;
			background-size: 100%;
		}
		i.res-icon2{
			background: url("../../assets/images/logo-element.png") no-repeat center bottom;
			background-size: 100%;
		}
		i.res-icon3{
			background: url("../../assets/images/logo-vue.png") no-repeat center bottom;
			background-size: 100%;
		}
		i.res-icon4{
			background: url("../../assets/images/logo-webpack.png") no-repeat center bottom;
			background-size: 100%;
		}
		i.res-icon5{
			background: url("../../assets/images/logo-react.png") no-repeat center bottom;
			background-size: 100%;
		}
		i.res-icon6{
			background: url("../../assets/images/logo-iview.png") no-repeat center bottom;
			background-size: 100%;
		}

		div{
			margin-left:50px;
			h5{
				margin: 0;
				padding: 0;
				font-size: 14px;
				line-height: 20px;
				color: #273B55;
				a{
					font-size: 14px;
					color: #273B55;
					&:link,&:visited,&:hover,&:active{
						font-size: 14px;
						color: #273B55;
					}
				}

			}
			p{
				margin-top: 8px;
				font-size: 12px;
				color: #BBBBBB;
				line-height: 16px;
				letter-spacing: 0.6px;
			}
		}
	}
</style>

## 开发资源
-------------------
提供 `Kfront Base` 类似的组件库的访问地址。



<kc-row :gutter="60">
  <kc-col :span="8">
  	<div class="dev-list">
		<i class="res-icon1"><a href="https://ant.design/index-cn" target="_blank"></a></i>
		<div>
			<h5><a href="https://ant.design/index-cn" target="_blank">Ant Design</a></h5>
			<p>基于『确定』和『自然』的设计价值观和模块化的解决方案。</p>
		</div>
	</div>
  </kc-col>
  <kc-col :span="8">
  	<div class="dev-list">
		<i class="res-icon2"><a href="http://element.eleme.io/#/zh-CN" target="_blank"></a></i>
		<div>
			<h5><a href="http://element.eleme.io/#/zh-CN" target="_blank">Element</a></h5>
			<p>基于『确定』和『自然』的设计价值观和模块化的解决方案</p>
		</div>
	</div>
  </kc-col>
  <kc-col :span="8">
  	<div class="dev-list">
		<i class="res-icon3"><a href="https://cn.vuejs.org/" target="_blank"></a></i>
		<div>
			<h5><a href="https://cn.vuejs.org/" target="_blank">Vue.js</a></h5>
			<p>基于『确定』和『自然』的设计价值观和模块化的解决方案</p>
		</div>
	</div>
  </kc-col>


  <kc-col :span="8">
  	<div class="dev-list">
		<i class="res-icon4"><a href="http://webpack.github.io/" target="_blank"></a></i>
		<div>
			<h5><a href="http://webpack.github.io/" target="_blank">webpack</a></h5>
			<p>基于『确定』和『自然』的设计价值观和模块化的解决方案。</p>
		</div>
	</div>
  </kc-col>
  <kc-col :span="8">
  	<div class="dev-list">
		<i class="res-icon5"><a href="https://reactjs.org/" target="_blank"></a></i>
		<div>
			<h5><a href="https://reactjs.org/" target="_blank">React</a></h5>
			<p>基于『确定』和『自然』的设计价值观和模块化的解决方案</p>
		</div>
	</div>
  </kc-col>
  <kc-col :span="8">
  	<div class="dev-list">
		<i class="res-icon6"><a href="https://www.iviewui.com/" target="_blank"></a></i>
		<div>
			<h5><a href="https://www.iviewui.com/" target="_blank">iView</a></h5>
			<p>基于『确定』和『自然』的设计价值观和模块化的解决方案</p>
		</div>
	</div>
  </kc-col>
</kc-row>
