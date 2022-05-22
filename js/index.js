"use strict";

// let str = 'Любой текct';
// const nbr = 1;
// let bool = false;
// let obj = {
//     name: 'Boris',
//     age: 20,
//     isSilly: true,
//     hand: {
//         finger: 'big'
//     },
//     hello: function(f1, f2) {
//         console.log(f1, f2);
//     }
// };
// obj.hello('hello', 'world');
// obj.hello('text');
// obj.hello('hello');
// obj.hello('dfgmdlfgldmkl');
// let nl = null;
// let undfined = undefined;
// let borisName = obj.name;

// function summary(first, second)
// {
//     return first + second;
// }

// let nbr = summary(5, 6);
// console.log(nbr);

const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.promo_btn');
const closeBtn = document.querySelector('#close');
const overlay = document.querySelector('.overlay');
const clrBtn = document.querySelector('#change_clr');

openBtn.addEventListener('click', function() {
    modal.classList.add('show');
    overlay.classList.add('show');
});

closeBtn.addEventListener('dblclick', function() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
});

function removeClassOverlay(className) {
    overlay.classList.remove(className);
}
function addClassOverlay(className) {
    overlay.classList.add(className);
}

let choosenColor = 1;
clrBtn.addEventListener('click', function() {
    if (choosenColor === 1) {
        addClassOverlay('overlay_pink');
        choosenColor = 2;
    } else if (choosenColor === 2) {
        removeClassOverlay('overlay_pink');
        addClassOverlay('overlay_green');
        choosenColor = 3;
    } else {
        removeClassOverlay('overlay_pink');
        removeClassOverlay('overlay_green');
        choosenColor = 1;
    }
});

