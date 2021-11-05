// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = (1 + 2);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = 3;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
