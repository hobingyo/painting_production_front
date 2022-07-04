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
            let article_id = art[i]['id']
            console.log(art[i]['image'])
            console.log(art[i]['title'])
            let temp_html = `
                        <article>
                            <header>
                                <span class="date">April 24, 2017</span>
                                <h2><a href="http://127.0.0.1:5500/templates/article_detail.html?=${article_id}">${title}</a></h2>
                            </header>
                            <a href="http://127.0.0.1:5500/templates/article_detail.html?id=${article_id}" class="image fit"><img src="../static${image}" alt="" /></a>
                            
                        </article>
                    </section>`
                    $('#article-box').append(temp_html)
                    console.log(art)
        }
}   )
}
