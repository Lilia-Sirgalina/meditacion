const button = document.querySelector('#myButton');

document.querySelector('#player').pause();

button.addEventListener('click', startTimer);

const timer = 2;
let amountTime = timer * 60;
let timerID = null;

function startTimer() {    
    if (timerID === null) {
    timerID = setInterval(calculateTime, 1000);
}

    document.querySelector('#player').play();
    document.querySelector('#myVideo').play();
}

function calculateTime() {
    
    const countDown = document.querySelector('#countdown');
    
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countDown.textContent = `${minutes} : ${seconds}`;
    amountTime--;        

    if (amountTime < 0) {        
        stopTimer();
        countDown.textContent = "Relax...";
        document.querySelector('#player').pause();
        amountTime = timer*60;               
    }       
}

function stopTimer() {
    clearInterval(timerID);
    timerID = null;
}







