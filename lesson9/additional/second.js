// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function Constructor (id,name,username,email,addressStreet,addressSuite,addressCity,addressZipcode,geoLat,geoIng,phone,website,companyName,companyCatchPhrase,companyBs)
{
    this.id=id
        this.name=name
        this.username=username
            this.email=email
    this.address={
        street:addressStreet,
        suite:addressSuite,
        cit:addressCity,
        zipcode:addressZipcode,
        geo:{   lat:geoLat,
            ing:geoIng},
    }
this.phone=phone
this.website=website
this.company ={
        name:companyName,
catchPhrase:companyCatchPhrase,
    bs:companyBs
    }
}
let test = [
    new Constructor(1,'Leanne Graham','Sincere@april.biz','Sincere@april.biz','Kulas Light', 'Apt. 556', 'Gwenborough',
        92998-3874,

        '-37.3159',
        '81.1496',

    '1-770-736-8031 x56442' ,
        'hildegard.org',
         'Romaguera-Crona',
 'Multi-layered client-server neural-net',
'harness real-time e-markets'


        )

]
console.log(test)

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]




// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function upper(str){
    for (const item of str) {
      let first=item[0]
  first.toUpperCase()
    }
return str
}
console.log(upper('hello okten'))
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
