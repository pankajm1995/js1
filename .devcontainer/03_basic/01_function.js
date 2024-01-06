function sayMyNmae(){
    console.log("Hi ! Pankaj");
}
sayMyNmae();

// function addTwoNumber(num1,num2)
// {
//     console.log(num1+num2);
// }
// addTwoNumber(15,20)

function addTwoNumber(num1,num2)
{
    let result = num1+num2;
    return result
}
const result=addTwoNumber(20,10)
console.log("Result",result);

//Task:: user login
function login(userName){
    if(userName===undefined) // or if(!userName)
    {
        console.log("plese enter a userNmae");
        return;
    }
    return `${userName} just logged in`
}
console.log(login());

// Add to cart function 
//1. use spread operator store value

function addToCart(...price)
{
    return price
}
let over=console.log(addToCart(100,200,33,564,654));
// all price store at array format


//How to pass object in function 
const user={
    name:"pankaj",
    price:203
}

function handleObject(anyobject)
{
    console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`);
}

console.log(handleObject(user));

// direct pass object
handleObject({
    name:"pankaj",
    price:35465
})


// pass array
const array=[100,12,641,1654,3413]

function returnvalue(anyobject)
{
    return anyobject[0]
}
console.log(returnvalue(array));

// direct pass with object
console.log(returnvalue([10,20,4,64]));