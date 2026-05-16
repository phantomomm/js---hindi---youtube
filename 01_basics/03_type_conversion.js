let score = "33abc"

//console.log(typeof score)
//console.log(typeof (score))

let value = Number(score)

//console.log(typeof value)
//console.log(value)


// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isloggedin = ""

let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin)

// 1 => true , 0 => false
// "" => false

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "2"); //string baad mei hai to 1+2 will be treated as num addition and then added to string"2"
console.log("1" + 2 + 2); //string "1" pehle hain to complete operation will be treated as of a string

console.log(true); // printed true
console.log(+true);  //printed 1

console.log(+"") ; // printed 0 as + before converts into num datatype