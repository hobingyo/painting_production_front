const backend_base_url = "http://127.0.0.1:8000"
const frontend_base_url = "http://127.0.0.1:5500"

const urlParams = new URLSearchParams(window.location.search);
const article_id = urlParams.get('id'); // username으로??
console.log(article_id)
// let liked = false



// 게시글 포스팅(articles) - 이미지 제작 후 바로 게시글로 넘어가도록
function handleArticleCreate() {
    // console.log("create article")
    const content = document.getElementById("article_content").value
    const image = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "그려그려그림판";
    link.click();
    postArticle(content) // content 혹은 image로
}

// 게시글 불러오기 - 게시물 내용(이미지, 유저이름, 댓글 끝(?))
async function loadArticle(article_id) {
    const article = await getArticleDetail(article_id);
    console.log(article)
    const image = canvas.toDataURL("image/jpg");
    const content = document.getElementById("content")
    const time = document.getElementById("time")
    time.innerText = article.time
    // const title = document.getElementById("title")
    // const user_email = document.getElementById("user_email")
    // const like_button = document.getElementById("like_button")
    // title.innerText = article.title
    // content.innerText = article.content
    // user_email.innerText = article.user_email
    // like_button.innerText = article.likes_count


    const comment_section = document.getElementById("comment_section")
    comment_section.innerHTML = ''

    for (let i = 0; i < article.comments.length; i++) {
        const new_comment = document.createElement("p")
        new_comment.innerText = article.comments[i].content
        comment_section.appendChild(new_comment)
    }

    // for (const comment of article.comments){
    //     const new_comment = document.createElement("p")
    //     console.log(comment)
    //     new_comment.innerText = comment.content
    //     comment_section.appendChild(new_comment)
    // }
    updateLike()
    const user = await getName()
    if (user.id != article.user) {
        const update_button = document.getElementById("update_button")
        const delete_button = document.getElementById("delete_button")
        update_button.style.visibility = "hidden"
        delete_button.style.visibility = "hidden"
    }

}

