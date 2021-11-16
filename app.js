import { addition, subtraction, multiplication, division } from './math-utils.js';

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
const negPos = document.getElementById('neg-pos');
const clear = document.getElementById('clear');
const display = document.getElementById('display');

let arrayX = [];
let arrayY = []; 
let arrayOperator = [];
let operatorDisplay;
let x;
let y;
let reset;


function numberClick(number) {
    number.addEventListener('click', () => {
        resetDisplay();
        if (display.textContent.length < 17) {
            if (arrayOperator.length === 0) {
                arrayX.push(number.textContent);
                x = +arrayX.join('');
            } else if (arrayOperator.length > 0) {
                arrayY.push(number.textContent);
                y = +arrayY.join('');
            }
        }
        display.textContent += number.textContent;
    });
}

function decimalClick(decimalBtn) {
    decimalBtn.addEventListener('click', () => {
        resetDisplay();
        if (display.textContent.includes('.') === false) {
            if (arrayOperator.length === 0) {
                arrayX.push('.');
            } else if (arrayOperator.length > 0) {
                arrayY.push('.');
            }
            display.textContent += '.';
        }
    });
}

function negPosClick() {
    negPos.addEventListener('click', () => {
        if (typeof x === 'number') {
            if (typeof y !== 'number' && arrayOperator.length === 0) {
                x = x - (x * 2);
                display.textContent = x;
            } else if (typeof y === 'number' && reset !== true) {
                y = y - (y * 2);
                display.textContent = operatorDisplay + y;
            }
        }
    });
}

function operatorClick(operator) {
    operator.addEventListener('click', () => {
        if (arrayOperator.length === 0 && display.textContent.length > 0) {
            arrayOperator.push(operator.textContent);
            if (operator === add) {
                operatorDisplay = '+ ';
            } else if (operator === subtract) {
                operatorDisplay = '- ';
            } else if (operator === multiply) {
                operatorDisplay = '* ';
            } else if (operator === divide) {
                operatorDisplay = '/ ';
            }
            display.textContent = operatorDisplay;
        } else if (operator === clear) {
            reset = true;
            resetDisplay();
        }
    });
}

function equalsClick() {
    equals.addEventListener('click', () => {
        if (arrayOperator !== false) { 
            let answer;
            if (arrayOperator.includes('+')) {
                answer = addition(x, y);   
            } else if (arrayOperator.includes('-')) {
                answer = subtraction(x, y);   
            } else if (arrayOperator.includes('*')) {
                answer = multiplication(x, y);   
            } else if (arrayOperator.includes('/')) {
                answer = division(x, y);   
            }
            display.textContent = answer;
            reset = true;
        }
    });
}

function resetDisplay() {
    if (reset === true) {
        display.textContent = '';
        arrayX = [];
        x = '';
        arrayOperator = [];
        operatorDisplay = '';
        arrayY = [];
        y = '';
        reset = false;
    }
}

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

operatorClick(add);
operatorClick(subtract);
operatorClick(multiply);
operatorClick(divide);
operatorClick(clear);

decimalClick(decimal);
equalsClick(equals);
negPosClick(negPos);

// PROBLEMS TO SOLVE
//  pemdas continueOperation
