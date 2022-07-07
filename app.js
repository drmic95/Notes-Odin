'use strict';
// containers selected

const mainDiv1 = document.querySelector('.container1');
const mainDiv2 = document.querySelector('.container2');
const mainDiv3 = document.querySelector('.container3');
const mainDiv4 = document.querySelector('.container4');
const mainDiv5 = document.querySelector('.container5');

const mainSpanBtn = document.querySelector('.btn');
const reset = document.querySelector('.reset');

for (let i = 0; i < 36; i++) {
  let newDiv1 = document.createElement('div');
  mainDiv1.appendChild(newDiv1);
  newDiv1.classList.add('firstGrid');
}
for (let i = 0; i < 64; i++) {
  let newDiv2 = document.createElement('div');
  mainDiv2.appendChild(newDiv2);
  newDiv2.classList.add('secondGrid');
}
for (let i = 0; i < 100; i++) {
  let newDiv3 = document.createElement('div');
  mainDiv3.appendChild(newDiv3);
  newDiv3.classList.add('thirdGrid');
}
for (let i = 0; i < 225; i++) {
  let newDiv4 = document.createElement('div');
  mainDiv4.appendChild(newDiv4);
  newDiv4.classList.add('fourthGrid');
}
for (let i = 0; i < 400; i++) {
  let newDiv5 = document.createElement('div');
  mainDiv5.appendChild(newDiv5);
  newDiv5.classList.add('fifthGrid');
}

const defaultState = () => {
  mainDiv1.style.display = 'none';
  mainDiv2.style.display = 'none';
  mainDiv3.style.display = 'none';
  mainDiv4.style.display = 'none';
  mainDiv5.style.display = 'none';
};
defaultState();

// btn listeners

mainSpanBtn.addEventListener('click', (e) => {
  const btnFirst = e.target.classList.contains('first_grid');
  const btnSecond = e.target.classList.contains('second_grid');
  const btnThird = e.target.classList.contains('third_grid');
  const btnFourth = e.target.classList.contains('fourth_grid');
  const btnFifth = e.target.classList.contains('fifth_grid');

  defaultState();

  if (btnFirst) {
    mainDiv1.style.display = 'flex';
  } else if (btnSecond) {
    mainDiv2.style.display = 'flex';
  } else if (btnThird) {
    mainDiv3.style.display = 'flex';
  } else if (btnFourth) {
    mainDiv4.style.display = 'flex';
  } else if (btnFifth) {
    mainDiv5.style.display = 'flex';
  }
});

reset.addEventListener('click', defaultState);
