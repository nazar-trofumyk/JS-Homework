// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sum,currency,exchangeCurrency){
    let chosenCurrency

    for (const currencyElement of currency) {
        if (currencyElement.currency ===exchangeCurrency){
            chosenCurrency = currencyElement
        }

    }
    let result =sum/chosenCurrency.value
    return result
}



let curs =[{currency: 'USD', value: 25},
    {currency: 'EUR', value: 42}
]
exchange(500,curs,'USD')
console.log(exchange(500,curs,'USD'))


