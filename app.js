// addEventListener for 3 new grids
// in css display: none or something like that so that when newDivs are created the old disapers, or make an event insde btn that deletes it
// loop with class all, recreate the original elements with loop, put them in function that is invoked in global scope, and then revoked in EventListener

const mainDiv = document.querySelector('.container');
const mainSpanBtn = document.querySelector('.btn');

function startingGrid(num) {
  for (let i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    mainDiv.appendChild(newDiv);
    newDiv.classList.add('startGrid');
  }
}
startingGrid(16);
