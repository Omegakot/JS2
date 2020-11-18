class List {
items = []
constructor () {
let good = this.fetchGoods()
good.then(()=>{
    this.render()  
})
}
fetchGoods () {
let result=fetch('http://localhost:3000/data.json')
return result
.then(res=>{
    return res.json()
})
.then(obj=>{
    console.log(obj)
    this.items=obj.obj.map(cur => {
        return new GoodItem(cur)
        })
})

}
 render () {
this.items.forEach(good => {
good.render()
})
}
}

class GoodItem {
name = ''
price = 0
count=0
plus(){
this.count++
return this.count
}
constructor ({ name, price }) {
this.name = name
this.price = price
}
render () {
const placeToRender = document.querySelector('.good')
if (placeToRender) {
const block = document.createElement('div')
block.innerHTML = `<h3>Товар: ${this.name} = ${this.price}</h3>`
placeToRender.appendChild(block)
let btn=document.createElement("button")
btn.innerText="Добавить в корзину"
block.appendChild(btn)
let div2=document.createElement("div")



let b=new Promise(function (resolve,reject){
resolve(

    
btn.addEventListener("click",(event)=>{
div2.innerHTML=`${this.name} = ${this.plus()}`})  )

reject(console.log("Somewhere error"))
})

b.then(()=>{
  
const main = document.querySelector('.main')
main.appendChild(div2)
})
b.catch("Error")

}
}
}

const ListInstance = new List()






// ${this.name} = ${this.plus()}