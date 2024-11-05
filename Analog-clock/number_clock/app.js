// Analog Part
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Digital part
let h = document.getElementById('hours');
let m = document.getElementById('minutes');
let s = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

function displayTime() {
  let date = new Date();

  // Getting hours, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = (hh * 360) / 12 + (mm * (360 / 60)) / 12;
  let mRotation = (mm * 360) / 60 + (ss * 6) / 60;
  let sRotation = 6 * ss; // ss * 360/60 = ss * 6

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  if (hh > 12) {
    hh -= 12;
    ampm.innerHTML = 'PM';
  }

  ss = ss < 10 ? '0' + ss : ss;
  mm = mm < 10 ? '0' + mm : mm;
  hh = hh < 10 ? '0' + hh : hh;

  h.innerHTML = hh;
  m.innerHTML = mm;
  s.innerHTML = ss;
}

setInterval(displayTime, 1000);
