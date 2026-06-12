const user = {
       
     username : "peter",
     price : 999,
     welcomemessage : function() {
        console.log(`${this.username}, welcome to the website`)
        console.log(this) // this prints the complete object of the current context
     }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage()

// here the username will change and become sam when executed due to usage of this.username which simply means execution in current context
//as for the first call context remains the same hence peter is printed whereas the change of context then prints sam later

console.log(this) //this will simply print an empty object
// interesting fact ; if the same above line is printed in the console of the browser then the object window will be printed as it is the most common and considered the global object in a web browser

function chai(){
  let username = "peter"
  console.log(this.username)
}

chai() // here the above call will throw an undefined as this only works for objects and not for standalone functions

//Arrow Function

const tea = () => {
  let username = "sam"
  console.log(this.username)
}

tea()

// the above arrow function will also throw undefined

//syntax ---- () => {}

const addtwo = (num1,num2) => {
  return num1 + num2
}

console.log(addtwo(3,4))

// another way of representing the above

const addtwo = (num1,num2) => (num1 + num2) //no use of return if not used curly braces

console.log(addtwo(3,5))