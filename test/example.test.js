// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;
import { add, subtract, multiply, divide } from '../utils.js';

/* test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
 */

test('test add function', (expect) => {
    const expected = 8;
    const actual = add(5, 3);
    expect.equal(actual, expected);
});

test('test subtract function', (expect) => {
    const expected = 2;
    const actual = subtract(5, 3);
    expect.equal(actual, expected);
});

test('test multiply function', (expect) => {
    const expected = 15;
    const actual = multiply(5, 3);
    expect.equal(actual, expected);
});

test('test divide function', (expect) => {
    const expected = 2;
    const actual = divide(6, 3);
    expect.equal(actual, expected);
});