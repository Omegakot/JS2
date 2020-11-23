//start

let name=document.querySelector("#name1")
let phone=document.querySelector("#name2")
let placeholder=document.querySelector("#name1")
let btn=document.querySelector(".btn1")

//валидность имени
btn.addEventListener("click",()=>{
let text=name.value
console.log(text)
let reg=/\d/g
let result=text.match(reg)
console.log(result)

if(text==""){
name.style.border="2px solid red" 
}
if(result !==null){
name.style.border="2px solid red"
name.placeholder="введен некорректный формат"
}
else if(text!==""){
name.value="Отлично!"
name.style.border="2px solid green" }
})

//валидность телефона
let btn2=document.querySelector(".btn2").addEventListener("click",()=>{
let reg=/\+7\((\d[0-9]).\)(\d[0-9]).\-(\d[0-9]).\d/g 
let result=phone.value.match(reg) 
console.log(result)
if(phone.value==""){
phone.style.border="1px solid red" }
if(result==null){
phone.style.border="2px solid red"
phone.placeholder="введен некорректный формат"
}
else if(phone.value!==""){
phone.style.border="2px solid green"
console.log(`введен верный формат ${result}`) }
})

//* валидность почты
let text2="my-t4ts@main.ru"
let reg=/my+(\.|\-|\S)+\@+[a-z]+\.+ru/g
let result=text2.match(reg)
console.log(result)






  


