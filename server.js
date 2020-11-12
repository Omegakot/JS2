const http= require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
console.log(req.url)

let body

switch(req.url){
    case `/css.css`:
        body=fs.readFileSync(`./Lesson8/css.css`)
    break
    case `/`:
    body=fs.readFileSync(`./Lesson8/index.html`)
    break
    case `/img2.jpg`:
        body=fs.readFileSync(`./Lesson8/img2.jpg`)
    break
    case `/img1.jpg`:
        body=fs.readFileSync(`./Lesson8/img1.jpg`)
    break  
    case `/script2.js`:
        body=fs.readFileSync(`./Lesson8/script2.js`)
    break        
}
    res.end(body)
})

const port = process.env.PORT || 3050
server.listen(port)

console.log(`Started on port ${port}`)

