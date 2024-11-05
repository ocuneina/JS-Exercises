// set initial count
let count = '';

//select value and buttons
const value = document.getElementById('value');

const btns = document.querySelectorAll('.btn');

btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (item.dataset.str === 'C') {
      count = '';
      value.textContent = '0';
    } else if (item.dataset.str === 'equal') {
      try {
        value.textContent = Math.round(eval(count) * 1000000) / 1000000;
        // count = '0';
      } catch (error) {
        value.textContent = 'Error';
      }
    } else {
      count += item.dataset.str;
      value.textContent = count;
    }
  });
});
