console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(98.8));
console.log(Math.min(4,1,2,9,3));

console.log(Math.random()); // prints random values bw 0 and 1 ;

console.log((Math.random()*10) + 1); // value bw 1 and 10;

console.log(Math.floor(Math.random()*10)+1); // rounds off to a whole number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min); // prints a whole number value bw max and min