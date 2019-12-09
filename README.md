# Electron/Python Experiment

### Instructions:

1. Download the zip file from this repository
2. Unzip the directory
3. Look for and run SumLady.exe

### Developer Guide:

##### 1) Create five main files for the Electron app that are called package.json, index.html, main.js, renderer.js, and add.py

- `package.json`: description information of the created Electron app that we want to include such as version, authors, or devDependencies.
- `index.html`: controls the content the GUI shows.
- `main.js`: contains all of the default code required to build an Electron desktop app.
- `renderer.js`: connects the backend Python process with the HTML front-end.
- `add.py`: contains the backend Python code

##### 2) Pip install pyinstaller
```
pip install pyinstaller
```
##### 3) pyinstaller add.py
```
pyinstaller add.py
```

This will create a bundle in the sub-directory called `dist` that contains `add.exe`

##### 4) Packaging:
```
npm install electron-packager
```
then
```
electron-packager . SumLady
```
then zip up the files in `SumLady-win32-x64`
