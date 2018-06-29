<style lang="scss">
.demo-color,.demo-text-color{
	overflow:hidden;
}
  .demo-color-box {
  	float:left;
    border-radius: 50%;
    margin: 5px 0;
    width:70px;
    height: 70px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
	border-radius: 50%;
  }
  .value {
    float:left;
    margin: 16px 0 0 20px;
    p{
    	font-size: 16px;
        color: #999;
        letter-spacing: 0;
        line-height: 16px;
    }
  }

  .demo-text-color {
  	margin:5px 0;
    .demo-color-box {
     	width:40px;
     	height:40px;
    }
    .value{
       margin: 12px 0 0 20px;
       font-size: 16px;
       color: #999;
    }
  }
  .demo-color-box-group{
  	p{
  		font-size:18px;
  		color: #000000;
  		margin-bottom:30px;
  	}
  }
  .bg-blue {
    background-color: #4999FF;
  }

  .bg-success {
    background-color: #63C532;
  }
  .bg-warning {
    background-color: #faad14 ;
  }
  .bg-danger {
    background-color: #f36464;
  }
  .bg-text-primary {
    background-color: #252525;
  }
  .bg-text-regular {
    background-color: #575A5F;
  }
  .bg-text-secondary {
    background-color: #8C9097;
  }
  .bg-text-placeholder {
    background-color: #BEC1C9;
  }
  .bg-text-tint {
      background-color: #D2D6DC;
    }
    
  .bg-border-base {
    background-color: #dcdfe6;
  }
  .bg-border-light {
    background-color: #e4e7ed;
  }
  .bg-border-lighter {
    background-color: #ebeef5;
  }
  .bg-border-extra-light {
    background-color: #f2f6fc;
  }

 .bg-bg-base {
	background-color: #f0f2f5;
  }
  .bg-bg-light {
	background-color: #f5f7fa;
  }
  .bg-bg-lighter {
	background-color: #f9fafc;
  }
  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color 色彩
-------------------

为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### Main Color

主要颜色是鲜艳、友好的蓝色。

<kc-row :gutter="12">
  <kc-col :span="6" :xs="{span: 12}">
    <div class="demo-color">
    	<div class="demo-color-box bg-blue"></div>
        <div class="value"><p>#4999FF / 140-50-72</p></div>
    </div>
  </kc-col>
</kc-row>

### Status Color

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<kc-row :gutter="12">
  <kc-col :span="8" :xs="{span: 12}">
	  <div class="demo-color">
		  <div class="demo-color-box bg-success"></div>
		  <div class="value">
		  		Success
		  		<p>#63C532 / 140-50-72</p>
		  </div>
	  </div>
  </kc-col>
  <kc-col :span="8" :xs="{span: 12}">
    <div class="demo-color">
	  <div class="demo-color-box bg-warning"></div>
	  <div class="value">
			Warning
			<p>#faad14 / 36-74-90</p>
	  </div>
  </div>
  </kc-col>
  <kc-col :span="8" :xs="{span: 12}">
        <div class="demo-color">
    	  <div class="demo-color-box bg-danger"></div>
    	  <div class="value">
    			Danger
    			<p>#f36464 / 0-56-96</p>
    	  </div>
      </div>
  </kc-col>
</kc-row>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<kc-row :gutter="12">
  <kc-col :span="8" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <p>Text Color</p>
      <div class="demo-text-color">
		  <div class="demo-color-box bg-text-primary"></div>
		  <div class="value">
				#252525 / 37-37-37
		  </div>
	  </div>
      <div class="demo-text-color">
      		  <div class="demo-color-box bg-text-regular"></div>
      		  <div class="value">
      				#575A5F / 87-90-95
      		  </div>
      </div>
      <div class="demo-text-color">
      		  <div class="demo-color-box bg-text-secondary"></div>
      		  <div class="value">
      				#8C9097 / 140-144-151
      		  </div>
      </div>
     <div class="demo-text-color">
     		  <div class="demo-color-box bg-text-placeholder"></div>
     		  <div class="value">
     				#BEC1C9 / 190-193-201
     		  </div>
     </div>
    <div class="demo-text-color">
		  <div class="demo-color-box bg-text-tint"></div>
		  <div class="value">
				#D2D6DC / 210-214-220
		  </div>
	</div>
  </kc-col>
  <kc-col :span="8" :xs="{span: 12}">
      <div class="demo-color-box-group">
        <p>Line Color</p>
        <div class="demo-text-color">
  		  <div class="demo-color-box bg-border-base"></div>
  		  <div class="value">
  				#dcdfe6 / 220-223-230
  		  </div>
  	  	</div>
        <div class="demo-text-color">
        		  <div class="demo-color-box bg-border-light"></div>
        		  <div class="value">
        				#e4e7ed / 228-231-237
        		  </div>
        </div>
        <div class="demo-text-color">
        		  <div class="demo-color-box bg-border-lighter"></div>
        		  <div class="value">
        				#ebeef5 / 220-4-96
        		  </div>
        </div>
       <div class="demo-text-color">
       		  <div class="demo-color-box bg-border-extra-light"></div>
       		  <div class="value">
       				#f2f6fc / 220-4-99
       		  </div>
       </div>
    </kc-col>
    <kc-col :span="8" :xs="{span: 12}">
        <div class="demo-color-box-group">
          <p>Background Color</p>
          <div class="demo-text-color">
          		  <div class="demo-color-box bg-bg-base"></div>
          		  <div class="value">
          				#f0f2f5 / 220-2-96
          		  </div>
          </div>
         <div class="demo-text-color">
         		  <div class="demo-color-box bg-bg-light"></div>
         		  <div class="value">
         				#f5f7fa / 220-2-98
         		  </div>
         </div>
        <div class="demo-text-color">
    		  <div class="demo-color-box bg-bg-lighter"></div>
    		  <div class="value">
    				#f9fafc / 220-2-98
    		  </div>
    	</div>
      </kc-col>
</kc-row>

