var readlineSync = require('readline-sync')
let n: number = readlineSync.questionInt('Enter a number please: ');

console.log("Welcome to the factorial app!");

console.log("number = "+n);

let f: number = 1;

for(let i:number = 1; i<= n; i++){
f *=i;
console.log ("Factorial "+i+" = "+f);
}
console.log("bye!");