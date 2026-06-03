function saymyname()
{
     console.log("Omm");
     console.log("Sai");
     console.log("Prasad");
}

//saymyname()

function addtwonumbers(number1, number2)
{
    return number1 + number2 ;
}

const result = addtwonumbers(9, 4);

//console.log(result);

function loggedin(username)
{
    return `${username} just logged in`;
}

//console.log(loggedin("Omm"));

function calculatecartprice(...num1)
{
    return num1;
}

console.log(calculatecartprice(200,400,700));

// here ... is the scope operator , it helps print all the passed values in the function in an array 
// hence it prints [200,400,700]

function cartprice(val1,val2, ...num1)
{
    return num1;
}

console.log(cartprice(200,400,600,800));


// here in the above case as 200 and 600 is taken by val1 and val2 , hence only then 600 and 800 is printed

const user = {
    username : "Omm",
    prices : 199
}

function handleanyobject(anyobject)
{
   console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}

handleanyobject(user);

const mynewarray = [200,400,600];

function handlearrayvalues(anyarray)
{
   return anyarray[1];
}

console.log(handlearrayvalues(mynewarray));

