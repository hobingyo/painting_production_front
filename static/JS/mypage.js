
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
            let author = detail['article_set'][i]['author']
            let title = detail['article_set'][i]['title']
            let image = detail['article_set'][i]['image']
            let exposure_start_date = detail['article_set'][i]['exposure_start_date']
            let article_id = detail['article_set'][i]['id']
            let temp_html = `
            <div class="row justify-content-md-center">
            <div class="col-md-auto" >
            <div class="my_article" id="mypage-box">
                <b id="title"><a href="http://127.0.0.1:5500/templates/article_detail.html?=${article_id}"> ${title}</b><span> | ${exposure_start_date}</span> <span> </span>
                <!--얘는 삭제예정-->
                <div class="image_frame">
                <a href="http://127.0.0.1:5500/templates/article_detail.html?=${article_id}" class="image fit"><img src="../static${image}" alt="" /></a>
                </div>
            </div>
        </div>
        </div>` 
                    $('#mypage-box').append(temp_html)
                    console.log(detail)
        }
}   )
}