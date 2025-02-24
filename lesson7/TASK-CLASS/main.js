// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car{
   constructor(mode, producer, year, maxSpeed, engineVolume) {
       this.mode=mode
      this.producer=producer
       this.year=year
   this.maxSpeed=maxSpeed
   this.engineVolume=engineVolume
   }


    drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
info(){for (const key in this) {console.log(key,this[key])}}
    increaseMaxSpeed (newSpeed){if (newSpeed > 0){this.maxSpeed = this.maxSpeed +newSpeed}}
    changeYear (year){if (year > 0){this.year = year}}
    addDriver (driver){if (driver){this.driver=driver}}
}
let car = new Car('Lancer-10','Mitsubishi',2010,210,2,5)
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(60)
car.changeYear(2015)
console.log(car)

// zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Princes{
    constructor(name,year,footSize) {
   this.name=name
    this.year=year
    this.footSize=footSize
    }
}

class Prince{constructor(name,year,spiller) {
this.name=name
this.year=year
this.spiller = spiller
}
}

const cinderellas =[
new Princes('Viktoria',18,36),
    new Princes('Viktoria',18,36),
    new Princes('Viktoria',18,37),
    new Princes('Viktoria',18,34),
    new Princes('Viktoria',18,34),
    new Princes('Viktoria',18,31),
    new Princes('Viktoria',18,33),
    new Princes('Viktoria',18,33),
    new Princes('Viktoria',18,34),
    new Princes('Viktoria',18,39),
]
for (const cinderella of cinderellas) {
    if (cinderella.footSize ===prince.spiller){
        prince.wife= cinderella

    }

}



const prince = new  Prince('Nazar',21,39)
const cindrelaFoot = cinderellas.find(item =>item.footSize ===prince.spiller)
console.log(cindrelaFoot)