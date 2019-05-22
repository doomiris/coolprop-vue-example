/*jshint esversion: 6 */
const {app, BrowserWindow, Menu} = require('electron')
var path = require("path")
  
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    minWidth: 800,
    resizable: true,
  })

  //win.webContents.openDevTools()
  // and load the index.html of the app.
  win.loadFile('main.html')
}
Menu.setApplicationMenu(null)
app.on('ready', createWindow)

