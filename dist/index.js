"use strict";
function swapIdType(id) {
    // parseInt(id) //This function doesn't work because TS donesn't know if it is either string or number
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('1');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.userName);
    }
    if (value.type == 'author') {
        console.log(value.book, value.authorName);
    }
}
//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
