const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const child_process = require('child_process')

let pyProc = null
let pyPort = null

const selectPort = () => {
  pyPort = 4242
  return pyPort
}

const createPyProc = () => {
  let pyExe = "add.exe"
  let port = '' + selectPort()

  pyProc = child_process.spawn(pyExe, [port], {cwd: path.join(__dirname, 'dist', 'add')})

  if (pyProc != null) {
    //console.log(pyProc)
    console.log('child process success on port ' + port)
  }
  pyProc.on('error', (err) => {
    console.error('Failed to start subprocess: ' + err);
  });
}

const exitPyProc = () => {
  pyProc.kill()
  pyProc = null
  pyPort = null
}

app.on('ready', createPyProc)
app.on('will-quit', exitPyProc)


// Initialize a window

let mainWindow = null
const createWindow = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(require('url').format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Quit when all windows are closed

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
