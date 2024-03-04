// TypeGuards
type Id = number|string

function swapIdType(id: Id): Id {
  // parseInt(id) //This function doesn't work because TS donesn't know if it is either string or number
  if(typeof id=== 'string'){
    return parseInt(id)
  }
  else{
    return id.toString();
  }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('1');

console.log(idOne, idTwo)

// tagged interfaces

interface User{
  type:'user' //assigning the types so value can be prechecked
  userName:string,
  email:string,
  id:Id
}
interface Author{
  type:'author'
  authorName:string,
  book :string,
  id:Id
}
function logDetails(value:User|Author):void{
  if(value.type==='user'){
    console.log(value.email, value.userName)
  }
  if(value.type=='author'){
    console.log(value.book, value.authorName)
  }
}

//to always compile when saved, tsc --watch
// to always run js file, node --watch dist/index.js
