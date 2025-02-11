// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function writer(arr){
    for (const arrElement of arr) {
   console.log(arrElement)
    }
}
const users = [
    { id: 1, name: "Олександр", age: 25, email: "olex@example.com" },
    { id: 2, name: "Марія", age: 30, email: "maria@example.com" },
    { id: 3, name: "Іван", age: 22, email: "ivan@example.com" },
    { id: 4, name: "Наталія", age: 28, email: "natali@example.com" },
    { id: 5, name: "Дмитро", age: 35, email: "dmytro@example.com" }
];
writer(users)