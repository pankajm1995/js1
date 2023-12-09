const accountId=5648
let accountName="pankaj maurya"
var accountPass=5987
accountCity="jabalpur"
let accountState;

//accountId=63// not allowed because this is constant
/*
prefer to not use var
because of issue in  block scope and functional scope
*/
accountName="pankaj kumar maurya"
accountPass=654
accountCity="sleemnabad"
console.log(accountId);
console.table([accountId,accountName,accountPass,accountCity,accountState]);