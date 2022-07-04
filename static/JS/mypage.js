
window.onload = async function getMyData(){
    const myData = async () => {
        const response = await fetch(`${backend_base_url}/user/mypage/`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("access")
        },
    })
    return response.json();
    }

    
    myData().then((data) => {
        detail = data
        
        let username = detail['username']
        
        document.getElementById("name").innerHTML = username
        
        for (let i = 0; i < detail['article_set'].length; i++) {
            let title = detail['article_set'][i]['title']
            let image = detail['article_set'][i]['image']
            let contents = detail['article_set'][i]['contents']
            let article_id = detail['article_set'][i]['id']
            let temp_html = `
                        <article>
                            <header>
                                <span class="date">April 24, 2017</span>
                                <h2><a href="http://127.0.0.1:5500/templates/${article_id}/article_detail.html">${title}</a></h2>
                            </header>
                            <a href=""http://127.0.0.1:5500/templates/${article_id}/article_detail.html"" class="image fit"><img src="../static${image}" alt="" /></a>
                            
                        </article>
                    </section>`
                    $('#mypage-box').append(temp_html)
                    console.log(detail)
        }
}   )
}