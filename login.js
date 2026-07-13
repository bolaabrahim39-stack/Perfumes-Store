const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

let users = [];

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener("click", login);

function login() {

    let email = emailInput.value.trim();
    let password = passwordInput.value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let currentUser = null;

    for (let i = 0; i < users.length; i++) {

        if (
            users[i].email === email &&
            users[i].password === password
        ) {
            currentUser = users[i];
            break;
        }

    }

    if (currentUser) {

        localStorage.setItem(
            "currentUser",
            JSON.stringify(currentUser)
        );

        alert("Login Successfully");

        window.location.href = "Home.html";

    } else {

        alert("Invalid Email or Password");

    }

}
