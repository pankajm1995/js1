let data=0;

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <=10; i++) {
//         for(j=0;j<=10;j++)
//         {
//            console.log(`value of outer loop ${i} value of inner loop ${j}`);

//         }
         
// }
let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";
   
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += n;
                                                                                                               
   }

   // Add a new line character after contents of each line
   pattern += "\n";
}
console.log(pattern);