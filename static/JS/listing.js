// window.onload = async function loadArticles(){
//     articles = await articleGet()
//     console.log(articles)
//     const article_list = document.getElementById("articles")


//     articles.forEach(article => {
//         const newArticle = document.createElement("div")
//         const articleImage = document.createElement("img")
//         articleImage.setAttribute("src", `${backend_base_url}${article.image}`)
//         newArticle.setAttribute("id",article._id)
//         newArticle.innerText = article.title
//         newArticle.setAttribute("onclick","articleDetail(this.id)")
//         newArticle.appendChild(articleImage)
//         article_list.appendChild(newArticle)
//     })
// }