
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
        console.log(detail)
        let username = detail['username']
        document.getElementById("name").innerHTML = username
        console.log(detail['article_set'][2]['contents'])
        for (let i = 0; i < detail['article_set'].length; i++) {
            let title = detail['article_set'][i]['title']
            let image = detail['article_set'][i]['image']
            let contents = detail['article_set'][i]['contents']
            console.log(detail['article_set'][i]['title'])
            console.log(detail['article_set'][i]['image'])
            console.log(detail['article_set'][i]['contents'])
            let temp_html = `
                        <article>
                            <header>
                                <span class="date">April 24, 2017</span>
                                <h2><a href="#">${title}</a></h2>
                            </header>
                            <a href="generic.html" class="image fit"><img src="../static${image}" alt="" /></a>
                            
                        </article>
                    </section>`
                    $('#mypage-box').append(temp_html)
                    console.log(detail)
        }
}   )
}