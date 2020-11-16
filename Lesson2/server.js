const http= require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
console.log(req.url)
const path =`./Lesson2`
try {
    body=fs.readFileSync(`${path}${req.url}`)
}
catch(err){
    body=fs.readFileSync(`./Lesson2/lesson2.html`)
}
    res.end(body)
})

const port = process.env.PORT || 3000
server.listen(port)

console.log(`Started on port ${port}`)

