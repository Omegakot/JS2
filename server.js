const http= require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{

    const body=req.url === `/css.css`

? fs.readFileSync(`./Lesson8/css.css`)
: fs.readFileSync(`./Lesson8/index.html`)
    res.end(body)
})

const port = process.env.PORT || 3040
server.listen(port)

console.log(`Started on port ${port}`)