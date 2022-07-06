function btn() {
  alert('입력하신 내용으로 포스팅하였습니다');

}

$('.content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e) {
  e.stopPropagation();
  e.preventDefault();
  if (e.type == "dragover") {
    $(e.target).css({
      "background-color": "black",
      "outline-offset": "-20px"
    });
  } else {
    $(e.target).css({
      "background-color": "gray",
      "outline-offset": "-10px"
    });
  }
}



// 파일 드래그 앤 드롭시 백엔드로 파일 보내는 함수
async function uploadFiles(e) {
  e.stopPropagation();
  e.preventDefault();
  dragOver(e);

  e.dataTransfer = e.originalEvent.dataTransfer;
  const files = e.target.files || e.dataTransfer.files;

  response_json = await response.json()
  console.log(response_json)

  
  if (files.length > 1) {
    alert('하나만 업로드 해주세요');
    return;
  }
  if (files[0].type.match(/image.*/)) {
    $(e.target).css({
      "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
      "outline": "none",
      "background-size": "100% 100%"
    })
  } else {
    alert('이미지 파일을 드롭해주세요');
    return;
  }
}

function transfer(files) {
  console.log(files)
 }

