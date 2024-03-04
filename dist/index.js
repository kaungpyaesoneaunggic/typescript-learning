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
    if (value.type === 'author') {
        console.log(value.book, value.authorName);
    }
}
const AuthorOne = { authorName: 'Chit Oo Nyo', book: 'Linka Dipa Chit Thu', id: 12, type: 'author' };
const UserOne = { userName: 'Mg Nyo', email: 'mgnyo@gmail.com', id: 202, type: 'user' };
logDetails(AuthorOne);
//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
