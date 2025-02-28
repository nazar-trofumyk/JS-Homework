// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// let exchange =(sumUAH,currencyValues,exchangeCurrency) =>{
//
// console.log(exchange(50
//     ,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))

let exchange =(values,currencyValues,exchangeCurrency) =>{
    for (const value of values) {
        for (const item of currencyValues) {
         if (value.usd){}
        }
    }
}



console.log(exchange([{usd:200,eur:50}],[{currency:'USD',value:40},{currency:'EUR',value:42}],'UAH'))