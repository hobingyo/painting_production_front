const url = window.location.search.split('=')
const url_id = url[1]

// 게시물 상세 페이지 부르기
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

    // 게시물 상세 내용
    articleDetail().then((data) => {
        detail = data
        console.log(detail)

        let title = detail['title']
        document.getElementById("article_title").innerText = title
        console.log(title)

        let contents = detail['contents']
        document.getElementById("contents").innerText = contents
        console.log(contents)

        let image = detail['image']
        document.getElementById("image").innerText = image
        console.log(image)

        // 댓글 리스팅
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
                    let temp_html =
                        `<article class="comment">
                    <header>
                        <h5 style="max-width:400px"> 🌈${comment_user} : ${comments}</h5>
                    </header>                     
                         <div style="display: flex; margin-left:auto; max-height: 35px;">
                            <button onclick="removeComment(${comment_id})" style="bottom:0;">삭제</button>
                         </div>
                </article>
            </section>`
                    $('#comments-box').prepend(temp_html)
                }
            )


        }
    })
}

// 게시물 삭제
async function removeArticle() {

    await deleteArticle(url_id)
    window.location.replace(`${fronted_base_url}/templates/article.html`)
}

// 댓글 삭제
async function removeComment(comment_id) {

    await deleteComment(comment_id)
    window.location.replace(`${fronted_base_url}/templates/article_detail.html?id=${url_id}`)
}


/// 게시물 수정
async function updateArticle() {


    let title = document.getElementById("title").value
    let contents = document.getElementById("contents-update").value
    console.log(contents)


    // updateArticle(contents, title)
    let updateData = {
        contents: contents,
        title: title,
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

}

/// 댓글 수정
//
// async function updateComment(comment_id) {
//
//     let contents = document.getElementById("comments-update").value
//
//     console.log(contents)
//     console.log(comment_id)
//
//
//
//     let updateData = {
//         contents: contents,
//
//     }
//
//     let response = await fetch(`${backend_base_url}/article/comment/${comment_id}/`, {
//         method: 'PUT',
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             "Authorization": "Bearer " + localStorage.getItem("access"),
//             "access-control-allow-origin": "*"
//         },
//         body: JSON.stringify(updateData)
//     })
//
//     response_json = await response.json()
//     window.location.reload()
//
// }


// 모달

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})