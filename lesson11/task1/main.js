// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// Could be GET or POST/PUT/PATCH/DELETE

let div = document.getElementsByClassName('productsBlock')[0]
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
console.log(cartsObject)
       const {carts}= cartsObject

        for (const cart of carts) {


let blockForCart = document.createElement('div')
            blockForCart.classList.add('box')

                blockForCart.innerText =`
id:${cart.id}
 discountedTotal:${cart.discountedTo}
            total:${cart.total}
            totalProducts:${cart.totalProducts}
            totalQuantity:${cart.totalQuantity}
            userId`
            for (const {id,title,price,quantity,total} of cart.products) {
                let ul = document.createElement('ul')
            let h2 = document.createElement('p')
                h2.innerText = 'PRODUCTS'
                let li = document.createElement('li')
                ul.appendChild(h2)
li.innerText = `  id:${id} Title:${title} Price:${price} quantity:${quantity} total:${total} `
                ul.appendChild(li)
                blockForCart.appendChild(ul)
            }

                div.appendChild(blockForCart)
            }



    })

