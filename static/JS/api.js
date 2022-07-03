const backend_base_url = "http://127.0.0.1:8000"
const frontend_base_url = "http://127.0.0.1:5500"


// 회원가입
async function handleSignin() {
    const signupData = {
        username: document.getElementById("floatingInput").value,
        password: document.getElementById('floatingPassword').value,
        email: document.getElementById('floatingEmail').value,
        fullname: document.getElementById('floatingFullname').value,
        // date : document.getElementById('floatingDate').value,
    }

    const response = await fetch(`${backend_base_url}/user/`, {
        headers: {
            Accept: "application/json",
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(signupData)
    }
    )
    response_json = await response.json()

    if (response.status == 200) {
        alert("회원가입 완료")
        window.location.replace(`${frontend_base_url}/templates/sign_in.html`);
    } else {
        alert(response.status)
    }
}

// 로그인
async function handleLogin() {
    // console.log("handle login")

    const loginData = {
        username: document.getElementById("floatingInput").value,
        password: document.getElementById('floatingPassword').value
    }

    const response = await fetch(`${backend_base_url}/user/api/token/`, {
        headers: {
            Accept: "application/json",
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(loginData)
    }
    )

    response_json = await response.json()
    console.log(response_json.access)


    if (response.status == 200) {
        localStorage.setItem("access", response_json.access)
        localStorage.setItem("refresh", response_json.refresh)


        const base64Url = response_json.access.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        localStorage.setItem("payload", jsonPayload);
        alert("{username}님의 접속을 환영합니다")
        window.location.replace(`${frontend_base_url}/templates/main.html`);
    } else {
        alert(response.status)
    }

}

// 로그아웃(적용전)

function logout() {
    localStorage.removeItem("")
    localStorage.removeItem("")
    localStorage.removeItem("")
    alert("로그아웃 하였습니다")
    window.location.replace(`${frontend_base_url}/templates/sign_in.html`)
}



async function postArticle(contents, title, paint, painting){

    const image = document.getElementById("fileinput").files[0]
    

    let form_data = new FormData()
    form_data.enctype = "multipart/form-data"
    form_data.append("image", image)
    form_data.append("title", title)
    form_data.append("contents", contents)
    form_data.append("paint", paint)
    form_data.append("painting", painting)
    console.log(form_data.get("image"))

    const response = await fetch(`${backend_base_url}/article/`,{
        method:'POST',
        headers: {
            // Accept: "multipart/form-data", 
            // "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + localStorage.getItem("access"),
            "access-control-allow-origin" : "*"},
        body:form_data
        

    })

    response_json = await response.json()
    console.log(response_json)



    // const articleData = {
    //     contents : contents,
    //     title : title,
    //     input : input,
    // }


    // const response = await fetch(`${backend_base_url}/article/`,{
    //     method:'POST',
    //     headers: {
    //         Accept: "application/json", 
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer " + localStorage.getItem("access"),
    //         "access-control-allow-origin" : "*"},
    //     body:JSON.stringify(articleData)
        

    // })
    // response_json = await response.json()
    // console.log(response_json)

}