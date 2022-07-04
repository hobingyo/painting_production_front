// 게시글 포스팅(articles) - 이미지 제작 후 바로 게시글로 넘어가도록
function handleArticleCreate() {

    console.log("create article")
    const contents = document.getElementById("article_content").value
    const title = document.getElementById("title").value
    
    const paint = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    const painting = link    
    // link.href = image;
    // link.download = "그려그려그림판";
    // link.click();



    postArticle(contents, title, paint, painting) // content 혹은 image로
}


