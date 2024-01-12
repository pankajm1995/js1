//if 
const temp = 40
if(temp==45)
{
    console.log("temprature is grater than 50");
}
else
{
    console.log("temp is less than 50");
}

// scope resolutiom
// 

const score=200;
if(score>100)
{
    let power="fly";
    console.log(`user power: ${power}`);
}
// if we console out of scope then its show error
//console.log(`user power: ${power}`);  // if we difine power with var then its work 


const balance =800
if(balance<500)
{
    console.log("less than 5000");
}else if(balance<800)
{
    console.log("less than 800");
}else if(balance<955)
{
    console.log("less than 955");
}else
{
    console.log("balance is less than 2000");
}


//2.
const userLogedIn =true
const useremailLoggedIn=true
const usergoogleLoggedIn=true
const userCreditCardLoggedIn=true

if(userLogedIn && userCreditCardLoggedIn)
{
    console.log("Shopping allow!");
}
if(useremailLoggedIn || usergoogleLoggedIn)
{
    console.log("Login Successfull!");
}