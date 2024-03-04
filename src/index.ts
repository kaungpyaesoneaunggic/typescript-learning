//Tuples
//Having assinged the types in order
let person:[string,number,boolean]=['Kyaw Kyaw',25,true]

// Tuples examples
let hsla :[number,string,string,number] //HSLA is a Color variable RGB
hsla=[200,'100%','50%', 1]

let coordinates:[number, number]
coordinates=[220,1050.8]

function useCoords():[number,number]{
  const latitudes=  100
  const longtitudes= 200
  return [latitudes,longtitudes]
}
const [lat,long]=useCoords()

// named Tuples
let user:[name:string, age:number]
user = ['Soe Myint',25]
console.log(user[0])






//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
