const http= require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
console.log(req.url)
const body=req.url==="/css.css"
? fs.readFileSync(`./Lesson8/css.css`)
: fs.readFileSync(`./Lesson8/index.html`)

    res.end(body)
})

const port = process.env.PORT || 3050
server.listen(port)

console.log(`Started on port ${port}`)

// // Задание на чтение ыайлов
// const fs = require('fs')
// const { Console } = require("console")
// const text = fs.readFileSync('./package.json', 'utf8')
// console.log(text)