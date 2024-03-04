"use strict";
// Functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(4, 5);
subtractTwoNumbers(1, 6);
const addAllNumbers = (items) => {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
};
addAllNumbers([5, 7, 3, 14, 4, 11, 2, 10]);
// Return Type Interface
const formatGreeting = (name, greeting) => {
    return `${greeting}, ${name}さん`;
};
const greetingOne = formatGreeting('Kyaw Kyaw', 'Ohayou Gozaimasu');
console.log(greetingOne);
//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
