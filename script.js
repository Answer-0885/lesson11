'use strict'

const btn = document.querySelector('#btn');
const square = document.querySelector('#square');
const text = document.querySelector('#text');
const circle = document.querySelector('#circle');
const eBtn = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const rangeSpan = document.querySelector('#range-span');



console.dir(circle.style.width);
// При нажатии на кнопку btn меняет цвет квадрат square на цвет указанный в text
const logger = function (e) {
   square.style.backgroundColor = text.value;
   eBtn.style.display = 'none';
}
btn.addEventListener('click', logger);

const input = function (e) {
   rangeSpan.innerHTML = range.value;
   circle.style.width = range.value + '%'; //меняет ширину в зависимости от значения ползунка range
   circle.style.height = range.value + '%'; //меняет высоту в зависимости от значения ползунка range
}
range.addEventListener('input', input);