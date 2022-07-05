const url = window.location.search.split('=')
const url_id = url[1]



window.onload = async function articleDetail() {


    let articleDetail = async () => {
        let response = await fetch(`${backend_base_url}/article/${url_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem("access")
            },
        })
        return response.json();
    }

    let username = async () => {
        let response = await fetch(`${backend_base_url}/article/${url_id}/username/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem("access")
            },
        })
        return response.json();
    }
    username().then((data) => {
        user = data
        document.getElementById("name").innerHTML = user
    }
    )








    articleDetail().then((data) => {
        detail = data
        console.log(detail)
        let contents = detail['contents']
        document.getElementById("contents").innerText = contents
        console.log(contents)
        let image = detail['image']
        document.getElementById("image").innerText = image
        console.log(image)


        console.log(detail['comment_set'].length)
        for (let i = 0; i < detail['comment_set'].length; i++) {
            let comments = detail['comment_set'][i]['contents']
            let comment_id = detail['comment_set'][i]['id']
            console.log(comment_id)
            let user = detail['comment_set'][i]['user']

            let commentUsername = async () => {
                let response = await fetch(`${backend_base_url}/article/comment/${comment_id}/username`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + localStorage.getItem("access")
                    },
                })
                return response.json();
            }
            commentUsername().then((data) => {
                let comment_user = data
                console.log(comment_user)
                let temp_html = `
                <article>
                    <header>
                        <span class="date">April 24, 2017</span>
                        <h2>${comments}</h2>
                        <h2>${comment_user}</h2>
                        <button onclick="removeComment(${comment_id})">댓글 삭제</button>
                    </header>                     
                </article>
            </section>`
                $('#comments-box').prepend(temp_html)
            }
            )



        }
    })
}


async function removeArticle() {

    await deleteArticle(url_id)
    window.location.replace(`${fronted_base_url}/templates/article.html`)
}


async function removeComment(comment_id) {

    await deleteComment(comment_id)
    window.location.replace(`${fronted_base_url}/templates/article_detail.html?id=${url_id}`)
}


/// 게시물 수정
function updateMode() {


    let title = document.getElementById("title").value
    let content = document.getElementById("contents").value

    let updateData = {
        contents : content,
        title : title,
    }

    let response = await fetch(`${backend_base_url}/article/${url_id}/update/`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access"),
            "access-control-allow-origin": "*"
        },
        body: JSON.stringify(updateData)
    })

    response_json = await response.json()
    window.location.reload()

    await deleteComment(comment_id)
    
}
