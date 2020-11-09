let box = document.querySelector('#box');
let increment = document.querySelector('#increment');
let count = 0;
let countMoreThanZero = count >= 0;
let countLessThanTen = count <= 10;

increment.addEventListener('click', function(){
    count += 1;
    box.textContent = count;
})

let decrement = document.querySelector('#decrement');
decrement.addEventListener('click', function(){
    count -= 1;
    box.textContent = count;
})

let reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    count = 0;
    box.textContent = count;
})

console.log(incrementFunction)