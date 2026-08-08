//Date & Time 
function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").innerHTML =
        now.toLocaleDateString() + " | " +
        now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();
