// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id,name,surname,email,phone){
    this.id =id
    this.name =name
  this.surname=surname
    this.email =email
    this.phone =phone
}

let users =[
   new User(1,'Vasya','Kokos','kokos@gmail.com','+380128731873'),
    new User(2,'Oleh','Tymochyk','Tym31@gmail.com','+380128731873'),
    new User(4,'Petya','Likar','likos@gmail.com','+380128731873'),
    new User(3,'Nazar','Petrunyak','petro@gmail.com','+380128731873'),
    new User(6,'Stas','Kozak','kozak@gmail.com','+380128731873'),
    new User(7,'Roman','Martrunyk','martin@gmail.com','+380128731873'),
    new User(8,'Marta','Bereziak','Bereza@gmail.com','+380128731873'),
    new User(5,'Rostik','Komarov','komar@gmail.com','+380128731873'),
    new User(9,'Sergey','Zhykov','hekki@gmail.com','+380128731873'),
    new User(10,'Olya','Pisotska','pisok@gmail.com','+380128731873'),

]
console.log(users)

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsersId = users.filter(item =>item.id %2 ===0)
console.log(filteredUsersId)
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.sort(function (a,b){return a.id - b.id} )
console.log(sortedUsers)

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client (id,name,surname,email,phone,...products) {
    this.id = id
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = products
}
function Product(title,price){
       this.title=title
this.price =price

   }


let clients = [
    new Client (1,"Олександр","Іваненко",'olexandr.ivanenko@example.com','+380671234567',new Product ('phone','$1323') ,new Product()),
    new Client (9,"Марія","Іваненко",'maria.ivanenko@example.com',"+380671234567",new Product ('phone','$1323')),
    new Client (8,"Андрій","Іваненко",'andrii.ivanenko@example.com',"+380671234567",new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323')),
    new Client (5,"Роман","Іваненко",'roma.ivanenko@example.com',"+380671234567",new Product ('phone','$1323'),new Product ('phone','$1323')),
    new Client (6,"Олег","Іваненко",'Oleg.ivanenko@example.com',"+380671234567",new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323')),
    new Client (7,"Станіслав","Іваненко",'stas90.ivanenko@example.com',"+380172454567",new Product ('phone','$1323'),new Product ('phone','$1323')),
    new Client (3,"Марта","Іваненко",'marta91.ivanenko@example.com',"+380577234567",new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323')),
    new Client (2,"Вікторія","Іваненко",'Viktoria10.ivanenko@example.com',"+380671234567",new Product ('phone','$1323'),new Product ('phone','$1323')),
    new Client (10,"Ігор","Іваненко",'igor.ivanenko@example.com',"+380611233527",new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323')),
    new Client (4,"Ростислав","Іваненко",'rost_man.ivanenko@example.com',"+380671233167",new Product ('phone','$1323'),new Product ('phone','$1323'),new Product ('phone','$1323'))
]


console.log(clients)
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedOrderList = clients.sort((a,b)=>a.order.length-b.order.length)
console.log(sortedOrderList)

