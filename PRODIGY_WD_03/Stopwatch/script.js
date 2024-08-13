const playButton = document.getElementsByClassName('play')[0];
const resetButton = document.getElementsByClassName('reset')[0];
const lapButton = document.getElementsByClassName('lap')[0];
const second = document.getElementsByClassName('second')[0];
const centiSecond = document.getElementsByClassName('msecond')[0];
const minute = document.getElementsByClassName('minute')[0];
const laps = document.getElementsByClassName('laps')[0];
const clearButton = document.getElementsByClassName('clear_button')[0];
const bg = document.getElementsByClassName('outer_circle')[0];
let isPlay = false;
let secCounter = 0;
let sec;
let centiCounter = 0;
let centiSec;
let minutes;
let minuteCounter=0;
let lapItem = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}


const play = () => {
    if(!isPlay){
        playButton.innerHTML = "pause";
        bg.classList.add('animation-bg');
            minutes = setInterval(()=>{
                minute.innerHTML = `${++minuteCounter} : `;
            },60*1000);
            sec = setInterval(()=>{
                if(secCounter === 60 ){
                    secCounter = 0;
                }
                second.innerHTML = `${++secCounter} : `;
            },1000);
            centiSec = setInterval(()=>{
                if(centiCounter === 100 ){
                    centiCounter = 0;
                }
                centiSecond.innerHTML = `${++centiCounter}`;
            },10)
        isPlay=true;
    } else {
        playButton.innerHTML = "play";
        clearInterval(sec);
        clearInterval(centiSec);
        clearInterval(minutes);
        isPlay=false;
        bg.classList.remove('animation-bg');
    }
    toggleButton();
}

const reset = () => {
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML =  `&nbsp;0 : `;
    centiSecond.innerHTML =  `&nbsp;0 : `;
    minute.innerHTML = `0 :`;
}

const lap = () =>{
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');

    li.setAttribute("class","lap_item");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","time_stamp");

    number.innerText = `#${++lapItem}`;
    timeStamp.innerHTML = `${minuteCounter} : ${secCounter} : ${centiCounter} `;

    li.append(number,timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}
const clearAll = () =>{
    laps.innerHTML = ' ';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem = 0;
}

clearButton.addEventListener('click',clearAll);
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);









