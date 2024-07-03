const fs = require('fs')

const output = fs.readFileSync('./hello.txt','utf-8')

console.log(output);