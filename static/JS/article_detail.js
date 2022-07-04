
window.onload = async function articleDetail(){
    
    let url = window.location.search.split('=')
    let url_id = url[1]
    

    let articleDetail = async () => {
        let response = await fetch(`${backend_base_url}/article/${url_id}/`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("access")
        },
    })
    return response.json();
    }
    
    let username = async () => {
        let response = await fetch(`${backend_base_url}/article/${url_id}/username/`,{
        method:'GET',
        headers:{
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









// 게시글 작성자 아이디, 게시글 내용, 이미지, ////////// 반복 코멘트 작성자, 코멘트 내용


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
                let response = await fetch(`${backend_base_url}/article/comment/${comment_id}/username`,{
                method:'GET',
                headers:{
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
                    </header>                     
                </article>
            </section>`
            $('#comments-box').append(temp_html)
            }
            )
            

                    
        }
}   )
}


// // 댓글 작성 함수
// async function handleCommentCreate() {

//     const url = window.location.search.split('=')
//     const url_id = url[1]

//     const comment = document.getElementById("comment").value
    

//     let form_data = new FormData()
//     form_data.enctype = "multipart/form-data"
//     form_data.append("contents", comment)

//     const response = await fetch(`${backend_base_url}/article/commenting/${url_id}/`,{
//         method:'POST',
//         headers: {
//             Accept: "application/json", 
//             "Content-Type": "application/json",
//             "Authorization": "Bearer " + localStorage.getItem("access"),
//             "access-control-allow-origin" : "*"},
//         body: form_data
    
//     })

//     response_json = await response.json()
//     console.log(response_json)

    
// }




