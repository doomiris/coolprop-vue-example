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

// win.webContents.openDevTools() //open Dev Tools

  win.loadFile('main.html')
}
Menu.setApplicationMenu(null)
app.on('ready', createWindow)

