let a = 100
const b = 200
var c = 300

if(true)
{
  let a = 10
  const b = 20
  var c = 30
}

console.log(a);
console.log(b);
console.log(c);

// here var when declared doesnt follow the scope rules , hence 30 will be printed 
// declared under the if condition is called the local scope and outside is the global scope
// in case of a and b , it will print 100 and 200 only as the redeclaration is done inside the local scope which is the if condition

function one() //declaration of function
{
   const username = "Omm"

   function two()
   {
      const website = "Youtube"
      console.log(username)
   }

   console.log(website)

   two()// calls back the above declared function
}

one() // calling of the declared function

//here in such case, website wont be printed but username will be as the nested function could access the global variables but not vice versa

if(true)
{
  const username = "Omm"
  if(username==="Omm")
  {
     const website = "Youtube"
     console.log(username+website)
  }
  console.log(website)
}

console.log(username)

//here only username+website will be executed as it is inside the scope,rest statemnts wont be executed as they are out of the scopes.


//+++++++++++++++++++++++++++++++++++++

console.log(addtwo(5))
function addtwo(num)
{
    return num+1
}

console.log(addone(5))
const addone = function(num)
{
   return num + 1
}

// here, the first function will be executed as there is no issue of delcaration or initialisation
// whereas the second one wont be executed as the initalisation is done after and due to declaration of a const 
// this above concept is called hoisting
