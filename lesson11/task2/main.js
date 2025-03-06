const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '10');

let container = document.getElementsByClassName('container')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject
        for (const recipe of recipes) {
            let box= document.createElement('div')
            box.classList.add('target')

            for (const key in recipe) {
                if (Array.isArray(recipe[key])) {
                    let ul = document.createElement('ul')
                    let button = document.createElement('button')
                    button.innerText=`Show ${key}`
ul.innerText = `${key}:`


                    const array = recipe[key]
                    for (const arrayElement of array) {
                        let li = document.createElement("li")
                        li.innerText = `${arrayElement}`
                        ul.appendChild(li)
                    }


                    box.appendChild(ul)
                } else {
                    let forItem = document.createElement('div')
                    forItem.classList.add('item')
                    box.appendChild(forItem)
                    forItem.innerText = `${key} : ${recipe[key]}`
                    box.appendChild(forItem)
                }

            }
            container.appendChild(box)
        }





    })