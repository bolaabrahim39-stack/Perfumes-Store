
const loggedUser = JSON.parse(localStorage.getItem("currentUser"));

const userSection = document.getElementById("userSection");

if (loggedUser && userSection) {

    userSection.innerHTML = `
        <i class="fa-solid fa-user"></i>
        <span id="userName">${loggedUser.name}</span>
        <a href="#" id="logoutBtn">Logout</a>
    `;

    document.getElementById("logoutBtn").addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("currentUser");

        alert("Logged out successfully.");

        window.location.href = "Home.html";

    });

}
