const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '10');

let box = document.getElementsByClassName('container')[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
 let {recipes} = recipesObject
        console.log(recipes)

        for (const recipe of recipes) {
            let container = document.createElement('div')
            container.classList.add('containerRecipe')
            box.appendChild(container)
            for (const keyRecipe in recipe) {

                if (Array.isArray(recipe[keyRecipe])){
let divForList =document.createElement('div')
                    divForList.classList.add('forList')
                    let btn = document.createElement('button')
                    btn.innerText = keyRecipe
                    let list  = document.createElement('ul')
                    // list.innerText = keyRecipe
                    for (const item of recipe[keyRecipe]) {
                       let li =document.createElement('li')
                    li.innerText = item
                        list.appendChild(li)

                    }
                    btn.onclick = function (){
                        if (list.style.display ==='none'){
                            list.style.display = 'block'

                        }else {
                            list.style.display ='none'
                        }

                    }

                    divForList.appendChild(btn)
                    divForList.appendChild(list)
                    container.appendChild(divForList)
                }else {  let target = document.createElement("div")
                    target.innerText=`${keyRecipe}:${recipe[keyRecipe]}`

                    container.appendChild(target)}


            }



        }




    })