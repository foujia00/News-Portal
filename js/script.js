//Date & Time 
function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").innerHTML =
        now.toLocaleDateString() + " | " +
        now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Login Popup
document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();   // stop page refresh
    alert("Login Successful!");
};