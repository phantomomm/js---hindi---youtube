// Dates

let myDate = new Date();

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let mycreateddate = new Date(2023,0,23);
console.log(mycreateddate.tostring()); // 23 jan 2023 , indexing of months in js start from js

let mynewdate = new Date("2023-01-14"); // prints 14.01.2023 .

let mytimestampe = Date.now();

console.log(mytimestamp); // prints the time until now from 1970 in miliseconds

console.log(mynewdate.getTime()); // prints the time from that date to current in ms.

// suppose convert time in ms to s then
console.log(Math.floor(Date.now()/1000));