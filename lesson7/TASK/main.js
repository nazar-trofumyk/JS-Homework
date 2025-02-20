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
    new User(3,'Petya','Likar','likos@gmail.com','+380128731873'),
    new User(4,'Nazar','Petrunyak','petro@gmail.com','+380128731873'),
    new User(5,'Stas','Kozak','kozak@gmail.com','+380128731873'),
    new User(6,'Roman','Martrunyk','martin@gmail.com','+380128731873'),
    new User(7,'Marta','Bereziak','Bereza@gmail.com','+380128731873'),
    new User(8,'Rostik','Komarov','komar@gmail.com','+380128731873'),
    new User(9,'Sergey','Zhykov','hekki@gmail.com','+380128731873'),
    new User(10,'Olya','Pisotska','pisok@gmail.com','+380128731873'),

]
console.log(users)

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsersId = users.filter(item =>item.id %2 ===0)
console.log(filteredUsersId)