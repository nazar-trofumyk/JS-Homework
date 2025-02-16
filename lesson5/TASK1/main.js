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
