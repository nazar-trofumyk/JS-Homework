const urlParamsSecond = new URLSearchParams(window.location.search);
const postId = urlParamsSecond.get('id');
console.log(postId)
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {console.log(post)
    let postDiv = document.getElementsByClassName('post')[0]
     postDiv.innerHTML = `<p> UserID:${post.userId}</p>
<p> PostID:${post.id}</p>
<p>Title:${post.title}</p>
<p>Body:${post.body}</p>
`


    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {console.log(comments)
        let comDiv = document.getElementsByClassName('comments')[0]
        for (const comment of comments) {
       console.log(comment)
    let comBox = document.createElement('div')
comBox.classList.add('com_box')
            comBox.innerHTML = `<p> PostId:${comment.postId}</p>
<p>ID:${comment.id}</p>
<p>Email:${comment.email}</p>
<p>Name:${comment.name}</p>
<p>Body:${comment.body}</p>
`
comDiv.appendChild(comBox)
        }

    })