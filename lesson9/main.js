// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div=document.createElement('div')

div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')

document.body.appendChild(div)
const clone =div.cloneNode(true)
document.body.appendChild(clone)

// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main','Products','About us','Contacts']
let ul = document.createElement("ul")
for (const item of arr) {
    let li = document.createElement("li")
    li.innerText = item
    ul.appendChild(li)
}
document.body.appendChild(ul)

// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

for (const item of coursesAndDurationArray) {
let divInfo = document.createElement('div')
let h1 = document.createElement('h1')
     h1.innerText = item.title
    let h2 = document.createElement("h2")
h2.innerText = item.monthDuration
    divInfo.append(h1,h2)
    document.body.appendChild(divInfo)
}
// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArraySecond = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
for (const course of coursesAndDurationArraySecond) {
   const item = document.createElement("div")
    item.classList.add('item')
    const title = document.createElement('h1')
title.classList.add('heading')
    title.innerText =course.title
const p = document.createElement('p')
p.classList.add('description')
p.innerText = course.monthDuration
item.append(title,p)
document.body.append(item)
}
