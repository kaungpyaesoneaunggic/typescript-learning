"use strict";
// any types
let age;
age = 3;
age = 'Heart';
age = true;
let title;
title = 25;
title = {
    hello: 'world'
};
// any types in array
let things = ['hello', true, 35];
things.push(true);
// funcions & any
function addTogether(value) {
    return value + value;
}
console.log(addTogether('hello'));
//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
