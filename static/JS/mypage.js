window.onload = async function getMyData() {
    const myData = async () => {
        const response = await fetch(`${backend_base_url}/user/mypage/`, {
            method: 'GET',
            headers: {
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
        for (let i = 0; i < detail['article'].length; i++) {
            let title = detail['article'][i]['title']
            let output = detail['article'][i]['output']
            let exposure_start_date = detail['article'][i]['exposure_start_date']
            console.log(title)
            let article_id = detail['article'][i]['id']
            let temp_html = `
            <div class="col-4">
                <div class="my_article" id="mypage-box">
                    <div class="article_wrap">
                        <div> ${exposure_start_date}</span></div>
                        <div class="image_frame">
                            <img src="http://127.0.0.1:8000/media/output/${output}" alt="" />
                        </div>
                        <div class="article_title">
                        <b id="title" style="font-size=300px; "><a href="${frontend_base_url}/templates/article_detail.html?id=${article_id}" style="color:black"> <${title}></b><span>
                        </div>
                    </div>
                </div>
            </div>`
            $('#mypage-box').prepend(temp_html)
            console.log(detail)
        }
    })
}