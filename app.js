const mainDiv = document.querySelector('.container');
const mainSpanBtn = document.querySelector('.btn');

function startingGrid(num) {
  for (let i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.classList.add('startGrid');
  }
}

// 4x4 as default grid
// startingGrid(16);

// 6x6 grid
function firstGrid(num) {
  for (let i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.classList.add('firstGrid');
  }
}

// firstGrid(36);

// 8x8 grid
function secondGrid(num) {
  for (let i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.classList.add('secondGrid');
  }
}
// secondGrid(64);

function thirdGrid(num) {
  for (let i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.classList.add('thirdGrid');
  }
}
// thirdGrid(100);
