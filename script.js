const http=require("http")
const server=http.createServer((req,res)=>{
    console.log("Hello Worlddfgdf")
    res.end("HELL^")
})
server.listen(3010)
console.log("Server started")