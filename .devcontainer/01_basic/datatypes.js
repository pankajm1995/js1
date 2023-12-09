// primitive data type
//1. string 2. number 3.boolean, 4.nll , 5.undefined, 6.symbol ,7.bigInt



// non priimitive or Refrence data type

// 1.Array 2.Objects 3.Functions


// javascript is dynamically type language

//examples

let num = 4 //==> number

let name = "pankaj" //==>string

let islogIn = true  // ==> boolean

let marks = null //==> null

let textsize = BigInt(567) //==> BigInt

//let name; //==> undefined

let userid= Symbol('123');

let anotherid = Symbol('123')

    // console.log(userid)

    // console.log(anotherid)

    // console.log(userid==anotherid);

    let heros =["shaktimaan","juniorji","aaryaman"]

    let myobj={
        name:"pankaj",
        email:"test@gmail.com",
        age:25,
    }

    const myfunction =function()
    {
        console.log("this is function")
    }

    console.log(typeof myfunction)
    console.log(typeof heros)
    console.log(typeof myobj)