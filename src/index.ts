// arrays
let names: string[] = ["Kaung", "Pyae", "Sone", "Aung"];
let ages: number[] = [22, 21, 20];

names.push("Maung");
ages.push(35);

// type of interface with arrays

let fruits = ["apples", "pears", "bananas", "mangoes"];
fruits.push("strawberries");

const f = fruits[3];
let things = [1, true, "ohayou"];
const t = things[0];

// object literals

let user: { firstName: string; age: number; id: number } = {
  firstName: "Kyaw Kyaw",
  age: 21,
  id: 12345,
  // isFictional:true Can't assign
};
user.id=2120;
// user.email='kaung@gmail.com' can't assign

let person={
  name:'Win Win',
  score: 35,
}
person.name='Soe Moe';
person.score=100;
const score= person.score;




//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
