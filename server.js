const http= require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
console.log(req.url)
const path =`./Lesson8`
// switch(req.url){
//     case `/css.css`:
//         console.log("REQ1")
//         body=fs.readFileSync(`./Lesson8/css.css`)
//     break
//     case `/`:
//         console.log("REQ2")
//     body=fs.readFileSync(`./Lesson8/index.html`)
//     break
//     case `/img2.jpg`:
//         body=fs.readFileSync(`./Lesson8/img2.jpg`)
//     break
//     case `/img1.jpg`:
//         body=fs.readFileSync(`./Lesson8/img1.jpg`)
//     break  
//     case `/script2.js`:
//         body=fs.readFileSync(`./Lesson8/script2.js`)
//     break        
// }
try {
    console.log("Попытка")
    body=fs.readFileSync(`${path}${req.url}`)
}
catch(err){
    body=fs.readFileSync(`./Lesson8/index.html`)
}
    res.end(body)
})

const port = process.env.PORT || 3050
server.listen(port)

console.log(`Started on port ${port}`)

