const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const reset = document.getElementById("reset");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
let minuteCountdown, secCountdown;
const message = document.getElementById("message-container");

function resetTime(){
    location.reload();
}

function startTimer(){
    let minutes = parseInt(minute.textContent);
    let seconds = parseInt(second.textContent);

    minuteCountdown =  setInterval(mCount, 60000);
    secCountdown = setInterval(sCount, 1000);

    function mCount(){
        if(minutes > 0){
            minutes = minutes - 1;
            minute.textContent = minutes;
        }
    }

    function sCount(){
        if(seconds<=0){
            second.textContent = 00;
            if(minutes <= 0){
                clearInterval(secCountdown);
                clearInterval(minuteCountdown);
                message.style.display = "block";
            }
            seconds=60;
        }
        seconds = seconds - 1;
        second.textContent = seconds;
    }
}

function pauseTimer(){
    clearInterval(minuteCountdown);
    clearInterval(secCountdown);
}


reset.addEventListener("click",resetTime);
play.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);