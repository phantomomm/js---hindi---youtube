const dc_heros = ["superman", "flash", "batman"]
const marvel_heros = ["thor", "ironman", "spiderman"]

marvel_heros.push(dc_heros);
// pushes the array inside the array

console.log(marvel_heros[3][1]);
// prints flash .... accessing becomes complex instead

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);
// merges the arrays and then prints the complete
// have to declare a new variable allheros for merging, cant be merged in the original marvel_heros

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// using spread operator like above too merges the arrays, more useful and easy to use

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(infinity);

console.log(real_another_array);
// prints the complete array and breaks into single elements

console.log(Array.isArray(" Omm")); // prints false
console.log(Array.from("Omm")) // breaks the string into character array and then prints it completely

console.log(Array.from({name: "Omm"})); // prints an empty []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
// prints an array with elements 100,200,300