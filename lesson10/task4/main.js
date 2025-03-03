// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div = document.getElementById('someNumber')
let localStr = localStorage.getItem('number')
localStr ++
localStorage.setItem('number',localStr)
div.innerText =localStr