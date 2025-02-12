// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


function array(numbers){

    let min = numbers[0]

    for (const number of numbers) {
        if (number < min) {
            min = number
        }

    }
    return min;

}

let someNumber =[11,12,313,44,55,9,2,4,6655,65]
array(someNumber)
console.log(array(someNumber))
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

 function sum(arr){
    let counter = 0
     for (const arrElement of arr) {
     counter=counter + arrElement
     }

return counter
}


 let check = [1,2,10]
sum(check)
console.log(sum(check))