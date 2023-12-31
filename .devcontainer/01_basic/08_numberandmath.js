// normal define number
const score = 450;

console.log(score);

// this is define with NUmber
const balance = new Number(1000)

console.log(balance);
// extra tostring function which is convert data in string

console.log(balance.toString());
// find length
console.log(balance.toString().length);
// to fixed used in e commerce apk

console.log(balance.toFixed(3));

// decimal k baad pricision value 

const allownumber = 123.568

console.log(allownumber.toPrecision(4));

// how to count larg number use localstring method
const num = 100000
 console.log(num.toLocaleString('en-IN'));

 //+++++++++++++++++++++++++++++++MAths++++++++++++++++++++++
 console.log(Math);
//1. absolute values which assign only +ve
console.log(Math.abs(-5));
// 2.  roun method which one assume only integer
console.log(Math.round(5.6));
//3. choose top value
console.log(Math.ceil(4.2));
//4. choose lower value
console.log(Math.floor(6.8));
//5. find min value
console.log("min value is " +Math.min(3,8,22,1,4,6,));
//6. find max value
console.log("max value is : "+Math.max(45,457,156,5756,1,46,26,235,66,564,6));
// random this value is between 0 to 1
console.log("random value" +Math.random());
// change in otp pattern
console.log("OTP IS :"+Math.floor(Math.random()*1000)+1);
// how to retriew our limit
const min =10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1))+min);