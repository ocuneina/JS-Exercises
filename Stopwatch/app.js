const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const second = document.getElementById('sec');
const msecond = document.getElementById('msec');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let timer = false;

startBtn.addEventListener('click', () => {
  timer = true;
  startTimer();
});
stopBtn.addEventListener('click', () => {
  timer = false;
});
resetBtn.addEventListener('click', () => {
  timer = false;
  resetTimer();
});

function startTimer() {
  if (timer) {
    msec++;

    if (msec == 100) {
      sec++;
      msec = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }
    let msecStr = msec < 10 ? `0${msec}` : msec;
    let secStr = sec < 10 ? `0${sec}` : sec;
    let minStr = min < 10 ? `0${min}` : min;
    let hrStr = hr < 10 ? `0${hr}` : hr;

    hour.innerHTML = hrStr;
    minute.innerHTML = minStr;
    second.innerHTML = secStr;
    msecond.innerHTML = msecStr;
    setTimeout(startTimer, 10);
  }
}

function resetTimer() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  msec = 0;
  hour.innerHTML = '00';
  minute.innerHTML = '00';
  second.innerHTML = '00';
  msecond.innerHTML = '00';
}

// ss = ss < 10 ? '0' + ss : ss;
// mm = mm < 10 ? '0' + mm : mm;
// hh = hh < 10 ? '0' + hh : hh;
