const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    
    let index=fs.readFileSync(`./Lesson8/index.html`)
    let css=fs.readFileSync(`./Lesson8/css.css`)
    
    let c=[index,css]
    // c.forEach(element=>fs.readFileSync())
    
    res.end(`${c}`)
})

const port = process.env.PORT || 3040
server.listen(port)

console.log(`Started on port ${port}`)