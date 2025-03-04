// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


let curently =+localStorage.getItem('number')
curently +=1
localStorage.setItem('number',curently)
document.getElementById('someNumber').innerText = curently