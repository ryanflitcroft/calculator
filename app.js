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



let arrayX = [];
let arrayY = []; 
let arrayOperator = [];
let x;
let y;
let reset;

// numberClick will display .textContent to max 17 numbers
// numberClick and no arrayOperator will push click value to arrayX and assign number value to variable x
// numberClick and  arrayOperator will push click value to arrayY and assign number value to variable x
function numberClick(btn) {
    btn.addEventListener('click', () => {
        resetDisplay();
        if (display.textContent.length < 17 && arrayOperator.length === 0) {
            arrayX.push(+btn.textContent);
            x = +arrayX.join('');
            display.textContent += btn.textContent;
            console.log(arrayX);
            console.log(x);
            
        } else if (display.textContent.length < 17 && arrayOperator.length !== 0) {
            arrayY.push(+btn.textContent);
            y = +arrayY.join('');
            display.textContent += btn.textContent;
            console.log(arrayY);
            console.log(y);
        }
    });
}

// decimalClick will display.textContent if decimal is not already present
// if decimalClick and no operatorArray, decimal push to arrayX
// if decimalClick and operatorArray, decimal push to arrayY
function decimalClick(decimalBtn) {
    decimalBtn.addEventListener('click', () => {
        resetDisplay();
        if (display.textContent.includes(decimalBtn.textContent) === false && arrayOperator.length === 0) {
            arrayX.push(decimalBtn.textContent);
            display.textContent += '.';

        } else if (display.textContent.includes(decimalBtn.textContent) === false && arrayOperator.length !== 0) {
            arrayY.push(decimalBtn.textContent);
            display.textContent += '.';
        }
    });
}


// clearButton will assign 0 to display .textContent
// clearButton will assign empty to arrayOperator arrayX arrayY
function clearButton(clearBtn) {
    clearBtn.addEventListener('click', () => {
        display.textContent = '';
        arrayOperator = [];
        arrayX = [];
        arrayY = [];
    });
}

// if operator is add and if no arrayOperator and display textContent is greater than initial, + pushed to arrayOperator and opAdd assigned to +
// display textContent changed to +
function addClick(operator) {
    if (operator === add) {
        operator.addEventListener('click', () => {

            if (arrayOperator.length === 0 && display.textContent.length !== 0) {
                arrayOperator.push(operator.textContent);
                // arrayOperator.join(''); 
                display.textContent = '+ ';
                console.log(arrayOperator);
            } 
        });
    } 
}

// if operator is subtract and if no arrayOperator and display textContent is greater than initial, - pushed to arrayOperator and opSub assigned to -
// display textContent changed to -
function subtractClick(operator) {
    if (operator === subtract) {
        operator.addEventListener('click', () => {

            if (arrayOperator.length === 0 && display.textContent.length !== 0) {
                arrayOperator.push(operator.textContent);
                // arrayOperator.join('');
                display.textContent = '- ';
                console.log(arrayOperator);
            }
        });
    }
}

// if operator is multiply and if no arrayOperator and display textContent is greater than initial, * pushed to arrayOperator and opMult assigned to *
// display textContent changed to *
function multiplyClick(operator) {
    if (operator === multiply) {
        operator.addEventListener('click', () => {

            if (arrayOperator.length === 0 && display.textContent.length !== 0) {
                arrayOperator.push(operator.textContent);
                // arrayOperator.join('');
                display.textContent = '* ';
                console.log(arrayOperator);
            }
        });
    }
}

// if operator is divide and if no arrayOperator and display textContent is greater than initial, / pushed to arrayOperator and opDiv assigned to /
// display textContent changed to /
function divideClick(operator) {
    if (operator === divide) {
        operator.addEventListener('click', () => {

            if (arrayOperator.length === 0 && display.textContent.length !== 0) {
                arrayOperator.push(operator.textContent);
                // arrayOperator.join('');
                display.textContent = '/ ';
                console.log(arrayOperator);
            }
        });
    }
}

function equalsClick() {
    // how to use values x from arrayX, y from arrayY, op from arrayOperator on equals click ??
    equals.addEventListener('click', () => {
        if (arrayOperator !== false && arrayOperator.includes('+')) {
            let answer = addition(x, y);   
            display.textContent = answer;
            reset = true;
            console.log(reset);
        } else if (arrayOperator !== false && arrayOperator.includes('-')) {
            let answer = subtraction(x, y);   
            display.textContent = answer;
            reset = true;
            console.log(reset);
        } else if (arrayOperator !== false && arrayOperator.includes('*')) {
            let answer = multiplication(x, y);   
            display.textContent = answer;
            reset = true;
            console.log(reset);
        } else if (arrayOperator !== false && arrayOperator.includes('/')) {
            let answer = division(x, y);   
            display.textContent = answer;
            reset = true;
            console.log(reset);
        }
    
    });
}

// resetDisplay following numberClick/decimalClick if equalsClick
function resetDisplay() {
    if (reset === true) {
        display.textContent = '';
        arrayX = [];
        x = 0;
        arrayOperator = [];
        arrayY = [];
        y = 0;
        reset = false;
    }
}

        // let answer = addition(x, y);   
        // display.textContent = answer;

numberClick(num1);
numberClick(num2);
numberClick(num3);
numberClick(num4);
numberClick(num5);
numberClick(num6);
numberClick(num7);
numberClick(num8);
numberClick(num9);
numberClick(num0);
decimalClick(decimal);
clearButton(clear);

addClick(add);
subtractClick(subtract);
multiplyClick(multiply);
divideClick(divide);
equalsClick(equals);


// PROBLEMS TO SOLVE
//  - equals posNeg subsequent_operators pemdas ??
//    - eval ?
// how to use values x from arrayX, y from arrayY, op from arrayOperator on equals click ??