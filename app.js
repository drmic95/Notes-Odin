const mainDiv = document.querySelector('.container');

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');

const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');

const div9 = document.createElement('div');
const div10 = document.createElement('div');
const div11 = document.createElement('div');
const div12 = document.createElement('div');

const div13 = document.createElement('div');
const div14 = document.createElement('div');
const div15 = document.createElement('div');
const div16 = document.createElement('div');

mainDiv.appendChild(div1);
mainDiv.appendChild(div2);
mainDiv.appendChild(div3);
mainDiv.appendChild(div4);

mainDiv.appendChild(div5);
mainDiv.appendChild(div6);
mainDiv.appendChild(div7);
mainDiv.appendChild(div8);

mainDiv.appendChild(div9);
mainDiv.appendChild(div10);
mainDiv.appendChild(div11);
mainDiv.appendChild(div12);

mainDiv.appendChild(div13);
mainDiv.appendChild(div14);
mainDiv.appendChild(div15);
mainDiv.appendChild(div16);

div1.classList.add('all');
div2.classList.add('all');
div3.classList.add('all');
div4.classList.add('all');

div5.classList.add('all');
div6.classList.add('all');
div7.classList.add('all');
div8.classList.add('all');

div9.classList.add('all');
div10.classList.add('all');
div11.classList.add('all');
div12.classList.add('all');

div13.classList.add('all');
div14.classList.add('all');
div15.classList.add('all');
div16.classList.add('all');

// addEventListener for 3 new grids
// in css display: none or something like that so that when newDivs are created the old disapers, or make an event insde btn that deletes it
// loop with class all, recreate the original elements with loop, put them in function that is invoked in global scope, and then revoked in EventListener
