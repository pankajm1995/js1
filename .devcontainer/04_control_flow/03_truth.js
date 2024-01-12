const useremail="pankaj@526"

if(useremail)
{
    console.log("User have email");
}else
{
    console.log("user have not email");
}


// falsy vaue = false,"",0,-0,bigint 0n,null,NaN

//truthy value="0","false","space",[],{},function(){}

// check array is empty

const name=[]
if(name.length===0)
{
    console.log("array is empty");
}

// check object is sempty

const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty");
}


//3. Important Nullish coalscing Operato(??):null undefined

let valu1;
// valu1=5;
// valu1= 5 ?? 10
// valu1= null ?? 10
valu1= undefined ?? 10

console.log(valu1);

// Ternary operator

// condition ? true: false

const icetea=100

icetea>=100?console.log("price less than 200"):console.log("price is less than 100");