var readlineSync = require('readline-sync');
var n = readlineSync.questionInt('Enter a number: ');
console.log("Welcome to the factorial app!");
console.log("number = " + n);
var f = 1;
for (var i = 1; i <= n; i++) {
    f *= i;
    console.log("Factorial " + i + " = " + f);
}
console.log("bye!");
