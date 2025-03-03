// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з i
const button = document.getElementById('btn')
 button.onclick = function (){
    const divNone = document.getElementById('text')
divNone.style.display = 'none'
}

// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж
// 18, та повідомити про це користувача

const btn = document.getElementsByClassName('button')[0]
btn.onclick = function (){
const input = document.getElementsByClassName('ageInfo')[0]
    if (+input.value >= 18){
        alert('Підтверджено')

    }else {
        alert('Вам немає 18,будь ласка зачекайте декілька років')
    }


}
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами :
// заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const  form = document.forms.formForUser
form.onsubmit = function (ev){
    ev.preventDefault()
}
const create =document.getElementsByClassName('create')[0]
create.onclick = function (){
const  name = formForUser.name.value
    const  surname = formForUser.surname.value
    const  age = formForUser.age.value
    let obj = {name,surname,age}
    console.log(obj)
    let divWithInfo = document.createElement('div')
    divWithInfo.classList.add('boxUser')
    document.body.appendChild(divWithInfo)
let h2= document.createElement('h2')
h2.innerText = 'Name:' + name
   let p = document.createElement('p')
    p.innerText = 'Surname:' + surname
let ageP = document.createElement('p')
    ageP.innerText = 'Age:'   + age
    divWithInfo.append(h2,p,ageP)
    form.style.display ='none'
}
