
// // article 리스팅
// async function getArticles(){

//     const response = await fetch(`${backend_base_url}/article/all/`,{
//         method:'GET',
//     }
//     )
//     response_json = await response.json()
    
//     return response_json
// }

window.onload = async function articleGet(){
    const articleData = async () => {
        const response = await fetch(`${backend_base_url}/article/all/`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("access")
        },
    })
    return response.json();
    }
    articleData().then((data) => {
        art = data
        console.log(art)
        for (let i = 0; i < art.length; i++) {
            let image = art[i]['image']
            let title = art[i]['title']
            console.log(art[i]['image'])
            console.log(art[i]['title'])
            let temp_html = `
                        <article>
                            <header>
                                <span class="date">April 24, 2017</span>
                                <h2><a href="#">${title}</a></h2>
                            </header>
                            <a href="generic.html" class="image fit"><img src="../static${image}" alt="" /></a>
                            
                        </article>
                    </section>`
                    $('#article-box').append(temp_html)
                    console.log(art)
        }
}   )
}



// async function loadArticles(){
    
//     articles = await getArticles()
    

//     const article_list = document.getElementById("articles")
    

//     articles.forEach(article => {
//         console.log(article)
//         const newArticle = document.createElement("li");
//         newArticle.setAttribute("id", article._id)
//         newArticle.innerText = article.title
//         article_list.appendChild(newArticle)

//     })


//     const article_image = document.getElementById("image")


//     articles.forEach(article => {
//         const image = document.createElement("li");
//         image.setAttribute("id", article._id)
//         image.innerHTML = article.image
//         article_image.appendChild(image)
    
//     })
// }






loadArticles();
getName();


