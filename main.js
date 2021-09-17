const {
    app,
    BrowserWindow
} = require("electron");


function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('./dist/index.html')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})