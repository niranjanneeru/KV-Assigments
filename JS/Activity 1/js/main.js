let my_interval;
let timer_val;
let button = document.getElementById('button');
let timer = document.getElementById("timer");


const stop_timer = () => {
    clearInterval(my_interval);
    button.innerHTML = "Start";
}

const update_time = () => {
    if(timer_val == 0) return stop_timer();
    timer_val -= 1;
    timer.innerHTML = timer_val;
}

const start_timer =  () => {
    if(+document.getElementById("seconds").value <= 0){
        timer.innerHTML = "Invalid Time";
        return;
    }
    
    timer_val = +document.getElementById("seconds").value;
    timer.innerHTML = timer_val;
    my_interval = setInterval(update_time, 1000);
    button.innerHTML = "Stop";
}

function control_timer(){
    if(button.innerHTML === "Stop"){
        stop_timer();
    }else{
        start_timer();
    }
}

button.addEventListener("click", control_timer);