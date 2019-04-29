const { app, BrowserWindow, webContents } = require('electron')
const  mainWindow  = require('./mainWindow.js')

app.on('ready', mainWindow.createWindow)


