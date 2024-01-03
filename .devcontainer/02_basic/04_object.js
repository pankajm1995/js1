const instaUser= {}
instaUser.Id="4635Abc"
instaUser.name="pankaj"
instaUser.city="surat"

console.log(instaUser);

const whatsApp={
    email:"pankaj@gmail.com",
    fullName:{
        name:"pankaj",
        lastName:"Maurya"
    }

}

console.log(whatsApp.fullName);
console.log(whatsApp.fullName.name);

// combine objects
const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
const obj3={5:"E",6:"F"}

// const obj4=Object.assign({},obj1,obj2,obj3);
// or we use spread method
const obj4={...obj1,...obj2,...obj3}
console.log(obj4);

// check object key values and entries method
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

// check object property
console.log(Object.hasOwnProperty("islog"));

//DESTRUCTURING :: 

const course={
    courseName:"javascript",
    fee:999,
    instructor:"pankaj"
}

const {instructor}= course;
console.log(instructor);