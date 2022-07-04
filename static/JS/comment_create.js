// 댓글 작성 함수
async function handleCommentCreate() {

    const url = window.location.search.split('=')
    const url_id = url[1]

    const comment = document.getElementById("comment").value
    
    const commentData = {
        contents : comment,
    }

    // let form_data = new FormData()
    // form_data.enctype = "multipart/form-data"
    // form_data.append("contents", comment)

    const response = await fetch(`${backend_base_url}/article/commenting/${url_id}/`,{
        method:'POST',
        headers: {
            Accept: "application/json", 
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access"),
            "access-control-allow-origin" : "*"},
        body: JSON.stringify(commentData)
    })
    
    response_json = await response.json()
    window.location.reload()



    
}