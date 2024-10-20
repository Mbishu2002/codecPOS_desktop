// preload.js
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  navigate: (path) => ipcRenderer.send('navigate', path)
});
