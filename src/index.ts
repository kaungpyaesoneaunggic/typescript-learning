//Interfaces
//interface is a model for variables

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "Saung", avatar: "/img/src/authorOne.png" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}
const newPost: Post = {
  title: "Something Interesting",
  body: "A twenty line long paragraph",
  author: authorOne,
  tags: ["vanilla", "plot", "romance"],
  created_at: new Date(),
};

// interface as parameter of functions
function createPost(post: Post): void {
  console.log(`created post ${post.title} written by ${post.author.name}`);
}
createPost(newPost);

// interface with Arrays
let posts: Post[] = [];

posts.push({
  title: "Hello World",
  body: "Hello World is written as an intro to programming language",
  author:{avatar:'img/src/imagetwo.png',name:'Kaung Pyae Sone Aung'},
  created_at: new Date(),
  tags:['programming']
});
posts.push(newPost)

//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
