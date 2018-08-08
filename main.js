const {
  app,
  BrowserWindow,
} = require('electron')

const remote = require('electron').remote
let mainWindow

var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 900,
        height: 900,
        frame: false,
        resizable: false
    })

    //mainWindow.openDevTools()

    mainWindow.setMenu(null)
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', function() {
      mainWindow = null
    })
}

app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
      createWindow()
    }
})
