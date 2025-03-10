const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
let block = document.getElementsByClassName('block-for-user')[0]
console.log(userId);
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        console.log(user)
        let wrapper = document.createElement('div' )
        for (const userKey in user) {
            let p = document.createElement('p')
            let item = user[userKey]
            if (typeof item ==='object' ){
                let list =document.createElement('ul')
                list.innerText=`${userKey}`
                for (const key in item) {
                    let li = document.createElement('li')
                    if (typeof item[key] === 'object') {
                        li.innerText = `${key}: { Lat: ${item[key].lat}, Lng: ${item[key].lng} }`;
                    } else {
                        li.innerText = `${key}:${item[key]}`;
                    }
                    list.appendChild(li)
                }
                wrapper.appendChild(p)
                wrapper.appendChild(list)
            }else { p.innerText =`${userKey}:${user[userKey]}`
                wrapper.appendChild(p)}

        }

wrapper.classList.add('wrapper_user')
block.appendChild(wrapper)



    })
