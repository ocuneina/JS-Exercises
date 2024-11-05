const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer');

// input
const hr = 0;
const min = 0;
const sec = 7;

// transfer in msec
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;

const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;
  const angle = (remainingTime / setTime) * 360;
  // progress indicator
  if (angle > 180) {
    semicircles[2].style.display = 'none'; // do not display white
    semicircles[0].style.transform = 'rotate(180deg)'; // rotate red to 180
    semicircles[1].style.transform = `rotate(${angle}deg)`;
    // rotate blue to calc
  } else {
    semicircles[2].style.display = 'block';
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }
  // timer
  const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((remainingTime / (1000 * 60)) % 60);
  const secs = Math.floor((remainingTime / 1000) % 60);

  let secStr = secs < 10 ? `0${secs}` : `${secs}`;
  let minStr = mins < 10 ? `0${mins}` : `${mins}`;
  let hrStr = hrs < 10 ? `0${hrs}` : `${hrs}`;

  timer.innerHTML = `<span>${hrStr}</span>
        <span>${minStr}</span>
        <span>${secStr}</span>`;

  // 5sec-condition

  if (remainingTime < 6000) {
    semicircles[0].style.backgroundColor = 'red';
    semicircles[1].style.backgroundColor = 'red';

    Array.from(timer.children).forEach((item) => {
      item.style.color = 'red';
    });
  }

  if (remainingTime < 0) {
    // end
    clearInterval(timerLoop);
    semicircles[0].style.display = 'none';
    semicircles[1].style.display = 'none';
    semicircles[2].style.display = 'none';

    timer.innerHTML = `<span>00</span>
        <span>00</span>
        <span>00</span>`;
  }
}
