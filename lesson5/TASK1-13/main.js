// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let ab = (a,b) => a * b
console.log(ab(10,5))

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
 let radius =(r)=>3.14 * r *2
console.log(radius(5))
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let area = (h,r) => 2*3.14* r *(h+r)
console.log(area(10,5))
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let masuv =[123,31,41,'okten','hello',false,true]
 let element =(arr) =>{for (const item of arr) {console.log(item)}
 }
console.log(element(masuv))
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let writer =(text) => document.write(`<p>${text} </p>`)
console.log(writer('Hello world'))
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 let writerSecond = (text)=>{
 document.write(`<ul>`)
 for (let i = 0; i < 3; i++) {
   document.write(`<li> ${i} ${text} </li>`)

  }
 document.write(`</ul>`)
 }
 writerSecond('Hello Okten')
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий. Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл)
let liCreator = (text,number) =>{
 document.write(`<ul>`)
 for (let i = 0; i < number ; i++) {
document.write(`<li> ${text} </li>`)
 }
 document.write(`</ul>`)
}
liCreator('Hello from Ukraine', 6)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список
 let liCreatorSecond =(arr) =>{
document.write(`<ul>`)
  for (const item of arr) {
document.write(`<li> ${item}  </li>`)
  }
  document.write(`</ul>`)
 }
 let nav = ['menu','about','contact','help',false,true]
liCreatorSecond(nav)
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let divCreator = (arr) =>{
document.write(`<div class="container">`)
 for (const item of arr) {
  document.write(`<div class="box"><h1> NAME : ${item.name}</h1>
<h2> AGE :${item.age} </h2>
<h3> ID : ${item.id}</h3>
</div>`)

 }
document.write(`</div>`)
}

let allUsers = [
 {name:'Vasya',id:'1',age:55},
 {name:'Vlad',id:'2',age:23},
 {name:'Viktoria',id:'3',age:22},
 {name:'Olya',id:'4',age:18},
 {name:'Roman',id:'5',age:24},
 {name:'Oleg',id:'6',age:20},
 {name:'Nazar',id:'7',age:19}
]
divCreator(allUsers)
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let smallNumber = (numbers) =>{
let min = numbers[0]
 for (const number of numbers) {
  if (number < min){
 min = number
  }
 }
 return min
}
let arrNumbers = [12,4,554,6,76,8,4,7,84,8,57,8,967,0]
smallNumber(arrNumbers)
console.log(smallNumber(arrNumbers))

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arrSecond) =>{
 let counter = 0
 for (const arrElement of arrSecond) {
  counter=counter + arrElement
 }

 return counter
}


let check = [1,2,10]
sum(check)
console.log(sum(check))
    // #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr,index1,index2) =>{
 let forSwap = arr[index1]
 arr[index1] = arr[index2]
 arr[index2] = forSwap
}
let swapArr = [11,22,44,66,77]
swap(swapArr,0,1)
console.log(swapArr)
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange=(sumUAH,currencyValues,exchangeCurrency) =>{
 for (const item of currencyValues) {
 if (item.currency == exchangeCurrency){
return    sumUAH/item.value
 }

 }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
console.log(exchange(2500,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))