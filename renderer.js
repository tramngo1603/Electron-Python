const path = require('path')

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let button = document.querySelector('#my_button')


button.addEventListener('click', () => {
  let pyExe = path.join(__dirname, 'dist', 'add.exe')
  // "" around pyExe to handle spaces in path
  let stdout = require('child_process').execSync('"' + pyExe + '" ' + box1.value + ' ' + box2.value)
  let element = document.getElementById("result").value = stdout
})
