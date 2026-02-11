const lamp = document.getElementById("lamp");
const username = document.getElementById("username");
const password = document.getElementById("password");

function turnOnLamp() {
    lamp.classList.add("active");
}

function turnOffLamp() {
    lamp.classList.remove("active");
}

username.addEventListener("focus", turnOnLamp);
password.addEventListener("focus", turnOnLamp);

username.addEventListener("blur", turnOffLamp);
password.addEventListener("blur", turnOffLamp);
