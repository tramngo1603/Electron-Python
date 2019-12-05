const path = require('path')
const zerorpc = require("zerorpc")
let client = new zerorpc.Client()

client.connect("tcp://127.0.0.1:4242")

client.invoke("echo", "server ready", (error, res) => {
  if(error || res !== 'server ready') {
    console.error(error)
  } else {
    console.log("server is ready")
  }
})

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let button = document.querySelector('#my_button')


button.addEventListener('click', () => {
  client.invoke("sum_func", box1.value, box2.value, (error, res) => {
    if(error) {
      console.error(error)
    } else {
        document.getElementById("result").value = res
    }
  })

})
