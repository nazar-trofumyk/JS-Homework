// // let item = localStorage.getItem('asd');
// // console.log(item);
// // localStorage.clear();


// // localStorage.setItem('user', JSON.stringify({id: 1, name: 'kokos'}));
//
// // let userJSON = localStorage.getItem('user');
// // console.log(userJSON);
// // let user = JSON.parse(userJSON);
// // console.log(user);
// // user.age = 31;
// // console.log(user);
// // localStorage.setItem('user', JSON.stringify(user))
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'max', age: 31, status: true}
];
let userJson= localStorage.getItem('user')


let user =JSON.parse(userJson)
console.log(user)

localStorage.setItem('user',JSON.stringify(users))
let usersJson = localStorage.getItem('users')
console.log(usersJson)
let userParse = JSON.parse(usersJson)
user.age = 31
// //
// // localStorage.setItem('users', JSON.stringify(users));
//
//
// let usersJSON = localStorage.getItem('users');
// console.log(usersJSON);
// let users = JSON.parse(usersJSON);
// console.log(users);
// users.push({});
// console.log(users);
//
// localStorage.setItem('users', JSON.stringify(users));