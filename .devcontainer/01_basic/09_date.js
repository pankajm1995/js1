//1.  normal date method whic is not readable
let date = new Date();
console.log(date);
//2. use methods for date 
console.log(date.toDateString());
// out put Mon Jan 01 2024
console.log(date.toISOString());
// out put:: 2024-01-01T19:28:14.568Z
console.log(date.toJSON());
// out put :: 2024-01-01T19:29:04.099Z
console.log(date.toLocaleDateString());
//out put:: 1/1/2024
console.log(typeof date);
// this is object

let mydate = new Date(2023,1,2)
console.log(mydate.toDateString());
// out put:: Thu Feb 02 2023

// time stamps uses for poll created means who gives first reply
let mytimestamp = Date.now();
// this is provide all time in milisecond
console.log(mytimestamp);
// change into second
console.log(Math.floor(Date.now()/1000));

let latestDate = new Date()
console.log(latestDate.getDay());
console.log(latestDate.getTimezoneOffset("EN-in"));
