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
