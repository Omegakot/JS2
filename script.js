const fs = require('fs')
const text = fs.readFileSync('./package.json', 'utf8')
console.log(text)