const backend_base_url = "http://127.0.0.1:8000"
const frontend_base_url = "http://127.0.0.1:5000"

async function handleSignin() {
    const signupData = {
        username: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value,
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
        window.location.replace('${frontend_base_url}/templates/sign_in.html');
    } else {
        alert(response.status)
    }
}