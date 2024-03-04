"use strict";
//Interfaces
//interface is a model for variables
const authorOne = { name: "Saung", avatar: "/img/src/authorOne.png" };
const newPost = {
    title: "Something Interesting",
    body: "A twenty line long paragraph",
    author: authorOne,
    tags: ["vanilla", "plot", "romance"],
    created_at: new Date(),
};
// interface as parameter of functions
function createPost(post) {
    console.log(`created post ${post.title} written by ${post.author.name}`);
}
createPost(newPost);
// interface with Arrays
let posts = [];
posts.push({
    title: "Hello World",
    body: "Hello World is written as an intro to programming language",
    author: { avatar: 'img/src/imagetwo.png', name: 'Kaung Pyae Sone Aung' },
    created_at: new Date(),
    tags: ['programming']
});
posts.push(newPost);
//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
