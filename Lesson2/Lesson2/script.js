class List {
items = []
constructor () {
let goods = this.fetchGoods()
goods = goods.map(cur => {
return new GoodItem(cur)
})
this.items.push(...goods)
this.render()
}
fetchGoods () {
return [
{ name: 'Shirt', price: 150 },
{ name: 'Socks', price: 15 },
{ name: 'Jacket', price: 50 },
{ name: 'Shoes', price: 1500 },
]
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
const main = document.querySelector('.main')
btn.addEventListener("click",(event)=>{


div2.innerHTML=`<h3>${this.name} = ${this.plus()}</h3>`

main.appendChild(div2)


})

}

}
}
const ListInstance = new List()