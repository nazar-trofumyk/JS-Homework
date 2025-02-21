// #c
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(mode, producer, year, maxSpeed, engineVolume) {

    this.mode = mode
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
        this.increaseMaxSpeed = function (addSpeed) {
            if (addSpeed > 0) {
                this.maxSpeed = this.maxSpeed + addSpeed

            }
        }

        this.changeYear = function (year) {
            if (year > 0) {
                this.year = year
            }
        }
        this.addDriver = function (driver) {
            if (driver) {
                this.driver = driver
            }
        }

}
const carFirst = new Car('m5','BMW',2015,276,4)
console.log(carFirst)


carFirst.drive()
carFirst.increaseMaxSpeed(100)
console.log(carFirst)
carFirst.changeYear(2020)
console.log(carFirst)
carFirst.addDriver()
console.log(carFirst)