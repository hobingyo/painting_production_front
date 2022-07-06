// 게시글 포스팅(articles) - 이미지 제작 후 바로 게시글로 넘어가도록
function handleArticleCreate() {

    console.log("create article")
    const contents = document.getElementById("article_content").value
    const title = document.getElementById("title").value
    
    const paint = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    const painting = link    




    postArticle(contents, title, paint, painting) // content 혹은 image로
}

function img1(){

    let img = "filter01"
    sampleImg(img)
}

function img2(){
    let img = "filter02"
    sampleImg(img)
}

function img3(){
    let img = "filter03"
    sampleImg(img)
}

function apply(){

    let image = canvas.toDataURL("image/png")
    console.log(image)

    var blobBin = atob(image.split(',')[1]);	// base64 데이터 디코딩
    var array = [];
    for (var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    var file = new Blob([new Uint8Array(array)], {type: 'image/png'});	// Blob 생성
    var formdata = new FormData();	// formData 생성
    formdata.append("image", file, "image.png");	// file data 추가


    console.log(formdata)
    $.ajax({
        type : 'post',
        url : `${backend_base_url}/article/saveImage/`,
        data : formdata,
        headers: {
            // Accept: "application/json",
            // "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access"),
            "access-control-allow-origin": "*"
        },
        processData : false,	// data 파라미터 강제 string 변환 방지!!
        contentType : false,	// application/x-www-form-urlencoded; 방지!!
        success : function () {
            
        }
        
    })
}



