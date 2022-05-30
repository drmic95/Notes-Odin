'use strict';
// containers selected
const mainDiv = document.querySelector('.container');
const mainDiv1 = document.querySelector('.container1');
const mainDiv2 = document.querySelector('.container2');
const mainDiv3 = document.querySelector('.container3');

const mainSpanBtn = document.querySelector('.btn');
const reset = document.querySelector('.reset');

// btn selected
const btnZero = document.querySelector('.grid_zero');
const btnFirst = document.querySelector('.first_grid');
const btnSecond = document.querySelector('.second_grid');
const btnThird = document.querySelector('.third_grid');

// all children created
for (let i = 0; i < 16; i++) {
  let newDiv = document.createElement('div');
  mainDiv.appendChild(newDiv);
  newDiv.classList.add('gridZero');
}
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

// containers js default
mainDiv.style.display = 'none';
mainDiv1.style.display = 'none';
mainDiv2.style.display = 'none';
mainDiv3.style.display = 'none';

// btn listeners
btnFirst.addEventListener('click', function () {
  mainDiv1.style.display = 'flex';
  mainDiv.style.display = 'none';
  mainDiv2.style.display = 'none';
  mainDiv3.style.display = 'none';
});
btnSecond.addEventListener('click', function () {
  mainDiv2.style.display = 'flex';
  mainDiv.style.display = 'none';
  mainDiv1.style.display = 'none';
  mainDiv3.style.display = 'none';
});
btnThird.addEventListener('click', function () {
  mainDiv3.style.display = 'flex';
  mainDiv.style.display = 'none';
  mainDiv1.style.display = 'none';
  mainDiv2.style.display = 'none';
});

reset.addEventListener('click', function () {
  mainDiv.style.display = 'none';
  mainDiv1.style.display = 'none';
  mainDiv2.style.display = 'none';
  mainDiv3.style.display = 'none';
});
