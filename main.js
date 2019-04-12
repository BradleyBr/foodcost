const { app, BrowserWindow } = require('electron')
const  mainWindow  = require('./mainWindow.js')

app.on('ready', mainWindow.createWindow)
