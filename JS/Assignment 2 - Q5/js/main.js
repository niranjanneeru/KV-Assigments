let button = document.getElementById('button');
let timer = document.getElementById("timer");
let timer1 = document.getElementById("timer1");

function control_timer(){
    timer.innerHTML = new Date().toUTCString();
    timer1.innerHTML = Date.now();
}

button.addEventListener("click", control_timer);

window.onload = () => {
    control_timer();
}