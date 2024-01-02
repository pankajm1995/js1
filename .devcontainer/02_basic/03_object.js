//singleton
// Object.create

// object literal

const mysym= Symbol("key1")

const User={
    name:"pankaj",
    "fullName":"Pankaj Kumar Maurya",
    [mysym]:"mykey1",
    age:29,
    city:"surat",
    email:"pankajmaurya@gmail.com",
    isLoggedin:true,
    lastLoginDays:["Monday","Friday"]
}
console.log(User.email);
console.log(User["email"]);
console.log(User["fullName"]);
console.log(User[mysym]);
console.log(typeof User[mysym]);

// change key values method
User.email="pankaj526@gmail.com"
console.log(User);
// freege your object

Object.freeze(User);
User.age= 25
console.log(User);

// function define 
let user2={
    name:"ashish",
    age:26,
    city:"surat"
}
user2.greeting=function()
{
    console.log("welcome");
}
user2.greetings=function()
{
    console.log(`Welcome ${this.name}`);
}
console.log(user2.greeting());
console.log(user2.greetings());
