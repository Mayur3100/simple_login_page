const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const message = document.getElementById("message");

// Show or hide password
showPassword.addEventListener("change", function () {
    passwordInput.type = this.checked ? "text" : "password";
});

// Handle login form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Login form submitted successfully!";
});