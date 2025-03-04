<!--#RbQGnH5DuC-->
<!--В localStorage зберігаються масиви.
Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт-->
<!--сигнатура функції - -->
<!--addToLocalStorage(arrayName:string,objToAdd:any{}):void-->

function addToLocalStorage(key,objToAdd){
const lsItem  = localStorage.getItem(key)
if (!lsItem){
    throw new Error('there is such array')
}
const array = JSON.parse(lsItem)
array.push(objToAdd)

    const jsonArr = JSON.stringify(array)
    localStorage.setItem(key,jsonArr)

}
addToLocalStorage('sessionlist',{})