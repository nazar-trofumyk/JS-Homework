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
                list.classList.add('list')
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
let btn = document.getElementsByClassName('back')[0]
btn.onclick= function (){
    location.href='index.html'
}

let postRep = false
let btnPost = document.getElementsByClassName('post')[0]
btnPost.onclick = function (){
    if (postRep){return}
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
        let postUser = document.getElementsByClassName('post_user')[0]
            for (const post of posts) {
                let divPost = document.createElement("div")
            divPost.classList.add('divPost')
                let title = document.createElement('h2')
                title.innerText =`${post.title}...`
                const btnPostDetails =document.createElement("button")
               btnPostDetails.classList.add('btn-post-details')
                btnPostDetails.innerText = 'Details'
                btnPostDetails.onclick = function (){
                    location.href=`post-details.html?id=${post.id}`
                }
                divPost.append(title,btnPostDetails)
                postUser.appendChild(divPost)
            }
postRep = true




        })
}

