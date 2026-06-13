const useremail = "sam@google.com"

if(useremail){
  console.log("Yes, a valid emailid")
}
else{
  console.log("No emailid found")
}

// falsy values -> false, 0, -0, "", null, NaN, undefined, BigInt 0n
// truthy values -> "0", "false", " ", [], {}, function(){} 

const array = []

if(array.length===0){
  console.log("Array is empty")
}

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
  console.log("Object is empty")
}

// object.keys(emptyobj) converts the object into an array thats why such syntax is used

// nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1) // prints 5

let val2;
val2 = null ?? 15

console.log(val2) // prints 15 here instead (same in the case of undefined)

// terniary operator

// syntax --> condition ? true: false

const iceteaprice = 100
iceteaprice >= 80 ? console.log("YES") : console.log("NO")
