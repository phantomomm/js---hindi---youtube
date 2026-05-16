console.log(2>1);
console.log(2==1); // boolean ans printed

console.log("2">1);
console.log("02">1);  // here string will be converted into num data type for comparison

console.log(null>0);  //false
console.log(null==0);  //false
console.log(null>=0); //true

// equality check == treats null as it is but comaprators change null into a value which is 0
// incase of undefined its not converted to 0 so it throws false in all cases.

console.log("2"==2); // here it will throw true due conversion in datatype.
console.log("2"===2); // in such case data type too is checked so it will throw false