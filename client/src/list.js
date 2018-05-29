/*
* 组件列表页
* 对组件列表与组件分类进行管理
* 可进行增删改查等操作
* @author 1000px
*/
var fs = require('fs');
// 进入页面初始化当前组件列表
// var components;
fs.readdir('static/content', function(err, files) {
	var a = err;
	console.log(a);
});