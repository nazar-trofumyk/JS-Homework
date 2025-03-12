fetch('https://jsonplaceholder.typicode.com/users')
    .then((asd) => asd.json())
    .then((users) => {
let div =document.getElementsByClassName('container')[0]

        for (const user of users) {
          let boxUsers = document.createElement('div')
        boxUsers.classList.add('box_Users')
        let h1 = document.createElement('h1')
        h1.innerText = `Id-${user.id}`
            let h2 = document.createElement('h2')
           h2.innerText =`Name-${user.name}`
let btn = document.createElement('button')
           btn.classList.add('details')
            btn.innerText = 'Details Info'
            btn.onclick =function (){
              location.href = `user-details.html?id=${user.id}`

            }
            boxUsers.append(h1,h2,btn)
            div.appendChild(boxUsers)
        }
    })