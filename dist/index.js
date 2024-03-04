"use strict";
// Union Types
//Having multiple types
let someId;
someId = 1;
someId = "hello";
// someId=true //throwError
let email = null;
email = "helloeuser@gmail.com";
email = null;
let userId;
userId = "asfldasdf";
userId = 1232223;
// Union Type Pitfall
function swapIdType(id) {
    // parseInt(id) //This function doesn't work because TS donesn't know if it is either string or number
    return id;
}
swapIdType(userId);
//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
