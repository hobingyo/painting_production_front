window.onload = async function articleGet() {
    const articleData = async () => {
        const response = await fetch(`${backend_base_url}/article/all/`, {
            method: 'GET',
            headers: {
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
            let output = art[i]['output']
            let title = art[i]['title']
            let article_id = art[i]['id']
            console.log(art[i]['image'])
            // console.log(art[i]['title'])
            let temp_html = `
            <div class="col-7 justify-content-center" onclick="location.href='${frontend_base_url}/templates/article_detail.html?id=${article_id}'">
                <div class="row justify-content-center">
                <div class="col">
                    <div style="color: white">
                        <h2>${title}</h2>
                    </div>
                    <div class="post_image_box">
                        <img src="http://127.0.0.1:8000/media/output/${output}" alt="" onclick="location.href='${frontend_base_url}/templates/article_detail.html?id=${article_id}'" style="max-width: 100%; max-height:100%; border: thick double black" />
                    </div>
                </div>
                </div>
            </div>`
            $('#article-box').prepend(temp_html)
            console.log(art)
        }
    })
}


