// var holder = document.getElementById('holder'),
//     state = document.getElementById('status');
//
// if (typeof window.FileReader === 'undefined') {
//   state.className = 'fail';
// } else {
//   state.className = 'success';
//   state.innerHTML = 'File API & FileReader available';
// }
//
// holder.ondragover = function () { this.className = 'hover'; return false; };
// holder.ondragend = function () { this.className = ''; return false; };
// holder.ondrop = function (e) {
//   this.className = '';
//   e.preventDefault();
//
//   var file = e.dataTransfer.files[0],
//       reader = new FileReader();
//   reader.onload = function (event) {
//     console.log(event.target);
//     holder.style.background = 'url(' + event.target.result + ') no-repeat center';
//   };
//   console.log(file);
//   reader.readAsDataURL(file);
//
//   return false;
// };

$('.content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e){
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

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);

    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('하나만 업로드 해주세요');
        return;
    }
    if (files[0].type.match(/image.*/)) {
                $(e.target).css({
            "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%"
        });
    }else{
      alert('이미지 파일을 드롭해주세요');
      return;
    }
}