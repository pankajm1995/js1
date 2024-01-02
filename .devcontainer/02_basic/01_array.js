let myarr=[1,2,7,8,]
console.log(myarr);
//2.
let myJero=["shaktimaan","juniorg"]
console.log(myJero);

let myHero=["alloe","Jack"]
console.log(myHero);

//Array Methods
//1. push method:: this method use for add value at last

myarr.push(7,8,9)
console.log(myarr);

//2. pop Method:: this method remove last value in array

myarr.pop();
console.log(myarr);

//3.unshif Method:: this method add array 1st index
myarr.unshift(5)
console.log(myarr);
//4. shif Method:: remove 1st place in array
myarr.shift()
console.log(myarr);

// check availbility index value
console.log(myarr.includes(7));

// check index number in array
console.log(myarr.indexOf(8));

const newarray = myarr.join()

console.log(myarr);
console.log(newarray);
console.log(typeof newarray);

// slice and splice 
// slice :: (1,3) avoid end index means 3
let sliceArray =[10,15,1,5,30,12]
console.log("Original",sliceArray);
const slicemethod=sliceArray.slice(1,3)
console.log(slicemethod);

//splice :: this remove original value range (1,3) means its remove index of 1,2,3 and keep 0,4,5,6...
console.log("Original",sliceArray);
const splicemethod=sliceArray.splice(1,3)
console.log(splicemethod);
console.log("splice",sliceArray);