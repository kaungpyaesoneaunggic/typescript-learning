// Type Aliases
// e.g Tuples
type Rgb = [number,number,number];
function getRandomColor():Rgb{
  const red = Math.floor(Math.random()*255); //meaning it will return from 1 to 255
  const green = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  return[red,green,blue];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne,colorTwo);

// e.g Object Literals
type User={
  name:string,
  score:number,
}

const userOne:User ={name:'UserOne',score:80}
function formatUser(user:User):void{
  console.log(`${user.name} has a score of ${user.score}`)
}
formatUser(userOne);
formatUser({name:'UserTwo',score:90})

//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
