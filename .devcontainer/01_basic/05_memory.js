// There ar e two types of memory
// 1. Stack (hold value of primitive data type)

// 2. Heap (hold value of non primitive data type)
let channel = "pk times"
let anothername = channel
anothername ="coding world"

// console.log(anothername)
// console.log(channel)


let userOne={
    name:"pankaj",
    email:"pankaj@gmail.com",
    age:25,
}

let userTwo= userOne

userTwo.email="pankaj@google.com"

console.log(userOne.email)
console.log(userTwo.email)