// HTML SETUP
// Build a calculator that will +-*/ 2 numbers
// Create an input for 2 numbers and an input which submits those 2 numbers for calculation, for each math operator.

// import functions and grab DOM elements
import { addition } from './math-utils.js';
import { subtraction } from './math-utils.js';
import { division } from './math-utils.js';
import { multiplication } from './math-utils.js';

// + DOM ELEMENTS
const addX = document.getElementById('add-x');
const addY = document.getElementById('add-y');
const addSubmit = document.getElementById('add-submit');
const sumSpan = document.getElementById('sum');
// console.log(addX, addY, addSubmit, sum); -TRUE

// Set an event listener for addSubmit, which will: 
//  create variable for addX, addY number values,
//  create variable for addition() value
//  return value to textContent of sumSpan 
addSubmit.addEventListener('click', () => {
    const x = +addX.value;
    const y = +addY.value;

    const xyValue = addition(x, y);
    sumSpan.textContent = xyValue;
});

// - DOM ELEMENTS
const subX = document.getElementById('sub-x');
const subY = document.getElementById('sub-y');
const subSubmit = document.getElementById('sub-submit');
const differenceSpan = document.getElementById('difference');
// console.log(subX, subY, subSubmit, difference); -TRUE

subSubmit.addEventListener('click', () => {
    const x = +subX.value;
    const y = +subY.value;

    const xyValue = subtraction(x, y);
    differenceSpan.textContent = xyValue;
});


// * DOM ELEMENTS
const multX = document.getElementById('mult-x');
const multY = document.getElementById('mult-y');
const multSubmit = document.getElementById('mult-submit');
const productSpan = document.getElementById('product');
// console.log(multX, multY, multSubmit, product); -TRUE

multSubmit.addEventListener('click', () => {
    const x = +multX.value;
    const y = +multY.value;

    const xyValue = multiplication(x, y);
    productSpan.textContent = xyValue;
});


// / DOM ELEMENTS
const divX = document.getElementById('div-x');
const divY = document.getElementById('div-y');
const divSubmit = document.getElementById('div-submit');
const quotientSpan = document.getElementById('quotient');
// console.log(divX, divY, divSubmit, quotient); -TRUE

divSubmit.addEventListener('click', () => {
    const x = +divX.value;
    const y = +divY.value;

    const xyValue = division(x, y);
    quotientSpan.textContent = xyValue;
});

