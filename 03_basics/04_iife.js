// Immediate invoked function expression - used to immediately execute a function which is just generated , usually used to keep the local scope private

function chai(){
    console.log(`DB connected`)
}
chai()

// the above chunk of code can be written as

(function chai(){
   console.log(`DB Connected`);  //Called as Named IIFE
})();

// this syntax is particulary used so that the function is not polluted by the declared variables in the global scope and so that the function can be immediately executed
// () the first brackets is for defintion and the second () is for call execution

((name)=>{
  console.log(`DB Connected two ${name}`) //Called as Unnamed IIFE
})("sam");

//even arrow functions are executed using iife 
// but its important to stop a iife using ; as it doesnt know where to stop or at what context