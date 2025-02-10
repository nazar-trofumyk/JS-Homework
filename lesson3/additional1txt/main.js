// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [5,4,1, 1.4,6]
let stings=['hello','okten', 'JavaScript','HTML','CSS']
let stringNumberBool=[true,false,'dog',66,'FrontEnd' ]
let boxArr=[numbers,stings,stringNumberBool]
for (const boxArrElement of boxArr) {
    console.log(boxArrElement)

}
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr=[]
arr[0]='hello'
arr[1]=15
arr[2]=true
arr[3]=false
arr[4]=35
arr[length]='Last element'
console.log(arr)



// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
 let arrSecond = [42, "Hello", true, false, "JavaScript", 100, null, true, "okten", false];
for (let arrSecondElement of arrSecond) {
    if (typeof arrSecondElement === "boolean") {
        console.log(arrSecondElement)
    }

}
// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let number = [12 ,23 ,true,false,null,'okten','false','true',69,96,'JS']
for (let numberElement of number) {
    if (typeof numberElement === "number"){
        console.log(numberElement)
    }

}