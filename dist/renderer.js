const path = require('path')

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let result_box = document.querySelector('#result')
let button = document.querySelector('#my_button')

button.addEventListener('click', () => {
  let script = path.join(__dirname, 'add.py')
  let stdout = require('child_process').execSync('python "' + script + '" ' + box1.value + ' ' + box2.value)
  console.log(stdout)
  result.textContent = stdout
})
