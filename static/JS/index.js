
// article 리스팅
async function getArticles(){

    const response = await fetch(`${backend_base_url}/article/all/`,{
        method:'GET',
    }
    )
    response_json = await response.json()
    
    return response_json
}


async function loadArticles(){
    
    articles = await getArticles()
    

    const article_list = document.getElementById("articles")
    

    articles.forEach(article => {
        console.log(article)
        const newArticle = document.createElement("li");
        newArticle.setAttribute("id", article._id)
        newArticle.innerText = article.title
        article_list.appendChild(newArticle)

    })


    const article_image = document.getElementById("image")


    articles.forEach(article => {
        const image = document.createElement("li");
        image.setAttribute("id", article._id)
        image.innerHTML = article.image
        article_image.appendChild(image)
    
    })
}






loadArticles();
getName();


