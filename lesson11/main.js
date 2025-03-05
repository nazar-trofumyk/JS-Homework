fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const {name,username,email} of users) {
            const div = document.createElement('div')
        div.innerText = ` NAME ${name} USERNAME ${username} EMAIL ${email}`
            div.style.border ='solid 1px red'
            div.style.width = '10%'
            document.body.appendChild(div)
        }
    })

