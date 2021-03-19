import { 
    add,
    subtract,
    multiply,
    divide,
} from './utils.js';

// import functions and grab DOM elements

// initialize state

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addAnswer = document.getElementById('add-answer');
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractAnswer = document.getElementById('subtract-answer');
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyAnswer = document.getElementById('multiply-answer');
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideAnswer = document.getElementById('divide-answer');

export function handleAddClick() {
    const x = Number(addInput1.value);
    const y = Number(addInput2.value);
    const sum = add(x, y);
    addAnswer.textContent = sum;
}

export function handleSubtractClick() {
    const x = Number(subtractInput1.value);
    const y = Number(subtractInput2.value);
    const diff = subtract(x, y);
    subtractAnswer.textContent = diff;
}

export function handleMultiplyClick() {
    const x = Number(multiplyInput1.value);
    const y = Number(multiplyInput2.value);
    const product = multiply(x, y);
    multiplyAnswer.textContent = product;
}

export function handleDivideClick() {
    const x = Number(divideInput1.value);
    const y = Number(divideInput2.value);
    const quotient = divide(x, y);
    divideAnswer.textContent = quotient;
}
