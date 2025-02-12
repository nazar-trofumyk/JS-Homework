// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function writer(text,textSecond){
   document.write(`<ul>`)
    for (let i = 0; i <textSecond ; i++) {
        document.write(`<li> ${textSecond}</li>`)
    }
    document.write(`</ul>`)
}
writer('contact',4)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function foobar(arr){
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li> ${arrElement} </li>`)
    }
    document.write(`</ul>`)
}

let justArr = ['contact','about','help','menu',123,false]
foobar(justArr)
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function userCreator(users){
    for (const user of users) {
        document.write(`<div>
<h1> id: ${user.id} </h1>
<h2> name:${user.name}</h2>
<h3> age:${user.age}</h3>
</div>
`)
    }
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
userCreator(allUsers)








