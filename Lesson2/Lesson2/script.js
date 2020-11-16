// // класс товара
// class Good {
// name="scs"
// price=23
// count=0
// plus(){
//  this.count++
// return this.count
// }
// minus(){
// this.count--
// return this.count
// }
// constructor(name,price){
// this.name=name
// this.price=price
// let btn=document.createElement("button")
// btn.innerText="Добавить в корзину"
// let div=document.querySelector(".good")
// div.innerHTML=`<h3>${this.name}-цена ${this.price} руб</h3>`
// div.appendChild(btn)
// btn.addEventListener("click",(event)=>{
// let main=document.querySelector(".main")
// main.innerHTML=`<h3>${this.name} в количестве ${this.plus()}</h3>`
// })

// } }
// // класс Список Товаров

// class List{
//     items=[]
//     constructor(...items){
//         this.items=items

//     }
 
// }

// let Goods=new Good ("Яблоко",23)
// let Goods1=new Good ("Груша",20)
// let Cart= new List(Goods,Goods1)
// console.log(Cart)

class List {
    items = []
  
    constructor () {
      // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
      let goods = this.fetchGoods()
  
      // трансформируем наш массив со свойствами в массив с объектами
      goods = goods.map(cur => {
        return new GoodItem(cur)
      })
  
      // поштучно добавляем объекты в наш список
      // ссылка на статью про spread оператор ниже
      this.items.push(...goods)
  
      // запускаем рендер
      this.render()
    }
  
    /**
     * Заглушка - имитатор запроса на сервер
     * Возвращает свойства, на основании которых будут создаваться объекты
     **/ 
    fetchGoods () {
      return [
        { name: 'Shirt', price: 150 },
        { name: 'Socks', price: 15 },
        { name: 'Jacket', price: 50 },
        { name: 'Shoes', price: 1500 },
      ]
    }
  
    render () {
      // В this.items у нас хранятся объекты GoodItem
      // Проходимся по каждому такому объекту и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
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
  
    // в аргументах применена деструктуризация (ссылка на статью ниже)
    constructor ({ name, price }) {
      this.name = name
      this.price = price
    }
  
    render () {
      // находим место куда рендерить
      const placeToRender = document.querySelector('.good')
      console.log(placeToRender)
      if (placeToRender) {
        // создаем блок, в который помещаем информацию о товаре
        const block = document.createElement('div')
        block.innerHTML = `<h3>Товар: ${this.name} = ${this.price}</h3>`
  
        // помещаем созданный блок на страницу
        placeToRender.appendChild(block)
        let btn=document.createElement("button")
        btn.innerText="Добавить в корзину"
        block.appendChild(btn)
        btn.addEventListener("click",(event)=>{
        
        const main = document.querySelector('.main')
        let div2=document.createElement("div")

        div2.innerHTML=`<h3>${this.name} = ${this.plus()}</h3>`
        main.appendChild(div2)
      
        
        
        })

      }
    }
  }
  const ListInstance = new List()