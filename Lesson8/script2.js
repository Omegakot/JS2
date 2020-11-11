//Алгоритм корзины
class Cart {
cart = []
constructor (...items) {
this.cart.push(...items)
}
}

class Product {
name = ''
price = 0
volume=0
constructor (name, price){
this.name = name
this.price = price
this.volume=0
}
}
//Подсчет стоимости
const CartInstance = new Cart(new Product('Груша',99,0), new Product('Яблоко',100,0))


// рендеринг
let body=document.querySelector("body")
let h3= document.querySelectorAll("h3")
let btn1=document.querySelector('#btn1')
let btn2=document.querySelector('#btn2')

let div=document.querySelector("#iter")
let span=div.querySelector("#ite1")
let h2=document.querySelector("#goodsh2")
let span1=document.querySelector('#goodsh3')

let summa=0

btn1.addEventListener("click",function(event){
event.preventDefault()
summa+=CartInstance.cart[0].price
CartInstance.cart[0].volume++
span.innerText=`${summa} рублей`
span.style.color="blue"
div.style.backgroundColor="gray"
div.style.color="white"
h2.style.color="green"
let items=document.createElement("h3")
let span3=document.createElement("span")
span1.innerText=`${CartInstance.cart[0].name} в количестве ${CartInstance.cart[0].volume} шт`
btnminus.style.display="block"
})

btn2.addEventListener("click",function(event){
event.preventDefault()
summa+=CartInstance.cart[1].price
CartInstance.cart[1].volume++
span.innerText=`${summa} рублей`
span.style.color="blue"
div.style.backgroundColor="gray"
div.style.color="white"
h2.style.color="green"
let items=document.createElement("h3")
span1.innerText=`${CartInstance.cart[1].name} в количестве ${CartInstance.cart[1].volume} шт`
btnminus2.style.display="block"
})
  
let btnminus=document.querySelector("#btnminus")
btnminus.addEventListener("click",function(event){
event.preventDefault()
summa-=CartInstance.cart[0].price
CartInstance.cart[0].volume--
span.innerText=`${summa} рублей`
span.style.color="blue"
div.style.backgroundColor="gray"
div.style.color="white"
h2.style.color="green"
let items=document.createElement("h3")

if(summa<=0){
span.innerText=`ваша корзина пуста`
summa=0
btnminus.style.display="none"
}
span1.innerText=`${CartInstance.cart[0].name} в количестве ${CartInstance.cart[0].volume} шт`
if(CartInstance.cart[0].volume<=0){
CartInstance.cart[0].volume=0
btnminus.style.display="none"
span1.innerText=`${CartInstance.cart[1].name} в количестве ${CartInstance.cart[1].volume} шт`   
}}
)

let btnminus2=document.querySelector("#btnminus2")
btnminus2.addEventListener("click",function(event){
event.preventDefault()
summa-=CartInstance.cart[1].price
CartInstance.cart[1].volume--
span.innerText=`${summa} рублей`
span.style.color="blue"
div.style.backgroundColor="gray"
div.style.color="white"
h2.style.color="green"
let items=document.createElement("h3")
if(summa<=0){
span.innerText=`ваша корзина пуста`
summa=0
btnminus2.style.display="none"
}
span1.innerText=`${CartInstance.cart[1].name} в количестве ${CartInstance.cart[1].volume} шт`
if(CartInstance.cart[1].volume<=0){
CartInstance.cart[1].volume=0
btnminus2.style.display="none"
span1.innerText=`${CartInstance.cart[0].name} в количестве ${CartInstance.cart[0].volume} шт` 
}
})
