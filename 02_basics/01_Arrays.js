// array

const myArr = [0,1,2,3,4,5];

const myArr2 = new Array(1,2,3,4);

console.log(myArr[1]);

// Array Methods 

myArr.push(6);
console.log(myArr); // prints 0 1 2 3 4 5 6

myArr.pop() ; // removes the last element

myArr.unshift(9) ; // inserts the element 9 at the beginning of the array.
myArr.shift() // removes the first element from the beginning.

console.log(myArr.includes(2)) // checks whether 2 is there in the array or not

console.log(myArr.indexOf(4)) // if the element exists it prints the index else just prints -1.

const newArr = myArr.join()
console.log(myArr);
console.log(newArr); // prints the complete array but in string format.

// slice and splice 