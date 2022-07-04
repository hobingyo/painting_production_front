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
        let username = detail['username']
        document.getElementById("name").innerHTML = username
        for (let i = 0; i < detail['article_set'].length; i++) {
            let title = detail['article_set'][i]['title']
            let image = detail['article_set'][i]['image']
            console.log(image)
            let exposure_start_date = detail['article_set'][i]['exposure_start_date']
            let article_id = detail['article_set'][i]['id']
            let temp_html = `
            <div class="col-4">
                <div class="my_article" id="mypage-box">
                    <div class="article_wrap">
                        <div> ${exposure_start_date}</span></div>
                        <!--얘는 삭제예정-->
                        <div class="image_frame">
                            <img src="../static${image}" alt="" />
                        </div>
                        <div class="article_title">
                        <b id="title" style="font-size=300px;"><a href="${frontend_base_url}/templates/article_detail.html?id=${article_id}"> ${title}</b><span>
                        </div>
                    </div>
                </div>
            </div>`
            $('#mypage-box').prepend(temp_html)
            console.log(detail)
        }
    })
}