'use strict';
// containers selected

const mainDiv1 = document.querySelector('.container1');
const mainDiv2 = document.querySelector('.container2');
const mainDiv3 = document.querySelector('.container3');
const mainDiv4 = document.querySelector('.container4');
const mainDiv5 = document.querySelector('.container5');

const mainSpanBtn = document.querySelector('.btn');
const reset = document.querySelector('.reset');

// btn selected
const btnFirst = document.querySelector('.first_grid');
const btnSecond = document.querySelector('.second_grid');
const btnThird = document.querySelector('.third_grid');
const btnFourth = document.querySelector('.fourth_grid');
const btnFifth = document.querySelector('.fifth_grid');

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
btnFirst.addEventListener('click', function () {
  mainDiv1.style.display = 'flex';
  mainDiv4.style.display = 'none';
  mainDiv5.style.display = 'none';
  mainDiv2.style.display = 'none';
  mainDiv3.style.display = 'none';
});
btnSecond.addEventListener('click', function () {
  mainDiv2.style.display = 'flex';
  mainDiv4.style.display = 'none';
  mainDiv5.style.display = 'none';
  mainDiv1.style.display = 'none';
  mainDiv3.style.display = 'none';
});
btnThird.addEventListener('click', function () {
  mainDiv3.style.display = 'flex';
  mainDiv4.style.display = 'none';
  mainDiv5.style.display = 'none';

  mainDiv1.style.display = 'none';
  mainDiv2.style.display = 'none';
});

btnFourth.addEventListener('click', function () {
  mainDiv1.style.display = 'none';
  mainDiv2.style.display = 'none';
  mainDiv3.style.display = 'none';
  mainDiv4.style.display = 'flex';
  mainDiv5.style.display = 'none';
});

btnFifth.addEventListener('click', function () {
  mainDiv1.style.display = 'none';
  mainDiv2.style.display = 'none';
  mainDiv3.style.display = 'none';
  mainDiv4.style.display = 'none';
  mainDiv5.style.display = 'flex';
});

reset.addEventListener('click', defaultState);
