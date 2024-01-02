let marval=["alpha","beta","gama"]
let dc=["whit","blue","red"]

// marval.push(dc)
// console.log(marval);
// console.log(marval[3][1]);

const alldata=marval.concat(dc)
console.log(alldata);

//spread operator is better than concat operator

const AllData=[...marval,...dc]
console.log(AllData);

// array unde array retriew single array using flat method

let array_in_array=[1,2,3,[7,9,10],45,10,[12,4,1,[2,36,4,8]]]

let allarray = array_in_array.flat(Infinity);
console.log(allarray);


console.log(Array.isArray("pankaj"));
console.log(Array.from("pankaj"));
console.log(Array.from({name:"pankaj"}));// this give empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));