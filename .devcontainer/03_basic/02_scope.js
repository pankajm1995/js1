// let a = 20
// var b = 23
// const c = 25
// console.log(a);
// console.log(b);
// console.log(c);
//{} :: this is scope in this brackets under value will be scope if we pass above value a,b,c under scope variable then its called its under niether out side
if (true) {
    let a = 20
    var b = 23
    const c = 25
}
// console.log(a);
console.log(b);
// console.log(c);
// we were not use var variable because its break scope rules
// Note:: Scope under value will be accessble only under scope
// if we assign another value and access then we console out of scope 
//example
// var b=300
let a=300
if (true) {
    let a = 20
    var b = 23
    const c = 25
    console.log("inner:",b);
}
//console.log(b);// this is called local scope 

console.log(a);// this is global scope

//*******************************************Intresting topic******************************/
// function inside function is called clouser

function one()
{
    const usernmae="pankaj"
    function two()
    {
        const lastName="maurya"
        console.log(usernmae);
        // console.log(lastName);
    }
    // console.log(lastName); this is not called out of function
    two()
}

one()

// same method try in if 
if(true)
{
    const name="pankaj"
    if(true)
    {
        const lastname="Maurya"
        console.log(name + lastname);
    }
    // console.log(lastName);
}
// console.log(name);

//+++++++++++++++++++++++++++++++++++++++++++++++Hosting+++++++++++++++++++
console.log(one(5));// in normal funtion we call before initialization i.e. called hoasting method
function one(num)
{
    return num+5
}
console.log(one(5));

//2. function expression
// console.log(two(5)); cannot access before initialization in function expression
const two= function(num)
{
    return num+3
}
console.log(two(5));