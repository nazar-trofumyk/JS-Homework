// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const table = document.getElementsByClassName('table')[0]
let formGen = document.forms.generator
formGen.onsubmit = function (ev){
    ev.preventDefault()
let lnValue = +generator.lines.value
    let celValue = +generator.cells.value
let text = generator.text.value

    for (let i = 0; i < lnValue ; i++) {
        let tr = document.createElement('tr')
table.appendChild(tr)
        for (let j = 0; j < celValue ; j++) {
            let td =document.createElement('td')
        td.innerText = text
            table.appendChild(td)

        }

    }

}
