let btn = document.getElementById('btn');
let add = document.getElementById('sum');
let diff = document.getElementById('diff');
let squar = document.getElementById('squar');

// let a = Number(document.getElementById('inputA').value);
// let b = Number(document.getElementById('inputB').value);

btn1.addEventListener('click', addition);
btn2.addEventListener('click', subtraction);
btn3.addEventListener('click', mutiplication);
btn4.addEventListener('click', division);
btn5.addEventListener('click', modulus);
btn6.addEventListener('click', exponent);
btn7.addEventListener('click', squareroot);
btn8.addEventListener('click', cuberoot);
btn9.addEventListener('click', square);
btn10.addEventListener('click', increment);
btn11.addEventListener('click', decrement);

function addition() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  add.value = a + b;
};

function subtraction() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  diff.value = a - b;
};

function mutiplication() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  times.value = a*b;
};

function division() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  div.value = a/b;
};

function modulus() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  mol.value = a%b;
};

function exponent() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  exp.value = a**b;
};

function squareroot() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  sqr.value =Math.sqrt(a);
};
function cuberoot() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  cub.value =Math.cbrt(a);
};
function square() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  squar.value = Math.pow(a, 2);
};
function increment() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  incre.value =a%=b;
};
function decrement() {
  let a = Number(document.getElementById('inputA').value);
  let b = Number(document.getElementById('inputB').value);
  decre.value =a**=b;
};

