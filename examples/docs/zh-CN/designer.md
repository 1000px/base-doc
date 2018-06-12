<style lang="scss">
	@mixin clearFix {
		zoom: 1;
		&:after {
			content: '';
			display: block;
			clear: both;
		}
	}
		ul.dev-list{
			@include clearFix;
			li:nth-child(1) i {
				background: url("../../assets/images/logo-antdesign.png") no-repeat center bottom;
				background-size: 100%;
			}
			li{
				float: left;
				width: 312px;
                height: 72px;
                padding: 24px;
				margin-right: 60px;
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

				div{
					float: left;
					width: 227px;
					h5{
						margin: 0;
						padding: 0;
						font-size: 14px;
						height: 20px;
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
		}
	</style>

## 设计资源
-------------------
提供 `Kfront Base` 相关的视觉资源下载。


<ul class="dev-list">
	<li>
		<i><a href="" target="_blank"></a></i>
		<div>
			<h5><a href="" target="_blank">Sketch设计源文件</a></h5>
			<p>包含所有组件的视觉及交互设计</p>
		</div>
	</li>
</ul>
