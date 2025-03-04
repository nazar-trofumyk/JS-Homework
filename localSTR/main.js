let productDiv= document.createElement('div')
let products = [
    {title:'milk',price:22,image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fmilk&psig=AOvVaw2GO9CMvmX5st4fybN1WhN7&ust=1741183363333000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC-9tDL8IsDFQAAAAAdAAAAABAJ'},
    {title: 'juice',price: 26,image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fmilk&psig=AOvVaw2GO9CMvmX5st4fybN1WhN7&ust=1741183363333000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC-9tDL8IsDFQAAAAAdAAAAABAJ'},
    {title: 'tomato',price: 47,image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fmilk&psig=AOvVaw2GO9CMvmX5st4fybN1WhN7&ust=1741183363333000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC-9tDL8IsDFQAAAAAdAAAAABAJ'},
    {title: 'tea',price: 15,image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fmilk&psig=AOvVaw2GO9CMvmX5st4fybN1WhN7&ust=1741183363333000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC-9tDL8IsDFQAAAAAdAAAAABAJ'}

]
let productsDiv =document.getElementsByClassName('products')[0]
for (const product of products) {
    let productBox = document.createElement('div')
productsDiv.appendChild(productBox)
let h2 = document.createElement('h2')
    h2.innerText =`${product.title} ${product.price} UAH`
let img = document.createElement('img')
img.src=product.image
    let btn =document.createElement('button')
    btn.innerText ='додати в корзину'
    productBox.append(h2,img,btn)
    btn.onclick = function (){
        let cart =JSON.parse(localStorage.getItem('cart')) || []/////дивимося чи є в сховищі елемент з назвою карт
        cart.push(product)
    localStorage.setItem('cart',JSON.stringify(cart))
    }
}
