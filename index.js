/* eslint-disable no-unused-vars */

console.log('launch: ', __filename);
const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const { reactApp } = require('./server/index');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

const WINDOW_SHORT_CUTS = [
  'Alt+Delete',
  'Alt+Left',
  'Alt+l',
  'Tab',
  'Alt+,',
  'Alt+.',
  'CommandOrControl+w',
  'Alt+Tab',
  'Alt+Esc',
  'Alt+Enter',
  'Alt+1',
];

function assignShortcut(mainWindow) {
  console.info('assigning Shortcut');
  globalShortcut.unregisterAll();
  globalShortcut.register('Ctrl+Shift+i', () => {
    mainWindow.webContents.toggleDevTools({ mode: 'detach' });
    console.log('Catch Ctrl+Shift+i');
  });

  // WINDOW_SHORT_CUTS.forEach(e => {
  //   if (!globalShortcut.isRegistered(e)) {
  //     console.error(`${e} - registered`);
  //   } else {
  //     console.error(`${e} - not registered`);
  //   }
  //   globalShortcut.register(e, () => {
  //     console.log(`Catch ${e}`);
  //   });
  // });
}

const windowCreate = event => {
  if (!win) {
    // 创建浏览器窗口。
    win = new BrowserWindow({ width: 1050, height: 600, frame: true });

    // 然后加载应用的 index.html。
    // win.loadFile('index.html');
    // win.loadFile('index_sub.html');

    // const entryHtml = `${__dirname}/build/index.html`;
    // console.log('entryHtml: ', entryHtml);
    win.loadURL('http://localhost:10313/nc');

    assignShortcut(win);
    // 打开开发者工具
    // win.webContents.openDevTools();

    // 隐藏Menu
    // Menu.setApplicationMenu(null);

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
      // 取消引用 window 对象，如果你的应用支持多窗口的话，
      // 通常会把多个 window 对象存放在一个数组里面，
      // 与此同时，你应该删除相应的元素。
      // win = null
    });
    if (typeof event !== 'object') {
      console.info(`Electron Created${event ? ` by event ${event}` : ''}`);
    }
  }
};

const windowClose = event => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  console.info(
    `Electron Closed on ${process.platform || 'current platform'}${
      event ? ` by event ${event}` : ''
    }`,
  );
  globalShortcut.unregisterAll();

  if (process.platform !== 'darwin') {
    app.quit();
    reactApp.close(() => {
      console.info(`React Stoped${event ? ` - event: ${event}` : ''}`);
    });
  }
};

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。

const WINDOW_EVENT_CALLBACKS = {
  ready: windowCreate,
  'will-quit': windowClose,
  'window-all-closed': windowClose,
  activate: windowClose,
};

Object.entries(WINDOW_EVENT_CALLBACKS).forEach(([event, callback]) => {
  app.on(event, () => {
    callback(event);
  });
});

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
