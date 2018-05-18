### 快速开始
``` Javascript
 function (url) {
		this.$emit('chgCnt', url);
		let oNavList = document.getElementById('nav-list').children;
		for (let i = 0; i < oNavList.length; i++) {
			oNavList[i].children[0].style.color = '#333';
		}
		let oNavListCon = event.currentTarget;
		oNavListCon.style.color = '#409eff';
		return aaa;
}
```
``` python
@requires_authorization
def somefunc(param1='', param2=0):
    '''A docstring'''
    if param1 > param2: # interesting
        print 'Greater'
    return (param2 - param1 + 1) or None
class SomeClass:
    pass
>>> message = '''interpreter
... prompt'''
```
```Html
	<div class="header">
		<div class="header-con">
			<h1>base-vue</h1>
			<ul class="headerNav">
				<li><span>1.0</span></li>
				<li>资源</li>
				<li><router-link to = "/docs" >API</router-link></li>
				<li><router-link to = "/"  exact>指南</router-link></li>
			</ul>
		</div>
	</div>
```
