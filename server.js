const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    let body=fs.readFileSync(`./111.jpg`)
   
    res.end(body)
})

const port = process.env.PORT || 3040
server.listen(port)

server.listen(3040)
console.log("Started")