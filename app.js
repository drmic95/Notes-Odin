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
startingGrid(16);

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

// addEventListener for btns

mainSpanBtn.addEventListener('click', function (event) {
  const first_grid = event.target.classList.contains('first_grid');
  const second_grid = event.target.classList.contains('second_grid');
  const third_grid = event.target.classList.contains('third_grid');

  if (first_grid) {
    firstGrid(36);
  } else if (second_grid) {
    secondGrid(64);
  } else if (third_grid) {
    thirdGrid(100);
  } else console.log('something went wrong');
});
