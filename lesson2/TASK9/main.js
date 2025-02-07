// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що
//     заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = prompt('Вкажіть день тиждня')
switch (day){
    case'Понеділок':
        console.log('1-Виконати ДЗ від Okten')
        console.log('2-Переглянути лекцію')
        console.log('3-Зайти на конференцію 19:00')
        break
    case'Вівторок':
        console.log('1-Зходити в зал')
        console.log('2-Переглянути лекцію')
        console.log('3-Виконати ДЗ від Okten')
        break
    case'Середа':
        console.log('1-Виконати ДЗ від Okten')
        console.log('2-Переглянути лекцію')
        console.log('3-Зайти на конференцію 19:00')
        break
    case'Четвер':
        console.log('1-Зходити в зал')
        console.log('2-Переглянути лекцію')
        console.log('3-Виконати ДЗ від Okten')
        break
    case'Пятниця':
        console.log('1-Виконати ДЗ від Okten')
        console.log('2-Переглянути лекцію')
        console.log('3-Зайти на конференцію 19:00')
        break
    case'Субота':
        console.log('1-Зайти на конференцію 10:00')
        console.log('2-Виконати ДЗ від Okten')
        console.log('3-Відпочинок')
        break
    case'Неділя':
        console.log('1-Виконати ДЗ від Okten')
        console.log('2-Футбол 14:00')
        console.log('Відпочинок')
        break

}