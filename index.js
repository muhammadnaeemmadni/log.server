function postSign() {
    var user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    document.getElementById('name').value = "";

    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    const Http = new XMLHttpRequest();
    const url = "http://localhost:5000/signup";
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        document.getElementById("result").innerText = Http.responseText;
    }
    return false;


}

function login() {

    let Emails = document.getElementById("lemail").value;
    let Passwords = document.getElementById("lpassword").value;

    const Http = new XMLHttpRequest();
    // const url = 'https://logins-server.herokuapp.com/login';
    const url = "http://localhost:5000/login";

    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Emails,
        password: Passwords
    }));
    document.getElementById('lemail').value = ""
    document.getElementById('lpassword').value = ""
    Http.onreadystatechange = (e) => {
        document.getElementById("email").innerText = Http.responseText;
    }


    return false;
}