// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    const sum = Number(value1) + Number(value2);
    console.log(sum);
    addAnswer.textContent = sum;
});

// import functions and grab DOM elements
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

// initialize state

// set event listeners to update state and DOM
subtractButton.addEventListener('click', () => {
    const value1 = subtractInput1.value;
    const value2 = subtractInput2.value;
    const diff = Number(value1) - Number(value2);
    console.log(diff);
    subtractAnswer.textContent = diff;
});

// import functions and grab DOM elements
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

// initialize state

// set event listeners to update state and DOM
multiplyButton.addEventListener('click', () => {
    const value1 = multiplyInput1.value;
    const value2 = multiplyInput2.value;
    const dividend = Number(value1) / Number(value2);
    console.log(dividend);
    multiplyAnswer.textContent = dividend;
});


// import functions and grab DOM elements
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

// initialize state

// set event listeners to update state and DOM
divideButton.addEventListener('click', () => {
    const value1 = divideInput1.value;
    const value2 = divideInput2.value;
    const quotient = Number(value1) / Number(value2);
    console.log(quotient);
    divideAnswer.textContent = quotient;
});
