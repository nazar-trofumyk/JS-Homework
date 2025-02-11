// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function writer(textInLi){
    document.write(`</ul>
<li>${textInLi}</li>
<li>${textInLi}</li>
<li>${textInLi}</li>
</ul>`)
}
let navList = 'About'
writer(navList)
