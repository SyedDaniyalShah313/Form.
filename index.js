document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Daniyal" && password === "1234") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});