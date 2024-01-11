// This method
const user={
    userName:"pankaj",
    price :6999,
    welcomeMessage:function()
    {
        console.log(`${this.userName}, Welcome in website`);// this is context 
        console.log(this);
    }
}
user.welcomeMessage();
user.userName="ashish"
user.welcomeMessage();

//NOTE: : we can not access method in function its work only object
//1. normal functio
function one()
{
    const name="pankaj"
    console.log(this);
    console.log(this.name);// we cannot use here this method
}
one();
//2. function expression 
const two=function()
{
    const name="pankaj"
    console.log(this.name);
}
two();

//3. arrow function
const three =()=>
{
    const name ="pankaj"
    console.log(this.name);
}
three();

// basic arrow function or explicit
const addtwo=(num1,num2)=>
{
    return num1+num2
}
console.log(addtwo(5,8));

// emplicit return method
// const implicit=(num1,num2)=>num1+num2;
const implicit=(num1,num2)=>(num1+num2);// maximum use in react js

// how to return object in implicit method

const imp=(num1,num2)=>({username:"pankaj"})// object return karna k liye object ko paranthesis ka use karna hai

console.log(implicit(5,10));

console.log(imp());

