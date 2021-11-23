hour = 0;
min = 0;
sec = 0;
let timerId;
let currentTime;
let updatedTime;
const innerMin = document.querySelector(".min");
const innerSec = document.querySelector(".sec");
const innerHour = document.querySelector(".hour");
let startClicked = false;
let paused = false;
let savedTime = 0

function incrementTimer () {
        updatedTime = new Date().getTime();
        if(savedTime){
            difference = updatedTime - currentTime + savedTime;
        }else{
            difference = updatedTime - currentTime ;
        }
        var seconds = Math.floor((difference % (1000 * 60)) 
        /1000);
        var minutes = Math.floor((difference % (1000 * 60 * 60)) 
        / (1000 * 60));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) 
        /(1000 * 60 * 60));
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        console.log(seconds);
        console.log(minutes)
        !startClicked;
        
        document.querySelector(".sec").innerHTML = seconds;
        if (seconds < 60) {
            innerMin.innerHTML = minutes + ":"
        }

        if (minutes < 60) {
            innerHour.innerHTML = hours + ":"
        }
    }

function startCounter() {
    currentTime = new Date().getTime();
    timerId = setInterval(incrementTimer,1000);
};


function stopCounter() {
    if(!paused){
        savedTime = difference;
        !paused;
        !startClicked;
        return clearInterval(timerId);
    }
};

function resetCounter() {
     startClicked = false;
     savedTime = 0;
     difference = 0;
     innerHour.innerHTML = "00:";
     innerMin.innerHTML = "00:";
     innerSec.innerHTML = "00";
   return clearInterval(timerId);


}