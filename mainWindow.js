const { BrowserWindow } = require('electron')

let win
exports.createWindow = () => {
    win = new BrowserWindow({
        width: 1400,
        height: 1000,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    win.on('closed', () => {
        win = null
    })
    
    win.loadFile('./index.html')
    
    // win.webContents.openDevTools()

    win.on('ready-to-show', () => {
            win.show()
    })
}
