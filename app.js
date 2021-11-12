// HTML SETUP
// Build a calculator that will +-*/ 2 numbers
// Create an input for 2 numbers and an input which submits those 2 numbers for calculation, for each math operator.

// import functions and grab DOM elements
import { addition } from './math-utils.js';
import { subtraction } from './math-utils.js';
import { division } from './math-utils.js';
import { multiplication } from './math-utils.js';

// + DOM ELEMENTS
//  - each button number-key .0-9
//  - each button operator-key +-*/= cl +/-
//  - span display-box

const num1 = document.getElementById('one');
const num2 = document.getElementById('two');
const num3 = document.getElementById('three');
const num4 = document.getElementById('four');
const num5 = document.getElementById('five');
const num6 = document.getElementById('six');
const num7 = document.getElementById('seven');
const num8 = document.getElementById('eight');
const num9 = document.getElementById('nine');
const num0 = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const posNeg = document.getElementById('pos-neg');
const clear = document.getElementById('clear');
const display = document.getElementById('display');

// console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num0, decimal, add, subtract, multiply, divide, equals, posNeg, clear, display); 

// + eventListener click for number-key variables
//  - num click will display key value in display-span textContent
//  - additional num clicks will concat values

function buttonClick(btn) {
    btn.addEventListener('click', () => {
        if (display.textContent.length < 17) {
            display.textContent += btn.textContent;
        }
    });
}

function clearButton(clearBtn) {
    clearBtn.addEventListener('click', () => {
        display.textContent = '';
    });
}


buttonClick(num1);
buttonClick(num2);
buttonClick(num3);
buttonClick(num4);
buttonClick(num5);
buttonClick(num6);
buttonClick(num7);
buttonClick(num8);
buttonClick(num9);
buttonClick(num0);
buttonClick(decimal);
buttonClick(add);
buttonClick(subtract);
buttonClick(multiply);
buttonClick(divide);
clearButton(clear);

// PROBLEMS TO SOLVE
//  - equals posNeg max_input subsequent_operators pemdas ??
//    - eval ?
//    - when operator is clicked, store display.text content value to new math variable
//      - when equal operator is clicked, concat to new math variable and perform equation stored in math variable, return value