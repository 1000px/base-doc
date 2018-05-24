const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

// 保持一个对于window对象的全局引用，如果你部这样做，
// 当javascript对象被垃圾回收，window会被自动关闭
let win;

function createWindow() {
	// 创建浏览器窗口
	win = new BrowserWindow({ width: 800, height: 600 });
	// 加载应用的index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, './index.html'),
		protocol: 'file',
		slashed: true
	}));
	// 打开开发者工具
	// win.webContents.openDevTools();
	
	// 当window关闭时，触发
	win.on('closed', () => {
		// 清空window对象引用，如果本项目支持多窗口的话，
		// 通常会把多个window对象存放在一个数组里面
		// 所以，应该删除相应的元素
		win = null;
	});
}

// Electron会在初始化后准备创建浏览器窗口时，调用这个函数
// 部分API在ready事件触发后才能使用
app.on('ready', createWindow);

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
	// 在macOS上，除非用户用cmd + q确定地退出，否则绝大部分应用机器菜单栏会保持激活
	if(process.platform !== 'darwin') {
		app.quit();
	}
});
app.on('activate', () => {
	// 在macOS上，当单击dock图标并且没有其它窗口打开时
	// 通常在应用程序中重新创建一个窗口
	if(win === null) {
		createWindow();
	}
});
