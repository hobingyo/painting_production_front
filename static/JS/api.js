const backend_base_url = "http://127.0.0.1:5555/"
const frontend_base_url = "http://127.0.0.1:11920/"

async function handleSignin() {
    const signupData = {
        username: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value,
    }

    const response = await fetch('${backend_base_url}/signup', {
        method: 'POST',
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