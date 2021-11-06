import { addition } from '../math-utils.js';
import { subtraction } from '../math-utils.js';
import { division } from '../math-utils.js';
import { multiplication } from '../math-utils.js';

const test = QUnit.test;

test('addition() should take in numbers 1, 2 and return 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(1, 2);
    // const actual = addition(1, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtraction() should take in numbers 10, 2 and return 8', (expect) => {
    const expected = 8;
    const actual = subtraction(10, 2);

    expect.equal(actual, expected);
});

test('multiplication() should take in numbers 2, 5 and return 10', (expect) => {
    const expected = 10;
    const actual = multiplication(2, 5);
    // const actual = multiplication(3, 6);

    expect.equal(actual, expected);
});

test('division() should take in numbers 8, 4 and return 2', (expect) => {
    const expected = 2;
    const actual = division(8, 4);
    // const actual = division(10, 2);

    expect.equal(actual, expected);
});



